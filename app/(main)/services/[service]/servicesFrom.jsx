import Icons from '@/components/UI/Icons'
import React from 'react'
import { countryData } from '@/Constants/deliveryData'
import Image from 'next/image'

export default function ServicesFrom() {
  return (
      <div className='bg-accent'>
          <div className='container mx-auto px-4 py-12 text-center'>
              <h1 className='text-3xl mb-3'>Fast & Reliable Courier Services</h1>
              <p className='text-lg leading-relaxed mb-10'>Offering Delivery from Bangladesh, India, Pakistan, Mexico & Jamaica, NY</p>
          
              <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 justify-items-center'>
                  {countryData.map((country) => (
                      <CountryCard key={country.id} name={country.name} logo={country.logo} />
                  ))}
              </div>
          </div>
    </div>
  )
}


function CountryCard({name, logo}) {
    return (
        <div className='flex flex-col w-60 h-40 items-center justify-center border border-gray-200 bg-white shadow-lg rounded-xl gap-3 transition-transform hover:scale-105'>
            <div className="relative w-12 h-12">
                <Icons name="truck" className="h-8 w-8 text-primary" />
            </div>
            <div className='flex gap-2 items-center justify-center'>
                <Image src={logo} alt={name} width={20} height={10} className="object-contain" />
                <h1 className='font-semibold text-lg'>{name}</h1>
            </div>
        </div>
    )
}
