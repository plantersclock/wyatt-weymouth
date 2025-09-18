"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactPlayer from "react-player/lazy";

type ReactPlayerComponentTypes = {
  url: string;
  isMuted: boolean;
};

const ReactPlayerComponent = ({ url, isMuted }: ReactPlayerComponentTypes) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsVisible(false);
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      setIsVisible(true);
    };
  }, [url]);

  const handleReady = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleStart = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleBuffer = useCallback(() => {
    setIsLoading(true);
  }, []);

  const handleBufferEnd = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full relative">
      {/* Loading indicator */}
      {isLoading && isInView && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Placeholder when not in view */}
      {!isInView && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm opacity-75">Video will load when visible</p>
          </div>
        </div>
      )}

      <AnimatePresence>
        {isVisible && isInView && (
          <motion.div
            key={url} // Use URL as key instead of random for better performance
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
              onReady={handleReady}
              onStart={handleStart}
              onBuffer={handleBuffer}
              onBufferEnd={handleBufferEnd}
              config={{
                youtube: {
                  playerVars: {
                    showinfo: 0,
                    rel: 0,
                    modestbranding: 1,
                    iv_load_policy: 3,
                  },
                },
                vimeo: {
                  playerOptions: {
                    byline: false,
                    portrait: false,
                    title: false,
                  },
                },
              }}
              light={false} // Disable light mode for immediate playback
              preload="metadata" // Only preload metadata
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReactPlayerComponent;
