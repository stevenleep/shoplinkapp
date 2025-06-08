import React from 'react';
import { Heart, Users, Globe, Target, Award, Lightbulb, ArrowRight, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './ui/Button';

const values = [
  {
    icon: Heart,
    title: "用心服务",
    desc: "每一个客户的成功，都是我们最大的成就"
  },
  {
    icon: Lightbulb,
    title: "持续创新",
    desc: "用技术的力量，让营销变得更简单更有效"
  },
  {
    icon: Globe,
    title: "全球视野",
    desc: "帮助中国品牌在世界舞台上闪闪发光"
  },
  {
    icon: Users,
    title: "团队协作",
    desc: "相信团队的力量，共同创造更大价值"
  }
];

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-6xl font-medium text-gray-900 leading-none mb-12 tracking-tight">
            关于 ShopLink
          </h1>
          <p className="text-2xl text-gray-500 font-light max-w-4xl mx-auto leading-relaxed mb-16">
            我们相信，每一个优质产品都值得被世界看见
            <br />
            <span className="text-gray-900">用技术的温度，连接全球消费者的心</span>
          </p>
          
          <div className="grid grid-cols-3 gap-12 py-16 border-t border-gray-100">
            <div className="text-center">
              <div className="text-4xl font-extralight text-gray-900 mb-3">1,200+</div>
              <div className="text-sm text-gray-400">成功品牌</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extralight text-gray-900 mb-3">68</div>
              <div className="text-sm text-gray-400">覆盖国家</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extralight text-gray-900 mb-3">4年</div>
              <div className="text-sm text-gray-400">专业积淀</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-medium text-gray-900 mb-12 leading-tight">
              我们的使命
            </h2>
          </div>
          
          <div className="bg-white rounded-3xl p-16 border border-gray-100 text-center">
            <Quote className="w-12 h-12 text-gray-300 mx-auto mb-8" />
            <blockquote className="text-3xl font-light text-gray-700 leading-relaxed mb-8">
              "让每一个有梦想的中国品牌，都能在全球市场找到属于自己的位置"
            </blockquote>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              我们不只是提供营销工具，更是陪伴中国品牌走向世界的可靠伙伴。
              用技术的力量降低出海门槛，用服务的温度点亮品牌梦想。
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-medium text-gray-900 mb-12 leading-tight">
              我们的价值观
            </h2>
            <p className="text-xl text-gray-400 font-light">
              指引我们前行的核心理念
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:border-gray-200 transition-colors">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 border border-gray-100 text-center">
            <h2 className="text-5xl font-medium mb-8 leading-tight text-gray-900">
              加入我们的出海之旅
            </h2>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed font-light">
              让我们一起，把中国的优质产品带向世界
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="bg-black text-white hover:bg-gray-800 font-medium px-12 py-4 text-lg"
                  showArrow
                >
                  与我们达成合作
                </Button>
              </Link>
              <button className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group text-lg font-light">
                <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center mr-4 group-hover:border-gray-400 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
                联系HR加入我们
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};