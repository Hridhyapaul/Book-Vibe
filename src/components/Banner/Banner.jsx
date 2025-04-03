import React from "react";
import bannerImg from "../../assets/Banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center bg-[#f3f3f3] py-16 px-20 rounded-lg">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-5xl font-semibold leading-[1.3]">
          Books to freshen up your bookshelf
        </h1>
        <button className="bg-[#23BE0A] text-white px-6 py-3 rounded-sm cursor-pointer">
          View The List
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img className="max-w-full h-auto" src={bannerImg} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
