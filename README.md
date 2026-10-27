<div align="center">

# 🌐 机场订阅 (jichangdingyue.blog)

### 独立网络基础设施与节点可观测性评测中心
**Network Infrastructure Observability & Telemetry Lab**

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4.x-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![SSG Static](https://img.shields.io/badge/Output-100%25%20Static%20SSG-emerald?style=flat-square)](https://jichangdingyue.blog)
[![Vitest](https://img.shields.io/badge/Vitest-100%25%20Passed-green?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev)
[![SEO Health](https://img.shields.io/badge/SEO%20Health-97%20%2F%20100%20(A%2B)-brightgreen?style=flat-square)](https://jichangdingyue.blog/Preventive_SEO_Audit_Report.md)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

<p align="center">
  <a href="https://jichangdingyue.blog/"><b>访问官网 (Production)</b></a> •
  <a href="https://jichangdingyue.blog/jichang"><b>机场推荐榜</b></a> •
  <a href="https://jichangdingyue.blog/brands"><b>品牌评测全库 (42家)</b></a> •
  <a href="https://jichangdingyue.blog/clash"><b>Clash 教程指南</b></a> •
  <a href="https://jichangdingyue.blog/about"><b>可观测性白皮书</b></a>
</p>

</div>

---

## 📖 平台愿景与评测原则

**`jichangdingyue.blog`** 是一个专为开发者、科研人员、跨境出海团队及重度流媒体用户打造的**独立第三方网络可观测性评测中心**。

在鱼龙混杂、充斥着商业买榜与套壳跑路盘的市场环境中，我们坚持：

* 🔬 **晚高峰无修饰真机压测**：所有流速数据均于北京时间 **20:30 ~ 22:30** 极端用网高峰期采集，涵盖 TCP 吞吐、UDP 抖动及标准差波动，绝不以闲时虚高数据误导用户。
* 🛡️ **双 ISP 原生住宅 IP 解锁矩阵**：严格核验各节点对 OpenAI ChatGPT、Claude 3.5 Sonnet、Netflix 4K 非自制剧及 Disney+ 的真实可用性，杜绝 Cloudflare 盾牌与机器人封禁。
* ⚖️ **客观中立与证据链透明**：首创图谱化证据链（Speedtest 测速大图 + MiaoKO 流媒体解锁图谱），未实测品牌严谨标明“资料待核实”。
* 💰 **资金安全第一原则**：坚决推行“月付试水、定期备份、双路容灾”避坑铁律，拒绝诱导盲目大额年付。

---

## ⚡ 核心功能与技术特性

### 1. 纯静态预渲染 (100% SSG)
- 基于 **Astro 5.x** 现代内容架构，全站 101 个页面在构建时生成为纯净的静态 HTML。
- **TTFB < 30ms**，零客户端 JS 渲染（CSR）门槛，对 Googlebot、Bingbot、Baiduspider、神马 yisouspider 爬虫极其友好。

### 2. 严密的商业链接隔离保护
- 全站商业推广外链全部经由 `/go/[slug]` 内部中转路由物理隔离；
- 100% 声明 `rel="nofollow sponsored noopener"`；
- 中转页面注入 `<meta name="robots" content="noindex, nofollow">`，并在 `robots.txt` 中严格声明 `Disallow: /go/`，彻底保护站内 PageRank 权重不外泄。

### 3. GEO / AEO 生成式搜索优化架构
- **Answer-First 核心实体提炼卡**：所有专区榜单与品牌页均在首屏部署供 Perplexity、ChatGPT Search 直接引用的自然语言结论摘要。
- **规范结构化数据图谱 (@graph)**：动态集成 `WebSite`、`Organization`、`CollectionPage`、`Product`、`BreadcrumbList`、`HowTo` 及与可见 DOM 100% 对齐的 `FAQPage`。

### 4. 交互式网络可观测性组件
- 🖥️ **TerminalMock**：实时模拟节点探测终端，支持动态打字机效果、RTT 微抖动波形与立即重探；
- 📊 **MegaComparisonTable**：支持 42 家机场一键横向参数比对（Sticky 操作列，完美适配移动端横向滑动）；
- 🔍 **ProofGallery**：真实测速大图与流媒体解锁截图 Lightbox 全屏画廊；
- 🎯 **DecisionTree**：10 秒场景化选型交互决策树。

---

## 🧭 全站核心架构与路由规划

```text
├── 核心专区 (Search Intent Pillars)
│   ├── /                 -> 平台看板、首推品牌、决策树与全景横评大表
│   ├── /jichang          -> 2026 稳定机场推荐排行榜与三大梯队全景
│   ├── /tizi             -> 稳定梯子推荐与科学上网防跑路资金铁律
│   ├── /vpn              -> 企业级加密 VPN 与现代专线机场底层区别解析
│   ├── /clash            -> Clash Verge Rev 下载安装、Mihomo内核与分流教程
│   ├── /nodes            -> 全球节点分布（香港/日本/新加坡/美西双ISP住宅）
│   ├── /tutorial         -> 跨平台客户端使用教程与 5 大报错自查对照表
│   ├── /free             -> 免费节点安全隐患揭秘与正规应急免费试用方案
│   └── /brands           -> 42 家机场品牌评测全库（多维筛选与关键词检索）
│
├── 场景细分专题 (Topic Clusters)
│   ├── /topics/cheap            -> 平价高性价比（月均 5~15 元档精选）
│   ├── /topics/iplc-iepl        -> IPLC / IEPL 物理专线（晚高峰 0 丢包）
│   ├── /topics/pay-as-you-go    -> 不限时/不过期按量流量包（备用神器）
│   └── /topics/ai-streaming     -> AI 与 4K 流媒体特化解锁（双 ISP 住宅 IP）
│
├── 品牌实测深度单页 (Brand Reviews - 42 篇)
│   └── /brands/[slug]    -> 详细评测、晚高峰真机数据、解锁矩阵、套餐表与专属优惠码
│
├── 基础设施与合规 (Trust & Infrastructure)
│   ├── /clients          -> 全平台官方客户端下载直达（Windows/Mac/iOS/Android/OpenWrt）
│   ├── /about            -> 珠海 9Gbps 双线实验室白皮书、FTC 返佣披露与免责声明
│   ├── /404              -> 终端仿真错误回退页（noindex, follow）
│   ├── /robots.txt       -> 全爬虫协议（支持 Google/Bing/Baidu/神马爬虫）
│   └── /sitemap.xml      -> 58 个正式可索引 URL 规范地图
```

---

## 🛠️ 本地开发与构建指南

### 环境要求
- **Node.js**: `>= 22.0.0`
- **包管理器**: `npm` (推荐) 或 `pnpm`

### 快速开始

```bash
# 1. 克隆代码仓库
git clone https://github.com/abcabc98698-dev/jichangdingyue.blog.git
cd jichangdingyue.blog

# 2. 安装依赖项
npm install

# 3. 启动本地开发服务器 (默认端口 4321)
npm run dev

# 4. 执行全套自动化单元与组件测试
npm test

# 5. 执行生产环境静态生成构建
npm run build

# 6. 本地预览打包产物
npm run preview
```

---

## 🧪 自动化测试与质量保障

项目配备了基于 **Vitest** 与 **Playwright** 的端到端与单元测试套件：

```bash
# 运行单元与逻辑测试套件
npm test

# 运行 TypeScript 类型静态校验
npm run check
```

**测试覆盖重点**：
- 隔离逻辑验证（`isolation.test.ts`）：确认所有商业跳转 100% 具备 `nofollow` 与物理隔离。
- 调色板与暗黑模式适配（`palette.test.ts`）：双主题变量正确注入。
- SEO 元数据与 Canonical 完整性（`seo.test.ts`）：确保绝对路径规范与 Sitemap 吻合。
- 核心组件渲染校验（`Layout.test.ts`、`Home.test.ts`、`Lightbox.test.ts`）。

---

## 📈 SEO 与搜索引擎友好度指标

| 指标维度 | 状态 / 得分 | 核心实现与合规表现 |
| :--- | :---: | :--- |
| **全站综合健康评分** | **97 / 100 (A+)** | 依据 Google 搜索中心、Helpful Content System 及 SpamBrain 风控标准全面通过 |
| **预渲染架构 (SSG)** | **100% 静态 HTML** | 93 个编译文件预渲染，0 客户端 JS 渲染依赖，爬虫抓取预算利用率最大化 |
| **规范化矩阵 (Canonical)** | **100% 绝对地址自指** | 严格配置 `trailingSlash: 'never'`，与 XML Sitemap 保持 100% 映射一致 |
| **商业跳转隔离** | **100% 物理合规** | 239 处商业链接均包裹 `rel="nofollow sponsored"`，彻底阻断连坐风控 |
| **内容厚度标准** | **0 薄内容页面** | 42 篇品牌单页平均正文达到 **1,844 汉字**，彻底打破模板指纹 |
| **AI 问答友好 (GEO)** | **Answer-First 全覆盖** | 专区与品牌页顶部全量部署直接回答摘要卡，提高 Perplexity / ChatGPT 引用率 |
| **站长平台兼容** | **全平台预设** | 支持 Google Search Console、Bing、神马（夸克/UC）、百度一键 Meta / DNS 验证 |

---

## 📄 开源许可协议与免责声明

- **开源协议**：本项目基于 [MIT License](LICENSE) 许可开源。
- **免责声明**：本站所有测试数据均来自实验室真实网络环境采样，仅供学术科研、外贸跨境与网络通信技术交流参考。用户在使用相关网络工具时应自觉遵守当地法律法规。

---

<div align="center">
  <sub>Designed with precision by <b>机场订阅网络基础设施实验室</b> · 2026</sub>
</div>
