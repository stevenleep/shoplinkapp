import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Target, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    company: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理登录/注册逻辑
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* 左侧品牌区域 */}
      <div className="hidden lg:flex lg:w-1/2 bg-black text-white p-12 flex-col justify-between relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        
        <div className="relative">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 mb-16">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-medium">ShopLink</span>
          </Link>

          {/* 主要内容 */}
          <div>
            <h1 className="text-5xl font-extralight mb-8 leading-tight">
              让世界看见
              <br />
              您的优质产品
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
              加入1,200+成功品牌的行列，开启您的全球化之旅
            </p>

            {/* 特色功能 */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-gray-300">30天免费试用，无需信用卡</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-4 h-4" />
                </div>
                <span className="text-gray-300">专属成功经理1对1指导</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <span className="text-gray-300">5分钟快速上手，立即见效</span>
              </div>
            </div>
          </div>
        </div>

        {/* 底部统计 */}
        <div className="relative grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-2xl font-light mb-1">1,200+</div>
            <div className="text-sm text-gray-400">成功品牌</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light mb-1">68</div>
            <div className="text-sm text-gray-400">覆盖国家</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light mb-1">98.7%</div>
            <div className="text-sm text-gray-400">续费率</div>
          </div>
        </div>
      </div>

      {/* 右侧表单区域 */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* 返回按钮 */}
          <Link 
            to="/"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
            返回首页
          </Link>

          {/* 表单头部 */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              {isLogin ? '欢迎回来' : '开始您的出海之旅'}
            </h2>
            <p className="text-gray-600 font-light">
              {isLogin ? '登录您的ShopLink账户' : '创建您的免费账户'}
            </p>
          </div>

          {/* 表单 */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                    placeholder="请输入您的姓名"
                    required
                  />
                </div>

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
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                邮箱地址
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                  placeholder="请输入邮箱地址"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                密码
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                  placeholder="请输入密码"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  确认密码
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                    placeholder="请再次输入密码"
                    required
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-gray-600 focus:ring-gray-500" />
                  <span className="ml-2 text-sm text-gray-600">记住我</span>
                </label>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  忘记密码？
                </a>
              </div>
            )}

            <Button 
              variant="primary" 
              size="lg" 
              className="w-full bg-black text-white hover:bg-gray-800"
              showArrow
            >
              {isLogin ? '登录' : '创建账户'}
            </Button>
          </form>

          {/* 切换登录/注册 */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              {isLogin ? '还没有账户？' : '已有账户？'}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-gray-900 hover:text-black font-medium"
              >
                {isLogin ? '免费注册' : '立即登录'}
              </button>
            </p>
          </div>

          {/* 社交登录 */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">或者</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-200 rounded-xl bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                <span>微信登录</span>
              </button>
              <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-200 rounded-xl bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                <span>Google</span>
              </button>
            </div>
          </div>

          {/* 服务条款 */}
          {!isLogin && (
            <p className="mt-8 text-xs text-gray-500 text-center">
              注册即表示您同意我们的
              <a href="#" className="text-gray-700 hover:text-gray-900">服务条款</a>
              和
              <a href="#" className="text-gray-700 hover:text-gray-900">隐私政策</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};