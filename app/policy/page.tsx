'use client'

import React from 'react';
import Image from 'next/image';

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#F72C5B] to-[#8247A8] bg-white rounded-3xl shadow-xl p-8 lg:p-12 transform transition-all duration-500 hover:shadow-2xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 bg-white text-transparent bg-clip-text animate-gradient text-center">
            Privacy Policy
          </h1>
          {/* SVG Image */}
          <div className="flex justify-center mb-12">
            <Image
              src="/images/term/policy02.png"
              alt="Privacy Policy Icon"
              width={250}
              height={250}
              className="cursor-pointer opacity-80 transform hover:scale-110 transition-all duration-500"
            />
          </div>

          
          <p className="text-gray-600 mb-8 text-lg text-center font-semibold text-white"> 
            Effective Date: January 15, 2024
          </p>

          <div className="prose prose-lg max-w-none space-y-12">
            <section className="transform transition-all duration-300 hover:translate-x-1">
              <p className="text-gray-600 leading-relaxed text-white">
                At Hikvision Saudi, we are committed to protecting the privacy and security of our customers, 
                website visitors, and partners. This Privacy Policy outlines how we collect, use, and safeguard 
                your personal information when you interact with our website or services.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-x-1">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-white">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-white">
                We may collect personal information directly from you or through automated means, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 text-white">
                <li>Personal Identification Information: Name, email address, phone number, and mailing address</li>
                <li>Technical Information: IP address, browser type, device information, and browsing patterns</li>
                <li>Transactional Information: Payment details, product purchase history, and service preferences</li>
              </ul>
            </section>

            <section className="transform transition-all duration-300 hover:translate-x-1">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-white">
                2. How We Use Your Information
              </h2>
              <p className="text-white leading-relaxed mb-4">
                Your information helps us to:
              </p>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li>Process your transactions and provide requested services</li>
                <li>Improve our website functionality and user experience</li>
                <li>Send you important updates about our products and services</li>
                <li>Respond to your inquiries and provide customer support</li>
              </ul>
            </section>

            <section className="transform transition-all duration-300 hover:translate-x-1">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-white">
                3. Information Security
              </h2>
              <p className="text-white leading-relaxed">
                We implement appropriate security measures to protect your personal information 
                from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-x-1">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-white">
                4. Your Rights
              </h2>
              <p className="text-white leading-relaxed">
                You have the right to access, correct, or delete your personal information. 
                You may also opt-out of marketing communications at any time.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-x-1">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-[#ffffff]">
                5. Contact Us
              </h2>
              <p className="text-white leading-relaxed mb-4">
                If you have any questions or concerns regarding this Privacy Policy, please reach out to us at:
              </p>
              <div className=" p-6 rounded-xl">
                <p className="font-semibold text-white">Hikvision Saudi</p>
                <p className="text-white">Phone: +966 [Phone Number]</p>
                <p className="text-white">Email: info@hikvision-saudi.com</p>
                <p className="text-white">Website: www.hikvision-saudi.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
      `}</style>
    </div>
  );
}