/**
 * 南京 · 中国
 * cityStory：城市介绍；rating 可在内容块中设置（0–5 分，默认 4.5）。
 * 本城市仅保留城市介绍。
 * 图片路径相对网站根目录；城市 id 请保持稳定，以保留已有详情链接。
 */
export default {
  id: "nanjing", city: "南京", country: "中国",
  coordinates: [32.0603, 118.7969], // 城市近似中心；替换地点时请更新坐标。
  cityStory: {
    title: "南京",
    image: 'assets/images/tokyo.jpg', imageAlt: "东京城市示意照片，并非南京实景",
    googleMapsQuery: "中国江苏省南京市",
    excerpt: "从一段散步开始认识南京，在这里整理自己的城市印象与旅行片段。",
    content: [{ heading: '城市笔记', paragraphs: ["这是南京的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。" ] }],
  },
};
