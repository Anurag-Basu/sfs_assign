import { Star } from "react-feather";
import { ProductsType } from "../../../types";
import { useState } from "react";
import { Button } from "antd";

interface Props {
  product: ProductsType;
}

const ProductCard = ({ product }: Props) => {
  const [isReadMode, setIsReadMode] = useState<boolean>(false);
  const id = product.id;

  return (
    <div className={`m-3 product-card ${isReadMode ? "h-auto" : ""}`} key={id}>
      <div className="title" title={product.title}>
        {product.title?.length > 45
          ? product.title.slice(0, 45) + "..."
          : product.title}
      </div>
      <img
        src={
          product.image ||
          "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80"
        }
        alt={product.category}
      />
      <div className="font-bold">
        ${product.price} {isReadMode && "yes"}
      </div>
      {product.rating && (
        <div className="flex mb-2">
          <div className="flex">
            <div className="flex p-1 text-white bg-green-700 rounded">
              {product.rating.rate} <Star size={20} className="m-auto ml-2" />
            </div>
          </div>
          <div className="m-auto text-gray-600">( {product.rating.count} )</div>
        </div>
      )}
      <div title={product.description} className={`description `}>
        {product.description.length > 160 && !isReadMode
          ? product.description.slice(0, 160) + "..."
          : product.description}
      </div>
      {product.description.length > 160 && (
        <Button type="primary" onClick={() => setIsReadMode((prev) => !prev)}>
          {isReadMode ? "Hide" : "Read More..."}
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
