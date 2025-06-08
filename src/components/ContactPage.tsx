import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Users, Globe, Heart } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './ui/Button';

const contactMethods = [
  {
    icon: Mail,
    title: "邮件咨询",
    value: "support@shoplinkapp.com",
    description: "专业团队24小时内回复",
    action: "发送邮件"
  },
  {
    icon: Phone,
    title: "电话咨询",
    value: "17896404198",
    description: "工作日 9:00-18:00",
    action: "立即拨打"
  },
  {
    icon: MessageSquare,
    title: "在线客服",
    value: "即时响应",
    description: "7x24小时在线支持",
    action: "开始对话"
  }
];

const offices = [
  {
    city: "成都总部",
    address: "成都西咪文化科技有限公司",
    description: "产品研发与运营中心",
    isHeadquarters: true
  },
];

const faqs = [
  {
    question: "如何开始使用ShopLink？",
    answer: "您可以直接注册30天免费试用，无需信用卡。我们的专属顾问会在24小时内联系您，提供1对1的产品演示和使用指导。"
  },
  {
    question: "是否提供技术支持？",
    answer: "是的，我们提供全方位的技术支持。创业版用户享受邮件支持，成长版用户有专属客户经理，企业版用户享受24/7专线服务。"
  },
  {
    question: "数据安全如何保障？",
    answer: "我们采用银行级AES-256加密技术，严格遵循GDPR、SOC2等国际数据保护法规，确保您的数据安全。"
  },
  {
    question: "可以定制开发吗？",
    answer: "企业版用户可以享受定制化开发服务，我们会根据您的具体需求提供专属的解决方案。"
  }
];

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里处理表单提交逻辑
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-6xl font-medium text-gray-900 leading-none mb-12 tracking-tight">
            联系我们
          </h1>
          <p className="text-2xl text-gray-500 font-light max-w-4xl mx-auto leading-relaxed mb-16">
            我们随时准备为您提供专业的出海营销咨询
            <br />
            <span className="text-gray-900">让我们一起开启您的全球化之旅</span>
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:border-gray-200 transition-all group">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors">
                  <method.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{method.title}</h3>
                <div className="text-lg text-gray-900 font-medium mb-2">{method.value}</div>
                <p className="text-gray-600 text-sm mb-6 font-light">{method.description}</p>
                <Button variant="secondary" size="sm" className="w-full">
                  {method.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                发送消息
              </h2>
              <p className="text-gray-600 mb-8 font-light">
                填写下面的表单，我们会在24小时内回复您
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-green-900 mb-2">消息发送成功！</h3>
                  <p className="text-green-700">我们会在24小时内回复您</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        姓名 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        邮箱 *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                        placeholder="请输入您的邮箱"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        公司名称
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                        placeholder="请输入公司名称"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        电话号码
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                        placeholder="请输入电话号码"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      咨询主题 *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                    >
                      <option value="">请选择咨询主题</option>
                      <option value="product">产品咨询</option>
                      <option value="pricing">价格咨询</option>
                      <option value="demo">产品演示</option>
                      <option value="support">技术支持</option>
                      <option value="partnership">合作洽谈</option>
                      <option value="other">其他</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      详细描述 *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all resize-none"
                      placeholder="请详细描述您的需求或问题..."
                    />
                  </div>

                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full bg-black text-white hover:bg-gray-800"
                    showArrow
                  >
                    发送消息
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                联系信息
              </h2>

              {/* Office Locations */}
              <div className="space-y-6 mb-12">
                {offices.map((office, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-gray-600 mr-3" />
                      <h3 className="font-medium text-gray-900">{office.city}</h3>
                      {office.isHeadquarters && (
                        <span className="ml-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                          总部
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 mb-2">{office.address}</p>
                    <p className="text-gray-500 text-sm">{office.description}</p>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 p-6 rounded-2xl mb-12">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-gray-600 mr-3" />
                  <h3 className="font-medium text-gray-900">营业时间</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">周一至周五</span>
                    <span className="text-gray-900">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">周六</span>
                    <span className="text-gray-900">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">周日</span>
                    <span className="text-gray-500">休息</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <span className="text-gray-500 text-xs">紧急技术支持：7x24小时</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-light text-gray-900 mb-1">24h</div>
                  <div className="text-sm text-gray-600">平均响应时间</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-light text-gray-900 mb-1">98%</div>
                  <div className="text-sm text-gray-600">客户满意度</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-medium font-light text-gray-900 mb-8">
              常见问题
            </h2>
            <p className="text-xl text-gray-500 font-light">
              快速找到您需要的答案
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-medium text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">没有找到您要的答案？</p>
            <Button variant="secondary" size="lg">
              查看完整FAQ
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};