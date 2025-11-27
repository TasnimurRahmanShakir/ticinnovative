import React from 'react'

export default function VideoGallery({ videos }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
            <div key={video.id} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-white/20 hover:border-primary/50 transition-colors">
                <div className="relative aspect-video w-full">
                    <iframe 
                        src={video.src} 
                        title={video.title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                
            </div>
        ))}
    </div>
  )
}
