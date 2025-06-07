import React from 'react';
import { Link, Mail, Globe, Heart, Compass } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center">
                <Link className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-extralight text-gray-900 tracking-wide">
                Shop<span className="font-normal">Link</span>
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md font-light text-lg mb-6">
              我们相信，每一个独立站都承载着创业者改变世界的梦想。
              让我们一起，用技术的力量点亮商业的未来。
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm font-light italic">
              <Heart className="w-4 h-4 text-red-400" />
              用心连接，让梦想发光
            </div>
          </div>

          <div>
            <h3 className="font-light text-gray-900 mb-6 text-lg tracking-wide flex items-center gap-2">
              <Compass className="w-4 h-4" />
              解决方案
            </h3>
            <ul className="space-y-3 text-gray-600 font-light">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-colors duration-300"
                >
                  PWA应用转换
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-colors duration-300"
                >
                  离线触达体验
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-colors duration-300"
                >
                  智能营销工具
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-colors duration-300"
                >
                  私域生态建设
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-colors duration-300"
                >
                  数据洞察分析
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-light text-gray-900 mb-6 text-lg tracking-wide">
              联系我们
            </h3>
            <div className="space-y-4 text-gray-600 font-light">
              <div className="flex items-center gap-3 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
                <Mail className="w-4 h-4" />
                <span>support@shoplinkapp.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4" />
                <span>全球服务，本地关怀</span>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-gray-400 text-sm font-light italic">
                "每一封邮件背后，
                <br />
                都是我们对您梦想的认真回应"
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-light">
              &copy; 2024 ShopLink. 让连接创造价值，让增长成为可能。
            </p>
            <p className="text-gray-400 text-sm font-light italic">
              Built with ❤️ for dreamers worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
