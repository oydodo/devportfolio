import type { SiteConfig } from "./types";

export const en: SiteConfig = {
  name: "Zhicheng Ouyang",
  title: "Information Security Engineer",
  description: "Portfolio of Zhicheng Ouyang — AI security engineer at COMAC",
  accentColor: "#1d4ed8",
  social: {
    email: "ouyangzh@umich.edu",
    github: "https://github.com/ouyangzh-CN",
    cvWeb: "https://cv.ouyang.zhiche.ng",
  },
  aboutMe:
    "Information security engineer at COMAC's IT Center, focused on AI/LLM security research and autonomous security operations. Built Flocks — a 7×24 multi-agent SecOps platform replacing manual shift monitoring, covering threat detection, ticket response, and cross-system coordination. Interdisciplinary background: dual M.S. from University of Michigan (Mechanical Engineering & Applied Economics, 4.0/4.0 GPA). First-author SCI Q1 publication. TOEFL 105 · GRE 324.",
  skills: [
    "Python",
    "C++",
    "Linux",
    "Information Security",
    "AI / LLM",
    "Claude Code",
    "ANSYS FLUENT",
    "SOLIDWORKS",
    "MATLAB",
  ],
  projects: [
    {
      name: "Flocks — Autonomous Security Operations Agent",
      description:
        "Built a 7×24 multi-agent SecOps platform (Openclaw-style) on COMAC's intranet, replacing manual shift monitoring. Covers threat detection, ticket response, and cross-system coordination. Aligned with China's MLPS 2.0 security requirements.",
      link: "",
      skills: ["Python", "AI / LLM", "Information Security"],
    },
    {
      name: "LLM Security Fence @ COMAC",
      description:
        "Led research and development of safety guardrails for large language models at Commercial Aircraft Corporation of China, ensuring enterprise-grade security for internal LLM deployments.",
      link: "",
      skills: ["AI / LLM", "Information Security", "Python"],
    },
    {
      name: "Origami Robotic Arm (SWOMPS)",
      description:
        "Independently designed a PUMA 560-based origami robotic arm at University of Michigan under Prof. Evgueni Filipov. Implemented forward/inverse kinematics, trajectory planning, and a thermal-load-based control algorithm.",
      link: "https://github.com/ouyangzh-CN",
      skills: ["MATLAB", "C++", "Robotics"],
    },
  ],
  experience: [
    {
      company: "Commercial Aircraft Corporation of China (COMAC) — IT Center",
      title: "Information Security Engineer",
      dateRange: "Aug 2023 - Present",
      bullets: [
        "Led LLM security fence project and built Flocks, an autonomous 7×24 multi-agent SecOps platform, eliminating manual shift monitoring across threat detection and incident response",
        "Managed flight-test network security hardening project; redesigned network architecture, deployed and maintained 11 security systems (NAC, IPS, AV, NMS, etc.); achieved MLPS Level 2 certification",
        "Participated in 2023–2025 national cybersecurity operations; authored COMAC's Network & Data Security Technical Standards",
        "Contributed 50% of team score at 2023 MPS National Cybersecurity Competition",
      ],
    },
    {
      company: "Fujian Snowman Co., Ltd.",
      title: "Technical Engineer",
      dateRange: "Dec 2020 - Jun 2021",
      bullets: [
        "Redesigned compressor test platform software and compressor selection software from scratch",
        "Responsible for compressor unit operating condition design and thermodynamic calculations",
      ],
    },
  ],
  education: [
    {
      school: "University of Michigan, Ann Arbor",
      degree: "Dual M.S. — Mechanical Engineering & Applied Economics",
      dateRange: "Aug 2021 - Aug 2024",
      achievements: [
        "Perfect GPA: ME 4.0/4.0 · Applied Economics 4.0/4.0",
        "Top 4 ME program in the U.S. · Top 12 Economics program",
        "Coursework: Autonomous Vehicles, Machine Learning, Nonlinear Dynamics, Macroeconomics",
        "Wang Kuo Tong Scholarship ($45,000 USD)",
      ],
    },
    {
      school: "Xi'an Jiaotong University — Energy & Power Engineering",
      degree: "Bachelor of Engineering",
      dateRange: "Aug 2016 - Jun 2020",
      achievements: [
        "GPA 88.96/100 · Top 5–7% in major · #1 ranked program in China",
        "First-author SCI Q1 paper: Transition of Spatiotemporal Patterns in Neuron-Astrocyte Networks (Chaos, 2023)",
        "First Prize in Mathematical Modeling, Shaanxi Province (2017)",
      ],
    },
    {
      school: "University of Notre Dame — iSURE Program",
      degree: "Summer Research Intern",
      dateRange: "Jun 2019 - Aug 2019",
      achievements: [
        "Research under Prof. Svetlana Neretina (Nanomaterials Lab)",
        "Published patent CN110841574B: hydraulic cavitation device for introducing crystal defects in gold nanoparticles",
      ],
    },
  ],
};
