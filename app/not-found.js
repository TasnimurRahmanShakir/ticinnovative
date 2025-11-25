'use client' 

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoArrowBack, IoHome } from "react-icons/io5";

export default function NotFound() {
    const pathname = usePathname(); 

    // 4. Dynamic Logic
    let title = "Page Not Found";
    let description = "The page you are looking for might have been moved or deleted.";

    if (pathname.includes("/services/")) {
        title = "Service Not Found";
        description = "We could not find the specific service details you requested. Please check the URL or view our available services.";
    }


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4 font-sans">

            {/* Logo */}
            <div className="mb-8">
                <Link href="/">
                    <Image
                        src="/logo.jpg"
                        alt="PakPhire Logo"
                        width={180}
                        height={60}
                        className="h-16 w-auto object-contain"
                    />
                </Link>
            </div>

            {/* Visual Error */}
            <div className="relative mb-4">
                <h1 className="text-[10rem] font-black text-[#e3ebf5] leading-none select-none">
                    404
                </h1>
                <div className="absolute -bottom-3  flex flex-col items-center justify-center">
                    {/* 5. Render Dynamic Title */}
                    <h2 className="text-3xl md:text-4xl pt-10 font-bold text-blue-900 drop-shadow-sm">
                        {title}
                    </h2>
                </div>
            </div>

            {/* 6. Render Dynamic Description */}
            <p className="text-gray-500 max-w-md mx-auto mb-10 text-lg leading-relaxed">
                {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-all"
                >
                    <IoArrowBack size={18} />
                    Go Back
                </button>

                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-orange-500 text-white font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all"
                >
                    <IoHome size={18} />
                    Back to Home
                </Link>
            </div>

            {/* Footer Line */}
            <div className="fixed bottom-0 w-full h-1 bg-linear-to-r from-blue-900 via-red-600 to-orange-500"></div>
        </div>
    );
}