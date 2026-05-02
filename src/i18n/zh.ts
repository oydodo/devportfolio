import type { SiteConfig } from "./types";

export const zh: SiteConfig = {
  name: "欧阳志成",
  title: "信息安全工程师",
  description: "欧阳志成的个人主页 — 商飞 AI 安全工程师",
  accentColor: "#1d4ed8",
  social: {
    email: "ouyangzh@umich.edu",
    github: "https://github.com/ouyangzhCN",
    cvPdf: "/cv_CN.pdf",
    cvWeb: "https://zhichengouyang.notion.site/zh",
  },
  aboutMe:
    "信息安全工程师，就职于中国商用飞机有限公司信息化中心，主要负责 AI 大模型安全研究与信息安全运营。在公司内网独立构建 7×24 小时全自动安全运营智能体，以多智能体自动化运营取代人工轮班值守，覆盖威胁检测、工单响应、跨系统联动全流程。交叉学科背景：密歇根大学双学位硕士（机械工程 & 应用经济学，满绩点 4.0/4.0）。以第一作者发表 SCI 一区论文。托福 105 · GRE 324。",
  skills: [
    "Python",
    "C++",
    "Linux",
    "信息安全",
    "AI / 大模型",
    "Claude Code",
    "ANSYS FLUENT",
    "SOLIDWORKS",
    "MATLAB",
  ],
  projects: [
    {
      name: "信息安全运营智能体",
      description:
        "在商飞内网构建 Openclaw 类 7×24 全自动安全运营平台，以多智能体自动化运营取代人工轮班值守，覆盖威胁检测、工单响应、跨系统联动全流程，对齐等保 2.0 对安全运营能力的要求，大幅降低人力成本与响应延迟。",
      link: "",
      skills: ["Python", "AI / 大模型", "信息安全"],
    },
    {
      name: "商飞大模型安全围栏",
      description:
        "主导中国商用飞机有限公司大模型安全围栏的研究与开发，为企业内部大模型部署提供企业级安全保障。",
      link: "",
      skills: ["AI / 大模型", "信息安全", "Python"],
    },
    {
      name: "折纸机械臂（SWOMPS）",
      description:
        "在密歇根大学 Evgueni Filipov 教授指导下，独立设计基于 PUMA 560 的折纸机械臂，编写正/反向运动学、轨迹规划算法，并设计了一种通过热载荷控制机械臂的算法。",
      link: "https://github.com/ouyangzhCN",
      skills: ["MATLAB", "C++", "机器人学"],
    },
    {
      name: "试飞专网安全加固与等保测评",
      description:
        "担任项目经理，负责中国商飞试飞专网安全加固与网信安全等保测评。重新设计网络架构，部署并运维网管、准入、防病毒、IPS 等 11 套安全系统，成功通过等保二级评定。",
      link: "",
      skills: ["信息安全", "网络安全", "等保 2.0"],
    },
    {
      name: "连续吸引子神经网络动力学研究",
      description:
        "在西安交通大学冯沛华教授指导下研究 CANN 动力学特性，使用 MATLAB 引入尖峰频率自适应实现动态目标预期跟踪，并研究奇异态存在条件；以第一作者发表 SCI 一区英文期刊论文。",
      link: "https://doi.org/10.1016/j.chaos.2023.113222",
      skills: ["MATLAB", "神经动力学", "非线性动力学"],
    },
    {
      name: "HQ 管气动噪声与 TRT 降噪研究",
      description:
        "使用 LMS Virtual.Lab 与 FLUENT 研究 HQ 管对中低频噪声的降噪效果及管内气流规律，提出面向 TRT 管道降噪的 HQ 管消声装置，降噪性能达到 50dB 以上。",
      link: "",
      skills: ["FLUENT", "流体力学", "气动噪声"],
    },
    {
      name: "金纳米颗粒定向激波缺陷引入装置",
      description:
        "在圣母大学 Svetlana Neretina 教授纳米材料实验室开展研究，基于 FLUENT 仿真空泡管内汽液多相流过程，设计并搭建孔板式水力空化系统，用于向金纳米颗粒中引入晶体缺陷。",
      link: "https://patents.google.com/patent/CN110841574B/zh",
      skills: ["FLUENT", "纳米材料", "多相流"],
    },
  ],
  experience: [
    {
      company: "中国商用飞机有限公司 — 信息化中心",
      title: "信息安全师",
      dateRange: "2023年8月 - 至今",
      bullets: [
        "主导大模型安全围栏项目，构建 7×24 多智能体安全运营平台，消除人工轮班值守，覆盖威胁检测与事件响应全流程",
        "负责试飞专网安全加固项目，重新设计网络架构，部署并运维准入、IPS、防病毒、网管等 11 套安全系统，成功通过等保二级评定",
        "参加 2023–2025 年国家网络安全专项行动，编制并发布商飞《网络与数据安全技术标准》",
        "参加 2023 年公安部网络安全竞赛，贡献团队 50% 积分",
      ],
    },
    {
      company: "福建雪人股份有限公司",
      title: "技术员",
      dateRange: "2020年12月 - 2021年6月",
      bullets: [
        "重新设计压缩机测试平台软件及压缩机选型软件",
        "负责压缩机组的工况设计与热力学计算",
      ],
    },
  ],
  education: [
    {
      school: "美国密歇根大学安娜堡分校",
      degree: "机械工程 & 应用经济学 双学位硕士",
      dateRange: "2021年8月 - 2024年8月",
      achievements: [
        "满绩点：机械工程 4.0/4.0 · 应用经济学 4.0/4.0",
        "全美 Top 4 机械工程专业 · Top 12 经济学专业",
        "核心课程：自动驾驶、机器学习、非线性动力学、宏/微观经济学",
        "Wang Kuo Tong 奖学金（45,000 美元）",
      ],
    },
    {
      school: "西安交通大学 — 能源与动力工程",
      degree: "工学学士",
      dateRange: "2016年8月 - 2020年6月",
      achievements: [
        "GPA 88.96/100 · 专业前 5%–7% · 全国排名第一专业",
        "以第一作者发表 SCI 一区英文论文：神经元-星形胶质细胞网络中时空斑图的转捩（Chaos, 2023）",
        "数学建模竞赛陕西赛区一等奖（2017）",
      ],
    },
    {
      school: "美国圣母大学 — iSURE 项目",
      degree: "暑期交换生 & 实习研究员",
      dateRange: "2019年6月 - 2019年8月",
      achievements: [
        "在 Svetlana Neretina 教授（纳米材料实验室）指导下开展科研",
        "发表专利 CN110841574B：一种用于向纳米材料引入晶体缺陷的水力空化装置",
      ],
    },
  ],
  publications: [
    {
      title: "Transition of Spatiotemporal Patterns in Neuron-astrocyte Networks",
      venue: "Chaos, Solitons & Fractals",
      year: "2023",
      link: "https://doi.org/10.1016/j.chaos.2023.113222",
      note: "英文 SCI 一区一作；欧阳志成，冯沛华",
    },
    {
      title: "一种用于向纳米材料中引入晶体缺陷的水力空化装置及其操作方法",
      venue: "中国发明专利 CN110841574B",
      link: "https://patents.google.com/patent/CN110841574B/zh",
      note: "张家忠，欧阳志成，张润辉",
    },
  ],
};
