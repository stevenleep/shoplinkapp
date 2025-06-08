import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Target, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';

const footerLinks = {
  product: [
    { name: "ShopLink.Connect", href: "$/product/connect" },
    { name: "ShopLink.Reach", href: "$/product/reach" },
    { name: "ShopLink.Ads", href: "$/product/ads" },
    { name: "ShopLink.Loyalty", href: "$/product/member" },
    { name: "ShopLink.AI", href: "$/product/ai" }
  ],
  solutions: [
    { name: "电商出海", href: "$/solutions/ecommerce" },
    { name: "品牌营销", href: "$/solutions/branding" },
    { name: "数据分析", href: "$/solutions/analytics" },
    { name: "客户服务", href: "$/solutions/support" }
  ],
  resources: [
    { name: "出海指南", href: "#guide" },
    { name: "成功案例", href: "#cases" },
    { name: "行业报告", href: "#reports" },
    { name: "开发者文档", href: "#docs" }
  ],
  company: [
    { name: "关于我们", href: "/about" },
    { name: "愿景使命", href: "/vision" },
    { name: "联系我们", href: "/contact" },
    { name: "价格方案", href: "/pricing" },
    { name: "加入我们", href: "#careers" }
  ]
};

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      // 处理锚点链接
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if(href.startsWith("$")) {
      navigate(href.replace("$", "").replace("", ""));
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* 主要内容区域 */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-6 gap-8 mb-12">
            {/* 品牌信息 */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6 group">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-medium text-gray-900">ShopLink</span>
              </Link>
              <p className="text-gray-600 mb-8 leading-relaxed font-light">
                陪伴中国品牌走向世界，用技术的温度连接全球消费者的心。
              </p>
              
              {/* 联系信息 */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group">
                  <Mail className="w-4 h-4 mr-3 text-gray-400 group-hover:text-gray-600" />
                  <a href="mailto:support@shoplinkapp.com" className="text-sm font-light">
                    support@shoplinkapp.com
                  </a>
                </div>
                <div className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group">
                  <Phone className="w-4 h-4 mr-3 text-gray-400 group-hover:text-gray-600" />
                  <a href="tel:17896404198" className="text-sm font-light">
                    17896404198
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                  <span className="text-sm font-light">成都西咪文化科技有限公司</span>
                </div>
              </div>
            </div>

            {/* 链接分组 */}
            <div>
              <h4 className="font-medium mb-6 text-gray-900">产品</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light group inline-flex items-center"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6 text-gray-900">解决方案</h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light group inline-flex items-center"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6 text-gray-900">资源</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light group inline-flex items-center"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6 text-gray-900">公司</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('/') ? (
                      <Link 
                        to={link.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light group inline-flex items-center"
                      >
                        {link.name}
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ) : (
                      <button 
                        onClick={() => handleLinkClick(link.href)}
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light group inline-flex items-center"
                      >
                        {link.name}
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 分隔线 */}
          <div className="border-t border-gray-100 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* 版权信息 */}
              <div className="text-sm text-gray-500 mb-4 md:mb-0 font-light">
                © 2025 ShopLink. 保留所有权利 | 
                <a href="#privacy" className="hover:text-gray-700 ml-1 transition-colors">隐私政策</a> | 
                <a href="#terms" className="hover:text-gray-700 ml-1 transition-colors">服务条款</a>
              </div>
              
              {/* 社交媒体 */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500 font-light">关注我们：</span>
                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors group">
                    <span className="text-xs text-gray-600 group-hover:text-gray-900">微</span>
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors group">
                    <span className="text-xs text-gray-600 group-hover:text-gray-900">知</span>
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors group">
                    <span className="text-xs text-gray-600 group-hover:text-gray-900">B</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部品牌标语 */}
      <div className="bg-gray-50 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-3">
            <Heart className="w-4 h-4 text-red-500 mr-2" />
            <span className="text-sm text-gray-600 font-light">用心连接世界</span>
          </div>
          <p className="text-xs text-gray-500 font-light leading-relaxed">
            每一个优质产品都值得被世界看见，每一份努力都值得被温柔以待
          </p>
        </div>
      </div>
    </footer>
  );
};