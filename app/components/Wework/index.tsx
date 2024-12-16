"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'CEO Chief Operating Officer',
        name: 'Mashood M K',
        imgSrc: '/images/wework/avatar1.png',
    },
    {
        profession: 'Channel Accounts Manager',
        name: 'Zameel Sharaf',
        imgSrc: '/images/wework/avatar2.png',
    },
    {
        profession: 'Chief Sales Officer',
        name: 'Thashreef CK',
        imgSrc: '/images/wework/avatar3.png',
    },
    {
        profession: 'Service Center Manager',
        name: 'Shajid Seera Valappil',
        imgSrc: '/images/wework/avatar4.png',
    },
    {
        profession: 'HR & OPERATION',
        name: 'Althiya Titus',
        imgSrc: '/images/wework/avatar5.png',
    },
    {
        profession: 'Accountant',
        name: 'Mohammed Rasi',
        imgSrc: '/images/wework/avatar6.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
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
            <div className="bg-wework py-32">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>

                <div className="text-center">
    <h3 className="text-4xl sm:text-6xl font-bold
                   bg-gradient-to-r from-[#B964F2] to-[#F72C5B]
                   text-transparent bg-clip-text
                   bg-[length:200%_auto]
                   animate-flowingGradient
                   hover:scale-105 transition-transform duration-300
                   cursor-pointer">
        We work across multiple industries..
    </h3>
    <h3 className="text-4xl sm:text-6xl font-bold opacity-50 lg:mr-48 my-2
                   bg-gradient-to-r from-[#F72C5B] to-[#B964F2]
                   text-transparent bg-clip-text
                   bg-[length:200%_auto]
                   animate-flowingGradient">
        We work in several verticals.
    </h3>
    <h3 className="text-4xl sm:text-6xl font-bold opacity-25 lg:-mr-32 my-2
                   bg-gradient-to-r from-[#9A78F6] to-[#F72C5B]
                   text-transparent bg-clip-text
                   bg-[length:200%_auto]
                   animate-flowingGradient">
        We excel in various industries.
    </h3>
</div>

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

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl h-[450px]'>
                                <div className='relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={182} height={182} className="inline-block m-auto" />
                                    <Image src={'/images/wework/linkedin.svg'} alt="greenbg" width={120} height={120} className=" absolute inline-block position-linkedin" />
                                </div>
                                <h4 className='text-4xl font-bold pt-14'>{items.name}</h4>
                                <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.profession}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>

        );
    }
}
