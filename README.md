# 十一十一‘s Blog

这是一个以地图为入口的个人旅行博客，用来记录去过的城市、吃喝体验、住宿和景点。它由 HTML、CSS 和 JavaScript 组成，可直接放在 GitHub Pages 上运行，没有数据库、后台或构建步骤。

当前内容按指定顺序收录 **43 个城市**；每座城市有一篇城市介绍，以及 **Food & Drinks、Accommodations、Attractions 各一条示例**，共 172 篇详情。城市与国家/地区的英文名称按提供的清单保留，包括 `Hong Kong, Hong Kong SAR` 和 `Macau, Macau SAR`。这些文字、评分、日期、地点坐标和照片是便于编辑的示例，尚不代表真实到访记录或商户推荐。

## 想修改什么，去哪里修改

| 修改内容 | 文件与定位方式 |
| --- | --- |
| 城市列表、顺序、国家/地区、城市中心坐标 | `js/data.js` → `cityGuides`；搜索 `CITY: Hefei` 等城市标记 |
| 某座城市的介绍与封面 | 该城市区块的 `cityStory` |
| 某座城市的饮食记录 | 该城市区块的 `food` |
| 某座城市的住宿记录 | 该城市区块的 `accommodation` |
| 某座城市的景点记录 | 该城市区块的 `attraction` |
| 标题、摘要、正文、图片、评分、日期、Google Maps 链接 | 对应记录中的字段；见下方示例 |
| 分类名称与分类介绍 | `js/data.js` → `categories`；顶部导航文字同时在 `index.html` 中 |
| 网站名称、浏览器描述、顶部导航、页脚 | `index.html`；页面标题中的博客名还在 `js/app.js` → `document.title` |
| 首页标题、说明和精选卡片 | `js/app.js` → `renderHome()`、`featuredIds` |
| 分类页布局、中文说明、搜索和城市筛选 | `js/app.js` → `renderCollection()`、`descriptions`、`updateCollection()` |
| 详情页布局、地图按钮、关联卡片 | `js/app.js` → `renderArticle()`、`articleMap()` |
| 颜色、字体、间距、手机布局 | `css/styles.css`；搜索对应元素的 class 名 |
| 首页地图的标记、颜色、弹窗、缩放 | `js/map.js` → `markerStyles`、`popup()`、地图适配函数 |
| Google Maps 首页底图配置 | `js/config.js` → `mapConfig` |
| 路由、筛选、Google Maps URL 生成 | `js/utils.js` |
| 图片文件 | `assets/images/`；来源记录在 `js/data.js` → `imageCredits` |

## 最常用：替换一座城市的内容

打开 `js/data.js`，搜索 `CITY: Hefei`。每座城市的四类内容都放在同一个区块中，不必去不同页面重复修改。结构如下：

```js
{
  id: 'hefei',                    // 稳定的城市 ID；也用于详情页地址
  city: 'Hefei',
  country: 'China',
  coordinates: [31.8206, 117.2272], // 城市坐标：[纬度, 经度]
  cityStory: { /* 城市介绍 */ },
  food: { /* Food & Drinks */ },
  accommodation: { /* Accommodations */ },
  attraction: { /* Attractions */ },
}
```

例如，将该城市的 `food` 整个区块替换为自己的记录：

```js
food: {
  title: 'My Hefei Café',
  subtitle: 'A quiet afternoon',
  excerpt: '这里写中文摘要，会显示在卡片和详情页开头。',
  coordinates: [31.8206, 117.2272], // 换成实际店铺坐标
  image: 'assets/images/coffee.jpg',
  imageAlt: 'A cup of coffee by the window',
  rating: 4.8,                     // 0 到 5 的个人评分
  date: '2026-11-03',
  tags: ['Coffee', 'Quiet'],
  googleMapsQuery: '真实店名, Hefei, China',
  googleMapsUrl: '',               // 可粘贴 Google Maps 分享链接，优先于搜索词
  googleMapsEmbedUrl: '',          // 可填写 Google Maps 提供的嵌入地址
  content: [
    {
      heading: 'My coffee notes',
      paragraphs: ['这里写第一段中文正文。', '这里写第二段中文正文。'],
    },
    {
      heading: 'Worth remembering',
      paragraphs: ['这里可以继续补充消费、体验或交通信息。'],
    },
  ],
  gallery: [                      // 可选：正文下方的额外图片
    {
      src: 'assets/images/coffee.jpg',
      alt: 'The café interior',
      caption: 'An afternoon in Hefei',
    },
  ],
},
```

`cityStory`、`accommodation`、`attraction` 使用同样的内容字段。标题、副标题、标签和段落标题保留英文，摘要与正文使用中文。日期、评分、副标题等可以在记录内单独填写，覆盖数据转换函数的默认值。

保存文件并刷新浏览器后，首页地图、城市索引、分类卡片、详情页和关联记录会一起更新。它们共用由 `cityGuides` 整理出的 `entries`，通常无需修改数据转换函数。

每座城市的详情地址规则为：

| 内容 | 合肥示例地址 |
| --- | --- |
| 城市 | `#/journal/hefei` |
| Food & Drinks | `#/journal/hefei-food` |
| Accommodations | `#/journal/hefei-stay` |
| Attractions | `#/journal/hefei-attraction` |

修改显示名称时尽量保留 `id`，以免已保存的详情链接失效。调整城市顺序只需移动整个城市区块。新增城市可以复制一个完整区块，修改唯一 `id`、城市、国家/地区、坐标和四份内容。若要在某个城市继续添加饮食、住宿或景点，可将该字段从单个对象改成数组，例如 `food: [{ /* 原记录 */ }, { id: 'hefei-second-cafe', /* 新记录 */ }]`；为新增记录明确填写唯一且稳定的 `id`。修改城市清单或示例数量后，请同步更新 `tests/content.test.js` 中相应检查。

首页精选内容在 `js/app.js` 的 `featuredIds` 中，当前是 `hefei-food`、`huangshan-attraction`、`singapore-stay`；换成其他记录 ID 即可调整这三张卡片。原 `#/plans` 分类地址兼容跳转到 `Attractions` 分类，新的分类地址是 `#/attractions`。

## Google Maps 链接与小地图

每篇城市和地点详情都保留 **Find on the map**，返回本站首页并定位对应标记；另有 **Open in Google Maps**，在新标签页打开外部地图，并附上 Google Maps 嵌入小地图预览。

- `googleMapsQuery`：用于生成地图搜索链接和默认小地图。城市记录搜索城市名；示例餐饮、住宿和景点暂时搜索该城市的相关类别，避免把虚构名称当作真实商户。
- `googleMapsUrl`：可选。粘贴真实地点的 Google Maps 分享链接后，外部地图按钮优先打开该链接。支持 `https://www.google.com/maps/...`、`https://maps.google.com/...`、`https://maps.app.goo.gl/...` 和旧版 `https://goo.gl/maps/...` 地址；无效链接回退到搜索词。
- `googleMapsEmbedUrl`：可选。在 Google Maps 中打开真实地点，选择“分享 → 嵌入地图”，只复制 `<iframe>` 的 `src` 地址（以 `https://www.google.com/maps/embed/` 开头）到这个字段，不要粘贴整个 HTML。未填写时根据搜索词自动生成小地图。
- `coordinates`：控制本站首页标记的位置。修改外部地图链接不会自动修改这个坐标。

外部链接和默认嵌入小地图不需要配置本站 API key；小地图需要浏览器能连接 Google Maps，网络不可用时仍可使用独立的外部地图链接。它是地图预览，不是商户照片缩略图。关于外部链接格式参见 [Google Maps URLs 文档](https://developers.google.com/maps/documentation/urls/guide)。

当前示例地点的坐标只是城市附近的占位位置，替换为真实记录时应一并更新名称、搜索词/链接和坐标。照片是通用占位图，不是对应商户或城市的实景证明。

## 本地运行与检查

需要 Python 3；使用 npm 快捷命令和测试时需要 Node.js。没有 npm 依赖需要安装。

```sh
npm run dev
```

浏览器打开 [http://127.0.0.1:4173](http://127.0.0.1:4173)。也可直接运行：

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

请通过 HTTP 预览，不要直接双击 `index.html`，因为页面使用 JavaScript 模块。照片与 Leaflet 代码保存在本地；地图底图、Google Maps 预览和 Google Fonts 需要联网。字体加载失败时会使用系统字体。

```sh
npm run check
npm test
```

检查覆盖 JavaScript 语法、城市名单与顺序、每城四类记录、数据关联、图片文件、详情路由、筛选和地图链接。

## 首页地图配置

首页默认使用 Leaflet + OpenStreetMap，无需密钥。若要将首页底图换成 Google Maps，填写 `js/config.js`：

```js
export const mapConfig = {
  googleMapsApiKey: 'YOUR_BROWSER_API_KEY',
  googleMapsMapId: 'YOUR_JAVASCRIPT_MAP_ID',
  language: 'en',
};
```

在 Google Cloud 项目中启用 Maps JavaScript API、创建浏览器 API key 和 JavaScript map ID；将 key 的来源限制为自己的站点和本地预览域名，并限制可调用的 API。`DEMO_MAP_ID` 仅用于开发演示，正式使用时换成自己的 ID。Google Maps 加载失败会尝试切回 Leaflet 预览地图。

首页底图与详情页的外部 Google Maps 链接是两项独立功能：不填写 API key 也可以打开详情页中的外部链接。配置说明参见 [Google Maps API key 文档](https://developers.google.com/maps/documentation/javascript/get-api-key) 和 [Advanced Markers 入门](https://developers.google.com/maps/documentation/javascript/advanced-markers/start)。真实密钥需要在对应域名上另行验证。

## 图片与来源

将自己的照片放入 `assets/images/`，在对应记录的 `image` 或 `gallery[].src` 填写路径，例如 `assets/images/hefei-breakfast.jpg`，同时更新 `imageAlt` / `alt`。为新图片在 `imageCredits` 中记录来源；自己的照片可以注明作者与拍摄信息。测试会检查使用的图片是否有来源记录且文件存在。

现有示例照片来自 Unsplash，原始来源链接在 `js/data.js` 的 `imageCredits` 中。它们仅用于展示版式。Leaflet 许可证保存在 `vendor/leaflet/LICENSE`；地图保留 OpenStreetMap 及其贡献者署名，使用底图时遵守其 [Tile Usage Policy](https://operations.osmfoundation.org/policies/tiles/)。

## GitHub Pages

代码可直接用于 GitHub Pages，无须服务端或构建步骤。本次修改仅保存在本地项目中，未自动推送或部署。

发布时将代码提交到仓库，在仓库 Pages 设置中选择发布分支和根目录即可。项目保留 `.nojekyll`；详情与分类使用 hash 路由，因此直接打开或刷新 `https://xuanran-li.github.io/#/journal/hefei` 会先加载 `index.html`，无需额外重写规则。
