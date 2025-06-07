import React, { useState } from 'react';
import { Calendar, User, Mail, Building, MessageCircle, Send, Sparkles } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理表单提交
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id='booking' className="py-16 px-6 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 text-gray-600 text-sm font-light mb-12 tracking-wide">
            <Calendar className="w-4 h-4 text-blue-500" />
            开启对话
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 leading-tight tracking-tight">
            让我们聊聊 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
              您的商业梦想
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
            每一个伟大的合作，都始于一次真诚的对话。<br />
            告诉我们您的故事，让我们一起探索无限可能。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-100/50">
              <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                为什么选择与我们对话？
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-light text-gray-900 mb-2">专属顾问服务</h4>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                      资深行业专家一对一深度沟通，为您量身定制最适合的解决方案
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Building className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-light text-gray-900 mb-2">行业洞察分享</h4>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                      获得最新的跨境电商趋势分析和成功案例分享
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-light text-gray-900 mb-2">免费咨询诊断</h4>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                      现有独立站的专业诊断和优化建议，完全免费
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-2xl">
              <p className="text-gray-500 text-sm font-light italic">
                "每一次对话，都是一次心灵的碰撞<br />
                每一个方案，都是一份用心的承诺"
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-100/50 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-3 tracking-wide">
                    您的姓名 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 font-light bg-white/50"
                    placeholder="请输入您的姓名"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-3 tracking-wide">
                    邮箱地址 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 font-light bg-white/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-3 tracking-wide">
                    公司名称
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 font-light bg-white/50"
                    placeholder="您的公司名称"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-3 tracking-wide">
                    独立站网址
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 font-light bg-white/50"
                    placeholder="https://your-website.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-light text-gray-700 mb-3 tracking-wide">
                  告诉我们您的需求
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 font-light bg-white/50 resize-none"
                  placeholder="分享您的商业目标、遇到的挑战，或者任何想要了解的内容..."
                />
              </div>
              
              <button
                type="submit"
                className="group w-full bg-gray-900 hover:bg-black text-white py-5 rounded-xl flex items-center justify-center gap-3 text-lg font-light tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              >
                <span className="relative z-10">开始我们的对话</span>
                <Send className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <p className="text-center text-gray-400 text-sm font-light">
                我们承诺在24小时内回复您的咨询
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;