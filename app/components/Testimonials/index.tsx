"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Robert Fox",
        profession: 'CEO, Parkview Int.Ltd',
        comment: '"Digital Link Technology exceeded our expectations with their CCTV installation services. The team was professional, efficient, and delivered a high-quality security solution tailored to our needs. We feel much safer knowing we have their systems in place. Highly recommended!',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Leslie Alexander",
        profession: 'CEO, Parkview Int.Ltd',
        comment: "The digital signage solutions provided by Digital Link Technology transformed our store's customer experience. The installation was seamless, and their support team was always available for any assistance. It's been a game-changer for us!",
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Cody Fisher",
        profession: 'CEO, Parkview Int.Ltd',
        comment: "From the initial consultation to the final setup, Digital Link Technology handled everything flawlessly. The AV systems they installed in our corporate offices have greatly improved our meeting and communication experience. Their solutions are both innovative and reliable."

,
        imgSrc: '/images/testimonial/user3.svg',
    },
    {
        name: "Robert Fox",
        profession: 'CEO, Parkview Int.Ltd',
        comment: "We partnered with Digital Link Technology for our structured cabling and access control systems. Their team provided excellent service from start to finish, delivering on time and within budget. Their professionalism and expertise truly set them apart.",
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Leslie Alexander",
        profession: 'CEO, Parkview Int.Ltd',
        comment: "We’ve been using Digital Link Technology for our ELV system needs for years, and they have never let us down. Their team is knowledgeable, responsive, and always provides top-notch service, whether it's installation or after-sales support. A trusted partner in every sense!",
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Cody Fisher",
        profession: 'CEO, Parkview Int.Ltd',
        comment: "We needed a comprehensive surveillance solution for our residential towers, and Digital Link Technology delivered beyond our expectations. Their expertise and attention to detail ensured a smooth and timely installation. The after-sales support has been excellent to",
        imgSrc: '/images/testimonial/user3.svg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                <div className="text-center">
    <h3 className="text-4xl sm:text-6xl font-bold my-3
                   bg-gradient-to-r from-[#9A78F6] to-[#B964F2]
                   text-transparent bg-clip-text
                   bg-[length:200%_auto]
                   animate-flowingGradient
                   hover:scale-105 transition-transform duration-300
                   cursor-pointer">
        See what others are saying.
    </h3>
    <h3 className="text-4xl sm:text-6xl font-bold opacity-50 lg:mr-48 my-4
                   bg-gradient-to-r from-[#9A78F6] to-[#B964F2]
                   text-transparent bg-clip-text
                   bg-[length:200%_auto]
                   animate-flowingGradient">
        See what others are saying.
    </h3>
    <h3 className="text-4xl sm:text-6xl font-bold opacity-25 lg:-mr-32 my-4
                   bg-gradient-to-r from-[#9A78F6] to-[#B964F2]
                   text-transparent bg-clip-text
                   bg-[length:200%_auto]
                   animate-flowingGradient">
        See what others are saying.
    </h3>

    <style jsx>{`
        @keyframes flowingGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .animate-flowingGradient {
            animation: flowingGradient 3s linear infinite;
        }
    `}</style>
</div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
