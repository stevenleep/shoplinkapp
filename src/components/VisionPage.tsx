import React from 'react';
import { Globe, Heart, Lightbulb, Target, Users, Zap, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './ui/Button';

const visionPoints = [
  {
    icon: Globe,
    title: "全球化的中国品牌",
    description: "我们相信，未来会有更多中国品牌成为全球消费者的首选。每一个优质产品都值得被世界看见，每一份匠心都值得被全球认可。",
    stat: "目标：帮助10,000个中国品牌成功出海"
  },
  {
    icon: Heart,
    title: "有温度的技术服务",
    description: "技术应该有温度，服务应该有情感。我们不只是提供工具，更是陪伴品牌成长的伙伴，用心感受每一个客户的需求和梦想。",
    stat: "承诺：每个客户都有专属成功经理"
  },
  {
    icon: Lightbulb,
    title: "AI驱动的营销未来",
    description: "人工智能将彻底改变营销方式。我们致力于让AI成为每个品牌的智能助手，24小时不间断地优化策略，让营销变得更智能、更高效。",
    stat: "愿景：AI助手覆盖100%营销场景"
  }
];

const futureFeatures = [
  {
    title: "全球化营销大脑",
    description: "基于全球市场数据的AI决策系统，为每个品牌提供个性化的全球化策略",
    timeline: "2025 Q2",
    status: "开发中"
  },
  {
    title: "虚拟营销专家",
    description: "24/7在线的AI营销顾问，具备人类专家级别的策略思维和创意能力",
    timeline: "2025 Q3",
    status: "规划中"
  },
  {
    title: "全球消费者洞察",
    description: "实时分析全球68个国家的消费者行为，预测市场趋势和机会",
    timeline: "2025 Q4",
    status: "研究中"
  },
  {
    title: "智能品牌孵化器",
    description: "从0到1的品牌孵化平台，AI辅助完成品牌定位、产品策略、营销规划",
    timeline: "2026 Q1",
    status: "构想中"
  }
];

const impactStories = [
  {
    metric: "387%",
    label: "平均营收增长",
    story: "帮助品牌实现的平均营收增长，见证每一个梦想的绽放"
  },
  {
    metric: "68",
    label: "覆盖国家",
    story: "中国品牌的足迹遍布全球，让世界看见中国制造的力量"
  },
  {
    metric: "1,200+",
    label: "成功品牌",
    story: "每一个数字背后都是一个创业者的梦想和坚持"
  }
];

export const VisionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600 mb-12 border border-gray-100">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
            我们的愿景与未来
          </div>
          
          <h1 className="text-6xl md:text-6xl font-medium text-gray-900 leading-none mb-12 tracking-tight">
            让中国品牌
            <br />
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              闪耀全球
            </span>
          </h1>
          
          <p className="text-2xl text-gray-500 font-light max-w-4xl mx-auto leading-relaxed mb-16">
            我们相信技术的力量，更相信梦想的力量
            <br />
            <span className="text-gray-900">每一个优质产品都值得被世界看见</span>
          </p>
        </div>
      </section>

      {/* Vision Points */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-medium text-gray-900 mb-12 leading-tight">
              我们的愿景
            </h2>
            <p className="text-xl text-gray-400 font-light">
              三个核心信念，指引我们前行的方向
            </p>
          </div>

          <div className="space-y-16">
            {visionPoints.map((point, index) => (
              <div key={index} className={`flex items-center gap-16 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="bg-white p-12 rounded-3xl border border-gray-100">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mr-6">
                        <point.icon className="w-8 h-8 text-gray-700" />
                      </div>
                      <h3 className="text-2xl font-medium text-gray-900">{point.title}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                      {point.description}
                    </p>
                    
                    <div className="text-sm text-gray-500 font-medium bg-gray-50 px-4 py-2 rounded-full inline-block">
                      {point.stat}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center">
                    <point.icon className="w-32 h-32 text-gray-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-medium text-gray-900 mb-12 leading-tight">
              未来路线图
            </h2>
            <p className="text-xl text-gray-400 font-light">
              即将到来的创新功能，让营销更智能
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {futureFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all group">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm font-medium text-gray-900 bg-gray-50 px-3 py-1 rounded-full">
                    {feature.timeline}
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                    feature.status === '开发中' ? 'bg-green-100 text-green-700' :
                    feature.status === '规划中' ? 'bg-blue-100 text-blue-700' :
                    feature.status === '研究中' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {feature.status}
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-black transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-medium text-gray-900 mb-12 leading-tight">
              我们的影响力
            </h2>
            <p className="text-xl text-gray-400 font-light">
              数字背后的温暖故事
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((impact, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 text-center">
                <div className="text-5xl font-extralight text-gray-900 mb-4">{impact.metric}</div>
                <div className="text-lg font-medium text-gray-900 mb-4">{impact.label}</div>
                <p className="text-gray-600 font-light leading-relaxed">{impact.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black rounded-3xl p-16 text-center text-white relative overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
            
            <div className="relative">
              <h2 className="text-5xl md:text-5xl font-medium mb-8 leading-tight">
                一起创造
                <br />
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  营销的未来
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
                加入我们，成为中国品牌全球化浪潮的推动者
                <br />
                让每一个梦想都有机会在世界舞台上闪闪发光
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="hover:bg-gray-100 font-medium px-12 py-4 text-lg"
                    showArrow
                  >
                    开始您的出海之旅
                  </Button>
                </Link>
                <button className="inline-flex items-center text-gray-300 hover:text-white transition-colors group text-lg font-light">
                  <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center mr-4 group-hover:border-white/40 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  了解更多愿景
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};