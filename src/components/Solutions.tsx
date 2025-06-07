import React from 'react';
import {
  Smartphone,
  Wifi,
  Target,
  Users,
  Zap,
  Shield,
  BarChart,
  Headphones,
} from 'lucide-react';

const solutions = [
  {
    icon: Smartphone,
    title: 'PWA应用转换',
    subtitle: '原生体验，无缝连接',
    features: [
      '一键将独立站转换为PWA应用',
      '支持桌面安装，提升用户粘性',
      '原生应用般的流畅体验',
      '跨平台兼容，覆盖所有设备',
    ],
    highlight: '让您的独立站住进用户的手机桌面',
  },
  {
    icon: Wifi,
    title: '离线触达系统',
    subtitle: '断网不断情，永远在线',
    features: [
      '智能缓存核心页面和产品信息',
      '离线状态下依然可以浏览和下单',
      '网络恢复时自动同步数据',
      '提升用户体验和转化率',
    ],
    highlight: '在没有网络的世界里，依然为用户点亮希望',
  },
  {
    icon: Target,
    title: '精准营销引擎',
    subtitle: '智能推送，精准触达',
    features: [
      '基于用户行为的智能推送',
      '多渠道营销自动化',
      'A/B测试优化转化路径',
      '实时数据分析和优化建议',
    ],
    highlight: '每一次推送都是一次心灵的轻声呼唤',
  },
  {
    icon: Users,
    title: '私域生态建设',
    subtitle: '培育社群，深耕关系',
    features: [
      '用户分层管理和精准运营',
      '社群互动和内容营销',
      '会员体系和忠诚度计划',
      '客户生命周期价值最大化',
    ],
    highlight: '种下一颗种子，收获一片忠诚的森林',
  },
];

const additionalServices = [
  {
    icon: Zap,
    title: '性能优化',
    description: '极致的加载速度和用户体验优化',
  },
  {
    icon: Shield,
    title: '安全防护',
    description: '企业级安全保障和数据隐私保护',
  },
  {
    icon: BarChart,
    title: '数据洞察',
    description: '深度数据分析和商业智能报告',
  },
  {
    icon: Headphones,
    title: '专属服务',
    description: '7×24小时技术支持和专属客服',
  },
];

const Solutions = () => {
  return (
    <section
      id="solution"
      className="py-16 px-6 bg-gradient-to-b from-gray-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 text-gray-600 text-sm font-light mb-12 tracking-wide">
            <Zap className="w-4 h-4 text-yellow-500" />
            解决方案
          </div>

          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 leading-tight tracking-tight">
            四大核心
            <span className=" bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
              全面赋能
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
            从技术架构到营销策略，从用户体验到数据洞察，
            <br />
            我们为您的独立站提供全方位、一站式的解决方案。
            <br />
            让每一个环节都成为增长的引擎。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-10 border border-gray-100/50 hover:bg-white hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-700 group-hover:scale-110">
                  <solution.icon className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors duration-700" />
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-wide">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-light tracking-widest uppercase">
                    {solution.subtitle}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-gray-600 font-light"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl">
                  <p className="text-gray-500 text-sm font-light italic text-center">
                    {solution.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-100/50">
          <h3 className="text-3xl font-light text-gray-900 mb-12 text-center tracking-wide">
            更多增值服务
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-500 group-hover:scale-110">
                  <service.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-500" />
                </div>
                <h4 className="font-light text-gray-900 mb-2 tracking-wide">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
