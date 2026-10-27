import { z } from 'zod';

const webUrl = z
  .string()
  .url()
  .refine(value => ['https:', 'http:'].includes(new URL(value).protocol));

export function resolveSiteUrl(value: string | undefined): string {
  const trimmed = value?.trim() ?? '';
  if (!trimmed) return 'https://jichangdingyue.blog';
  return webUrl.parse(trimmed);
}
const action = z.object({
  label: z.string().min(1),
  href: z.union([z.literal('repository'), z.string().regex(/^\/(?!\/)[a-z0-9/-]*(?:#[a-z0-9-]+)?$/), webUrl]),
});
const ctas = z.object({
  header: action,
  hero: z.object({ primary: action, secondary: action }),
  box: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    body: z.string().min(1),
    primary: action,
    secondary: action,
  }),
});
const schema = z.object({
  name: z.string().min(1),
  terminalLabel: z.string().min(1),
  url: webUrl,
  repository: webUrl,
  author: z.string().min(1),
  version: z.string().min(1),
  ctas: z.object({ 'zh-CN': ctas }),
  nav: z.array(z.object({ href: z.string().regex(/^\/(?!\/)[a-z0-9/-]*$/), key: z.string().min(1) })),
  hero: z.object({
    'zh-CN': z.object({ title: z.string(), description: z.string() }),
  }),
  install: z.array(
    z.object({ id: z.string().regex(/^[a-z0-9-]+$/), label: z.string().min(1), command: z.string().min(1) }),
  ),
  verification: z
    .object({
      google: z.string().optional(),
      bing: z.string().optional(),
      shenma: z.string().optional(),
      baidu: z.string().optional(),
    })
    .optional(),
});

export const parseSite = (value: unknown) => schema.parse(value);
export const site = parseSite({
  name: '机场订阅',
  terminalLabel: '机场订阅',
  url: resolveSiteUrl(process.env.SITE_URL),
  repository: 'https://jichangdingyue.blog',
  author: '机场订阅',
  version: '2026.1',
  verification: {
    google: process.env.PUBLIC_GOOGLE_VERIFICATION || '',
    bing: process.env.PUBLIC_BING_VERIFICATION || '',
    shenma: process.env.PUBLIC_SHENMA_VERIFICATION || '',
    baidu: process.env.PUBLIC_BAIDU_VERIFICATION || '',
  },
  ctas: {
    'zh-CN': {
      header: { label: '机场推荐', href: '/brands' },
      hero: {
        primary: { label: '品牌评测库', href: '/brands' },
        secondary: { label: '专题榜单', href: '/topics' },
      },
      box: {
        eyebrow: '客观公正 · 真实测速',
        title: '告别断联与卡顿，挑选专属稳定节点。',
        body: '基于 2026 最新晚高峰真机测速与 AI / 流媒体真实解锁矩阵，无虚假承诺，透明对比。',
        primary: { label: '浏览品牌测评库', href: '/brands' },
        secondary: { label: '客户端配置教程', href: '/clients' },
      },
    },
  },
  nav: [
    { href: '/', key: 'nav.home' },
    { href: '/jichang', key: 'nav.jichang' },
    { href: '/brands', key: 'nav.brands' },
    { href: '/topics', key: 'nav.topics' },
    { href: '/clients', key: 'nav.clients' },
    { href: '/about', key: 'nav.about' },
  ],
  hero: {
    'zh-CN': {
      title: '网络基础设施与节点可观测性评测中心',
      description: '剔除虚假宣传与套壳水军，基于真实晚高峰 20:30 带宽测速、丢包率与 AI / 流媒体真实解锁矩阵。',
    },
  },
  install: [
    { id: 'clash', label: 'Clash Verge', command: '订阅导入 -> 一键测速 -> 规则分流' },
    { id: 'v2ray', label: 'v2rayN', command: '剪贴板导入 -> 真实延迟测试 -> 启动系统代理' },
  ],
});
