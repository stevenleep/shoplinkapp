import React, { useState } from 'react';
import { ArrowRight, Sparkles, Target, Zap } from 'lucide-react';

const products = [
  {
    name: "ShopLink.Reach",
    title: "5分钟触达全球用户",
    description: "PWA应用让您具备随时激活用户的能力，无论用户在世界哪个角落都能第一时间收到您的信息并立即行动。",
    metric: "+127%",
    unit: "用户激活",
    details: "想象一下，当您有新品上线、限时优惠或重要消息时，全球用户都能在第一时间收到通知并立即行动。这就是触达能力的价值。从地铁里的上班族到咖啡厅中的自由职业者，甚至在没有网络的山区，都能流畅地接收您的信息。",
    isDefault: true,
    gradient: "from-blue-500 to-purple-600",
    bgColor: "bg-blue-50",
    icon: "📱"
  },
  {
    name: "ShopLink.Target", 
    title: "AI找到最容易购买的用户",
    description: "智能广告投放系统让您的每一分广告费都花在最对的人身上，用AI的智慧精准命中目标用户。",
    metric: "1:8.7",
    unit: "投资回报",
    details: "从盲目投放到精准命中，从烧钱无果到订单爆增。AI系统会分析用户行为、购买历史、兴趣偏好，找到那些最容易被您的产品打动的人群，让每一次投放都有回响。",
    isDefault: false,
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    icon: "🎯"
  },
  {
    name: "ShopLink.Connect",
    title: "个性化沟通建立信任", 
    description: "智能邮件营销系统让每封邮件都有温度和回应，在数字化世界里与用户建立真正的情感连接。",
    metric: "98.5%",
    unit: "送达率",
    details: "从一封简单的欢迎邮件开始，见证品牌与用户之间温暖故事的诞生。每一次点击都是信任的延续，每一次回复都是情感的共鸣。让冰冷的营销变成温暖的对话。",
    isDefault: false,
    gradient: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    icon: "💌"
  },
  {
    name: "ShopLink.Loyalty",
    title: "一次性用户变终身粉丝",
    description: "智能会员管理系统让每个用户都成为品牌拥护者，把一次性购买变成长久的陪伴和持续的价值。",
    metric: "+245%", 
    unit: "用户价值",
    details: "从陌生的访客到忠实的粉丝，从一次性购买到终身陪伴。通过智能化的会员成长路径和个性化权益体系，让每个用户都感受到被重视和关爱。",
    isDefault: false,
    gradient: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    icon: "👑"
  },
  {
    name: "ShopLink.AI",
    title: "24小时营销专家",
    description: "AI营销助手为您的品牌持续优化每个细节，当您休息时它依然在工作，像最懂您的营销伙伴。",
    metric: "80%",
    unit: "时间节省",
    details: "当深夜时分您已经休息，AI助手依然在为您的品牌默默工作，分析数据、优化策略、准备明天的惊喜。这就是科技与人文的完美结合，让您有更多时间专注于真正重要的事情。",
    isNew: true,
    isDefault: false,
    gradient: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50",
    icon: "🤖"
  }
];

export const BusinessValueSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* 背景装饰 - 减轻 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/20 to-white"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-purple-100/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
            完整产品矩阵
          </div>
          <h2 className="text-5xl md:text-5xl font-medium text-gray-900 mb-20 leading-none tracking-tight">
            <span className="bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
              从零到全球的完整路径
            </span>
          </h2>
        </div>

        {/* 产品网格 - 减轻阴影和边框 */}
        <div className="grid grid-cols-2 gap-6 mb-20">
          {products.map((product, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;
            const shouldExpand = isActive || isHovered;
            
            return (
              <div 
                key={index}
                className={`relative bg-white border rounded-2xl transition-all duration-500 cursor-pointer group overflow-hidden ${
                  shouldExpand 
                    ? 'col-span-2 p-12 border-gray-200 shadow-lg scale-[1.01]' 
                    : 'p-8 border-gray-100 hover:border-gray-200 hover:shadow-sm hover:scale-[1.005]'
                }`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* 背景渐变 - 减轻 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 ${shouldExpand ? 'opacity-3' : 'group-hover:opacity-2'} transition-opacity duration-500`}></div>
                
                {/* 装饰元素 */}
                {shouldExpand && (
                  <div className="absolute top-6 right-6 text-3xl opacity-15">
                    {product.icon}
                  </div>
                )}

                {/* 基础内容 */}
                <div className={`relative ${shouldExpand ? 'grid grid-cols-2 gap-12 items-start' : ''}`}>
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`text-xl ${shouldExpand ? 'text-2xl' : ''} transition-all duration-300`}>
                        {product.icon}
                      </div>
                      <h3 className={`font-medium text-gray-600 ${shouldExpand ? 'text-base' : 'text-sm'} font-medium`}>
                        {product.name}
                      </h3>
                      {product.isNew && (
                        <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>
                    
                    <h4 className={`font-light text-gray-900 mb-4 font-medium leading-tight ${
                      shouldExpand ? 'text-3xl mb-6' : 'text-xl'
                    }`}>
                      {product.title}
                    </h4>
                    
                    <p className={`text-gray-500 font-light leading-relaxed ${
                      shouldExpand ? 'text-lg mb-8' : 'text-sm mb-6'
                    }`}>
                      {product.description}
                    </p>

                    {/* 数据指标 - 减轻阴影 */}
                    <div className="flex items-center justify-between">
                      <div className={`${shouldExpand ? product.bgColor : 'bg-gray-50'} rounded-xl px-5 py-3 transition-all duration-300`}>
                        <div className={`font-light text-gray-900 ${shouldExpand ? 'text-3xl' : 'text-xl'}`}>
                          {product.metric}
                        </div>
                        <div className={`text-gray-500 ${shouldExpand ? 'text-sm' : 'text-xs'} font-medium`}>
                          {product.unit}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className={`text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300 ${
                          shouldExpand ? 'w-5 h-5' : 'w-4 h-4'
                        }`} />
                      </div>
                    </div>
                  </div>

                  {/* 展开的详细描述 */}
                  {shouldExpand && (
                    <div className="border-l border-gray-200 pl-12 animate-in fade-in slide-in-from-right duration-500">
                      <h5 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                        <Target className="w-4 h-4 mr-2 text-gray-600" />
                        深度价值
                      </h5>
                      <p className="text-gray-600 font-light leading-relaxed text-base mb-6">
                        {product.details}
                      </p>
                      
                      {/* 核心优势标签 - 减轻阴影 */}
                      <div className="bg-gray-50 rounded-xl p-5">
                        <div className="text-sm text-gray-500 mb-3 font-medium">核心优势</div>
                        <div className="flex flex-wrap gap-2">
                          {index === 0 && (
                            <>
                              <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-300 transition-colors">⚡ 即时推送</span>
                              <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-300 transition-colors">📱 离线可用</span>
                              <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-300 transition-colors">🌍 全球覆盖</span>
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-300 transition-colors">🤖 AI智能</span>
                              <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-300 transition-colors">🎯 精准定位</span>
                              <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-300 transition-colors">📊 实时优化</span>
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-300 transition-colors">💝 个性化</span>
                              <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-300 transition-colors">🌐 多语言</span>
                              <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-300 transition-colors">✅ 高送达</span>
                            </>
                          )}
                          {index === 3 && (
                            <>
                              <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-300 transition-colors">🔄 智能分层</span>
                              <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-300 transition-colors">🎁 权益体系</span>
                              <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-300 transition-colors">📈 生命周期</span>
                            </>
                          )}
                          {index === 4 && (
                            <>
                              <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-300 transition-colors">⏰ 24/7工作</span>
                              <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-300 transition-colors">🚀 策略优化</span>
                              <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-300 transition-colors">🔮 趋势预测</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部升华 - 减轻装饰 */}
        <div className="text-center border-t border-gray-100 pt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/30 to-transparent"></div>
          <div className="relative">
            <p className="text-2xl font-extralight text-gray-400 leading-relaxed mb-6">
              从触达到转化，从留存到增长
              <br />
              <span className="text-gray-600">完整产品矩阵让每个优质产品都能成功跨境</span>
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};