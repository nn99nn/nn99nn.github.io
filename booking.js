const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];
const CONTACT_HINT = '，或來信 private-kitchen@goodlins.com';

function pad(n) {
  return String(n).padStart(2, '0');
}

export function formatDateZh(dateISO) {
  const [y, m, d] = dateISO.split('-').map(Number);
  return `${y} 年 ${m} 月 ${d} 日（${WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()]}）`;
}

export function monthOf(dateISO) {
  const [year, month] = dateISO.split('-').map(Number);
  return { year, month };
}

export function shiftMonth(year, month, delta) {
  const index = year * 12 + (month - 1) + delta;
  return { year: Math.floor(index / 12), month: (index % 12) + 1 };
}

/**
 * @typedef {{ date: string, day: number, status: 'out'|'open'|'booked' }} BookingCell
 */

export function buildMonthGrid(year, month, { minDate, maxDate, busyDates }) {
  const busy = new Set(busyDates);
  const leading = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
  /** @type {(BookingCell|null)[]} */
  const cells = Array.from({ length: leading }, () => null);
  for (let day = 1; day <= daysInMonth; day++) {
    const date = `${year}-${pad(month)}-${pad(day)}`;
    const status = date < minDate || date > maxDate ? 'out' : busy.has(date) ? 'booked' : 'open';
    cells.push({ date, day, status });
  }
  return cells;
}

function initBooking(root) {
  const api = root.dataset.api;
  const calendar = root.querySelector('[data-cal]');
  const grid = root.querySelector('[data-cal-grid]');
  const monthLabel = root.querySelector('[data-cal-month]');
  const prev = root.querySelector('[data-cal-prev]');
  const next = root.querySelector('[data-cal-next]');
  const form = root.querySelector('[data-booking-form]');
  const picked = root.querySelector('[data-picked]');
  const status = root.querySelector('[data-status]');
  const submit = form.querySelector('button[type="submit"]');

  let range = null;
  let view = null;
  let selected = '';

  function say(message, isError = false) {
    status.textContent = message;
    status.classList.toggle('is-error', isError);
  }

  function clearSelection() {
    selected = '';
    picked.textContent = '請先於上方選擇日期';
  }

  function render() {
    const min = monthOf(range.minDate);
    const max = monthOf(range.maxDate);
    const current = view.year * 12 + view.month;
    monthLabel.textContent = `${view.year} 年 ${view.month} 月`;
    prev.disabled = current <= min.year * 12 + min.month;
    next.disabled = current >= max.year * 12 + max.month;

    const nodes = WEEKDAYS.map((label) => {
      const el = document.createElement('span');
      el.className = 'cal__dow';
      el.textContent = label;
      return el;
    });
    for (const cell of buildMonthGrid(view.year, view.month, range)) {
      if (!cell || cell.status === 'out') {
        const blank = document.createElement('span');
        blank.className = 'cal__blank';
        nodes.push(blank);
        continue;
      }
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'cal__day';
      button.textContent = String(cell.day);
      button.dataset.date = cell.date;
      if (cell.status === 'open') {
        button.setAttribute('aria-pressed', String(cell.date === selected));
        button.setAttribute('aria-label', formatDateZh(cell.date));
      } else {
        button.disabled = true;
        button.classList.add('is-booked');
        button.setAttribute('aria-label', `${formatDateZh(cell.date)}，已預訂`);
      }
      nodes.push(button);
    }
    grid.replaceChildren(...nodes);
  }

  async function loadAvailability() {
    const res = await fetch(`${api}/availability`);
    if (!res.ok) throw new Error(`availability ${res.status}`);
    range = await res.json();
    if (selected && (range.busyDates.includes(selected) || selected < range.minDate || selected > range.maxDate)) {
      clearSelection();
    }
    view = view || monthOf(range.minDate);
    render();
  }

  grid.addEventListener('click', (event) => {
    const button = event.target.closest('.cal__day');
    if (!button || button.disabled) return;
    selected = button.dataset.date;
    picked.textContent = `用餐日期：${formatDateZh(selected)}`;
    say('');
    render();
  });
  prev.addEventListener('click', () => {
    view = shiftMonth(view.year, view.month, -1);
    render();
  });
  next.addEventListener('click', () => {
    view = shiftMonth(view.year, view.month, 1);
    render();
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!selected) {
      say('請先選擇用餐日期', true);
      return;
    }
    const data = new FormData(form);
    const payload = {
      date: selected,
      guests: Number(data.get('guests')),
      occasion: data.get('occasion'),
      name: data.get('name'),
      phone: data.get('phone'),
      email: data.get('email'),
      dietary: data.get('dietary'),
      notes: data.get('notes'),
      turnstileToken: data.get('cf-turnstile-response') || '',
    };

    submit.disabled = true;
    say('送出中…');
    try {
      const res = await fetch(`${api}/booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) {
        form.hidden = true;
        calendar.hidden = true;
        say(
          `已收到您 ${formatDateZh(payload.date)} 的預約需求。訂金匯款資訊已寄至 ${payload.email}，請於三日內完成匯款，專人確認款項後訂位方告成立。`
        );
        return;
      }
      say((body.errors || [`送出失敗，請稍後再試${CONTACT_HINT}`]).join('；'), true);
      if (res.status === 409) await loadAvailability();
    } catch {
      say(`送出失敗，請稍後再試${CONTACT_HINT}`, true);
    }
    if (window.turnstile) window.turnstile.reset();
    submit.disabled = false;
  });

  loadAvailability().catch(() => {
    calendar.hidden = true;
    form.hidden = true;
    say(`暫時無法載入可預約日期，請稍後再試${CONTACT_HINT}`, true);
  });
}

if (typeof document !== 'undefined') {
  const root = document.getElementById('booking');
  if (root) initBooking(root);
}
