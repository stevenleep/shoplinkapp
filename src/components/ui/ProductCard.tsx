import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onProductClick?: (slug: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const handleClick = () => {
    if (onProductClick) {
      onProductClick(product.slug);
    }
  };

  return (
    <div 
      className="flex items-center justify-between py-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-all duration-200 px-4 -mx-4 rounded-lg cursor-pointer group"
      onClick={handleClick}
    >
      <div>
        <div className="flex items-center mb-1">
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-black transition-colors">
            {product.title}
          </h3>
          {product.isNew && (
            <span className="ml-2 bg-black text-white text-xs px-2 py-1 rounded-full animate-pulse">
              NEW
            </span>
          )}
        </div>
        <div className="text-sm text-gray-500 mb-1">{product.name}</div>
        <p className="text-gray-600 text-sm">{product.description}</p>
      </div>
      <div className="flex items-center text-gray-400 group-hover:text-gray-600 transition-colors">
        <span className="text-sm mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
          了解详情
        </span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};