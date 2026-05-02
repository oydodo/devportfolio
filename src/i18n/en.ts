import type { SiteConfig } from "./types";

export const en: SiteConfig = {
  name: "Zhicheng Ouyang",
  title: "Information Security Engineer",
  description: "Portfolio of Zhicheng Ouyang — AI security engineer at COMAC",
  accentColor: "#1d4ed8",
  social: {
    email: "ouyangzh@umich.edu",
    github: "https://github.com/ouyangzhCN",
    cvWeb: "https://zhichengouyang.notion.site/en",
  },
  aboutMe:
    "Information security engineer at COMAC's IT Center, focused on AI/LLM security research and autonomous security operations. Built a 7×24 multi-agent SecOps platform replacing manual shift monitoring, covering threat detection, ticket response, and cross-system coordination. Interdisciplinary background: dual M.S. from University of Michigan (Mechanical Engineering & Applied Economics, 4.0/4.0 GPA). First-author SCI Q1 publication. TOEFL 105 · GRE 324.",
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
      name: "Autonomous Security Operations Agent",
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
      link: "https://github.com/ouyangzhCN",
      skills: ["MATLAB", "C++", "Robotics"],
    },
    {
      name: "Flight-Test Network Security Hardening & MLPS Assessment",
      description:
        "Served as project manager for COMAC's flight-test network security hardening and MLPS assessment. Redesigned network architecture, deployed and maintained 11 security systems including NMS, NAC, antivirus, and IPS, and passed MLPS Level 2 assessment.",
      link: "",
      skills: ["Information Security", "Network Security", "MLPS 2.0"],
    },
    {
      name: "Dynamics of Continuous Attractor Neural Networks",
      description:
        "Researched CANN dynamics under Prof. Peihua Feng at Xi'an Jiaotong University. Used MATLAB to introduce spike-frequency adaptation for anticipatory tracking of moving targets and studied conditions for chimera states; published a first-author SCI Q1 paper.",
      link: "https://doi.org/10.1016/j.chaos.2023.113222",
      skills: ["MATLAB", "Neurodynamics", "Nonlinear Dynamics"],
    },
    {
      name: "HQ Tube Aerodynamic Noise Reduction for TRT",
      description:
        "Used LMS Virtual.Lab and FLUENT to study mid- and low-frequency noise reduction and internal airflow in HQ tubes. Proposed an HQ tube muffling device for TRT pipeline noise control, achieving more than 50 dB noise reduction.",
      link: "",
      skills: ["FLUENT", "Fluid Mechanics", "Aeroacoustics"],
    },
    {
      name: "Hydraulic Cavitation Device for Gold Nanoparticle Defects",
      description:
        "Researched at Prof. Svetlana Neretina's Nanomaterials Lab at the University of Notre Dame. Simulated vapor-liquid multiphase flow in cavitation tubes with FLUENT and designed an orifice-plate hydraulic cavitation system to introduce crystal defects into gold nanoparticles.",
      link: "https://patents.google.com/patent/CN110841574B/en",
      skills: ["FLUENT", "Nanomaterials", "Multiphase Flow"],
    },
  ],
  experience: [
    {
      company: "Commercial Aircraft Corporation of China (COMAC) — IT Center",
      title: "Information Security Engineer",
      dateRange: "Aug 2023 - Present",
      bullets: [
        "Led LLM security fence project and built an autonomous 7×24 multi-agent SecOps platform, eliminating manual shift monitoring across threat detection and incident response",
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
  publications: [
    {
      title: "Transition of Spatiotemporal Patterns in Neuron-astrocyte Networks",
      venue: "Chaos, Solitons & Fractals",
      year: "2023",
      link: "https://doi.org/10.1016/j.chaos.2023.113222",
      note: "First-author SCI Q1 paper; Zhicheng Ouyang, Peihua Feng",
    },
    {
      title:
        "Hydraulic Cavitation Device and Operating Method for Introducing Crystal Defects into Nanomaterials",
      venue: "Chinese invention patent CN110841574B",
      link: "https://patents.google.com/patent/CN110841574B/en",
      note: "Jiazhong Zhang, Zhicheng Ouyang, Runhui Zhang",
    },
  ],
};
