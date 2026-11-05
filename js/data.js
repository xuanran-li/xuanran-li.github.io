/**
 * 数据汇总入口：地图、城市索引、分类卡片和详情页共同读取本文件导出的 entries。
 * 每座城市的内容在 js/cities/data_<城市>_<国家>.js 中独立维护，
 * 例如岘港：js/cities/data_danang_vietnam.js。
 * 新增城市：创建城市文件，在这里添加 import 并加入 cityGuides。
 * cityGuides 的顺序用于分类及同评分城市的次序；首页城市索引始终按评分降序。
 * 分类、公共默认值和图片来源仍在本文件集中维护。
 */
import hefei from './cities/data_hefei_china.js';
import wuhu from './cities/data_wuhu_china.js';
import nanjing from './cities/data_nanjing_china.js';
import huangshan from './cities/data_huangshan_china.js';
import fuyang from './cities/data_fuyang_china.js';
import hangzhou from './cities/data_hangzhou_china.js';
import guangzhou from './cities/data_guangzhou_china.js';
import shenzhen from './cities/data_shenzhen_china.js';
import huizhou from './cities/data_huizhou_china.js';
import dongguan from './cities/data_dongguan_china.js';
import taian from './cities/data_taian_china.js';
import foshan from './cities/data_foshan_china.js';
import kunming from './cities/data_kunming_china.js';
import hong_kong from './cities/data_hong_kong_china.js';
import macau from './cities/data_macau_china.js';
import da_nang from './cities/data_danang_vietnam.js';
import hoi_an from './cities/data_hoi_an_vietnam.js';
import nha_trang from './cities/data_nha_trang_vietnam.js';
import ho_chi_minh_city from './cities/data_ho_chi_minh_city_vietnam.js';
import phnom_penh from './cities/data_phnom_penh_cambodia.js';
import battambang from './cities/data_battambang_cambodia.js';
import siem_reap from './cities/data_siem_reap_cambodia.js';
import kampot from './cities/data_kampot_cambodia.js';
import sihanoukville from './cities/data_sihanoukville_cambodia.js';
import bangkok from './cities/data_bangkok_thailand.js';
import ratchaburi from './cities/data_ratchaburi_thailand.js';
import ayutthaya from './cities/data_ayutthaya_thailand.js';
import phitsanulok from './cities/data_phitsanulok_thailand.js';
import sukhothai from './cities/data_sukhothai_thailand.js';
import khon_kaen from './cities/data_khon_kaen_thailand.js';
import udon_thani from './cities/data_udon_thani_thailand.js';
import vientiane from './cities/data_vientiane_laos.js';
import vang_vieng from './cities/data_vang_vieng_laos.js';
import luang_prabang from './cities/data_luang_prabang_laos.js';
import singapore from './cities/data_singapore_singapore.js';
import johor_bahru from './cities/data_johor_bahru_malaysia.js';
import malacca from './cities/data_malacca_malaysia.js';
import kuala_lumpur from './cities/data_kuala_lumpur_malaysia.js';
import penang from './cities/data_penang_malaysia.js';
import kuching from './cities/data_kuching_malaysia.js';
import miri from './cities/data_miri_malaysia.js';
import labuan from './cities/data_labuan_malaysia.js';
import bandar_seri_begawan from './cities/data_bandar_seri_begawan_brunei.js';

export const categories = [
  { id: 'cities', label: '城市', singular: '城市', description: '收藏沿途的城市，也收藏旅途中的片刻。' },
  { id: 'attractions', label: '胜地', singular: '胜地', description: '记录值得探索的风景，以及转角处的小小发现。' },
  { id: 'food', label: '饮食', singular: '饮食', description: '一杯好咖啡，一顿慢午餐，尝一尝异乡的味道。' },
  { id: 'stays', label: '膳宿', singular: '膳宿', description: '放下行囊，在旅途中找到暂时的家。' },
];

// ===== 城市文件索引：每座城市只登记一次 =====
export const cityGuides = [
  hefei, // 合肥 · 中国
  wuhu, // 芜湖 · 中国
  nanjing, // 南京 · 中国
  huangshan, // 黄山 · 中国
  fuyang, // 阜阳 · 中国
  hangzhou, // 杭州 · 中国
  guangzhou, // 广州 · 中国
  shenzhen, // 深圳 · 中国
  huizhou, // 惠州 · 中国
  dongguan, // 东莞 · 中国
  taian, // 泰安 · 中国
  foshan, // 佛山 · 中国
  kunming, // 昆明 · 中国
  hong_kong, // 香港 · 香港特别行政区
  macau, // 澳门 · 澳门特别行政区
  da_nang, // 岘港 · 越南
  hoi_an, // 会安 · 越南
  nha_trang, // 芽庄 · 越南
  ho_chi_minh_city, // 胡志明市 · 越南
  phnom_penh, // 金边 · 柬埔寨
  battambang, // 马德望 · 柬埔寨
  siem_reap, // 暹粒 · 柬埔寨
  kampot, // 贡布 · 柬埔寨
  sihanoukville, // 西哈努克港 · 柬埔寨
  bangkok, // 曼谷 · 泰国
  ratchaburi, // 叻丕 · 泰国
  ayutthaya, // 大城 · 泰国
  phitsanulok, // 彭世洛 · 泰国
  sukhothai, // 素可泰 · 泰国
  khon_kaen, // 孔敬 · 泰国
  udon_thani, // 乌隆他尼 · 泰国
  vientiane, // 万象 · 老挝
  vang_vieng, // 万荣 · 老挝
  luang_prabang, // 琅勃拉邦 · 老挝
  singapore, // 新加坡 · 新加坡
  johor_bahru, // 新山 · 马来西亚
  malacca, // 马六甲 · 马来西亚
  kuala_lumpur, // 吉隆坡 · 马来西亚
  penang, // 槟城 · 马来西亚
  kuching, // 古晋 · 马来西亚
  miri, // 美里 · 马来西亚
  labuan, // 纳闽 · 马来西亚
  bandar_seri_begawan, // 斯里巴加湾市 · 文莱
];

// ===== 默认设置：只想修改某篇文章时，在对应城市文件的内容块中覆盖这些字段 =====
const entryDefaults = {
  demo: true,
  date: '2026-11-03',
  rating: 4.5,
  googleMapsUrl: '', // 可选：粘贴从谷歌地图复制的地点分享链接。
  googleMapsEmbedUrl: '', // 可选：只粘贴“嵌入地图”代码中的 src 地址，不是整段 iframe。
};

const contentTypes = [
  { key: 'cityStory', category: 'cities', suffix: '', subtitle: '一座城市，一段记忆', tags: ['城市笔记', '示例'] },
  { key: 'food', category: 'food', suffix: 'food', subtitle: '一杯咖啡，一餐好味，一段小憩', tags: ['咖啡', '示例'] },
  { key: 'accommodation', category: 'stays', suffix: 'stay', subtitle: '旅途中歇脚的地方', tags: ['舒适', '示例'] },
  { key: 'attraction', category: 'attractions', suffix: 'attraction', subtitle: '转角处的小小发现', tags: ['步行', '示例'] },
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
  { file: 'assets/images/kyoto.jpg', url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e', credit: 'Unsplash', subject: '京都' },
  { file: 'assets/images/tokyo.jpg', url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf', credit: 'Unsplash', subject: '东京' },
  { file: 'assets/images/shanghai.jpg', url: 'https://unsplash.com/photos/_klbOmCI05I', credit: 'George Dagerotip / Unsplash', subject: '上海' },
  { file: 'assets/images/paris.jpg', url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34', credit: 'Unsplash', subject: '巴黎' },
  { file: 'assets/images/lisbon.jpg', url: 'https://unsplash.com/photos/ljhCEaHYWJ8', credit: 'Aayush Gupta / Unsplash', subject: '里斯本' },
  { file: 'assets/images/copenhagen.jpg', url: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc', credit: 'Unsplash', subject: '哥本哈根' },
  { file: 'assets/images/coffee.jpg', url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb', credit: 'Unsplash', subject: '咖啡馆内景示意照片，并非所列地点实景' },
  { file: 'assets/images/bakery.jpg', url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff', credit: 'Unsplash', subject: '面包示意照片，并非所列地点实景' },
  { file: 'assets/images/stay.jpg', url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32', credit: 'Unsplash', subject: '客房示意照片，并非所列住宿实景' },
];

export const getEntry = (id) => entries.find((entry) => entry.id === id);
export const getCategory = (id) => categories.find((category) => category.id === id);
export const entryUrl = (entryOrId) => `#/journal/${typeof entryOrId === 'string' ? entryOrId : entryOrId.id}`;
