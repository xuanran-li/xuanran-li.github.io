/**
 * The journal's single source of truth.
 * All records below are illustrative, not the owner's actual travel history.
 * Keep IDs stable: map pins, cards and city lists share #/journal/<id> URLs.
 * Coordinates are [latitude, longitude]; ratings are personal scores out of 5.
 * Replace sample photos and prose with your own material before publishing.
 */
export const categories = [
  { id: 'cities', label: 'Cities', singular: 'City', description: 'A collection of places, and the moments in between.' },
  { id: 'food', label: 'Food & Drink', singular: 'Food & Drink', description: 'Good coffee, long lunches, and a taste of somewhere new.' },
  { id: 'plans', label: 'Travel Plans', singular: 'Travel Plan', description: 'Thoughtful routes with a little room to get lost.' },
  { id: 'stays', label: 'Accommodations', singular: 'Accommodation', description: 'A place to put down your bags and feel a little at home.' },
];

export const entries = [
  {
    id: 'kyoto', category: 'cities', title: 'Kyoto', city: 'Kyoto', country: 'Japan', cityId: 'kyoto',
    coordinates: [35.0116, 135.7681], image: 'assets/images/kyoto.jpg', imageAlt: 'Yasaka Pagoda above a traditional Kyoto street at sunset',
    excerpt: '沿着鸭川慢慢走，把京都留给清晨的巷子、寺院和一杯咖啡。',
    subtitle: 'The art of slowing down', rating: 4.9, date: '2025-04-12', tags: ['Slow travel', 'Culture', 'Walking'],
    content: [
      { heading: 'A slower kind of city', paragraphs: ['这是一篇用于展示博客版式的京都示例游记。比起把景点排满，京都更适合留出空白：清晨走进安静的街巷，午后沿着河岸散步，在路边的小店停一会儿。', '同一条街在不同时间会有完全不同的表情。这里可以记录你真正喜欢的光线、偶然发现的小店，以及那些不在攻略里的片刻。'] },
      { heading: 'Little things to remember', paragraphs: ['将想去的地方按街区整理，步行时不必来回折返。鸭川、东山与街角咖啡馆可以各自成为半天的主题，把剩下的时间交给临时起意。', '这里的评分、日期与行程均为示例；之后可换成自己的感受、照片和实际到访时间。'] },
    ],
  },
  {
    id: 'tokyo', category: 'cities', title: 'Tokyo', city: 'Tokyo', country: 'Japan', cityId: 'tokyo',
    coordinates: [35.6762, 139.6503], image: 'assets/images/tokyo.jpg', imageAlt: 'Brightly illuminated Tokyo shopping street after rain',
    excerpt: '从明亮的街头转进安静的小巷，城市的另一面藏在下一站。',
    subtitle: 'A thousand little worlds', rating: 4.8, date: '2025-04-18', tags: ['City walks', 'Coffee', 'Architecture'],
    content: [
      { heading: 'One neighborhood at a time', paragraphs: ['东京这一页是示例内容。试着把一次旅行拆成几个街区：一天看展和逛书店，一天穿过热闹的路口，再用一个下午寻找安静的住宅街。', '霓虹灯之外，便利店的早餐、列车进站的声音和路边整齐的盆栽，同样值得成为旅途的记忆。'] },
      { heading: 'Leave room for a detour', paragraphs: ['这页可以放置自己的散步路线和沿途照片。把喜欢的地点保存到地图上，下一次再来时，就能沿着那些小小的标记继续探索。'] },
    ],
  },
  {
    id: 'shanghai', category: 'cities', title: 'Shanghai', city: 'Shanghai', country: 'China', cityId: 'shanghai',
    coordinates: [31.2304, 121.4737], image: 'assets/images/shanghai.jpg', imageAlt: 'Shanghai towers framed by trees and older buildings in soft blue light',
    excerpt: '梧桐树下的一段散步，江边的一阵风，是熟悉城市里的小旅行。',
    subtitle: 'Old streets, new perspectives', rating: 4.7, date: '2025-05-03', tags: ['City walks', 'Cafés', 'Weekend'],
    content: [
      { heading: 'An afternoon on foot', paragraphs: ['这是一份上海城市记录的示例。可以从一条喜欢的马路开始，穿过梧桐树影，在街边咖啡馆坐一会儿，再慢慢走到下一个路口。', '不必因为熟悉而省略观察。旧建筑的门牌、转角的花店、傍晚的街灯，都适合放进这本可视化的旅行笔记。'] },
      { heading: 'By the river', paragraphs: ['江边适合给一天收尾。这一栏可以补充你实际走过的路线、拍照位置和自己的感受，所有地点卡片都会与地图中的同一条记录连接。'] },
    ],
  },
  {
    id: 'paris', category: 'cities', title: 'Paris', city: 'Paris', country: 'France', cityId: 'paris',
    coordinates: [48.8566, 2.3522], image: 'assets/images/paris.jpg', imageAlt: 'Eiffel Tower and the Seine beneath a pastel evening sky',
    excerpt: '面包店的香气、河边的旧书摊，还有可以坐很久的街角。',
    subtitle: 'An invitation to wander', rating: 4.8, date: '2025-06-10', tags: ['Art', 'Bakeries', 'Walking'],
    content: [
      { heading: 'The city between the landmarks', paragraphs: ['巴黎的示例记录从一顿简单的早餐开始。沿着河岸慢慢走，给博物馆留出足够时间，也给街角那些没有名字的停留留出位置。', '旅行中值得记下的，未必总是最著名的建筑。也许是一把面向街道的椅子，或是翻到一半的旧书。'] },
      { heading: 'Keep a little notebook', paragraphs: ['这里可以记录喜欢的展览、散步片段与面包店。具体营业时间和预约信息适合在实际出行前重新确认；当前文字与评分仅用于展示。'] },
    ],
  },
  {
    id: 'lisbon', category: 'cities', title: 'Lisbon', city: 'Lisbon', country: 'Portugal', cityId: 'lisbon',
    coordinates: [38.7223, -9.1393], image: 'assets/images/lisbon.jpg', imageAlt: 'Yellow tram passing through a historic Lisbon street',
    excerpt: '黄色电车慢慢经过，沿着坡路向上，把日落留给远处的河。',
    subtitle: 'Follow the light', rating: 4.9, date: '2025-06-17', tags: ['Sunsets', 'Trams', 'Slow travel'],
    content: [
      { heading: 'Up the hill, toward the light', paragraphs: ['这篇里斯本示例记录，用坡路、电车和河风串起城市。可以用一上午探索老街，午后找个阴凉的位置喝杯咖啡，傍晚再走向开阔的景色。', '浅色的墙面把阳光反射到巷子里，瓷砖与窗框构成细小的风景。相机不必一直对准远方，身边也有很多值得停下来的画面。'] },
      { heading: 'A softer itinerary', paragraphs: ['这一页适合保存随手拍下的街景和自己的步行感受。示例行程刻意留白，之后可以替换成真实到访的地点与路线。'] },
    ],
  },
  {
    id: 'copenhagen', category: 'cities', title: 'Copenhagen', city: 'Copenhagen', country: 'Denmark', cityId: 'copenhagen',
    coordinates: [55.6761, 12.5683], image: 'assets/images/copenhagen.jpg', imageAlt: 'Colorful Nyhavn waterfront houses and moored boats in Copenhagen',
    excerpt: '运河边的彩色房子、清晨的面包，以及刚刚好的生活节奏。',
    subtitle: 'Everyday, beautifully', rating: 4.7, date: '2025-07-08', tags: ['Design', 'Waterfront', 'Bakeries'],
    content: [
      { heading: 'Small, thoughtful details', paragraphs: ['哥本哈根这一页是示例内容。运河边的建筑很适合拍照，而散步时看见的门把手、街边长椅和书店陈列，也能成为一本独特的城市相册。', '试着用一个下午观察城市的日常：骑车的人、窗边的灯和面包店的队伍。旅行的节奏可以慢到容得下一次没有目的的停留。'] },
      { heading: 'A day by the water', paragraphs: ['这页可以按时间顺序添加真实照片，记录喜欢的街区和想再去的地方。评分与日期目前用于界面演示。'] },
    ],
  },
  {
    id: 'kamo-river-coffee', category: 'food', title: 'Kamo River Coffee', city: 'Kyoto', country: 'Japan', cityId: 'kyoto',
    coordinates: [35.0047, 135.7712], image: 'assets/images/coffee.jpg', imageAlt: 'Warm café interior with hanging lamps and an illuminated café sign',
    excerpt: '一杯咖啡配一个没有安排的下午，把时间留给窗外的风景。',
    subtitle: 'A pause by the river', rating: 4.8, date: '2025-04-13', tags: ['Coffee', 'Slow afternoon'],
    content: [
      { heading: 'Coffee, with nowhere to rush', paragraphs: ['这是一张虚构的咖啡体验示例卡片，并非真实店铺推荐。名称和地图位置用于展示如何把一段饮食体验与城市关联，配图为通用咖啡馆照片。', '之后可以在这里写下实际喝到的风味、座位的舒适度、店内的声音，以及你是否愿意再次到访。'] },
      { heading: 'My notes', paragraphs: ['一份好的咖啡笔记不必专业。记住那天下午为什么令人放松，拍下杯子和桌面，就已经足够。实际店名、地址与评分可在替换内容时一并更新。'] },
    ],
    gallery: [{ src: 'assets/images/kyoto.jpg', alt: 'A traditional Kyoto street at dusk', caption: 'Around Kyoto' }],
  },
  {
    id: 'paris-bakery-morning', category: 'food', title: 'A Paris Bakery Morning', city: 'Paris', country: 'France', cityId: 'paris',
    coordinates: [48.8531, 2.3358], image: 'assets/images/bakery.jpg', imageAlt: 'Freshly baked artisan loaves arranged in a bakery',
    excerpt: '把早餐吃得慢一点，面包还温热，街道刚刚醒来。',
    subtitle: 'The best kind of morning', rating: 4.9, date: '2025-06-11', tags: ['Bakery', 'Breakfast'],
    content: [
      { heading: 'A warm start', paragraphs: ['这是用来展示 Food & Drink 分类的虚构早餐记录，不对应某一家真实面包店。图片展示的是通用面包场景，地图标记仅表示示例街区。', '可以在这里写外壳是否酥脆、内里是什么口感，以及那杯搭配的咖啡。食物之外，早餐时的光线和街景也值得留下。'] },
      { heading: 'Worth remembering', paragraphs: ['换成自己的记录时，可以补充真实店名、实际消费和推荐单品。评分是个人偏好的记录，当前数值仅用于演示。'] },
    ],
  },
  {
    id: 'shanghai-coffee-walk', category: 'food', title: 'A Shanghai Coffee Walk', city: 'Shanghai', country: 'China', cityId: 'shanghai',
    coordinates: [31.2184, 121.4579], image: 'assets/images/coffee.jpg', imageAlt: 'A café counter with chalkboard menus and warm pendant lamps',
    excerpt: '在树影下散步，找个靠窗的位置，看一下午的人来人往。',
    subtitle: 'Under the plane trees', rating: 4.6, date: '2025-05-04', tags: ['Coffee', 'Neighborhood'],
    content: [
      { heading: 'A familiar kind of escape', paragraphs: ['这是一段虚构的上海咖啡散步示例，不对应真实商户。通用咖啡馆图片和示例坐标用于展示页面效果。', '这里适合记录一杯咖啡与一段散步如何组合成一个下午：从哪条路出发，在哪个街角停下，又发现了什么新的细节。'] },
      { heading: 'A place to return to', paragraphs: ['等你加入自己的内容后，可以把喜欢的店铺固定在地图上。卡片、地图与城市列表中的相关链接会指向同一篇文章。'] },
    ],
  },
  {
    id: 'kyoto-weekend', category: 'plans', title: 'A Weekend in Kyoto', city: 'Kyoto', country: 'Japan', cityId: 'kyoto',
    coordinates: [34.9948, 135.785], image: 'assets/images/kyoto.jpg', imageAlt: 'Traditional buildings and Yasaka Pagoda in Kyoto at sunset',
    excerpt: '两天不赶路：一天留给东山，一天留给河岸和偶然遇见的小店。',
    subtitle: 'Two days, at your own pace', rating: 4.8, date: '2025-04-10', tags: ['2 days', 'Walking', 'Weekend'],
    content: [
      { heading: 'Day 01 · Old streets', paragraphs: ['这是一份示例路线。第一天用东山作为散步主题，给街巷和庭院留出时间。中午安排一段休息，傍晚再沿着街道慢慢返回。'] },
      { heading: 'Day 02 · Along the river', paragraphs: ['第二天可以把节奏放得更慢：河岸散步、咖啡、书店，选两三件最想做的事就足够。不要把每段空白都填满，留一点时间给临时的发现。'] },
      { heading: 'Make it your own', paragraphs: ['地图标记代表这份路线的示例起点，并非完整导航。之后可补充自己的实际路线、交通方式、预算与照片；当前评分用于展示。'] },
    ],
  },
  {
    id: 'lisbon-slow-weekend', category: 'plans', title: 'A Slow Weekend in Lisbon', city: 'Lisbon', country: 'Portugal', cityId: 'lisbon',
    coordinates: [38.7112, -9.1303], image: 'assets/images/lisbon.jpg', imageAlt: 'Lisbon tram on a narrow street framed by historic buildings',
    excerpt: '从旧城走向河岸，把午后的时间放空，把傍晚留给日落。',
    subtitle: 'Hills, little streets, and golden light', rating: 4.7, date: '2025-06-15', tags: ['2 days', 'Slow travel', 'Sunsets'],
    content: [
      { heading: 'Day 01 · Wander uphill', paragraphs: ['这是一份用于展示的两日行程。第一天从旧城街巷出发，顺着坡路慢慢走。把午后留给休息，傍晚再找一处开阔的地方看城市的光线变化。'] },
      { heading: 'Day 02 · Follow the river', paragraphs: ['第二天以河岸散步为主题，途中加入自己真正感兴趣的咖啡馆或展览。比起覆盖更多地方，这份示例更在意舒服的节奏。'] },
      { heading: 'Room for the unexpected', paragraphs: ['标记位置是示例起点。实际使用时可补充交通和路程信息，并把沿途喜欢的地点单独做成卡片，与这篇行程互相连接。'] },
    ],
  },
  {
    id: 'kyoto-quiet-stay', category: 'stays', title: 'A Quiet Kyoto Stay', city: 'Kyoto', country: 'Japan', cityId: 'kyoto',
    coordinates: [35.0001, 135.7602], image: 'assets/images/stay.jpg', imageAlt: 'A softly lit guest room with a large bed and warm neutral furnishings',
    excerpt: '结束一天的步行之后，有一盏暖灯和一张舒服的床就很好。',
    subtitle: 'A soft landing after a long day', rating: 4.7, date: '2025-04-12', tags: ['Quiet', 'Comfort', 'City stay'],
    content: [
      { heading: 'A little home away from home', paragraphs: ['这是一张虚构的住宿示例卡片，不代表真实酒店或民宿。配图为通用客房照片，地图标记为演示位置。', '未来可以在这里写入住的第一印象、房间采光、安静程度和睡眠体验。真实的细节往往比一串设施清单更有参考价值。'] },
      { heading: 'The details that matter', paragraphs: ['可补充实际房型、入住日期、步行交通和自己的评分。当前没有预订功能，所有图片与文字只用于展示博客结构。'] },
    ],
  },
  {
    id: 'copenhagen-city-stay', category: 'stays', title: 'A Copenhagen City Stay', city: 'Copenhagen', country: 'Denmark', cityId: 'copenhagen',
    coordinates: [55.6698, 12.5583], image: 'assets/images/stay.jpg', imageAlt: 'Comfortable guest room with soft lighting and warm wood details',
    excerpt: '简单的房间、柔和的光线，让旅途里的早晨也变得从容。',
    subtitle: 'Simple things, thoughtfully done', rating: 4.6, date: '2025-07-08', tags: ['Design', 'Comfort', 'City stay'],
    content: [
      { heading: 'Somewhere to settle in', paragraphs: ['这篇住宿笔记为虚构示例，不指向真实住宿商家。图片展示通用客房，坐标仅表示演示街区。', '可以把房间里喜欢的设计、周边环境，以及从住宿走向城市的第一段路都记录在这里。'] },
      { heading: 'Morning rituals', paragraphs: ['真正入住后，再补充自己的早餐体验、夜间噪音和交通感受。示例评分与日期可以直接在数据文件中替换。'] },
    ],
    gallery: [{ src: 'assets/images/copenhagen.jpg', alt: 'Colorful buildings along Nyhavn in Copenhagen', caption: 'Around Copenhagen' }],
  },
].map((entry) => ({ demo: true, ...entry }));

export const imageCredits = [
  { file: 'assets/images/kyoto.jpg', url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e', credit: 'Unsplash', subject: 'Kyoto' },
  { file: 'assets/images/tokyo.jpg', url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf', credit: 'Unsplash', subject: 'Tokyo' },
  { file: 'assets/images/shanghai.jpg', url: 'https://unsplash.com/photos/_klbOmCI05I', credit: 'George Dagerotip / Unsplash', subject: 'Shanghai' },
  { file: 'assets/images/paris.jpg', url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34', credit: 'Unsplash', subject: 'Paris' },
  { file: 'assets/images/lisbon.jpg', url: 'https://unsplash.com/photos/ljhCEaHYWJ8', credit: 'Aayush Gupta / Unsplash', subject: 'Lisbon' },
  { file: 'assets/images/copenhagen.jpg', url: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc', credit: 'Unsplash', subject: 'Copenhagen' },
  { file: 'assets/images/coffee.jpg', url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb', credit: 'Unsplash', subject: 'Illustrative café interior; not a depicted venue' },
  { file: 'assets/images/bakery.jpg', url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff', credit: 'Unsplash', subject: 'Illustrative bread photograph; not a depicted venue' },
  { file: 'assets/images/stay.jpg', url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32', credit: 'Unsplash', subject: 'Illustrative guest room; not a depicted accommodation' },
];

export const getEntry = (id) => entries.find((entry) => entry.id === id);
export const getCategory = (id) => categories.find((category) => category.id === id);
export const entryUrl = (entryOrId) => `#/journal/${typeof entryOrId === 'string' ? entryOrId : entryOrId.id}`;
