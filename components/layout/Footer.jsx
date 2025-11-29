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
import Link from "next/link";

export default function Footer() {
  // Common class for links to ensure consistency
  const linkHoverClasses =
    "block transition-all duration-300 hover:text-primary hover:translate-x-2";

  const footerLinks = [
    { title: "About us", link: "/about" },
    { title: "Privacy Policy", link: "/privacy-policy" },
    { title: "Terms & Conditions", link: "/terms-conditions" },
    { title: "Refund and Returns Policy", link: "/refund-policy" },
    { title: "Our Sitemap", link: "/sitemap" },
    { title: "Reviews and Testimonials", link: "/#testimonials" },
  ];

  return (
    <footer className="bg-[#f9f9f9] relative z-10 text-gray-600 text-sm">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Contact Us */}
          <div className="space-y-6">
            <h3 className="text-gray-900 font-bold uppercase tracking-wide relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-primary after:mt-2">
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
            <Link
              href="https://wa.me/+17036091602"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactLabel icon={<FaPhoneAlt />} text="Hotline" />
              <p className="pl-1 mt-1">+1 703 609 1602</p>
            </Link>

            {/* Email */}
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@pakphire.com&su=Collaboration%20Opportunity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactLabel icon={<FaEnvelope />} text="Email" />
              <p className="pl-1 mt-1">info@pakphire.com</p>
            </Link>

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
            <h3 className="text-gray-900 font-bold uppercase tracking-wide relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-primary after:mt-2 mb-6">
              Payment Details
            </h3>
            {/* Applied hover effect here */}
            <p className={`cursor-pointer ${linkHoverClasses}`}>
              USA Bank Details
            </p>
          </div>

          {/* Column 3: Our Stores */}
          <div>
            <h3 className="text-gray-900 font-bold uppercase tracking-wide relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-primary after:mt-2 mb-6">
              Our Stores
            </h3>
            <ul className="space-y-3">
              {["Jamaica 1"].map((item) => (
                <li key={item}>
                  {/* Applied hover effect here */}
                  <Link
                    href="services/warehouse-support#jamaica-1"
                    className={linkHoverClasses}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Useful Links */}
          <div>
            <h3 className="text-gray-900 font-bold uppercase tracking-wide relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-primary after:mt-2 mb-6">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.title}>
                  {/* Applied hover effect here */}
                  <Link href={item.link} className={linkHoverClasses}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#111] text-[#999] py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center space-y-2">
          <p>Copyright © 2025 • Pakphire LLC • All Rights Reserved</p>
          <p>
            Website Design, Development & SEO Consulting Services by{" "}
            <a href="#" className="text-[#007bff] hover:underline">
              Jolforing Tourtainment
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
