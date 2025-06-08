import React, { useState } from 'react';
import { Check, Star, ArrowRight, Zap, Shield, Users, Mail, Target, BarChart3, Globe, Smartphone, Settings, Database, Lock, Crown, Cpu, TrendingUp, MessageSquare, UserCheck, Megaphone, Eye, Filter, Send, Bot, Layers, Workflow, PieChart, Gauge, Wifi, Truck, Repeat, Bell, Headphones } from 'lucide-react';
import { Button } from './ui/Button';

const plans = [
  {
    name: "创业版",
    price: 199,
    originalPrice: 299,
    description: "适合初创品牌和小型团队",
    highlight: "性价比高",
    features: [
      { name: "邮件营销系统 (5,000联系人)", icon: Mail },
      { name: "用户获取工具 (PWA应用)", icon: Target },
      { name: "营销数据分析 (行为追踪)", icon: BarChart3 },
      { name: "全球用户推送 (1,000次/月)", icon: Bell },
      { name: "营销自动化 (邮件序列)", icon: Workflow },
      { name: "新品预热营销", icon: Megaphone },
      { name: "多语言营销支持 (3种)", icon: Globe },
      { name: "指定地区的CDN加速", icon: Wifi },
      { name: "基础用户分群", icon: Filter },
      { name: "A/B 营销测试", icon: TrendingUp },
      { name: "营销模板库 (20+)", icon: Settings },
      { name: "营销表单构建", icon: Database },
      { name: "移动端营销优化", icon: Smartphone },
      { name: "基础客户管理", icon: UserCheck },
      { name: "营销邮件编辑器", icon: Settings },
      { name: "标准客服支持", icon: Headphones }
    ],
    isPopular: false
  },
  {
    name: "成长版", 
    price: 599,
    originalPrice: 899,
    description: "适合快速发展的中型企业",
    highlight: "最受欢迎",
    features: [
      { name: "高级邮件营销 (50,000联系人)", icon: Mail },
      { name: "智能广告投放 (多平台)", icon: Target },
      { name: "深度数据分析 (用户画像)", icon: BarChart3 },
      { name: "全球用户推送 (10,000次/月)", icon: Bell },
      { name: "AI营销助手 (智能优化)", icon: Bot },
      { name: "会员营销系统 (积分体系)", icon: Crown },
      { name: "智能新品预热营销", icon: Repeat },
      { name: "多语言营销 (10种)", icon: Globe },
      { name: "全球CDN加速", icon: Wifi },
      { name: "行为触发营销", icon: Megaphone },
      { name: "高级 A/B 营销测试", icon: TrendingUp },
      { name: "营销 API 集成", icon: Database },
      { name: "高级营销模板 (100+)", icon: Settings },
      { name: "客户关系管理", icon: Database },
      { name: "营销效果追踪", icon: Eye },
      { name: "数据合规保障 (GDPR)", icon: Shield },
      { name: "专属营销顾问", icon: Crown }
    ],
    isPopular: true
  },
  {
    name: "企业版",
    price: null,
    originalPrice: "",
    description: "适合大型企业和集团公司",
    highlight: "无限可能",
    features: [
      { name: "企业级邮件营销 (无限联系人)", icon: Mail },
      { name: "全渠道广告投放 (全球策略)", icon: Target },
      { name: "360度数据分析 (商业智能)", icon: BarChart3 },
      { name: "无限全球用户推送", icon: Bell },
      { name: "企业级AI助手 (定制模型)", icon: Bot },
      { name: "全球化营销 (50+语言)", icon: Globe },
      { name: "高级新品预热营销", icon: Repeat },
      { name: "全球CDN + 私有节点", icon: Wifi },
      { name: "专属营销团队", icon: Users },
      { name: "企业级营销自动化", icon: Workflow },
      { name: "定制营销模板开发", icon: Settings },
      { name: "企业级客户管理", icon: Database },
      { name: "定制化营销开发", icon: Settings },
      { name: "专属营销服务器", icon: Database },
      { name: "24/7 营销技术支持", icon: Shield },
      { name: "高级数据安全保障", icon: Lock },
      { name: "企业级 SLA", icon: Crown },
      { name: "白标营销解决方案", icon: Settings },
      { name: "私有化部署选项", icon: Database },
      { name: "全面合规保障 (GDPR/SOC2)", icon: Shield },
      { name: "营销策略咨询", icon: MessageSquare },
      { name: "出海营销指导", icon: Globe }
    ],
    isPopular: false
  }
];

const addOns = [
  {
    name: "AI 营销助手",
    price: 199,
    description: "24小时智能营销优化",
    icon: Bot
  },
  {
    name: "营销合规包",
    price: 399,
    description: "GDPR/SOC2 合规保障",
    icon: Shield
  },
  {
    name: "营销专家培训",
    price: 999,
    description: "1对1营销策略指导",
    icon: Users,
    isOneTime: true
  },
  {
    name: "出海营销咨询",
    price: 1999,
    description: "全球化营销战略咨询",
    icon: Globe,
    isOneTime: true
  }
];

export const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedFeatures, setExpandedFeatures] = useState<{[key: string]: boolean}>({});
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const getPrice = (basePrice: number | null) => {
    if (basePrice === null) return "定制";
    const price = billingCycle === 'yearly' ? Math.round(basePrice * 0.8) : basePrice;
    return `¥${price}`;
  };

  const getOriginalPrice = (originalPrice: number | null) => {
    if (!originalPrice) return "";
    const price = billingCycle === 'yearly' ? Math.round(originalPrice * 0.8) : originalPrice;
    return `¥${originalPrice}`;
  };

  const getAddonPrice = (basePrice: number, isOneTime: boolean = false) => {
    if (isOneTime) return `¥${basePrice}/次`;
    const price = billingCycle === 'yearly' ? Math.round(basePrice * 0.8) : basePrice;
    return `¥${price}/月`;
  };

  const toggleFeatureExpansion = (planIndex: number) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [planIndex]: !prev[planIndex]
    }));
  };

  const handlePlanClick = (planIndex: number) => {
    // 选中新版本时，其他版本自动收起
    if (selectedPlan !== planIndex) {
      setExpandedFeatures({});
    }
    setSelectedPlan(selectedPlan === planIndex ? null : planIndex);
  };

  return (
    <section id="pricing" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          {/* 限时优惠 - 移到最上方 */}
          <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-8">
            🎉 限时优惠：新用户首月5折
          </div>
          
          <h2 className="text-6xl md:text-6xl font-medium text-gray-900 mb-8 leading-tight">
            选择适合您的营销方案
          </h2>
          <p className="text-xl text-gray-400 font-light mb-12">
            专业营销工具 + 数据分析 + 用户获取，一站式出海营销解决方案
          </p>
          
          {/* 计费周期切换 */}
          <div className="inline-flex items-center bg-white rounded-full p-1 border border-gray-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              按月付费
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              按年付费
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                省20%
              </span>
            </button>
          </div>
        </div>

        {/* 价格卡片 */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const isExpanded = expandedFeatures[index];
            const isSelected = selectedPlan === index;
            
            return (
              <div 
                key={index} 
                className={`relative bg-white rounded-3xl border-2 transition-all duration-300 cursor-pointer ${
                  plan.isPopular 
                    ? 'border-black shadow-2xl scale-105 lg:scale-110' 
                    : isSelected
                    ? 'border-black shadow-xl scale-102'
                    : 'border-gray-100 hover:border-gray-200 hover:shadow-lg'
                }`}
                onClick={() => handlePlanClick(index)}
              >
                {/* 热门标签 */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-black text-white px-6 py-2 rounded-full text-sm flex items-center font-medium">
                      <Star className="w-4 h-4 mr-2" />
                      {plan.highlight}
                    </div>
                  </div>
                )}
                
                {/* 性价比高标签 */}
                {!plan.isPopular && plan.highlight === "性价比高" && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-600 text-white px-6 py-2 rounded-full text-sm flex items-center font-medium">
                      <Zap className="w-4 h-4 mr-2" />
                      {plan.highlight}
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  {/* 方案头部 */}
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">
                      {plan.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                    
                    {/* 价格 */}
                    <div className="mb-8">
                      {plan.originalPrice && (
                        <div className="text-sm text-gray-400 line-through mb-1">
                          原价 {getOriginalPrice(plan.originalPrice)}
                        </div>
                      )}
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-extralight text-gray-900">
                          {getPrice(plan.price)}
                        </span>
                        {plan.price && (
                          <span className="text-gray-500 ml-1 font-light">/月</span>
                        )}
                      </div>
                      {billingCycle === 'yearly' && plan.price && (
                        <div className="text-sm text-green-600 mt-2 font-medium">
                          年付可省 ¥{Math.round(plan.price * 12 * 0.2)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 功能列表 - 统一样式 */}
                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
                      <Layers className="w-4 h-4 mr-2 text-gray-600" />
                      功能特性
                      <span className="ml-2 text-xs text-gray-500">({plan.features.length}项)</span>
                    </h4>
                    
                    <div className="space-y-2">
                      {(isExpanded ? plan.features : plan.features.slice(0, 6)).map((feature, featureIndex) => (
                        <div key={featureIndex} className="group relative">
                          <div className="flex items-center p-2 rounded-lg transition-all duration-200 hover:bg-gray-50">
                            <div className="w-6 h-6 rounded-lg flex items-center justify-center mr-3 transition-all duration-200 flex-shrink-0 bg-gray-100 group-hover:bg-gray-200">
                              <feature.icon className="w-3 h-3 text-gray-600" />
                            </div>
                            <span className="text-gray-700 font-light text-sm flex-1">{feature.name}</span>
                            <Check className="w-3 h-3 text-green-500 transition-all duration-200 opacity-0 group-hover:opacity-100" />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* 展开/收起按钮 */}
                    {plan.features.length > 6 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFeatureExpansion(index);
                        }}
                        className="w-full mt-4 py-2 text-sm transition-all duration-200 flex items-center justify-center text-gray-500 hover:text-gray-700"
                      >
                        {isExpanded ? '收起功能' : `查看全部 ${plan.features.length} 项功能`}
                        <ArrowRight className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          isExpanded ? 'rotate-90' : ''
                        }`} />
                      </button>
                    )}
                  </div>

                  {/* 行动按钮 */}
                  <Button 
                    variant={plan.isPopular || isSelected ? "primary" : "secondary"} 
                    size="lg" 
                    className={`w-full transition-all duration-300 ${
                      isSelected
                        ? 'bg-black text-white hover:bg-gray-800'
                        : plan.isPopular 
                        ? 'shadow-lg hover:shadow-xl' 
                        : ''
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {isSelected 
                      ? "已选择 - 开始试用" 
                      : plan.price === null 
                      ? "联系营销专家" 
                      : "开始免费试用"
                    }
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 增值服务 */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-gray-900 mb-2">
              营销增值服务
            </h3>
            <p className="text-gray-500 text-sm font-light">
              专业营销服务，让成功更有保障
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors flex-shrink-0">
                    <addon.icon className="w-4 h-4 text-gray-700" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm truncate group-hover:text-black transition-colors">{addon.name}</h4>
                    <p className="text-gray-500 text-xs font-light truncate">{addon.description}</p>
                    <div className="text-sm text-gray-700 mt-1 font-medium">
                      {getAddonPrice(addon.price, addon.isOneTime)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 对比表格 */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100">
          <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">
            核心营销功能对比
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-4 text-gray-600 font-medium">核心营销能力</th>
                  <th className="text-center py-4 text-gray-600 font-medium">创业版</th>
                  <th className="text-center py-4 text-gray-600 font-medium">成长版</th>
                  <th className="text-center py-4 text-gray-600 font-medium">企业版</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-700 font-medium">邮件营销能力</td>
                  <td className="text-center py-4">5,000联系人</td>
                  <td className="text-center py-4">50,000联系人 + AI优化</td>
                  <td className="text-center py-4">无限制 + 白标定制</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-700 font-medium">用户获取工具</td>
                  <td className="text-center py-4">PWA + 社交媒体</td>
                  <td className="text-center py-4">智能广告投放</td>
                  <td className="text-center py-4">全渠道获客 + 策略咨询</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-700 font-medium">数据分析能力</td>
                  <td className="text-center py-4">基础行为分析</td>
                  <td className="text-center py-4">用户画像 + 预测分析</td>
                  <td className="text-center py-4">360度分析 + 商业智能</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-700 font-medium">AI 营销助手</td>
                  <td className="text-center py-4">-</td>
                  <td className="text-center py-4">智能优化</td>
                  <td className="text-center py-4">定制模型 + 策略规划</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-700 font-medium">会员营销系统</td>
                  <td className="text-center py-4">基础客户管理</td>
                  <td className="text-center py-4">积分体系 + 生命周期</td>
                  <td className="text-center py-4">全球化会员体系</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-700 font-medium">全球用户推送</td>
                  <td className="text-center py-4">1,000次/月</td>
                  <td className="text-center py-4">10,000次/月</td>
                  <td className="text-center py-4">无限制</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-700 font-medium">新品预热营销</td>
                  <td className="text-center py-4">基础预热</td>
                  <td className="text-center py-4">智能预热</td>
                  <td className="text-center py-4">高级预热 + 策略</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-700 font-medium">全球CDN加速</td>
                  <td className="text-center py-4">指定地区CDN</td>
                  <td className="text-center py-4">标准CDN</td>
                  <td className="text-center py-4">CDN + 私有节点</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-700 font-medium">营销自动化</td>
                  <td className="text-center py-4">邮件序列</td>
                  <td className="text-center py-4">多渠道自动化</td>
                  <td className="text-center py-4">企业级自动化</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-700 font-medium">全球化营销</td>
                  <td className="text-center py-4">3种语言</td>
                  <td className="text-center py-4">10种语言</td>
                  <td className="text-center py-4">50+语言 + 本地化策略</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-700 font-medium">数据合规保障</td>
                  <td className="text-center py-4">-</td>
                  <td className="text-center py-4">GDPR + SOC2</td>
                  <td className="text-center py-4">GDPR + SOC2</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-700 font-medium">专业服务支持</td>
                  <td className="text-center py-4">标准支持</td>
                  <td className="text-center py-4">专属营销顾问</td>
                  <td className="text-center py-4">专属营销团队</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};