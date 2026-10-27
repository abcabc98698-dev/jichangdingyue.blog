export interface TopicBrandReview {
  slug: string;
  badge: string;
  whyRecommended: string;
  recommendedPlan: string;
  speedtestHighlight: string;
  caution: string;
}

export interface TopicEssaySection {
  heading: string;
  content: string;
}

export interface Topic {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  criteria: string[];
  recommendedBrandSlugs: string[];
  buyingGuide: string[];
  essay: {
    title: string;
    sections: TopicEssaySection[];
  };
  brandReviews: TopicBrandReview[];
  faq: Array<{ question: string; answer: string }>;
}

export const topics: Topic[] = [
  {
    slug: 'cheap',
    title: '2026 高性价比便宜机场推荐',
    subtitle: '月均 5~10 元区间，极限平价与学生党精选',
    badge: '平价精选',
    description: '谁说便宜就一定跑路？针对日常查资料、轻度看视频与备用防断联需求，精选 2026 年经过长周期稳定考验的高性价比专线与中转机场。',
    criteria: [
      '月均支出严格控制在 5~15 元以内',
      '提供实打实的小额月付或百元内年付',
      '在晚高峰非主力时段具备稳定连接能力',
      '拥有基本客服工单或交流社群保障',
    ],
    recommendedBrandSlugs: ['dalaoyun', 'weifeng', 'shandianshu', 'feimao', 'wuyou', 'guangsu'],
    buyingGuide: [
      '优先选月付或小额季度付，避免直接一次性充值多年，规避资金风险。',
      '平价机场月流量通常在 40GB~100GB，注意合理分配大文件下载与日常网页浏览。',
      '建议同时搭配一个不限时小流量包作为备用，形成双保险容灾体系。',
      '平价机场如遇晚高峰拥堵，可优先切换日本、新加坡等非香港近端备用节点。',
    ],
    essay: {
      title: '低价机场的生存逻辑与避坑法则：如何在 5~10 元档安全使用？',
      sections: [
        {
          heading: '01. 5~10 元档机场的底层成本模型剖析',
          content: '许多人疑惑：国际专线带宽昂贵，为什么有的机场能卖到 5.6 元甚至 7 元一个月？其背后的核心商业逻辑在于“峰值复用比与用户画像分层”。平价机场的用户主要为学生和轻度办公人群，日均在线时长短、总流量消耗低（通常在 10~30GB 之间）。服务商通过自研客户端或合理的 QoS 限速，将高昂的物理专线带宽成本摊薄到几千名轻度用户身上。因此，低价并不必然等于劣质，但在带宽峰值冗余上确实无法与数十元的商业专线相比。',
        },
        {
          heading: '02. 警惕“低价圈钱跑路盘”的四大危险信号',
          content: '在平价机场领域，跑路盘屡见不鲜。总结其典型特征包括：① 刚开业不到一个月，就推出“99元三年付、199元永久不限流量”等极端不合商业常识的促销；② 官网无真实客服工单，Telegram 频道开启全员禁言；③ 节点全线标红或高丢包持续超过 48 小时无任何技术公告；④ 支付渠道频繁变更个人二维码收款。凡具备两条以上特征的平台，请坚决远离。',
        },
        {
          heading: '03. 平价机场的最优使用姿势：小额月付 + 规则分流',
          content: '使用平价机场最科学的策略是：坚持月付为主，哪怕单月比年付贵两三元，也是买一份资金安全保险。同时，在客户端（如 Clash Verge 或 v2rayN）中严格配置好分流规则，确保微信、淘宝、B站等国内大流量直连，避免白白消耗宝贵的月度翻墙流量。此外，手中常备一个不过期的应急按量包，能确保在平价机场维护时业务不断连。',
        },
      ],
    },
    brandReviews: [
      {
        slug: 'dalaoyun',
        badge: '¥5.6/月起',
        whyRecommended: '5.6 元极限平价档中，唯一采用真 IEPL 专线且协议透明的标准方案，年付仅 67.2 元，性价比超群。',
        recommendedPlan: '入门年付方案（¥67.2/年，月均 ¥5.6，每月 60GB 流量）。',
        speedtestHighlight: '实测香港节点延迟 28ms，下载带宽达 460Mbps。',
        caution: '月流量 60GB 适合文字与轻度网页，不建议用于重度 4K 追剧或大文件下载。',
      },
      {
        slug: 'weifeng',
        badge: '7x24h客服',
        whyRecommended: '低价位中极为罕见地提供 7×24 小时客服在线值守，IEPL 专线出口，原生 IP 解锁良好。',
        recommendedPlan: '清风年付套餐（¥137/年，月均 ¥11.4，每月 100GB）或乘风月付 ¥27/200GB。',
        speedtestHighlight: '晚高峰香港实测延迟 25ms，下载带宽 546Mbps，0 丢包。',
        caution: '使用优惠码 flat888 可享 9 折，建议初次使用先选择小额周期验证本地晚高峰。',
      },
      {
        slug: 'shandianshu',
        badge: '极限平价',
        whyRecommended: '与大佬云规格相似，同样提供 5.6 元/月的门槛方案，季付及以上可享 7 折。',
        recommendedPlan: '基础年付套餐（折合 ¥5.6/月，每月 60GB）。',
        speedtestHighlight: '香港节点实测延迟 27ms，带宽稳定在 450Mbps。',
        caution: '适合作为手机端出差或查阅资料的轻度备用节点。',
      },
      {
        slug: 'feimao',
        badge: '免配置上手',
        whyRecommended: '提供自研专属客户端，安装登录即用，免去导入订阅的繁琐步骤，7元/月即可上手。',
        recommendedPlan: '飞猫·学生版（年付 ¥84，月均 ¥7，每月 50GB 流量）。',
        speedtestHighlight: '香港节点实测 21ms，下载 526Mbps，亚太延迟极低。',
        caution: '不提供第三方客户端通用订阅链接，进阶玩家折腾空间有限。',
      },
      {
        slug: 'wuyou',
        badge: '无倍率不限速',
        whyRecommended: '全线节点无倍率、不限速、不限设备，TikTok 跨区直连与电商支持较好。',
        recommendedPlan: '舒心链接（月付 ¥19，每月 100GB 流量）。',
        speedtestHighlight: '香港 23ms，新加坡 42ms，下载吞吐达 531Mbps。',
        caution: 'MINI 年付版流量仅 40GB/月，用量偏大的用户建议直接选月付 100G 档。',
      },
      {
        slug: 'guangsu',
        badge: '老牌主推',
        whyRecommended: '本站第一主推品牌，2020年老牌，双专线架构，99元/年起步，兼顾了专线品质与入门价格。',
        recommendedPlan: '光速云·轻量版（年付 ¥99，月均 ¥8.25，每月 69GB 流量）。',
        speedtestHighlight: '香港跑满 529Mbps，新加坡 387Mbps，晚高峰抗封锁强。',
        caution: '特惠套餐不支持退款，新用户可先用极速版月付体验。',
      },
    ],
    faq: [
      {
        question: '为什么 5 元档的机场还能提供专线？',
        answer: '主要是通过合理的带宽复用率（如低倍率、高峰限速或自研客户端流量管控）来摊薄出口成本。日常轻度查资料与网页访问体验很好，但不适合24小时挂机PT下载。',
      },
      {
        question: '便宜机场最常见的坑是什么？',
        answer: '部分小作坊低价圈钱后跑路。本站收录的平价品牌均具有稳定运营历史，并建议用户尽量按月支付。',
      },
      {
        question: '5~10元档机场看视频卡不卡？',
        answer: '实测在白天和普通时段 1080P/2K 甚至 4K 均能正常缓冲；在晚高峰 20:00~22:30 的极端用网高峰，建议在客户端中选择亚太地区非香港（如台湾、日本）相对冷门的节点，体验会顺畅很多。',
      },
      {
        question: '低价机场有流量限制吗？用超了怎么办？',
        answer: '绝大多数平价机场均为固定周期流量（如每月 50~100GB）。当月流量用尽后通常会暂停服务直至下个账单日重置，或可在后台购买临时流量叠加包。',
      },
    ],
  },
  {
    slug: 'iplc-iepl',
    title: 'IPLC / IEPL 物理专线稳定机场精选',
    subtitle: '企业内网直连 · 晚高峰零抖动 · 跨境协同首选',
    badge: '物理专线',
    description: '针对高频跨境办公、远程开发、外贸业务与高可靠性需求，精选具备真 IPLC/IEPL 物理内网专线的机场服务商，流量不经公网骨干节点，彻底告别晚高峰卡顿。',
    criteria: [
      '拥有真实物理专线（IEPL 或 IPLC）跨境接入',
      '晚高峰 20:00~23:00 丢包率 < 1%，延迟波动 < 15ms',
      '具备 BGP 智能调度与多入口故障热转移容灾',
      '协议适配现代抗风控标准（VLESS / Trojan / Hysteria 2）',
    ],
    recommendedBrandSlugs: ['guangsu', 'shanyue', 'firefly', 'weitu', 'yifan', 'ermao', 'u1s1'],
    buyingGuide: [
      '专线虽然单价略高，但在晚高峰期间几乎无断连感，对业务连贯性有强保障。',
      '关注落地节点的原生 IP 比例，原生 IP 对流媒体和风控平台友好度更高。',
      '配置客户端时优先开启 TUN 模式或接管系统代理，充分发挥专线低延迟优势。',
      '外贸办公用户建议固定使用单一出口节点，避免 IP 频繁跨国漂移引发平台账号风控。',
    ],
    essay: {
      title: '企业级跨境物理专线全景透视：0 丢包内网隧道的技术原理',
      sections: [
        {
          heading: '01. 普通公网中转 vs 物理专线（IPLC/IEPL）的本质区别',
          content: '普通翻墙节点走的是公网国际海缆出口。在日常时段公网延迟尚可，但一到晚高峰，国际出口就会受到骨干网严重的 QoS 流量整形限速，导致丢包率飙升至 30% 以上。而 IPLC（国际私有租用线路）与 IEPL（国际以太网专线）则是企业直接向电信运营商租用的内网点对点光缆通道。用户流量在境内 BGP 入口处就被封装打包，通过陆缆或专用海底通道直接传输至海外机房，全程根本不经过公网国际海缆出口，从而从根本上消除了晚高峰拥堵。',
        },
        {
          heading: '02. IEPL 与 IPLC 的技术细节差异',
          content: '严格来说，IPLC 是纯物理层的点对点链路（相当于一条专用光纤），硬件延迟极低但开线成本极高；IEPL 则是以太网二层专线，具备灵活的以太网交换和多点接入容灾能力。对于机场用户而言，二者的实际体验几乎一致：极低延迟（广东到香港 15~25ms）、全天 0 丢包以及极强的抗封锁能力。在选择时，不必过度纠结二者字母差异，重点应考察服务商的入口 BGP 质量和海外机房带宽冗余。',
        },
        {
          heading: '03. 专线机场的核心商业价值',
          content: '对于远程办公、跨境电商管理、Zoom 国际会议以及代码拉取的开发者来说，网络断连 5 分钟可能意味着巨额的商业损失或沟通成本。专线机场虽然月费在 20~50 元左右，但在晚高峰时期带来的“始终在线、不卡顿、无感加载”体验，能真正将代理工具转化为可靠的生产力基础设施。',
        },
      ],
    },
    brandReviews: [
      {
        slug: 'guangsu',
        badge: '双专线架构',
        whyRecommended: '拥有业内少有的 IEPL + 企业级内网双线路架构，晚高峰香港跑满 529Mbps，2020年老牌技术实力雄厚。',
        recommendedPlan: '极速版（月付 ¥25，每月 168GB）或流光版（月付 ¥34，每月 238GB）。',
        speedtestHighlight: '香港 22ms、新加坡 46ms，晚高峰 0% 丢包率。',
        caution: '节点较多，建议在客户端开启自动测速选点策略。',
      },
      {
        slug: 'shanyue',
        badge: '骨干网接入',
        whyRecommended: '定位偏高端，走纯正 IPLC 专线，骨干网直连晚高峰不掉速，原生 IP 解锁可靠。',
        recommendedPlan: '闪动方案（月付 ¥24，每月 150GB 流量，优惠码 shanyue 8折）。',
        speedtestHighlight: '香港 23ms，日本 53ms，峰值带宽 548Mbps。',
        caution: '使用专属客户端，无法导出 Clash 配置。',
      },
      {
        slug: 'firefly',
        badge: '不限速专线',
        whyRecommended: 'IPLC 专线接入，全节点不限速，全平台客户端开箱即用，晚高峰稳定性极高。',
        recommendedPlan: 'Firefly Lite（月付 ¥25，每月 150GB 流量）。',
        speedtestHighlight: '香港 27ms，新加坡 42ms，最高下载 547Mbps。',
        caution: '不提供订阅链接，仅支持官方客户端。',
      },
      {
        slug: 'weitu',
        badge: 'IPLC纯专线',
        whyRecommended: '全线走 IPLC 专线与 Trojan 协议，三网优化与智能负载均衡，1倍流量无倍率陷阱。',
        recommendedPlan: '普通版（月付 ¥19.90，每月 150GB）。',
        speedtestHighlight: '香港 27ms，台湾 37ms，下载吞吐 500Mbps。',
        caution: '需自行在第三方客户端中导入订阅。',
      },
      {
        slug: 'yifan',
        badge: '住宅IP+专线',
        whyRecommended: '全节点 IEPL 物理专线搭配原生住宅 IP，晚高峰 0 丢包，支持 Hysteria 2 协议。',
        recommendedPlan: '轻享版（月付 ¥20，每月 150GB 流量）。',
        speedtestHighlight: '香港 23ms，单节点带宽充沛，下载 477Mbps。',
        caution: '住宅 IP 成本较高，官方无免费试用。',
      },
      {
        slug: 'ermao',
        badge: '拒绝跑路',
        whyRecommended: '官方声明不做低价跑路盘，全线 IEPL 专线，不限制设备连接数，适合多端同时在线。',
        recommendedPlan: '二猫云·白猫套餐（月付 ¥20，每月 130GB 流量）。',
        speedtestHighlight: '香港 22ms，日本 53ms，下载 481Mbps。',
        caution: '节点数量集中在热门地区，冷门节点较少。',
      },
      {
        slug: 'u1s1',
        badge: '2000M大带宽',
        whyRecommended: '2025 年新晋 IPLC 专线，官方宣称高达 2000Mbps 独立带宽与晚高峰不限速。',
        recommendedPlan: '普通人真够了包（月付 ¥20，每月 120GB）。',
        speedtestHighlight: '香港 24ms，新加坡 46ms，下载 538Mbps。',
        caution: '新品牌运营时间较短，建议按月订购观察。',
      },
    ],
    faq: [
      {
        question: 'IEPL 与 IPLC 有什么区别？',
        answer: 'IPLC 为国际私有租用线路，属于纯物理点对点专线；IEPL 为国际以太网专线，在以太网协议层进行隔离。两者均不经过常规公网防火墙，稳定性和抗封锁能力远超普通中转线路。',
      },
      {
        question: '专线节点延迟一般在多少毫秒？',
        answer: '从中国东南沿海（广东、福建）测算，到香港 IEPL 专线延迟通常为 15~25ms，到台湾为 30~45ms，到新加坡与日本为 40~60ms，到美西为 130~160ms。非专线中转通常延迟会高出 20~50ms 甚至波动极大。',
      },
      {
        question: '专线机场会被防火墙封锁吗？',
        answer: '专线本身的内网跨境传输是完全合法的企业级专网隧道，不会被公网防火墙探测到流量特征。服务商需要防范的主要是境内 BGP 入口服务器的 IP 轮换与保护。正规专线机场均配备多入口智能调度和容灾备份。',
      },
      {
        question: '为什么有的专线机场价格比普通机场贵一倍？',
        answer: '由于向三大运营商租用跨境物理专线光纤的硬成本极其高昂（通常为数万元/Gbps/月），服务商必须保证足够的单价才能维持不超卖的专线品质。贪图几元钱的“所谓专线”往往是超卖严重的伪专线。',
      },
    ],
  },
  {
    slug: 'pay-as-you-go',
    title: '不限时/不过期按量流量包推荐',
    subtitle: '用多少扣多少 · 永不清零 · 备用神器',
    badge: '按量计费',
    description: '不想被月租捆绑？针对出差频繁、轻度用户或需要长期备用应急的场景，精选支持“一次性付费、流量永不过期”的优质机场。',
    criteria: [
      '流量永久有效或以年为单位超长有效期',
      '扣费透明，无隐藏月租或高倍率虚耗',
      '节点池与常规月付订阅保持同等专线品质',
    ],
    recommendedBrandSlugs: ['guangsu', 'xingdaomeng', 'wuyou', 'weitu', 'feimao', 'ermao'],
    buyingGuide: [
      '适合备用：平时用宽带或公司网络，出差或主力梯子临时维护时随时调用。',
      '注意核对官方说明中的“不过期”是否有账号长久未登录清理规则。',
      '建议在客户端中配置“备用代理组”，主力节点异常时自动故障转移到按量包。',
    ],
    essay: {
      title: '不限时按量计费全攻略：轻度用户与备用应急的终极省钱法则',
      sections: [
        {
          heading: '01. 经济学账本：为什么轻度用户买不限时包能省 80% 预算？',
          content: '许多上网用户其实是“周期性轻度用户”：工作日上班用公司网络，周末在家偶尔查查资料，一个月实际翻墙消耗的流量不到 5GB。如果购买常规的 20 元/月订阅，一年固定支出高达 240 元，而 90% 以上的月度流量都被白白清零浪费。相比之下，花费约 100 元购买一个 100~250GB 的不限时流量包，足够支撑 1~2 年的日常使用，平均月成本不到 5 元钱。',
        },
        {
          heading: '02. 不限时流量包的常见“暗坑”与避雷指南',
          content: '挑选不限时流量包时，必须留心三点：① 隐藏有效期条款：部分商家宣称不限时，但在服务条款细则里标注“账号连续 90 天未登录将注销”；② 倍率刺客：某些按量包默认只能使用 3 倍或 5 倍的高倍率节点，原本 100G 流量实际只能用 20G；③ 节点池降级：个别不良商家会将不限时用户划分到较差的中转节点池。本站严选的不限时品牌均经过实测，与月付套餐享有完全平等的专线节点。',
        },
        {
          heading: '03. 双轨容灾体系：“主力订阅 + 不限时备用”',
          content: '对于严重依赖国际互联网的专业用户而言，单一机场无论多稳定，都难免遭遇临时机房光缆中断或运维事故。最稳健的架构是：日常使用一个性价比高的月付专线作为主力，同时在客户端配置栏中常备一个不限时不过期的流量包。一旦主力梯子断联，客户端策略组在 1 秒内自动无缝切换，实现业务零中断。',
        },
      ],
    },
    brandReviews: [
      {
        slug: 'guangsu',
        badge: '永久不过期',
        whyRecommended: '推出“致敬斯诺克147永久套餐”，¥147 一次性付费给到 247GB 永久流量，享受与主力月付同等 IEPL 专线。',
        recommendedPlan: '光速云·致敬147永久套餐（¥147 一次性，247GB 永不清零）。',
        speedtestHighlight: '香港 529Mbps，新加坡 387Mbps，专线质量丝毫不缩水。',
        caution: '一次性付费产品不支持退款，适合长期备用。',
      },
      {
        slug: 'xingdaomeng',
        badge: '1倍率不限设备',
        whyRecommended: '全节点 1 倍率扣费，且不限制在线设备数，提供从 100GB 到 1TB 的多档不过期包。',
        recommendedPlan: '星岛梦·永久不限时100（¥100 一次性，100GB 流量）。',
        speedtestHighlight: '香港 27ms，新加坡 44ms，下载吞吐达 504Mbps。',
        caution: '长期未登录建议每隔几个月连接一次保持活跃度。',
      },
      {
        slug: 'wuyou',
        badge: '百元入门包',
        whyRecommended: '提供百元级永久流量包，专属客户端下载登录即用，免去备用时重新找订阅链接的麻烦。',
        recommendedPlan: '100G 永久不限时包（¥108 一次性付费）。',
        speedtestHighlight: '全线无倍率不限速，香港实测 531Mbps。',
        caution: '适合轻度电商运营或备用辅助。',
      },
      {
        slug: 'weitu',
        badge: 'IPLC专线按量',
        whyRecommended: '高品质 IPLC 专线加持的永久包，主流 AI 工具与流媒体全解锁，不限速不限设备。',
        recommendedPlan: '唯兔云·永久不限时包（¥100 一次性 100GB，或 ¥160 一次性 200GB）。',
        speedtestHighlight: '香港 27ms，日本 56ms，AI 工具全能支持。',
        caution: '需通过第三方客户端配置使用。',
      },
      {
        slug: 'feimao',
        badge: '1000G大容量',
        whyRecommended: '针对经常国际出差但用量不固定的大流量用户，提供 1000GB 大容量一次性不限时套餐。',
        recommendedPlan: '飞猫·不限时套餐（¥680 一次性，包含 1000GB 大容量）。',
        speedtestHighlight: '香港 526Mbps，自研 App 随时随地登录即用。',
        caution: '一次性支付金额较高，适合预算充足的企业或个人。',
      },
      {
        slug: 'ermao',
        badge: '百元内专线',
        whyRecommended: '¥99 即可获得 100GB 不限时专线流量，全线 IEPL 物理专线，长期稳定靠谱。',
        recommendedPlan: '二猫云·不限时套餐（¥99 一次性付费，包含 100GB）。',
        speedtestHighlight: '香港 22ms，481Mbps，专线品质优秀。',
        caution: '适合追求稳定专线品质的轻度备用玩家。',
      },
    ],
    faq: [
      {
        question: '不限时流量包划算吗？',
        answer: '对于月均使用不足 10GB 的轻度用户，花百元买一个 100~250GB 的不过期包可以用 1~2 年，远比每月按期扣费划算。',
      },
      {
        question: '不限时流量用完了怎么办？',
        answer: '可以直接在用户后台再次购买新的按量包，或者转为按月订阅。多次购买的按量流量通常会自动累加到当前账户余额中。',
      },
      {
        question: '不限时机场的速度会比月付套餐慢吗？',
        answer: '本站严选的品牌（如光速云、星岛梦）按量包与月付套餐共用完全相同的专线节点池与带宽调度，不存在人为限速降级的情况。',
      },
      {
        question: '长期不使用，账号会被删除吗？',
        answer: '不同品牌规定略有差异。一般情况下，只要账户内有付费流量余额，服务商不会随意注销账号。但建议每隔 2~3 个月连接节点测试一次以保持活跃。',
      },
    ],
  },
  {
    slug: 'ai-streaming',
    title: 'AI 工具与 4K 流媒体特化解锁机场',
    subtitle: '专为 ChatGPT、Claude、Gemini 及 Netflix 4K 定向优化',
    badge: 'AI & 流媒体',
    description: '针对 OpenAI / Anthropic 越来越严苛的机房 IP 封控，以及 Netflix / Disney+ 全球跨区解锁需求，精选具备原生住宅 IP 与纯净落地节点的特化机场。',
    criteria: [
      'ChatGPT / Claude 网页端及 API 访问无 Access Denied 报错',
      '具备原生住宅或商用高纯净度 IP，通过 IPQS 欺诈度校验',
      '全天候支持 4K 60fps 流媒体秒开与音画同步',
    ],
    recommendedBrandSlugs: ['sujie', 'yifan', 'guangsu', 'feimao', 'weitu', 'firefly'],
    buyingGuide: [
      'AI 封锁策略动态变化，推荐选择标明有“原生住宅 IP”或专有 AI 路由规则的机场。',
      '在客户端中设置好分流策略，让国内流量直连、AI 流量指定走美西或日本低风控节点。',
      '访问 Claude 时坚决避免使用万人骑的公共节点，优先选冷门原生落地。',
    ],
    essay: {
      title: '2026 AI 时代风控攻防战：为什么普通机房 IP 会被频繁封号？',
      sections: [
        {
          heading: '01. OpenAI 与 Anthropic 的 IP 封控机制深度揭秘',
          content: '进入 2026 年，大模型厂商对自动化爬虫和违规批量注册的打击达到了前所未有的严苛程度。OpenAI 和 Anthropic 采购了 IPQS、MaxMind 等顶级欺诈识别库。绝大多数廉价机场采用的是公共机房托管 IP（Hosting IP），由于几百甚至上千人共用同一 IP 频繁向 API 发起请求，该 IP 会迅速被标记为“高欺诈分”黑名单，直接触发 Cloudflare 盾牌或 1020 报错，甚至导致个人付费账户惨遭封禁。',
        },
        {
          heading: '02. 原生住宅 IP（Residential IP）的降维打击优势',
          content: '原生住宅 IP 是海外真实家庭宽带（ISP）分配的静态或动态 IP 地址。在 AI 平台看来，住宅 IP 发起的请求与普通的海外家庭用户完全一致，欺诈识别分为 0，几乎不会触发验证码拦截或风控封号。对于依赖 ChatGPT 写代码、使用 Claude 审核长文本、或使用 Midjourney 生图的专业从业者而言，带有原生住宅 IP 的特化机场是唯一的稳定长效解法。',
        },
        {
          heading: '03. 流媒体全区解锁的技术实现逻辑',
          content: 'Netflix、Disney+、HBO Max 等流媒体平台同样会对机房 IP 实施版权限制。普通中转节点往往只能观看 Netflix 自制剧（Non-Original 被隐藏）。只有配备了 DNS 原生流媒体解锁分流服务器，或者直接落地到当地原生住宅 IP 的节点，才能完美解锁不同国家地区（如日区、美区、台区）的全部独占版权番剧与电影。',
        },
      ],
    },
    brandReviews: [
      {
        slug: 'sujie',
        badge: 'AI工具特化',
        whyRecommended: '25 元档中唯一明确强调针对 ChatGPT、Claude、Gemini 进行定向路由优化的品牌，AI 访问稳定性强。',
        recommendedPlan: '速界标准版（月付 ¥25，每月 150GB 流量）。',
        speedtestHighlight: '香港 26ms，专线延迟极低，AI 交互响应丝滑。',
        caution: '官方诚实提示 AI 可用性受平台规则动态影响，不夸张承诺 100% 永久不变。',
      },
      {
        slug: 'yifan',
        badge: '原生住宅IP',
        whyRecommended: '全节点配备原生住宅 IP，搭配 Hysteria 2 / VLESS-Reality 协议，风控欺诈分极低，彻底告别机器人验证。',
        recommendedPlan: '一翻云·轻享版（月付 ¥20，每月 150GB 流量）。',
        speedtestHighlight: '香港 23ms，单节点带宽 477Mbps，晚高峰 0 丢包。',
        caution: '住宅 IP 成本高，官方不提供退款，建议先月付体验。',
      },
      {
        slug: 'guangsu',
        badge: '4K极速秒开',
        whyRecommended: '香港/新加坡/日本节点单线程测速突破 500Mbps，YouTube 4K 拖拽秒开，Netflix 原创与非原创剧全解锁。',
        recommendedPlan: '光速云·极速版（月付 ¥25，每月 168GB 流量）。',
        speedtestHighlight: '香港 22ms 529Mbps，新加坡 46ms 387Mbps。',
        caution: '部分地区节点 AI 支持视 IP 而定，建议在客户端固定选择推荐的 AI 解锁节点。',
      },
      {
        slug: 'feimao',
        badge: '免配置AI直连',
        whyRecommended: '自研客户端内置分流规则，ChatGPT 与 Claude 网页端直接畅连，TikTok 跨区直播无压力。',
        recommendedPlan: '飞猫·星耀版（月付 ¥25，每月 150GB 流量）。',
        speedtestHighlight: '香港 21ms 526Mbps，台湾 41ms 116Mbps。',
        caution: '仅支持专属客户端，适合在单一电脑或手机上直接使用。',
      },
      {
        slug: 'weitu',
        badge: 'AI模型全解锁',
        whyRecommended: '实测 ChatGPT、Claude、Gemini 全线 Operational，支持主流流媒体全区解锁，全线 1 倍率。',
        recommendedPlan: '唯兔云·普通版（月付 ¥19.90，每月 150GB 流量）。',
        speedtestHighlight: '香港 27ms 500Mbps，新加坡 44ms 414Mbps。',
        caution: '需自行在客户端中导入配置。',
      },
      {
        slug: 'firefly',
        badge: '流媒体原生解锁',
        whyRecommended: 'IPLC 纯专线搭配原生 IP，Netflix、Disney+、HBO Max 体验极其可靠，晚高峰追剧不转圈。',
        recommendedPlan: 'Firefly Lite（月付 ¥25，每月 150GB 流量）。',
        speedtestHighlight: '香港 27ms 547Mbps，全节点不限速。',
        caution: '专属客户端开箱即用，无法导出外部订阅。',
      },
    ],
    faq: [
      {
        question: '为什么有些节点能看油管，但打不开 ChatGPT？',
        answer: 'YouTube 对机房 IP 宽容，而 OpenAI / Claude 对商业机房 IP 实施了严格的黑名单过滤。只有使用原生住宅 IP 或经过反代清洗的节点才能稳定通过。',
      },
      {
        question: '使用机场访问 Claude 被封号了怎么办？',
        answer: 'Anthropic（Claude）对 IP 欺诈度检测极度敏感。如果频繁在不同国家的节点（如上一秒香港、下一秒美国）切换，或者使用被滥用的机房 IP，极易被直接封号。建议固定使用美西或日本的原生住宅 IP 节点，且在注册时使用纯净海外邮箱。',
      },
      {
        question: '看 Netflix 4K 需要多大带宽？',
        answer: 'Netflix 官方建议 4K 超高清码率需稳定在 25Mbps 以上。本站推荐的流媒体特化机场节点实测带宽均在 100Mbps~500Mbps 之间，且专线延迟抖动低于 15ms，能确保 4K 拖拽进度条秒开不卡顿。',
      },
      {
        question: '如何配置分流规则才能既能上国内网又能用 AI？',
        answer: '在 Clash Verge Rev 或 v2rayN 中开启“规则模式（Rule）”，客户端会自动使用内置的 GeoIP / Domain 列表：访问国内网站（百度、淘宝、微信）直接走本地直连宽带；访问 OpenAI、Anthropic、Netflix 等特定域名才走海外专线节点，省流量且互不干扰。',
      },
    ],
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find(t => t.slug === slug);
}
