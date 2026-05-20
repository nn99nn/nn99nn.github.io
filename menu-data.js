// ============================================================
//  捌伍添第 85TD 菜單資料
//  ── 更新菜單時只需修改此檔案，index.html 不需動 ──
// ============================================================

const MENU = {

  // 右側輪播（未選菜時顯示）
  // type: 'youtube' → id 填 YouTube 影片 ID（網址 ?v= 後面那串）
  // type: 'image'   → src 填圖片路徑（相對於 index.html）
  intro: [
    // { type: 'youtube', id: 'dQw4w9WgXcQ' },
    // { type: 'image',   src: 'images/hero.jpg' },
  ],

  // ── 類別與菜式 ──────────────────────────────────────────
  // 每道菜格式：
  //   id      : 唯一識別碼（英文+數字，不可重複）
  //   name    : { zh, en, ja }  菜式名稱
  //   price   : 數字（NT$），無價格填 null
  //   desc    : { zh, en, ja }  菜式介紹（可空白）
  //   image   : 圖片路徑，無圖填 ''
  //   youtube : YouTube 影片 ID，無影片填 ''
  //   badge   : 標籤陣列，可選 'veg'（素）/ 'spicy'（辣）/ 'sig'（招牌）
  // ──────────────────────────────────────────────────────

  categories: [

    // ── 茗茶 ──────────────────────────────────────────────
    {
      id: 'tea',
      name: { zh: '茗茶', en: 'Chinese Tea', ja: '中国茶' },
      dishes: [
        {
          id: 'tea-01',
          name: { zh: '添第花茶', en: '85TD Signature Herbal Tea', ja: '85TD特製ハーブティー' },
          price: 150,
          desc:  { zh: '', en: '', ja: '' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'tea-02',
          name: { zh: '台灣杭菊', en: 'Taiwanese Chrysanthemum', ja: '台湾の杭菊' },
          price: 160,
          desc:  { zh: '', en: '', ja: '' },
          image: '', youtube: '', badge: ['veg'],
        },
        {
          id: 'tea-03',
          name: { zh: '香片', en: 'Jasmine Tea', ja: 'ジャスミン茶' },
          price: 120,
          desc:  { zh: '', en: '', ja: '' },
          image: '', youtube: '', badge: ['veg'],
        },
        {
          id: 'tea-04',
          name: { zh: '紅玉紅茶', en: 'Formosa Ruby Black Tea', ja: '紅玉紅茶' },
          price: 160,
          desc:  { zh: '', en: '', ja: '' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'tea-05',
          name: { zh: '阿里山烏龍', en: 'A-Li Shan Oolong Tea', ja: '阿里山ウーロン茶' },
          price: 160,
          desc:  { zh: '', en: '', ja: '' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'tea-06',
          name: { zh: '金萱', en: 'Jinshuan Tea', ja: '金萱茶' },
          price: 160,
          desc:  { zh: '', en: '', ja: '' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'tea-07',
          name: { zh: '蜜香紅茶', en: 'Honey Scent Black Tea', ja: 'みつこうこうちゃ' },
          price: 220,
          desc:  { zh: '', en: '', ja: '' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'tea-08',
          name: { zh: '陳年普洱熟餅', en: "Matured Pu'er Tea", ja: '熟成プーアル茶' },
          price: 200,
          desc:  { zh: '', en: '', ja: '' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'tea-09',
          name: { zh: '可可茶', en: 'Cocoa Tea', ja: 'ここアティー' },
          price: 180,
          desc:  { zh: '', en: '', ja: '' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'tea-10',
          name: { zh: '鐵觀音（金萱品種）', en: 'Tieghyin Tea (Jinshuan)', ja: '鉄観音（金萱品種）' },
          price: 180,
          desc:  { zh: '', en: '', ja: '' },
          image: '', youtube: '', badge: [],
        },
      ],
    },

    // ── 套餐 ──────────────────────────────────────────────
    {
      id: 'set',
      name: { zh: '套餐', en: 'Set Menu', ja: 'セットメニュー' },
      dishes: [],
    },

    // ── 點心 ──────────────────────────────────────────────
    {
      id: 'dimsum',
      name: { zh: '點心', en: 'Dim Sum', ja: '点心' },
      dishes: [
        {
          id: 'ds-01',
          name: { zh: '捌伍蝦餃皇（三件）', en: '85TD Signature Har Gow (3 pcs)', ja: '捌伍特製海老蒸し餃子（3個）' },
          price: 390,
          desc:  { zh: '過敏源：甲殼類（蝦）、小麥（餃皮）', en: 'Allergens: Crustacean (Shrimp), Wheat (Wrapper)', ja: 'アレルゲン：甲殻類（エビ）・小麦（皮）' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'ds-02',
          name: { zh: '茶香鵪鶉蛋燒賣（三件）', en: 'Tea-Infused Quail Egg Siu Mai (3 pcs)', ja: 'お茶香る鶉卵入りシュウマイ（3個）' },
          price: 360,
          desc:  { zh: '過敏源：蛋（鵪鶉蛋）、小麥（皮）', en: 'Allergens: Egg (Quail Egg), Wheat (Wrapper)', ja: 'アレルゲン：卵（うずら卵）・小麦（皮）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'ds-03',
          name: { zh: '酸菜金魚餃（二件）', en: 'Goldfish-Shaped Pickled Mustard Green Dumpling (2 pcs)', ja: '金魚形酸菜餃子（2個）' },
          price: 280,
          desc:  { zh: '過敏源：小麥（餃皮）', en: 'Allergens: Wheat (Wrapper)', ja: 'アレルゲン：小麦（皮）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'ds-04',
          name: { zh: '牛肝菌素餃（三件）', en: 'Porcini Mushroom Vegetarian Dumpling (3 pcs)', ja: 'ポルチーニ茸の精進餃子（3個）' },
          price: 270,
          desc:  { zh: '過敏源：小麥（餃皮）　如需五辛素請告知服務員', en: 'Allergens: Wheat (Wrapper)　For pungent-free Buddhist diet, please inform our staff', ja: 'アレルゲン：小麦（皮）　五葷を避けたい方はスタッフまでお申し付けください' },
          image: '', youtube: '', badge: ['veg'],
        },
        {
          id: 'ds-05',
          name: { zh: '蝦湯小籠包（三件）', en: 'Shrimp Broth Xiao Long Bao (3 pcs)', ja: '海老スープ小籠包（3個）' },
          price: 360,
          desc:  { zh: '過敏源：甲殼類（蝦）、小麥（皮）', en: 'Allergens: Crustacean (Shrimp), Wheat (Wrapper)', ja: 'アレルゲン：甲殻類（エビ）・小麦（皮）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'ds-06',
          name: { zh: '醬皇蒸鳳爪', en: 'Steamed Chicken Feet in House Signature Sauce', ja: '特製醤汁蒸し鶏の爪' },
          price: 220,
          desc:  { zh: '過敏源：大豆（豆豉）', en: 'Allergens: Soy (Fermented Black Bean)', ja: 'アレルゲン：大豆（豆豉）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'ds-07',
          name: { zh: '千絲蘿蔔酥（三件）', en: 'Shredded Turnip Puff Pastry (3 pcs)', ja: '千切り蘿蔔のパイ（3個）' },
          price: 300,
          desc:  { zh: '豬肉產地：台灣　過敏源：豬肉、小麥（酥皮）', en: 'Pork: Taiwan　Allergens: Pork, Wheat (Puff Pastry)', ja: '豚肉産地：台湾　アレルゲン：豚肉・小麦（パイ生地）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'ds-08',
          name: { zh: '海皇天鵝酥（三件）', en: 'Seafood Swan Puff Pastry (3 pcs)', ja: '海鮮白鳥形パイ（3個）' },
          price: 360,
          desc:  { zh: '過敏源：甲殼類（蝦）、小麥（酥皮）', en: 'Allergens: Crustacean (Shrimp), Wheat (Puff Pastry)', ja: 'アレルゲン：甲殻類（エビ）・小麦（パイ生地）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'ds-09',
          name: { zh: '鮑魚雞粒酥（每件）', en: 'Abalone & Diced Chicken Puff Pastry (each)', ja: 'アワビと鶏肉のパイ（1個）' },
          price: 360,
          desc:  { zh: '過敏源：軟體動物（鮑魚）、小麥（酥皮）', en: 'Allergens: Mollusc (Abalone), Wheat (Puff Pastry)', ja: 'アレルゲン：軟体動物（アワビ）・小麦（パイ生地）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'ds-10',
          name: { zh: 'XO醬炒蝦米腸', en: 'Cheung Fun Stir-Fried with XO Sauce & Dried Shrimp', ja: 'XOソース干し海老炒め腸粉' },
          price: 360,
          desc:  { zh: '過敏源：甲殼類（蝦）、軟體動物（干貝）', en: 'Allergens: Crustacean (Shrimp), Mollusc (Dried Scallop)', ja: 'アレルゲン：甲殻類（エビ）・軟体動物（干し貝柱）' },
          image: '', youtube: '', badge: ['spicy'],
        },
        {
          id: 'ds-11',
          name: { zh: '脆皮海皇腸粉', en: 'Crispy Seafood Cheung Fun', ja: 'クリスピー海鮮腸粉' },
          price: 350,
          desc:  { zh: '過敏源：甲殼類（蝦）、軟體動物（帶子）', en: 'Allergens: Crustacean (Shrimp), Mollusc (Scallop)', ja: 'アレルゲン：甲殻類（エビ）・軟体動物（帆立貝）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'ds-12',
          name: { zh: '香菜叉燒腸粉', en: 'Cilantro & Char Siu Cheung Fun', ja: 'パクチーと叉焼腸粉' },
          price: 300,
          desc:  { zh: '豬肉產地：台灣　過敏源：大豆（醬）', en: 'Pork: Taiwan　Allergens: Soy (Sauce)', ja: '豚肉産地：台湾　アレルゲン：大豆（タレ）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'ds-13',
          name: { zh: '金耳素菌腸粉', en: 'Golden Ear Fungus & Mushroom Vegetarian Cheung Fun', ja: '金耳きのこの精進腸粉' },
          price: 280,
          desc:  { zh: '過敏源：大豆（醬）　如需五辛素請告知服務員', en: 'Allergens: Soy (Sauce)　For pungent-free Buddhist diet, please inform our staff', ja: 'アレルゲン：大豆（タレ）　五葷を避けたい方はスタッフまでお申し付けください' },
          image: '', youtube: '', badge: ['veg'],
        },
      ],
    },

    // ── 燒味 ──────────────────────────────────────────────
    {
      id: 'bbq',
      name: { zh: '燒味', en: 'BBQ & Roasted Meats', ja: '焼き物' },
      dishes: [
        {
          id: 'bbq-01',
          name: { zh: '潮式滷水鵝拼盤', en: 'Teochew-Style Braised Goose Platter', ja: '潮州風ガチョウのブレイズ盛り合わせ' },
          price: 850,
          desc:  { zh: '豆腐・花生・鵝肉・鵝肝・鵝翅　豆製品：非基因改造　過敏源：花生、大豆（豆腐）', en: 'Tofu · Peanuts · Goose · Goose Liver · Wing　Soy products: non-GMO　Allergens: Peanut, Soy (Tofu)', ja: '豆腐・落花生・ガチョウ肉・レバー・手羽　大豆製品：非遺伝子組み換え　アレルゲン：落花生・大豆（豆腐）' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'bbq-02',
          name: { zh: '潮蓮靚燒鵝', en: '85TD Signature Roasted Goose', ja: '85TD 特製ローストガチョウ' },
          price: null,
          desc:  { zh: '過敏源：大豆（醬料）', en: 'Allergens: Soy (Marinade)', ja: 'アレルゲン：大豆（タレ）' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'bbq-03',
          name: { zh: '燒味拼盤', en: 'Assorted BBQ Platter', ja: '焼き物盛り合わせ' },
          price: null,
          desc:  {
            zh: '捌伍叉燒皇・瑤柱貴妃雞・潮蓮靚燒鵝・化皮烤乳豬（加價 $200）　二款 $1,480　三款 $1,580　豬肉產地：台灣',
            en: '85TD Char Siu · Conpoy Poached Chicken · Teochew Roasted Goose · Crispy Suckling Pig (+NT$200)　2 Items NT$1,480　3 Items NT$1,580　Pork: Taiwan',
            ja: '叉焼皇・干し貝柱仕立て貴妃鶏・潮州焼きガチョウ・クリスピー仔豚ロースト（+NT$200）　2種 NT$1,480　3種 NT$1,580　豚肉産地：台湾',
          },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'bbq-04',
          name: { zh: '捌伍叉燒皇', en: '85 Signature Premium Char Siu', ja: '85 特製プレミアムチャーシュー' },
          price: 1380,
          desc:  { zh: '豬肉產地：台灣', en: 'Pork: Taiwan', ja: '豚肉産地：台湾' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'bbq-05',
          name: { zh: '化皮燒乳豬', en: 'Cantonese Crispy-Skin Roasted Suckling Pig', ja: '広東風クリスピー皮の仔豚ロースト' },
          price: 1580,
          desc:  { zh: '例 $1,580　半隻 $5,080　一隻 $10,080　豬肉產地：台灣', en: 'Portion NT$1,580　Half NT$5,080　Whole NT$10,080　Pork: Taiwan', ja: '1皿 NT$1,580　ハーフ NT$5,080　1頭 NT$10,080　豚肉産地：台湾' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'bbq-06',
          name: { zh: '瑤柱貴妃雞', en: 'Conpoy Superior Broth Poached Chicken', ja: '干し貝柱の上湯仕立て貴妃鶏' },
          price: 760,
          desc:  { zh: '例 $760　半隻 $960　1隻 $1,880　過敏源：軟體動物（瑤柱）', en: 'Portion NT$760　Half NT$960　Whole NT$1,880　Allergens: Mollusc (Dried Scallop/Conpoy)', ja: '1皿 NT$760　ハーフ NT$960　1羽 NT$1,880　アレルゲン：軟体動物（干し貝柱）' },
          image: '', youtube: '', badge: [],
        },
      ],
    },

    // ── 頭盤與小食 ────────────────────────────────────────
    {
      id: 'starter',
      name: { zh: '頭盤與小食', en: 'Starters & Bites', ja: '前菜・一品料理' },
      dishes: [
        {
          id: 'st-01',
          name: { zh: '烏梅蘿蔔', en: 'Pickled Radish with Smoked Plum', ja: '燻製梅風味の大根漬け' },
          price: 250,
          desc:  { zh: '豬肉產地：台灣', en: 'Pork: Taiwan', ja: '豚肉産地：台湾' },
          image: '', youtube: '', badge: ['veg'],
        },
        {
          id: 'st-02',
          name: { zh: '醬香茄子', en: 'Braised Eggplant in Savory Bean Sauce', ja: '醤油ソースのナス煮込み' },
          price: 280,
          desc:  { zh: '過敏源：大豆（豆瓣醬）、小麥　如需五辛素請告知服務員', en: 'Allergens: Soy (Bean Paste), Wheat　For pungent-free Buddhist diet, please inform our staff', ja: 'アレルゲン：大豆（豆板醤）・小麦　五葷を避けたい方はスタッフまでお申し付けください' },
          image: '', youtube: '', badge: ['veg'],
        },
        {
          id: 'st-03',
          name: { zh: '鮮沙薑涷豬手', en: "Chilled Pig's Trotter with Fresh Sand Ginger", ja: '砂ショウガ風味の冷製豚足ゼリー寄せ' },
          price: 520,
          desc:  { zh: '豬肉產地：台灣', en: 'Pork: Taiwan', ja: '豚肉産地：台湾' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'st-04',
          name: { zh: '拍蒜青瓜海蜇頭', en: 'Smashed Cucumber & Jellyfish with Crushed Garlic', ja: 'たたきキュウリとクラゲのにんにく和え' },
          price: 650,
          desc:  { zh: '過敏源：軟體動物（海蜇）', en: 'Allergens: Mollusc (Jellyfish)', ja: 'アレルゲン：軟体動物（クラゲ）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'st-05',
          name: { zh: '水晶餚肉', en: 'Crystal Pork Terrine', ja: '豚肉の水晶煮こごり' },
          price: 580,
          desc:  { zh: '豬肉產地：台灣', en: 'Pork: Taiwan', ja: '豚肉産地：台湾' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'st-06',
          name: { zh: '川味皮蛋豆腐', en: 'Sichuan-Style Century Egg Tofu', ja: '四川風ピータン豆腐' },
          price: 280,
          desc:  { zh: '豆製品：非基因改造　過敏源：蛋（皮蛋）、大豆（豆腐）', en: 'Soy products: non-GMO　Allergens: Egg (Century Egg), Soy (Tofu)', ja: '大豆製品：非遺伝子組み換え　アレルゲン：卵（ピータン）・大豆（豆腐）' },
          image: '', youtube: '', badge: ['spicy'],
        },
        {
          id: 'st-07',
          name: { zh: '椒麻南非凍鮮鮑', en: 'Chilled South African Abalone with Sichuan Numbing Pepper Sauce', ja: '南アフリカ産鮑の冷製・山椒痺れソース' },
          price: 680,
          desc:  { zh: '過敏源：軟體動物（鮑魚）、芝麻', en: 'Allergens: Mollusc (Abalone), Sesame', ja: 'アレルゲン：軟体動物（アワビ）・ごま' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'st-08',
          name: { zh: '金沙脆魚皮', en: 'Crispy Fish Skin with Salted Egg Yolk', ja: '塩卵黄がけサクサク魚皮揚げ' },
          price: 360,
          desc:  { zh: '過敏源：魚類、蛋（鹹蛋黃）', en: 'Allergens: Fish, Egg (Salted Egg Yolk)', ja: 'アレルゲン：魚類・卵（塩卵黄）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'st-09',
          name: { zh: '麻辣脆鴨血', en: 'Spicy Crispy Duck Blood Curd', ja: '麻辣風味サクサク鴨血揚げ' },
          price: 360,
          desc:  { zh: '', en: '', ja: '' },
          image: '', youtube: '', badge: ['spicy'],
        },
        {
          id: 'st-10',
          name: { zh: '糖醋百花油條', en: 'Sweet & Sour Shrimp Paste Stuffed Cruller', ja: 'エビすり身詰めの揚げパン・甘酢ソース' },
          price: 580,
          desc:  { zh: '過敏源：甲殼類（蝦）、小麥（油條）', en: 'Allergens: Crustacean (Shrimp), Wheat (Cruller)', ja: 'アレルゲン：甲殻類（エビ）・小麦（揚げパン）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'st-11',
          name: { zh: '海膽龍皇戈渣', en: 'Sea Urchin & Lobster Bisque Crispy Savory Custard', ja: 'ウニとロブスタービスク風味のサクサク揚げ蒸し' },
          price: 680,
          desc:  { zh: '過敏源：甲殼類（龍蝦）、蛋、海膽', en: 'Allergens: Crustacean (Lobster), Egg, Sea Urchin', ja: 'アレルゲン：甲殻類（ロブスター）・卵・ウニ' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'st-12',
          name: { zh: '桂花燒鱔球', en: 'Osmanthus Sugar-Glazed Eel Balls', ja: 'キンモクセイ糖がけ鰻の揚げ団子' },
          price: 780,
          desc:  { zh: '過敏源：魚類（鱔魚）', en: 'Allergens: Fish (Eel)', ja: 'アレルゲン：魚類（うなぎ）' },
          image: '', youtube: '', badge: [],
        },
      ],
    },

    // ── 湯羹類 ────────────────────────────────────────────
    {
      id: 'soup',
      name: { zh: '湯羹', en: 'Soups', ja: 'スープ' },
      dishes: [
        {
          id: 'soup-01',
          name: { zh: '劉家金湯花膠燴燕窩', en: 'Fish Maw & Bird\'s Nest in Saffron Golden Broth', ja: 'サフラン黄金スープ・花膠と燕の巣の煮込み' },
          price: null,
          desc:  { zh: '豬肉產地：台灣　⚠ 含藏紅花，孕婦不宜　過敏源：魚類（花膠）', en: 'Pork: Taiwan　⚠ Contains saffron. Not recommended for pregnant women.　Allergens: Fish (Fish Maw)', ja: '豚肉産地：台湾　⚠ サフラン使用。妊娠中の方はご遠慮ください。　アレルゲン：魚類（花膠）' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'soup-02',
          name: { zh: '瑤柱花膠鴨絲羹', en: 'Conpoy, Fish Maw & Shredded Duck Thick Soup', ja: '干し貝柱・花膠・鴨肉のとろみスープ' },
          price: null,
          desc:  { zh: '過敏源：軟體動物（瑤柱）、魚類（花膠）', en: 'Allergens: Mollusc (Dried Scallop/Conpoy), Fish (Fish Maw)', ja: 'アレルゲン：軟体動物（干し貝柱）・魚類（花膠）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'soup-03',
          name: { zh: '雪耳海鮮豆腐羹', en: 'Snow Fungus, Seafood & Tofu Thick Soup', ja: '白きくらげ・海鮮・豆腐のとろみスープ' },
          price: null,
          desc:  { zh: '豆製品：非基因改造　過敏源：甲殼類（蝦）、軟體動物（帶子）、大豆（豆腐）', en: 'Soy products: non-GMO　Allergens: Crustacean (Shrimp), Mollusc (Scallop), Soy (Tofu)', ja: '大豆製品：非遺伝子組み換え　アレルゲン：甲殻類（エビ）・軟体動物（帆立貝）・大豆（豆腐）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'soup-04',
          name: { zh: '松茸瑤柱燉老雞', en: 'Double-Boiled Aged Hen with Matsutake & Conpoy', ja: '松茸と干し貝柱の老鶏炖スープ' },
          price: null,
          desc:  { zh: '過敏源：軟體動物（瑤柱）', en: 'Allergens: Mollusc (Dried Scallop/Conpoy)', ja: 'アレルゲン：軟体動物（干し貝柱）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'soup-05',
          name: { zh: '羊肚菌鮑魚燉鷓鴣', en: 'Double-Boiled Partridge with Morel Mushroom & Abalone', ja: 'モリーユ茸と鮑の鷓鴣炖スープ' },
          price: null,
          desc:  { zh: '過敏源：軟體動物（鮑魚）', en: 'Allergens: Mollusc (Abalone)', ja: 'アレルゲン：軟体動物（アワビ）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'soup-06',
          name: { zh: '捌伍濃湯佛跳牆', en: '85 Signature Buddha Jumps Over the Wall', ja: '85 特製「仏跳牆」濃厚スープ' },
          price: null,
          desc:  { zh: '豬肉產地：台灣　過敏源：甲殼類（蝦）、軟體動物（鮑魚、干貝）、魚類（花膠）', en: 'Pork: Taiwan　Allergens: Crustacean (Shrimp), Mollusc (Abalone, Dried Scallop), Fish (Fish Maw)', ja: '豚肉産地：台湾　アレルゲン：甲殻類（エビ）・軟体動物（アワビ・干し貝柱）・魚類（花膠）' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'soup-07',
          name: { zh: '清燉素獅子頭', en: "Clear-Braised Vegetarian Lion's Head", ja: '澄んだスープで炖た精進ライオンズヘッド' },
          price: null,
          desc:  { zh: '豆製品：非基因改造', en: 'Soy products: non-GMO', ja: '大豆製品：非遺伝子組み換え' },
          image: '', youtube: '', badge: ['veg'],
        },
      ],
    },

    // ── 海鮮類 ────────────────────────────────────────────
    {
      id: 'seafood',
      name: { zh: '海鮮', en: 'Seafood', ja: '海鮮' },
      dishes: [
        {
          id: 'sf-01',
          name: { zh: '焗釀鮮蟹蓋', en: 'Baked Crab Shell Stuffed with Crabmeat, Onion & Cream', ja: 'カニの甲羅焼き・カニ肉・玉ねぎ・クリーム詰め' },
          price: null,
          desc:  { zh: '過敏源：甲殼類（蟹）、乳製品（奶油）、蛋', en: 'Allergens: Crustacean (Crab), Dairy (Cream), Egg', ja: 'アレルゲン：甲殻類（カニ）・乳製品（クリーム）・卵' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'sf-02',
          name: { zh: '蒜香金菇蒸帶子', en: 'Steamed Scallops with Garlic & Enoki Mushroom', ja: 'ニンニク香るえのき茸と帆立蒸し' },
          price: null,
          desc:  { zh: '過敏源：軟體動物（帶子）', en: 'Allergens: Mollusc (Scallop)', ja: 'アレルゲン：軟体動物（帆立貝）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'sf-03',
          name: { zh: '黑松露蛋白蒸龍蝦球', en: 'Steamed Lobster Medallions with Black Truffle & Egg White', ja: '黒トリュフと卵白蒸しロブスターの団子' },
          price: null,
          desc:  { zh: '過敏源：甲殼類（龍蝦）、蛋', en: 'Allergens: Crustacean (Lobster), Egg', ja: 'アレルゲン：甲殻類（ロブスター）・卵' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'sf-04',
          name: { zh: '老菜脯高樑炆龍蝦尾', en: 'Braised Lobster Tail with Aged Preserved Radish & Kaoliang Wine', ja: '古漬け大根と金門高粱酒炆ロブスターテール' },
          price: null,
          desc:  { zh: '過敏源：甲殼類（龍蝦）', en: 'Allergens: Crustacean (Lobster)', ja: 'アレルゲン：甲殻類（ロブスター）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'sf-05',
          name: { zh: '豉椒鮮露筍炒鱈魚球', en: 'Stir-Fried Cod Balls with Asparagus, Black Bean & Chili', ja: 'アスパラガス・豆豉・唐辛子炒めタラの団子' },
          price: null,
          desc:  { zh: '過敏源：魚類（鱈魚）、大豆（豆豉）', en: 'Allergens: Fish (Cod), Soy (Fermented Black Bean)', ja: 'アレルゲン：魚類（タラ）・大豆（豆豉）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'sf-06',
          name: { zh: '上湯明蝦粉絲煲', en: 'Superior Broth King Prawn & Glass Noodle Casserole', ja: '上湯海老と春雨の土鍋煮込み' },
          price: null,
          desc:  { zh: '二隻起　過敏源：甲殼類（蝦）', en: 'Minimum 2 Prawns　Allergens: Crustacean (Prawn)', ja: '2尾より　アレルゲン：甲殻類（エビ）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'sf-07',
          name: { zh: '鳳凰炒帶子', en: 'Wok-Fried Scallops in Crispy Salted Egg Yolk Phoenix Nest', ja: '塩卵黄サクサク鳳凰巣の帆立炒め' },
          price: null,
          desc:  { zh: '過敏源：軟體動物（帶子）、蛋（鹹蛋黃）', en: 'Allergens: Mollusc (Scallop), Egg (Salted Egg Yolk)', ja: 'アレルゲン：軟体動物（帆立貝）・卵（塩卵黄）' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'sf-08',
          name: { zh: '黑潮軟殼龍蝦', en: 'Soft-Shell Lobster', ja: 'ソフトシェルロブスター' },
          price: null,
          desc:  { zh: '可選：避風塘 / 金沙炒　過敏源：甲殼類（龍蝦）', en: 'Choice of: Typhoon Shelter Style / Salted Egg Yolk Style　Allergens: Crustacean (Lobster)', ja: '避風塘スタイル / 塩卵黄スタイル　アレルゲン：甲殻類（ロブスター）' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'sf-09',
          name: { zh: '桂花炒素翅', en: 'Osmanthus Stir-Fried Vegetarian Shark\'s Fin', ja: 'キンモクセイ風味の精進フカヒレ炒め' },
          price: null,
          desc:  { zh: '如需五辛素請告知服務員', en: 'For pungent-free Buddhist diet, please inform our staff', ja: '五葷を避けたい方はスタッフまでお申し付けください' },
          image: '', youtube: '', badge: ['veg'],
        },
        {
          id: 'sf-10',
          name: { zh: '蔥油蒸星斑球', en: 'Steamed Leopard Grouper Medallions with Scallion Oil', ja: 'ネギ油蒸しレパードグルーパーの切り身' },
          price: null,
          desc:  { zh: '過敏源：魚類（星斑）', en: 'Allergens: Fish (Leopard Grouper)', ja: 'アレルゲン：魚類（ハタ）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'sf-11',
          name: { zh: '椒鹽中卷', en: 'Salt & Pepper Squid', ja: '塩コショウ揚げイカ' },
          price: null,
          desc:  { zh: '過敏源：軟體動物（魷魚）、小麥（炸粉）', en: 'Allergens: Mollusc (Squid), Wheat (Batter)', ja: 'アレルゲン：軟体動物（イカ）・小麦（衣）' },
          image: '', youtube: '', badge: [],
        },
      ],
    },

    // ── 活海鮮 ────────────────────────────────────────────
    {
      id: 'live_seafood',
      name: { zh: '活海鮮', en: 'Live Seafood', ja: '活き海鮮' },
      dishes: [
        {
          id: 'lsf-01',
          name: { zh: '清蒸或上湯龍蝦', en: 'Live Lobster — Steamed or Poached in Superior Broth', ja: '活きロブスター — 清蒸または上湯煮' },
          price: null,
          desc:  { zh: '蒜蓉蒸・麻香剁椒蒸・蠔油汁炆　過敏源：甲殼類（龍蝦）', en: 'Steamed with Minced Garlic · Steamed with Sesame & Chopped Chili · Braised in Oyster Sauce　Allergens: Crustacean (Lobster)', ja: 'にんにく蒸し・ごま香る刻み唐辛子蒸し・牡蠣ソース炆　アレルゲン：甲殻類（ロブスター）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'lsf-02',
          name: { zh: '南非鮮鮑魚', en: 'South African Fresh Abalone', ja: '南アフリカ産活き鮑' },
          price: null,
          desc:  { zh: '蔥油鮮沙薑蒸・薑蔥焗・避風塘炒　過敏源：軟體動物（鮑魚）', en: 'Steamed with Scallion Oil & Fresh Sand Ginger · Baked with Ginger & Scallion · Typhoon Shelter Style　Allergens: Mollusc (Abalone)', ja: 'ネギ油・砂ショウガ蒸し・生姜ネギ焗・避風塘スタイル　アレルゲン：軟体動物（アワビ）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'lsf-03',
          name: { zh: '沙公・沙母・紅蟳', en: 'Male Blue Swimming Crab · Female Blue Swimming Crab · Red Swimming Crab', ja: 'オスのガザミ・メスのガザミ・レッドクラブ' },
          price: null,
          desc:  { zh: '時價　過敏源：甲殼類（蟹）', en: 'Market Price　Allergens: Crustacean (Crab)', ja: '時価　アレルゲン：甲殻類（カニ）' },
          image: '', youtube: '', badge: [],
        },
      ],
    },

    // ── 家禽與肉類 ────────────────────────────────────────
    {
      id: 'main',
      name: { zh: '家禽與肉類', en: 'Poultry & Meat', ja: '家禽・肉料理' },
      dishes: [
        {
          id: 'main-04',
          name: { zh: '捌伍脆皮雞', en: '85 Signature Crispy-Skin Chicken', ja: '85 特製クリスピーチキン' },
          price: null,
          desc:  { zh: '半隻 / 一隻', en: 'Half / Whole', ja: 'ハーフ / 1羽' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'main-05',
          name: { zh: '鳳梨咕嚕肉', en: 'Sweet & Sour Pork with Pineapple', ja: 'パイナップル入り酢豚' },
          price: null,
          desc:  { zh: '豬肉產地：台灣　過敏源：小麥（麵粉）', en: 'Pork: Taiwan　Allergens: Wheat (Flour)', ja: '豚肉産地：台湾　アレルゲン：小麦（粉）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'main-06',
          name: { zh: '手工辣腸炒海參', en: 'Stir-Fried Sea Cucumber with Handmade Hunan Spicy Sausage', ja: '手作り湖南辣腸と海参の炒め' },
          price: null,
          desc:  { zh: '豬肉產地：台灣　過敏源：軟體動物（海參）', en: 'Pork: Taiwan　Allergens: Mollusc (Sea Cucumber)', ja: '豚肉産地：台湾　アレルゲン：軟体動物（なまこ）' },
          image: '', youtube: '', badge: ['spicy'],
        },
        {
          id: 'main-07',
          name: { zh: '一口陳醋骨', en: 'Bite-Size Aged Vinegar Pork Ribs', ja: '老酢のひと口スペアリブ' },
          price: null,
          desc:  { zh: '豬肉產地：台灣', en: 'Pork: Taiwan', ja: '豚肉産地：台湾' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'main-08',
          name: { zh: '金耳百合炒松板肉', en: 'Stir-Fried Pork Jowl with Golden Ear Fungus & Lily Bulb', ja: '金耳きのこ・百合根と松板豚頬肉の炒め' },
          price: null,
          desc:  { zh: '豬肉產地：台灣', en: 'Pork: Taiwan', ja: '豚肉産地：台湾' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'main-09',
          name: { zh: '芥末香蔥和牛粒', en: 'Wagyu Beef Cubes with Wasabi & Scallion', ja: '和牛サイコロステーキ・わさびとネギ風味' },
          price: null,
          desc:  { zh: '牛肉產地：日本　過敏源：芥末（山葵）', en: 'Beef: Japan　Allergens: Wasabi', ja: '牛肉産地：日本　アレルゲン：わさび' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'main-10',
          name: { zh: '藥膳牛筋腩煲', en: 'Herbal Beef Tendon & Brisket Casserole', ja: '薬膳牛筋・ブリスケット土鍋煮込み' },
          price: null,
          desc:  { zh: '當歸・北芪・杞子・紅棗　牛肉產地：台灣', en: 'Angelica Root · Astragalus · Wolfberry · Red Date　Beef: Taiwan', ja: '当帰・黄耆・クコの実・なつめ　牛肉産地：台湾' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'main-11',
          name: { zh: '沙嗲溫體牛肉炒菜苗', en: 'Satay Sliced Beef Stir-Fried with Vegetable Shoots', ja: '台湾産温体牛肉のサテー炒め・野菜の芽添え' },
          price: null,
          desc:  { zh: '牛肉產地：台灣　過敏源：花生（沙嗲醬）', en: 'Beef: Taiwan　Allergens: Peanut (Satay Sauce)', ja: '牛肉産地：台湾　アレルゲン：落花生（サテーソース）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'main-13',
          name: { zh: '青醬燒紐西蘭高地和羊排', en: 'Roasted New Zealand Highland Lamb Chops with Cilantro & Cashew Sauce', ja: 'ニュージーランド高地産ラムチョップのパクチーとカシューナッツソース焼き' },
          price: null,
          desc:  { zh: '過敏源：堅果（腰果）', en: 'Allergens: Tree Nut (Cashew)', ja: 'アレルゲン：木の実（カシューナッツ）' },
          image: '', youtube: '', badge: [],
        },
      ],
    },

    // ── 蔬菜、豆腐 ────────────────────────────────────────
    {
      id: 'veg',
      name: { zh: '蔬菜、豆腐', en: 'Vegetables & Tofu', ja: '野菜・豆腐' },
      dishes: [
        {
          id: 'veg-01',
          name: { zh: '瑤柱粉絲雜菜煲', en: 'Conpoy, Glass Noodle & Seasonal Vegetable Casserole', ja: '干し貝柱・春雨・雑菜の土鍋煮込み' },
          price: null,
          desc:  { zh: '過敏源：軟體動物（瑤柱）', en: 'Allergens: Mollusc (Dried Scallop/Conpoy)', ja: 'アレルゲン：軟体動物（干し貝柱）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'veg-02',
          name: { zh: '金銀蛋蒜子浸時蔬', en: 'Seasonal Vegetables Poached with Salted Egg, Century Egg & Garlic', ja: '塩卵・ピータン・にんにくで仕上げた旬野菜のスープ浸し' },
          price: null,
          desc:  { zh: '過敏源：蛋（鹹蛋、皮蛋）', en: 'Allergens: Egg (Salted Egg, Century Egg)', ja: 'アレルゲン：卵（塩卵・ピータン）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'veg-03',
          name: { zh: '欖菜干煸炒四季豆', en: 'Dry-Fried Green Beans with Olive Vegetable', ja: 'オリーブ菜とインゲンの空炒め' },
          price: null,
          desc:  { zh: '如需五辛素請告知服務員', en: 'For pungent-free Buddhist diet, please inform our staff', ja: '五葷を避けたい方はスタッフまでお申し付けください' },
          image: '', youtube: '', badge: ['veg'],
        },
        {
          id: 'veg-04',
          name: { zh: '梅菜皇蒸茄子', en: 'Steamed Eggplant with Preserved Mustard Greens in Lotus Leaf', ja: '梅菜皇と茄子の蒸し物・蓮の葉包み' },
          price: null,
          desc:  { zh: '荷葉底・大籠上　如需五辛素請告知服務員', en: 'Served in Lotus Leaf, Large Steamer　For pungent-free Buddhist diet, please inform our staff', ja: '蓮の葉包み・大蒸籠仕立て　五葷を避けたい方はスタッフまでお申し付けください' },
          image: '', youtube: '', badge: ['veg'],
        },
        {
          id: 'veg-05',
          name: { zh: '麻婆蝦腰豆腐煲', en: 'Mapo Tofu Casserole with Shrimp', ja: '海老入り麻婆豆腐土鍋' },
          price: null,
          desc:  { zh: '豆製品：非基因改造　過敏源：甲殼類（蝦）、大豆（豆腐）', en: 'Soy products: non-GMO　Allergens: Crustacean (Shrimp), Soy (Tofu)', ja: '大豆製品：非遺伝子組み換え　アレルゲン：甲殻類（エビ）・大豆（豆腐）' },
          image: '', youtube: '', badge: ['spicy'],
        },
        {
          id: 'veg-06',
          name: { zh: '時蔬選擇', en: 'Seasonal Vegetables', ja: '旬野菜' },
          price: null,
          desc:  { zh: '蒜蓉 / 清炒 / 上湯　如需五辛素請告知服務員', en: 'Minced Garlic / Plain Stir-Fried / Superior Broth　For pungent-free Buddhist diet, please inform our staff', ja: 'にんにく炒め / 清炒め / 上湯仕立て　五葷を避けたい方はスタッフまでお申し付けください' },
          image: '', youtube: '', badge: ['veg'],
        },
      ],
    },

    // ── 飯麵類 ────────────────────────────────────────────
    {
      id: 'rice',
      name: { zh: '飯麵', en: 'Rice & Noodles', ja: 'ご飯・麺' },
      dishes: [
        {
          id: 'rice-01',
          name: { zh: 'XO醬炒腸粉', en: 'Stir-Fried Rice Noodle Rolls with XO Sauce', ja: 'XOソース炒め腸粉' },
          price: null,
          desc:  { zh: '過敏源：甲殼類（蝦）、軟體動物（干貝）', en: 'Allergens: Crustacean (Shrimp), Mollusc (Dried Scallop)', ja: 'アレルゲン：甲殻類（エビ）・軟体動物（干し貝柱）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'rice-02',
          name: { zh: '毛豆雪菜炒年糕', en: 'Stir-Fried Rice Cake with Edamame & Pickled Mustard Greens', ja: '枝豆と雪菜の炒め年糕' },
          price: null,
          desc:  { zh: '過敏源：大豆（毛豆）　如需五辛素請告知服務員', en: 'Allergens: Soy (Edamame)　For pungent-free Buddhist diet, please inform our staff', ja: 'アレルゲン：大豆（枝豆）　五葷を避けたい方はスタッフまでお申し付けください' },
          image: '', youtube: '', badge: ['veg'],
        },
        {
          id: 'rice-03',
          name: { zh: '乾炒牛河', en: 'Dry-Fried Beef Ho Fun', ja: '乾炒め牛肉河粉' },
          price: null,
          desc:  { zh: '牛肉產地：台灣', en: 'Beef: Taiwan', ja: '牛肉産地：台湾' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'rice-04',
          name: { zh: '鳴哥炒出前一丁', en: "Chef Ming's Signature Stir-Fried Nissin Noodles", ja: '鳴シェフ特製出前一丁炒め' },
          price: null,
          desc:  { zh: '過敏源：小麥（出前一丁）、蛋、大豆', en: 'Allergens: Wheat (Instant Noodles), Egg, Soy', ja: 'アレルゲン：小麦（出前一丁）・卵・大豆' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'rice-05',
          name: { zh: '泡菜和牛鬆炒鴛鴦米', en: 'Kimchi & Wagyu Beef Floss Yin-Yang Fried Rice', ja: 'キムチと和牛鬆の鴛鴦ライス炒め' },
          price: null,
          desc:  { zh: '白米＋脆米　牛肉產地：日本', en: 'Steamed Rice & Crispy Puffed Rice　Beef: Japan', ja: '白米・揚げカリカリ米　牛肉産地：日本' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'rice-06',
          name: { zh: '捌伍炒飯', en: '85 Signature Fried Rice', ja: '85 特製チャーハン' },
          price: null,
          desc:  { zh: '過敏源：蛋', en: 'Allergens: Egg', ja: 'アレルゲン：卵' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'rice-07',
          name: { zh: '港式豬扒焗飯', en: 'Hong Kong-Style Baked Rice with Pork Chop', ja: '香港風ポークチョップのオーブン焗きご飯' },
          price: null,
          desc:  { zh: '豬肉產地：台灣　過敏源：乳製品（芝士）、蛋、小麥（麵粉）', en: 'Pork: Taiwan　Allergens: Dairy (Cheese), Egg, Wheat (Flour)', ja: '豚肉産地：台湾　アレルゲン：乳製品（チーズ）・卵・小麦（粉）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'rice-08',
          name: { zh: '松露蛋白炒飯', en: 'Truffle & Egg White Fried Rice', ja: 'トリュフと卵白の炒飯' },
          price: null,
          desc:  { zh: '過敏源：蛋', en: 'Allergens: Egg', ja: 'アレルゲン：卵' },
          image: '', youtube: '', badge: ['lacto'],
        },
        {
          id: 'rice-09',
          name: { zh: '鼎湖上素炆米', en: 'Dinghu-Style Premium Vegetarian Braised Rice', ja: '鼎湖山精進食材の炆ご飯' },
          price: null,
          desc:  { zh: '如需五辛素請告知服務員', en: 'For pungent-free Buddhist diet, please inform our staff', ja: '五葷を避けたい方はスタッフまでお申し付けください' },
          image: '', youtube: '', badge: ['veg'],
        },
        {
          id: 'rice-10',
          name: { zh: '榨菜火鴨絲湯米', en: 'Rice Noodle Soup with Preserved Vegetable & Roasted Duck', ja: '搾菜と焼き鴨の米粉スープ' },
          price: null,
          desc:  { zh: '', en: '', ja: '' },
          image: '', youtube: '', badge: [],
        },
      ],
    },

    // ── 甜點 ──────────────────────────────────────────────
    {
      id: 'dessert',
      name: { zh: '甜點', en: 'Dessert', ja: 'デザート' },
      dishes: [
        {
          id: 'des-01',
          name: { zh: '椰奶西米糕', en: 'Coconut Milk Sago Pudding', ja: 'ココナッツミルクのサゴプリン' },
          price: null,
          desc:  { zh: '', en: '', ja: '' },
          image: '', youtube: '', badge: ['veg'],
        },
        {
          id: 'des-02',
          name: { zh: '開心果奶凍（位上）', en: 'Pistachio Panna Cotta (individual)', ja: 'ピスタチオのパンナコッタ（1人前）' },
          price: 220, perPerson: true,
          desc:  { zh: '過敏源：乳製品（牛奶）、堅果（開心果）', en: 'Allergens: Dairy (Milk), Tree Nut (Pistachio)', ja: 'アレルゲン：乳製品（牛乳）・木の実（ピスタチオ）' },
          image: '', youtube: '', badge: ['lacto'],
        },
        {
          id: 'des-03',
          name: { zh: '楊汁甘露（位上）', en: 'Mango Pomelo Sago (individual)', ja: 'マンゴーポメロサゴ（楊枝甘露）（1人前）' },
          price: 280, perPerson: true,
          desc:  { zh: '', en: '', ja: '' },
          image: '', youtube: '', badge: ['veg'],
        },
        {
          id: 'des-04',
          name: { zh: '手磨杏仁茶湯圓（位上）', en: 'Hand-Ground Almond Milk Tea with Glutinous Rice Balls (individual)', ja: '手挽き杏仁茶と白玉団子（1人前）' },
          price: 260, perPerson: true,
          desc:  { zh: '過敏源：堅果（杏仁）', en: 'Allergens: Tree Nut (Almond)', ja: 'アレルゲン：木の実（アーモンド）' },
          image: '', youtube: '', badge: ['veg'],
        },
        {
          id: 'des-05',
          name: { zh: '流心芋頭包（三件）', en: 'Molten Taro Bun (3 pcs)', ja: 'とろけるタロイモ包子（3個）' },
          price: 270,
          desc:  { zh: '過敏源：小麥（包子皮）', en: 'Allergens: Wheat (Bun Wrapper)', ja: 'アレルゲン：小麦（生地）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'des-06',
          name: { zh: '澳門蛋撻仔（三件）', en: 'Macanese Egg Tart (3 pcs)', ja: 'マカオ風エッグタルト（3個）' },
          price: 270,
          desc:  { zh: '過敏源：蛋、乳製品（奶油）、小麥（酥皮）', en: 'Allergens: Egg, Dairy (Butter), Wheat (Pastry)', ja: 'アレルゲン：卵・乳製品（バター）・小麦（生地）' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'des-07',
          name: { zh: '班蘭椰汁西米糕（三件）', en: 'Pandan Coconut Sago Cake (3 pcs)', ja: 'パンダンリーフ椰汁サゴケーキ（3個）' },
          price: 270,
          desc:  { zh: '', en: '', ja: '' },
          image: '', youtube: '', badge: ['veg'],
        },
      ],
    },

    // ── 私藏 ──────────────────────────────────────────────
    {
      id: 'hidden',
      name: { zh: '私藏', en: 'Hidden Menu', ja: '秘蔵メニュー' },
      dishes: [
        {
          id: 'hid-01',
          name: { zh: '脆皮麻香辣子雞', en: 'Crispy-Skin Sesame Spicy Chili Chicken', ja: 'クリスピー皮・胡麻香る麻辣チキン' },
          price: null,
          desc:  { zh: '半隻 / 一隻　過敏源：芝麻、大豆（醬料）', en: 'Half / Whole　Allergens: Sesame, Soy (Marinade)', ja: 'ハーフ / 1羽　アレルゲン：ごま・大豆（タレ）' },
          image: '', youtube: '', badge: ['sig', 'spicy'],
        },
        {
          id: 'hid-02',
          name: { zh: '茶皇燒乳鴿（二天前預訂）', en: 'Tea-Fragrant Roasted Imperial Squab (Pre-order 2 days)', ja: '茶香り豊かな仔鳩のロースト（2日前予約）' },
          price: null,
          desc:  { zh: '', en: '', ja: '' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'hid-03',
          name: { zh: '富貴鮑汁八寶鴨（三天前預訂）', en: 'Fortune Eight-Treasure Duck in Abalone Sauce (Pre-order 3 days)', ja: '縁起の八宝アワビソース鴨詰め（3日前予約）' },
          price: null,
          desc:  { zh: '乾草菇・乾鮑魚・花膠・花菇・黃玉參　過敏源：軟體動物（鮑魚）', en: 'Dried Mushroom · Dried Abalone · Fish Maw · Flower Mushroom · Sea Cucumber　Allergens: Mollusc (Abalone)', ja: '乾燥きのこ・乾燥鮑・花膠・花しいたけ・なまこ　アレルゲン：軟体動物（アワビ）' },
          image: '', youtube: '', badge: ['sig'],
        },
        {
          id: 'hid-04',
          name: { zh: '古法鹽焗雞（一天前預訂）', en: 'Traditional Salt-Baked Chicken (Pre-order 1 day)', ja: '古法塩焗鶏（1日前予約）' },
          price: null,
          desc:  { zh: '文昌雞・乾蔥頭・沙薑粒・蔥段・八角', en: 'Wenchang Chicken · Shallot · Sand Ginger · Scallion · Star Anise', ja: '文昌鶏・エシャロット・砂ショウガ・ネギ・八角' },
          image: '', youtube: '', badge: [],
        },
        {
          id: 'hid-05',
          name: { zh: '現烤日本和牛叉燒（一天前預訂）', en: 'Freshly Roasted Japanese Wagyu Char Siu (Pre-order 1 day)', ja: '日本和牛の焼きたてチャーシュー（1日前予約）' },
          price: null,
          desc:  { zh: '牛肉產地：日本　過敏源：大豆（醬料）', en: 'Beef: Japan　Allergens: Soy (Marinade)', ja: '牛肉産地：日本　アレルゲン：大豆（タレ）' },
          image: '', youtube: '', badge: ['sig'],
        },
      ],
    },

    // ── 飲品 ──────────────────────────────────────────────
    {
      id: 'drinks',
      name: { zh: '飲品', en: 'Beverages', ja: '飲み物' },
      dishes: [],
    },

  ],
};
