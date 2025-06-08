import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { Play, Sparkles, Star, ArrowRight, Target, Users, Globe, Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-50 to-pink-50 rounded-full blur-3xl opacity-20"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 左侧内容 */}
          <div>
            {/* 社会证明标签 */}
            <div className="inline-flex items-center text-sm text-gray-500 mb-8 px-6 py-3 border border-gray-100 rounded-full bg-white/80 backdrop-blur-sm">
              <div className="flex items-center mr-3">
                <div className="flex -space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full border-2 border-white"></div>
                  ))}
                </div>
              </div>
              <span className="font-medium">1,247 个跨境电商品牌的选择</span>
              <Sparkles className="w-4 h-4 ml-2 text-yellow-500" />
            </div>
            
            {/* 主标题 */}
            <h1 className="text-6xl md:text-6xl font-medium leading-tight mb-6 tracking-tight">
              <span className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
                让世界看见
              </span>
              <br />
              <span className="bg-gradient-to-br from-gray-700 via-gray-900 to-black bg-clip-text text-transparent">
                您的优质产品
              </span>
            </h1>
            
            {/* 副标题 */}
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
              从想法到订单，从本土到全球
              <br />
              <span className="text-gray-900 font-medium relative">
                每一个优质产品都值得被世界看见
              </span>
            </p>

            {/* 核心特性 */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Target, text: "AI精准获客" },
                { icon: Globe, text: "全球用户触达" },
                { icon: Zap, text: "5分钟部署" },
                { icon: Users, text: "专属成功经理" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-50">
                  <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* 行动按钮 */}
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-black rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <Link to="/pricing">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    showArrow 
                    className="relative text-lg px-12 py-4 rounded-full bg-black hover:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    开启全球化之旅
                  </Button>
                </Link>
              </div>
              
              <button className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-all duration-300 group text-lg">
                <div className="relative w-12 h-12 border border-gray-100 rounded-full flex items-center justify-center mr-4 group-hover:border-gray-300 transition-all duration-300">
                  <Play className="w-5 h-5 ml-1 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full bg-gray-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">观看演示</span>
              </button>
            </div>
          </div>

          {/* 右侧数据展示 */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-50">
              <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                核心数据表现
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "30天", label: "免费试用", icon: "🎯", bgColor: "bg-blue-50/30", textColor: "text-blue-600" },
                  { value: "98.7%", label: "续费率", icon: "💎", bgColor: "bg-green-50/30", textColor: "text-green-600" },
                  { value: "68", label: "覆盖国家", icon: "🌍", bgColor: "bg-purple-50/30", textColor: "text-purple-600" },
                  { value: "24/7", label: "专属支持", icon: "🚀", bgColor: "bg-orange-50/30", textColor: "text-orange-600" }
                ].map((stat, index) => (
                  <div key={index} className={`${stat.bgColor} rounded-2xl p-6 border border-gray-50 group hover:scale-105 transition-all duration-300 cursor-pointer`}>
                    <div className="text-2xl mb-3">{stat.icon}</div>
                    <div className={`text-2xl font-light text-gray-900 mb-2 group-hover:${stat.textColor} transition-colors`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-light">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* 底部信任标识 */}
              <div className="mt-8 pt-6 border-t border-gray-50">
                <p className="text-sm text-gray-500 mb-4 text-center">受到全球品牌信赖</p>
                <div className="flex items-center justify-center space-x-4 opacity-60">
                  {['Shopify', 'WooCommerce', 'Magento'].map((platform, index) => (
                    <div key={index} className="px-3 py-1 bg-gray-50 rounded-lg text-xs text-gray-600 font-medium hover:bg-gray-100 transition-colors">
                      {platform}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};