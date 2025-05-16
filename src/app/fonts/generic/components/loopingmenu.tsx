"use client";

import React, { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LoopingMenu = ({ data, handleItemClick, selectedItemTitle }: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollSpeed = 1; // pixels per tick
  const tickRate = 30; // ms
  const pauseDuration = 1000; // ms

  const scrollRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    const container = containerRef.current;
    console.log("Auto-scroll started");
    if (!container) return;

    if (scrollRef.current) clearInterval(scrollRef.current);

    scrollRef.current = setInterval(() => {
      container.scrollTop += scrollSpeed;
    }, tickRate);
  };

  // Create a loop by repeating the list 3 times: [clone][real][clone]
  const repeatedItems = [...data, ...data, ...data];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollToMiddle = () => {
      const fullHeight = container.scrollHeight;
      const oneThird = fullHeight / 3;

      container.scrollTop = oneThird;
    };

    scrollToMiddle();

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const fullHeight = container.scrollHeight;
      const oneThird = fullHeight / 3;
      const scrollTop = container.scrollTop;

      // Loop back when user scrolls into bottom clone
      if (scrollTop >= oneThird * 2) {
        container.scrollTop = scrollTop - oneThird;
      }

      // Loop forward when user scrolls into top clone
      else if (scrollTop <= 0) {
        container.scrollTop = scrollTop + oneThird;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (scrollRef.current) clearInterval(scrollRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const calcItemSize = (itemSize: number) => {
    return 3 - itemSize;
  };

  const calcItemSize2 = (itemSize: number) => {
    return 3 - itemSize * 2;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pauseAutoScroll = () => {
      // Pause auto-scroll immediately
      if (scrollRef.current) {
        clearInterval(scrollRef.current);
        scrollRef.current = null;
      }

      // Restart after delay
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }

      pauseTimeoutRef.current = setTimeout(() => {
        startAutoScroll();
      }, pauseDuration);
    };

    container.addEventListener("wheel", pauseAutoScroll, { passive: true });
    container.addEventListener("touchstart", pauseAutoScroll, {
      passive: true,
    });

    return () => {
      container.removeEventListener("wheel", pauseAutoScroll);
      container.removeEventListener("touchstart", pauseAutoScroll);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  return (
    <div
      className={`relative w-full overflow-y-scroll flex-1`}
      ref={containerRef}
      style={{
        scrollBehavior: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {repeatedItems.map((item, index) => (
        <>
          {/* MOBILE */}
          <div
            key={"row mobile " + index}
            className="w-full flex xl:hidden text-xl sm:text-3xl 2xl:text-4xl h-[64px] sm:h-[96px] bg-theme-blue"
          >
            <div className="flex-1">
              <div className="text-2xl sm:text-3xl 2xl:text-4xl relative w-[130px] sm:w-[185px] 2xl:w-[220px] flex justify-end  leading-none items-center sm:h-24 bg-theme-blue rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 ">
                <p className="flex text-yellow-300  font-bold drop-shadow-md chromatic-light mr-4 text-right">
                  {item?.ch} <br />
                  {item?.channel}
                </p>
              </div>
            </div>
            <div className=" w-full flex-[6] h-[64px] sm:h-[96px] grid grid-col-1">
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
                  className={` bg-theme-blue flex rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 col-span-3 hover:bg-theme-very-light-blue cursor-pointer ${
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
                  <div className=" line-clamp-2 sm:line-clamp-2 text-ellipsis overflow-hidden relative drop-shadow-md chromatic-light text-white font-bold text-wrap leading-tight mb-1">
                    {item?.title} {item.year && `(${item?.year})`}{" "}
                    <span className=" font-medium">{item.description}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* DESKTOP */}
          <div
            key={"row " + index}
            className="w-full hidden xl:flex text-3xl 2xl:text-4xl h-[96px]"
          >
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
                  className={` bg-theme-blue flex rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 col-span-3 hover:bg-theme-very-light-blue cursor-pointer ${
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
                  <div className="line-clamp-2 text-ellipsis overflow-hidden relative drop-shadow-md chromatic-light text-white font-bold text-wrap leading-tight">
                    {item?.title} {item.year && `(${item?.year})`}{" "}
                    <span className="font-medium">{item.description}</span>
                  </div>
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
        </>
      ))}
    </div>
  );
};

export default LoopingMenu;
