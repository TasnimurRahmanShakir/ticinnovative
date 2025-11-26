'use client'

import React, {useState, useActionState} from 'react'
import { deliveryHero, deliveryCategories, trackData, deliveryService } from '@/Constants/deliveryData'
import { cn } from '@/lib/utils'
import { Input } from '@/components/UI/Input'
import { submitDeliveryForm, submitBuyForm, submitShipForMeForm } from '@/app/actions/delivery'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCard from '@/components/UI/ServiceCard'
import ServicesFrom from './servicesFrom'
import GetStartedToday from '@/components/GetStartedToday'

export default function CourierDelivery() {
    const [deliveryType, setDeliveryType] = useState('ship');

    const handleDeliveryType = (type) => {
        setDeliveryType(type);
    }

  return (
      <>
      <div className="relative w-full min-h-[600px] flex items-center justify-center text-white overflow-hidden">
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
          
          
    </div>
        <ServiceCard
          items={deliveryService}
          align="md:flex-row"
          image="/images/delivery.webp"
          />

          <ServicesFrom />

          <div className='container mx-auto py-12 text-center'>
              <h1 className='text-3xl mb-3'>Pickup & Drop-off Locations</h1>
              <p className='text-lg'>Easily send and receive packages through our trusted access points.</p>
              <div className="w-full md:w-[80%] mx-auto mt-8 rounded-lg overflow-hidden flex items-center justify-center    ">
                <Image
                    src="/images/pickup-drop-location.webp"
                    alt="Pickup & Drop-off Locations"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto "
                />
                </div>
          </div>

          <GetStartedToday />
      </>
  )
}


function Delivery() {
    const [state, formAction, isPending] = useActionState(submitDeliveryForm, { success: false, errors: {} })
    return (
        <>
        {state?.success && (
            <div className="bg-green-50 text-green-700 p-4 rounded-md border border-green-200 mb-4">
                {state.message}
            </div>
        )}
        <form action={formAction} className='flex flex-col gap-4'>
            <div>
                <Input 
                    name="senderAddress" 
                    placeholder='Enter Sender Address' 
                    type='text' 
                    defaultValue={state?.data?.senderAddress}
                    className={`focus:bg-white ${state?.errors?.senderAddress ? 'border-red-500' : ''}`}
                />
                {state?.errors?.senderAddress && <p className="text-red-500 text-sm mt-1">{state.errors.senderAddress}</p>}
            </div>
            <div>
                <Input 
                    name="receiverAddress" 
                    placeholder='Enter Receiver Address' 
                    type='text' 
                    defaultValue={state?.data?.receiverAddress}
                    className={`focus:bg-white ${state?.errors?.receiverAddress ? 'border-red-500' : ''}`}
                />
                {state?.errors?.receiverAddress && <p className="text-red-500 text-sm mt-1">{state.errors.receiverAddress}</p>}
            </div>
            <div>
                <Input 
                    name="productType" 
                    placeholder='Product Type' 
                    type='select' 
                    options={deliveryCategories} 
                    defaultValue={state?.data?.productType}
                    className={`focus:bg-white ${state?.errors?.productType ? 'border-red-500' : ''}`}
                />
                {state?.errors?.productType && <p className="text-red-500 text-sm mt-1">{state.errors.productType}</p>}
            </div>
           
            <div>
                <Input 
                    name="contactNumber" 
                    placeholder="Whatsapp/ Contact Number" 
                    type='text' 
                    defaultValue={state?.data?.contactNumber}
                    className={`focus:bg-white ${state?.errors?.contactNumber ? 'border-red-500' : ''}`}
                />
                {state?.errors?.contactNumber && <p className="text-red-500 text-sm mt-1">{state.errors.contactNumber}</p>}
            </div>
            <div>
                <Input 
                    name="email" 
                    placeholder="Email address" 
                    type='email' 
                    defaultValue={state?.data?.email}
                    className={`focus:bg-white ${state?.errors?.email ? 'border-red-500' : ''}`}
                />
                {state?.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
            </div>
            <button type="submit" disabled={isPending} className='bg-primary hover:bg-[#e0851d] text-white w-full px-4 py-3 cursor-pointer rounded-lg font-bold shadow-lg transition-all transform hover:scale-[1.02] mt-2 disabled:opacity-50'>
                {isPending ? 'Submitting...' : 'Submit Request'}
            </button>
        </form>
        </>
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
    const [state, formAction, isPending] = useActionState(submitBuyForm, { success: false, errors: {} })
    return (
        <>
        {state?.success && (
            <div className="bg-green-50 text-green-700 p-4 rounded-md border border-green-200 mb-4">
                {state.message}
            </div>
        )}
            <form action={formAction} className='flex flex-col gap-4'>
            <div>
                <Input 
                    name="productLink" 
                    placeholder='Copy & paste your product link: https://www.amazon.com' 
                    type='text' 
                    defaultValue={state?.data?.productLink}
                    className={`focus:bg-white ${state?.errors?.productLink ? 'border-red-500' : ''}`}
                />
                {state?.errors?.productLink && <p className="text-red-500 text-sm mt-1">{state.errors.productLink}</p>}
            </div>
            <div>
                <Input 
                    name="contactNumber" 
                    placeholder='Enter Contact Number' 
                    type='text' 
                    defaultValue={state?.data?.contactNumber}
                    className={`focus:bg-white ${state?.errors?.contactNumber ? 'border-red-500' : ''}`}
                />
                {state?.errors?.contactNumber && <p className="text-red-500 text-sm mt-1">{state.errors.contactNumber}</p>}
            </div>
            
            <div>
                <Input 
                    name="email" 
                    placeholder="Email address" 
                    type='email' 
                    defaultValue={state?.data?.email}
                    className={`focus:bg-white ${state?.errors?.email ? 'border-red-500' : ''}`}
                />
                {state?.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
            </div>
            <button type="submit" disabled={isPending} className='bg-primary hover:bg-[#e0851d] text-white w-full px-4 py-3 cursor-pointer rounded-lg font-bold shadow-lg transition-all transform hover:scale-[1.02] mt-2 disabled:opacity-50'>
                {isPending ? 'Submitting...' : 'Submit Request'}
            </button>
        </form>
        </>
    )
}

function ShipPlaceholder() {
    const [state, formAction, isPending] = useActionState(submitShipForMeForm, { success: false, errors: {} })
    return (
        <>
        {state?.success && (
            <div className="bg-green-50 text-green-700 p-4 rounded-md border border-green-200 mb-4">
                {state.message}
            </div>
        )}
        <form action={formAction} className='flex flex-col gap-4'>
            <div>
                <Input 
                    name="address" 
                    placeholder='Receiver Address' 
                    type='text' 
                    defaultValue={state?.data?.address}
                    className={`focus:bg-white ${state?.errors?.address ? 'border-red-500' : ''}`}
                />
                {state?.errors?.address && <p className="text-red-500 text-sm mt-1">{state.errors.address}</p>}
            </div>
            <div>
                <Input 
                    name="email" 
                    placeholder="Receiver Email" 
                    type='email' 
                    defaultValue={state?.data?.email}
                    className={`focus:bg-white ${state?.errors?.email ? 'border-red-500' : ''}`}
                />
                {state?.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
            </div>
            <div>
                <Input 
                    name="contactNumber" 
                    placeholder="Receiver WhatsApp/Phone number" 
                    type='text' 
                    defaultValue={state?.data?.contactNumber}
                    className={`focus:bg-white ${state?.errors?.contactNumber ? 'border-red-500' : ''}`}
                />
                {state?.errors?.contactNumber && <p className="text-red-500 text-sm mt-1">{state.errors.contactNumber}</p>}
            </div>
            <div>
                <Input 
                    name="productType" 
                    placeholder='Product Type' 
                    type='select' 
                    options={deliveryCategories} 
                    defaultValue={state?.data?.productType}
                    className={`focus:bg-white ${state?.errors?.productType ? 'border-red-500' : ''}`}
                />
                {state?.errors?.productType && <p className="text-red-500 text-sm mt-1">{state.errors.productType}</p>}
            </div>
            <button type="submit" disabled={isPending} className='bg-primary hover:bg-[#e0851d] text-white w-full px-4 py-3 cursor-pointer rounded-lg font-bold shadow-lg transition-all transform hover:scale-[1.02] mt-2 disabled:opacity-50'>
                {isPending ? 'Submitting...' : 'Submit Request'}
            </button>
        </form>
        </>
    )
}
