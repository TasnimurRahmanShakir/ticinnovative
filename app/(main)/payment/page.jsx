import React from 'react'
import Image from 'next/image'

export default function Payment() {
  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        USA Bank Details
      </h1>

      {/* Citi Bank Card */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-8 mb-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <Image
            src="https://logo.clearbit.com/citi.com"
            alt="Citi Bank"
            width={240}
            height={128}
            className="w-48 md:w-64 h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-2 text-gray-700">
          <h2 className="text-xl font-bold text-gray-900 mb-2">CITI BANK</h2>
          <p>
            <span className="font-semibold">BANK NAME:</span> CITI BANK
          </p>
          <p>
            <span className="font-semibold">Account name :</span> Pakphire LLC
          </p>
          <p>
            <span className="font-semibold">Account number:</span> xxxx xxxx xxxx xxxx
          </p>
          <p>
            <span className="font-semibold">Routing Number:</span> 021000089
          </p>
          <p>
            <span className="font-semibold">Address.</span> 184-04 Hillside
            Avenue ,Jamaica, Ny,11432
          </p>
        </div>
      </div>

      {/* Other Payment Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Zelle */}
        <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-6 flex items-center gap-4">
          <Image
            src="https://logo.clearbit.com/zellepay.com"
            alt="Zelle"
            width={96}
            height={48}
            className="w-24 h-12 object-contain"
          />
          <div>
            <h3 className="font-bold text-gray-900">Zelle</h3>
            <p className="text-gray-600"> aasifomar@gmail.com</p>
          </div>
        </div>

        {/* Wise */}
        <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-6 flex items-center gap-4">
          <Image
            src="https://logo.clearbit.com/wise.com"
            alt="Wise"
            width={96}
            height={48}
            className="w-24 h-12 object-contain"
          />
          <div>
            <h3 className="font-bold text-gray-900">Wise</h3>
            <p className="text-gray-600"> aasifomar@gmail.com</p>
          </div>
        </div>

        {/* Payoneer */}
        <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-6 flex items-center gap-4">
          <Image
            src="https://logo.clearbit.com/payoneer.com"
            alt="Payoneer"
            width={96}
            height={48}
            className="w-24 h-12 object-contain"
          />
          <div>
            <h3 className="font-bold text-gray-900">Payoneer</h3>
            <p className="text-gray-600">aasifomar@gmail.com</p>
          </div>
        </div>

        {/* Paypal */}
        <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-6 flex items-center gap-4">
          <Image
            src="https://logo.clearbit.com/paypal.com"
            alt="Paypal"
            width={96}
            height={48}
            className="w-24 h-12 object-contain"
          />
          <div>
            <h3 className="font-bold text-gray-900">Paypal</h3>
            <p className="text-gray-600"> aasifomar@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
