"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactPlayer from "react-player";

type ReactPlayerComponentTypes = {
  url: string;
  isMuted: boolean;
};

const ReactPlayerComponent = ({ url, isMuted }: ReactPlayerComponentTypes) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(false);

    setTimeout(() => setIsVisible(true), 100);

    return () => {
      setIsVisible(true);
    };
  }, [url]);

  return (
    <div className="h-full w-full relative">
      {/* Button to toggle visibility
      <button
        onClick={() => {
          setUrl(url + 1);
        }}
        className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 w-20 z-50"
      >
        Toggle Player
      </button> */}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            key={Math.random()}
            className="h-full w-full relative bg-black"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.05 }}
          >
            <ReactPlayer
              url={url}
              className="absolute top-0 left-0"
              width="100%"
              height="100%"
              controls
              playing={true}
              muted={isMuted}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReactPlayerComponent;
