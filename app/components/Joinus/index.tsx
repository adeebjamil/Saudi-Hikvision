"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Join = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '';

    if (form.current) {
      emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        userId
      )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  };

  return (
    <div className="bg-joinus my-32">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h3
            className="text-lg font-normal tracking-widest
               bg-gradient-to-r from-[#9A78F6] to-[#B964F2]
               text-transparent bg-clip-text
               bg-[length:200%_auto]
               animate-flowingGradient
               hover:scale-105 transition-transform duration-300"
          >
            JOIN US
          </h3>
          <h2
            className="text-4xl sm:text-6xl font-bold my-6 leading-10
               bg-gradient-to-r from-[#9A78F6] to-[#B964F2]
               text-transparent bg-clip-text
               bg-[length:200%_auto]
               animate-flowingGradient
               hover:scale-105 transition-transform duration-300
               cursor-pointer"
          >
            Connect Your Business <br /> with Hikvision Saudi
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
          <p className="text-lightblack text-base font-normal">
            Are you passionate about security and innovation? <br />
            At Hikvision UAE, we are always on the lookout for skilled individuals who share our commitment <br />
            to providing world-class video surveillance, access control, and security solutions. Whether you’re an experienced professional or just starting out, <br />
            we offer a dynamic environment where you can grow, learn, and make a meaningful impact in the rapidly evolving security industry.
          </p>
        </div>

        <div className="mx-auto max-w-4xl pt-5">
          <form ref={form} onSubmit={sendEmail}>
            <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
              <div>
                <input
                  type="text"
                  name="user_name"
                  className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black"
                  placeholder="Your name"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="user_email"
                  className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black"
                  placeholder="Your email"
                  autoComplete="off"
                />
              </div>
              <div className="sm:mr-3">
                <button
                  type="submit"
                  className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue"
                >
                  Join!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;