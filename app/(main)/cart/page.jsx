'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTrash, FaLock, FaArrowLeft, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa'
import { cn } from '@/lib/utils'

// Dummy data
const initialCartItems = [
    {
        id: 1,
        name: "Classic White T-Shirt",
        size: "M",
        color: "White",
        price: 25.00,
        quantity: 1,
        image: "/images/serviceOne.jpg" // Placeholder
    },
    {
        id: 2,
        name: "Denim Jeans",
        size: "32/30",
        color: "Blue",
        price: 60.00,
        quantity: 1,
        image: "/images/ServiceTwo.jpg" // Placeholder
    }
]

export default function CartPage() {
    const [cartItems, setCartItems] = useState(initialCartItems)

    const updateQuantity = (id, change) => {
        setCartItems(items => items.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(1, item.quantity + change)
                return { ...item, quantity: newQuantity }
            }
            return item
        }))
    }

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id))
    }

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const shipping = 5.00
    const taxes = 4.25
    const total = subtotal + shipping + taxes

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
                <p className="text-gray-600 mb-8">You have {cartItems.length} items in your cart.</p>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items List */}
                    <div className="flex-1 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6">
                                {/* Product Image */}
                                <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex-1 w-full text-center sm:text-left">
                                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                                    <p className="text-gray-500 text-sm mt-1">Size: {item.size}, Color: {item.color}</p>
                                </div>

                                {/* Quantity & Price Actions */}
                                <div className="flex items-center justify-between w-full sm:w-auto gap-6 sm:gap-8 mt-4 sm:mt-0">
                                    {/* Quantity Selector */}
                                    <div className="flex items-center bg-gray-100 rounded-lg">
                                        <button 
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-l-lg transition-colors"
                                            aria-label="Decrease quantity"
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center font-medium text-gray-900">{item.quantity}</span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-r-lg transition-colors"
                                            aria-label="Increase quantity"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Price */}
                                    <div className="text-lg font-bold text-gray-900 w-20 text-right">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>

                                    {/* Remove Button */}
                                    <button 
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 hover:text-red-700 transition-colors p-2"
                                        aria-label="Remove item"
                                    >
                                        <FaTrash size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}

                        <Link href="/products" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mt-6 transition-colors">
                            <FaArrowLeft className="mr-2" />
                            Continue Shopping
                        </Link>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-96">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                            
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="font-medium text-gray-900">${shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Taxes</span>
                                    <span className="font-medium text-gray-900">${taxes.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-4 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-gray-900">Total</span>
                                    <span className="text-xl font-bold text-gray-900">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 mb-6">
                                Proceed to Checkout
                                <FaLock size={16} />
                            </button>

                            <div className="text-center">
                                <p className="text-xs text-gray-500 mb-3">Accepted Payment Methods</p>
                                <div className="flex justify-center gap-3 text-gray-400">
                                    <FaCcVisa size={32} className="hover:text-[#1A1F71] transition-colors" />
                                    <FaCcMastercard size={32} className="hover:text-[#EB001B] transition-colors" />
                                    <FaCcPaypal size={32} className="hover:text-[#003087] transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
