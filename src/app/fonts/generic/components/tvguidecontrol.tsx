"use client";

import React, { useState } from "react";
import ReactPlayerComponent from "./reactplayer";
import LoopingMenu from "./loopingmenu";
import TimeBar from "./timebar";
import Link from "next/link";
import wtv from "../../../../images/wtv.webp";
import wam from "../../../../images/logo-no-border.webp";
import Image from "next/image";

const TVGuideControl = ({ data }: any) => {
  // const data = [
  //   {
  //     ch: 1,
  //     channel: "ABOUT",
  //     title: "Wyatt Weymouth",
  //     role: "Producer, Writer, Director, Editor, VFX Artist, Colorist, Motion Designer",
  //     description:
  //       "Wyatt Weymouth is a versatile and visionary creative force in the world of filmmaking and digital storytelling. With expertise spanning producing, writing, directing, editing, visual effects, color grading, and motion design, Wyatt crafts compelling narratives and visually stunning experiences. His multidisciplinary approach ensures a seamless fusion of creativity and technical precision, bringing stories to life with impact and innovation.",
  //     videoUrl: "https://vimeo.com/372460574?share=copy",
  //     size: 1,
  //   },
  //   {
  //     ch: 2,
  //     channel: "DOCS1",
  //     year: "2023",
  //     title: "Living for the Dead",
  //     role: "Editor, Motion Designer",
  //     description:
  //       "From the creators of “Queer Eye”, five fabulous, queer ghost hunters roam the country, helping the living by healing the dead. Our gay ‘Ghost Hunties’ explore infamous haunted locations while pushing past boundaries with both the living and the deceased. Watch Living for the Dead on Hulu!",
  //     videoUrl: "https://www.youtube.com/watch?v=Y15RhMymDxo",
  //     size: 1,
  //   },
  //   {
  //     ch: 3,
  //     channel: "DOCS2",
  //     year: "2023",
  //     title: "The Secrets of Hillsong",
  //     role: "Editor, Motion Designer",
  //     description:
  //       "Directed by Stacey Lee, The Secrets of Hillsong features the first interviews with former pastors Carl and Laura Lentz since their public ouster from the church, which for years counted musicians, actors, athletes and other celebrities among its flock.",
  //     videoUrl: "https://www.youtube.com/watch?v=10zaSh0QEaU",
  //     size: 2,
  //   },
  //   {
  //     ch: 4,
  //     channel: "FILM",
  //     year: "2023",
  //     title: "Life Upside Down",
  //     role: "Additional Editor",
  //     description:
  //       "A romantic comedy about time, distance, and the human condition. Three couples, connected by friendship, love and work, are each stuck in their respective homes in Los Angeles during the beginning of lockdown. Finally forced to face their spouses, friends, lovers, and eventually themselves head on, their lives turn slowly but surely upside-down.",
  //     videoUrl: "https://www.youtube.com/watch?v=vrbAXTWcwQ8",
  //     size: 3,
  //     color: "red",
  //   },
  //   {
  //     ch: 5,
  //     channel: "SHORT",
  //     year: "2022",
  //     title: "Made By God",
  //     role: "Producer, Writer, Director, Editor, VFX, Colorist",
  //     description:
  //       "A Sidewalk Film Festival and Florida Film Festival selection. The life of a directionless young man takes a violent turn in rural Florida.",
  //     videoUrl: "https://vimeo.com/707604096",
  //     size: 1,
  //   },
  //   {
  //     ch: 6,
  //     channel: "MV",
  //     year: "2022",
  //     title: "Drab Majesty - Noise of the Void",
  //     role: "Colorist",
  //     description:
  //       "Drab Majesty presents a new for 2022 video for `Noise of the Void` from the album 'Modern Mirror.",
  //     videoUrl: "https://www.youtube.com/watch?v=DVqnmu5KINM",
  //     size: 1,
  //   },
  //   {
  //     ch: 7,
  //     channel: "TEST",
  //     year: "2025",
  //     title: "TEST - TEST",
  //     role: "Colorist",
  //     description:
  //       "Drab Majesty presents a new for 2022 video for `Noise of the Void` from the album 'Modern Mirror.",
  //     videoUrl: "https://www.youtube.com/watch?v=DVqnmu5KINM",
  //     size: 1,
  //   },
  // ];

  const [urlIndex, setUrlIndex] = useState(0);
  const [selectedItemTitle, setSelectedItemTitle] = useState(data[0].title);
  const [isMuted, setIsMuted] = useState(true);

  const handleItemClick = (selectedTitle: string) => {
    const index = data.findIndex(
      (item: { title: string }) => item.title === selectedTitle
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
        <div className="bg-white w-14 sm:w-20 h-14 sm:h-20 aspect-square saturate-20 text-white px-1 sm:px-2 py-1 rounded-md text-sm sm:text-lg font-bold cursor-pointer flex flex-col items-center shadow-md transition-transform duration-200 ease-in-out hover:scale-105">
          <div className="relative w-8 h-8 sm:w-12 sm:h-12 aspect-square -mr-[10%]">
            <Image src={wtv.src} fill alt="wtv logo" />
          </div>
          <p className=" text-blue-800">ABOUT</p>
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
          <div className="bg-gray-200 w-full portrait:h-[33vh] landscape:h-full xl:h-full aspect-[4/3]">
            <ReactPlayerComponent
              url={(data[urlIndex] && data[urlIndex].videoUrl) || ""}
              isMuted={isMuted}
            />
          </div>
        </div>
        <div className=" w-full flex flex-col justify-center items-center px-4 py-3 sm:p-6 relative portrait:h-[20vh] landscape:h-full xl:h-auto">
          <div className="overflow-auto">
            <div className="relative text-white text-xl sm:text-3xl md:text-4xl 2xl:text-6xl font-bold flex text-center justify-center">
              <span className="relative chromatic">
                {data[urlIndex] && data[urlIndex].title}
              </span>
            </div>
            <div className="relative text-yellow-300 text-base md:text-xl 2xl:text-3xl font-bold mt-0 sm:mt-2 md:mt-4 flex justify-center">
              <span className="relative chromatic flex text-center">
                {data[urlIndex] && data[urlIndex].role}
              </span>
            </div>
            <div className="relative  text-white text-sm md:text-base 2xl:text-xl font-bold mt-1 sm:mt-2 md:mt-4 flex justify-center">
              <span
                className=" relative chromatic flex text-center"
                dangerouslySetInnerHTML={{
                  __html: (
                    (data[urlIndex] && data[urlIndex].description) ||
                    ""
                  ).replace(/\n/g, "<br>"),
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
