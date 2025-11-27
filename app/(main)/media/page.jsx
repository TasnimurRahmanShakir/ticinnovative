import React from 'react'
import SectionHeading from '@/components/UI/SectionHeading'
import PhotoGallery from '@/components/UI/PhotoGallery'
import VideoGallery from '@/components/UI/VideoGallery'

// Dummy data for demonstration
const storePhotos = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    src: `/images/serviceOne.jpg`, // Using existing image as placeholder
    alt: `Store Photo ${i + 1}`
}))

const promoPhotos = Array.from({ length: 4 }, (_, i) => ({
    id: i + 100, // Ensure unique IDs if mixed, though separate galleries handle their own state
    src: `/images/ServiceTwo.jpg`, // Using existing image as placeholder
    alt: `Promo Photo ${i + 1}`
}))

const videos = [
    { id: 1, src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Service Video 1" },
    { id: 2, src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Service Video 2" },
    { id: 3, src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Service Video 3" },
]

export default function Media() {
  return (
    <div className="min-h-screen">
       
        {/* Store & Service Photos - White Background */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionHeading title="Store & Service Photos" />
                <PhotoGallery images={storePhotos} />
            </div>
        </section>

        {/* Promotional Design Photos - Gray/Different Background */}
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionHeading title="Promotional Design Photos" />
                <PhotoGallery images={promoPhotos} aspectRatio="aspect-[4/5]" />
            </div>
        </section>

        {/* Store & Service Videos - Background Image */}
        <section className="py-20 relative">
             <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
                style={{ backgroundImage: "url('/images/heroBackgroundImage.webp')" }}
                aria-hidden="true"
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="container mx-auto px-4">
                <SectionHeading title="Store & Service Videos" textColor="text-white" />
                <VideoGallery videos={videos} />
            </div>
        </section>

    </div>
  )
}
