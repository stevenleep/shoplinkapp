import React from 'react';
import { Smartphone, Wifi, Target, Users, Compass, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: "原生应用体验",
    subtitle: "PWA技术赋能",
    description: "将您的独立站轻柔地包装成用户手机中的专属应用。不需要应用商店的审核，不需要复杂的下载流程，只需要一次访问，便能在用户的桌面上留下永恒的印记。",
    emotion: "让技术有温度，让访问有归属感"
  },
  {
    icon: Wifi,
    title: "离线世界的光芒",
    subtitle: "无界连接体验",
    description: "即使在网络信号微弱的角落，即使在地铁的深处，您的品牌依然能够陪伴用户。我们相信，真正的连接不应该被网络状况所束缚。",
    emotion: "在断网的世界里，依然为用户点亮一盏灯"
  },
  {
    icon: Target,
    title: "精准触达心灵",
    subtitle: "智能营销策略",
    description: "每一次推送都不是打扰，而是在恰当的时间，向恰当的人，传递恰当的价值。基于深度学习的用户行为分析，让营销变成一种关怀。",
    emotion: "不是广告轰炸，而是心灵的轻声呼唤"
  },
  {
    icon: Users,
    title: "私域花园培育",
    subtitle: "社群生态建设",
    description: "帮助您构建一个温暖的用户社群，在这里，每一位顾客都不只是交易的对象，而是品牌故事的共同书写者。让流量沉淀为情感，让用户成长为朋友。",
    emotion: "种下一颗种子，收获一片森林"
  }
];

const Features = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-light mb-8 tracking-wide">
            <Compass className="w-4 h-4" />
            我们的使命
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 leading-tight tracking-tight">
            不只是工具<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-light">更是理念</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            我们深信，每一个独立站背后都承载着创业者的梦想与坚持。<br />
            我们要做的，不仅仅是提供技术解决方案，更是成为您梦想路上的同行者。
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-10 rounded-3xl bg-white/60 backdrop-blur-sm border border-gray-100/50 hover:bg-white hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-700 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors duration-700" />
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-light tracking-widest uppercase">
                    {feature.subtitle}
                  </p>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg font-light mb-6">
                  {feature.description}
                </p>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm font-light italic">
                  <Lightbulb className="w-4 h-4" />
                  {feature.emotion}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;