import { useState, useEffect } from "react";
import Wrapper from "../utils/Wrapper";
import M5CIcon from "../assets/M5C.svg?react";
import MSIcon from "../assets/makersharks.svg?react";
import PSIcon from "../assets/paanshala.svg?react";
import RCIcon from "../assets/rightchoice.svg?react";

const PartnerSection = (props) => {
  return (
    <div className="bg-grey_tint mt-16 sm:mt-20 md:mt-26 py-8 sm:py-10 md:py-12">
      <Wrapper className="px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-grey_shade text-center">
          Trusted by greatest companies
        </h1>

        {/* Desktop and Tablet View */}
        <div className="hidden sm:flex flex-wrap justify-center md:justify-between gap-8 md:gap-4 mt-8 md:mt-12 md:px-4 lg:px-24 py-4 md:py-8">
          <div className="flex items-center justify-center">
            <M5CIcon className="w-24 md:w-32 lg:w-auto h-auto" />
          </div>
          <div className="flex items-center justify-center">
            <MSIcon className="w-24 md:w-32 lg:w-auto h-auto" />
          </div>
          <div className="flex items-center justify-center">
            <PSIcon className="w-24 md:w-32 lg:w-auto h-auto" />
          </div>
          <div className="flex items-center justify-center">
            <RCIcon className="w-24 md:w-32 lg:w-auto h-auto" />
          </div>
        </div>

        {/* Mobile View - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 sm:hidden mt-8 px-4">
          <div className="flex items-center justify-center">
            <M5CIcon className="w-20 h-auto" />
          </div>
          <div className="flex items-center justify-center">
            <MSIcon className="w-20 h-auto" />
          </div>
          <div className="flex items-center justify-center">
            <PSIcon className="w-20 h-auto" />
          </div>
          <div className="flex items-center justify-center">
            <RCIcon className="w-20 h-auto" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PartnerSection;
