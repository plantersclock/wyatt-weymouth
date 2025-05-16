import React, { useState, useEffect } from "react";

const TimeBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // update every second
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // or false for 24-hour
    });

  const formatRoundedStaticTime = (date: Date): string => {
    const rounded = new Date(date);
    const minutes = rounded.getMinutes();
    const roundedMinutes = minutes < 30 ? 0 : 30;

    rounded.setMinutes(roundedMinutes);
    rounded.setSeconds(0);
    rounded.setMilliseconds(0);

    return rounded.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="w-full flex text-2xl sm:text-4xl 2xl:text-5xl">
      <div className="flex-1">
        <div className="bg-theme-light-blue h-12 sm:h-16 rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 text-white  font-bold flex items-center justify-center w-[130px] sm:w-[185px] 2xl:w-[220px]">
          <span className="relative drop-shadow-md chromatic-light ">
            {formatTime(time).replace(/\s?[AP]M$/, "")}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 flex-[6]">
        <div className="col-span-3 xl:col-span-1 bg-theme-light-blue h-12 sm:h-16 rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 text-yellow-300  font-bold flex items-center justify-center">
          <span className="relative drop-shadow-md chromatic-light ">
            {formatRoundedStaticTime(time)}
          </span>
        </div>
        <div className="hidden xl:flex bg-theme-light-blue h-12 sm:h-16 rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 text-yellow-300  font-bold  items-center justify-center">
          <span className="relative drop-shadow-md chromatic-light ">
            {formatRoundedStaticTime(new Date(time.getTime() + 30 * 60 * 1000))}
          </span>
        </div>
        <div className="hidden xl:flex bg-theme-light-blue h-12 sm:h-16 rounded border-[3px] border-r-blue-950 border-b-blue-950  p-1 text-yellow-300  font-bold  items-center justify-center">
          <span className="relative drop-shadow-md chromatic-light ">
            {formatRoundedStaticTime(new Date(time.getTime() + 60 * 60 * 1000))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimeBar;
