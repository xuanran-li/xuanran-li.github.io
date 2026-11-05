/**
 * 黄山 · 中国
 * cityStory：城市介绍；rating 可在内容块中设置（0–5 分，默认 4.5）。
 * 本城市仅保留城市介绍。
 * 图片路径相对网站根目录；城市 id 请保持稳定，以保留已有详情链接。
 */
export default {
  id: "huangshan", city: "黄山", country: "中国",
  coordinates: [29.7147, 118.3376], // 城市近似中心；替换地点时请更新坐标。
  cityStory: {
    title: "黄山",
    image: 'assets/images/paris.jpg', imageAlt: "巴黎城市示意照片，并非黄山实景",
    googleMapsQuery: "中国安徽省黄山市",
    excerpt: "从一段散步开始认识黄山，在这里整理自己的城市印象与旅行片段。",
    content: [{ heading: '城市笔记', paragraphs: ["这是黄山的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。" ] }],
  },
};
