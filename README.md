# 十一十一‘s Blog

以地图为入口的个人旅行博客。首页地图、城市列表和分类卡片共用 `js/data.js` 中的内容，每条记录只有一个详情地址，例如 `#/journal/kyoto`。

## 本地运行

需要 Python 3；使用 npm 快捷命令和测试时需要 Node.js。没有需要安装的 npm 依赖，也不需要构建。

```sh
npm run dev
```

浏览器打开 [http://127.0.0.1:4173](http://127.0.0.1:4173)。也可以直接运行：

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

请通过 HTTP 预览，不要直接双击 `index.html`；浏览器通常不允许 `file://` 页面加载 JavaScript 模块。地图底图和 Google Fonts 需要联网，图片与 Leaflet 代码保存在本地；字体加载失败时会使用系统字体。

```sh
npm run check
npm test
```

检查覆盖 JavaScript 语法、数据关联、图片是否存在、详情地址与分类筛选。Google Maps 使用真实密钥后的显示仍需要在对应域名上验证。

## 第一版功能

- 地图支持拖动、缩放、分类筛选、地点弹窗，以及跳转图文详情。
- 分类为 Cities、Food & Drink、Travel Plans、Accommodations，支持搜索和城市筛选。
- 首页城市列表保留数据文件顺序，点击城市进入对应详情。
- 每张卡片显示英文名称、城市与国家、个人评分；正文和摘要使用中文。
- 详情页提供关联记录和 Find on the map，可返回地图定位当前记录。
- 桌面与手机布局；手机导航可展开。

## 地图配置

第一版默认使用 Leaflet + OpenStreetMap 官方底图进行免密钥预览。Google Maps 的接入代码已准备好，填写 `js/config.js` 后会优先使用 Google Maps；加载失败会尝试切回预览地图。博客自己的城市名称、标记与弹窗使用英文；预览底图的地名由 OpenStreetMap 决定，可能使用当地语言。Google Maps 配置使用 `language: 'en'`。

```js
export const mapConfig = {
  googleMapsApiKey: 'YOUR_BROWSER_API_KEY',
  googleMapsMapId: 'YOUR_JAVASCRIPT_MAP_ID',
  language: 'en',
};
```

接入步骤：

1. 在自己的 Google Cloud 项目中设置结算账户、启用 Maps JavaScript API，并创建 API key。
2. 为高级标记创建 JavaScript map ID。代码中的 `DEMO_MAP_ID` 仅用于开发演示，正式使用时换成自己的 map ID。
3. 将浏览器 key 限制为指定网站来源，例如 `https://xuanran-li.github.io/*`，本地调试时按需要加入 `http://127.0.0.1:4173/*`；同时限制该 key 只能调用 Maps JavaScript API。
4. 填写配置后刷新页面，确认地图的服务标识以及标记弹窗。

浏览器地图 key 会出现在前端代码和请求中，来源和 API 限制应在 Google Cloud 设置。不要在这里放服务账户私钥或其他后端密钥。参见 [Google Maps API key 配置](https://developers.google.com/maps/documentation/javascript/get-api-key) 和 [Advanced Markers 入门](https://developers.google.com/maps/documentation/javascript/advanced-markers/start)。

## 替换或新增内容

编辑 `js/data.js` 的 `entries` 数组。图片放在 `assets/images/`，路径相对网站根目录填写。

```js
{
  id: 'kyoto-my-cafe',       // 保持稳定、唯一，使用小写英文与连字符
  category: 'food',         // cities / food / plans / stays
  title: 'My Kyoto Cafe',
  city: 'Kyoto',
  country: 'Japan',
  cityId: 'kyoto',           // 关联已有城市记录的 id
  coordinates: [35.0047, 135.7712], // 纬度在前，经度在后
  image: 'assets/images/my-cafe.jpg',
  imageAlt: 'A cup of coffee by the window',
  excerpt: '这里写中文摘要。',
  subtitle: 'A quiet afternoon',
  rating: 4.8,               // 0 到 5
  date: '2026-11-03',
  tags: ['Coffee', 'Quiet'],
  content: [
    { heading: 'The first impression', paragraphs: ['这里写中文正文。'] },
  ],
  gallery: [                // 可选
    { src: 'assets/images/my-cafe-detail.jpg', alt: 'Window-side table', caption: 'A little afternoon pause' },
  ],
}
```

新增城市时使用 `category: 'cities'`，并将 `cityId` 设为该城市自己的 `id`。后续地点通过 `cityId` 与城市关联，地图、分类、城市列表会自动读取数据。首页底部三张精选卡片的记录 ID 位于 `js/app.js` 的 `featuredIds`。

当前包含 6 座城市、3 条饮食记录、2 份行程与 2 条住宿记录，全部是演示内容，评分与日期也不是作者真实经历。示例咖啡馆和住宿名称不代表真实商户，配图为示意照片。替换为真实内容后，还需同步修改 `index.html`、`js/app.js` 中的 Sample edition / Sample story 等文案，以及数据中的 `demo` 标记。

## 文件结构

```text
index.html              页面入口、导航、页脚
css/styles.css          全站样式及响应式布局
js/app.js               首页、分类页、详情页与交互
js/data.js              统一内容数据、图片来源
js/map.js               Google Maps / Leaflet 适配
js/config.js            Google Maps 配置
js/utils.js             URL、筛选与文本转义
assets/images/          本地示例图片
vendor/leaflet/         Leaflet 1.9.4 及其许可证
tests/content.test.js   数据与核心导航逻辑检查
```

## GitHub Pages

代码可直接用于 GitHub Pages，无须服务端或构建步骤。当前只完成本地代码，未推送或部署。

决定发布时，可将代码提交到仓库，再在 GitHub 仓库的 Pages 设置中选择对应分支与根目录。项目保留 `.nojekyll`，详情与分类使用 hash 路由，因此直接打开或刷新 `https://xuanran-li.github.io/#/journal/kyoto` 仍会先加载 `index.html`，无需额外重写规则。

## 图片和地图来源

示例照片来自 Unsplash，本地文件与原始来源链接列在 `js/data.js` 的 `imageCredits` 中。城市照片用于演示城市主题，咖啡馆、面包和客房照片用于通用场景展示，不应视作对应商户的实景证明。

Leaflet 许可证保存在 `vendor/leaflet/LICENSE`。地图中保留 OpenStreetMap 及其贡献者的署名；切换到 Google Maps 后由 Google Maps 显示其归属信息。OpenStreetMap 公共图块服务适合正常交互浏览，使用时遵守其 [Tile Usage Policy](https://operations.osmfoundation.org/policies/tiles/)。
