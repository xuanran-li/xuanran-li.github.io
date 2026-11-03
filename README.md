# 十一十一's Travel Blog

这是一个以地图为入口的个人旅行博客，用来记录去过的城市、吃喝体验、住宿和景点。它由 HTML、CSS 和 JavaScript 组成，可直接放在 GitHub Pages 上运行，没有数据库、后台或构建步骤。

当前内容按指定顺序收录 **43 个城市**；每座城市有一篇城市介绍，以及 **胜地、饮食、膳宿各一条示例**，共 172 篇详情。城市、国家/地区、标题、标签、图片说明及页面提示统一使用中文，包括“香港，香港特别行政区”和“澳门，澳门特别行政区”。站名保留为“十一十一's Travel Blog”；内容顺序和原有英文 ID、详情地址保持不变。这些文字、评分、日期、地点坐标和照片是便于编辑的示例，尚不代表真实到访记录或商户推荐。

## 想修改什么，去哪里修改

| 修改内容 | 文件与定位方式 |
| --- | --- |
| 城市列表、顺序、国家/地区、城市中心坐标 | `js/data.js` → `cityGuides`；搜索 `CITY: Hefei` 等城市标记 |
| 某座城市的介绍与封面 | 该城市区块的 `cityStory` |
| 某座城市的饮食记录 | 该城市区块的 `food` |
| 某座城市的住宿记录 | 该城市区块的 `accommodation` |
| 某座城市的景点记录 | 该城市区块的 `attraction` |
| 标题、摘要、正文、图片、评分、日期、谷歌地图链接 | 对应记录中的字段；见下方示例 |
| 分类名称与分类介绍 | `js/data.js` → `categories`；顶部导航文字同时在 `index.html` 中 |
| 网站名称、浏览器描述、顶部导航、页脚 | `index.html`；页面标题中的博客名还在 `js/app.js` → `siteName`、`document.title` |
| 首页标语、《礼物》诗文和精选卡片 | `js/app.js` → `homeThemes`、`homePoem`、`renderHome()`、`featuredIds` |
| 分类页布局、中文说明、搜索和国家/地区筛选 | `js/app.js` → `renderCollection()`、`descriptions`、`updateCollection()` |
| 详情页布局、地图按钮、关联卡片 | `js/app.js` → `renderArticle()`、`articleMap()` |
| 颜色、字体、间距、手机布局 | `css/styles.css`；搜索对应元素的 class 名 |
| 首页地图的标记、颜色、弹窗、缩放 | `js/map.js` → `markerStyles`、`popup()`、地图适配函数 |
| 谷歌地图首页底图配置 | `js/config.js` → `mapConfig` |
| 路由、筛选、谷歌地图链接生成 | `js/utils.js` |
| 国家/地区旗帜及显示格式 | `js/utils.js` → `countryFlags`、`countryLabel()` |
| 图片文件 | `assets/images/`；来源记录在 `js/data.js` → `imageCredits` |


导航顺序为 **总览 → 城市 → 胜地 → 饮食 → 膳宿**；分类 ID 仍为 `cities`、`attractions`、`food`、`stays`，详情地址不变。首页标语和《礼物》诗文在 `js/app.js` 顶部集中维护，诗歌每个数组元素对应一行；`css/styles.css` 中的 `.home-intro`、`.intro-poem` 控制排版。

首页地图使用整行宽度，已移除右侧城市列表；下方城市索引保留，城市下方显示国旗和国家/地区名。四个分类页统一按 `country` 筛选，例如选择“马来西亚”会显示这个分类下全部马来西亚城市的记录；搜索词可与国家筛选叠加，“重置筛选”同时清空两项。国家选项由当前分类的数据自动去重生成，新增国家后在 `countryFlags` 中补充对应 emoji 即可。

## 最常用：替换一座城市的内容

打开 `js/data.js`，搜索 `CITY: Hefei`。每座城市的四类内容都放在同一个区块中，不必去不同页面重复修改。结构如下：

```js
{
  id: 'hefei',                    // 稳定的城市 ID；也用于详情页地址
  city: '合肥',
  country: '中国',
  coordinates: [31.8206, 117.2272], // 城市坐标：[纬度, 经度]
  cityStory: { /* 城市介绍 */ },
  food: { /* 饮食 */ },
  accommodation: { /* 膳宿 */ },
  attraction: { /* 胜地 */ },
}
```

例如，将该城市的 `food` 整个区块替换为自己的记录：

```js
food: {
  title: '合肥咖啡小记',
  subtitle: '一个安静的午后',
  excerpt: '这里写中文摘要，会显示在卡片和详情页开头。',
  coordinates: [31.8206, 117.2272], // 换成实际店铺坐标
  image: 'assets/images/coffee.jpg',
  imageAlt: '窗边的一杯咖啡',
  rating: 4.8,                     // 0 到 5 的个人评分
  date: '2026-11-03',
  tags: ['咖啡', '安静'],
  googleMapsQuery: '真实店名，中国安徽省合肥市',
  googleMapsUrl: '',               // 可粘贴谷歌地图分享链接，优先于搜索词
  googleMapsEmbedUrl: '',          // 可填写谷歌地图提供的嵌入地址
  content: [
    {
      heading: '咖啡小记',
      paragraphs: ['这里写第一段中文正文。', '这里写第二段中文正文。'],
    },
    {
      heading: '值得记住的事',
      paragraphs: ['这里可以继续补充消费、体验或交通信息。'],
    },
  ],
  gallery: [                      // 可选：正文下方的额外图片
    {
      src: 'assets/images/coffee.jpg',
      alt: '咖啡馆内景',
      caption: '合肥的一个午后',
    },
  ],
},
```

`cityStory`、`accommodation`、`attraction` 使用同样的内容字段。城市、国家/地区、标题、副标题、标签、段落标题、摘要、正文、图片说明和地图搜索词均使用中文。`id`、分类键和文件路径是程序标识，继续保留英文，修改显示文字无需更改它们。日期、评分、副标题等可以在记录内单独填写，覆盖数据转换函数的默认值。

保存文件并刷新浏览器后，首页地图、城市索引、分类卡片、详情页和关联记录会一起更新。它们共用由 `cityGuides` 整理出的 `entries`，通常无需修改数据转换函数。

每座城市的详情地址规则为：

| 内容 | 合肥示例地址 |
| --- | --- |
| 城市 | `#/journal/hefei` |
| 饮食 | `#/journal/hefei-food` |
| 膳宿 | `#/journal/hefei-stay` |
| 胜地 | `#/journal/hefei-attraction` |

修改显示名称时尽量保留 `id`，以免已保存的详情链接失效。调整城市顺序只需移动整个城市区块。新增城市可以复制一个完整区块，修改唯一 `id`、城市、国家/地区、坐标和四份内容。若要在某个城市继续添加饮食、住宿或景点，可将该字段从单个对象改成数组，例如 `food: [{ /* 原记录 */ }, { id: 'hefei-second-cafe', /* 新记录 */ }]`；为新增记录明确填写唯一且稳定的 `id`。修改城市清单或示例数量后，请同步更新 `tests/content.test.js` 中相应检查。

首页精选内容在 `js/app.js` 的 `featuredIds` 中，当前是 `hefei-food`、`huangshan-attraction`、`singapore-stay`；换成其他记录 ID 即可调整这三张卡片。原 `#/plans` 分类地址兼容跳转到“胜地”分类，新的分类地址是 `#/attractions`。

## 谷歌地图链接与小地图

每篇城市和地点详情都保留 **地图定位**，返回本站首页并定位对应标记；另有 **在谷歌地图中打开**，在新标签页打开外部地图，并附上谷歌地图嵌入小地图预览。

- `googleMapsQuery`：用于生成地图搜索链接和默认小地图。城市记录搜索城市名；示例餐饮、住宿和景点暂时搜索该城市的相关类别，避免把虚构名称当作真实商户。
- `googleMapsUrl`：可选。粘贴真实地点的谷歌地图分享链接后，外部地图按钮优先打开该链接。支持 `https://www.google.com/maps/...`、`https://maps.google.com/...`、`https://maps.app.goo.gl/...` 和旧版 `https://goo.gl/maps/...` 地址；无效链接回退到搜索词。
- `googleMapsEmbedUrl`：可选。在谷歌地图中打开真实地点，选择“分享 → 嵌入地图”，只复制 `<iframe>` 的 `src` 地址（以 `https://www.google.com/maps/embed/` 开头）到这个字段，不要粘贴整个 HTML。未填写时根据搜索词自动生成小地图。
- `coordinates`：控制本站首页标记的位置。修改外部地图链接不会自动修改这个坐标。

外部链接和默认嵌入小地图不需要配置本站 API key；小地图需要浏览器能连接谷歌地图，网络不可用时仍可使用独立的外部地图链接。它是地图预览，不是商户照片缩略图。默认小地图使用 `hl=zh-CN` 请求中文界面；手动填写的嵌入链接保留其原有设置。第三方地图自带的商标、版权署名和底图地名由地图服务控制，本站无法逐字替换。关于外部链接格式参见 [谷歌地图链接文档](https://developers.google.com/maps/documentation/urls/guide)。

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

请通过 HTTP 预览，不要直接双击 `index.html`，因为页面使用 JavaScript 模块。照片与 Leaflet 代码保存在本地；地图底图、谷歌地图预览和谷歌字体需要联网。字体加载失败时会使用系统字体。

```sh
npm run check
npm test
```

检查覆盖 JavaScript 语法、中文城市名单与顺序、每城四类记录、全部内容文字的中文覆盖、数据关联、图片文件、详情路由、中文国家筛选和地图链接。

## 首页地图配置

首页默认使用 Leaflet + OpenStreetMap，无需密钥。若要将首页底图换成谷歌地图，填写 `js/config.js`：

```js
export const mapConfig = {
  googleMapsApiKey: 'YOUR_BROWSER_API_KEY',
  googleMapsMapId: 'YOUR_JAVASCRIPT_MAP_ID',
  language: 'zh-CN',
};
```

在 Google Cloud 项目中启用 Maps JavaScript API、创建浏览器 API key 和 JavaScript map ID；将 key 的来源限制为自己的站点和本地预览域名，并限制可调用的 API。`DEMO_MAP_ID` 仅用于开发演示，正式使用时换成自己的 ID。谷歌地图加载失败会尝试切回 Leaflet 预览地图。

首页底图与详情页的外部谷歌地图链接是两项独立功能：不填写 API key 也可以打开详情页中的外部链接。配置说明参见 [谷歌地图 API key 文档](https://developers.google.com/maps/documentation/javascript/get-api-key) 和 [高级标记入门](https://developers.google.com/maps/documentation/javascript/advanced-markers/start)。真实密钥需要在对应域名上另行验证。

## 图片与来源

将自己的照片放入 `assets/images/`，在对应记录的 `image` 或 `gallery[].src` 填写路径，例如 `assets/images/hefei-breakfast.jpg`，同时更新 `imageAlt` / `alt`。为新图片在 `imageCredits` 中记录来源；自己的照片可以注明作者与拍摄信息。测试会检查使用的图片是否有来源记录且文件存在。

现有示例照片来自 Unsplash，原始来源链接在 `js/data.js` 的 `imageCredits` 中。它们仅用于展示版式。Leaflet 许可证保存在 `vendor/leaflet/LICENSE`；地图保留 OpenStreetMap 及其贡献者署名，使用底图时遵守其 [地图图块使用政策](https://operations.osmfoundation.org/policies/tiles/)。

## GitHub Pages

代码可直接用于 GitHub Pages，无须服务端或构建步骤。本次修改仅保存在本地项目中，未自动推送或部署。

发布时将代码提交到仓库，在仓库 Pages 设置中选择发布分支和根目录即可。项目保留 `.nojekyll`；详情与分类使用 hash 路由，因此直接打开或刷新 `https://xuanran-li.github.io/#/journal/hefei` 会先加载 `index.html`，无需额外重写规则。
