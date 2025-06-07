import React from 'react';
import { Globe, Heart, Compass, Star, Lightbulb, Target } from 'lucide-react';

const Vision = () => {
  return (
    <section
      id="vision"
      className="py-16 px-6 bg-white relative overflow-hidden"
    >
      {/* 背景装饰 */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50/50 text-blue-600 text-sm font-light mb-12 tracking-wide">
            <Compass className="w-4 h-4" />
            我们的愿景
          </div>

          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 leading-tight tracking-tight">
            连接世界
            <span className=" bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
              成就梦想
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
            我们相信，每一个跨境电商创业者都是勇敢的探索者，
            <br />
            他们不仅在销售产品，更在传递文化、分享价值、连接世界。
            <br />
            我们的使命，就是让这种连接变得更加深刻、持久、有意义。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Globe className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
              无界商业
            </h3>
            <p className="text-gray-600 leading-relaxed font-light">
              打破地理边界，让每一个优质产品都能找到它的知音，
              让每一个创业梦想都能在全球舞台上闪闪发光。
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Heart className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
              情感连接
            </h3>
            <p className="text-gray-600 leading-relaxed font-light">
              技术只是手段，情感才是本质。我们要做的不仅是提升转化率，
              更是帮助品牌与用户建立深层的情感纽带。
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Star className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
              持续成长
            </h3>
            <p className="text-gray-600 leading-relaxed font-light">
              成功不是终点，而是一个持续成长的过程。我们陪伴每一位创业者，
              在商业的道路上不断突破、不断超越。
            </p>
          </div>
        </div>

        {/* <div className="bg-gradient-to-r from-gray-50/50 to-blue-50/30 rounded-3xl p-12 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-orange-500" />
            </div>
          </div>

          <h3 className="text-3xl font-light text-gray-900 mb-6 tracking-wide">
            我们的承诺
          </h3>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-light mb-8">
            在这个快速变化的数字时代，我们承诺始终站在创业者身边，
            用最前沿的技术、最贴心的服务、最真诚的态度，
            帮助每一个独立站不仅仅是生存，更要茁壮成长。
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm font-light italic">
            <Target className="w-4 h-4" />
            让每一个商业梦想，都成为改变世界的力量
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Vision;
