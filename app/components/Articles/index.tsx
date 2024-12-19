"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  time: string;
  heading: string;
  heading2: string;
  date: string;
  imgSrc: string;
  name: string;
}

const postData = [
  {
    time: "5 min",
    heading: "Security Solutions by Hikvision UAE",
    heading2: "Latest Technology",
    name: "By Digitechtalk",
    date: "NOV 12 2023",
    imgSrc: "/images/updated/Hikvision-1.jpg",
    blogUrl:
      "https://digitechtalk.com/2024/11/12/security-solutions-by-hikvision-uae/",
  },
  {
    time: "10 min",
    heading: "Another Blog Post",
    heading2: "Second Post",
    name: "By Digitechtalk",
    date: "NOV 13 2023",
    imgSrc: "/images/updated/Hikvision-2.jpg",
    blogUrl: "https://digitechtalk.com/2024/11/13/gitex-2024/",
  },
  {
    time: "7 min",
    heading: "Third Blog Post",
    heading2: "Third Post",
    name: "By Digitechtalk",
    date: "NOV 14 2023",
    imgSrc: "/images/articles/article3.png",
    blogUrl: "https://digitechtalk.com/2024/11/14/third-blog-post/",
  },
];

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
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="bg-lightgrey py-20" id="blog-section">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h3
              className="text-4xl sm:text-6xl font-bold my-2
                   bg-gradient-to-r from-[#F72C5B] to-[#B964F2]
                   text-transparent bg-clip-text
                   bg-[length:200%_auto]
                   animate-flowingGradient
                   hover:scale-105 transition-transform duration-300
                   cursor-pointer"
            >
              ARTICLES
            </h3>
            <h3
              className="text-4xl sm:text-6xl font-bold opacity-50 lg:mr-48 my-2
                   bg-gradient-to-r from-[#9A78F6] to-[#F72C5B]
                   text-transparent bg-clip-text
                   bg-[length:200%_auto]
                   animate-flowingGradient pl-12 ml-32 cursor-pointer"
            >
              Our latest post.
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

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative h-[100px]">
                  <Image
                    src={items.imgSrc}
                    alt="gaby"
                    width={389}
                    height={262}
                    className="inline-block m-auto rounded-2xl"
                  />

                  <Link
                    href={items.blogUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img">
                      {items.time} read
                    </h3>
                  </Link>

                  <h4 className="text-2xl font-bold pt-6 text-black">
                    {items.heading}
                  </h4>
                  <h4 className="text-2xl font-bold pt-1 text-black">
                    {items.heading2}
                  </h4>
                  <div>
                    <h3 className="text-base font-normal pt-6 pb-2 opacity-75">
                      {items.name}
                    </h3>
                    <h3 className="text-base font-normal pb-1 opacity-75">
                      {items.date}
                    </h3>
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
