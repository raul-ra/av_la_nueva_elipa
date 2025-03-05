"use client";

import React, { useState, useEffect } from "react";
import timelineData from "../../data/timelineData";

const formatTitle = (title, screenWidth) => {
  const words = title.split(" ");
  const length = words.length;

  if (length > 6) {
    if (screenWidth && screenWidth <= 640) {
      return (
        <>
          {words.slice(0, Math.ceil(length / 3)).join(" ")} <br />
          {words.slice(Math.ceil(length / 3), Math.ceil((2 * length) / 3)).join(" ")} <br />
          {words.slice(Math.ceil((2 * length) / 3)).join(" ")}
        </>
      );
    } else if (screenWidth && screenWidth <= 1024) {
      return (
        <>
          {words.slice(0, Math.ceil(length / 2)).join(" ")} <br />
          {words.slice(Math.ceil(length / 2)).join(" ")}
        </>
      );
    }
  }
  return title;
};

const ResponsiveCard = ({ event, index }) => {
  return (
    <div className={`
        bg-white shadow-lg rounded-lg overflow-hidden
        flex flex-col
        portrait:md:flex-col
        landscape:md:flex-row
        ${index % 2 !== 0 ? "landscape:md:flex-row-reverse" : ""}
      `}
    >
      <div className="w-full landscape:md:w-1/2 h-48 md:h-64 flex-shrink-0">
        <img src={event.media.url} alt={event.media.caption} className="w-full h-full object-cover" />
      </div>
      <div className="w-full landscape:md:w-1/2 p-4 flex flex-col justify-center max-h-64 overflow-hidden">
        <p className="text-gray-700 text-justify break-words whitespace-normal m-0 text-sm md:text-base">
          {event.text.text}
        </p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalEvents = timelineData.events.length;
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const nextSlide = () => {
    if (currentIndex < totalEvents - 1) setCurrentIndex(currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full mx-auto py-8 px-4">
      <button
        className={`absolute -left-12 top-1/2 transform -translate-y-1/2 p-4 rounded-full z-50 ${
          currentIndex === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-teal-500"
        }`}
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <img src="/icons/Navprev.svg" alt="Prev" className="w-10 h-10" />
      </button>
      <button
        className={`absolute -right-12 top-1/2 transform -translate-y-1/2 p-4 rounded-full z-50 ${
          currentIndex === totalEvents - 1 ? "bg-gray-400 cursor-not-allowed" : "bg-teal-500"
        }`}
        onClick={nextSlide}
        disabled={currentIndex === totalEvents - 1}
      >
        <img src="/icons/Navnext.svg" alt="Next" className="w-10 h-10" />
      </button>
      <div className="overflow-hidden">
        <div className="whitespace-nowrap transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {timelineData.events.map((event, index) => (
            <div key={index} className="inline-block w-full p-4">
              <div className="mb-4 text-center">
                <h2 className="text-2xl font-bold break-words text-wrap leading-tight">
                  {formatTitle(event.text.headline, screenWidth)}
                </h2>
              </div>
              <ResponsiveCard event={event} index={index} />
              <div className="text-center mt-4">
                <span className="text-gray-500">{event.start_date.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full h-12 mt-8">
        <div className="absolute top-1/2 w-full border-t" style={{ borderColor: "#60C6B4" }}></div>
        {timelineData.events.map((event, index) => {
          const leftPos = totalEvents > 1 ? (index / (totalEvents - 1)) * 100 : 50;
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full cursor-pointer border-2"
              style={{
                left: `${leftPos}%`,
                borderColor: "#60C6B4",
                backgroundColor: isActive ? "#4da594" : "#FFFFFF",
              }}
              title={event.start_date.year.toString()}
            >
              <span className="absolute -top-6 text-xs w-12 -translate-x-1/2 text-center">
                {event.start_date.year}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
