'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart, FaChevronDown, FaEye } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import { products, categories } from '@/Constants/products'

export default function ProductListingPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [sortBy, setSortBy] = useState("Best Selling")

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Sticky Header: Categories & Sort */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Pills - Scrollable */}
          <div className="w-[calc(100%+2rem)] -mx-4 px-4 md:w-auto md:mx-0 md:px-0 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200",
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <span className="text-sm text-gray-500">Sort by:</span>
            <div className="relative group">
              <button className="flex items-center gap-2 text-sm font-medium text-gray-900 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                {sortBy}
                <FaChevronDown size={12} className="text-gray-500" />
              </button>
              {/* Dropdown Menu (Mock) */}
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                {["Best Selling", "Price: Low to High", "Price: High to Low", "Newest"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setSortBy(option)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </div>
  )
}

function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      
      {/* Image Container */}
      <div className="relative aspect-4/5 bg-[#f9fafb] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Sale Badge */}
        {product.isSale && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
            Sale
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">
        <h3 className="text-gray-900 font-medium text-sm md:text-base truncate mb-1" title={product.title}>
          {product.title}
        </h3>
        <p className="text-gray-900 font-bold text-lg mb-4">
          From ${product.price.toFixed(2)}
        </p>

        {/* Quick Add Button */}
        <div className="mt-auto">
            {/* Desktop: Hidden by default, visible on hover */}
            <button className="hidden md:flex w-full items-center justify-center bg-primary text-white font-semibold py-2.5 rounded-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary/90 shadow-md">
                View Details
            </button>

            {/* Mobile: Always visible (Cart Icon) */}
            <button className="md:hidden w-full flex items-center justify-center bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
                <FaEye size={16} className="mr-2" />
                Details
            </button>
        </div>
      </div>
    </Link>
  )
}
