import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ProductPage as ProductPageComponent } from '../components/ProductPage';
import { getProductBySlug } from '../data/products';

export const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/\" replace />;
  }
  
  const product = getProductBySlug(slug);
  
  if (!product) {
    return <Navigate to="/" replace />;
  }

  return <ProductPageComponent product={product} />;
};