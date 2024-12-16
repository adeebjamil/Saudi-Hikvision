"use client";
import Image from "next/image";

const Dedicated = () => {
  return (
    <div className="relative">
      <Image
        src="/images/dedicated/spiral.svg"
        height={272}
        width={686}
        alt="spiral-design"
        className="absolute left-0 hidden lg:block -z-10"
      />

      <div className="mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 my-16">
          {/* COLUMN-1 */}
          <div>
            <Image
              src="/images/dedicated/man.png"
              alt="man-icon"
              width={416}
              height={530}
              className="mx-auto md:mx-0"
            />
          </div>

          {/* COLUMN-2 */}
          <div className="relative">
            <Image
              src="images/dedicated/comma.svg"
              alt="comma-image"
              width={200}
              height={106}
              className="absolute comma-pos hidden lg:block"
            />
            <h2
              className="text-6xl lg:text-80xl font-bold
             bg-gradient-to-r from-blue via-purple-500 to-[#F72C5B]
             text-transparent bg-clip-text
             bg-[length:200%_auto]
             animate-flowingGradient
             hover:scale-105 transition-transform duration-300
             cursor-pointer"
            >
              Transforming <br /> your vision into <br /> digital excellence.
            </h2>

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
            <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
              In today's digital age, the importance of a reliable, efficient,
              and user-friendly website cannot be overstated. At Digitallink,
              we've been proud to embark on our digital journey. Our aim has
              always been to provide our visitors with not just information, but
              an experience. An experience that is seamless, intuitive, and
              reflective of the quality we stand for.
            </p>
            <p className="text-2xl font-semibold mt-12 lg:ml-32  text-center lg:text-start">
              {" "}
              Abdul Gafoor, CEO & FOUNDER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dedicated;
