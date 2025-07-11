import React from 'react';
import MainCard from "../../formcomponents/MainCard";
import ProductInfoFields from "./ProductInfoFields";

const ProductInfo: React.FC = () => {
  return (
    <MainCard
      title="Product Information"
    >
      <ProductInfoFields />
    </MainCard>
  );
};

export default ProductInfo;
