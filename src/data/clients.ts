export interface ClientApp {
  name: string;
  os: 'Windows' | 'Android' | 'iOS' | 'macOS' | 'Linux' | 'OpenWrt';
  core: string;
  features: string[];
  level: '新手推荐' | '进阶玩家' | '极客专业';
  isPaid: boolean;
  downloadUrl: string;
  guideSummary: string;
}

export const clients: ClientApp[] = [
  // Windows
  {
    name: 'Clash Verge Rev',
    os: 'Windows',
    core: 'Mihomo (Clash Meta)',
    features: ['内置新版 Mihomo 内核', '支持 TUN 模式全局接管', '图形化策略组与分流规则', '热更新订阅'],
    level: '新手推荐',
    isPaid: false,
    downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
    guideSummary: '目前 Windows 平台维护最活跃、界面最美观的 Clash 客户端，完美兼容各类机场订阅。',
  },
  {
    name: 'v2rayN',
    os: 'Windows',
    core: 'Xray / sing-box',
    features: ['支持 VLESS-Reality、Hysteria 2、Trojan 等全协议', '真机批量测速', '轻量占用低'],
    level: '进阶玩家',
    isPaid: false,
    downloadUrl: 'https://github.com/2dust/v2rayN/releases',
    guideSummary: '经典老牌代理客户端，对新协议（如 VLESS、Hy2）支持最为敏捷，调优选项极其丰富。',
  },
  {
    name: 'FlClash',
    os: 'Windows',
    core: 'Mihomo',
    features: ['跨平台统一 Fluent 现代设计', '规则分流管理', '极简上手'],
    level: '新手推荐',
    isPaid: false,
    downloadUrl: 'https://github.com/chen08209/FlClash/releases',
    guideSummary: '基于 Flutter 开发的高颜值现代化客户端，操作逻辑清晰明了。',
  },
  {
    name: 'Hiddify',
    os: 'Windows',
    core: 'sing-box',
    features: ['零配置自动优选节点', '全协议支持', '多国语言'],
    level: '新手推荐',
    isPaid: false,
    downloadUrl: 'https://github.com/hiddify/hiddify-next/releases',
    guideSummary: '设计理念极其现代，对新手极度友好，支持一键连接最快节点。',
  },

  // Android
  {
    name: 'v2rayNG',
    os: 'Android',
    core: 'Xray',
    features: ['全协议支持', '分应用代理 (分流绕过大陆)', '扫码与订阅一键导入'],
    level: '新手推荐',
    isPaid: false,
    downloadUrl: 'https://github.com/2dust/v2rayNG/releases',
    guideSummary: '安卓平台装机必备工具，稳定运行不掉后台，支持针对单个国内 App 设置绕过。',
  },
  {
    name: 'FlClash (Android)',
    os: 'Android',
    core: 'Mihomo',
    features: ['与 PC 端相同的极简 UI', 'Clash 规则订阅解析', '策略组可视化'],
    level: '新手推荐',
    isPaid: false,
    downloadUrl: 'https://github.com/chen08209/FlClash/releases',
    guideSummary: '安卓端颜值出众的 Mihomo 客户端，适合习惯 Clash 配置的用户。',
  },
  {
    name: 'Karing (Android)',
    os: 'Android',
    core: 'sing-box',
    features: ['支持多格式订阅', '规则路由简单', '开源干净'],
    level: '新手推荐',
    isPaid: false,
    downloadUrl: 'https://github.com/KaringX/karing/releases',
    guideSummary: '基于 sing-box 打造的跨平台新生代利器，界面现代。',
  },

  // iOS
  {
    name: 'Shadowrocket (小火箭)',
    os: 'iOS',
    core: '定制轻量内核',
    features: ['支持扫描/URL一键导入', '分流规则覆盖主流国内应用', '节点延迟排序与证书安装'],
    level: '新手推荐',
    isPaid: true,
    downloadUrl: 'https://apps.apple.com/app/shadowrocket/id932747118',
    guideSummary: 'iOS 生态中最具性价比的代理神器（需非国区 Apple ID），上手零难度。',
  },
  {
    name: 'Stash',
    os: 'iOS',
    core: 'Clash Meta',
    features: ['iOS 版 Clash 首选', '支持重写覆写与按需连接 (On Demand)', '策略组优雅呈现'],
    level: '进阶玩家',
    isPaid: true,
    downloadUrl: 'https://apps.apple.com/app/stash/id1596063349',
    guideSummary: '完美继承 Clash 生态的 iOS 规则分流客户端，配置灵活强大。',
  },
  {
    name: 'Quantumult X (圈X)',
    os: 'iOS',
    core: '定制高性能内核',
    features: ['极致规则分流', 'JavaScript 脚本动态覆写', '节点状态图表分析'],
    level: '极客专业',
    isPaid: true,
    downloadUrl: 'https://apps.apple.com/app/quantumult-x/id1453996191',
    guideSummary: 'iOS 上的顶级网络调试与分流软件，适合喜欢折腾规则与高级特性的老玩家。',
  },
  {
    name: 'Karing (iOS)',
    os: 'iOS',
    core: 'sing-box',
    features: ['美区 App Store 免费获取', '多格式导入', '简洁易用'],
    level: '新手推荐',
    isPaid: false,
    downloadUrl: 'https://apps.apple.com/app/karing/id6472431552',
    guideSummary: '少数在 App Store 上提供免费下载且功能完整的新一代代理工具。',
  },

  // macOS
  {
    name: 'Clash Verge Rev (Mac)',
    os: 'macOS',
    core: 'Mihomo',
    features: ['原生适配 Apple Silicon M 系列芯片', 'TUN 模式内核级接管', '沉浸式暗黑风格'],
    level: '新手推荐',
    isPaid: false,
    downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
    guideSummary: 'Mac 用户的首选代理软件，与 macOS 系统深度契合，内存消耗小。',
  },
  {
    name: 'Surge Mac',
    os: 'macOS',
    core: 'Surge 引擎',
    features: ['企业级流量抓包分析', '网关模式 (直接接管局域网设备)', '极低内存损耗'],
    level: '极客专业',
    isPaid: true,
    downloadUrl: 'https://nssurge.com/mac',
    guideSummary: 'Mac 平台上综合性能与网络调试工具的顶峰，专业开发者的生产力利器。',
  },

  // Linux
  {
    name: 'v2rayA',
    os: 'Linux',
    core: 'Xray / v2ray-core',
    features: ['WebUI 浏览器后台管理', '一键透明网关代理', '支持 Docker 部署'],
    level: '进阶玩家',
    isPaid: false,
    downloadUrl: 'https://github.com/v2rayA/v2rayA',
    guideSummary: '适合 Linux 桌面或作为家庭局域网软路由透明代理的强大 Web 控制台。',
  },
  {
    name: 'Clash Verge Rev (Linux)',
    os: 'Linux',
    core: 'Mihomo',
    features: ['提供 AppImage / Deb / RPM', '桌面通知与托盘', '系统代理一键切换'],
    level: '新手推荐',
    isPaid: false,
    downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
    guideSummary: 'Linux 发行版（Ubuntu、Arch、Fedora）最顺手的桌面图形客户端。',
  },

  // OpenWrt
  {
    name: 'OpenClash',
    os: 'OpenWrt',
    core: 'Mihomo / Clash',
    features: ['局域网所有设备无感科学上网', '智能 DNS 防污染分流', '策略组规则细化'],
    level: '进阶玩家',
    isPaid: false,
    downloadUrl: 'https://github.com/vernesong/OpenClash',
    guideSummary: '软路由/硬路由刷机后实现全屋智能家电与电视无感翻墙的标配插件。',
  },
  {
    name: 'PassWall 2',
    os: 'OpenWrt',
    core: 'Xray / sing-box',
    features: ['多节点负载均衡分流', '支持国内常用网站直接直连', '资源消耗极低'],
    level: '进阶玩家',
    isPaid: false,
    downloadUrl: 'https://github.com/xiaorouji/openwrt-passwall',
    guideSummary: '以稳定快速著称的软路由经典插件，配置简单、省CPU。',
  },
];

export const clientPlatforms = ['Windows', 'Android', 'iOS', 'macOS', 'Linux', 'OpenWrt'] as const;
