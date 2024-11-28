"use client";

import {
  AnimationPlaybackControls,
  animate,
  motion,
  useMotionValue,
} from "framer-motion";
import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

// const items = [
//   "JBLM",
//   "FQLM",
//   "HBMR",
//   "STFU",
//   "LMAO",
//   "PRTY",
//   "RDCL",
//   "HLPM",
//   "SPKL",
// ];

const InifiniteCarousel = ({
  data,
  handleItemClick,
  selectedItemTitle,
}: any) => {
  const FAST_DURATION = data.length * 2;
  const SLOW_DURATION = 100;

  const [duration, setDuration] = useState(FAST_DURATION);

  const [ref, { width, height }] = useMeasure();

  const yTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls: AnimationPlaybackControls;
    // const finalPosition = -height / 2 - 24;
    const itemHeight = 96; // h-24 + gap (adjust this for accurate height)
    const totalItems = data.length; // Duplicated array
    const finalPosition = -(itemHeight * totalItems);

    if (mustFinish) {
      controls = animate(yTranslation, [yTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - yTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(yTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return () => {
      controls?.stop();
    };
  }, [yTranslation, width, duration, rerender, mustFinish, height]);

  const calcItemSize = (itemSize: number) => {
    return 3 - itemSize;
  };

  const calcItemSize2 = (itemSize: number) => {
    return 3 - itemSize * 2;
  };

  return (
    <div
      className={`relative w-full overflow-y-hidden hover:overflow-y-scroll flex-1`}
      style={{
        height: height,
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none",
      }}
    >
      <motion.div
        className="absolute left-0 flex flex-col w-full"
        ref={ref}
        style={{ y: yTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
        onTapStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onTap={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...data, ...data, ...data].map((item, index) => (
          <div key={"row " + index} className="w-full flex text-4xl">
            <div className="flex-1">
              <div className="relative w-full flex justify-end mr-4 leading-none items-center h-24 bg-theme-blue rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 ">
                <p className="flex text-yellow-300  font-bold drop-shadow-md chromatic-light mr-4 text-right">
                  {item?.ch} <br />
                  {item?.channel}
                </p>
              </div>
            </div>
            <div className=" w-full flex-[6] h-[96px] grid grid-cols-3">
              {item.size === 1 && (
                <div
                  className={` flex rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 col-span-1 hover:bg-theme-very-light-blue cursor-pointer ${
                    selectedItemTitle !== item?.title
                      ? item?.color === "red"
                        ? "bg-theme-red"
                        : "bg-theme-blue"
                      : "bg-theme-very-light-blue"
                  }`}
                  onClick={() => {
                    if (selectedItemTitle === item?.title) return;
                    handleItemClick(item.title);
                  }}
                >
                  <span className="relative drop-shadow-md chromatic-light text-white  font-bold max-h-20 overflow-hidden">
                    {item?.title} {item.year && `(${item?.year})`}
                  </span>
                </div>
              )}
              {item.size === 2 && (
                <div
                  className={`bg-theme-blue flex rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 col-span-2 hover:bg-theme-very-light-blue cursor-pointer ${
                    selectedItemTitle !== item?.title
                      ? item?.color === "red"
                        ? "bg-theme-red"
                        : "bg-theme-blue"
                      : "bg-theme-very-light-blue"
                  }`}
                  onClick={() => {
                    if (selectedItemTitle === item?.title) return;
                    handleItemClick(item.title);
                  }}
                >
                  <span className="relative drop-shadow-md chromatic-light text-white  font-bold max-h-20 overflow-hidden">
                    {item?.title} {item.year && `(${item?.year})`}
                  </span>
                </div>
              )}
              {item.size === 3 && (
                <div
                  className={`bg-theme-blue flex rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 col-span-3 hover:bg-theme-very-light-blue cursor-pointer ${
                    selectedItemTitle !== item?.title
                      ? item?.color === "red"
                        ? "bg-theme-red"
                        : "bg-theme-blue"
                      : "bg-theme-very-light-blue"
                  }`}
                  onClick={() => {
                    if (selectedItemTitle === item?.title) return;
                    handleItemClick(item.title);
                  }}
                >
                  <span className="line-clamp-2 relative drop-shadow-md chromatic-light text-white  font-bold text-wrap text-ellipsis max-h-20 overflow-hidden">
                    {item?.title} {item.year && `(${item?.year})`}{" "}
                    <span className="font-medium">{item.description}</span>
                  </span>
                </div>
              )}
              {calcItemSize(item.size) > 0 && (
                <div
                  className={`bg-theme-blue flex rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 col-span-1 hover:bg-theme-very-light-blue cursor-pointer ${
                    selectedItemTitle !== item?.title
                      ? item?.color === "red"
                        ? "bg-theme-red"
                        : "bg-theme-blue"
                      : "bg-theme-very-light-blue"
                  }`}
                  onClick={() => {
                    if (selectedItemTitle === item?.title) return;
                    handleItemClick(item.title);
                  }}
                >
                  <span className="relative drop-shadow-md chromatic-light text-white  font-bold max-h-20 overflow-hidden">
                    {item?.title} {item.year && `(${item?.year})`}
                  </span>
                </div>
              )}
              {calcItemSize2(item.size) > 0 && (
                <div
                  className={`bg-theme-blue flex rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 col-span-1 hover:bg-theme-very-light-blue cursor-pointer ${
                    selectedItemTitle !== item?.title
                      ? item?.color === "red"
                        ? "bg-theme-red"
                        : "bg-theme-blue"
                      : "bg-theme-very-light-blue"
                  }`}
                  onClick={() => {
                    if (selectedItemTitle === item?.title) return;
                    handleItemClick(item.title);
                  }}
                >
                  <span className="relative drop-shadow-md chromatic-light text-white  font-bold max-h-20 overflow-hidden">
                    {item?.title} {item.year && `(${item?.year})`}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InifiniteCarousel;
