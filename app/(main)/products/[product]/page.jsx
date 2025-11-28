"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaShoppingCart,
  FaArrowLeft,
  FaMinus,
  FaPlus,
  FaCheck,
} from "react-icons/fa";
import { products } from "@/Constants/products";
import { cn } from "@/lib/utils";

import { useAddToCart } from "@/lib/hooks/useAddToCart";

export default function ProductDetailsPage({ params }) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.product);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  // Use the mutation hook
  const { mutate, isLoading } = useAddToCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Standard");

  const sizes = ["Small", "Medium", "Large", "Extra Large"];

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    const productData = {
      productId: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      selectedSize,
      quantity,
    };

    // Call the mutation function
    // The optimistic update happens *before* the API call starts
    mutate(productData);
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-8"
              priority
            />
            {product.isSale && (
              <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                Sale
              </span>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 font-medium mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-3xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              {product.isSale && (
                <span className="text-lg text-gray-400 line-through">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="w-full h-px bg-gray-100 mb-8"></div>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                Select Size
              </h3>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "px-6 py-3 rounded-lg text-sm font-medium border transition-all duration-200",
                      selectedSize === size
                        ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                        : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              {/* Quantity */}
              <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200 w-fit">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-12 h-12 flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                  disabled={quantity <= 1}
                >
                  <FaMinus size={12} />
                </button>
                <span className="w-12 text-center font-bold text-gray-900 text-lg">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-12 h-12 flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                >
                  <FaPlus size={12} />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="flex-1 bg-primary text-white font-bold text-lg px-8 py-3 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>Processing...</>
                ) : (
                  <>
                    <FaShoppingCart />
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <FaCheck size={12} />
                </div>
                <span>In Stock & Ready to Ship</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <FaCheck size={12} />
                </div>
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
