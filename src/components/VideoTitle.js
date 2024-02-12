import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-20 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/3 text-white">{overview}</p>
      <div className="">
        <button className=" bg-white hover:bg-opacity-80 text-black p-2 px-8 text-lg font-semibold rounded-md">
          Play
        </button>
        <button className="mx-2 bg-gray-500 hover:bg-opacity-80 text-white p-2 px-8 text-lg font-semibold bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
