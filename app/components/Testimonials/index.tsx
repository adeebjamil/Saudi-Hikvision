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
        name: "Mohammed Al-Faisal",
        profession: 'Retail Manager, Parkview Int.Ltd',
        comment: "Hikvision-Saudi has been a game changer for our retail business. Their customized surveillance solutions have significantly improved our store's security. The installation was seamless, and their ongoing support gives us peace of mind. Highly recommended!",
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Sara Al-Salem",
        profession: 'IT Director',
        comment: "As a company, we rely on Hikvision-Saudi for advanced security technology across our multiple offices. Their solutions are highly efficient, and the customer service is exceptional. The installation process was quick, and their support team is always responsive.",
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Ahmed Al-Rashid",
        profession: 'CEO, Parkview Int.Ltd',
        comment: "From the initial consultation to the final setup, Digital Link Technology handled everything flawlessly. The AV systems they installed in our corporate offices have greatly improved our meeting and communication experience. Their solutions are both innovative and reliable.",
        imgSrc: '/images/testimonial/user3.svg',
    },
    {
        name: "Faisal Al-Muhanna",
        profession: 'Facility Manager',
        comment: "Hikvision-Saudi provided us with a tailored security solution that perfectly matched our needs. Their team was professional and knowledgeable, ensuring the entire system was up and running smoothly. We’ve seen a marked improvement in safety and security across our facilities.",
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Laila Al-Saud",
        profession: 'Hotel Manager',
        comment: "We chose Hikvision-Saudi for our hotel's security system, and we couldn’t be happier. The quality of the cameras and monitoring technology is excellent, and their customer service team is always available to address any concerns. Our guests’ safety is now more assured than ever",
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Yousef Al-Qassim",
        profession: 'Business Owner',
        comment: "Hikvision-Saudi's security solutions have greatly improved our business operations with reliable surveillance and monitoring. Their attention to detail and prompt support made the installation process smooth, and we’ve experienced enhanced security and peace of mind since implementing their system.",
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
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl h-[350px]'>
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