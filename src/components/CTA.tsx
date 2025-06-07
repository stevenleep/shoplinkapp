import React from 'react';
import { ArrowRight, Mail, Compass, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section id='cta' className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 text-gray-600 text-sm font-light mb-12 tracking-wide">
          <Compass className="w-4 h-4 text-blue-500" />
          开启新的篇章
          <Sparkles className="w-4 h-4 text-yellow-500" />
        </div>
        
        <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 leading-tight tracking-tight">
          让我们一起
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
            书写属于您的传奇
          </span>
        </h2>
        
        <p className="text-xl text-gray-600 mb-16 leading-relaxed max-w-3xl mx-auto font-light">
          每一个伟大的故事，都始于勇敢的第一步。<br />
          在这个充满无限可能的数字世界里，让我们成为您最值得信赖的伙伴，<br />
          一起将您的独立站打造成连接世界的桥梁。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <button className="group relative overflow-hidden bg-gray-900 hover:bg-black text-white px-12 py-5 rounded-full flex items-center gap-3 text-lg font-light tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">开始我们的故事</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          <button className="group text-gray-600 hover:text-gray-900 px-12 py-5 text-lg font-light tracking-wide transition-all duration-500 hover:bg-white/60 rounded-full border border-transparent hover:border-gray-200 flex items-center gap-3">
            <Mail className="w-5 h-5" />
            与我们对话
          </button>
        </div>
        
        <div className="border-t border-gray-200/50 pt-12 bg-white/30 backdrop-blur-sm rounded-2xl p-8">
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            已陪伴全球500+创业者实现梦想 • 平均转化率提升230% • 用户留存率达85%
            <br />
            <span className="italic text-gray-400 mt-2 block">
              "不只是数据的增长，更是每一个梦想的绽放"
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;