"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Banner = () => {
  const images = [
    "/images/banner/banner.png",
    "/images/banner/banner2.png",
    "/images/banner/banner3.png",
    "/images/banner/banner4.png",
    "/images/banner/banner5.png",
    // "/images/banner/banner2.png",
    // "/images/banner/banner2.png",
    // "/images/banner/banner2.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
        {/* COLUMN-1 */}
        <div className="mx-auto sm:mx-0">
          <div className="py-3 text-center lg:text-start">
            <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
              DESIGN AGENCY
            </button>
          </div>
          <div className="py-3 text-center lg:text-start">
            <h1
              className="text-6xl lg:text-80xl font-bold
             bg-gradient-to-r from-blue via-purple-500 to-[#F72C5B]
             text-transparent bg-clip-text
             bg-[length:200%_auto]
             animate-flowingGradient
             hover:scale-105 transition-transform duration-300
             cursor-pointer"
            >
              Dedicated to <br /> bring your <br /> ideas to life.
            </h1>

            <style jsx>{`
              @keyframes flowingGradient {
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
              .animate-flowingGradient {
                animation: flowingGradient 3s linear infinite;
              }
            `}</style>
          </div>
          <div className="my-7 text-center lg:text-start">
            <button className="text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-[#F72C5B]">
              Get Started
            </button>
          </div>
        </div>

        {/* COLUMN-2 */}
        <div className="lg:-m-24 lg:pt-20 hidden lg:block">
          <Image
            className="pt-20 rounded-2xl ml-20 bg-#EBEAFF transition-opacity duration-500"
            src={images[currentIndex]}
            alt="hero-image"
            width={500}
            height={450}
          />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 w-2 rounded-full transition-all duration-300 
                            ${
                              idx === currentIndex
                                ? "bg-blue w-4"
                                : "bg-gray-400"
                            }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
