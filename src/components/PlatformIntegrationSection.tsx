import React, { useState } from 'react';
import { Zap, CheckCircle } from 'lucide-react';

const platforms = [
  { name: 'Shopify', logo: '🛍️', category: '电商平台' },
  { name: 'WooCommerce', logo: '🔧', category: '开源电商' },
  { name: 'Magento', logo: '🎯', category: '企业电商' },
  { name: 'BigCommerce', logo: '📈', category: 'SaaS电商' },
  { name: 'WordPress', logo: '📝', category: '内容管理' },
  { name: 'Squarespace', logo: '🎨', category: '建站平台' },
  { name: 'Soplazza', logo: '🚀', category: '跨境电商' },
  { name: 'Shopline', logo: '📱', category: '移动电商' },
  { name: 'Shopyy', logo: '⚡', category: '独立站' },
  { name: 'PrestaShop', logo: '🛒', category: '开源商城' },
  { name: 'OpenCart', logo: '🔓', category: '免费电商' },
  { name: 'Wix', logo: '✨', category: '网站构建' }
];

export const PlatformIntegrationSection: React.FC = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-blue-50/20 via-purple-50/10 to-pink-50/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto text-center">
        {/* 标题区域 */}
        <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 mb-8 shadow-sm">
          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
          支持主流平台
        </div>
        
        <h2 className="text-5xl font-medium text-gray-900 mb-8 leading-tight">
          <span className="bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
            无缝连接主流平台
          </span>
        </h2>
        <p className="text-xl text-gray-400 font-light mb-20">
          无论您使用哪个平台建站，ShopLink 都能完美集成
        </p>

        {/* 平台网格 - 移除灰色点 */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-16">
          {platforms.map((platform, index) => {
            const isHovered = hoveredPlatform === index;
            
            return (
              <div 
                key={index} 
                className="group"
                onMouseEnter={() => setHoveredPlatform(index)}
                onMouseLeave={() => setHoveredPlatform(null)}
              >
                {/* 平台卡片 */}
                <div className={`relative bg-white border rounded-xl p-4 transition-all duration-300 cursor-pointer ${
                  isHovered 
                    ? 'border-gray-300 shadow-md scale-105 -translate-y-1' 
                    : 'border-gray-100 hover:border-gray-200 hover:shadow-sm hover:scale-102'
                }`}>
                  <div className="text-center">
                    <div className={`text-2xl mb-2 transition-transform duration-300 ${
                      isHovered ? 'scale-110' : 'group-hover:scale-105'
                    }`}>
                      {platform.logo}
                    </div>
                    <div className={`font-medium text-sm leading-tight transition-colors duration-300 ${
                      isHovered ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                    }`}>
                      {platform.name}
                    </div>
                    <div className={`text-xs text-gray-500 mt-1 transition-all duration-300 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                    }`}>
                      {platform.category}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};