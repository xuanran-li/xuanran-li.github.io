/**
 * 芜湖 · 中国
 * cityStory：城市介绍；rating 可在内容块中设置（0–5 分，默认 4.5）。
 * 本城市仅保留城市介绍。
 * 图片路径相对网站根目录；城市 id 请保持稳定，以保留已有详情链接。
 */
export default {
  id: "wuhu", city: "芜湖", country: "中国",
  coordinates: [31.3344, 118.3622], // 城市近似中心；替换地点时请更新坐标。
  cityStory: {
    title: "芜湖",
    image: 'assets/images/kyoto.jpg', imageAlt: "京都城市示意照片，并非芜湖实景",
    googleMapsQuery: "中国安徽省芜湖市",
    excerpt: "从一段散步开始认识芜湖，在这里整理自己的城市印象与旅行片段。",
    content: [{ heading: '城市笔记', paragraphs: ["这是芜湖的城市介绍示例。你可以在这里写初到这座城市的感受、喜欢的街区和旅行中的难忘片刻。" ] }],
  },
};
