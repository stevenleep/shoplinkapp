import { Product } from '../types';

export const products: Product[] = [
  {
    name: "ShopLink.Reach",
    title: "5分钟触达全球用户",
    description: "PWA应用让您具备随时激活用户的能力，无论用户在世界哪个角落都能第一时间收到您的信息并立即行动。",
    slug: "reach",
    fullDescription: "真正的价值不在于技术本身，而在于能力的获得。5分钟内，您就能拥有触达全球用户、激活沉睡用户的超能力。无论用户在地球的哪个角落，都能第一时间收到您的信息。",
    features: [
      "一键推送全球通知",
      "离线也能触达用户", 
      "原生应用级体验",
      "跨平台统一管理",
      "实时用户行为追踪"
    ],
    stats: [
      { value: "5分钟", label: "获得触达能力" },
      { value: "+127%", label: "用户激活率" },
      { value: "89%", label: "用户留存率" }
    ],
    story: "想象一下，当您有新品上线、限时优惠或重要消息时，全球用户都能在第一时间收到通知并立即行动。这就是触达能力的价值。",
    testimonial: {
      quote: "现在我们可以随时唤醒沉睡的用户，每次推送都能带来实实在在的销量增长。",
      author: "李强",
      company: "户外用品 AdventureGear"
    },
    isNew: false
  },
  {
    name: "ShopLink.Target",
    title: "AI找到最容易购买的用户",
    description: "智能广告投放系统让您的每一分广告费都花在最对的人身上，用AI的智慧精准命中目标用户。",
    slug: "target",
    fullDescription: "每一分广告费都承载着创业者的梦想。我们用AI的智慧，帮您找到那些最容易被您的产品打动的人，让每一次投放都有回响，每一分钱都花得值得。",
    features: [
      "AI智能受众分析",
      "多平台统一投放",
      "实时效果优化",
      "创意素材生成",
      "竞品策略洞察"
    ],
    stats: [
      { value: "1:8.7", label: "平均投资回报" },
      { value: "-64%", label: "获客成本降低" },
      { value: "95%", label: "预算利用率" }
    ],
    story: "从盲目投放到精准命中，从烧钱无果到订单爆增，见证每一个品牌找到属于自己的用户群体。",
    testimonial: {
      quote: "以前投广告就像在黑暗中摸索，现在AI帮我们找到了最精准的用户。",
      author: "王美丽",
      company: "母婴用品 BabyLove"
    },
    isNew: false
  },
  {
    name: "ShopLink.Connect",
    title: "个性化沟通建立信任",
    description: "智能邮件营销系统让每封邮件都有温度和回应，在数字化世界里与用户建立真正的情感连接。",
    slug: "connect",
    fullDescription: "在数字化的世界里，真诚的沟通比任何技术都重要。我们帮您与每一位用户建立真正的情感连接，让冰冷的邮件变成温暖的对话。",
    features: [
      "智能个性化内容",
      "多语言情感适配", 
      "最佳发送时机",
      "互动式邮件体验",
      "情感化模板库"
    ],
    stats: [
      { value: "98.5%", label: "邮件送达率" },
      { value: "47%", label: "平均打开率" },
      { value: "12.3%", label: "点击转化率" }
    ],
    story: "从一封简单的欢迎邮件开始，见证品牌与用户之间温暖故事的诞生。每一次点击，都是信任的延续。",
    testimonial: {
      quote: "现在我们的邮件不再是营销信息，而是与用户心灵相通的桥梁。",
      author: "张雨",
      company: "美妆品牌 BloomBeauty"
    },
    isNew: false
  },
  {
    name: "ShopLink.Loyalty",
    title: "一次性用户变终身粉丝",
    description: "智能会员管理系统让每个用户都成为品牌拥护者，把一次性购买变成长久的陪伴和持续的价值。",
    slug: "loyalty",
    fullDescription: "真正的商业成功不在于获得多少新用户，而在于与现有用户建立多深的情感连接。我们帮您把每一次购买变成长久的陪伴。",
    features: [
      "智能会员成长路径",
      "个性化权益体系", 
      "情感化积分设计",
      "专属体验定制",
      "社群运营支持"
    ],
    stats: [
      { value: "+245%", label: "用户生命周期价值" },
      { value: "73%", label: "会员复购率" },
      { value: "4.2", label: "平均推荐指数" }
    ],
    story: "从陌生的访客到忠实的粉丝，从一次性购买到终身陪伴，见证每一段美好关系的诞生与成长。",
    testimonial: {
      quote: "我们的用户现在不只是买产品，更是在支持我们的理念和梦想。",
      author: "陈思",
      company: "有机食品 GreenLife"
    },
    isNew: false
  },
  {
    name: "ShopLink.AI",
    title: "24小时营销专家",
    description: "AI营销助手为您的品牌持续优化每个细节，当您休息时它依然在工作，像最懂您的营销伙伴。",
    slug: "ai",
    fullDescription: "当您休息时，AI助手依然在为您的品牌默默工作。它像最懂您的营销伙伴，24小时不间断地分析、优化、建议，让您的品牌始终保持最佳状态。",
    features: [
      "智能策略推荐",
      "自动化内容创作", 
      "实时效果监控",
      "趋势预测分析",
      "个性化优化建议"
    ],
    stats: [
      { value: "80%", label: "工作时间节省" },
      { value: "3.2x", label: "策略优化效率" },
      { value: "92%", label: "建议采纳率" }
    ],
    story: "当深夜时分您已经休息，AI助手依然在为您的品牌默默工作，这就是科技与人文的完美结合。",
    testimonial: {
      quote: "AI助手就像我的营销合伙人，让我能把更多精力放在真正重要的事情上。",
      author: "刘涛",
      company: "智能硬件 TechSmart"
    },
    isNew: true
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};