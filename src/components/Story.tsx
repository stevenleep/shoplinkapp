import React from 'react';
import { Clock, Users, Award, Compass, Heart, Star, Lightbulb, Target } from 'lucide-react';

const milestones = [
  {
    year: "2021",
    title: "初心萌芽",
    description: "三位跨境电商从业者在深圳的一间小咖啡厅里，分享着各自在独立站运营中遇到的困难和挫折。",
    emotion: "那一刻，我们决定要为这个行业做点什么"
  },
  {
    year: "2022",
    title: "技术突破",
    description: "经过无数个日夜的研发，我们的PWA转换技术取得重大突破，第一个客户的转化率提升了180%。",
    emotion: "看到客户眼中的惊喜，我们知道方向是对的"
  },
  {
    year: "2023",
    title: "生态完善",
    description: "离线触达、智能营销、私域建设...一个完整的独立站增长生态系统正式成型。",
    emotion: "不只是工具的集合，更是理念的升华"
  },
  {
    year: "2024",
    title: "全球绽放",
    description: "服务覆盖50+国家，陪伴500+创业者实现梦想，平均转化率提升230%。",
    emotion: "每一个数字背后，都是一个梦想的实现"
  }
];

const values = [
  {
    icon: Heart,
    title: "用心服务",
    description: "每一位客户都是我们的朋友，每一个项目都是我们的作品"
  },
  {
    icon: Lightbulb,
    title: "持续创新",
    description: "永远保持对新技术的敏感和对用户需求的洞察"
  },
  {
    icon: Target,
    title: "结果导向",
    description: "不只是提供工具，更要确保客户获得实实在在的增长"
  },
  {
    icon: Users,
    title: "共同成长",
    description: "与客户一起成长，与行业一起进步，与时代一起前行"
  }
];

const Story = () => {
  return (
    <section id="story" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-50/20 to-pink-50/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50/50 text-blue-600 text-sm font-light mb-12 tracking-wide">
            <Compass className="w-4 h-4" />
            我们的故事
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 leading-tight tracking-tight">
            从初心到
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
              使命必达
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
            每一个伟大的产品背后，都有一个关于坚持、突破与成长的故事。<br />
            这是我们的故事，也是与每一位客户共同书写的传奇。
          </p>
        </div>

        {/* 发展历程 */}
        <div className="mb-24">
          <h3 className="text-3xl font-light text-gray-900 mb-16 text-center tracking-wide">
            成长足迹
          </h3>
          
          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-blue-200 to-purple-200"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-100/50 hover:bg-white hover:shadow-xl transition-all duration-500">
                      <div className="flex items-center gap-3 mb-4">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="text-2xl font-light text-blue-600 tracking-wide">
                          {milestone.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-light text-gray-900 mb-3 tracking-wide">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed font-light mb-4">
                        {milestone.description}
                      </p>
                      <p className="text-gray-400 text-sm font-light italic">
                        {milestone.emotion}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 核心价值观 */}
        <div className="bg-gradient-to-r from-gray-50/50 to-blue-50/30 rounded-3xl p-12">
          <h3 className="text-3xl font-light text-gray-900 mb-12 text-center tracking-wide">
            我们的价值观
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-500 group-hover:scale-110 shadow-lg">
                  <value.icon className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors duration-500" />
                </div>
                <h4 className="text-lg font-light text-gray-900 mb-3 tracking-wide">
                  {value.title}
                </h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 团队理念 */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-100/50">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center">
                <Star className="w-8 h-8 text-orange-500" />
              </div>
            </div>
            
            <h3 className="text-3xl font-light text-gray-900 mb-6 tracking-wide">
              我们的信念
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-light mb-8">
              我们深信，技术的最高境界不是炫耀复杂，而是化繁为简；<br />
              服务的最高境界不是完成任务，而是超越期待；<br />
              成功的最高境界不是独自辉煌，而是与客户共同成长。
            </p>
            
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm font-light italic">
              <Award className="w-4 h-4" />
              让每一次合作，都成为双方最美好的回忆
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;