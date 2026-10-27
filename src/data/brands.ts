export interface SpeedtestNode {
  region: string;
  latency: string;
  download: string;
  status: 'fast' | 'normal' | 'slow';
}

export interface ServiceUnlockItem {
  name: string;
  status: 'Operational' | 'Partial' | 'Unavailable' | 'Not Tested';
  note: string;
}

export interface BrandPlan {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  cycle: string;
}

export interface ProofImages {
  speedtest?: string;
  unlock?: string;
  testDate?: string;
  testTool?: string;
  notes?: string;
}

export interface DetailedReview {
  overview: string;
  architecture: string;
  speedtestAnalysis: string;
  unlockAnalysis: string;
  verdict: string;
}

export interface Brand {
  slug: string;
  name: string;
  rank: number | null;
  featured?: boolean;
  isVerified?: boolean;
  logoUrl?: string;
  affLink: string;
  coupon?: string;
  couponDiscount?: string;
  startingPrice: string;
  foundedYear: string;
  lineType: string;
  protocols: string[];
  hasCustomClient: boolean;
  supportThirdParty: boolean;
  speedtest: {
    testDate: string;
    period: string;
    nodes: SpeedtestNode[];
    avgLatency: string;
    maxDownload: string;
    packetLoss: string;
  };
  unlockMatrix: {
    ai: ServiceUnlockItem[];
    streaming: ServiceUnlockItem[];
  };
  proofImages?: ProofImages;
  detailedReview?: DetailedReview;
  plans: BrandPlan[];
  tags: string[];
  summary: string;
  pros: string[];
  cons: string[];
  suitableFor: string[];
  dataStatus: 'measured' | 'vendor' | 'historical';
  verifiedDate: string;
}

export const brands: Brand[] = [
  {
    "slug": "guangsu",
    "name": "光速云",
    "rank": 1,
    "featured": true,
    "isVerified": true,
    "logoUrl": "/images/logos/光速云主图.png",
    "affLink": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "AMM",
    "couponDiscount": "最低入门约8元/月",
    "startingPrice": "¥8/月 (折合)",
    "foundedYear": "2020",
    "lineType": "IEPL专线 + 企业级内网专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "全节点综合压测",
      "nodes": [
        {
          "region": "香港",
          "latency": "22ms",
          "download": "529Mbps",
          "status": "fast"
        },
        {
          "region": "新加坡",
          "latency": "46ms",
          "download": "387Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "54ms",
          "download": "421Mbps",
          "status": "fast"
        },
        {
          "region": "台湾",
          "latency": "35ms",
          "download": "310Mbps",
          "status": "fast"
        },
        {
          "region": "美国",
          "latency": "138ms",
          "download": "240Mbps",
          "status": "normal"
        },
        {
          "region": "英国",
          "latency": "172ms",
          "download": "185Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "42ms (亚太平均)",
      "maxDownload": "638.48Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "全节点原生解锁，支持网页及APP端"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "高纯净度住宅IP，抗风控封号"
        },
        {
          "name": "Gemini",
          "status": "Operational",
          "note": "亚太新加坡/日本节点全线绿标"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持港区/美区/日区/新区非自制剧"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "全节点秒开"
        },
        {
          "name": "YouTube 4K",
          "status": "Operational",
          "note": "单线程 500Mbps+ 拖拽秒开"
        },
        {
          "name": "TikTok",
          "status": "Operational",
          "note": "跨境电商直播专属低延迟"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/光速云-节点测速实测.png",
      "unlock": "/images/unlock/photo_2026-08-19_12-18-40.jpg",
      "testDate": "2026-08-11 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev / MiaoKO 基础流媒体",
      "notes": "珠海联通 9Gbps 32线程下实测，涵盖亚太与欧美 70 个节点，YouTube/Netflix/Disney+/OpenAI 全绿通行。"
    },
    "detailedReview": {
      "overview": "光速云成立于 2020 年，是本站网络可观测性评测中心长期监测的第一主推标杆品牌。其核心竞争力在于自研的双专线智能调度架构（IEPL专线 + 企业级内网专线），兼顾极低的网络时延与极致的晚高峰吞吐冗余。",
      "architecture": "光速云全线采用新一代轻量化 VLESS 与 Trojan 协议，由三网 BGP 核心入口智能接入，经由物理光缆专线跨境传输，彻底避免了公网 DNS 污染与 GFW QoS 流量特征检测。落地节点覆盖香港×20、台湾×5、日本×10、新加坡×10、美国×10 以及欧洲小众地区。",
      "speedtestAnalysis": "在 2026-08-11 的全节点实测中（测试报告已在【实测证据库】完整公示），香港节点实测延迟仅 22ms，单线程峰值吞吐达到 529Mbps；新加坡节点延迟 46ms，峰值吞吐 387Mbps。即使在晚高峰骨干网拥堵期，丢包率始终压制在 0%。",
      "unlockAnalysis": "流媒体与 AI 解锁测试显示，光速云针对 ChatGPT、Claude 3.5 Sonnet 和 Google Gemini 进行了专用路由分流，落地 IP 具备高纯净商业/住宅属性，有效阻断了 Cloudflare 403 挑战；支持 Netflix 原创与第三方版权影视剧秒开。",
      "verdict": "无论从专线稳定性、测速带宽冗余、流媒体解锁完整性还是阶梯式定价策略来看，光速云都是目前 2026 年最具综合竞争力的首选机场。"
    },
    "plans": [
      {
        "name": "致敬斯诺克147永久套餐",
        "billing": "一次性付费",
        "price": "¥147",
        "traffic": "247GB",
        "cycle": "永久不过期"
      },
      {
        "name": "轻量入门版",
        "billing": "年付",
        "price": "¥99",
        "traffic": "69GB",
        "cycle": "每月"
      },
      {
        "name": "极速旗舰版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "168GB",
        "cycle": "每月"
      },
      {
        "name": "企业至尊定制版",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "cycle": "独享专线/专属IP"
      }
    ],
    "tags": [
      "第一主推",
      "实测认证",
      "IEPL双专线",
      "致敬147永久包",
      "AI高纯净",
      "自研客户端"
    ],
    "summary": "2020老牌标杆，IEPL+企业级内网双专线，年付折合8元起，附带147元永久流量包与全节点实测证据链。",
    "pros": [
      "拥有真实的 MAI-TEST-BOT / MiaoKO 实测图证据链，峰值突破 600Mbps",
      "业内罕有的致敬斯诺克147永久不过期套餐（¥147 给 247GB 永不清零）",
      "IEPL 双专线架构，晚高峰 0% 丢包率与稳定低延迟",
      "自研专属客户端，同时开放 Clash / Shadowrocket / Surge 通用订阅",
      "全线节点原生支持 OpenAI / Claude / Gemini 极高风控工具"
    ],
    "cons": [
      "特惠年付套餐不支持中途退款，新用户建议先体验极速版月付",
      "企业定制版（¥680/月）门槛较高，适合跨境出海企业与大流量团队"
    ],
    "suitableFor": [
      "跨境电商直播",
      "AI模型深度交互",
      "4K/8K极清流媒体",
      "长期防失联备用",
      "晚高峰高要求办公"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "feimao",
    "name": "飞猫云",
    "rank": 2,
    "featured": true,
    "isVerified": true,
    "logoUrl": "/images/logos/飞猫云主图.png",
    "affLink": "https://feimao.best/#/register?code=flycat888",
    "coupon": "flycat888",
    "couponDiscount": "新用户立减 5 元",
    "startingPrice": "¥7/月起 (折合)",
    "foundedYear": "2022",
    "lineType": "高速中转 + 专线直连",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "hasCustomClient": true,
    "supportThirdParty": false,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "官方测速批次",
      "nodes": [
        {
          "region": "香港",
          "latency": "21ms",
          "download": "526Mbps",
          "status": "fast"
        },
        {
          "region": "台湾",
          "latency": "41ms",
          "download": "116Mbps",
          "status": "normal"
        },
        {
          "region": "新加坡",
          "latency": "52ms",
          "download": "240Mbps",
          "status": "normal"
        },
        {
          "region": "日本",
          "latency": "58ms",
          "download": "180Mbps",
          "status": "normal"
        },
        {
          "region": "美国",
          "latency": "145ms",
          "download": "95Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "45ms",
      "maxDownload": "526.40Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "客户端内置直连分流"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "亚太节点支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "TikTok",
          "status": "Operational",
          "note": "针对跨区短视频深度优化"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/飞猫云-节点测速实测.png",
      "testDate": "2026-08-11 08:52:30 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev",
      "notes": "实测证明其香港节点具备 526Mbps 的单线程下载能力与 21ms 的极低亚太往返延迟。"
    },
    "detailedReview": {
      "overview": "飞猫云以极致的“零配置上手门槛”闻名，是新手与小白用户群体的热门推荐品牌。提供全平台打包定制的专属客户端，下载后微信/账号一键登录即用。",
      "architecture": "底层部署了高防入口中转与跨境专线隧道，将复杂的分流规则与节点调度完全封装在专属客户端内部。",
      "speedtestAnalysis": "2026-08-11 实测显示，其亚太近端节点响应敏捷，香港节点跑出 526Mbps、21ms TLS RTT 的高分，日常 4K 追剧与网页浏览体验极佳。",
      "unlockAnalysis": "自研客户端内置分流规则，对 ChatGPT 官网与 TikTok 跨区流量进行了自动化分流伪装。",
      "verdict": "适合厌烦配置 Clash / Surge 规则的纯小白用户，开箱即用体验行业领先。"
    },
    "plans": [
      {
        "name": "学生尝鲜版",
        "billing": "年付",
        "price": "¥84",
        "traffic": "50GB",
        "cycle": "每月"
      },
      {
        "name": "星耀标准版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "不限时至尊包",
        "billing": "一次性付费",
        "price": "¥680",
        "traffic": "1000GB",
        "cycle": "永久有效"
      }
    ],
    "tags": [
      "实测认证",
      "免配置客户端",
      "极简上手",
      "7元入门",
      "TikTok优化"
    ],
    "summary": "官方实测 526Mbps，全平台自研客户端一键登录，适合不愿折腾订阅配置的新手与短视频玩家。",
    "pros": [
      "拥有官方实测图：香港 21ms、526Mbps 极低延迟与高吞吐",
      "自研专属客户端，无需手动导入或转换订阅链接",
      "提供千吉级不限时不过期流量包，适合出差与备用"
    ],
    "cons": [
      "不提供第三方开源客户端（Clash/Surge）开放订阅，进阶玩家可玩度较低",
      "年付尝鲜套餐月流量仅 50GB，适合轻度用户"
    ],
    "suitableFor": [
      "网络新手",
      "出海短视频从业者",
      "学生日常查资料",
      "懒人开箱即用"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "weifeng",
    "name": "微风网络",
    "rank": 3,
    "featured": true,
    "isVerified": true,
    "logoUrl": "/images/logos/flyv机场256x256.png",
    "affLink": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "coupon": "flat888",
    "couponDiscount": "全场 9 折",
    "startingPrice": "¥7/月 (折合)",
    "foundedYear": "2021",
    "lineType": "全专线物理中继",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "官方测速批次",
      "nodes": [
        {
          "region": "香港",
          "latency": "24ms",
          "download": "480Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "48ms",
          "download": "350Mbps",
          "status": "fast"
        },
        {
          "region": "新加坡",
          "latency": "55ms",
          "download": "290Mbps",
          "status": "normal"
        },
        {
          "region": "美国",
          "latency": "150ms",
          "download": "120Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "41ms",
      "maxDownload": "480Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "YouTube 4K",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/微风-节点测速实测.png",
      "testDate": "2026-08-11 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev",
      "notes": "实测显示亚太各节点丢包率为 0%，在 7 元低价档中展现了极高性价比。"
    },
    "detailedReview": {
      "overview": "微风网络是 7 元平价区间的代表作品牌，以全专线中继与高折扣优惠码（flat888）著称，深受学生与高性价比追求者的青睐。",
      "architecture": "采用多入口国内中继配合专线出海，协议涵盖主流 SS 与 VLESS，全面兼容市面上所有主流客户端。",
      "speedtestAnalysis": "实测香港节点 24ms、480Mbps，日本节点 48ms、350Mbps，在晚高峰表现非常坚韧，未出现严重断流现象。",
      "unlockAnalysis": "全线节点部署了自动化流媒体分流网关，Netflix 与 Disney+ 开箱即解。",
      "verdict": "7 元档位能提供全专线中继与测速认证，性价比极高。"
    },
    "plans": [
      {
        "name": "平价畅享版",
        "billing": "年付",
        "price": "¥84",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "主力增强版",
        "billing": "月付",
        "price": "¥22",
        "traffic": "160GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "实测认证",
      "7元低价",
      "平价专线",
      "优惠9折",
      "三网优化"
    ],
    "summary": "实测 480Mbps 零丢包，7元低入门门槛，全专线中继，附带专属 9 折优惠码。",
    "pros": [
      "官方实测认证，低价档位难得的专线品质",
      "支持第三方开源订阅导入，规则自由度高",
      "优惠码全场 9 折"
    ],
    "cons": [
      "年付特惠套餐不可退款",
      "美国长途节点高峰期吞吐略有衰减"
    ],
    "suitableFor": [
      "预算受限学生",
      "轻量办公查阅",
      "日常 YouTube 4K 追剧"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "muguang",
    "name": "暮光加速",
    "rank": 4,
    "featured": false,
    "isVerified": true,
    "affLink": "https://mgjs.top/#/register?code=muguang",
    "coupon": "muguang",
    "couponDiscount": "立享 85 折",
    "startingPrice": "¥20/月",
    "foundedYear": "2023",
    "lineType": "IEPL专线 + BGP双线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "官方测速批次",
      "nodes": [
        {
          "region": "香港",
          "latency": "26ms",
          "download": "430Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "52ms",
          "download": "380Mbps",
          "status": "fast"
        },
        {
          "region": "新加坡",
          "latency": "60ms",
          "download": "310Mbps",
          "status": "fast"
        },
        {
          "region": "美国",
          "latency": "160ms",
          "download": "140Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "46ms",
      "maxDownload": "430Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/幕光加速-节点测速实测.png",
      "testDate": "2026-08-11 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev",
      "notes": "实测证明其全协议自适应机制稳定，全节点 0% 丢包率。"
    },
    "detailedReview": {
      "overview": "暮光加速定位于 20 元主流档位，主打多协议自适应与高抗封锁双线 BGP 架构，支持 Windows、macOS 专属客户端与通用订阅。",
      "architecture": "采用国内优质 BGP 节点汇聚流量，经由 IEPL 物理通道过境，抗干扰特性突出。",
      "speedtestAnalysis": "2026-08-11 实测香港节点 26ms、430Mbps，日本节点 52ms、380Mbps，网络抖动极小。",
      "unlockAnalysis": "针对主流 AI 工具与流媒体全量解锁，体验稳定流畅。",
      "verdict": "做工扎实，多协议自适应，适合对稳定性和技术要求高的用户。"
    },
    "plans": [
      {
        "name": "基础月度版",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "cycle": "每月"
      },
      {
        "name": "专业升级版",
        "billing": "月付",
        "price": "¥38",
        "traffic": "280GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "实测认证",
      "IEPL双线",
      "多协议自适应",
      "20元主流档"
    ],
    "summary": "实测 430Mbps，多协议自适应，BGP双线接入，专线抗干扰能力突出。",
    "pros": [
      "官方实测认证，丢包率 0%",
      "同时支持自研与第三方客户端",
      "多协议自动切换，抗封锁能力强"
    ],
    "cons": [
      "最低月付 20 元起步，缺少个位数超低价入门档"
    ],
    "suitableFor": [
      "对网络稳定性要求高的白领",
      "AI 模型重度使用者"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "ermao",
    "name": "二猫云",
    "rank": 5,
    "featured": false,
    "isVerified": true,
    "logoUrl": "/images/logos/2mao_logo.webp",
    "affLink": "https://ermao.best/#/register?code=ermao",
    "coupon": "ermao",
    "couponDiscount": "新用户 9 折",
    "startingPrice": "¥18/月",
    "foundedYear": "2022",
    "lineType": "高速中转 + 专线",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "官方测速批次",
      "nodes": [
        {
          "region": "香港",
          "latency": "28ms",
          "download": "410Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "56ms",
          "download": "320Mbps",
          "status": "normal"
        },
        {
          "region": "新加坡",
          "latency": "62ms",
          "download": "280Mbps",
          "status": "normal"
        },
        {
          "region": "美国",
          "latency": "165ms",
          "download": "110Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "48ms",
      "maxDownload": "410Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/二猫云-节点测速实测.png",
      "testDate": "2026-08-11 10:45:27 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev",
      "notes": "实测证明其 Shadowsocks 协议节点在 10:45 压测中跑出 410Mbps 稳定下载。"
    },
    "detailedReview": {
      "overview": "二猫云是深受进阶玩家喜爱的纯 Shadowsocks 协议专线机场，配置纯粹，极简导入，全线节点 1 倍率。",
      "architecture": "采用主流高速中继与专线架构，不加任何花哨功能，专注于单连接的吞吐与延迟表现。",
      "speedtestAnalysis": "实测香港节点 28ms、410Mbps，日本节点 56ms、320Mbps，全天候连接可靠。",
      "unlockAnalysis": "全区流媒体与 ChatGPT 稳定支持。",
      "verdict": "纯粹的 SS 协议机场，极度适合 Clash Verge 与 Surge 资深玩家。"
    },
    "plans": [
      {
        "name": "标准版",
        "billing": "月付",
        "price": "¥18",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "旗舰版",
        "billing": "月付",
        "price": "¥35",
        "traffic": "350GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "实测认证",
      "纯SS协议",
      "1倍率无套路",
      "进阶玩家首选"
    ],
    "summary": "实测 410Mbps，纯粹 Shadowsocks 协议，全线 1 倍率，进阶玩家友好。",
    "pros": [
      "官方实测认证，纯 SS 协议性能极高",
      "无复杂防屏蔽外壳，协议开销小，低功耗",
      "全线 1 倍率计费"
    ],
    "cons": [
      "不提供自研专属客户端，需自行下载第三方软件导入"
    ],
    "suitableFor": [
      "熟悉 Clash/Surge 的进阶极客",
      "追求低开销与高吞吐的玩家"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "xingdaomeng",
    "name": "星岛梦",
    "rank": 6,
    "featured": false,
    "isVerified": true,
    "logoUrl": "/images/logos/xdm_logo.webp",
    "affLink": "https://xdm.cloud/#/register?code=xdm888",
    "coupon": "xdm888",
    "couponDiscount": "满减优惠券",
    "startingPrice": "¥16/月",
    "foundedYear": "2023",
    "lineType": "IEPL高速内网",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "官方测速批次",
      "nodes": [
        {
          "region": "香港",
          "latency": "25ms",
          "download": "450Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "50ms",
          "download": "390Mbps",
          "status": "fast"
        },
        {
          "region": "新加坡",
          "latency": "58ms",
          "download": "330Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "44ms",
      "maxDownload": "450Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/星岛梦-节点测速实测.png",
      "testDate": "2026-08-11 01:48:13 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev",
      "notes": "凌晨深度压测，全线节点 0 丢包，展现了 IEPL 内网物理隧道的稳定底盘。"
    },
    "detailedReview": {
      "overview": "星岛梦主打低延迟与海外游戏联机加速，拥有企业级 IEPL 内网专线，在 Steam、Apex 与外服手游玩家中口碑良好。",
      "architecture": "端到端内网物理光纤连接，有效降低了跨国公网路由的抖动与丢包。",
      "speedtestAnalysis": "实测香港节点 25ms、450Mbps，日本节点 50ms、390Mbps，延迟波动在 2ms 以内。",
      "unlockAnalysis": "支持主流流媒体与 AI，同时特别优化了游戏 UDP 协议转发。",
      "verdict": "游戏联机与外服低延迟的绝佳选择。"
    },
    "plans": [
      {
        "name": "极速月度版",
        "billing": "月付",
        "price": "¥16",
        "traffic": "120GB",
        "cycle": "每月"
      },
      {
        "name": "不限时流量包",
        "billing": "一次性付费",
        "price": "¥188",
        "traffic": "200GB",
        "cycle": "永久有效"
      }
    ],
    "tags": [
      "实测认证",
      "游戏低延迟",
      "IEPL专线",
      "不限时流量包"
    ],
    "summary": "实测 450Mbps，IEPL 内网专线，延迟极低波动小，适合外服游戏与长期备用。",
    "pros": [
      "官方实测认证，丢包率极低",
      "具备不限时永久有效流量包",
      "外服游戏联机体验极佳"
    ],
    "cons": [
      "大流量下载套餐价格偏高"
    ],
    "suitableFor": [
      "外服游戏联机玩家",
      "低延迟远程 SSH 办公"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "weitu",
    "name": "唯兔云",
    "rank": 7,
    "featured": false,
    "isVerified": true,
    "affLink": "https://weitu.best/#/register?code=weitu",
    "coupon": "weitu888",
    "couponDiscount": "88 折",
    "startingPrice": "¥19.9/月",
    "foundedYear": "2022",
    "lineType": "IPLC纯专线",
    "protocols": [
      "Trojan"
    ],
    "hasCustomClient": false,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "官方测速批次",
      "nodes": [
        {
          "region": "香港",
          "latency": "27ms",
          "download": "500Mbps",
          "status": "fast"
        },
        {
          "region": "台湾",
          "latency": "37ms",
          "download": "420Mbps",
          "status": "fast"
        },
        {
          "region": "新加坡",
          "latency": "44ms",
          "download": "414Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "56ms",
          "download": "380Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "41ms",
      "maxDownload": "500Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Gemini",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持全区"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "YouTube 4K",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/唯兔云-节点测速实测.png",
      "unlock": "/images/unlock/photo_2026-09-07_12-51-59.jpg",
      "testDate": "2026-08-11 13:55:08 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev / MiaoKO 御三家流媒体",
      "notes": "实测证明其 Trojan 协议纯专线具备 500Mbps 强悍下载，50 节点流媒体全绿解锁。"
    },
    "detailedReview": {
      "overview": "唯兔云全线走高规格 IPLC 专线与轻量 Trojan 协议，主打三网优化与 1 倍流量真实计费，流媒体全绿解锁能力备受好评。",
      "architecture": "采用顶级物理专线，杜绝任何倍率陷阱，协议开销小，数据伪装度高。",
      "speedtestAnalysis": "2026-08-11 实测香港节点 27ms、500Mbps，新加坡节点 44ms、414Mbps，吞吐极高。",
      "unlockAnalysis": "配套的御三家流媒体实测图证实，其 50 个节点在 Netflix、Disney+ 与 YouTube 4K 上实现全绿解锁。",
      "verdict": "注重流媒体画质与纯专线质量用户的极佳之选。"
    },
    "plans": [
      {
        "name": "普通版",
        "billing": "月付",
        "price": "¥19.9",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "永久不限时包",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "永久有效"
      }
    ],
    "tags": [
      "实测认证",
      "IPLC纯专线",
      "流媒体全绿",
      "全线1倍率",
      "永久不限时"
    ],
    "summary": "实测 500Mbps，IPLC 纯专线搭配流媒体全绿实测图，1倍流量无倍率套路。",
    "pros": [
      "官方实测与流媒体解锁双图认证",
      "Trojan 协议纯专线，全线 1 倍率",
      "提供百元级永久有效不限时包"
    ],
    "cons": [
      "需自行在第三方客户端中导入配置"
    ],
    "suitableFor": [
      "流媒体高品质追剧党",
      "AI 生产力深度交互",
      "长期备用用户"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "u1s1",
    "name": "U1S1",
    "rank": 8,
    "featured": false,
    "isVerified": true,
    "logoUrl": "/images/logos/u1s1主图.png",
    "affLink": "https://u1s1.best/#/register?code=u1s1",
    "coupon": "u1s1",
    "couponDiscount": "新用户立减优惠",
    "startingPrice": "¥22/月",
    "foundedYear": "2021",
    "lineType": "IPLC纯专线",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "官方测速批次",
      "nodes": [
        {
          "region": "香港",
          "latency": "23ms",
          "download": "460Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "49ms",
          "download": "370Mbps",
          "status": "fast"
        },
        {
          "region": "新加坡",
          "latency": "54ms",
          "download": "320Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "42ms",
      "maxDownload": "460Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/U1S1-节点测速实测.png",
      "testDate": "2026-08-11 22:33:29 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev",
      "notes": "晚高峰 22:33 极高负载实测，香港 23ms、460Mbps 零丢包通关。"
    },
    "detailedReview": {
      "overview": "U1S1（有一说一）正如其名，以客观、透明、高规格的 IPLC 专线服务著称，晚高峰抗压能力极强。",
      "architecture": "纯 Shadowsocks 协议专线，没有额外的混淆开销，晚高峰带宽保障率极高。",
      "speedtestAnalysis": "2026-08-11 晚 22:33 实测香港节点 23ms、460Mbps，完全免疫晚高峰网络挤兑。",
      "unlockAnalysis": "全节点配备原生解锁支持。",
      "verdict": "言行一致的专线老牌，晚高峰体验非常令人放心。"
    },
    "plans": [
      {
        "name": "轻度畅享版",
        "billing": "月付",
        "price": "¥22",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "主力重度版",
        "billing": "月付",
        "price": "¥42",
        "traffic": "320GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "实测认证",
      "晚高峰抗挤兑",
      "纯专线",
      "真实测速证据"
    ],
    "summary": "实测 460Mbps，晚高峰 22:33 压测零丢包，纯专线透明老牌。",
    "pros": [
      "官方晚高峰实测认证，抗挤兑能力顶级",
      "纯 SS 协议极速连接",
      "节点速率上限高"
    ],
    "cons": [
      "缺少小额入门试用套餐"
    ],
    "suitableFor": [
      "晚高峰极重度网络使用者",
      "大文件实时传输"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "lingmao",
    "name": "灵猫网络",
    "rank": 9,
    "featured": false,
    "isVerified": true,
    "logoUrl": "/images/logos/kuaili_logo.png",
    "affLink": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "coupon": "lmao888",
    "couponDiscount": "全场 85 折",
    "startingPrice": "¥19/月",
    "foundedYear": "2023",
    "lineType": "高速中转 + 专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "官方测速批次",
      "nodes": [
        {
          "region": "香港",
          "latency": "26ms",
          "download": "420Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "52ms",
          "download": "340Mbps",
          "status": "fast"
        },
        {
          "region": "新加坡",
          "latency": "61ms",
          "download": "290Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "46ms",
      "maxDownload": "420Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/灵猫网络-节点测速实测.png",
      "testDate": "2026-08-11 18:45:40 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev",
      "notes": "晚高峰傍晚实测，香港节点 26ms、420Mbps 稳健传输。"
    },
    "detailedReview": {
      "overview": "灵猫网络主打 19 元 150GB 高性价比与不限时套餐混合产品线，兼顾日常主力使用与备用防断连需求。",
      "architecture": "高速中转与物理专线混合部署，支持全平台客户端。",
      "speedtestAnalysis": "实测香港节点 26ms、420Mbps，整体性能稳定均衡。",
      "unlockAnalysis": "全线主流 AI 与流媒体解锁表现良好。",
      "verdict": "兼具主力月付与长期不限时的全能型选手。"
    },
    "plans": [
      {
        "name": "月度超值版",
        "billing": "月付",
        "price": "¥19",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "不限时畅行包",
        "billing": "一次性付费",
        "price": "¥120",
        "traffic": "160GB",
        "cycle": "永久有效"
      }
    ],
    "tags": [
      "实测认证",
      "19元150G",
      "不限时套餐",
      "全平台客户端"
    ],
    "summary": "实测 420Mbps，19元包含150GB，同时提供高性价比不限时流量包。",
    "pros": [
      "官方实测认证，延迟与带宽表现均衡",
      "不限时流量包性价比较高",
      "优惠券立打 85 折"
    ],
    "cons": [
      "欧美小众节点覆盖相对较少"
    ],
    "suitableFor": [
      "日常主力使用",
      "不定期备用翻墙需求"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "jilian",
    "name": "极连云",
    "rank": 10,
    "featured": false,
    "isVerified": true,
    "logoUrl": "/images/logos/极连云主图.png",
    "affLink": "https://jilian.cloud/#/register?code=jilian",
    "coupon": "jilian888",
    "couponDiscount": "年付 8 折",
    "startingPrice": "¥17/月",
    "foundedYear": "2022",
    "lineType": "IEPL高速中转",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "官方测速批次",
      "nodes": [
        {
          "region": "香港",
          "latency": "24ms",
          "download": "440Mbps",
          "status": "fast"
        },
        {
          "region": "新加坡",
          "latency": "48ms",
          "download": "360Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "54ms",
          "download": "310Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "42ms",
      "maxDownload": "440Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/极连云-节点测速实测.png",
      "testDate": "2026-08-11 22:46:50 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev",
      "notes": "晚高峰 22:46 实测，全节点下载速率稳定，零丢包。"
    },
    "detailedReview": {
      "overview": "极连云专注高速专线互联，全节点采用 Shadowsocks 协议，提供极致流畅的低延迟访问体验。",
      "architecture": "IEPL 隧道与国内多线 BGP 节点互联，节点负载均匀分配。",
      "speedtestAnalysis": "实测香港节点 24ms、440Mbps，新加坡节点 48ms、360Mbps，连接稳定性卓越。",
      "unlockAnalysis": "支持 Netflix 与 Disney+ 4K 极清播放，AI 工具免验证直连。",
      "verdict": "低延迟专线爱好者不可错过的稳健之选。"
    },
    "plans": [
      {
        "name": "极速尝鲜包",
        "billing": "月付",
        "price": "¥17",
        "traffic": "130GB",
        "cycle": "每月"
      },
      {
        "name": "主力进阶包",
        "billing": "月付",
        "price": "¥32",
        "traffic": "260GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "实测认证",
      "IEPL专线",
      "极低延迟",
      "多线BGP"
    ],
    "summary": "实测 440Mbps，晚高峰 22:46 零丢包，低延迟专线典范。",
    "pros": [
      "官方实测认证，晚高峰 0% 丢包率",
      "支持专属客户端与开源订阅导入",
      "三网直连延迟极低"
    ],
    "cons": [
      "非亚太地区节点数量较少"
    ],
    "suitableFor": [
      "亚太近端访问",
      "远程 SSH 终端维护"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "guangnian",
    "name": "光年梯",
    "rank": 11,
    "featured": false,
    "isVerified": true,
    "logoUrl": "/images/logos/光年梯主图.png",
    "affLink": "https://guangnian.cloud/#/register?code=guangnian",
    "coupon": "gn888",
    "couponDiscount": "全场 88 折",
    "startingPrice": "¥15/月",
    "foundedYear": "2021",
    "lineType": "多线中继 + 专线",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "官方测速批次",
      "nodes": [
        {
          "region": "香港",
          "latency": "27ms",
          "download": "390Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "55ms",
          "download": "310Mbps",
          "status": "normal"
        },
        {
          "region": "美国",
          "latency": "155ms",
          "download": "120Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "45ms",
      "maxDownload": "390Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/光年梯-节点测速实测.png",
      "testDate": "2026-08-11 14:38:04 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev",
      "notes": "实测证明其 Shadowsocks 节点运行健康，吞吐稳定。"
    },
    "detailedReview": {
      "overview": "光年梯主打高性价比与大带宽中继专线，致力于为学生与轻度用户提供价格友好的日常翻墙服务。",
      "architecture": "多路国内中转接入，动态切换故障节点。",
      "speedtestAnalysis": "实测香港节点 27ms、390Mbps，满足 4K 视频与日常大文件吞吐。",
      "unlockAnalysis": "流媒体解锁与 AI 交互顺畅。",
      "verdict": "15 元价位性价比极高的稳定之选。"
    },
    "plans": [
      {
        "name": "基础版",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "大流量版",
        "billing": "月付",
        "price": "¥28",
        "traffic": "240GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "实测认证",
      "15元平价",
      "多线中继",
      "日常追剧"
    ],
    "summary": "实测 390Mbps，15元超低入门门槛，大带宽中继专线保障。",
    "pros": [
      "官方实测认证，性价比出众",
      "自研与通用客户端兼备",
      "节点响应迅速"
    ],
    "cons": [
      "冷门国家节点较少"
    ],
    "suitableFor": [
      "日常视频娱乐",
      "轻量跨境外贸沟通"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "yifan",
    "name": "一翻云",
    "rank": 12,
    "featured": false,
    "isVerified": true,
    "logoUrl": "/images/logos/1fly_logo.webp",
    "affLink": "https://1fly.cloud/#/register?code=yifan",
    "coupon": "1fly888",
    "couponDiscount": "9 折优惠",
    "startingPrice": "¥21/月",
    "foundedYear": "2022",
    "lineType": "IPLC高速专线",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "官方测速批次",
      "nodes": [
        {
          "region": "香港",
          "latency": "25ms",
          "download": "430Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "51ms",
          "download": "350Mbps",
          "status": "fast"
        },
        {
          "region": "新加坡",
          "latency": "58ms",
          "download": "310Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "44ms",
      "maxDownload": "430Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/一翻云-节点测速实测.png",
      "testDate": "2026-08-11 00:21:30 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev",
      "notes": "深度压测，全线节点 0% 丢包，展现了稳定的专线骨干能力。"
    },
    "detailedReview": {
      "overview": "一翻云提供高达 1.2TB 的极致版大容量套餐，针对企业级大吞吐与重度出海运营人员设计。",
      "architecture": "纯 IPLC 专线构建，全线无倍率套路。",
      "speedtestAnalysis": "实测香港节点 25ms、430Mbps，单线程爆发力极强。",
      "unlockAnalysis": "全区流媒体与 AI 高抗风控解锁。",
      "verdict": "大流量重度用户的专线首选。"
    },
    "plans": [
      {
        "name": "标准版",
        "billing": "月付",
        "price": "¥21",
        "traffic": "160GB",
        "cycle": "每月"
      },
      {
        "name": "极致大流量版",
        "billing": "月付",
        "price": "¥95",
        "traffic": "1200GB (1.2TB)",
        "cycle": "每月"
      }
    ],
    "tags": [
      "实测认证",
      "1.2TB大流量",
      "IPLC专线",
      "出海企业首选"
    ],
    "summary": "实测 430Mbps，提供高达 1.2TB 极致版大流量专线套餐，重度下载与出海优选。",
    "pros": [
      "官方实测认证，大流量套餐带宽冗余充足",
      "全线 IPLC 专线保障",
      "无设备连接数苛刻限制"
    ],
    "cons": [
      "入门月付价格在 20 元以上"
    ],
    "suitableFor": [
      "出海电商团队",
      "超大流量重度下载者"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "sogo",
    "name": "SOGO 云",
    "rank": 13,
    "featured": false,
    "isVerified": true,
    "logoUrl": "/images/logos/sogo.webp",
    "affLink": "https://sogo.cloud/#/register?code=sogo",
    "coupon": "sogo888",
    "couponDiscount": "满额折扣券",
    "startingPrice": "¥23/月",
    "foundedYear": "2021",
    "lineType": "IEPL高速中转",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "官方测速批次",
      "nodes": [
        {
          "region": "香港",
          "latency": "26ms",
          "download": "425Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "53ms",
          "download": "360Mbps",
          "status": "fast"
        },
        {
          "region": "美国",
          "latency": "158ms",
          "download": "130Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "45ms",
      "maxDownload": "425Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/SOGO云-节点测速实测.png",
      "testDate": "2026-08-11 18:57:59 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev",
      "notes": "傍晚 18:57 晚高峰前夕实测，下载达 425Mbps。"
    },
    "detailedReview": {
      "overview": "SOGO 云以顶配 1.1TB 大流量套餐及至尊不限时 1TB 终身版著称，主打土豪级大容量与企业定制。",
      "architecture": "IEPL 高速中转，节点抗干扰与可用性极佳。",
      "speedtestAnalysis": "实测香港节点 26ms、425Mbps，全线吞吐稳定无跳崖。",
      "unlockAnalysis": "支持主流流媒体与 AI，全区解锁表现平稳。",
      "verdict": "大容量不限时与顶配专线的豪华之选。"
    },
    "plans": [
      {
        "name": "主力畅游版",
        "billing": "月付",
        "price": "¥23",
        "traffic": "180GB",
        "cycle": "每月"
      },
      {
        "name": "顶配大流量版",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1100GB (1.1TB)",
        "cycle": "每月"
      },
      {
        "name": "SOGO至尊不限时版",
        "billing": "一次性付费",
        "price": "¥850",
        "traffic": "1000GB (1.0TB)",
        "cycle": "永久有效"
      }
    ],
    "tags": [
      "实测认证",
      "1.1TB顶配",
      "1000G至尊不限时",
      "IEPL专线"
    ],
    "summary": "实测 425Mbps，提供至尊 1000GB 永久不限时包与 1.1TB 顶配月付包。",
    "pros": [
      "官方实测认证，大容量储备深厚",
      "拥有 1TB 终身不限时流量包",
      "专线稳定性优秀"
    ],
    "cons": [
      "至尊不限时包单次支付门槛较高"
    ],
    "suitableFor": [
      "大流量企业级出海",
      "高预算长期稳定备用"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "kexin",
    "name": "可信云",
    "rank": 14,
    "featured": false,
    "isVerified": true,
    "affLink": "https://kexin.cloud/#/register?code=kexin",
    "coupon": "kexin",
    "couponDiscount": "全场 9 折",
    "startingPrice": "¥18/月",
    "foundedYear": "2023",
    "lineType": "多线优化中转",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "官方测速批次",
      "nodes": [
        {
          "region": "香港",
          "latency": "28ms",
          "download": "380Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "56ms",
          "download": "310Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "46ms",
      "maxDownload": "380Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/可信云-节点测速实测.png",
      "testDate": "2026-08-11 15:32:35 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev",
      "notes": "实测证明其多线中转架构具备 380Mbps 下载带宽。"
    },
    "detailedReview": {
      "overview": "可信云强调节点的可信赖性与高在线率（SLA），以客观透明的服务准则运行。",
      "architecture": "三网优化与 BGP 多线接入，节点自动故障转移。",
      "speedtestAnalysis": "实测香港节点 28ms、380Mbps，延迟平稳。",
      "unlockAnalysis": "主流流媒体与 AI 工具全部解锁。",
      "verdict": "踏实稳定的中转代表。"
    },
    "plans": [
      {
        "name": "标准版",
        "billing": "月付",
        "price": "¥18",
        "traffic": "130GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "实测认证",
      "高SLA",
      "多线优化",
      "踏实稳健"
    ],
    "summary": "实测 380Mbps，节点在线率高达 99.9%，踏实稳健的日常中转之选。",
    "pros": [
      "官方实测认证，高在线率保障",
      "价格公道透明"
    ],
    "cons": [
      "节点地区偏向亚太近端"
    ],
    "suitableFor": [
      "日常网页浏览",
      "跨境轻度办公"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "sujie",
    "name": "速界",
    "rank": 15,
    "featured": false,
    "isVerified": true,
    "logoUrl": "/images/logos/sujie_logo.webp",
    "affLink": "https://sujie.cloud/#/register?code=sujie",
    "coupon": "sujie888",
    "couponDiscount": "新用户 85 折",
    "startingPrice": "¥20/月",
    "foundedYear": "2022",
    "lineType": "IEPL高速专线",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "官方测速批次",
      "nodes": [
        {
          "region": "香港",
          "latency": "24ms",
          "download": "460Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "50ms",
          "download": "380Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "43ms",
      "maxDownload": "460Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/速界-节点测速实测.png",
      "testDate": "2026-08-11 15:39:36 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev",
      "notes": "实测证明其香港节点具备 460Mbps 的爆发性下载吞吐。"
    },
    "detailedReview": {
      "overview": "速界主打极限速度爆发与 4K 秒开，专为高清流媒体与超大附件下载玩家优化。",
      "architecture": "大带宽 IEPL 专线接入，节点单机带宽冗余充沛。",
      "speedtestAnalysis": "实测香港节点 24ms、460Mbps，日本节点 50ms、380Mbps。",
      "unlockAnalysis": "全区流媒体秒开，YouTube 4K 随意拖拽进度条不卡顿。",
      "verdict": "极速爱好者的心头好。"
    },
    "plans": [
      {
        "name": "极速体验版",
        "billing": "月付",
        "price": "¥20",
        "traffic": "150GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "实测认证",
      "4K秒开",
      "极限速度",
      "IEPL专线"
    ],
    "summary": "实测 460Mbps，香港单线程爆发力极强，YouTube 4K 拖拽秒开。",
    "pros": [
      "官方实测认证，下载速率极高",
      "流媒体秒开体验好"
    ],
    "cons": [
      "缺少超小容量低价年付包"
    ],
    "suitableFor": [
      "4K 流媒体重度爱好者",
      "大带宽视频工作者"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "quanqiu",
    "name": "全球云",
    "rank": 16,
    "featured": false,
    "isVerified": true,
    "logoUrl": "/images/logos/全球云主图.png",
    "affLink": "https://quanqiu.cloud/#/register?code=quanqiu",
    "coupon": "qq888",
    "couponDiscount": "全场 8 折",
    "startingPrice": "¥25/月",
    "foundedYear": "2021",
    "lineType": "多国BGP + 专线",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "官方测速批次",
      "nodes": [
        {
          "region": "香港",
          "latency": "27ms",
          "download": "410Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "53ms",
          "download": "350Mbps",
          "status": "fast"
        },
        {
          "region": "美国",
          "latency": "148ms",
          "download": "180Mbps",
          "status": "normal"
        },
        {
          "region": "德国",
          "latency": "175ms",
          "download": "140Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "47ms",
      "maxDownload": "410Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持全球多区"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/全球云-节点测速实测.png",
      "testDate": "2026-08-11 15:50:43 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev",
      "notes": "实测证明其覆盖广泛的全球节点均保持 0% 丢包率与 410Mbps 峰值。"
    },
    "detailedReview": {
      "overview": "全球云以极广的海外国家与冷门地区节点覆盖著称，节点遍布亚太、美洲、欧洲与南美，是跨国多区业务人员的利器。",
      "architecture": "全球分布式 BGP 数据中心中继与物理专线互联。",
      "speedtestAnalysis": "实测香港 27ms、410Mbps，欧美长途节点均保持在 140~180Mbps 以上。",
      "unlockAnalysis": "全区 Netflix、Disney+ 以及跨国社交平台解锁支持极好。",
      "verdict": "跨国冷门节点与全球化覆盖的首选品牌。"
    },
    "plans": [
      {
        "name": "全球畅游版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "180GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "实测认证",
      "全球多国节点",
      "冷门地区覆盖",
      "跨国外贸优选"
    ],
    "summary": "实测 410Mbps，节点覆盖亚欧美 30+ 地区，跨国业务与多区解锁利器。",
    "pros": [
      "官方实测认证，全球节点覆盖面广",
      "欧美长途节点丢包率依然为 0"
    ],
    "cons": [
      "月付价格相对略高"
    ],
    "suitableFor": [
      "跨国出海业务",
      "冷门国家 IP 需求者"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "yuzhou",
    "name": "宇宙云",
    "rank": 17,
    "featured": false,
    "isVerified": true,
    "logoUrl": "/images/logos/yuzhou_logo.webp",
    "affLink": "https://yuzhou.cloud/#/register?code=yuzhou",
    "coupon": "yuzhou",
    "couponDiscount": "新用户立减 5 元",
    "startingPrice": "¥18/月",
    "foundedYear": "2022",
    "lineType": "高速中转",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-11",
      "period": "官方测速批次",
      "nodes": [
        {
          "region": "香港",
          "latency": "29ms",
          "download": "390Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "58ms",
          "download": "300Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "48ms",
      "maxDownload": "390Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "proofImages": {
      "speedtest": "/images/speedtests/宇宙云-节点测速实测.png",
      "testDate": "2026-08-11 21:04:24 CST",
      "testTool": "MAI-TEST-BOT 2.0.0-dev",
      "notes": "晚高峰 21:04 实测，香港节点跑出 390Mbps，网络质量健康。"
    },
    "detailedReview": {
      "overview": "宇宙云专注高性价比中转服务，在 18 元档位提供了均衡的流量与稳健的节点带宽。",
      "architecture": "国内骨干中转节点分流，协议适配性好。",
      "speedtestAnalysis": "2026-08-11 晚 21:04 实测香港 29ms、390Mbps，丢包率 0%。",
      "unlockAnalysis": "支持日常主流流媒体与 ChatGPT。",
      "verdict": "踏实可靠的高性价比日用梯子。"
    },
    "plans": [
      {
        "name": "启航版",
        "billing": "月付",
        "price": "¥18",
        "traffic": "130GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "实测认证",
      "稳健中转",
      "高性价比",
      "18元日常档"
    ],
    "summary": "实测 390Mbps，晚高峰 21:04 压测零丢包，稳健好用的日常中转。",
    "pros": [
      "官方实测认证，晚高峰表现稳健",
      "价格亲民"
    ],
    "cons": [
      "特惠套餐流量适中"
    ],
    "suitableFor": [
      "日常网页与社交媒体",
      "轻度视频"
    ],
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11"
  },
  {
    "slug": "dalaoyun",
    "name": "大佬云",
    "rank": 18,
    "featured": false,
    "affLink": "https://dalaoyun.best/#/register?code=dly888",
    "coupon": "dly888",
    "couponDiscount": "全场 8 折",
    "startingPrice": "¥5.6/月起 (折合)",
    "foundedYear": "2023",
    "lineType": "高速中转隧道",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-10",
      "period": "日常抽测",
      "nodes": [
        {
          "region": "香港",
          "latency": "28ms",
          "download": "320Mbps",
          "status": "fast"
        },
        {
          "region": "新加坡",
          "latency": "52ms",
          "download": "210Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "45ms",
      "maxDownload": "320Mbps",
      "packetLoss": "0.2%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Partial",
          "note": "部分节点支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "YouTube 4K",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "学生特惠版",
        "billing": "年付",
        "price": "¥68",
        "traffic": "40GB",
        "cycle": "每月"
      },
      {
        "name": "标准主力版",
        "billing": "月付",
        "price": "¥15",
        "traffic": "120GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "平价精选",
      "5元起步",
      "学生特惠",
      "高性价比"
    ],
    "summary": "极限平价，年付折合仅 5.6 元/月，学生党与轻度办公日常查资料的高性价比之选。",
    "pros": [
      "入门支出极低，年付折合约 5.6 元/月",
      "支持自研客户端与开源订阅",
      "适合轻度查资料"
    ],
    "cons": [
      "低价套餐月流量仅 40GB",
      "晚高峰抗挤兑冗余有限"
    ],
    "suitableFor": [
      "学生日常学习",
      "轻量办公查阅",
      "备用防失联"
    ],
    "dataStatus": "vendor",
    "verifiedDate": "2026-08-10"
  },
  {
    "slug": "wuyou",
    "name": "无忧链接",
    "rank": 19,
    "featured": false,
    "affLink": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "coupon": "wuyou666",
    "couponDiscount": "全场 85 折",
    "startingPrice": "¥6/月 (折合)",
    "foundedYear": "2022",
    "lineType": "多线 BGP 中转",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-10",
      "period": "日常抽测",
      "nodes": [
        {
          "region": "香港",
          "latency": "23ms",
          "download": "531Mbps",
          "status": "fast"
        },
        {
          "region": "新加坡",
          "latency": "42ms",
          "download": "380Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "42ms",
      "maxDownload": "531Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "TikTok",
          "status": "Operational",
          "note": "电商跨区直连"
        }
      ]
    },
    "plans": [
      {
        "name": "MINI轻量年付",
        "billing": "年付",
        "price": "¥72",
        "traffic": "40GB",
        "cycle": "每月"
      },
      {
        "name": "舒心月付版",
        "billing": "月付",
        "price": "¥19",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "100G永久不限时包",
        "billing": "一次性付费",
        "price": "¥108",
        "traffic": "100GB",
        "cycle": "永久有效"
      }
    ],
    "tags": [
      "无倍率不限速",
      "6元轻量",
      "订阅无需转换",
      "永久不限时"
    ],
    "summary": "全线无倍率不限速，订阅无需转换直接兼容多客户端，提供 108 元永久不限时包。",
    "pros": [
      "全线 1 倍率不限速",
      "订阅链接通用性好，免转换",
      "提供百元级永久包"
    ],
    "cons": [
      "MINI 年付流量偏小"
    ],
    "suitableFor": [
      "轻度电商运营",
      "备用流量储备"
    ],
    "dataStatus": "vendor",
    "verifiedDate": "2026-08-10"
  },
  {
    "slug": "firefly",
    "name": "Firefly",
    "rank": 20,
    "featured": false,
    "affLink": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "coupon": "firefly",
    "couponDiscount": "新用户 8 折",
    "startingPrice": "¥8/月 (折合)",
    "foundedYear": "2020",
    "lineType": "IPLC 纯专线",
    "protocols": [
      "VLESS"
    ],
    "hasCustomClient": true,
    "supportThirdParty": false,
    "speedtest": {
      "testDate": "2026-08-10",
      "period": "官方资料记录",
      "nodes": [
        {
          "region": "香港",
          "latency": "27ms",
          "download": "547Mbps",
          "status": "fast"
        },
        {
          "region": "新加坡",
          "latency": "42ms",
          "download": "410Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "41ms",
      "maxDownload": "547Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "原生IP全解锁"
        },
        {
          "name": "Claude",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "Firefly 年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "IPLC纯专线",
      "不限速",
      "原生IP",
      "专属客户端"
    ],
    "summary": "IPLC 纯专线搭配原生 IP，全节点不限速，专属客户端开箱即用，免翻墙访问官网。",
    "pros": [
      "纯专线搭配原生 IP，流媒体与 AI 解锁极佳",
      "全平台专属客户端开箱即用",
      "官网国内免翻墙直达"
    ],
    "cons": [
      "无法导出第三方开源订阅链接"
    ],
    "suitableFor": [
      "懒人小白用户",
      "流媒体深度追剧"
    ],
    "dataStatus": "vendor",
    "verifiedDate": "2026-08-10"
  },
  {
    "slug": "shanyue",
    "name": "闪跃",
    "rank": 21,
    "featured": false,
    "affLink": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "coupon": "shanyue",
    "couponDiscount": "88 折",
    "startingPrice": "¥24/月",
    "foundedYear": "2023",
    "lineType": "高速专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "抽测",
      "nodes": [
        {
          "region": "香港",
          "latency": "25ms",
          "download": "410Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "42ms",
      "maxDownload": "410Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "月度主力版",
        "billing": "月付",
        "price": "¥24",
        "traffic": "150GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "专线加速",
      "24元档",
      "平稳可靠"
    ],
    "summary": "24元 150GB 主流均衡配置，专线中继稳定耐用。",
    "pros": [
      "网络平稳，抖动小"
    ],
    "cons": [
      "入门月付稍高"
    ],
    "suitableFor": [
      "日常主力使用"
    ],
    "dataStatus": "vendor",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "shandianshu",
    "name": "闪电鼠",
    "rank": 22,
    "featured": false,
    "affLink": "https://shandianshu.top/#/register?code=sds",
    "coupon": "sds888",
    "couponDiscount": "全场 85 折",
    "startingPrice": "¥12/月",
    "foundedYear": "2023",
    "lineType": "BGP高速中转",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "抽测",
      "nodes": [
        {
          "region": "香港",
          "latency": "32ms",
          "download": "280Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "48ms",
      "maxDownload": "280Mbps",
      "packetLoss": "0.1%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "基础版",
        "billing": "月付",
        "price": "¥12",
        "traffic": "100GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "平价中转",
      "12元月付",
      "高性价比"
    ],
    "summary": "12 元小额月付平民机场，适合预算受限的日常网页浏览。",
    "pros": [
      "月付门槛低，支出压力小"
    ],
    "cons": [
      "晚高峰速度有所压制"
    ],
    "suitableFor": [
      "备用",
      "轻度查资料"
    ],
    "dataStatus": "vendor",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "yinxingren",
    "name": "隐形人",
    "rank": 23,
    "featured": false,
    "logoUrl": "/images/logos/隐形人256x256.png",
    "affLink": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "coupon": "yxr888",
    "couponDiscount": "88 折",
    "startingPrice": "¥22/月",
    "foundedYear": "2022",
    "lineType": "企业级专线 + 智能容灾",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "hasCustomClient": true,
    "supportThirdParty": false,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "抽测",
      "nodes": [
        {
          "region": "香港",
          "latency": "26ms",
          "download": "430Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "44ms",
      "maxDownload": "430Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "基础畅联版",
        "billing": "月付",
        "price": "¥22",
        "traffic": "140GB",
        "cycle": "每月"
      },
      {
        "name": "钻石穹顶版",
        "billing": "月付",
        "price": "¥185",
        "traffic": "1600GB",
        "cycle": "每月"
      },
      {
        "name": "一次性精英流量包",
        "billing": "一次性付费",
        "price": "¥1199",
        "traffic": "1000GB",
        "cycle": "永久有效"
      }
    ],
    "tags": [
      "60+节点清单",
      "1小时修复承诺",
      "企业专线",
      "不限时大流量"
    ],
    "summary": "承诺 1 小时节点故障修复，60+ 节点详单公开，提供 1TB 一次性精英流量包。",
    "pros": [
      "官方承诺 1 小时故障修复",
      "节点冗余丰富，多重备用",
      "大流量精英包容量充沛"
    ],
    "cons": [
      "不提供第三方开源订阅链接"
    ],
    "suitableFor": [
      "高可用性要求白领",
      "商务办公"
    ],
    "dataStatus": "vendor",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "tiziyun",
    "name": "梯子云",
    "rank": 24,
    "featured": false,
    "logoUrl": "/images/logos/梯子云256x256.png",
    "affLink": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "coupon": "tiziyun",
    "couponDiscount": "全场 8 折",
    "startingPrice": "¥16/月",
    "foundedYear": "2023",
    "lineType": "多线 BGP + 专线直连",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "抽测",
      "nodes": [
        {
          "region": "香港",
          "latency": "28ms",
          "download": "380Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "45ms",
      "maxDownload": "380Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "入门版",
        "billing": "月付",
        "price": "¥16",
        "traffic": "110GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "自研全平台客户端",
      "一键登录",
      "支持通用订阅",
      "高性价比"
    ],
    "summary": "自研全平台客户端一键登录，同时支持第三方客户端导入，兼顾新手与进阶玩家。",
    "pros": [
      "客户端生态完善，双模式支持",
      "价格亲民"
    ],
    "cons": [
      "大流量套餐档位较少"
    ],
    "suitableFor": [
      "普通翻墙用户",
      "多设备协同"
    ],
    "dataStatus": "vendor",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "wgetcloud",
    "name": "WgetCloud",
    "rank": 25,
    "featured": false,
    "affLink": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "coupon": "wget888",
    "couponDiscount": "精品商务专线",
    "startingPrice": "¥99/月 (折合季付¥297)",
    "foundedYear": "2020",
    "lineType": "精品商业 BGP + IPLC 专线",
    "protocols": [
      "Trojan",
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-05-02",
      "period": "历史综合压测",
      "nodes": [
        {
          "region": "日本",
          "latency": "69.4ms",
          "download": "462.04Mbps",
          "status": "fast"
        },
        {
          "region": "美国",
          "latency": "170.2ms",
          "download": "440.04Mbps",
          "status": "fast"
        },
        {
          "region": "香港",
          "latency": "25.9ms",
          "download": "431.24Mbps",
          "status": "fast"
        },
        {
          "region": "新加坡",
          "latency": "55.6ms",
          "download": "422.97Mbps",
          "status": "fast"
        },
        {
          "region": "台湾",
          "latency": "41.3ms",
          "download": "407.66Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "43ms (亚太)",
      "maxDownload": "462.04Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Gemini",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "YouTube 4K",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "基础专线服务",
        "billing": "季付",
        "price": "¥297",
        "traffic": "230GB/月",
        "cycle": "每月"
      },
      {
        "name": "优质专线服务",
        "billing": "季付",
        "price": "¥327",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "精品专线服务",
        "billing": "季付",
        "price": "¥357",
        "traffic": "270GB/月",
        "cycle": "每月"
      }
    ],
    "tags": [
      "精品商业专线",
      "老牌旗舰",
      "企业级SLA",
      "全节点高下载"
    ],
    "summary": "老牌高端专线服务商，59 节点全非零下载测速，香港延迟仅 25.9ms，商业用户首选。",
    "pros": [
      "59 个节点全部取得非零测速，日本、美国、香港多地区均突破 400Mbps",
      "香港平均 TLS RTT 仅 25.9ms，网络架构极为扎实",
      "成熟的管理团队与企业级 SLA 服务保障"
    ],
    "cons": [
      "门槛极高，仅支持季付及以上，最低支出 ¥297 起步，无单月低价套餐"
    ],
    "suitableFor": [
      "高净值商业出海人士",
      "远程企业高管",
      "不差钱的稳定性极致追求者"
    ],
    "dataStatus": "historical",
    "verifiedDate": "2026-05-02"
  },
  {
    "slug": "baiyueguang",
    "name": "白月光",
    "rank": 26,
    "featured": false,
    "affLink": "https://www.sibker.com/register?invite_code=gg6puAId",
    "coupon": "sibker888",
    "couponDiscount": "季付入门¥66",
    "startingPrice": "¥22/月 (折合季付¥66)",
    "foundedYear": "2021",
    "lineType": "多地区 BGP 隧道",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-07-17",
      "period": "历史多节点抽测",
      "nodes": [
        {
          "region": "香港",
          "latency": "160.7ms",
          "download": "114.94Mbps",
          "status": "normal"
        },
        {
          "region": "日本",
          "latency": "202.4ms",
          "download": "77.65Mbps",
          "status": "normal"
        },
        {
          "region": "新加坡",
          "latency": "186.8ms",
          "download": "85.22Mbps",
          "status": "normal"
        },
        {
          "region": "美国",
          "latency": "302.6ms",
          "download": "70.53Mbps",
          "status": "slow"
        }
      ],
      "avgLatency": "180ms",
      "maxDownload": "114.94Mbps",
      "packetLoss": "0.4%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        },
        {
          "name": "Disney+",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "小包",
        "billing": "季付",
        "price": "¥66",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "中包",
        "billing": "季付",
        "price": "¥126",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "大包",
        "billing": "季付",
        "price": "¥156",
        "traffic": "400GB/月",
        "cycle": "每月"
      },
      {
        "name": "旗舰包",
        "billing": "年付",
        "price": "¥2500",
        "traffic": "2500GB/月",
        "cycle": "每月"
      }
    ],
    "tags": [
      "108节点覆盖",
      "季付入门66元",
      "多国节点",
      "Shadowsocks"
    ],
    "summary": "108 个节点覆盖 79 个地区，季付入门仅需 66 元，多国长尾节点丰富。",
    "pros": [
      "季付 66 元支出门槛低",
      "节点地区极其丰富，涵盖东南亚小众国家"
    ],
    "cons": [
      "测速延迟整体偏高，香港平均 TLS 达 160ms",
      "无单月支付选项"
    ],
    "suitableFor": [
      "跨国多地区访问",
      "东南亚本土业务沟通"
    ],
    "dataStatus": "historical",
    "verifiedDate": "2026-07-17"
  },
  {
    "slug": "flyingbird",
    "name": "FlyingBird 飞鸟机场",
    "rank": 27,
    "featured": false,
    "logoUrl": "/images/logos/flyingbird.webp",
    "affLink": "https://flyingbird.cloud/#/register?code=flyingbird",
    "coupon": "fb888",
    "couponDiscount": "季付及以上 7 折",
    "startingPrice": "¥15/月 (折合)",
    "foundedYear": "2021",
    "lineType": "全专线 IPLC",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "历史记录",
      "nodes": [
        {
          "region": "香港",
          "latency": "26ms",
          "download": "380Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "44ms",
      "maxDownload": "380Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "年付特惠版",
        "billing": "年付",
        "price": "¥180",
        "traffic": "100GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "全专线IPLC",
      "无倍率不限速",
      "多老牌融合",
      "稳定平滑"
    ],
    "summary": "多个老牌机场融合衍生，全专线 IPLC，Shadowsocks 协议无倍率不限速。",
    "pros": [
      "全专线架构，抗敏感时期能力强",
      "协议开销极低"
    ],
    "cons": [
      "未提供独立自研客户端"
    ],
    "suitableFor": [
      "资深翻墙老手",
      "追求无倍率计费的极客"
    ],
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "cyberguard",
    "name": "CyberGuard",
    "rank": 28,
    "featured": false,
    "logoUrl": "/images/logos/galaxy_transparent_square.webp",
    "affLink": "https://cyberguard.best/#/register?code=AxXNNYng",
    "coupon": "cg888",
    "couponDiscount": "季付及以上 7 折",
    "startingPrice": "¥5.6/月起 (年付折合)",
    "foundedYear": "2023",
    "lineType": "多线中继 + 专线",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "抽测",
      "nodes": [
        {
          "region": "香港",
          "latency": "35ms",
          "download": "260Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "48ms",
      "maxDownload": "260Mbps",
      "packetLoss": "0.1%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "基础年付版",
        "billing": "年付",
        "price": "¥67.2",
        "traffic": "60GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "平价中转",
      "7折优惠",
      "日常轻量"
    ],
    "summary": "全专线与多线中继，年付折合约 5.6 元/月，季付及以上支持 7 折优惠。",
    "pros": [
      "年付价格极低",
      "支持 7 折优惠券"
    ],
    "cons": [
      "缺少大带宽峰值保证"
    ],
    "suitableFor": [
      "轻度备用",
      "预算极度敏感用户"
    ],
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "qingyunti",
    "name": "青云梯",
    "rank": 29,
    "featured": false,
    "logoUrl": "/images/logos/qyt_logo.webp",
    "affLink": "https://qyt.cloud/#/register?code=qingyunti",
    "coupon": "qyt888",
    "couponDiscount": "运营六年老牌优惠",
    "startingPrice": "¥22/月",
    "foundedYear": "2019",
    "lineType": "企业级 IPLC + 三网优化",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "历史记录",
      "nodes": [
        {
          "region": "香港",
          "latency": "24ms",
          "download": "420Mbps",
          "status": "fast"
        },
        {
          "region": "日本",
          "latency": "50ms",
          "download": "360Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "43ms",
      "maxDownload": "420Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "企业入门版",
        "billing": "月付",
        "price": "¥22",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "旗舰至尊版",
        "billing": "月付",
        "price": "¥65",
        "traffic": "600GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "运营六年老牌",
      "企业级IPLC",
      "智能负载均衡",
      "成熟稳定"
    ],
    "summary": "运营六年以上的成熟专线老牌，采用企业级 IPLC 与智能负载均衡，支持企业定制。",
    "pros": [
      "六年运营资历，跑路风险极低",
      "智能负载均衡架构，稳定性佳"
    ],
    "cons": [
      "价格位于中高区间"
    ],
    "suitableFor": [
      "追求老牌底蕴的用户",
      "中小型团队出海"
    ],
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "longmaoyun",
    "name": "龙猫云",
    "rank": 30,
    "featured": false,
    "logoUrl": "/images/logos/totoro.webp",
    "affLink": "https://totoro.cloud/#/register?code=totoro",
    "coupon": "totoro888",
    "couponDiscount": "全场 85 折",
    "startingPrice": "¥20/月",
    "foundedYear": "2022",
    "lineType": "IPLC 全专线",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "历史记录",
      "nodes": [
        {
          "region": "香港",
          "latency": "25ms",
          "download": "450Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "42ms",
      "maxDownload": "450Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "主力标准版",
        "billing": "月付",
        "price": "¥20",
        "traffic": "160GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "IPLC全专线",
      "最高2000Mbps",
      "教程完整",
      "Shadowsocks"
    ],
    "summary": "全专线 IPLC 接入，历史资料记载最高 2000Mbps 峰值端口，提供极为详尽的客户端配置教程。",
    "pros": [
      "专线骨干质量扎实",
      "新手客户端教程十分详细"
    ],
    "cons": [
      "目前仅支持第三方客户端"
    ],
    "suitableFor": [
      "看重教程指导的新手",
      "大带宽追剧"
    ],
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "fatcat",
    "name": "肥猫云 FATCAT",
    "rank": 31,
    "featured": false,
    "affLink": "https://fatcat.best/#/register?code=fatcat",
    "coupon": "fatcat",
    "couponDiscount": "年付优惠",
    "startingPrice": "¥18/月",
    "foundedYear": "2023",
    "lineType": "企业级 IEPL/IPLC 内网专线",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "历史记录",
      "nodes": [
        {
          "region": "香港",
          "latency": "26ms",
          "download": "390Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "44ms",
      "maxDownload": "390Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "年付加强版",
        "billing": "年付",
        "price": "¥198",
        "traffic": "120GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "企业级内网",
      "抗封锁强",
      "年付加强",
      "Shadowsocks"
    ],
    "summary": "企业级 IEPL/IPLC 内网专线定位，强调极端网络管制下的抗封锁与抗干扰能力。",
    "pros": [
      "内网专线抗敏感期干扰能力优异",
      "节点负载均衡良好"
    ],
    "cons": [
      "缺少自研客户端"
    ],
    "suitableFor": [
      "敏感时期防失联",
      "长期稳定需求者"
    ],
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "lingdongyun",
    "name": "灵动云",
    "rank": 32,
    "featured": false,
    "logoUrl": "/images/logos/灵动云256x256.png",
    "affLink": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "coupon": "ld888",
    "couponDiscount": "全场 85 折",
    "startingPrice": "¥8.25/月 (年付¥99)",
    "foundedYear": "2025",
    "lineType": "VLESS + IEPL 专线",
    "protocols": [
      "VLESS"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "历史记录",
      "nodes": [
        {
          "region": "香港",
          "latency": "24ms",
          "download": "430Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "43ms",
      "maxDownload": "430Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "灵动·穿云",
        "billing": "年付",
        "price": "¥99",
        "traffic": "70GB",
        "cycle": "每月"
      },
      {
        "name": "灵动·闲云小流量包",
        "billing": "一次性付费",
        "price": "¥199",
        "traffic": "150GB",
        "cycle": "永久有效"
      },
      {
        "name": "灵动·惊云标准包",
        "billing": "一次性付费",
        "price": "¥499",
        "traffic": "400GB",
        "cycle": "永久有效"
      },
      {
        "name": "灵动云·至尊私人定制",
        "billing": "月付",
        "price": "¥620",
        "traffic": "独享专线",
        "cycle": "每月"
      }
    ],
    "tags": [
      "2025新秀",
      "VLESS专线",
      "70G年付99元",
      "单次流量包"
    ],
    "summary": "2025 新开业的 VLESS IEPL 专线新秀，提供 99 元年付及多档不限时流量包与私人定制。",
    "pros": [
      "新开业专线，用户密度低，晚高峰极度充裕",
      "99元入门口碑好，提供不限时永久包"
    ],
    "cons": [
      "开业时间较短，长期稳定性需持续观察"
    ],
    "suitableFor": [
      "尝鲜新专线的极客",
      "备用不限时包"
    ],
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "yinghuochong",
    "name": "萤火虫",
    "rank": 33,
    "featured": false,
    "affLink": "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
    "coupon": "firefly",
    "couponDiscount": "新用户 8 折",
    "startingPrice": "¥8/月 (年付¥96)",
    "foundedYear": "2020",
    "lineType": "IPLC + VLESS",
    "protocols": [
      "VLESS"
    ],
    "hasCustomClient": true,
    "supportThirdParty": false,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "历史记录",
      "nodes": [
        {
          "region": "香港",
          "latency": "26ms",
          "download": "460Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "42ms",
      "maxDownload": "460Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "Firefly年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "8年团队",
      "不限设备",
      "原生IP",
      "ChatGPT全解锁"
    ],
    "summary": "老牌团队打造，IPLC + VLESS 定位，原生 IP，不限速不限设备，新用户立减 8 折。",
    "pros": [
      "原生 IP 质量好，AI 交互稳定",
      "不限制在线设备数量"
    ],
    "cons": [
      "仅支持专属客户端，无法通用订阅导入"
    ],
    "suitableFor": [
      "多设备家庭用户",
      "AI 写作与绘图用户"
    ],
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "shanshuiyun",
    "name": "山水云",
    "rank": 34,
    "featured": false,
    "affLink": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "coupon": "ssy888",
    "couponDiscount": "满减优惠券",
    "startingPrice": "¥15/月",
    "foundedYear": "2023",
    "lineType": "多线优化隧道",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-06-29",
      "period": "历史抽测",
      "nodes": [
        {
          "region": "香港",
          "latency": "31ms",
          "download": "240Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "46ms",
      "maxDownload": "240Mbps",
      "packetLoss": "0.2%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "入门月付版",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "中级月付版",
        "billing": "月付",
        "price": "¥28",
        "traffic": "200GB",
        "cycle": "每月"
      },
      {
        "name": "高级月付版",
        "billing": "月付",
        "price": "¥55",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "月付入门15元",
      "梯度清晰",
      "多档可选",
      "平价实用"
    ],
    "summary": "最低真实月付价仅需 15 元包含 100GB，三档月付流量梯度清晰，平价实用。",
    "pros": [
      "15 元月付门槛低，无需长期年付绑定",
      "流量梯度清晰（100G/200G/500G）"
    ],
    "cons": [
      "大吞吐表现中规中矩"
    ],
    "suitableFor": [
      "月付党",
      "日常中度用量用户"
    ],
    "dataStatus": "historical",
    "verifiedDate": "2026-06-29"
  },
  {
    "slug": "wavenet",
    "name": "浪网 (WaveNet)",
    "rank": 35,
    "featured": false,
    "affLink": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "coupon": "wave888",
    "couponDiscount": "全场 7 折优惠",
    "startingPrice": "¥14/月",
    "foundedYear": "2023",
    "lineType": "BGP 高速隧道",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "历史记录",
      "nodes": [
        {
          "region": "香港",
          "latency": "30ms",
          "download": "310Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "46ms",
      "maxDownload": "310Mbps",
      "packetLoss": "0.1%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "标准版",
        "billing": "月付",
        "price": "¥14",
        "traffic": "120GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "BGP高速隧道",
      "7折优惠券",
      "亲民月付",
      "VLESS"
    ],
    "summary": "BGP 高速隧道接入，套餐包含月付及不限时流量，附带专属 7 折优惠码。",
    "pros": [
      "7 折优惠后价格极低",
      "支持自研客户端"
    ],
    "cons": [
      "晚高峰国际出口略受公网波动影响"
    ],
    "suitableFor": [
      "日常查阅资料",
      "短视频追剧"
    ],
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "edgenova",
    "name": "EdgeNova 边际云",
    "rank": 36,
    "featured": false,
    "logoUrl": "/images/logos/edgenova_logo.webp",
    "affLink": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "coupon": "en888",
    "couponDiscount": "新用户立减券",
    "startingPrice": "¥18/月",
    "foundedYear": "2023",
    "lineType": "高速直连 + IPLC 多线路",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "历史记录",
      "nodes": [
        {
          "region": "香港",
          "latency": "27ms",
          "download": "360Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "44ms",
      "maxDownload": "360Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "极界·入门版",
        "billing": "月付",
        "price": "¥18",
        "traffic": "130GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "多线路自动分配",
      "支持USDT",
      "高速直连",
      "IPLC"
    ],
    "summary": "边缘节点 EdgeNova 主打高速直连与 IPLC 自动路由调度，支持主流国内支付与 USDT。",
    "pros": [
      "支付方式灵活（支持加密货币 USDT）",
      "多线路故障自动转移"
    ],
    "cons": [
      "节点配置稍微偏向技术化"
    ],
    "suitableFor": [
      "Web3 开发者",
      "加密货币从业人员"
    ],
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "tntcloud",
    "name": "TNTCloud",
    "rank": 37,
    "featured": false,
    "logoUrl": "/images/logos/TNT.webp",
    "affLink": "https://tntcloud.best/#/register?code=tnt",
    "coupon": "tnt888",
    "couponDiscount": "全场 88 折",
    "startingPrice": "¥16/月",
    "foundedYear": "2022",
    "lineType": "高速中转隧道",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "抽测",
      "nodes": [
        {
          "region": "香港",
          "latency": "29ms",
          "download": "330Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "46ms",
      "maxDownload": "330Mbps",
      "packetLoss": "0.1%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "标准版",
        "billing": "月付",
        "price": "¥16",
        "traffic": "120GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "弹性套餐",
      "高速中转",
      "纯SS协议"
    ],
    "summary": "高速中转与专线混合架构，提供多档弹性套餐，纯粹的 Shadowsocks 配置。",
    "pros": [
      "套餐选择灵活",
      "价格适中"
    ],
    "cons": [
      "缺少自研客户端"
    ],
    "suitableFor": [
      "普通日常翻墙",
      "社交软件沟通"
    ],
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "sslar",
    "name": "sslar 极速网络",
    "rank": 38,
    "featured": false,
    "affLink": "https://sslar.cloud/#/register?code=ko3eTt0w",
    "coupon": "ko3eTt0w",
    "couponDiscount": "8 折优惠码",
    "startingPrice": "¥17/月",
    "foundedYear": "2022",
    "lineType": "企业级 IEPL + 多线 BGP",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "hasCustomClient": true,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "历史记录",
      "nodes": [
        {
          "region": "香港",
          "latency": "26ms",
          "download": "390Mbps",
          "status": "fast"
        }
      ],
      "avgLatency": "44ms",
      "maxDownload": "390Mbps",
      "packetLoss": "0%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "Basic",
        "billing": "月付",
        "price": "¥17",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "Standard",
        "billing": "月付",
        "price": "¥28",
        "traffic": "200GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "企业级IEPL",
      "多线BGP",
      "协议自适应",
      "远程协助"
    ],
    "summary": "企业级 IEPL 与多线 BGP，支持 SS/VLESS 协议自适应，提供远程桌面配置协助。",
    "pros": [
      "支持远程桌面协助配置，售后服务贴心",
      "自适应协议抗干扰强"
    ],
    "cons": [
      "优惠码需季付以上生效"
    ],
    "suitableFor": [
      "商务办公人群",
      "技术小白需要手把手远程协助"
    ],
    "dataStatus": "historical",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "yunjiexian",
    "name": "云界线",
    "rank": 39,
    "featured": false,
    "affLink": "https://yunjiexian.cloud/#/register?code=yjx",
    "coupon": "yjx888",
    "couponDiscount": "新用户 9 折",
    "startingPrice": "¥15/月",
    "foundedYear": "2023",
    "lineType": "多线中转",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "抽测",
      "nodes": [
        {
          "region": "香港",
          "latency": "32ms",
          "download": "260Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "48ms",
      "maxDownload": "260Mbps",
      "packetLoss": "0.1%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "月付版",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "平价实用",
      "中转隧道"
    ],
    "summary": "平价实用型中转服务，15 元月付，节点简单明晰。",
    "pros": [
      "价格门槛低"
    ],
    "cons": [
      "节点数量相对较少"
    ],
    "suitableFor": [
      "日常网页备用"
    ],
    "dataStatus": "vendor",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "liulianyun",
    "name": "榴莲云",
    "rank": 40,
    "featured": false,
    "affLink": "https://liulianyun.best/#/register?code=lly",
    "coupon": "lly888",
    "couponDiscount": "全场 85 折",
    "startingPrice": "¥16/月",
    "foundedYear": "2023",
    "lineType": "BGP中转",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "抽测",
      "nodes": [
        {
          "region": "香港",
          "latency": "30ms",
          "download": "280Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "47ms",
      "maxDownload": "280Mbps",
      "packetLoss": "0.1%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "标准版",
        "billing": "月付",
        "price": "¥16",
        "traffic": "110GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "平价中转",
      "BGP加速"
    ],
    "summary": "BGP 中转加速，价格亲民，适合日常小流量需求。",
    "pros": [
      "价格亲民，流量够用"
    ],
    "cons": [
      "无自研客户端"
    ],
    "suitableFor": [
      "轻度学生党"
    ],
    "dataStatus": "vendor",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "shenxing",
    "name": "神行加速",
    "rank": 41,
    "featured": false,
    "affLink": "https://shenxing.top/#/register?code=sx",
    "coupon": "sx888",
    "couponDiscount": "9 折优惠",
    "startingPrice": "¥18/月",
    "foundedYear": "2023",
    "lineType": "多线中继",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "抽测",
      "nodes": [
        {
          "region": "香港",
          "latency": "33ms",
          "download": "250Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "48ms",
      "maxDownload": "250Mbps",
      "packetLoss": "0.2%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "月付版",
        "billing": "月付",
        "price": "¥18",
        "traffic": "120GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "多线中继",
      "日常备用"
    ],
    "summary": "多线中继分流，适合作为第二备用应急梯子。",
    "pros": [
      "中继节点稳定"
    ],
    "cons": [
      "高峰期延迟波动略大"
    ],
    "suitableFor": [
      "应急备用"
    ],
    "dataStatus": "vendor",
    "verifiedDate": "2026-08-09"
  },
  {
    "slug": "huanqiuti",
    "name": "环球梯",
    "rank": 42,
    "featured": false,
    "affLink": "https://huanqiuti.cloud/#/register?code=hqt",
    "coupon": "hqt888",
    "couponDiscount": "全场 85 折",
    "startingPrice": "¥19/月",
    "foundedYear": "2022",
    "lineType": "中转直连混合",
    "protocols": [
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "supportThirdParty": true,
    "speedtest": {
      "testDate": "2026-08-09",
      "period": "抽测",
      "nodes": [
        {
          "region": "香港",
          "latency": "31ms",
          "download": "270Mbps",
          "status": "normal"
        }
      ],
      "avgLatency": "47ms",
      "maxDownload": "270Mbps",
      "packetLoss": "0.2%"
    },
    "unlockMatrix": {
      "ai": [
        {
          "name": "ChatGPT",
          "status": "Operational",
          "note": "支持"
        }
      ],
      "streaming": [
        {
          "name": "Netflix",
          "status": "Operational",
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "畅享版",
        "billing": "月付",
        "price": "¥19",
        "traffic": "130GB",
        "cycle": "每月"
      }
    ],
    "tags": [
      "环球节点",
      "混合架构"
    ],
    "summary": "中转与公网直连混合架构，提供多地区基础连接能力。",
    "pros": [
      "节点分布均匀"
    ],
    "cons": [
      "缺少专线保障"
    ],
    "suitableFor": [
      "日常轻度浏览"
    ],
    "dataStatus": "vendor",
    "verifiedDate": "2026-08-09"
  }
];
