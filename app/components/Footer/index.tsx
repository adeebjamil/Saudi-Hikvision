import Image from "next/image";
import Link from "next/link";

const footer = () => {
  return (
    <div className="bg-gradient-to-br from-[#8247A8] to-[#F72C5B] -mt-10" id="first-section">
      <div className="mx-auto max-w-2xl pt-16 pb-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="col-span-6">
            <h3 className="text-white text-3xl font-semibold leading-9 mb-6">
              Desgy Solutions
            </h3>
            <div className="flex gap-4">
              {["facebook", "twitter", "instagram"].map((social) => (
                <Link
                  key={social}
                  href={`https://${social}.com`}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transform hover:scale-110 transition-all duration-300"
                >
                  <Image
                    src={`/images/footer/${social === "facebook" ? "vec" : social}.svg`}
                    alt={social}
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Menu Links */}
          <div className="group relative col-span-3">
            <p className="text-white text-lg font-bold mb-4">Menu</p>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 text-base hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Home</Link></li>
              <li><Link href="/#aboutus-section" className="text-white/70 text-base hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">About</Link></li>
              <li><Link href="/#services-section" className="text-white/70 text-base hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Services</Link></li>
              
            </ul>
          </div>

          {/* Support Links */}
          <div className="group relative col-span-3">
            <p className="text-white text-lg font-bold mb-4">Support</p>
            <ul className="space-y-3">
              <li><Link href="/#faq-section" className="text-white/70 text-base hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">FAQ</Link></li>
             
            </ul>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl border-t border-white/20">
        <div className="py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              @2024 - All Rights Reserved by Hikvision Saudi
              <Link href="https://hikvision-uae.ae" target="_blank" className="text-white hover:text-white/90 ml-1">
                Hikvision
              </Link>
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/policy" className="text-white/70 text-sm hover:text-white transition-all duration-300">
                Privacy policy
              </Link>
              <Link href="/Term" className="text-white/70 text-sm hover:text-white transition-all duration-300">
                Terms & conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;