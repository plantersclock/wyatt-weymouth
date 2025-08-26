import React from "react";
import { UilInstagram, UilEnvelopeAlt } from "@iconscout/react-unicons";
import Link from "next/link";
import Image from "next/image";
import wtv from "../../images/wtv.webp";

const page = () => {
  return (
    <div className="min-h-screen container mx-auto">
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="chromatic">
            {/* Red Shadow */}
            <feOffset in="SourceAlpha" dx="-1" dy="-1" result="redOffset" />
            <feFlood floodColor="rgb(255, 25, 25)" result="redColor" />
            <feComposite
              in="redColor"
              in2="redOffset"
              operator="in"
              result="redShadow"
            />

            {/* Blue Shadow */}
            <feOffset in="SourceAlpha" dx="1" dy="1" result="blueOffset" />
            <feFlood floodColor="rgb(0, 234, 255)" result="blueColor" />
            <feComposite
              in="blueColor"
              in2="blueOffset"
              operator="in"
              result="blueShadow"
            />

            {/* Black Drop Shadow */}
            <feOffset in="SourceAlpha" dx="2" dy="2" result="blackOffset" />
            <feGaussianBlur in="blackOffset" stdDeviation="1" result="blur" />
            <feFlood floodColor="black" result="blackColor" />
            <feComposite
              in="blackColor"
              in2="blur"
              operator="in"
              result="blackShadow"
            />

            {/* Merge all layers */}
            <feMerge>
              <feMergeNode in="blackShadow" />
              <feMergeNode in="redShadow" />
              <feMergeNode in="blueShadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <main className="relative bg-gradient-to-b from-blue-900 to-blue-700 flex flex-col h-screen">
        <Link
          href="/"
          className="z-30 absolute top-10 right-2 md:top-14 sm:right-3"
        >
          <div className="relative saturate-20 text-white px-1 sm:px-2 py-1 w-14 sm:w-20 h-14 sm:h-20 aspect-square rounded-md text-sm sm:text-lg font-bold cursor-pointer flex flex-col items-center  transition-transform duration-200 ease-in-out hover:scale-105">
            <div className="relative w-8 sm:w-12 h-8 sm:h-12 aspect-square -mr-[10%]">
              <Image src={wtv.src} fill alt="wtv logo" />
            </div>
            <p className=" text-white">GUIDE</p>
          </div>
        </Link>
        <div className="relative bg-red-700 text-white py-1 overflow-hidden">
          <p className="whitespace-nowrap inline-block animate-marquee-slow md:animate-marquee-medium xl:animate-marquee-fast text-base md:text-2xl chromatic">
            {/* {"WARNING: YOUR PROJECT IS IN DIRE NEED OF WYATT WEYMOUTH'S HELP"}
            <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            EMERGENCY BROADCAST SYSTEM: FAILURE TO HIRE WYATT WEYMOUTH MAY
            RESULT IN CATASTROPHIC POST-PRODUCTION OUTCOMES{" "}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            URGENT ALERT: PROJECT STABILITY COMPROMISED — WYATT WEYMOUTH NOT YET
            ATTACHED <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            WARNING: WITHOUT WYATT WEYMOUTH, THIS EDIT IS ON A DIRECT PATH TO
            DISASTER <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            SYSTEM OVERRIDE: HIRE WYATT WEYMOUTH OR PREPARE FOR TOTAL NARRATIVE
            COLLAPSE <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            CRITICAL FAILURE DETECTED: EDITING IN PROGRESS WITHOUT WYATT
            WEYMOUTH INVOLVED */}

            {
              "EMERGENCY BROADCAST SYSTEM: FAILURE TO HIRE WYATT WILL RESULT IN CATASTROPHIC POST-PRODUCTION OUTCOMES. PROJECT STABILITY COMPROMISED. NARRATIVE COLLAPSE. CRITICAL FAILURE."
            }
          </p>
        </div>
        <div className="flex flex-col flex-grow items-center mt-20 sm:mt-8 md:mt-10 2xl:mt-24">
          <h1 className="text-4xl sm:text-4xl md:text-5xl xl:text-8xl 2xl:text-9xl text-white chromatic font-medium text-center">
            WYATT WEYMOUTH
          </h1>
          <h2 className="mt-2 sm:mt-5 chromatic text-base sm:text-lg md:text-xl 2xl:text-4xl font-medium  text-center mx-4 md:mx-20 text-yellow-300 leading-normal xl:leading-[3.5rem]">
            Editor, Producer, Director, Post-production
          </h2>
          <p className="mt-6 sm:mt-4 md:mt-6 2xl:mt-20 text-white text-center  mx-4 md:mx-20 chromatic leading-normal text-sm sm:text-[clamp(.25rem,1.5vw,1.7rem)]">
            Wyatt Weymouth is a filmmaker and editor based in Los Angeles. His
            work spans narrative features, documentaries, shorts, and music
            videos, with credits including The Secrets of Hillsong (FX/Hulu),
            Magic City: An American Fantasy (Starz), Life Upside Down (with Bob
            Odenkirk), Living for the Dead (Hulu), and the acclaimed short film
            Made by God. Weymouth brings strong instincts and a collaborative
            spirit to every project—whether he’s on set, leading the edit, or
            stepping in as a trusted closer.
          </p>
          <div className="mt-12 sm:mt-8 md:mt-10 2xl:mt-20 flex mx-auto w-[80%] justify-between ">
            <Link
              href="https://www.itsnova.com/wyatt13"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <div className="text-white text-xl md:text-4xl font-semibold h-8 w-8 md:h-12 md:w-12 flex items-center justify-center chromatic">
                NOVA
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/wyattbearp/"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <UilInstagram
                className="h-8 w-8 md:h-12 md:w-12 text-white"
                style={{ filter: "url(#chromatic)" }}
              />
            </Link>

            <div className="flex items-center flex-col relative">
              <a a href="mailto:wyatt.weymouth@gmail.com ">
                <UilEnvelopeAlt
                  className="h-8 w-8 md:h-12 md:w-12 text-white transition-transform duration-200 ease-in-out hover:scale-105 cursor-pointer"
                  style={{ filter: "url(#chromatic)" }}
                />
              </a>
              <p className="absolute top-[100%] text-white chromatic opacity-80  text-[clamp(.25rem,2vw,1.9rem)] sm:text-[clamp(.25rem,1.25vw,1.9rem)] md:text-base">
                wyatt.weymouth@gmail.com
              </p>
            </div>

            <Link
              href="https://www.imdb.com/name/nm5238994/"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <div className="text-white text-xl md:text-4xl font-semibold h-8 w-8 md:h-12 md:w-12 flex items-center justify-center chromatic">
                IMDb
              </div>
            </Link>
          </div>
        </div>

        <footer className="text-[clamp(.25rem,2vw,1.9rem)] sm:text-[clamp(.25rem,1.25vw,1.1rem)]  flex flex-col sm:flex-row justify-between mx-auto w-[98%] text-white chromatic opacity-75 ">
          <p>
            © {new Date().getFullYear()} Wyatt Weymouth. All rights reserved.
          </p>

          <Link
            href="https://www.wamwebdev.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Website Created By:{" "}
            <span className="underline">Wright Angle Media</span>
          </Link>
        </footer>
      </main>

      <div className="scanlines absolute top-0 left-0 w-full h-full pointer-events-none"></div>
    </div>
  );
};

export default page;
