"use client";
import React from "react";

import ContactLabel from "../UI/ContactLabel";
import SocialIcon from "../UI/SocialIcon";

import {
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  // Common class for links to ensure consistency
  const linkHoverClasses =
    "block transition-all duration-300 hover:text-[#f79420] hover:translate-x-2";

  return (
    <footer className="bg-[#f9f9f9] relative z-10 text-gray-600 text-sm">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Contact Us */}
          <div className="space-y-6">
            <h3 className="text-gray-900 font-bold uppercase tracking-wide relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#f79420] after:mt-2">
              Contact Us
            </h3>

            {/* Address */}
            <div>
              <ContactLabel icon={<FaHome />} text="Address" />
              <div className="pl-1 mt-2 leading-relaxed">
                <p className="font-medium text-gray-800">Pakphire</p>
                <p>Jamaica Branch</p>
                <p>Building Number: 184 -04 Hillside Avenue,</p>
                <p>City :- Jamaica, State :- NY, Post code :- 11432</p>
              </div>
            </div>

            {/* Hotline */}
            <div>
              <ContactLabel icon={<FaPhoneAlt />} text="Hotline" />
              <p className="pl-1 mt-1">+19296911930 , +19294998831</p>
            </div>

            {/* Email */}
            <div>
              <ContactLabel icon={<FaEnvelope />} text="Email" />
              <p className="pl-1 mt-1">support@pakphire.com</p>
            </div>

            {/* Open Time */}
            <div>
              <ContactLabel icon={<FaClock />} text="Open Time" />
              <p className="pl-1 mt-1">Sunday – Saturday (9AM – 9 PM)</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-2 pt-2">
              <SocialIcon color="bg-[#3b5998]" icon={<FaFacebookF />} />
              <SocialIcon color="bg-[#25D366]" icon={<FaWhatsapp />} />
              <SocialIcon color="bg-[#FF0000]" icon={<FaYoutube />} />
              <SocialIcon color="bg-[#1DA1F2]" icon={<FaTwitter />} />
              <SocialIcon color="bg-[#C13584]" icon={<FaInstagram />} />
              <SocialIcon color="bg-[#E60023]" icon={<FaPinterestP />} />
            </div>
          </div>

          {/* Column 2: Payment Details */}
          <div>
            <h3 className="text-gray-900 font-bold uppercase tracking-wide relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#f79420] after:mt-2 mb-6">
              Payment Details
            </h3>
            {/* Applied hover effect here */}
            <p className={`cursor-pointer ${linkHoverClasses}`}>
              USA Bank Details
            </p>
          </div>

          {/* Column 3: Our Stores */}
          <div>
            <h3 className="text-gray-900 font-bold uppercase tracking-wide relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#f79420] after:mt-2 mb-6">
              Our Stores
            </h3>
            <ul className="space-y-3">
              {["Jamaica 1", "Jamaica 2", "Richmond Hill", "New Jersey"].map(
                (item) => (
                  <li key={item}>
                    {/* Applied hover effect here */}
                    <a href="#" className={linkHoverClasses}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 4: Useful Links */}
          <div>
            <h3 className="text-gray-900 font-bold uppercase tracking-wide relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#f79420] after:mt-2 mb-6">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {[
                "About us",
                "Privacy Policy",
                "Terms & Conditions",
                "Refund and Returns Policy",
                "Our Sitemap",
                "Reviews and Testimonials",
              ].map((item) => (
                <li key={item}>
                  {/* Applied hover effect here */}
                  <a href="#" className={linkHoverClasses}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#111] text-[#999] py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center space-y-2">
          <p>Copyright © 2025 • TIC Accessories • All Rights Reserved</p>
          <p>
            Website Design, Development & SEO Consulting Services by{" "}
            <a href="#" className="text-[#007bff] hover:underline">
              Cyber World IT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
