"use client";

import React from "react";
import Image from "next/image";

export default function TermPage() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="bg-gradient-to-br from-[#F72C4B] to-[#8247A8] bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl p-8 lg:p-12 transform transition-all duration-500 hover:shadow-2xl hover:bg-white/20">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-white text-center">
            Terms & Conditions
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src="/images/term/term1.png"
              alt="Terms and Conditions Icon"
              width={250}
              height={250}
              className="cursor-pointer opacity-90 transform hover:scale-110 transition-all duration-500"
            />
          </div>

          <p className="mb-8 text-lg text-center font-semibold text-white">
            Effective Date: January 15, 2024
          </p>

          <div className="prose prose-lg prose-invert max-w-none space-y-12">
            <section className="transform transition-all duration-300 hover:translate-x-1">
              <p className="leading-relaxed text-white">
                Welcome to Hikvision Saudi. By accessing or using our website,
                products, and services, you agree to comply with and be bound by
                the following Terms and Conditions. Please review them carefully
                before using our website.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-x-1">
              <h2 className="text-2xl lg:text-3xl text-white font-semibold mb-6">
                1. Acceptance of Terms
              </h2>
              <p className=" leading-relaxed text-white">
                By using this website, you agree to these Terms and Conditions
                in full. If you do not agree with any part of these terms, you
                must not use this website or our services.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-x-1">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-white">
                2. Use of Website and Services
              </h2>
              <p className="text-white leading-relaxed mb-4">
                You agree to use our website and services only for lawful
                purposes. You must not:
              </p>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li>
                  Use our website in any way that violates any applicable local,
                  national, or international law.
                </li>
                <li>
                  Reproduce, duplicate, copy, sell, resell, or exploit any
                  portion of the website.
                </li>
                <li>
                  Transmit any harmful software or viruses that could damage our
                  website.
                </li>
              </ul>
            </section>

            <section className="transform transition-all duration-300 hover:translate-x-1">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-white">
                3. Intellectual Property
              </h2>
              <p className="text-white leading-relaxed">
                All content, trademarks, logos, and intellectual property
                displayed on this website are owned by or licensed to Hikvision
                Saudi.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-x-1">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-white">
                4. Privacy and Security
              </h2>
              <p className="text-white leading-relaxed">
                Your privacy is important to us. Please review our Privacy
                Policy to understand how we collect and use your information.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-x-1">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-white">
                5. Limitation of Liability
              </h2>
              <p className="text-white leading-relaxed">
                Hikvision Saudi shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages
                resulting from your use of our services.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-x-1">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-white">
                6. Contact Information
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                For any questions regarding these terms, please contact us at:
              </p>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
                <p className="font-semibold text-white">Hikvision Saudi</p>
                <p className="text-white/80">Phone: +966 [Phone Number]</p>
                <p className="text-white/80">Email: info@hikvision-saudi.com</p>
                <p className="text-white/80">
                  Website: www.hikvision-saudi.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
