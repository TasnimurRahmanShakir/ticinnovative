import HeroSection from '@/components/HeroSection'
import React from 'react'
import { warehouseLocations } from '@/Constants/warehouseData'
import Image from 'next/image'
import WarehouseBooking from './WarehouseBooking'
import PhotoGallery from '@/components/UI/PhotoGallery'
import SectionHeading from '@/components/UI/SectionHeading'

// Generate image paths
const images = Array.from({ length: 31 }, (_, i) => ({
    id: i + 1,
    src: `/warehouse/warehoue-${i + 1}.jpg`,
    alt: `Warehouse Image ${i + 1}`
}))

export default function WarehouseSupport() {
  return (
    <>
      <HeroSection
        title="Expert Warehouse & 3PL Support"
        desc="Your trusted partner for FBA Prep, FBM, and carton handling. We provide seamless logistics solutions to save you time and reduce costs."
        image="/images/warehouse-support.png"
        buttonText="Get a Quote"
        buttonLink="/contact"
      />
      <section id="jamaica-1" className="container mx-auto py-12 w-full px-4">
        <h1 className="text-3xl py-6 text-center font-bold mb-8">
          Warehouse & Store Address
        </h1>

        <div className="flex flex-wrap justify-center gap-8 w-full">
          {warehouseLocations.map((location) => (
            <div key={location.id} className="w-full md:max-w-[80%]">
              <LocationCard location={location} />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Warehouse Gallery" />
          <PhotoGallery images={images} />
        </div>
      </section>
      <WarehouseBooking />
    </>
  );
}

function LocationCard({ location }) {
    return (
        <div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
            <div className='p-6'>
                <h2 className='text-2xl font-bold mb-2 text-gray-800'>{location.title}</h2>
                <p className='text-gray-600 mb-4'>{location.address}</p>
            </div>
            <div className='relative w-full h-[400px] bg-gray-200'>
                <iframe 
                    src={location.mapUrl}
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location.title} Map`}
                ></iframe>
            </div>
        </div>
    )
}
