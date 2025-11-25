'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus } from 'react-icons/fa'

// Generate image paths
const images = Array.from({ length: 31 }, (_, i) => ({
    id: i + 1,
    src: `/warehouse/warehoue-${i + 1}.jpg`,
    alt: `Warehouse Image ${i + 1}`
}))

export default function WarehouseGallery() {
    const [selectedId, setSelectedId] = useState(null)

    const openLightbox = (id) => setSelectedId(id)
    const closeLightbox = () => setSelectedId(null)

    const currentIndex = images.findIndex(img => img.id === selectedId)
    
    const nextImage = (e) => {
        e.stopPropagation()
        const nextIndex = (currentIndex + 1) % images.length
        setSelectedId(images[nextIndex].id)
    }

    const prevImage = (e) => {
        e.stopPropagation()
        const prevIndex = (currentIndex - 1 + images.length) % images.length
        setSelectedId(images[prevIndex].id)
    }

    return (
        <section className="py-16 bg-accent">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Warehouse Gallery</h2>
                
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {images.map((image) => (
                        <motion.div 
                            key={image.id}
                            layoutId={`card-${image.id}`}
                            className="relative break-inside-avoid mb-4 cursor-pointer group overflow-hidden rounded-xl shadow-md bg-white"
                            onClick={() => openLightbox(image.id)}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={0}
                                height={0}
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                <FaSearchPlus className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 text-3xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        onClick={closeLightbox}
                    >
                        <button 
                            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50 cursor-pointer"
                            onClick={closeLightbox}
                        >
                            <FaTimes size={30} />
                        </button>

                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-50 cursor-pointer hidden md:block"
                            onClick={prevImage}
                        >
                            <FaChevronLeft size={30} />
                        </button>

                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-50 cursor-pointer hidden md:block"
                            onClick={nextImage}
                        >
                            <FaChevronRight size={30} />
                        </button>

                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="relative w-full max-w-5xl max-h-[85vh] aspect-4/3 md:aspect-video rounded-lg overflow-hidden bg-black"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={images[currentIndex].src}
                                alt={images[currentIndex].alt}
                                fill
                                className="object-contain"
                                priority
                            />
                            
                            {/* Mobile Navigation Overlay */}
                            <div className="absolute inset-0 flex md:hidden">
                                <div className="w-1/2 h-full" onClick={prevImage}></div>
                                <div className="w-1/2 h-full" onClick={nextImage}></div>
                            </div>
                        </motion.div>
                        
                        <div className="absolute bottom-4 left-0 right-0 text-center text-white/80 text-sm">
                            Image {currentIndex + 1} of {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
