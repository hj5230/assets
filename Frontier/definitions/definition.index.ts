import { Definition } from '@typings/index'

import contact_definition from './definition.contact'

const definition: Definition = {
  avatar_uri:
    'https://avatars.githubusercontent.com/u/98270829?s…00&u=0a85d88786ce72fb7502b4010bbaa0d9bbdb0556&v=4',
  name: '赵尚琦',
  intro: '大前端工程 | 全栈跨平台开发 | AIGC工程',
  _about_me: '简介',
  about_me:
    '自学能力强，热爱软件开发和开源社区。能熟练全栈、跨平台开发，有Linux服务器部署和运维能力。技术覆盖面广，有开发、部署大项目落地经验。熟悉企业大项目 CI & CD 流程，团队协作能力强。',
  _experience: '履历',
  badges: [
    {
      text: 'Typescript',
      color: 'blue',
    },
    {
      text: 'Go',
      color: 'cyan',
    },
    {
      text: 'WebAssembly',
      color: 'violet',
    },
    {
      text: 'React',
      color: 'sky',
    },
    {
      text: 'Electron',
      color: 'gold',
    },
    {
      text: 'Linux',
      color: 'orange',
    },
  ],
  experience: [
    {
      title:
        '中台技术群组-工程效能部-前端研发组实习生 - 百度',
      period: '05/2024 - 至今',
      description: [
        '为Comate+开放平台 (三方插件) 迭代新功能。',
        '修复Bug、优化项目 (如系统解耦、优化打包流程)。',
        '使用Prompt工程和RAG技术优化智能问答系统。',
        '实现基于关键词的意图识别功能，根据用户输入分流到不同插件。',
        '测试Rust、Go、Moonbit编译到WebAssembly的性能，验证可行性',
      ],
    },
    {
      title: '中国雄安集团数字城市科技有限公司。',
      period: '08/2023 - 10/2023',
      description: [
        '使用Nodejs，React开发包括数据库实例管理、运维服务等关键组件。',
        '为系统设计实现正则表达式，约束用户输入和规范数据库。',
      ],
    },
    {
      title: '中国科学院高能物理研究所计算中心',
      period: '06/2023 - 08/2023',
      description: [
        '为高吞吐量计算集群系统 (HTCondor) 开发实时监控和日志子系统',
        '调研含MySQL, Redis, Kafka, InfluxDB在内多种数据库、消息队列在该场景下的性能表现。',
      ],
    },
  ],
  _project: '项目',
  project: [
    {
      title: 'AeroBranch',
      description: [
        '提供文件上传下载和云端同步功能，满足多设备文件管理需求。',
        '采用Electron框架构建，可以跨平台部署，支持Windows、Mac和Linux系统。',
        '界面设计基于Ant Design组件库，提供现代化且用户友好的操作体验，响应式设计。',
        '应用TypeScript和WebAssembly库，类型安全、高性能，严格的代码质量管理，使用Prettier、ESLint和Husky',
      ],
      link: 'https://github.com/hj5230/AeroBranch',
      // image_uri:
      //   'https://cdn.jsdelivr.net/gh/hj5230/assets/matcap-porcelain-white.jpg',
    },
    {
      title: 'DataDepot',
      description: [
        '一个文件基础的轻量级数据库系统，专为应用临时数据持久化设计，具有加密功能。',
        '支持CRUD操作、数据导出导入、文件写入读取，以及对象处理等功能。',
        '毫秒级性能优化，超轻量级 - 构建产出只有7.8KB（tgz）',
        '使用TypeScript开发，提供类型安全，支持CommonJS和ES模块导入。',
      ],
      link: 'https://github.com/hj5230/DataDepot',
      // image_uri:
      //   'https://cdn.jsdelivr.net/gh/hj5230/assets/matcap-porcelain-white.jpg',
    },
    {
      title: '"Work Remotely with Huawei"，Junction 2022',
      description: [
        '在5人开发团队中构建数字原型、使用React Native以及华为的SDK实现移动应用，最终评得第三名。',
      ],
      link: '',
      image_uri: '',
    },
  ],
  _contact: '联系',
  _phone: '电话',
  phone: contact_definition.phone,
  _email: '邮箱',
  email: contact_definition.email,
  _wechat: '微信',
  wechat: contact_definition.wechat,
  _github: '我的Github主页：',
  github: contact_definition.github,
  _langlever: {
    basic: '基础',
    intermediate: '熟练',
    advanced: '专业',
    native: '母语',
  },
}

export default definition