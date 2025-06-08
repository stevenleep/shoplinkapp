import React, { useState } from 'react';
import { Globe, BarChart3, Heart, Users, Target, Lightbulb, ArrowRight, Star } from 'lucide-react';

const values = [
  {
    icon: Globe,
    title: "深度本地化",
    description: "不只是翻译，而是真正理解当地文化。确保您的品牌在每个市场都能找到最合适的表达方式。",
    stat: "98.7% 本地化适配成功率",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    emoji: "🌍"
  },
  {
    icon: BarChart3,
    title: "数据驱动增长",
    description: "每一个决策都有数据支撑。AI 系统实时分析全球市场动态，为您提供最精准的营销建议。",
    stat: "1:8.7 平均广告投资回报率",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    emoji: "📊"
  },
  {
    icon: Heart,
    title: "贴心服务",
    description: "成功的跨境不只需要好工具，更需要好伙伴。专属客户成功经理全程陪伴，让您永远不孤单。",
    stat: "4.9/5 客户满意度评分",
    gradient: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    emoji: "💝"
  },
  {
    icon: Users,
    title: "实战经验",
    description: "团队成员都有丰富的跨境实战经验，深知每个环节的痛点和解决方案。",
    stat: "平均 8 年跨境经验",
    gradient: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    emoji: "👥"
  },
  {
    icon: Target,
    title: "精准高效",
    description: "每一分营销预算都珍贵，我们用数据驱动决策，让每一次投入都产生最大价值。",
    stat: "-64% 平均获客成本",
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    emoji: "🎯"
  },
  {
    icon: Lightbulb,
    title: "持续创新",
    description: "始终站在技术前沿，为客户创造更多可能性。AI 技术的深度应用让营销更智能。",
    stat: "每月 3+ 新功能发布",
    gradient: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-50",
    emoji: "💡"
  }
];

export const ValuesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 bg-gray-50 relative overflow-hidden">
      {/* 背景装饰 - 减轻 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white/50 to-gray-50"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-100/20 to-pink-100/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-100/20 to-cyan-100/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 mb-8 shadow-sm">
            <Star className="w-4 h-4 mr-2 text-yellow-500" />
            核心优势
          </div>
          <h2 className="text-5xl md:text-5xl font-medium text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
              为什么选择 ShopLink
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light">
            不只是因为我们的技术，更因为我们懂得跨境路上的每一份坚持
          </p>
        </div>

        {/* 核心优势 - 减轻阴影 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={index} 
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`relative bg-white rounded-2xl p-8 border transition-all duration-500 overflow-hidden ${
                  isHovered 
                    ? 'border-gray-200 shadow-md scale-102 -translate-y-1' 
                    : 'border-gray-100 hover:border-gray-200 hover:shadow-sm hover:scale-101'
                }`}>
                  {/* 背景渐变 - 减轻 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 ${
                    isHovered ? 'opacity-5' : 'group-hover:opacity-3'
                  } transition-opacity duration-500`}></div>
                  
                  {/* 装饰emoji - 减轻 */}
                  <div className={`absolute top-4 right-4 text-xl opacity-15 transition-all duration-300 ${
                    isHovered ? 'opacity-25 scale-110' : ''
                  }`}>
                    {value.emoji}
                  </div>

                  <div className="relative">
                    <div className={`w-14 h-14 mb-6 flex items-center justify-center rounded-xl transition-all duration-500 ${
                      isHovered ? value.bgColor : 'bg-gray-50 group-hover:bg-gray-100'
                    }`}>
                      <value.icon className={`w-7 h-7 transition-all duration-500 ${
                        isHovered ? 'text-gray-800 scale-105' : 'text-gray-700'
                      }`} />
                    </div>
                    
                    <h4 className={`text-lg font-medium mb-4 transition-colors duration-300 ${
                      isHovered ? 'text-black' : 'text-gray-900 group-hover:text-black'
                    }`}>
                      {value.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 font-light text-sm">
                      {value.description}
                    </p>
                    
                    <div className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isHovered 
                        ? `${value.bgColor} text-gray-800 border border-gray-200` 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                    }`}>
                      {value.stat}
                    </div>
                  </div>

                  {/* 悬停时的额外元素 */}
                  {isHovered && (
                    <div className="absolute bottom-4 right-4 opacity-0 animate-in fade-in duration-300">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部总结 - 减轻装饰 */}
        <div className="text-center border-t border-gray-200 pt-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div className="relative">
              <p className="text-xl font-extralight text-gray-400 leading-relaxed mb-6">
                跨境路上最怕的不是竞争，而是孤单
                <br />
                <span className="text-gray-600 font-light">我们不只是提供工具，更是您全球化路上最可靠的伙伴</span>
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};