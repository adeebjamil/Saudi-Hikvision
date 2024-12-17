"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    heading: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        heading: 'IT & AI Solutions.',
        imgSrc: '/images/featured/feat4.jpg',
    },
    {
        heading: 'System integrations.',
        imgSrc: '/images/featured/feat3.jpg',
    },
    {
        heading: 'Audio & Visual Solution.',
        imgSrc: '/images/featured/feat5.jpg',
    },
    {
        heading: 'Surveillance Solutions.',
        imgSrc: '/images/featured/feat6.png',
    }
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            speed: 500,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 800,
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
            <div className="bg-bgblue py-20 marginFeature bg-featured">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center pt-48 pb-10 md:pt-96">
                    <h3 className="text-4xl sm:text-6xl font-bold my-2
                   bg-gradient-to-r from-[#9A78F6] to-[#B964F2]
                   text-transparent bg-clip-text
                   bg-[length:200%_auto]
                   animate-flowingGradient
                   hover:scale-105 transition-transform duration-300
                   cursor-pointer">
        Featured works.
    </h3>
    <h3 className="text-4xl sm:text-6xl font-bold opacity-50 lg:mr-48 my-2
                   bg-gradient-to-r from-[#9A78F6] to-[#B964F2]
                   text-transparent bg-clip-text
                   bg-[length:200%_auto]
                   animate-flowingGradient">
        Featured works.
    </h3>
    <h3 className="text-4xl sm:text-6xl font-bold opacity-25 lg:-mr-32 my-2
                   bg-gradient-to-r from-[#9A78F6] to-[#B964F2]
                   text-transparent bg-clip-text
                   bg-[length:200%_auto]
                   animate-flowingGradient">
        Featured works.
    </h3>
                    </div>
                    

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='bg-transparent m-3 pb-12 my-10 rounded-3xl h-full'>
                                    <Image  src={items.imgSrc} alt="gaby" width={636} height={600} className="rounded-2xl w-[500px] h-[450px]" />
                                    <div className="w-345">
                                        <h4 className='sm:text-5xl font-bold sm:pt-6 text-center sm:text-start mt-10 text-white'>{items.heading}</h4>
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
