"use client";

import React, { useState } from "react";
import ReactPlayerComponent from "./reactplayer";
import LoopingMenu from "./loopingmenu";

const TVGuideControl = () => {
  const data = [
    {
      ch: 1,
      channel: "ABOUT",
      title: "Wyatt Weymouth",
      role: "Producer, Writer, Director, Editor, VFX Artist, Colorist, Motion Designer",
      description:
        "Wyatt Weymouth is a versatile and visionary creative force in the world of filmmaking and digital storytelling. With expertise spanning producing, writing, directing, editing, visual effects, color grading, and motion design, Wyatt crafts compelling narratives and visually stunning experiences. His multidisciplinary approach ensures a seamless fusion of creativity and technical precision, bringing stories to life with impact and innovation.",
      videoUrl: "https://vimeo.com/372460574?share=copy",
      size: 1,
    },
    {
      ch: 2,
      channel: "DOCS1",
      year: "2023",
      title: "Living for the Dead",
      role: "Editor, Motion Designer",
      description:
        "From the creators of “Queer Eye”, five fabulous, queer ghost hunters roam the country, helping the living by healing the dead. Our gay ‘Ghost Hunties’ explore infamous haunted locations while pushing past boundaries with both the living and the deceased. Watch Living for the Dead on Hulu!",
      videoUrl: "https://www.youtube.com/watch?v=Y15RhMymDxo",
      size: 1,
    },
    {
      ch: 3,
      channel: "DOCS2",
      year: "2023",
      title: "The Secrets of Hillsong",
      role: "Editor, Motion Designer",
      description:
        "Directed by Stacey Lee, The Secrets of Hillsong features the first interviews with former pastors Carl and Laura Lentz since their public ouster from the church, which for years counted musicians, actors, athletes and other celebrities among its flock.",
      videoUrl: "https://www.youtube.com/watch?v=10zaSh0QEaU",
      size: 2,
    },
    {
      ch: 4,
      channel: "FILM",
      year: "2023",
      title: "Life Upside Down",
      role: "Additional Editor",
      description:
        "A romantic comedy about time, distance, and the human condition. Three couples, connected by friendship, love and work, are each stuck in their respective homes in Los Angeles during the beginning of lockdown. Finally forced to face their spouses, friends, lovers, and eventually themselves head on, their lives turn slowly but surely upside-down.",
      videoUrl: "https://www.youtube.com/watch?v=vrbAXTWcwQ8",
      size: 3,
      color: "red",
    },
    {
      ch: 5,
      channel: "SHORT",
      year: "2022",
      title: "Made By God",
      role: "Producer, Writer, Director, Editor, VFX, Colorist",
      description:
        "A Sidewalk Film Festival and Florida Film Festival selection. The life of a directionless young man takes a violent turn in rural Florida.",
      videoUrl: "https://vimeo.com/707604096",
      size: 1,
    },
    {
      ch: 6,
      channel: "MV",
      year: "2022",
      title: "Drab Majesty - Noise of the Void",
      role: "Colorist",
      description:
        "Drab Majesty presents a new for 2022 video for `Noise of the Void` from the album 'Modern Mirror.",
      videoUrl: "https://www.youtube.com/watch?v=DVqnmu5KINM",
      size: 1,
    },
    {
      ch: 7,
      channel: "TEST",
      year: "2025",
      title: "TEST - TEST",
      role: "Colorist",
      description:
        "Drab Majesty presents a new for 2022 video for `Noise of the Void` from the album 'Modern Mirror.",
      videoUrl: "https://www.youtube.com/watch?v=DVqnmu5KINM",
      size: 1,
    },
  ];

  const [urlIndex, setUrlIndex] = useState(0);
  const [selectedItemTitle, setSelectedItemTitle] = useState(data[0].title);
  const [isMuted, setIsMuted] = useState(true);

  const handleItemClick = (selectedTitle: string) => {
    const index = data.findIndex((item) => item.title === selectedTitle);
    setIsMuted(false);
    setSelectedItemTitle(selectedTitle);
    setUrlIndex(index);
  };

  return (
    <div className="relative flex  flex-col justify-center items-center h-screen ">
      <div className="flex-1 flex w-full">
        <div className="bg-gray-200 aspect-[4/3]">
          <ReactPlayerComponent
            url={(data[urlIndex] && data[urlIndex].videoUrl) || ""}
            isMuted={isMuted}
          />
        </div>
        <div className="w-full flex flex-col h-full justify-center items-center p-6">
          <div className="relative text-white text-6xl font-bold flex text-center">
            <span className="relative chromatic">
              {data[urlIndex] && data[urlIndex].title}
            </span>
          </div>
          <div className="relative text-yellow-300 text-3xl font-bold mt-4">
            <span className="relative chromatic flex text-center">
              {data[urlIndex] && data[urlIndex].role}
            </span>
          </div>
          <div className="relative  text-white text-xl font-bold mt-4">
            <span className="relative chromatic flex text-center">
              {data[urlIndex] && data[urlIndex].description}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex text-5xl">
        <div className="flex-1">
          <div className="bg-theme-light-blue h-16 rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 text-white  font-bold flex items-center justify-center">
            <span className="relative drop-shadow-md chromatic-light ">
              11:15:11
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 flex-[6]">
          <div className="bg-theme-light-blue h-16 rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 text-yellow-300  font-bold flex items-center justify-center">
            <span className="relative drop-shadow-md chromatic-light ">
              11:00 AM
            </span>
          </div>
          <div className="bg-theme-light-blue h-16 rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 text-yellow-300  font-bold flex items-center justify-center">
            <span className="relative drop-shadow-md chromatic-light ">
              11:30 AM
            </span>
          </div>
          <div className="bg-theme-light-blue h-16 rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 text-yellow-300  font-bold flex items-center justify-center">
            <span className="relative drop-shadow-md chromatic-light ">
              12:00 PM
            </span>
          </div>
        </div>
      </div>
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
