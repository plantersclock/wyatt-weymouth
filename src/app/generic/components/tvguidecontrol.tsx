/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import ReactPlayerComponent from "./reactplayer";
import LoopingMenu from "./loopingmenu";
import TimeBar from "./timebar";
import Link from "next/link";
import wtv from "../../../images/wtv.webp";
import wam from "../../../images/logo-no-border.webp";
import Image from "next/image";

import { marked } from "marked";
import {
  TVGuideControlProps,
  PortfolioProject,
} from "../../../types/portfolio";

const TVGuideControl = ({ data }: TVGuideControlProps) => {
  const [urlIndex, setUrlIndex] = useState(0);
  const [selectedItemTitle, setSelectedItemTitle] = useState(data[0].title);
  const [isMuted, setIsMuted] = useState(true);

  const handleItemClick = (selectedTitle: string) => {
    const index = data.findIndex(
      (item: PortfolioProject) => item.title === selectedTitle
    );
    setIsMuted(false);
    setSelectedItemTitle(selectedTitle);
    setUrlIndex(index);
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-screen ">
      <Link
        href="/about"
        className="z-30 absolute  top-2 right-2 sm:top-3 sm:right-3 "
      >
        <div className=" w-14 sm:w-20 h-14 sm:h-20 aspect-square saturate-20 text-white px-1 sm:px-2 py-1 rounded-md text-sm sm:text-lg font-bold cursor-pointer flex flex-col items-center  transition-transform duration-200 ease-in-out hover:scale-105">
          <div className="relative w-8 h-8 sm:w-12 sm:h-12 aspect-square -mr-[10%]">
            <Image src={wtv.src} fill alt="wtv logo" />
          </div>
          <p className=" text-white">INFO</p>
        </div>
      </Link>

      <Link
        href="https://www.wamwebdev.com/"
        className="z-30 fixed  bottom-2 left-2 sm:bottom-4 sm:left-4 "
      >
        <div className="relative w-6 h-6 sm:w-8 sm:h-8 aspect-square transition-transform duration-200 ease-in-out hover:scale-105 rounded-full overflow-hidden shadow-md border border-gray-600">
          <Image
            src={wam.src}
            fill
            alt="wam logo"
            className="grayscale contrast-200 opacity-80 hover:grayscale-0 hover:contrast-100 transition duration-300"
          />
        </div>
      </Link>

      <div className="flex-1 landscape:flex xl:flex w-full landscape:max-h-[50vh]">
        <div className="bg-black   xl:flex justify-center ">
          {data[urlIndex] && data[urlIndex].videoUrl ? (
            <div className="bg-gray-200 w-full portrait:h-[33vh] landscape:h-full landscape:min-h-[30vh] xl:h-full aspect-[4/3]">
              <ReactPlayerComponent
                url={(data[urlIndex] && data[urlIndex].videoUrl) || ""}
                isMuted={isMuted}
              />
            </div>
          ) : (
            <div className="relative bg-black w-full portrait:h-[30vh] landscape:h-full landscape:min-h-[30vh] xl:h-full aspect-[4/3]">
              {data[urlIndex]?.imageUrl && (
                <Image
                  src={data[urlIndex].imageUrl}
                  alt={`${data[urlIndex].title} project image`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={urlIndex === 0}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              )}
            </div>
          )}
        </div>
        <div className=" w-full flex flex-col justify-center items-center px-4 py-3 sm:p-6 relative portrait:h-[20vh] landscape:h-full xl:h-auto">
          <div className="overflow-auto">
            <div className="relative text-white text-xl sm:text-3xl lg:text-4xl 2xl:text-6xl font-bold flex text-center justify-center">
              <span className="relative chromatic">
                {data[urlIndex] && data[urlIndex].title}
              </span>
            </div>
            <div className="relative text-yellow-300 text-base lg:text-xl 2xl:text-3xl font-bold mt-0 sm:mt-2 md:mt-4 flex justify-center">
              <span className="relative chromatic flex text-center">
                {data[urlIndex] && data[urlIndex].role}
              </span>
            </div>
            {data[urlIndex] && data[urlIndex].bonusText && (
              <div className="flex items-center justify-center mb-[1.5%] sm:mb-0">
                <div className="relative  bg-red-700 text-white text-sm lg:text-lg 2xl:text-xl mt-1 sm:mt-2 md:mt-4 flex justify-center px-[1vw] font-bold">
                  <span className="relative flex text-center">
                    {data[urlIndex] && data[urlIndex].bonusText}
                  </span>
                </div>
              </div>
            )}
            <div className="hidden sm:block relative text-white text-sm lg:text-base 2xl:text-xl font-bold mt-1 sm:mt-2 md:mt-4 flex justify-center">
              <span
                className=" relative chromatic flex text-center justify-center"
                dangerouslySetInnerHTML={{
                  __html: marked.parse(
                    (data[urlIndex]?.description ?? "").replace(/\n/g, "<br>")
                  ),
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>

      <TimeBar />
      <LoopingMenu
        data={data}
        handleItemClick={handleItemClick}
        selectedItemTitle={selectedItemTitle}
      />

      <div className="scanlines absolute top-0 left-0 w-full h-full pointer-events-none"></div>
    </div>
  );
};

export default TVGuideControl;
