import type { Locale } from './locales';

const zhCN = {
  'meta.title': '机场订阅 - 2026 稳定机场推荐与网络节点实测平台',
  'meta.description': '基于真实晚高峰测速、流媒体与 AI 解锁矩阵的独立机场评测实验室，提供 IPLC/IEPL 专线、便宜高性价比机场与全平台客户端配置指南。',
  'a11y.skip': '跳转至正文内容',
  'a11y.home': '机场订阅 首页',
  'nav.main': '主导航',
  'nav.footer': '页脚导航',
  'nav.home': '首页',
  'nav.jichang': '机场推荐',
  'nav.tizi': '梯子推荐',
  'nav.vpn': 'VPN专区',
  'nav.clash': 'Clash教程',
  'nav.nodes': '全球节点',
  'nav.free': '免费资源',
  'nav.tutorial': '使用教程',
  'nav.brands': '品牌测评库',
  'nav.topics': '专题榜单',
  'nav.clients': '客户端大全',
  'nav.about': '测速与关于',
  'nav.github': '网络看板',
  'nav.getStarted': '选型推荐',
  'nav.language': '语言',
  'theme.group': '界面主题',
  'theme.noir': '暗黑监控',
  'theme.paper': '明亮纸质',

  'hero.badge': '2026 全面核验 · 收录 42 家机场品牌',
  'hero.title': '网络基础设施与节点可观测性评测中心',
  'hero.subtitle': '剔除虚假宣传与套壳水军，基于真实晚高峰 20:30 带宽测速、丢包率与 AI / 流媒体真实解锁矩阵。',
  'hero.browse': '探索品牌评测库',
  'hero.viewPalette': '专题榜单推荐',
  'hero.statMit': '客观中立实测',
  'hero.statPorts': '42 家收录',
  'hero.statTested': '晚高峰无修饰',

  'terminal.comment': '// 真实节点可观测性数据引擎启动中...',
  'terminal.synced': '最新核验同步于 2026-10',
  'terminal.demo': '真机实测输出',
  'terminal.label': 'jichangdingyue.blog 实时网络监控终端',

  'cta.eyebrow': '独立测评 · 客观中立',
  'cta.title': '告别断联与降速，挑选专属稳定节点',
  'cta.body': '按需选择 IEPL 物理专线、极限平价学生套餐或一次性不限时流量包。',
  'cta.bodyHtml': '按需选择 IEPL 物理专线、极限平价学生套餐或一次性不限时流量包。',
  'cta.github': '查看品牌评测库',
  'cta.guide': '客户端配置教程',

  'about.metaDescription': '机场订阅平台的测速规范、数据来源、免责声明及评测原则。',
  'about.eyebrow': '平台说明',
  'about.title': '专业网络实验室，非 VPN 营销中介',
  'about.p1': '本站致力于为开发者、跨境从业者与学术研究人员提供透明、真实、量化的网络节点可观测性数据。',
  'about.p2': '所有测速均注明测试日期与网络环境，不存在商业买榜、不存在夸大其词，未实测项目一律标注为“待核实”。',
};

export type UiKey = keyof typeof zhCN;

export const ui: Record<Locale, Record<UiKey, string>> = { 'zh-CN': zhCN };

export type Translate = (key: UiKey, vars?: Record<string, string | number>) => string;

export function useTranslations(locale: Locale = 'zh-CN'): Translate {
  return (key, vars = {}) =>
    (ui[locale]?.[key] ?? zhCN[key] ?? key).replace(/\{(\w+)\}/g, (match, name: string) => (name in vars ? String(vars[name]) : match));
}
