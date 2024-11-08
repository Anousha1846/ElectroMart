"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import "./product.css";
import p1 from "../../../public/images/p1.webp";
import p2 from "../../../public/images/p2.jpeg";
import p3 from "../../../public/images/p3.webp";
import p4 from "../../../public/images/p4.jpeg";
import p5 from "../../../public/images/p5.jpg";
import p6 from "../../../public/images/p6.jpg";
import p7 from "../../../public/images/p7.webp";
import p8 from "../../../public/images/p8.webp";
import p9 from "../../../public/images/p9.jpeg";
import p10 from "../../../public/images/p10.jpeg";
import p11 from "../../../public/images/p11.webp";
import p12 from "../../../public/images/p12.jpeg";

interface Product {
  id: number;
  name: string;
  price: number;
  image: StaticImageData | string; 
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Double Door Refrigerator",
    price: 199.99,
    image: p1,
    description: "Double Door Refrigerator",
  },
  { id: 2, name: "Oven", price: 299.99, image: p2, description: "Oven" },
  {
    id: 3,
    name: "3 in 1 juicer",
    price: 399.99,
    image: p3,
    description: "3 in 1 juicer",
  },
  {
    id: 4,
    name: "Washing Machine",
    price: 499.99,
    image: p4,
    description: "Washing Machine",
  },
  {
    id: 5,
    name: "Refrigerator",
    price: 599.99,
    image: p5,
    description: "Refrigerator",
  },
  {
    id: 6,
    name: "Microwave",
    price: 699.99,
    image: p6,
    description: "Microwave",
  },
  {
    id: 7,
    name: "Wasing Machine",
    price: 799.99,
    image: p7,
    description: "Wasing Machine",
  },
  {
    id: 8,
    name: "Golden Refrigerator",
    price: 899.99,
    image: p8,
    description: "Golden Refrigerator",
  },
  { id: 9, name: "Chopper", price: 999.99, image: p9, description: "Chopper" },
  { id: 10, name: "Iron", price: 99.99, image: p10, description: "Iron" },
  {
    id: 11,
    name: "Electric Stove",
    price: 869.99,
    image: p11,
    description: "Electric Stove",
  },
  {
    id: 12,
    name: "Vacuum Cleaner",
    price: 129.99,
    image: p12,
    description: "Vacuum Cleaner",
  },
];

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelectProduct = (id: number) => {
    const product = products.find((product) => product.id === id);
    if (product) {
      setSelectedProduct(product);
    }
  };

  const goBack = () => setSelectedProduct(null);

  return (
    <div className="container">
      {!selectedProduct ? (
        <div className="product-list">
          {products.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => handleSelectProduct(product.id)}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="product-detail">
          <button onClick={goBack}>Back to List</button>
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            width={500}
            height={350}
          />
          <h2>{selectedProduct.name}</h2>
          <p>${selectedProduct.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
