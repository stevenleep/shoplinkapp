import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-white to-blue-50/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 text-gray-600 text-sm font-light mb-12 hover:bg-white/90 transition-all duration-500 shadow-lg hover:shadow-xl">
          <Heart className="w-4 h-4 text-red-400" />
          <span className="tracking-wide">用心连接每一个商业梦想</span>
          <Sparkles className="w-4 h-4 text-yellow-400" />
        </div>

        <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight text-gray-900 mb-8 leading-none tracking-tight">
          Shop
          <span className="font-light bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Link
          </span>
        </h1>

        <div className="space-y-6 mb-16">
          <p className="text-2xl md:text-3xl text-gray-700 font-extralight leading-relaxed max-w-4xl mx-auto tracking-wide">
            让每一个独立站，都成为连接世界的桥梁
          </p>

          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-light">
            我们相信，每一个跨境电商背后都有一个改变世界的故事。
            <br />
            借助 Shoplink 的力量，全球 500+ 跨境&独立站创业者实现梦想。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <button className="group relative overflow-hidden bg-gray-900 hover:bg-black text-white px-12 py-5 rounded-full flex items-center gap-3 text-lg font-light tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">开始您的故事</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>

          <button className="group text-gray-600 hover:text-gray-900 px-12 py-5 text-lg font-light tracking-wide transition-all duration-500 hover:bg-gray-50 rounded-full border border-transparent hover:border-gray-200">
            聆听更多故事
          </button>
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-sm font-light tracking-widest uppercase mb-4">
            Trusted by dreamers worldwide
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
