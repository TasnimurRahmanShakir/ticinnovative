"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4 text-center font-sans">
      

      {/* 404 Text */}
      <h1 className="text-8xl font-black text-blue-900 mb-2 tracking-tighter opacity-10 select-none">
        404
      </h1>

      {/* Message relative to 'Services' */}
      <div className="-mt-12 relative z-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Service Not Found
        </h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8 text-lg">
          We couldn&apos;t find the service details you requested. It might be
          unavailable or the ID is incorrect.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Go Back
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 shadow-lg shadow-orange-200 transition-all flex items-center justify-center gap-2"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
