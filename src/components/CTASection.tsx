import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Users, Globe, Zap, Heart, Check, Star, Target } from 'lucide-react';
import { Button } from './ui/Button';

const features = [
  { icon: Sparkles, text: "30天免费试用", description: "无需信用卡，体验全部功能", gradient: "from-yellow-400 to-orange-500" },
  { icon: Users, text: "专属成功经理", description: "1对1指导，确保成功", gradient: "from-blue-400 to-purple-500" },
  { icon: Shield, text: "随时取消", description: "无隐藏费用，灵活选择", gradient: "from-green-400 to-emerald-500" }
];

const stats = [
  { value: "1,200+", label: "成功品牌", icon: "🏆" },
  { value: "68", label: "覆盖国家", icon: "🌍" },
  { value: "98.7%", label: "续费率", icon: "💎" },
  { value: "4.9/5", label: "满意度", icon: "⭐" }
];

const trustBadges = [
  { icon: Shield, text: "ISO 27001", color: "text-green-500/60" },
  { icon: Shield, text: "SOC 2", color: "text-blue-500/60" },
  { icon: Globe, text: "GDPR", color: "text-purple-500/60" },
  { icon: Zap, text: "99.9% 可用性", color: "text-orange-500/60" }
];

export const CTASection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 relative overflow-hidden">
      {/* 背景装饰 - 减轻 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white/30 to-gray-50"></div>
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-gradient-to-br from-blue-100/20 to-purple-100/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gradient-to-br from-pink-100/15 to-orange-100/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* 主要内容区域 - 减轻阴影 */}
        <div className="bg-white rounded-2xl p-12 md:p-16 border border-gray-50 relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.01),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.005),transparent_50%)]"></div>
          
          {/* 装饰性元素 - 减轻 */}
          <div className="absolute top-8 right-8 text-3xl opacity-8">🚀</div>
          <div className="absolute bottom-8 left-8 text-2xl opacity-8">💫</div>
          
          <div className="relative">
            <div className="text-center mb-12">
              {/* 标签 - 减轻阴影 */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-50 to-white rounded-full text-sm text-gray-600 mb-8 border border-gray-100">
                <Heart className="w-4 h-4 mr-2 text-red-500" />
                <span className="font-medium">开启您的全球化之旅</span>
                <div className="ml-2 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              
              {/* 主标题 */}
              <h2 className="text-5xl md:text-5xl font-medium mb-8 leading-tight">
                <span className="bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  让全球用户
                </span>
                <br />
                <span className="bg-gradient-to-br from-gray-700 via-gray-900 to-black bg-clip-text text-transparent">
                  爱上您的产品
                </span>
              </h2>
              
              {/* 副标题 */}
              <p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                每一个优质产品，都值得被全世界看见。
                <br />
                <span className="text-gray-700 font-medium">从今天开始，让技术的温度连接全球消费者的心。</span>
              </p>
            </div>

            {/* 核心优势 - 减轻阴影 */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mx-auto group-hover:scale-105 transition-all duration-300 shadow-sm group-hover:shadow-md`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Check className="w-2.5 h-2.5 text-green-500" />
                    </div>
                  </div>
                  <div className="text-gray-900 font-medium mb-2 group-hover:text-black transition-colors">
                    {feature.text}
                  </div>
                  <div className="text-gray-500 text-sm font-light">{feature.description}</div>
                </div>
              ))}
            </div>
            
            {/* 行动按钮 - 减轻阴影 */}
            <div className="text-center mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600/20 to-black/20 rounded-full blur opacity-50 group-hover:opacity-70 transition duration-300"></div>
                  <Link to="/pricing">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="relative bg-black text-white hover:bg-gray-800 font-medium px-12 py-4 text-lg shadow-sm hover:shadow-md transform hover:scale-102 transition-all duration-300"
                      showArrow
                    >
                      开始免费试用
                    </Button>
                  </Link>
                </div>
                <Link to="/contact" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group text-lg font-light">
                  <div className="w-12 h-12 border border-gray-100 rounded-full flex items-center justify-center mr-4 group-hover:border-gray-300 group-hover:shadow-sm transition-all duration-300">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">预约产品演示</span>
                </Link>
              </div>
            </div>

            {/* 统计数据 - 减轻阴影 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pt-8 border-t border-gray-50">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gray-50 rounded-xl p-4 group-hover:bg-gray-100 transition-colors duration-300">
                    <div className="text-xl mb-2">{stat.icon}</div>
                    <div className="text-xl font-light text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 信任标识 - 减轻阴影 */}
            <div className="pt-8 border-t border-gray-50">
              <p className="text-center text-sm text-gray-500 mb-6 font-medium">安全合规保障</p>
              <div className="flex items-center justify-center space-x-8">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-2 group cursor-pointer">
                    <div className="w-7 h-7 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                      <badge.icon className={`w-3.5 h-3.5 ${badge.color}`} />
                    </div>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors font-medium">
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};