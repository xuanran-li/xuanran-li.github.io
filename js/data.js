/**
 * 项目内容编辑入口：地图、城市列表、分类卡片和详情页都读取这里。
 * 快速定位：搜索 “CITY: Hefei” 等英文城市名，再编辑下面的四个内容块：
 *   cityStory = 城市介绍；food = Food & Drinks；
 *   accommodation = Accommodations；attraction = Attractions。
 * 每块的 title / excerpt / content / image 可分别修改标题、摘要、正文和图片。
 * 图片路径相对网站根目录；coordinates 为 [纬度, 经度]，rating 为 0–5。
 * googleMapsQuery 控制 Google Maps 搜索；可添加 googleMapsUrl 指定分享链接，
 * 或添加 googleMapsEmbedUrl 指定 Google Maps “嵌入地图”中的 iframe src。
 * 各示例的坐标是城市周边的近似位置，特意错开以便点击，不是真实商户地址。
 * 所有文案、评分、日期和配图均为示例；照片不代表对应城市或商户的实景。
 * 城市顺序就是这里的顺序。id 关联地图、卡片和 #/journal/<id>，请尽量保持稳定。
 * 新增同类地点：将 food / accommodation / attraction 改为对象数组，
 * 为新增对象填写独立 id。每个对象都可以覆盖文末 entryDefaults 的默认值。
 */
export const categories = [
  { id: 'cities', label: 'Cities', singular: 'City', description: 'A collection of places, and the moments in between.' },
  { id: 'food', label: 'Food & Drinks', singular: 'Food & Drinks', description: 'Good coffee, long lunches, and a taste of somewhere new.' },
  { id: 'attractions', label: 'Attractions', singular: 'Attraction', description: 'Places to explore, little discoveries, and a reason to wander.' },
  { id: 'stays', label: 'Accommodations', singular: 'Accommodation', description: 'A place to put down your bags and feel a little at home.' },
];

// ===== 城市与地点内容：每个 CITY 区块都可独立编辑 =====
export const cityGuides = [
  // ===== 01 · CITY: Hefei, China · 合肥 =====
  {
    id: "hefei", city: "Hefei", country: "China",
    coordinates: [31.8206, 117.2272], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Hefei",
      image: 'assets/images/shanghai.jpg', imageAlt: "Illustrative city photograph of Shanghai; not a photograph of Hefei",
      googleMapsQuery: "Hefei, Anhui, China",
      excerpt: "从一段散步开始认识合肥，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是合肥的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Hefei Café",
      coordinates: [31.8276, 117.2342], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Hefei, Anhui, China",
      excerpt: "在合肥找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条合肥的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Hefei Guesthouse",
      coordinates: [31.8126, 117.2332], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Hefei, Anhui, China",
      excerpt: "给合肥的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条合肥的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Hefei City Walk",
      coordinates: [31.8266, 117.2182], // 示例位置，不代表真实景点入口。
      image: 'assets/images/shanghai.jpg', imageAlt: "Illustrative streetscape of Shanghai; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Hefei, Anhui, China",
      excerpt: "把合肥的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是合肥的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 02 · CITY: Wuhu, China · 芜湖 =====
  {
    id: "wuhu", city: "Wuhu", country: "China",
    coordinates: [31.3344, 118.3622], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Wuhu",
      image: 'assets/images/kyoto.jpg', imageAlt: "Illustrative city photograph of Kyoto; not a photograph of Wuhu",
      googleMapsQuery: "Wuhu, Anhui, China",
      excerpt: "从一段散步开始认识芜湖，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是芜湖的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Wuhu Café",
      coordinates: [31.3414, 118.3692], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Wuhu, Anhui, China",
      excerpt: "在芜湖找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条芜湖的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Wuhu Guesthouse",
      coordinates: [31.3264, 118.3682], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Wuhu, Anhui, China",
      excerpt: "给芜湖的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条芜湖的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Wuhu City Walk",
      coordinates: [31.3404, 118.3532], // 示例位置，不代表真实景点入口。
      image: 'assets/images/kyoto.jpg', imageAlt: "Illustrative streetscape of Kyoto; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Wuhu, Anhui, China",
      excerpt: "把芜湖的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是芜湖的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 03 · CITY: Nanjing, China · 南京 =====
  {
    id: "nanjing", city: "Nanjing", country: "China",
    coordinates: [32.0603, 118.7969], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Nanjing",
      image: 'assets/images/tokyo.jpg', imageAlt: "Illustrative city photograph of Tokyo; not a photograph of Nanjing",
      googleMapsQuery: "Nanjing, Jiangsu, China",
      excerpt: "从一段散步开始认识南京，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是南京的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Nanjing Café",
      coordinates: [32.0673, 118.8039], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Nanjing, Jiangsu, China",
      excerpt: "在南京找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条南京的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Nanjing Guesthouse",
      coordinates: [32.0523, 118.8029], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Nanjing, Jiangsu, China",
      excerpt: "给南京的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条南京的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Nanjing City Walk",
      coordinates: [32.0663, 118.7879], // 示例位置，不代表真实景点入口。
      image: 'assets/images/tokyo.jpg', imageAlt: "Illustrative streetscape of Tokyo; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Nanjing, Jiangsu, China",
      excerpt: "把南京的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是南京的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 04 · CITY: Huangshan, China · 黄山 =====
  {
    id: "huangshan", city: "Huangshan", country: "China",
    coordinates: [29.7147, 118.3376], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Huangshan",
      image: 'assets/images/paris.jpg', imageAlt: "Illustrative city photograph of Paris; not a photograph of Huangshan",
      googleMapsQuery: "Huangshan City, Anhui, China",
      excerpt: "从一段散步开始认识黄山，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是黄山的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Huangshan Café",
      coordinates: [29.7217, 118.3446], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Huangshan City, Anhui, China",
      excerpt: "在黄山找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条黄山的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Huangshan Guesthouse",
      coordinates: [29.7067, 118.3436], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Huangshan City, Anhui, China",
      excerpt: "给黄山的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条黄山的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Huangshan City Walk",
      coordinates: [29.7207, 118.3286], // 示例位置，不代表真实景点入口。
      image: 'assets/images/paris.jpg', imageAlt: "Illustrative streetscape of Paris; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Huangshan City, Anhui, China",
      excerpt: "把黄山的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是黄山的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 05 · CITY: Fuyang, China · 阜阳 =====
  {
    id: "fuyang", city: "Fuyang", country: "China",
    coordinates: [32.8901, 115.8142], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Fuyang",
      image: 'assets/images/lisbon.jpg', imageAlt: "Illustrative city photograph of Lisbon; not a photograph of Fuyang",
      googleMapsQuery: "Fuyang, Anhui, China",
      excerpt: "从一段散步开始认识阜阳，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是阜阳的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Fuyang Café",
      coordinates: [32.8971, 115.8212], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Fuyang, Anhui, China",
      excerpt: "在阜阳找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条阜阳的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Fuyang Guesthouse",
      coordinates: [32.8821, 115.8202], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Fuyang, Anhui, China",
      excerpt: "给阜阳的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条阜阳的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Fuyang City Walk",
      coordinates: [32.8961, 115.8052], // 示例位置，不代表真实景点入口。
      image: 'assets/images/lisbon.jpg', imageAlt: "Illustrative streetscape of Lisbon; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Fuyang, Anhui, China",
      excerpt: "把阜阳的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是阜阳的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 06 · CITY: Hangzhou, China · 杭州 =====
  {
    id: "hangzhou", city: "Hangzhou", country: "China",
    coordinates: [30.2741, 120.1551], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Hangzhou",
      image: 'assets/images/copenhagen.jpg', imageAlt: "Illustrative city photograph of Copenhagen; not a photograph of Hangzhou",
      googleMapsQuery: "Hangzhou, Zhejiang, China",
      excerpt: "从一段散步开始认识杭州，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是杭州的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Hangzhou Café",
      coordinates: [30.2811, 120.1621], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Hangzhou, Zhejiang, China",
      excerpt: "在杭州找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条杭州的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Hangzhou Guesthouse",
      coordinates: [30.2661, 120.1611], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Hangzhou, Zhejiang, China",
      excerpt: "给杭州的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条杭州的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Hangzhou City Walk",
      coordinates: [30.2801, 120.1461], // 示例位置，不代表真实景点入口。
      image: 'assets/images/copenhagen.jpg', imageAlt: "Illustrative streetscape of Copenhagen; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Hangzhou, Zhejiang, China",
      excerpt: "把杭州的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是杭州的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 07 · CITY: Guangzhou, China · 广州 =====
  {
    id: "guangzhou", city: "Guangzhou", country: "China",
    coordinates: [23.1291, 113.2644], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Guangzhou",
      image: 'assets/images/shanghai.jpg', imageAlt: "Illustrative city photograph of Shanghai; not a photograph of Guangzhou",
      googleMapsQuery: "Guangzhou, Guangdong, China",
      excerpt: "从一段散步开始认识广州，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是广州的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Guangzhou Café",
      coordinates: [23.1361, 113.2714], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Guangzhou, Guangdong, China",
      excerpt: "在广州找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条广州的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Guangzhou Guesthouse",
      coordinates: [23.1211, 113.2704], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Guangzhou, Guangdong, China",
      excerpt: "给广州的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条广州的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Guangzhou City Walk",
      coordinates: [23.1351, 113.2554], // 示例位置，不代表真实景点入口。
      image: 'assets/images/shanghai.jpg', imageAlt: "Illustrative streetscape of Shanghai; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Guangzhou, Guangdong, China",
      excerpt: "把广州的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是广州的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 08 · CITY: Shenzhen, China · 深圳 =====
  {
    id: "shenzhen", city: "Shenzhen", country: "China",
    coordinates: [22.5431, 114.0579], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Shenzhen",
      image: 'assets/images/kyoto.jpg', imageAlt: "Illustrative city photograph of Kyoto; not a photograph of Shenzhen",
      googleMapsQuery: "Shenzhen, Guangdong, China",
      excerpt: "从一段散步开始认识深圳，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是深圳的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Shenzhen Café",
      coordinates: [22.5501, 114.0649], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Shenzhen, Guangdong, China",
      excerpt: "在深圳找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条深圳的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Shenzhen Guesthouse",
      coordinates: [22.5351, 114.0639], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Shenzhen, Guangdong, China",
      excerpt: "给深圳的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条深圳的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Shenzhen City Walk",
      coordinates: [22.5491, 114.0489], // 示例位置，不代表真实景点入口。
      image: 'assets/images/kyoto.jpg', imageAlt: "Illustrative streetscape of Kyoto; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Shenzhen, Guangdong, China",
      excerpt: "把深圳的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是深圳的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 09 · CITY: Huizhou, China · 惠州 =====
  {
    id: "huizhou", city: "Huizhou", country: "China",
    coordinates: [23.1115, 114.4152], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Huizhou",
      image: 'assets/images/tokyo.jpg', imageAlt: "Illustrative city photograph of Tokyo; not a photograph of Huizhou",
      googleMapsQuery: "Huizhou, Guangdong, China",
      excerpt: "从一段散步开始认识惠州，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是惠州的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Huizhou Café",
      coordinates: [23.1185, 114.4222], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Huizhou, Guangdong, China",
      excerpt: "在惠州找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条惠州的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Huizhou Guesthouse",
      coordinates: [23.1035, 114.4212], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Huizhou, Guangdong, China",
      excerpt: "给惠州的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条惠州的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Huizhou City Walk",
      coordinates: [23.1175, 114.4062], // 示例位置，不代表真实景点入口。
      image: 'assets/images/tokyo.jpg', imageAlt: "Illustrative streetscape of Tokyo; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Huizhou, Guangdong, China",
      excerpt: "把惠州的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是惠州的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 10 · CITY: Dongguan, China · 东莞 =====
  {
    id: "dongguan", city: "Dongguan", country: "China",
    coordinates: [23.0207, 113.7518], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Dongguan",
      image: 'assets/images/paris.jpg', imageAlt: "Illustrative city photograph of Paris; not a photograph of Dongguan",
      googleMapsQuery: "Dongguan, Guangdong, China",
      excerpt: "从一段散步开始认识东莞，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是东莞的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Dongguan Café",
      coordinates: [23.0277, 113.7588], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Dongguan, Guangdong, China",
      excerpt: "在东莞找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条东莞的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Dongguan Guesthouse",
      coordinates: [23.0127, 113.7578], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Dongguan, Guangdong, China",
      excerpt: "给东莞的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条东莞的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Dongguan City Walk",
      coordinates: [23.0267, 113.7428], // 示例位置，不代表真实景点入口。
      image: 'assets/images/paris.jpg', imageAlt: "Illustrative streetscape of Paris; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Dongguan, Guangdong, China",
      excerpt: "把东莞的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是东莞的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 11 · CITY: Taian, China · 泰安 =====
  {
    id: "taian", city: "Taian", country: "China",
    coordinates: [36.2003, 117.0876], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Taian",
      image: 'assets/images/lisbon.jpg', imageAlt: "Illustrative city photograph of Lisbon; not a photograph of Taian",
      googleMapsQuery: "Taian, Shandong, China",
      excerpt: "从一段散步开始认识泰安，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是泰安的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Taian Café",
      coordinates: [36.2073, 117.0946], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Taian, Shandong, China",
      excerpt: "在泰安找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条泰安的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Taian Guesthouse",
      coordinates: [36.1923, 117.0936], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Taian, Shandong, China",
      excerpt: "给泰安的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条泰安的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Taian City Walk",
      coordinates: [36.2063, 117.0786], // 示例位置，不代表真实景点入口。
      image: 'assets/images/lisbon.jpg', imageAlt: "Illustrative streetscape of Lisbon; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Taian, Shandong, China",
      excerpt: "把泰安的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是泰安的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 12 · CITY: Foshan, China · 佛山 =====
  {
    id: "foshan", city: "Foshan", country: "China",
    coordinates: [23.0215, 113.1214], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Foshan",
      image: 'assets/images/copenhagen.jpg', imageAlt: "Illustrative city photograph of Copenhagen; not a photograph of Foshan",
      googleMapsQuery: "Foshan, Guangdong, China",
      excerpt: "从一段散步开始认识佛山，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是佛山的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Foshan Café",
      coordinates: [23.0285, 113.1284], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Foshan, Guangdong, China",
      excerpt: "在佛山找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条佛山的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Foshan Guesthouse",
      coordinates: [23.0135, 113.1274], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Foshan, Guangdong, China",
      excerpt: "给佛山的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条佛山的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Foshan City Walk",
      coordinates: [23.0275, 113.1124], // 示例位置，不代表真实景点入口。
      image: 'assets/images/copenhagen.jpg', imageAlt: "Illustrative streetscape of Copenhagen; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Foshan, Guangdong, China",
      excerpt: "把佛山的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是佛山的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 13 · CITY: Kunming, China · 昆明 =====
  {
    id: "kunming", city: "Kunming", country: "China",
    coordinates: [25.0389, 102.7183], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Kunming",
      image: 'assets/images/shanghai.jpg', imageAlt: "Illustrative city photograph of Shanghai; not a photograph of Kunming",
      googleMapsQuery: "Kunming, Yunnan, China",
      excerpt: "从一段散步开始认识昆明，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是昆明的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Kunming Café",
      coordinates: [25.0459, 102.7253], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Kunming, Yunnan, China",
      excerpt: "在昆明找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条昆明的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Kunming Guesthouse",
      coordinates: [25.0309, 102.7243], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Kunming, Yunnan, China",
      excerpt: "给昆明的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条昆明的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Kunming City Walk",
      coordinates: [25.0449, 102.7093], // 示例位置，不代表真实景点入口。
      image: 'assets/images/shanghai.jpg', imageAlt: "Illustrative streetscape of Shanghai; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Kunming, Yunnan, China",
      excerpt: "把昆明的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是昆明的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 14 · CITY: Hong Kong, Hong Kong SAR · 香港 =====
  {
    id: "hong-kong", city: "Hong Kong", country: "Hong Kong SAR",
    coordinates: [22.3193, 114.1694], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Hong Kong",
      image: 'assets/images/kyoto.jpg', imageAlt: "Illustrative city photograph of Kyoto; not a photograph of Hong Kong",
      googleMapsQuery: "Hong Kong",
      excerpt: "从一段散步开始认识香港，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是香港的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Hong Kong Café",
      coordinates: [22.3263, 114.1764], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Hong Kong",
      excerpt: "在香港找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条香港的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Hong Kong Guesthouse",
      coordinates: [22.3113, 114.1754], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Hong Kong",
      excerpt: "给香港的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条香港的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Hong Kong City Walk",
      coordinates: [22.3253, 114.1604], // 示例位置，不代表真实景点入口。
      image: 'assets/images/kyoto.jpg', imageAlt: "Illustrative streetscape of Kyoto; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Hong Kong",
      excerpt: "把香港的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是香港的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 15 · CITY: Macau, Macau SAR · 澳门 =====
  {
    id: "macau", city: "Macau", country: "Macau SAR",
    coordinates: [22.1987, 113.5439], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Macau",
      image: 'assets/images/tokyo.jpg', imageAlt: "Illustrative city photograph of Tokyo; not a photograph of Macau",
      googleMapsQuery: "Macau",
      excerpt: "从一段散步开始认识澳门，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是澳门的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Macau Café",
      coordinates: [22.2057, 113.5509], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Macau",
      excerpt: "在澳门找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条澳门的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Macau Guesthouse",
      coordinates: [22.1907, 113.5499], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Macau",
      excerpt: "给澳门的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条澳门的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Macau City Walk",
      coordinates: [22.2047, 113.5349], // 示例位置，不代表真实景点入口。
      image: 'assets/images/tokyo.jpg', imageAlt: "Illustrative streetscape of Tokyo; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Macau",
      excerpt: "把澳门的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是澳门的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 16 · CITY: Da Nang, Vietnam · 岘港 =====
  {
    id: "da-nang", city: "Da Nang", country: "Vietnam",
    coordinates: [16.0544, 108.2022], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Da Nang",
      image: 'assets/images/paris.jpg', imageAlt: "Illustrative city photograph of Paris; not a photograph of Da Nang",
      googleMapsQuery: "Da Nang, Vietnam",
      excerpt: "从一段散步开始认识岘港，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是岘港的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Da Nang Café",
      coordinates: [16.0614, 108.2092], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Da Nang, Vietnam",
      excerpt: "在岘港找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条岘港的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Da Nang Guesthouse",
      coordinates: [16.0464, 108.2082], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Da Nang, Vietnam",
      excerpt: "给岘港的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条岘港的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Da Nang City Walk",
      coordinates: [16.0604, 108.1932], // 示例位置，不代表真实景点入口。
      image: 'assets/images/paris.jpg', imageAlt: "Illustrative streetscape of Paris; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Da Nang, Vietnam",
      excerpt: "把岘港的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是岘港的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 17 · CITY: Hoi An, Vietnam · 会安 =====
  {
    id: "hoi-an", city: "Hoi An", country: "Vietnam",
    coordinates: [15.8801, 108.338], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Hoi An",
      image: 'assets/images/lisbon.jpg', imageAlt: "Illustrative city photograph of Lisbon; not a photograph of Hoi An",
      googleMapsQuery: "Hoi An, Vietnam",
      excerpt: "从一段散步开始认识会安，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是会安的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Hoi An Café",
      coordinates: [15.8871, 108.345], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Hoi An, Vietnam",
      excerpt: "在会安找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条会安的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Hoi An Guesthouse",
      coordinates: [15.8721, 108.344], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Hoi An, Vietnam",
      excerpt: "给会安的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条会安的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Hoi An City Walk",
      coordinates: [15.8861, 108.329], // 示例位置，不代表真实景点入口。
      image: 'assets/images/lisbon.jpg', imageAlt: "Illustrative streetscape of Lisbon; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Hoi An, Vietnam",
      excerpt: "把会安的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是会安的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 18 · CITY: Nha Trang, Vietnam · 芽庄 =====
  {
    id: "nha-trang", city: "Nha Trang", country: "Vietnam",
    coordinates: [12.2388, 109.1967], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Nha Trang",
      image: 'assets/images/copenhagen.jpg', imageAlt: "Illustrative city photograph of Copenhagen; not a photograph of Nha Trang",
      googleMapsQuery: "Nha Trang, Vietnam",
      excerpt: "从一段散步开始认识芽庄，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是芽庄的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Nha Trang Café",
      coordinates: [12.2458, 109.2037], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Nha Trang, Vietnam",
      excerpt: "在芽庄找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条芽庄的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Nha Trang Guesthouse",
      coordinates: [12.2308, 109.2027], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Nha Trang, Vietnam",
      excerpt: "给芽庄的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条芽庄的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Nha Trang City Walk",
      coordinates: [12.2448, 109.1877], // 示例位置，不代表真实景点入口。
      image: 'assets/images/copenhagen.jpg', imageAlt: "Illustrative streetscape of Copenhagen; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Nha Trang, Vietnam",
      excerpt: "把芽庄的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是芽庄的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 19 · CITY: Ho Chi Minh City, Vietnam · 胡志明市 =====
  {
    id: "ho-chi-minh-city", city: "Ho Chi Minh City", country: "Vietnam",
    coordinates: [10.8231, 106.6297], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Ho Chi Minh City",
      image: 'assets/images/shanghai.jpg', imageAlt: "Illustrative city photograph of Shanghai; not a photograph of Ho Chi Minh City",
      googleMapsQuery: "Ho Chi Minh City, Vietnam",
      excerpt: "从一段散步开始认识胡志明市，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是胡志明市的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Ho Chi Minh City Café",
      coordinates: [10.8301, 106.6367], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Ho Chi Minh City, Vietnam",
      excerpt: "在胡志明市找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条胡志明市的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Ho Chi Minh City Guesthouse",
      coordinates: [10.8151, 106.6357], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Ho Chi Minh City, Vietnam",
      excerpt: "给胡志明市的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条胡志明市的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Ho Chi Minh City City Walk",
      coordinates: [10.8291, 106.6207], // 示例位置，不代表真实景点入口。
      image: 'assets/images/shanghai.jpg', imageAlt: "Illustrative streetscape of Shanghai; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Ho Chi Minh City, Vietnam",
      excerpt: "把胡志明市的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是胡志明市的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 20 · CITY: Phnom Penh, Cambodia · 金边 =====
  {
    id: "phnom-penh", city: "Phnom Penh", country: "Cambodia",
    coordinates: [11.5564, 104.9282], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Phnom Penh",
      image: 'assets/images/kyoto.jpg', imageAlt: "Illustrative city photograph of Kyoto; not a photograph of Phnom Penh",
      googleMapsQuery: "Phnom Penh, Cambodia",
      excerpt: "从一段散步开始认识金边，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是金边的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Phnom Penh Café",
      coordinates: [11.5634, 104.9352], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Phnom Penh, Cambodia",
      excerpt: "在金边找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条金边的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Phnom Penh Guesthouse",
      coordinates: [11.5484, 104.9342], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Phnom Penh, Cambodia",
      excerpt: "给金边的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条金边的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Phnom Penh City Walk",
      coordinates: [11.5624, 104.9192], // 示例位置，不代表真实景点入口。
      image: 'assets/images/kyoto.jpg', imageAlt: "Illustrative streetscape of Kyoto; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Phnom Penh, Cambodia",
      excerpt: "把金边的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是金边的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 21 · CITY: Battambang, Cambodia · 马德望 =====
  {
    id: "battambang", city: "Battambang", country: "Cambodia",
    coordinates: [13.0957, 103.2022], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Battambang",
      image: 'assets/images/tokyo.jpg', imageAlt: "Illustrative city photograph of Tokyo; not a photograph of Battambang",
      googleMapsQuery: "Battambang, Cambodia",
      excerpt: "从一段散步开始认识马德望，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是马德望的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Battambang Café",
      coordinates: [13.1027, 103.2092], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Battambang, Cambodia",
      excerpt: "在马德望找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条马德望的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Battambang Guesthouse",
      coordinates: [13.0877, 103.2082], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Battambang, Cambodia",
      excerpt: "给马德望的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条马德望的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Battambang City Walk",
      coordinates: [13.1017, 103.1932], // 示例位置，不代表真实景点入口。
      image: 'assets/images/tokyo.jpg', imageAlt: "Illustrative streetscape of Tokyo; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Battambang, Cambodia",
      excerpt: "把马德望的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是马德望的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 22 · CITY: Siem Reap, Cambodia · 暹粒 =====
  {
    id: "siem-reap", city: "Siem Reap", country: "Cambodia",
    coordinates: [13.3633, 103.8564], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Siem Reap",
      image: 'assets/images/paris.jpg', imageAlt: "Illustrative city photograph of Paris; not a photograph of Siem Reap",
      googleMapsQuery: "Siem Reap, Cambodia",
      excerpt: "从一段散步开始认识暹粒，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是暹粒的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Siem Reap Café",
      coordinates: [13.3703, 103.8634], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Siem Reap, Cambodia",
      excerpt: "在暹粒找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条暹粒的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Siem Reap Guesthouse",
      coordinates: [13.3553, 103.8624], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Siem Reap, Cambodia",
      excerpt: "给暹粒的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条暹粒的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Siem Reap City Walk",
      coordinates: [13.3693, 103.8474], // 示例位置，不代表真实景点入口。
      image: 'assets/images/paris.jpg', imageAlt: "Illustrative streetscape of Paris; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Siem Reap, Cambodia",
      excerpt: "把暹粒的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是暹粒的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 23 · CITY: Kampot, Cambodia · 贡布 =====
  {
    id: "kampot", city: "Kampot", country: "Cambodia",
    coordinates: [10.6104, 104.1815], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Kampot",
      image: 'assets/images/lisbon.jpg', imageAlt: "Illustrative city photograph of Lisbon; not a photograph of Kampot",
      googleMapsQuery: "Kampot, Cambodia",
      excerpt: "从一段散步开始认识贡布，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是贡布的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Kampot Café",
      coordinates: [10.6174, 104.1885], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Kampot, Cambodia",
      excerpt: "在贡布找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条贡布的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Kampot Guesthouse",
      coordinates: [10.6024, 104.1875], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Kampot, Cambodia",
      excerpt: "给贡布的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条贡布的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Kampot City Walk",
      coordinates: [10.6164, 104.1725], // 示例位置，不代表真实景点入口。
      image: 'assets/images/lisbon.jpg', imageAlt: "Illustrative streetscape of Lisbon; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Kampot, Cambodia",
      excerpt: "把贡布的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是贡布的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 24 · CITY: Sihanoukville, Cambodia · 西哈努克市 =====
  {
    id: "sihanoukville", city: "Sihanoukville", country: "Cambodia",
    coordinates: [10.6275, 103.5221], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Sihanoukville",
      image: 'assets/images/copenhagen.jpg', imageAlt: "Illustrative city photograph of Copenhagen; not a photograph of Sihanoukville",
      googleMapsQuery: "Sihanoukville, Cambodia",
      excerpt: "从一段散步开始认识西哈努克市，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是西哈努克市的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Sihanoukville Café",
      coordinates: [10.6345, 103.5291], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Sihanoukville, Cambodia",
      excerpt: "在西哈努克市找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条西哈努克市的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Sihanoukville Guesthouse",
      coordinates: [10.6195, 103.5281], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Sihanoukville, Cambodia",
      excerpt: "给西哈努克市的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条西哈努克市的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Sihanoukville City Walk",
      coordinates: [10.6335, 103.5131], // 示例位置，不代表真实景点入口。
      image: 'assets/images/copenhagen.jpg', imageAlt: "Illustrative streetscape of Copenhagen; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Sihanoukville, Cambodia",
      excerpt: "把西哈努克市的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是西哈努克市的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 25 · CITY: Bangkok, Thailand · 曼谷 =====
  {
    id: "bangkok", city: "Bangkok", country: "Thailand",
    coordinates: [13.7563, 100.5018], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Bangkok",
      image: 'assets/images/shanghai.jpg', imageAlt: "Illustrative city photograph of Shanghai; not a photograph of Bangkok",
      googleMapsQuery: "Bangkok, Thailand",
      excerpt: "从一段散步开始认识曼谷，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是曼谷的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Bangkok Café",
      coordinates: [13.7633, 100.5088], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Bangkok, Thailand",
      excerpt: "在曼谷找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条曼谷的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Bangkok Guesthouse",
      coordinates: [13.7483, 100.5078], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Bangkok, Thailand",
      excerpt: "给曼谷的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条曼谷的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Bangkok City Walk",
      coordinates: [13.7623, 100.4928], // 示例位置，不代表真实景点入口。
      image: 'assets/images/shanghai.jpg', imageAlt: "Illustrative streetscape of Shanghai; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Bangkok, Thailand",
      excerpt: "把曼谷的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是曼谷的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 26 · CITY: Ratchaburi, Thailand · 叻丕 =====
  {
    id: "ratchaburi", city: "Ratchaburi", country: "Thailand",
    coordinates: [13.5283, 99.8134], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Ratchaburi",
      image: 'assets/images/kyoto.jpg', imageAlt: "Illustrative city photograph of Kyoto; not a photograph of Ratchaburi",
      googleMapsQuery: "Ratchaburi, Thailand",
      excerpt: "从一段散步开始认识叻丕，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是叻丕的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Ratchaburi Café",
      coordinates: [13.5353, 99.8204], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Ratchaburi, Thailand",
      excerpt: "在叻丕找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条叻丕的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Ratchaburi Guesthouse",
      coordinates: [13.5203, 99.8194], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Ratchaburi, Thailand",
      excerpt: "给叻丕的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条叻丕的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Ratchaburi City Walk",
      coordinates: [13.5343, 99.8044], // 示例位置，不代表真实景点入口。
      image: 'assets/images/kyoto.jpg', imageAlt: "Illustrative streetscape of Kyoto; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Ratchaburi, Thailand",
      excerpt: "把叻丕的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是叻丕的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 27 · CITY: Ayutthaya, Thailand · 大城 =====
  {
    id: "ayutthaya", city: "Ayutthaya", country: "Thailand",
    coordinates: [14.3532, 100.5689], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Ayutthaya",
      image: 'assets/images/tokyo.jpg', imageAlt: "Illustrative city photograph of Tokyo; not a photograph of Ayutthaya",
      googleMapsQuery: "Ayutthaya, Thailand",
      excerpt: "从一段散步开始认识大城，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是大城的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Ayutthaya Café",
      coordinates: [14.3602, 100.5759], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Ayutthaya, Thailand",
      excerpt: "在大城找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条大城的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Ayutthaya Guesthouse",
      coordinates: [14.3452, 100.5749], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Ayutthaya, Thailand",
      excerpt: "给大城的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条大城的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Ayutthaya City Walk",
      coordinates: [14.3592, 100.5599], // 示例位置，不代表真实景点入口。
      image: 'assets/images/tokyo.jpg', imageAlt: "Illustrative streetscape of Tokyo; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Ayutthaya, Thailand",
      excerpt: "把大城的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是大城的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 28 · CITY: Phitsanulok, Thailand · 彭世洛 =====
  {
    id: "phitsanulok", city: "Phitsanulok", country: "Thailand",
    coordinates: [16.8211, 100.2659], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Phitsanulok",
      image: 'assets/images/paris.jpg', imageAlt: "Illustrative city photograph of Paris; not a photograph of Phitsanulok",
      googleMapsQuery: "Phitsanulok, Thailand",
      excerpt: "从一段散步开始认识彭世洛，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是彭世洛的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Phitsanulok Café",
      coordinates: [16.8281, 100.2729], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Phitsanulok, Thailand",
      excerpt: "在彭世洛找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条彭世洛的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Phitsanulok Guesthouse",
      coordinates: [16.8131, 100.2719], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Phitsanulok, Thailand",
      excerpt: "给彭世洛的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条彭世洛的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Phitsanulok City Walk",
      coordinates: [16.8271, 100.2569], // 示例位置，不代表真实景点入口。
      image: 'assets/images/paris.jpg', imageAlt: "Illustrative streetscape of Paris; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Phitsanulok, Thailand",
      excerpt: "把彭世洛的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是彭世洛的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 29 · CITY: Sukhothai, Thailand · 素可泰 =====
  {
    id: "sukhothai", city: "Sukhothai", country: "Thailand",
    coordinates: [17.0078, 99.8265], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Sukhothai",
      image: 'assets/images/lisbon.jpg', imageAlt: "Illustrative city photograph of Lisbon; not a photograph of Sukhothai",
      googleMapsQuery: "Sukhothai, Thailand",
      excerpt: "从一段散步开始认识素可泰，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是素可泰的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Sukhothai Café",
      coordinates: [17.0148, 99.8335], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Sukhothai, Thailand",
      excerpt: "在素可泰找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条素可泰的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Sukhothai Guesthouse",
      coordinates: [16.9998, 99.8325], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Sukhothai, Thailand",
      excerpt: "给素可泰的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条素可泰的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Sukhothai City Walk",
      coordinates: [17.0138, 99.8175], // 示例位置，不代表真实景点入口。
      image: 'assets/images/lisbon.jpg', imageAlt: "Illustrative streetscape of Lisbon; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Sukhothai, Thailand",
      excerpt: "把素可泰的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是素可泰的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 30 · CITY: Khon Kaen, Thailand · 孔敬 =====
  {
    id: "khon-kaen", city: "Khon Kaen", country: "Thailand",
    coordinates: [16.4322, 102.8236], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Khon Kaen",
      image: 'assets/images/copenhagen.jpg', imageAlt: "Illustrative city photograph of Copenhagen; not a photograph of Khon Kaen",
      googleMapsQuery: "Khon Kaen, Thailand",
      excerpt: "从一段散步开始认识孔敬，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是孔敬的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Khon Kaen Café",
      coordinates: [16.4392, 102.8306], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Khon Kaen, Thailand",
      excerpt: "在孔敬找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条孔敬的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Khon Kaen Guesthouse",
      coordinates: [16.4242, 102.8296], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Khon Kaen, Thailand",
      excerpt: "给孔敬的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条孔敬的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Khon Kaen City Walk",
      coordinates: [16.4382, 102.8146], // 示例位置，不代表真实景点入口。
      image: 'assets/images/copenhagen.jpg', imageAlt: "Illustrative streetscape of Copenhagen; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Khon Kaen, Thailand",
      excerpt: "把孔敬的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是孔敬的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 31 · CITY: Udon Thani, Thailand · 乌隆他尼 =====
  {
    id: "udon-thani", city: "Udon Thani", country: "Thailand",
    coordinates: [17.4138, 102.7872], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Udon Thani",
      image: 'assets/images/shanghai.jpg', imageAlt: "Illustrative city photograph of Shanghai; not a photograph of Udon Thani",
      googleMapsQuery: "Udon Thani, Thailand",
      excerpt: "从一段散步开始认识乌隆他尼，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是乌隆他尼的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Udon Thani Café",
      coordinates: [17.4208, 102.7942], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Udon Thani, Thailand",
      excerpt: "在乌隆他尼找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条乌隆他尼的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Udon Thani Guesthouse",
      coordinates: [17.4058, 102.7932], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Udon Thani, Thailand",
      excerpt: "给乌隆他尼的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条乌隆他尼的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Udon Thani City Walk",
      coordinates: [17.4198, 102.7782], // 示例位置，不代表真实景点入口。
      image: 'assets/images/shanghai.jpg', imageAlt: "Illustrative streetscape of Shanghai; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Udon Thani, Thailand",
      excerpt: "把乌隆他尼的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是乌隆他尼的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 32 · CITY: Vientiane, Laos · 万象 =====
  {
    id: "vientiane", city: "Vientiane", country: "Laos",
    coordinates: [17.9757, 102.6331], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Vientiane",
      image: 'assets/images/kyoto.jpg', imageAlt: "Illustrative city photograph of Kyoto; not a photograph of Vientiane",
      googleMapsQuery: "Vientiane, Laos",
      excerpt: "从一段散步开始认识万象，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是万象的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Vientiane Café",
      coordinates: [17.9827, 102.6401], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Vientiane, Laos",
      excerpt: "在万象找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条万象的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Vientiane Guesthouse",
      coordinates: [17.9677, 102.6391], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Vientiane, Laos",
      excerpt: "给万象的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条万象的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Vientiane City Walk",
      coordinates: [17.9817, 102.6241], // 示例位置，不代表真实景点入口。
      image: 'assets/images/kyoto.jpg', imageAlt: "Illustrative streetscape of Kyoto; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Vientiane, Laos",
      excerpt: "把万象的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是万象的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 33 · CITY: Vang Vieng, Laos · 万荣 =====
  {
    id: "vang-vieng", city: "Vang Vieng", country: "Laos",
    coordinates: [18.9242, 102.4478], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Vang Vieng",
      image: 'assets/images/tokyo.jpg', imageAlt: "Illustrative city photograph of Tokyo; not a photograph of Vang Vieng",
      googleMapsQuery: "Vang Vieng, Laos",
      excerpt: "从一段散步开始认识万荣，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是万荣的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Vang Vieng Café",
      coordinates: [18.9312, 102.4548], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Vang Vieng, Laos",
      excerpt: "在万荣找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条万荣的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Vang Vieng Guesthouse",
      coordinates: [18.9162, 102.4538], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Vang Vieng, Laos",
      excerpt: "给万荣的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条万荣的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Vang Vieng City Walk",
      coordinates: [18.9302, 102.4388], // 示例位置，不代表真实景点入口。
      image: 'assets/images/tokyo.jpg', imageAlt: "Illustrative streetscape of Tokyo; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Vang Vieng, Laos",
      excerpt: "把万荣的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是万荣的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 34 · CITY: Luang Prabang, Laos · 琅勃拉邦 =====
  {
    id: "luang-prabang", city: "Luang Prabang", country: "Laos",
    coordinates: [19.8833, 102.1333], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Luang Prabang",
      image: 'assets/images/paris.jpg', imageAlt: "Illustrative city photograph of Paris; not a photograph of Luang Prabang",
      googleMapsQuery: "Luang Prabang, Laos",
      excerpt: "从一段散步开始认识琅勃拉邦，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是琅勃拉邦的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Luang Prabang Café",
      coordinates: [19.8903, 102.1403], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Luang Prabang, Laos",
      excerpt: "在琅勃拉邦找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条琅勃拉邦的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Luang Prabang Guesthouse",
      coordinates: [19.8753, 102.1393], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Luang Prabang, Laos",
      excerpt: "给琅勃拉邦的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条琅勃拉邦的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Luang Prabang City Walk",
      coordinates: [19.8893, 102.1243], // 示例位置，不代表真实景点入口。
      image: 'assets/images/paris.jpg', imageAlt: "Illustrative streetscape of Paris; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Luang Prabang, Laos",
      excerpt: "把琅勃拉邦的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是琅勃拉邦的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 35 · CITY: Singapore, Singapore · 新加坡 =====
  {
    id: "singapore", city: "Singapore", country: "Singapore",
    coordinates: [1.3521, 103.8198], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Singapore",
      image: 'assets/images/lisbon.jpg', imageAlt: "Illustrative city photograph of Lisbon; not a photograph of Singapore",
      googleMapsQuery: "Singapore",
      excerpt: "从一段散步开始认识新加坡，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是新加坡的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Singapore Café",
      coordinates: [1.3591, 103.8268], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Singapore",
      excerpt: "在新加坡找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条新加坡的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Singapore Guesthouse",
      coordinates: [1.3441, 103.8258], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Singapore",
      excerpt: "给新加坡的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条新加坡的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Singapore City Walk",
      coordinates: [1.3581, 103.8108], // 示例位置，不代表真实景点入口。
      image: 'assets/images/lisbon.jpg', imageAlt: "Illustrative streetscape of Lisbon; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Singapore",
      excerpt: "把新加坡的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是新加坡的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 36 · CITY: Johor Bahru, Malaysia · 新山 =====
  {
    id: "johor-bahru", city: "Johor Bahru", country: "Malaysia",
    coordinates: [1.4927, 103.7414], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Johor Bahru",
      image: 'assets/images/copenhagen.jpg', imageAlt: "Illustrative city photograph of Copenhagen; not a photograph of Johor Bahru",
      googleMapsQuery: "Johor Bahru, Malaysia",
      excerpt: "从一段散步开始认识新山，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是新山的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Johor Bahru Café",
      coordinates: [1.4997, 103.7484], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Johor Bahru, Malaysia",
      excerpt: "在新山找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条新山的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Johor Bahru Guesthouse",
      coordinates: [1.4847, 103.7474], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Johor Bahru, Malaysia",
      excerpt: "给新山的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条新山的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Johor Bahru City Walk",
      coordinates: [1.4987, 103.7324], // 示例位置，不代表真实景点入口。
      image: 'assets/images/copenhagen.jpg', imageAlt: "Illustrative streetscape of Copenhagen; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Johor Bahru, Malaysia",
      excerpt: "把新山的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是新山的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 37 · CITY: Malacca, Malaysia · 马六甲 =====
  {
    id: "malacca", city: "Malacca", country: "Malaysia",
    coordinates: [2.1896, 102.2501], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Malacca",
      image: 'assets/images/shanghai.jpg', imageAlt: "Illustrative city photograph of Shanghai; not a photograph of Malacca",
      googleMapsQuery: "Malacca, Malaysia",
      excerpt: "从一段散步开始认识马六甲，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是马六甲的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Malacca Café",
      coordinates: [2.1966, 102.2571], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Malacca, Malaysia",
      excerpt: "在马六甲找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条马六甲的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Malacca Guesthouse",
      coordinates: [2.1816, 102.2561], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Malacca, Malaysia",
      excerpt: "给马六甲的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条马六甲的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Malacca City Walk",
      coordinates: [2.1956, 102.2411], // 示例位置，不代表真实景点入口。
      image: 'assets/images/shanghai.jpg', imageAlt: "Illustrative streetscape of Shanghai; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Malacca, Malaysia",
      excerpt: "把马六甲的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是马六甲的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 38 · CITY: Kuala Lumpur, Malaysia · 吉隆坡 =====
  {
    id: "kuala-lumpur", city: "Kuala Lumpur", country: "Malaysia",
    coordinates: [3.139, 101.6869], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Kuala Lumpur",
      image: 'assets/images/kyoto.jpg', imageAlt: "Illustrative city photograph of Kyoto; not a photograph of Kuala Lumpur",
      googleMapsQuery: "Kuala Lumpur, Malaysia",
      excerpt: "从一段散步开始认识吉隆坡，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是吉隆坡的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Kuala Lumpur Café",
      coordinates: [3.146, 101.6939], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Kuala Lumpur, Malaysia",
      excerpt: "在吉隆坡找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条吉隆坡的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Kuala Lumpur Guesthouse",
      coordinates: [3.131, 101.6929], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Kuala Lumpur, Malaysia",
      excerpt: "给吉隆坡的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条吉隆坡的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Kuala Lumpur City Walk",
      coordinates: [3.145, 101.6779], // 示例位置，不代表真实景点入口。
      image: 'assets/images/kyoto.jpg', imageAlt: "Illustrative streetscape of Kyoto; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Kuala Lumpur, Malaysia",
      excerpt: "把吉隆坡的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是吉隆坡的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 39 · CITY: Penang, Malaysia · 槟城 =====
  {
    id: "penang", city: "Penang", country: "Malaysia",
    coordinates: [5.4141, 100.3288], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Penang",
      image: 'assets/images/tokyo.jpg', imageAlt: "Illustrative city photograph of Tokyo; not a photograph of Penang",
      googleMapsQuery: "Penang, Malaysia",
      excerpt: "从一段散步开始认识槟城，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是槟城的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Penang Café",
      coordinates: [5.4211, 100.3358], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Penang, Malaysia",
      excerpt: "在槟城找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条槟城的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Penang Guesthouse",
      coordinates: [5.4061, 100.3348], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Penang, Malaysia",
      excerpt: "给槟城的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条槟城的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Penang City Walk",
      coordinates: [5.4201, 100.3198], // 示例位置，不代表真实景点入口。
      image: 'assets/images/tokyo.jpg', imageAlt: "Illustrative streetscape of Tokyo; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Penang, Malaysia",
      excerpt: "把槟城的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是槟城的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 40 · CITY: Kuching, Malaysia · 古晋 =====
  {
    id: "kuching", city: "Kuching", country: "Malaysia",
    coordinates: [1.5533, 110.3592], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Kuching",
      image: 'assets/images/paris.jpg', imageAlt: "Illustrative city photograph of Paris; not a photograph of Kuching",
      googleMapsQuery: "Kuching, Malaysia",
      excerpt: "从一段散步开始认识古晋，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是古晋的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Kuching Café",
      coordinates: [1.5603, 110.3662], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Kuching, Malaysia",
      excerpt: "在古晋找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条古晋的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Kuching Guesthouse",
      coordinates: [1.5453, 110.3652], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Kuching, Malaysia",
      excerpt: "给古晋的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条古晋的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Kuching City Walk",
      coordinates: [1.5593, 110.3502], // 示例位置，不代表真实景点入口。
      image: 'assets/images/paris.jpg', imageAlt: "Illustrative streetscape of Paris; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Kuching, Malaysia",
      excerpt: "把古晋的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是古晋的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 41 · CITY: Miri, Malaysia · 美里 =====
  {
    id: "miri", city: "Miri", country: "Malaysia",
    coordinates: [4.3993, 113.9918], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Miri",
      image: 'assets/images/lisbon.jpg', imageAlt: "Illustrative city photograph of Lisbon; not a photograph of Miri",
      googleMapsQuery: "Miri, Malaysia",
      excerpt: "从一段散步开始认识美里，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是美里的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Miri Café",
      coordinates: [4.4063, 113.9988], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Miri, Malaysia",
      excerpt: "在美里找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条美里的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Miri Guesthouse",
      coordinates: [4.3913, 113.9978], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Miri, Malaysia",
      excerpt: "给美里的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条美里的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Miri City Walk",
      coordinates: [4.4053, 113.9828], // 示例位置，不代表真实景点入口。
      image: 'assets/images/lisbon.jpg', imageAlt: "Illustrative streetscape of Lisbon; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Miri, Malaysia",
      excerpt: "把美里的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是美里的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 42 · CITY: Labuan, Malaysia · 纳闽 =====
  {
    id: "labuan", city: "Labuan", country: "Malaysia",
    coordinates: [5.2831, 115.2308], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Labuan",
      image: 'assets/images/copenhagen.jpg', imageAlt: "Illustrative city photograph of Copenhagen; not a photograph of Labuan",
      googleMapsQuery: "Labuan, Malaysia",
      excerpt: "从一段散步开始认识纳闽，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是纳闽的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Labuan Café",
      coordinates: [5.2901, 115.2378], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Labuan, Malaysia",
      excerpt: "在纳闽找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条纳闽的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Labuan Guesthouse",
      coordinates: [5.2751, 115.2368], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Labuan, Malaysia",
      excerpt: "给纳闽的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条纳闽的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Labuan City Walk",
      coordinates: [5.2891, 115.2218], // 示例位置，不代表真实景点入口。
      image: 'assets/images/copenhagen.jpg', imageAlt: "Illustrative streetscape of Copenhagen; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Labuan, Malaysia",
      excerpt: "把纳闽的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是纳闽的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
  // ===== 43 · CITY: Bandar Seri Begawan, Brunei · 斯里巴加湾市 =====
  {
    id: "bandar-seri-begawan", city: "Bandar Seri Begawan", country: "Brunei",
    coordinates: [4.9031, 114.9398], // 城市近似中心；替换地点时请更新坐标。
    cityStory: {
      title: "Bandar Seri Begawan",
      image: 'assets/images/shanghai.jpg', imageAlt: "Illustrative city photograph of Shanghai; not a photograph of Bandar Seri Begawan",
      googleMapsQuery: "Bandar Seri Begawan, Brunei",
      excerpt: "从一段散步开始认识斯里巴加湾市，在这里整理自己的城市印象与旅行片段。",
      content: [{ heading: 'City notes', paragraphs: ["这是斯里巴加湾市的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
    },
    // Food & Drinks：修改这一块即可更新本城市的饮食示例。
    food: {
      title: "Bandar Seri Begawan Café",
      coordinates: [4.9101, 114.9468], // 示例位置，不代表实际商户。
      image: 'assets/images/coffee.jpg', imageAlt: 'Illustrative café interior; not a photograph of an actual listed venue',
      googleMapsQuery: "cafes in Bandar Seri Begawan, Brunei",
      excerpt: "在斯里巴加湾市找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
      content: [{ heading: 'Food & Drinks notes', paragraphs: ["这是一条斯里巴加湾市的虚构饮食示例，不对应真实咖啡馆。Google Maps 链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
    },
    // Accommodations：修改这一块即可更新本城市的住宿示例。
    accommodation: {
      title: "Bandar Seri Begawan Guesthouse",
      coordinates: [4.8951, 114.9458], // 示例位置，不代表实际住宿。
      image: 'assets/images/stay.jpg', imageAlt: 'Illustrative guest room; not a photograph of an actual listed accommodation',
      googleMapsQuery: "hotels in Bandar Seri Begawan, Brunei",
      excerpt: "给斯里巴加湾市的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
      content: [{ heading: 'Accommodation notes', paragraphs: ["这是一条斯里巴加湾市的虚构住宿示例，不代表真实酒店或民宿。Google Maps 链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
    },
    // Attractions：修改这一块即可更新本城市的景点示例。
    attraction: {
      title: "Bandar Seri Begawan City Walk",
      coordinates: [4.9091, 114.9308], // 示例位置，不代表真实景点入口。
      image: 'assets/images/shanghai.jpg', imageAlt: "Illustrative streetscape of Shanghai; not a photograph of this attraction",
      googleMapsQuery: "tourist attractions in Bandar Seri Begawan, Brunei",
      excerpt: "把斯里巴加湾市的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
      content: [{ heading: 'Attraction notes', paragraphs: ["这是斯里巴加湾市的景点占位示例，并非已核实的景点推荐。Google Maps 链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
    },
  },
];

// ===== 默认设置：只想修改某篇文章时，在上面的对应内容块中覆盖这些字段 =====
const entryDefaults = {
  demo: true,
  date: '2026-11-03',
  rating: 4.5,
  googleMapsUrl: '', // 可选：粘贴从 Google Maps 复制的地点分享链接。
  googleMapsEmbedUrl: '', // 可选：只粘贴“嵌入地图”代码中的 src 地址，不是整段 iframe。
};

const contentTypes = [
  { key: 'cityStory', category: 'cities', suffix: '', subtitle: 'A city, one memory at a time', tags: ['City notes', 'Sample'] },
  { key: 'food', category: 'food', suffix: 'food', subtitle: 'Coffee, good food, and a little pause', tags: ['Coffee', 'Sample'] },
  { key: 'accommodation', category: 'stays', suffix: 'stay', subtitle: 'A place to rest along the way', tags: ['Comfort', 'Sample'] },
  { key: 'attraction', category: 'attractions', suffix: 'attraction', subtitle: 'A small discovery around the corner', tags: ['Walking', 'Sample'] },
];

// 程序自动把城市分组转换为页面、筛选和地图需要的记录；普通内容编辑无需修改这里。
export const entries = cityGuides.flatMap((guide) => contentTypes.flatMap((type) => {
  const records = Array.isArray(guide[type.key]) ? guide[type.key] : [guide[type.key]];
  return records.filter(Boolean).map((record, index) => ({
    ...entryDefaults,
    id: type.category === 'cities' ? guide.id : `${guide.id}-${type.suffix}${index ? `-${index + 1}` : ''}`,
    category: type.category,
    cityId: guide.id,
    city: guide.city,
    country: guide.country,
    coordinates: guide.coordinates,
    subtitle: type.subtitle,
    tags: type.tags,
    ...record,
  }));
}));

// ===== 图片来源：新增本地照片后，可在这里登记来源或标注自己的摄影作品 =====
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
