import { ResumeDefinition } from '@typings/index'
import { LangLevel } from '@typings/index'

const resume_definition: ResumeDefinition = {
  _education: '教育背景',
  education: [
    {
      institution: 'KU LEUVEN (荷语鲁汶大学)',
      period: '08/2024 - 06/2025',
      degree:
        'Advanced Master of Artificial Intelligence (人工智能，高级硕士)',
      comment: 'U.S.News: 世界第50; THE: 世界第45',
      themeColor: 'pink',
    },
    {
      institution:
        'Lappeenranta-Lahti University of Technology (拉彭兰塔-拉赫蒂理工大学)',
      period: '08/2021 - 06/2024',
      degree:
        'B.Sc. Software and Systems Engineering (软件与系统工程，本科)',
      comment: '',
    },
    {
      institution: '河北工业大学',
      period: '09/2020 - 06/2024',
      degree: '计算机科学与技术，本科',
      comment: '211工程',
      themeColor: 'lime',
    },
  ],
  education_keywords: [
    {
      text: '双学位',
      color: 'green',
    },
    {
      text: 'TOP 50',
      color: 'ruby',
    },
    {
      text: '高级硕士',
      color: 'amber',
    },
  ],
  _work: '实习经历',
  work: [
    {
      company: '百度',
      department:
        '中台技术群组-工程效能部-前端研发组 (Baidu Comate 文心快码)',
      role: '实习',
      period: '05/2024 - 至今',
      description: [
        '为Comate+开放平台 (三方插件) 迭代新功能。',
        '修复Bug、优化项目 (如系统解耦、优化打包流程)。',
        '使用Prompt工程和RAG技术优化智能问答系统。',
        '实现基于关键词的意图识别功能，根据用户输入分流到不同插件。',
        '测试Rust、Go、Moonbit编译到WebAssembly的性能，验证可行性',
      ],
      themeColor: 'blue',
    },
    {
      company: '中国雄安集团数字城市科技有限公司',
      department: '综合数据平台二期项目',
      role: '实习软件项目经理',
      period: '08/2023 - 10/2023',
      description: [
        '使用Nodejs，React开发包括数据库实例管理、运维服务等关键组件。',
        '为系统设计实现正则表达式，约束用户输入和规范数据库。',
      ],
    },
    {
      company: '中国科学院高能物理研究所',
      department: '计算中心',
      role: '实习生',
      period: '06/2023 - 08/2023',
      description: [
        '为高吞吐量计算集群系统 (HTCondor) 开发实时监控和日志子系统',
        '调研含MySQL, Redis, Kafka, InfluxDB在内多种数据库、消息队列在该场景下的性能表现。',
      ],
    },
  ],
  work_keywords: [
    {
      text: '大厂实习',
      color: 'cyan',
    },
    {
      text: '大项目经验',
      color: 'violet',
    },
  ],
  _tech_stack: '技术栈',
  tech_stack: [
    {
      title: '最熟练、最常用的语言',
      description: 'Typescript，Go',
      comment: '工作、开源项目和消遣都十分常用，熟练度最高',
      themeColor: 'blue',
    },
    {
      title: '也能熟练使用的语言',
      description: 'C，Java，Python，Lua，SQL',
      comment: '可以熟练使用，有实际应用经验',
    },
    {
      title: '工作中最常用的工具链',
      description:
        'NestJS、React、Webpack、等node相关一系列工具',
      comment: '有大项目多个方向开发经验',
    },
    {
      title: '也能熟练使用的技术',
      description: 'Electron, AssemblyScript, Koa, Django',
      comment: '熟练掌握，在写开源项目和消遣时频繁使用',
    },
    {
      title: '前端开发工程化',
      description:
        '精通在 TypeScript 环境下使用 pnpm, yarn，用 webpack, vite, rollup 在 monorepo 项目处理开发和生产环境下的编译和打包流程。对代码质量有很高追求，常用 Prettier, Dprint, Eslint, Husky等',
    },
    {
      title: '数据库和消息队列',
      description:
        'MySQL, PostgreSQL, MongoDB，Redis，Kafka',
      comment: '开源项目常用',
    },
  ],
  _language: '语言能力',
  language: [
    {
      lang: '汉语 普通话',
      level: LangLevel.NATIVE,
      comment: '母语',
    },
    {
      lang: '英语',
      level: LangLevel.ADVANCED,
      comment: '雅思7.5分',
    },
    {
      lang: '芬兰语',
      level: LangLevel.BASIC,
      comment: '大学课程',
    },
    {
      lang: '荷兰语',
      level: LangLevel.BASIC,
      comment: '自学',
    },
  ],
}

export default resume_definition
