import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Heart, Star, Target, Zap, Users, TrendingUp, Shield, Globe, ArrowRight, Play, ChevronRight, Sparkles, Award, BarChart3, Clock, CheckCircle, ExternalLink } from 'lucide-react';
import { Product } from '../types';
import { Button } from './ui/Button';
import { Header } from './Header';
import { Footer } from './Footer';

interface ProductPageProps {
  product: Product;
}

export const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'pricing'>('overview');

  // 根据产品类型定义问题和解决方案
  const getProductDetails = (slug: string) => {
    const details = {
      reach: {
        problems: [
          "用户获取后很快流失，无法有效激活",
          "重要消息无法及时触达全球用户",
          "缺乏与用户的直接沟通渠道",
          "用户参与度低，品牌粘性不足"
        ],
        solutions: [
          "PWA应用提供原生级用户体验",
          "全球推送系统确保消息必达",
          "离线功能让用户随时可访问",
          "智能通知提升用户活跃度"
        ],
        values: [
          { icon: Target, title: "用户激活率提升127%", desc: "从被动访问到主动参与", color: "text-blue-600", bgColor: "bg-blue-50/30" },
          { icon: Globe, title: "全球触达无障碍", desc: "覆盖68个国家和地区", color: "text-green-600", bgColor: "bg-green-50/30" },
          { icon: Zap, title: "5分钟快速部署", desc: "技术门槛几乎为零", color: "text-orange-600", bgColor: "bg-orange-50/30" },
          { icon: Users, title: "89%用户留存率", desc: "建立长期用户关系", color: "text-purple-600", bgColor: "bg-purple-50/30" }
        ],
        coreFeatures: [
          {
            category: "用户触达",
            icon: Target,
            features: [
              "一键推送全球通知",
              "智能推送时机优化",
              "多语言推送支持",
              "离线消息缓存"
            ]
          },
          {
            category: "用户体验",
            icon: Sparkles,
            features: [
              "原生应用级体验",
              "快速加载优化",
              "离线功能支持",
              "跨设备同步"
            ]
          },
          {
            category: "数据分析",
            icon: BarChart3,
            features: [
              "实时用户行为追踪",
              "推送效果分析",
              "用户参与度监控",
              "转化漏斗分析"
            ]
          }
        ],
        useCases: [
          {
            title: "新品发布",
            description: "新品上线时，一键推送给全球用户，确保第一时间获得关注",
            result: "首日访问量提升340%"
          },
          {
            title: "限时促销",
            description: "促销活动开始前，智能推送给最有可能购买的用户群体",
            result: "转化率提升156%"
          },
          {
            title: "用户召回",
            description: "针对沉睡用户，发送个性化召回消息，重新激活用户",
            result: "召回率达到43%"
          }
        ]
      },
      target: {
        problems: [
          "广告投放效果差，获客成本居高不下",
          "无法精准找到目标用户群体",
          "广告预算浪费严重，ROI低",
          "缺乏数据支撑的投放策略"
        ],
        solutions: [
          "AI智能分析用户画像和行为",
          "多平台统一投放管理",
          "实时优化广告效果",
          "数据驱动的投放决策"
        ],
        values: [
          { icon: TrendingUp, title: "投资回报率1:8.7", desc: "每投入1元获得8.7元回报", color: "text-green-600", bgColor: "bg-green-50/30" },
          { icon: Target, title: "获客成本降低64%", desc: "精准投放减少无效支出", color: "text-blue-600", bgColor: "bg-blue-50/30" },
          { icon: Zap, title: "95%预算利用率", desc: "每一分钱都花在刀刃上", color: "text-orange-600", bgColor: "bg-orange-50/30" },
          { icon: Users, title: "智能受众分析", desc: "AI找到最容易转化的用户", color: "text-purple-600", bgColor: "bg-purple-50/30" }
        ],
        coreFeatures: [
          {
            category: "智能投放",
            icon: Target,
            features: [
              "AI智能受众分析",
              "多平台统一管理",
              "自动出价优化",
              "创意素材生成"
            ]
          },
          {
            category: "效果优化",
            icon: TrendingUp,
            features: [
              "实时效果监控",
              "智能预算分配",
              "A/B测试自动化",
              "转化路径优化"
            ]
          },
          {
            category: "数据洞察",
            icon: BarChart3,
            features: [
              "竞品策略分析",
              "市场趋势预测",
              "用户行为洞察",
              "ROI深度分析"
            ]
          }
        ],
        useCases: [
          {
            title: "精准获客",
            description: "AI分析用户行为，找到最有可能购买的潜在客户",
            result: "获客成本降低64%"
          },
          {
            title: "智能出价",
            description: "根据实时数据自动调整出价策略，最大化投放效果",
            result: "ROI提升287%"
          },
          {
            title: "创意优化",
            description: "AI生成和优化广告创意，提升点击率和转化率",
            result: "点击率提升145%"
          }
        ]
      },
      connect: {
        problems: [
          "邮件营销效果差，打开率和点击率低",
          "无法与用户建立情感连接",
          "邮件内容千篇一律，缺乏个性化",
          "邮件送达率不稳定，影响营销效果"
        ],
        solutions: [
          "AI驱动的个性化内容生成",
          "智能发送时机优化",
          "多语言情感化适配",
          "高送达率保障体系"
        ],
        values: [
          { icon: Heart, title: "98.5%邮件送达率", desc: "确保每封邮件都能到达", color: "text-red-600", bgColor: "bg-red-50/30" },
          { icon: TrendingUp, title: "47%平均打开率", desc: "远超行业平均水平", color: "text-green-600", bgColor: "bg-green-50/30" },
          { icon: Users, title: "12.3%点击转化率", desc: "有效驱动用户行动", color: "text-blue-600", bgColor: "bg-blue-50/30" },
          { icon: Globe, title: "多语言情感适配", desc: "在每个市场都能打动人心", color: "text-purple-600", bgColor: "bg-purple-50/30" }
        ],
        coreFeatures: [
          {
            category: "个性化营销",
            icon: Heart,
            features: [
              "智能个性化内容",
              "用户行为触发",
              "动态内容生成",
              "情感化模板库"
            ]
          },
          {
            category: "发送优化",
            icon: Clock,
            features: [
              "最佳发送时机",
              "频率智能控制",
              "A/B测试优化",
              "送达率保障"
            ]
          },
          {
            category: "互动体验",
            icon: Sparkles,
            features: [
              "互动式邮件设计",
              "多媒体内容支持",
              "社交分享集成",
              "实时反馈收集"
            ]
          }
        ],
        useCases: [
          {
            title: "欢迎序列",
            description: "新用户注册后，发送个性化欢迎邮件序列，建立初始信任",
            result: "新用户激活率提升89%"
          },
          {
            title: "购物车召回",
            description: "用户放弃购物车后，智能发送召回邮件，促进转化",
            result: "购物车转化率提升67%"
          },
          {
            title: "生日祝福",
            description: "在用户生日时发送个性化祝福和专属优惠",
            result: "用户忠诚度提升234%"
          }
        ]
      },
      loyalty: {
        problems: [
          "用户复购率低，难以建立长期关系",
          "缺乏有效的会员管理体系",
          "用户生命周期价值未充分挖掘",
          "品牌忠诚度不足，容易流失"
        ],
        solutions: [
          "智能会员成长路径设计",
          "个性化权益体系构建",
          "情感化积分和奖励机制",
          "全生命周期价值管理"
        ],
        values: [
          { icon: TrendingUp, title: "用户价值提升245%", desc: "从一次性购买到终身价值", color: "text-green-600", bgColor: "bg-green-50/30" },
          { icon: Heart, title: "73%会员复购率", desc: "建立深度情感连接", color: "text-red-600", bgColor: "bg-red-50/30" },
          { icon: Users, title: "4.2推荐指数", desc: "用户主动推荐品牌", color: "text-blue-600", bgColor: "bg-blue-50/30" },
          { icon: Shield, title: "智能防流失", desc: "提前预警用户流失风险", color: "text-purple-600", bgColor: "bg-purple-50/30" }
        ],
        coreFeatures: [
          {
            category: "会员体系",
            icon: Award,
            features: [
              "智能会员分层",
              "成长路径设计",
              "个性化权益",
              "专属体验定制"
            ]
          },
          {
            category: "积分奖励",
            icon: Star,
            features: [
              "情感化积分设计",
              "多样化奖励机制",
              "任务挑战系统",
              "社交互动奖励"
            ]
          },
          {
            category: "关系管理",
            icon: Users,
            features: [
              "生命周期管理",
              "流失预警系统",
              "个性化沟通",
              "社群运营支持"
            ]
          }
        ],
        useCases: [
          {
            title: "会员升级",
            description: "根据用户行为智能推荐会员升级，提供更多专属权益",
            result: "会员升级率提升156%"
          },
          {
            title: "积分商城",
            description: "建立积分兑换体系，增加用户粘性和参与度",
            result: "用户活跃度提升89%"
          },
          {
            title: "专属活动",
            description: "为高价值会员举办专属活动，增强归属感",
            result: "会员满意度提升234%"
          }
        ]
      },
      ai: {
        problems: [
          "营销策略制定耗时费力，缺乏专业指导",
          "无法24小时监控和优化营销效果",
          "营销决策缺乏数据支撑，凭经验行事",
          "团队营销能力有限，需要专业支持"
        ],
        solutions: [
          "AI智能策略推荐和优化",
          "24/7自动化营销监控",
          "数据驱动的决策支持",
          "专业营销知识赋能"
        ],
        values: [
          { icon: Zap, title: "节省80%工作时间", desc: "AI自动化处理重复性工作", color: "text-orange-600", bgColor: "bg-orange-50/30" },
          { icon: TrendingUp, title: "策略优化效率3.2倍", desc: "AI持续优化营销策略", color: "text-green-600", bgColor: "bg-green-50/30" },
          { icon: Target, title: "92%建议采纳率", desc: "AI建议准确度极高", color: "text-blue-600", bgColor: "bg-blue-50/30" },
          { icon: Users, title: "24/7智能助手", desc: "永不休息的营销专家", color: "text-purple-600", bgColor: "bg-purple-50/30" }
        ],
        coreFeatures: [
          {
            category: "智能策略",
            icon: Target,
            features: [
              "智能策略推荐",
              "市场趋势分析",
              "竞品策略洞察",
              "个性化优化建议"
            ]
          },
          {
            category: "自动化执行",
            icon: Zap,
            features: [
              "自动化内容创作",
              "智能投放优化",
              "实时效果监控",
              "异常情况预警"
            ]
          },
          {
            category: "数据洞察",
            icon: BarChart3,
            features: [
              "深度数据分析",
              "预测性建模",
              "用户行为预测",
              "业务增长建议"
            ]
          }
        ],
        useCases: [
          {
            title: "策略优化",
            description: "AI分析历史数据，自动优化营销策略和投放参数",
            result: "营销效率提升320%"
          },
          {
            title: "内容创作",
            description: "AI自动生成营销文案、邮件内容和广告创意",
            result: "内容产出效率提升500%"
          },
          {
            title: "趋势预测",
            description: "基于大数据分析，预测市场趋势和用户需求变化",
            result: "预测准确率达到87%"
          }
        ]
      }
    };
    
    return details[slug as keyof typeof details] || details.reach;
  };

  const productDetails = getProductDetails(product.slug);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* 1. 增强的Hero区域 */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-white to-gray-50/20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-50/30 to-purple-50/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-50/20 to-pink-50/15 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* 面包屑导航 */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-gray-700 transition-colors">首页</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">产品详情</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左侧内容 */}
            <div>
              {/* 产品标签 */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="px-4 py-2 bg-white border border-gray-100 rounded-full text-sm text-gray-600 font-medium">
                  {product.name}
                </div>
                {product.isNew && (
                  <div className="px-3 py-1 bg-gradient-to-r from-green-400/80 to-emerald-500/80 text-white text-xs rounded-full font-medium animate-pulse">
                    NEW
                  </div>
                )}
              </div>

              {/* 主标题 */}
              <h1 className="text-6xl md:text-6xl font-medium text-gray-900 leading-tight mb-6">
                <span className="bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  {product.title}
                </span>
              </h1>
              
              {/* 描述 */}
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                {product.fullDescription}
              </p>

              {/* 核心特性 */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {product.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-50">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* 行动按钮 */}
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-600/20 to-black/20 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <Link to="/pricing">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="relative bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg"
                      showArrow
                    >
                      开始免费试用
                    </Button>
                  </Link>
                </div>
                
                <button className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group">
                  <div className="w-12 h-12 border border-gray-100 rounded-full flex items-center justify-center mr-4 group-hover:border-gray-300 transition-colors">
                    <Play className="w-5 h-5 ml-1" />
                  </div>
                  <span>观看产品演示</span>
                </button>
              </div>
            </div>

            {/* 右侧数据展示 */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-50">
                <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-gray-600" />
                  核心数据表现
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {productDetails.values.map((value, index) => (
                    <div key={index} className={`${value.bgColor} rounded-2xl p-6 border border-gray-50`}>
                      <div className={`w-10 h-10 ${value.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                        <value.icon className={`w-5 h-5 ${value.color}`} />
                      </div>
                      <div className="text-2xl font-light text-gray-900 mb-2">{value.title}</div>
                      <div className="text-sm text-gray-600 font-light">{value.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 标签页导航 */}
      <section className="py-8 px-6 bg-gray-50/50 border-y border-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-1 bg-white rounded-full p-1 border border-gray-100 max-w-md mx-auto">
            {[
              { key: 'overview', label: '产品概览', icon: Target },
              { key: 'features', label: '功能特性', icon: Sparkles },
              { key: 'pricing', label: '价格方案', icon: Star }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 标签页内容 */}
      {activeTab === 'overview' && (
        <>
          {/* 核心痛点 */}
          <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-100 rounded-full text-sm text-red-600 mb-8">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                  常见挑战
                </div>
                <h2 className="text-5xl md:text-5xl font-medium text-gray-900 mb-8 leading-tight">
                  深度理解您的挑战
                </h2>
                <p className="text-xl text-gray-400 font-light">
                  每一个痛点，我们都感同身受
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {productDetails.problems.map((problem, index) => (
                  <div key={index} className="group">
                    <div className="bg-white p-8 rounded-2xl border border-gray-50 hover:border-red-100 hover:shadow-sm transition-all duration-300 group-hover:scale-102">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-red-100 transition-colors">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-black transition-colors">
                            挑战 {index + 1}
                          </h3>
                          <p className="text-gray-700 font-light leading-relaxed">{problem}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 解决方案 */}
          <section className="py-24 px-6 bg-gray-50/30">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-100 rounded-full text-sm text-green-600 mb-8">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  完美解决方案
                </div>
                <h2 className="text-5xl md:text-5xl font-medium text-gray-900 mb-8 leading-tight">
                  让每个挑战都有完美的答案
                </h2>
                <p className="text-xl text-gray-400 font-light">
                  专业的解决方案，让成功变得简单
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
                {productDetails.solutions.map((solution, index) => (
                  <div key={index} className="group">
                    <div className="bg-white p-8 rounded-2xl border border-gray-50 hover:border-green-100 hover:shadow-sm transition-all duration-300 group-hover:scale-102">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-green-100 transition-colors">
                          <Check className="w-4 h-4 text-green-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-black transition-colors">
                            解决方案 {index + 1}
                          </h3>
                          <p className="text-gray-700 font-light leading-relaxed">{solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 设计理念 */}
              <div className="text-center border-t border-gray-100 pt-20">
                <div className="bg-white rounded-3xl p-12 border border-gray-50">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-6">设计理念</h3>
                  <p className="text-xl font-extralight text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    {product.story}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 使用场景 - 简化设计 */}
          <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-flex items-center px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm text-gray-600 mb-8">
                  <Target className="w-4 h-4 mr-2" />
                  实际应用场景
                </div>
                <h2 className="text-5xl md:text-5xl font-medium text-gray-900 mb-8 leading-tight">
                  真实场景，真实效果
                </h2>
                <p className="text-xl text-gray-400 font-light">
                  看看其他品牌是如何成功的
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {productDetails.useCases.map((useCase, index) => (
                  <div key={index} className="group">
                    <div className="bg-white p-8 rounded-2xl border border-gray-50 hover:border-gray-100 transition-all duration-300">
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors">
                          <Target className="w-6 h-6 text-gray-600" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-black transition-colors">
                          {useCase.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6 font-light">
                          {useCase.description}
                        </p>
                      </div>
                      
                      <div className="border-t border-gray-50 pt-6">
                        <div className="text-sm text-gray-500 mb-2">实际效果</div>
                        <div className="text-lg font-medium text-gray-900">{useCase.result}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'features' && (
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-5xl font-medium text-gray-900 mb-8 leading-tight">
                强大的产品能力
              </h2>
              <p className="text-xl text-gray-400 font-light">
                为您的成功而生的每一个功能
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {productDetails.coreFeatures.map((category, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-8 rounded-2xl border border-gray-50 hover:border-gray-100 hover:shadow-sm transition-all duration-300 group-hover:scale-105">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-100 transition-colors">
                      <category.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-6 group-hover:text-black transition-colors">
                      {category.category}
                    </h3>
                    
                    <div className="space-y-4">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center group/item">
                          <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:bg-gray-200 transition-colors">
                            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700 font-light group-hover/item:text-gray-900 transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 完整功能列表 */}
            <div className="bg-gray-50/50 rounded-3xl p-12 border border-gray-50">
              <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">完整功能清单</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-gray-50 hover:border-gray-100 transition-colors">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'pricing' && (
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-5xl font-medium text-gray-900 mb-8 leading-tight">
              选择适合的方案
            </h2>
            <p className="text-xl text-gray-400 font-light mb-12">
              灵活的价格方案，满足不同规模的需求
            </p>

            <div className="bg-white rounded-3xl p-12 border border-gray-50">
              <div className="text-center mb-8">
                <div className="text-5xl font-extralight text-gray-900 mb-4">¥199</div>
                <div className="text-gray-500 mb-6">起/月</div>
                <p className="text-gray-600 font-light">
                  30天免费试用，无需信用卡
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <Link to="/pricing">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="bg-black text-white hover:bg-gray-800 px-8 py-4"
                    showArrow
                  >
                    查看完整价格方案
                  </Button>
                </Link>
                <Link to="/contact" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  联系销售咨询
                </Link>
              </div>

              <div className="text-sm text-gray-500">
                包含所有核心功能 • 专属客户成功经理 • 24/7技术支持
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 行动召唤 */}
      <section className="py-16 px-6 bg-gray-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 border border-gray-50 relative overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.01),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.005),transparent_50%)]"></div>
            
            <div className="relative">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600 mb-8 border border-gray-50">
                  <Heart className="w-4 h-4 mr-2 text-red-400" />
                  开始您的 {product.name} 之旅
                </div>
                
                <h2 className="text-5xl md:text-5xl font-medium mb-8 leading-tight text-gray-900">
                  让成功
                  <br />
                  <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    触手可及
                  </span>
                </h2>
                
                <p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                  30天免费试用，专属成功经理全程陪伴
                  <br />
                  让您的品牌在全球市场闪闪发光
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-all duration-300 border border-gray-50">
                    <Zap className="w-7 h-7 text-gray-700" />
                  </div>
                  <div className="text-gray-900 font-medium mb-2">30天免费试用</div>
                  <div className="text-gray-500 text-sm font-light">无需信用卡，体验全部功能</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-all duration-300 border border-gray-50">
                    <Users className="w-7 h-7 text-gray-700" />
                  </div>
                  <div className="text-gray-900 font-medium mb-2">专属成功经理</div>
                  <div className="text-gray-500 text-sm font-light">1对1指导，确保成功</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-all duration-300 border border-gray-50">
                    <Shield className="w-7 h-7 text-gray-700" />
                  </div>
                  <div className="text-gray-900 font-medium mb-2">随时取消</div>
                  <div className="text-gray-500 text-sm font-light">无隐藏费用，灵活选择</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-600/20 to-black/20 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                    <Link to="/pricing">
                      <Button 
                        variant="primary" 
                        size="lg" 
                        className="relative bg-black text-white hover:bg-gray-800 font-medium px-12 py-4 text-lg"
                        showArrow
                      >
                        开始免费试用
                      </Button>
                    </Link>
                  </div>
                  <button className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group text-lg font-light">
                    <div className="w-12 h-12 border border-gray-100 rounded-full flex items-center justify-center mr-4 group-hover:border-gray-300 transition-colors">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    观看产品演示
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};