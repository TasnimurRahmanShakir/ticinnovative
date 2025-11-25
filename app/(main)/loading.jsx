import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white z-50">
      <div className="relative flex flex-col items-center">
        {/* Animated Outer Ring (Brand Colors) */}
        <div className="absolute inset-0 -m-8 rounded-full border-4 border-transparent border-t-blue-900 border-r-red-600 border-b-orange-500 animate-spin opacity-20"></div>

        {/* Logo Container with Pulse */}
        <div className="relative animate-pulse">
          <Image
            src="/logo.jpg" // Ensure this file is in your public folder
            alt="PakPhire Loading"
            width={180}
            height={60}
            className="object-contain h-16 w-auto"
            priority
          />
        </div>

        {/* Loading Text */}
        <div className="mt-8 flex items-center space-x-2">
          <div className="h-2 w-2 bg-blue-900 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-2 w-2 bg-red-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-2 w-2 bg-orange-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
