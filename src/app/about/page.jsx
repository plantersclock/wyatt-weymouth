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
          className="z-30 absolute top-12 right-2 sm:top-14 sm:right-3"
        >
          <div className="relative  bg-white  saturate-20 text-white px-1 sm:px-2 py-1 w-14 sm:w-20 h-14 sm:h-20 aspect-square rounded-md text-sm sm:text-lg font-bold cursor-pointer flex flex-col items-center shadow-md transition-transform duration-200 ease-in-out hover:scale-105">
            <div className="relative w-8 sm:w-12 h-8 sm:h-12 aspect-square -mr-[10%]">
              <Image src={wtv.src} fill alt="wtv logo" />
            </div>
            <p className=" text-blue-800">GUIDE</p>
          </div>
        </Link>
        <div className="relative bg-red-700 text-white py-1 overflow-hidden">
          <p className="whitespace-nowrap inline-block animate-marquee-slow md:animate-marquee-medium xl:animate-marquee-fast text-2xl chromatic">
            EMERGENCY: Wyatt Weymouth just edited, colored, VFX’d, and directed
            his own coffee break. Please remain calm. • BREAKING: Local man
            Wyatt Weymouth found trapped in an infinite After Effects timeline.
            Rescue team assembling in Premiere. • ALERT: Wyatt Weymouth spotted
            writing, producing, directing, editing, AND complaining about all
            three. Industry in shock.
          </p>
        </div>
        <div className="flex flex-col flex-grow items-center mt-20 sm:mt-24 md:mt-32">
          <h1 className="text-3xl sm:text-5xl md:text-7xl xl:text-9xl text-white chromatic font-medium text-center">
            WYATT WEYMOUTH
          </h1>
          <h2 className="mt-2 sm:mt-5 chromatic text-sm sm:text-xl md:text-3xl xl:text-4xl font-medium uppercase text-center mx-4 md:mx-20 text-yellow-300 leading-normal xl:leading-[3.5rem]">
            Producer, Writer, Director, Editor, VFX Artist, Motion Designer,
            Colorist
          </h2>
          <p className="mt-6 sm:mt-12 md:mt-24 uppercase text-white text-center text-sm sm:text-lg md:text-3xl xl:text-4xl mx-4 md:mx-20 chromatic leading-normal xl:leading-[3rem]">
            Wyatt Weymouth is a director, editor, and motion designer known for
            Living for the Dead, The Secrets of Hillsong, and Life Upside Down.
            His work blends bold storytelling with polished visual craft.
          </p>
          <div className="mt-12 sm:mt-24 flex mx-auto w-[80%] justify-between ">
            <Link
              href="https://www.instagram.com/wyattbearp/"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <UilInstagram
                className="h-12 w-12 md:h-24 md:w-24 text-white"
                style={{ filter: "url(#chromatic)" }}
              />
            </Link>

            <div className="flex items-center flex-col">
              <a a href="mailto:wyatt.weymouth@gmail.com ">
                <UilEnvelopeAlt
                  className="h-12 w-12 md:h-24 md:w-24 text-white transition-transform duration-200 ease-in-out hover:scale-105 cursor-pointer"
                  style={{ filter: "url(#chromatic)" }}
                />
              </a>
              <p className="text-white chromatic opacity-80 text-[.75rem] sm:text-base">
                wyatt.weymouth@gmail.com
              </p>
            </div>

            <Link
              href="https://www.imdb.com/name/nm5238994/"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <div className="text-white text-3xl md:text-6xl font-semibold h-12 w-12 md:h-24 md:w-24 flex items-center justify-center chromatic">
                IMDb
              </div>
            </Link>
          </div>
        </div>

        <footer className="text-sm sm:text-base flex flex-col sm:flex-row justify-between mx-auto w-[98%] text-white chromatic opacity-75 mb-1">
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
