import React from 'react';
import { TrendingUp, Globe, Heart, Star } from 'lucide-react';

const stats = [
  {
    number: '500+',
    label: '追梦者',
    description: '来自全球的创业伙伴',
    icon: Heart,
  },
  {
    number: '2.3x',
    label: '成长倍数',
    description: '平均转化率的提升',
    icon: TrendingUp,
  },
  {
    number: '85%',
    label: '忠诚度',
    description: '用户的长期留存',
    icon: Star,
  },
  {
    number: '50+',
    label: '国家版图',
    description: '梦想触达的土地',
    icon: Globe,
  },
];

const Stats = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extralight text-gray-900 mb-6 tracking-tight">
            用数字诉说
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
              温暖的故事
            </span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            每一个数字背后，都是一个关于坚持、成长与突破的真实故事。
            <br />
            这些不只是统计数据，更是我们共同书写的成长轨迹。
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl hover:bg-gray-50/50 transition-all duration-500"
            >
              <div className="w-12 h-12 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>

              <div className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-500">
                {stat.number}
              </div>

              <div className="text-lg font-light text-gray-700 mb-2 tracking-wide">
                {stat.label}
              </div>

              <div className="text-sm text-gray-500 font-light leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 font-light italic text-lg">
            "成功不是终点，而是每一次选择相信的开始"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
