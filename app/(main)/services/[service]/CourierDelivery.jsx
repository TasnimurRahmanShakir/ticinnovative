'use client'

import React, {useState} from 'react'
import { deliveryHero, deliveryCategories, trackData } from '@/Constants/deliveryData'
import { cn } from '@/lib/utils'
import { Input } from '@/components/UI/Input'
import { submitDeliveryForm, submitBuyForm, submitShipForMeForm } from '@/app/actions/delivery'
import Link from 'next/link'
import Image from 'next/image'

export default function CourierDelivery() {
    const [deliveryType, setDeliveryType] = useState('ship');

    const handleDeliveryType = (type) => {
        setDeliveryType(type);
    }

  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${deliveryHero.image})` }}
            aria-hidden="true"
        >
            <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{deliveryHero.title}</h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">{deliveryHero.desc}</p>
            </div>

            {/* Right Form - Blurry Card */}
            <div className="w-full lg:w-[450px] backdrop-blur-md bg-white/50  rounded-2xl overflow-hidden shadow-2xl">
                <div className='flex w-full items-center justify-evenly bg-white'>
                    <button onClick={() => handleDeliveryType('ship')} className={cn(deliveryType === 'ship' ? 'bg-primary text-white' : 'hover:bg-gray-100 text-secondary', 'w-full px-4 py-3 transition-colors duration-200 font-medium cursor-pointer')}>Ship</button>
                    <button onClick={() => handleDeliveryType('shop')} className={cn(deliveryType === 'shop' ? 'bg-primary text-white' : 'hover:bg-gray-100 text-secondary', 'w-full px-4 py-3 transition-colors duration-200 font-medium cursor-pointer')}>Shop</button>
                    <button onClick={() => handleDeliveryType('track')} className={cn(deliveryType === 'track' ? 'bg-primary text-white' : 'hover:bg-gray-100 text-secondary', 'w-full px-4 py-3 transition-colors duration-200 font-medium cursor-pointer')}>Track</button>
                </div>

                <div className="p-6">
                    {deliveryType === 'ship' && <Delivery />}
                    {deliveryType === 'shop' && <Shop />}
                    {deliveryType === 'track' && <Track />}
                </div>
            </div>
        </div>
    </section>
  )
}


function Delivery() {
    return (
        <form action={submitDeliveryForm} className='flex flex-col gap-4'>
            <Input 
                name="senderAddress" 
                placeholder='Enter Sender Address' 
                type='text' 
                className=" focus:bg-white"
            />
            <Input 
                name="receiverAddress" 
                placeholder='Enter Receiver Address' 
                type='text' 
                className="focus:bg-white"
            />
            <Input 
                name="productType" 
                placeholder='Product Type' 
                type='select' 
                options={deliveryCategories} 
                className="focus:bg-white"
            />
           
            <Input 
                name="contactNumber" 
                placeholder="Whatsapp/ Contact Number" 
                type='text' 
                className=" focus:bg-white"
            />
            <Input 
                name="email" 
                placeholder="Email address" 
                type='email' 
                className=" focus:bg-white"
            />
            <button type="submit" className='bg-primary hover:bg-[#e0851d] text-white w-full px-4 py-3 cursor-pointer rounded-lg font-bold shadow-lg transition-all transform hover:scale-[1.02] mt-2'>Submit Request</button>
        </form>
    )
}

function Shop() {
    const [shopType, setShopType] = useState('buy');

    const handleShopType = (type) => {
        setShopType(type);
    }
    return (
        <div>
            <div className='flex w-full items-center justify-evenly border-b border-white/10'>
                <button onClick={() => handleShopType('buy')} className={cn(shopType === 'buy' ? 'bg-primary text-white' : 'hover:bg-gray-100 text-secondary', 'w-full px-4 py-3 transition-colors duration-200 font-medium cursor-pointer')}>Buy for me</button>
                <button onClick={() => handleShopType('ship')} className={cn(shopType === 'ship' ? 'bg-primary text-white' : 'hover:bg-gray-100 text-secondary', 'w-full px-4 py-3 transition-colors duration-200 font-medium cursor-pointer')}>Ship for me</button>
            </div>

            <div className="p-6">
                {shopType === 'buy' && <Buy />}
                {shopType === 'ship' && <ShipPlaceholder />}
            </div>
        </div>
    )
}


function Track() {
    
    return (
        <div className='flex flex-col gap-4 items-center justify-center'>
            <h1 className='text-2xl pb-10 text-secondary'>Track Your Package</h1>
            {trackData.map((item) => (
                <div key={item.id} className='bg-white py-2 rounded-xl flex items-center justify-around gap-2 w-full'>
                    <Image src={item.image} alt={item.name} width={50} height={50} className='w-10 h-10 rounded-full' />
                    <h3 className='text-secondary'>{item.name}</h3>
                    <Link href={item.href} target='_blank' rel='noopener noreferrer' className='bg-primary px-4 py-2 rounded-lg'>Track</Link>
                </div>
            ))}
        </div>
    )
}

function Buy() {
    return (
            <form action={submitBuyForm} className='flex flex-col gap-4'>
            <Input 
                name="productLink" 
                placeholder='Copy & paste your product link: https://www.amazon.com' 
                type='text' 
                className=" focus:bg-white"
            />
            <Input 
                name="contactNumber" 
                placeholder='Enter Contact Number' 
                type='text' 
                className="focus:bg-white"
            />
            
            <Input 
                name="email" 
                placeholder="Email address" 
                type='email' 
                className=" focus:bg-white"
            />
            <button type="submit" className='bg-primary hover:bg-[#e0851d] text-white w-full px-4 py-3 cursor-pointer rounded-lg font-bold shadow-lg transition-all transform hover:scale-[1.02] mt-2'>Submit Request</button>
        </form>
    )
}

function ShipPlaceholder() {
    return (
        <form action={submitShipForMeForm} className='flex flex-col gap-4'>
            <Input 
                name="address" 
                placeholder='Receiver Address' 
                type='text' 
                className=" focus:bg-white"
            />
            <Input 
                name="email" 
                placeholder="Receiver Email" 
                type='email' 
                className=" focus:bg-white"
            />
            <Input 
                name="contactNumber" 
                placeholder="Receiver WhatsApp/Phone number" 
                type='text' 
                className="focus:bg-white"
            />
            <Input 
                name="productType" 
                placeholder='Product Type' 
                type='select' 
                options={deliveryCategories} 
                className="focus:bg-white"
            />
            <button type="submit" className='bg-primary hover:bg-[#e0851d] text-white w-full px-4 py-3 cursor-pointer rounded-lg font-bold shadow-lg transition-all transform hover:scale-[1.02] mt-2'>Submit Request</button>
        </form>
    )
}
