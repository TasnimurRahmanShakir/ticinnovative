'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus } from 'react-icons/fa'
import { cn } from '@/lib/utils'

export function PhotoGrid({ images, onImageClick, aspectRatio = "aspect-square", columns = "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" }) {
    return (
        <div className={cn("grid gap-4", columns)}>
            {images.map((image) => (
                <motion.div 
                    key={image.id}
                    layoutId={`card-${image.id}`}
                    className={cn("relative cursor-pointer group overflow-hidden rounded-xl shadow-md bg-white", aspectRatio)}
                    onClick={() => onImageClick(image.id)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <FaSearchPlus className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 text-3xl" />
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export function Lightbox({ images, selectedId, onClose, onNext, onPrev }) {
    const currentIndex = images.findIndex(img => img.id === selectedId)
    
    // If selectedId is not found in images, don't render content (or handle gracefully)
    if (currentIndex === -1 && selectedId !== null) return null

    return (
        <AnimatePresence>
            {selectedId && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <button 
                        className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-60 cursor-pointer"
                        onClick={onClose}
                    >
                        <FaTimes size={30} />
                    </button>

                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-60 cursor-pointer hidden md:block"
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                    >
                        <FaChevronLeft size={30} />
                    </button>

                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-60 cursor-pointer hidden md:block"
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                    >
                        <FaChevronRight size={30} />
                    </button>

                    <motion.div
                        key={selectedId}
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
                            <div className="w-1/2 h-full" onClick={(e) => { e.stopPropagation(); onPrev(); }}></div>
                            <div className="w-1/2 h-full" onClick={(e) => { e.stopPropagation(); onNext(); }}></div>
                        </div>
                    </motion.div>
                    
                    <div className="absolute bottom-4 left-0 right-0 text-center text-white/80 text-sm">
                        Image {currentIndex + 1} of {images.length}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default function PhotoGallery({ images, aspectRatio = "aspect-square", columns = "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" }) {
    const [selectedId, setSelectedId] = useState(null)

    const openLightbox = (id) => setSelectedId(id)
    const closeLightbox = () => setSelectedId(null)

    const currentIndex = images.findIndex(img => img.id === selectedId)
    
    const nextImage = () => {
        const nextIndex = (currentIndex + 1) % images.length
        setSelectedId(images[nextIndex].id)
    }

    const prevImage = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length
        setSelectedId(images[prevIndex].id)
    }

    return (
        <>
            <PhotoGrid 
                images={images} 
                onImageClick={openLightbox} 
                aspectRatio={aspectRatio} 
                columns={columns} 
            />
            <Lightbox 
                images={images} 
                selectedId={selectedId} 
                onClose={closeLightbox} 
                onNext={nextImage} 
                onPrev={prevImage} 
            />
        </>
    )
}
