import React from 'react';
import { ValueProposition } from '../../types';

interface ValueCardProps {
  value: ValueProposition;
}

export const ValueCard: React.FC<ValueCardProps> = ({ value }) => {
  return (
    <div className="text-center group">
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-200">
        <value.icon className="w-6 h-6 text-gray-900" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-3">{value.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {value.description}
      </p>
      <div className="text-sm text-gray-500 font-medium">{value.stat}</div>
    </div>
  );
};