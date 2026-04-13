import type { SiteConfig } from "./types";

export const zh: SiteConfig = {
  name: "Ryan Fitzgerald",
  title: "高级软件工程师",
  description: "Ryan Fitzgerald 的个人作品集网站",
  accentColor: "#1d4ed8",
  social: {
    email: "your-email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/RyanFitzgerald",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "每周一封简报，五分钟阅读。涵盖 AI 新闻与趋势、可直接用于生产的库、强大的 AI 工具以及实际代码示例",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "掌握使用现代 Web 技术和最佳实践构建生产级全栈 Chrome 扩展的技艺",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "帮助快速启动 Chrome 扩展项目的工具包，提供多种经过实战验证的启动模板和示例",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "高级软件工程师",
      dateRange: "2022年1月 - 至今",
      bullets: [
        "主导微服务架构开发，服务超过 100 万用户",
        "通过优化将 API 响应时间缩短 40%",
        "指导 5 名初级开发人员",
      ],
    },
    {
      company: "Startup Inc",
      title: "全栈开发工程师",
      dateRange: "2020年6月 - 2021年12月",
      bullets: [
        "使用 React 和 Node.js 从零构建并发布 MVP 产品",
        "实施 CI/CD 流水线，将部署时间缩短 60%",
        "与产品团队协作定义技术需求",
      ],
    },
    {
      company: "Digital Agency",
      title: "前端开发工程师",
      dateRange: "2018年8月 - 2020年5月",
      bullets: [
        "为 20 多个客户开发响应式 Web 应用",
        "平均将网站性能评分提升 35%",
        "将现代 JavaScript 框架引入遗留代码库",
      ],
    },
  ],
  education: [
    {
      school: "大学名称",
      degree: "计算机科学学士学位",
      dateRange: "2014 - 2018",
      achievements: [
        "以 3.8 GPA 优等成绩毕业",
        "所有学期均入选院长名单",
        "计算机科学社团社长",
      ],
    },
    {
      school: "在线平台",
      degree: "全栈开发证书",
      dateRange: "2019",
      achievements: [
        "完成超过 500 小时的课程学习",
        "构建了 10 多个作品集项目",
        "专注于 React 和 Node.js",
      ],
    },
  ],
};
