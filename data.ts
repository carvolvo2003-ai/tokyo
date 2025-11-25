import { DayPlan, LocationType, HotelInfo, FlightInfo } from './types';

// Enriched data based on the PDF content
export const itineraryData: DayPlan[] = [
  {
    date: '10/23',
    dayOfWeek: '週四',
    title: '抵達日本與橫濱',
    weather: { temp: '18°C', condition: 'Cloudy', icon: 'Cloud' },
    items: [
      {
        id: '1-1',
        time: '15:20',
        type: LocationType.Flight,
        title: '抵達成田機場 (NRT)',
        description: '樂桃 MM626 抵達 T1。過海關需出示 VISIT JAPAN QR Code。',
        tips: '出海關後找「鉄道」標示下到B1。尋找紅色NEX標示。',
        tags: ['入境', 'Visit Japan'],
        locationStr: 'Narita Airport Terminal 1'
      },
      {
        id: '1-2',
        type: LocationType.Transport,
        title: '搭乘 NEX 成田特快',
        description: '前往橫濱站 (Yokohama)。來回約4000日幣 (搭配周遊券)。',
        tips: '記得刷QR Code進站。如果趕不上車，請聯絡家人。車程約90分鐘。',
        tags: ['交通票券'],
        locationStr: 'Narita Airport Station'
      },
      {
        id: '1-3',
        type: LocationType.Transport,
        title: '轉乘港未來線',
        description: '在橫濱站轉乘「港未來線 (Minatomirai Line)」(藍色M標誌)。',
        tips: '搭往「馬車道 (Bashamichi)」站，這是離飯店最近的車站。',
        tags: ['地鐵'],
        locationStr: 'Yokohama Station'
      },
      {
        id: '1-4',
        type: LocationType.Hotel,
        title: 'Check-in 橫濱灣大廈 APA',
        description: 'APA Hotel & Resort Yokohama Bay Tower。',
        tips: '飯店有大浴場，記得確認開放時間。晚餐可在橫濱站或飯店附近解決。',
        tags: ['Check-in', '大浴場'],
        locationStr: 'APA Hotel & Resort Yokohama Bay Tower'
      }
    ]
  },
  {
    date: '10/24',
    dayOfWeek: '週五',
    title: '橫濱漫遊',
    weather: { temp: '20°C', condition: 'Sunny', icon: 'Sun' },
    items: [
      {
        id: '2-1',
        time: '09:00',
        type: LocationType.Spot,
        title: '港未來區散策',
        description: '包含帆船日本丸、櫻木町。',
        tips: '推薦早上去山下公園散步，看看海港風景。',
        tags: ['散步'],
        locationStr: 'Nippon Maru Memorial Park'
      },
      {
        id: '2-2',
        time: '12:00',
        type: LocationType.Food,
        title: '橫濱中華街',
        description: '日本最大的中華街，午餐推薦在此享用。',
        tips: '必吃：生煎包 (鵬天閣)、熊貓包子。小心路上拉客。',
        tags: ['必吃美食', '午餐'],
        locationStr: 'Yokohama Chinatown'
      },
      {
        id: '2-3',
        time: '15:00',
        type: LocationType.Spot,
        title: '紅磚倉庫 (Red Brick Warehouse)',
        description: '充滿文創小店與甜點店。',
        tips: '傍晚時分點燈非常浪漫。適合買伴手禮。',
        tags: ['購物', '拍照'],
        locationStr: 'Yokohama Red Brick Warehouse'
      },
      {
        id: '2-4',
        time: '18:00',
        type: LocationType.Spot,
        title: 'YOKOHAMA AIR CABIN',
        description: '搭乘空中纜車回到櫻木町。',
        tips: '可欣賞著名的橫濱摩天輪燈光秀 (Cosmo Clock 21)。',
        tags: ['夜景', '體驗'],
        locationStr: 'YOKOHAMA AIR CABIN'
      }
    ]
  },
  {
    date: '10/25',
    dayOfWeek: '週六',
    title: '移動至鎌倉',
    weather: { temp: '21°C', condition: 'Sunny', icon: 'Sun' },
    items: [
      {
        id: '3-1',
        type: LocationType.Transport,
        title: '前往鎌倉',
        description: '橫濱站搭乘 JR 橫須賀線 (JO) 往久里濱/逗子方向。',
        tips: '約25分鐘。在「鎌倉站」下車。',
        tags: ['JR'],
        locationStr: 'Kamakura Station'
      },
      {
        id: '3-2',
        type: LocationType.Hotel,
        title: 'Check-in 源飯店 (GEN HOTEL)',
        description: '位於鎌倉熱門景點區。',
        tips: '離鶴岡八幡宮很近。',
        tags: ['Check-in'],
        locationStr: 'GEN HOTEL KAMAKURA'
      },
      {
        id: '3-3',
        type: LocationType.Spot,
        title: '鶴岡八幡宮 & 小町通',
        description: '鎌倉的地標神社與熱鬧的商店街。',
        tips: '小町通必吃：抹茶冰淇淋、鎌倉半月燒(伴手禮)。',
        tags: ['必買伴手禮', '歷史'],
        locationStr: 'Tsurugaoka Hachimangu'
      }
    ]
  },
  {
    date: '10/26',
    dayOfWeek: '週日',
    title: '鎌倉深度遊',
    weather: { temp: '19°C', condition: 'Cloudy', icon: 'Cloud' },
    items: [
      {
        id: '4-1',
        type: LocationType.Spot,
        title: '錢洗弁財天宇賀福神社',
        description: '岩窟中的神社，傳說洗錢會倍增。',
        tips: '攻略：準備硬幣或紙鈔，用竹簍在泉水沖洗，洗過的錢要盡快花掉才能招財！',
        tags: ['求財', '特色體驗'],
        locationStr: 'Zeniarai Benzaiten Ugafuku Shrine'
      },
      {
        id: '4-2',
        type: LocationType.Spot,
        title: '佐助稻荷神社',
        description: '充滿狐狸雕像與紅色鳥居的神社。',
        tips: '祈求出人頭地、開運的神社。',
        tags: ['拍照', '秘境'],
        locationStr: 'Sasuke Inari Shrine'
      }
    ]
  },
  {
    date: '10/27',
    dayOfWeek: '週一',
    title: '江之島與湘南海岸',
    weather: { temp: '20°C', condition: 'Sunny', icon: 'Sun' },
    items: [
      {
        id: '5-1',
        type: LocationType.Transport,
        title: '江之電一日遊',
        description: '使用江之電穿梭各站。',
        tips: '鎌倉高校前站：灌籃高手平交道 (人多請注意安全)。',
        tags: ['江之電', '動漫聖地'],
        locationStr: 'Kamakura-kōkō-mae Station'
      },
      {
        id: '5-2',
        type: LocationType.Spot,
        title: '鎌倉大佛 (高德院)',
        description: '國寶級露天青銅大佛。',
        tips: '可以付費進入大佛身體內部參觀。',
        tags: ['地標'],
        locationStr: 'Kotoku-in'
      },
      {
        id: '5-3',
        type: LocationType.Spot,
        title: '江之島',
        description: '跨海大橋、江島神社、海蠟燭展望台。',
        tips: '必吃：整隻章魚仙貝、吻仔魚丼飯。爬樓梯較多，可購買手扶梯票 (Escalator)。岩屋洞窟值得一去。',
        tags: ['必吃美食', '健行'],
        locationStr: 'Enoshima'
      }
    ]
  },
  {
    date: '10/28',
    dayOfWeek: '週二',
    title: '移動至箱根',
    weather: { temp: '16°C', condition: 'Rain', icon: 'CloudRain' },
    items: [
      {
        id: '6-1',
        type: LocationType.Transport,
        title: '鎌倉 -> 箱根',
        description: 'JR橫須賀線至「大船」，轉東海道線至「小田原」，再轉箱根登山線。',
        tips: '過程約需轉乘兩次。到達「箱根湯本」站。',
        tags: ['移動日'],
        locationStr: 'Hakone-Yumoto Station'
      },
      {
        id: '6-2',
        type: LocationType.Hotel,
        title: 'Check-in 天成園 (Tenseien)',
        description: '高級溫泉飯店，附早晚餐。',
        tips: '飯店庭園有玉簾瀑布與神社。記得去頂樓露天風呂泡湯，景色絕佳。',
        tags: ['溫泉', '一泊二食'],
        locationStr: 'Hakone Yumoto Onsen Tenseien'
      }
    ]
  },
  {
    date: '10/29',
    dayOfWeek: '週三',
    title: '箱根周遊',
    weather: { temp: '15°C', condition: 'Cloudy', icon: 'Cloud' },
    items: [
      {
        id: '7-1',
        type: LocationType.Spot,
        title: '大涌谷',
        description: '搭乘空中纜車前往，欣賞硫磺地形。',
        tips: '必吃：黑蛋 (吃一顆延壽7年)。天氣好可看見富士山。',
        tags: ['必吃美食', '自然奇景'],
        locationStr: 'Owakudani'
      },
      {
        id: '7-2',
        type: LocationType.Spot,
        title: '箱根神社 / 水上鳥居',
        description: '蘆之湖畔的知名打卡點。',
        tips: '搭乘海賊船遊蘆之湖。',
        tags: ['拍照', '遊船'],
        locationStr: 'Hakone Shrine'
      },
      {
        id: '7-3',
        type: LocationType.Spot,
        title: '雕刻之森美術館 (可選)',
        description: '戶外大型藝術品展示。',
        tips: '視時間安排，若喜歡藝術非常推薦。',
        tags: ['藝術'],
        locationStr: 'The Hakone Open-Air Museum'
      }
    ]
  },
  {
    date: '10/30',
    dayOfWeek: '週四',
    title: '返回橫濱',
    weather: { temp: '19°C', condition: 'Sunny', icon: 'Sun' },
    items: [
      {
        id: '8-1',
        type: LocationType.Transport,
        title: '箱根 -> 橫濱',
        description: '原路返回 (箱根登山線 -> JR東海道 -> JR橫須賀)。',
        tips: '約4小時車程，可以在大船或小田原稍作休息。',
        tags: ['長途移動'],
        locationStr: 'Yokohama Station'
      },
      {
        id: '8-2',
        type: LocationType.Food,
        title: '晚餐：AFURI 阿夫利拉麵',
        description: 'PDF推薦晚餐。',
        tips: '必點：柚子鹽拉麵、炙燒叉燒飯。清爽系拉麵代表。',
        tags: ['必吃美食', '拉麵'],
        locationStr: 'AFURI Yokohama Landmark Plaza'
      },
      {
        id: '8-3',
        type: LocationType.Hotel,
        title: '入住橫濱飯店',
        description: 'Check-in 第四家飯店 (未指定，假設同第一天或附近)。',
        tags: ['住宿'],
        locationStr: 'Yokohama Station'
      }
    ]
  },
  {
    date: '10/31',
    dayOfWeek: '週五',
    title: '返程',
    weather: { temp: '18°C', condition: 'Sunny', icon: 'Sun' },
    items: [
      {
        id: '9-1',
        type: LocationType.Transport,
        title: '前往成田機場',
        description: '橫濱站搭乘 NEX 成田特快。',
        tips: '請預留充足時間，建議發車前20分鐘抵達月台。',
        tags: ['NEX'],
        locationStr: 'Yokohama Station'
      },
      {
        id: '9-2',
        time: '14:00',
        type: LocationType.Flight,
        title: '長榮 BR197 起飛',
        description: '14:00 起飛 -> 17:05 抵達台北。',
        tips: 'T1航廈。行李額度23kg。',
        tags: ['回程'],
        locationStr: 'Narita Airport Terminal 1'
      }
    ]
  }
];

export const hotels: HotelInfo[] = [
  {
    name: 'APA Hotel & Resort Yokohama Bay Tower',
    dates: '10/23 (1晚)',
    address: '橫濱馬車道',
    notes: '大浴場、景觀佳'
  },
  {
    name: 'GEN HOTEL KAMAKURA',
    dates: '10/25 - 10/28 (3晚)',
    address: '鎌倉若宮大路',
    notes: '不含早餐，離八幡宮近'
  },
  {
    name: 'Hakone Tenseien Hotel (天成園)',
    dates: '10/28 - 10/30 (2晚)',
    address: '箱根湯本',
    notes: '含早晚餐，頂樓露天溫泉'
  }
];

export const flights: FlightInfo[] = [
  {
    airline: 'Peach 樂桃',
    flightNo: 'MM626',
    route: 'TPE (10:50) -> NRT (15:20)',
    time: '去程 10/23',
    baggage: '不託運 / 1顆20kg (依購票)'
  },
  {
    airline: 'EVA Air 長榮',
    flightNo: 'BR197',
    route: 'NRT (14:00) -> TPE (17:05)',
    time: '回程 10/31',
    baggage: '1顆23kg'
  }
];
