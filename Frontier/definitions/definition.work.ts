import { WorkDefinition } from '@typings/index'

const work_definition: WorkDefinition = {
  work: [
    {
      company: '百度',
      department:
        '中台技术群组-工程效能部-前端研发组 (Baidu Comate 文心快码)',
      role: '实习',
      period: '05/2024 - 至今',
      description: [
        '为Comate+开放平台 (三方插件) 迭代新功能，开发新功能和优化用户体验。',
        '修复Bug、优化项目，包括系统解耦和优化打包流程，提高应用稳健性、优化开发体验和维护项目代码质量。',
        '运用Prompt工程和RAG (检索增强生成) 技术优化智能问答系统，提升问答准确性和相关性。',
        '实现基于关键词的意图识别功能，根据用户输入智能分流到不同插件，提高问答的准确性。',
        '进行Rust、Go、Moonbit编译到WebAssembly的性能测试，验证在插件引擎中使用WebAssembly的可行性。',
        // '进行续写优化括号准确性的实验',
      ],
      themeColor: 'blue',
      keywords: [
        {
          text: 'AIGC',
          color: 'bronze',
        },
        {
          text: 'Prompt & RAG',
          color: 'blue',
        },
        {
          text: '开发落地',
          color: 'pink',
        },
        {
          text: '功能迭代',
          color: 'brown',
        },
        {
          text: '性能优化',
          color: 'green',
        },
        {
          text: 'BUG 修复',
          color: 'brown',
        },
      ],
    },
    {
      company: '中国雄安集团数字城市科技有限公司',
      department: '综合数据平台二期项目',
      role: '实习',
      period: '08/2023 - 10/2023',
      description: [
        '使用Nodejs和React技术栈开发数据库实例管理、运维服务等关键组件，实现项目功能迭代。',
        '为系统设计并实现正则表达式，有效约束用户输入和规范数据库操作，提高数据质量和安全性。',
        '参与使用莫奈可视化平台为数据展示平台（大屏）设计GUI。',
      ],
      themeColor: 'crimson',
      keywords: [
        {
          text: 'React开发',
          color: 'blue',
        },
        {
          text: '数据库管理',
          color: 'amber',
        },
        {
          text: 'UI设计',
          color: 'green',
        },
      ],
    },
    {
      company: '中国科学院高能物理研究所',
      department: '计算中心',
      role: '实习',
      period: '06/2023 - 08/2023',
      description: [
        '为高吞吐量计算集群系统 (HTCondor) 开发实时监控和日志子系统，提高系统可观测性。',
        '调研MySQL、Redis、Kafka、InfluxDB等多种数据库和消息队列在高吞吐量场景下的性能表现，为系统优化提供依据。',
      ],
      themeColor: 'lime',
      keywords: [
        {
          text: '日志系统',
          color: 'red',
        },
        {
          text: '数据可视化',
          color: 'red',
        },
        {
          text: '数据库优化',
          color: 'blue',
        },
      ],
    },
  ],
}

export default work_definition