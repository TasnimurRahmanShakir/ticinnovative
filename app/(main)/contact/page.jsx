"use client";

import React from "react";
import { Phone, Mail, Clock } from "lucide-react";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { sendEmail } from "@/app/actions/formAction";

export default function ContactPage() {
  const form = React.useRef();
  const [isPending, setIsPending] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    await sendEmail(form, "template_q8mqu1a");
    setIsPending(false);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Please fill out this form or shoot
            us an email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Form */}
          <div className="space-y-6">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-12 rounded transition-colors duration-200 disabled:opacity-50"
              >
                {isPending ? "Sending..." : "Send"}
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="space-y-8 text-gray-700">
            {/* Head Office */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">
                Head Office
              </h3>
              <p className="font-medium">Tic Innovative Inc</p>
              <p>Jamaica Branch</p>
              <p>Building Number :184 -04 Hillside Avenue ,</p>
              <p>City :- Jamaica, State : - NY, Post code :- 11432</p>
            </div>

            {/* Call Us */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
              <div className="flex items-center gap-2 text-blue-500 font-medium">
                <Phone className="w-5 h-5" />
                <a href="tel:+17036091602" className="hover:underline">
                  +1 703 609 1602
                </a>
              </div>
            </div>

            {/* Send Us Email */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">
                Send Us Email
              </h3>
              <div className="flex items-center gap-2 text-blue-500 font-medium">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@pakphire.com" className="hover:underline">
                  info@pakphire.com
                </a>
              </div>
            </div>

            {/* Open Time */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">
                Open Time:
              </h3>
              <div className="flex items-center gap-2 text-gray-800 text-lg">
                <Clock className="w-5 h-5" />
                <p>Sunday – Saturday (9AM – 9 PM)</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-4">
              <a
                href="#"
                className="bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-green-500 text-white p-3 rounded hover:bg-green-600 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-red-600 text-white p-3 rounded hover:bg-red-700 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-sky-500 text-white p-3 rounded hover:bg-sky-600 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-pink-600 text-white p-3 rounded hover:bg-pink-700 transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-red-500 text-white p-3 rounded hover:bg-red-600 transition-colors"
              >
                <FaPinterestP className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
