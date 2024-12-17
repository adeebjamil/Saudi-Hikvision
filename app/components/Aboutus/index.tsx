import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
    url: string; // Add URL property
}

const Aboutdata: datatype[] = [
    {
        heading: "About us.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'For over 25 years, Hikvision-UAE has been providing top-tier Hikvision products and solutions across the UAE. We are committed to delivering advanced security solutions for both commercial and residential needs, tailored to the unique demands of the local market. More than just a supplier, we are a trusted partner, dedicated to ensuring safety with innovative technology that meets the security needs of the region.',
        link: 'Learn more',
        url: 'https://hikvision-uae.ae/about-us/' // Specific URL for "About us"
    },
    {
        heading: "Services.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'At Hikvision-UAE, we provide more than just products—we offer expert consultation, system installation, and ongoing support for tailored security solutions. Whether for commercial or residential use, our reliable services ensure your assets are protected with advanced surveillance and monitoring technologies.',
        link: 'Learn more',
        url: 'https://hikvision-uae.ae/services/' // Specific URL for "Services"
    },
    {
        heading: "Our Works.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Our energy solutions at Hikvision are designed for the future, offering significant cost reductions through efficient management and renewable energy, while supporting sustainability with environmentally conscious technologies. With customizable options tailored to your business needs, we help enhance your energy strategy, no matter the size or industry.',
        link: 'Learn more',
        url: 'https://hikvision-uae.ae/energy-solution/' // Specific URL for "Our Works"
    },
]

const Aboutus = () => {
    return (
        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>ABOUT US</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Know more about us.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-md font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href={item.url} className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Aboutus;