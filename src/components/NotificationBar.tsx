import React from 'react';
import { X } from 'lucide-react';
import { NotificationBarProps } from '../types';

export const NotificationBar: React.FC<NotificationBarProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="bg-black text-white py-3 px-6 relative animate-in slide-in-from-top duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm">
          🎉 ShopLink.AI 正式上线 - AI 驱动的智能营销助手
        </span>
      </div>
      <button 
        onClick={onClose}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};