import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "ShopLink 与其他营销工具有什么区别？",
    answer: "ShopLink 专为中国品牌出海设计，提供从邮件营销、PWA应用、智能广告到会员管理的全链路解决方案。我们不只是单一工具，而是完整的出海营销生态系统，深度理解中国品牌的本土化需求和海外市场特点。"
  },
  {
    question: "AI 营销助手具体能帮我做什么？",
    answer: "AI助手可以24小时自动优化您的营销策略，包括：智能分析用户行为、自动调整广告投放、生成个性化邮件内容、预测最佳发送时机、优化用户分群策略等。相当于拥有一个永不休息的营销专家。"
  },
  {
    question: "邮件营销的送达率如何保证？",
    answer: "我们采用多重技术保障：专用IP池、域名预热、内容智能优化、发送时机算法、反垃圾邮件认证等。配合AI智能调度，确保98.5%的高送达率，让您的邮件真正到达用户收件箱。"
  },
  {
    question: "支持哪些电商平台集成？",
    answer: "支持主流电商平台：Shopify、WooCommerce、Magento、BigCommerce等。通过API无缝集成，实现用户数据同步、订单追踪、库存管理等功能，让您的营销与业务完美协同。"
  },
  {
    question: "数据安全和隐私保护如何保障？",
    answer: "采用银行级AES-256加密技术，严格遵循GDPR、SOC2等国际数据保护法规。所有数据在安全的云环境中处理，支持数据本地化存储，企业版还提供私有化部署选项。"
  },
  {
    question: "可以先试用再决定购买吗？",
    answer: "提供30天免费试用，体验创业版的所有核心功能，无需信用卡，无隐藏费用。试用期内有专属顾问指导，帮您快速上手并制定最适合的营销策略。"
  },
  {
    question: "技术支持和培训服务如何？",
    answer: "创业版提供邮件支持，成长版享受专属客户经理和电话支持，企业版提供24/7专线服务。所有用户都可获得在线培训资源，企业版还包含1对1专家培训服务。"
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-medium font-light text-gray-900 mb-4">
            常见问题
          </h2>
          <p className="text-gray-600">
            解答您关心的问题，助您做出明智选择
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-start justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-base font-medium text-gray-900 pr-4 leading-relaxed">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 mt-1">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-gray-600" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-600" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 底部联系信息 */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              还有其他问题？
            </h3>
            <p className="text-gray-600 mb-6 font-light">
              我们的专家团队随时为您提供专业解答
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:support@shoplinkapp.com" 
                className="inline-flex items-center px-6 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-gray-300 hover:text-gray-900 transition-colors"
              >
                📧 support@shoplinkapp.com
              </a>
              <a 
                href="tel:17896404198" 
                className="inline-flex items-center px-6 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-gray-300 hover:text-gray-900 transition-colors"
              >
                📞 178-9640-4198
              </a>
              <button className="inline-flex items-center px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                💬 在线客服
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};