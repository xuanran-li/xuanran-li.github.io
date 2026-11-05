/**
 * 万荣 · 老挝
 * cityStory：城市介绍；rating 可在内容块中设置（0–5 分，默认 4.5）。
 * food：饮食；accommodation：膳宿；attraction：胜地。
 * 同类地点可改为对象数组；新增记录请填写唯一 id。
 * 图片路径相对网站根目录；城市 id 请保持稳定，以保留已有详情链接。
 */
export default {
  id: "vang-vieng", city: "万荣", country: "老挝",
  coordinates: [18.9242, 102.4478], // 城市近似中心；替换地点时请更新坐标。
  cityStory: {
    title: "万荣",
    image: 'assets/images/tokyo.jpg', imageAlt: "东京城市示意照片，并非万荣实景",
    googleMapsQuery: "老挝万荣",
    excerpt: "从一段散步开始认识万荣，在这里整理自己的城市印象与旅行片段。",
    content: [{ heading: '城市笔记', paragraphs: ["这是万荣的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。", "下面关联了饮食、住宿和景点各一条示例，便于找到对应内容；替换正文、照片、日期和评分后，就能成为自己的旅行记录。" ] }],
  },
  // 饮食：修改这一块即可更新本城市的饮食示例。
  food: {
    title: "万荣咖啡馆",
    coordinates: [18.9312, 102.4548], // 示例位置，不代表实际商户。
    image: 'assets/images/coffee.jpg', imageAlt: '咖啡馆内景示意照片，并非所列地点实景',
    googleMapsQuery: "老挝万荣咖啡馆",
    excerpt: "在万荣找一杯喜欢的咖啡，把一次放松的停留写成饮食笔记。",
    content: [{ heading: '饮食笔记', paragraphs: ["这是一条万荣的虚构饮食示例，不对应真实咖啡馆。谷歌地图链接搜索本城市的咖啡馆，方便你选择真实地点后替换。", "可以在这里填写实际店名、推荐饮品、用餐感受和消费记录；记得同步修改坐标、地图链接与照片。" ] }],
  },
  // 膳宿：修改这一块即可更新本城市的住宿示例。
  accommodation: {
    title: "万荣旅舍",
    coordinates: [18.9162, 102.4538], // 示例位置，不代表实际住宿。
    image: 'assets/images/stay.jpg', imageAlt: '客房示意照片，并非所列住宿实景',
    googleMapsQuery: "老挝万荣酒店",
    excerpt: "给万荣的旅途留一个休息的地方，在这里记录房间、睡眠与入住体验。",
    content: [{ heading: '膳宿笔记', paragraphs: ["这是一条万荣的虚构住宿示例，不代表真实酒店或民宿。谷歌地图链接搜索本城市的酒店，图片是通用客房示意。", "替换为实际入住记录时，可以填写住宿名称、房型、交通、安静程度和自己的评分，并更新真实坐标与地图链接。" ] }],
  },
  // 胜地：修改这一块即可更新本城市的景点示例。
  attraction: {
    title: "万荣漫步",
    coordinates: [18.9302, 102.4388], // 示例位置，不代表真实景点入口。
    image: 'assets/images/tokyo.jpg', imageAlt: "东京街景示意照片，并非此景点实景",
    googleMapsQuery: "老挝万荣景点",
    excerpt: "把万荣的一处风景或一段散步保存在这里，慢慢补上自己的发现。",
    content: [{ heading: '胜地笔记', paragraphs: ["这是万荣的景点占位示例，并非已核实的景点推荐。谷歌地图链接搜索当地景点，便于后续换成你真正去过或想去的地方。", "可以把标题改成真实景点名称，再补充游览体验、照片和实用信息。地图坐标目前仅用于展示，请按实际地点更新。" ] }],
  },
};
