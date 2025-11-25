'use client'

import React from 'react'
import { Input, Textarea } from '@/components/UI/Input'
import { submitWarehouseBooking } from '@/app/actions/delivery'

export default function WarehouseBooking() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Warehouse Details Table */}
          <div className="w-full lg:w-1/2">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-white p-4 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-800">Warehouse Details</h3>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/3 p-4 bg-gray-50 font-medium text-gray-700">Capacity</div>
                  <div className="w-full sm:w-2/3 p-4 text-gray-600">8,000 SFT (3 Racks, 1454 Spaces, Total 4363+ Racks)</div>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/3 p-4 bg-gray-50 font-medium text-gray-700">Rent</div>
                  <div className="w-full sm:w-2/3 p-4 text-gray-600">$1 per SFT</div>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/3 p-4 bg-gray-50 font-medium text-gray-700">Minimum Space to Rent</div>
                  <div className="w-full sm:w-2/3 p-4 text-gray-600">5.5 SFT (3 Racks)</div>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/3 p-4 bg-gray-50 font-medium text-gray-700">Custom Space</div>
                  <div className="w-full sm:w-2/3 p-4 text-gray-600">Available</div>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/3 p-4 bg-gray-50 font-medium text-gray-700">For our client (FBA & FBM)</div>
                  <div className="w-full sm:w-2/3 p-4 text-gray-600">5.5 SFT free allocation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Booking Form */}
          <div className="w-full lg:w-1/2">
            <form action={submitWarehouseBooking} className="space-y-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                    <Input name="name" placeholder="Name" type="text" className="bg-white border border-gray-300 focus:border-primary" required />
                </div>
                
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">WhatsApp <span className="text-red-500">*</span></label>
                    <Input name="whatsapp" placeholder="" type="text" className="bg-white border border-gray-300 focus:border-primary" required />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                    <Input name="email" placeholder="" type="email" className="bg-white border border-gray-300 focus:border-primary" required />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
                    <Input name="country" placeholder="" type="text" className="bg-white border border-gray-300 focus:border-primary" required />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Space Requirement <span className="text-red-500">*</span></label>
                    <Input 
                        name="spaceRequirement"
                        type="select" 
                        placeholder="- Please select -" 
                        options={['5.5 SFT', '10 SFT', '20 SFT', 'Custom']} 
                        className="bg-white border border-gray-300 focus:border-primary"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Note</label>
                    <Textarea name="note" placeholder="" className="bg-white border border-gray-300 focus:border-primary h-32" />
                </div>

                <button type="submit" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded transition-colors w-full sm:w-auto cursor-pointer">
                    Booking Now
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
