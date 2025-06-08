import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, ChevronDown, Sparkles, Globe, Heart, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';
import { products } from '../data/products';

export const Header: React.FC = () => {
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showSolutionMenu, setShowSolutionMenu] = useState(false);
  
  const productMenuRef = useRef<HTMLDivElement>(null);
  const solutionMenuRef = useRef<HTMLDivElement>(null);
  const productTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const solutionTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const solutions = [
    { 
      name: "电商出海", 
      description: "完整的跨境电商解决方案", 
      href: "#ecommerce",
      icon: Globe,
      stats: "1,200+ 品牌选择"
    },
    { 
      name: "品牌营销", 
      description: "全球品牌推广策略", 
      href: "#branding",
      icon: Heart,
      stats: "387% 平均增长"
    },
    { 
      name: "数据分析", 
      description: "深度业务洞察分析", 
      href: "#analytics",
      icon: Target,
      stats: "实时数据监控"
    },
    { 
      name: "客户服务", 
      description: "多语言客户支持", 
      href: "#support",
      icon: Sparkles,
      stats: "24/7 专业支持"
    }
  ];


  // 产品菜单交互处理
  const handleProductMouseEnter = () => {
    if (productTimeoutRef.current) {
      clearTimeout(productTimeoutRef.current);
    }
    setShowProductMenu(true);
  };

  const handleProductMouseLeave = () => {
    productTimeoutRef.current = setTimeout(() => {
      setShowProductMenu(false);
    }, 150);
  };

  const handleProductMenuMouseEnter = () => {
    if (productTimeoutRef.current) {
      clearTimeout(productTimeoutRef.current);
    }
  };

  const handleProductMenuMouseLeave = () => {
    productTimeoutRef.current = setTimeout(() => {
      setShowProductMenu(false);
    }, 150);
  };

  // 解决方案菜单交互处理
  const handleSolutionMouseEnter = () => {
    if (solutionTimeoutRef.current) {
      clearTimeout(solutionTimeoutRef.current);
    }
    setShowSolutionMenu(true);
  };

  const handleSolutionMouseLeave = () => {
    solutionTimeoutRef.current = setTimeout(() => {
      setShowSolutionMenu(false);
    }, 150);
  };

  const handleSolutionMenuMouseEnter = () => {
    if (solutionTimeoutRef.current) {
      clearTimeout(solutionTimeoutRef.current);
    }
  };

  const handleSolutionMenuMouseLeave = () => {
    solutionTimeoutRef.current = setTimeout(() => {
      setShowSolutionMenu(false);
    }, 150);
  };

  // 清理定时器
  useEffect(() => {
    return () => {
      if (productTimeoutRef.current) {
        clearTimeout(productTimeoutRef.current);
      }
      if (solutionTimeoutRef.current) {
        clearTimeout(solutionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="py-6 px-6 sticky top-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo - 优化设计 */}
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-200">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-full h-full bg-green-500 rounded-full animate-ping"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-gray-900 group-hover:text-black transition-colors">
              Shoplink 
            </span>
            <span className="text-xs text-gray-500 font-medium leading-tight">
              跨境电商智慧营销方案
            </span>
          </div>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {/* 产品菜单 - 优化设计 */}
          <div 
            className="relative"
            onMouseEnter={handleProductMouseEnter}
            onMouseLeave={handleProductMouseLeave}
          >
            <button className="flex items-center px-5 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 group">
              <span className="font-medium">产品</span>
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${showProductMenu ? 'rotate-180' : ''}`} />
            </button>
            
            {showProductMenu && (
              <div 
                ref={productMenuRef}
                className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300"
                onMouseEnter={handleProductMenuMouseEnter}
                onMouseLeave={handleProductMenuMouseLeave}
              >
                {/* 菜单头部 - 优化设计 */}
                <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-5 border-b border-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">营销产品矩阵</h3>
                      <p className="text-sm text-gray-500 mt-1">完整的出海营销解决方案</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* 产品网格 - 优化设计 */}
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {products.map((product, index) => (
                      <Link
                        key={index}
                        to={`/product/${product.slug}`}
                        className="p-5 rounded-xl hover:bg-gray-50 cursor-pointer transition-all duration-200 group border border-transparent hover:border-gray-100"
                        onClick={() => setShowProductMenu(false)}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <h4 className="font-semibold text-gray-900 group-hover:text-black transition-colors">
                                {product.title}
                              </h4>
                              {product.isNew && (
                                <span className="ml-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-2 py-0.5 rounded-full font-medium animate-pulse">
                                  NEW
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-gray-500 mb-1 font-medium">
                              {product.name}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                        </div>
                        
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                          {product.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 菜单底部 - 优化设计 */}
                <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-4 border-t border-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">5个核心产品</span> • 覆盖完整营销链路
                    </div>
                    <button className="text-sm text-gray-900 hover:text-black font-semibold flex items-center group">
                      查看全部
                      <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 解决方案菜单 - 优化设计 */}
          <div 
            className="relative"
            onMouseEnter={handleSolutionMouseEnter}
            onMouseLeave={handleSolutionMouseLeave}
          >
            <button className="flex items-center px-5 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 group">
              <span className="font-medium">解决方案</span>
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${showSolutionMenu ? 'rotate-180' : ''}`} />
            </button>
            
            {showSolutionMenu && (
              <div 
                ref={solutionMenuRef}
                className="absolute top-full left-0 mt-2 w-[400px] bg-white rounded-2xl shadow-xl border border-gray-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300"
                onMouseEnter={handleSolutionMenuMouseEnter}
                onMouseLeave={handleSolutionMenuMouseLeave}
              >
                {/* 菜单头部 */}
                <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-5 border-b border-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">行业解决方案</h3>
                      <p className="text-sm text-gray-500 mt-1">针对不同行业的专业方案</p>
                    </div>
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* 解决方案列表 */}
                <div className="p-4">
                  {solutions.map((solution, index) => (
                    <a 
                      key={index}
                      href={solution.href}
                      className="flex items-start p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group border border-transparent hover:border-gray-100"
                    >
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-gray-200 transition-colors flex-shrink-0">
                        <solution.icon className="w-4 h-4 text-gray-700" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-black transition-colors">
                            {solution.name}
                          </h4>
                          <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-1">
                          {solution.description}
                        </p>
                        <div className="text-xs text-gray-500 font-medium">
                          {solution.stats}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* 菜单底部 */}
                <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-4 border-t border-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">专业咨询</span> • 1对1定制方案
                    </div>
                    <Link 
                      to="/contact"
                      className="text-sm text-gray-900 hover:text-black font-semibold flex items-center group"
                      onClick={() => setShowSolutionMenu(false)}
                    >
                      预约咨询
                      <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 其他导航项 - 优化设计 */}
          <Link 
            to="/pricing"
            className="px-5 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 font-medium"
          >
            价格
          </Link>
          <Link 
            to="/vision"
            className="px-5 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 font-medium"
          >
            愿景
          </Link>
          <Link 
            to="/about"
            className="px-5 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 font-medium"
          >
            关于
          </Link>
        </nav>

        {/* Action Buttons - 优化设计 */}
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button 
              variant="secondary" 
              size="md"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 border-0 bg-transparent font-medium"
            >
              登录
            </Button>
          </Link>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-black rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <Link to="/pricing">
              <Button 
                variant="primary" 
                size="md"
                className="relative transform hover:scale-105 transition-all duration-200 font-medium"
              >
                免费试用
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};