import { useState, useEffect } from "react";
import Wrapper from "../utils/Wrapper";
import WorkCard from "./WorkCard";
import AppRedesignIcon from "../assets/appredesign.svg?react";
import LucaIcon from "../assets/luca.svg?react";
import LocatorIcon from "../assets/locator.svg?react";
import RentalIcon from "../assets/rentalroom.svg?react";
import CalendarIcon from "../assets/calendar.svg?react";

const OurWork = (props) => {
  return (
    <Wrapper className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-0">
      <div className="flex flex-col items-center">
        <h1 className="bg-primary rounded-full px-4 py-2 w-fit text-white font-medium text-sm sm:text-base">
          Our Work
        </h1>
        <h1 className="mt-6 sm:mt-8 md:mt-12 text-2xl sm:text-3xl md:text-4xl font-semibold text-primary_dark text-center">
          We create world-class digital products
        </h1>
        <p className="text-grey_light text-sm sm:text-md max-w-[44rem] mt-4 sm:mt-6 text-center px-2">
          By information about design the world to the best instructors, heatc
          helping By information
        </p>
      </div>

      {/* Project Grid - Responsive Layout */}
      <div className="mt-12 sm:mt-16 md:mt-24 flex flex-col lg:flex-row gap-6 md:gap-10">
        {/* Large Feature Project */}
        <div className="w-full lg:w-1/2">
          <WorkCard
            date="App Design - June 20, 2022"
            title="App Redesign"
            desc="By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping"
            xl
          >
            <AppRedesignIcon className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[32rem]" />
          </WorkCard>
        </div>

        {/* Smaller Projects Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 lg:mt-0">
          <WorkCard
            date="App Design - June 20, 2022"
            title="Redesign channel website landng page"
          >
            <LucaIcon className="w-full h-auto" />
          </WorkCard>
          <WorkCard
            date="App Design - June 20, 2022"
            title="New Locator App For a New Company"
          >
            <LocatorIcon className="w-full h-auto" />
          </WorkCard>
          <WorkCard
            date="App Design - June 20, 2022"
            title="Rental Rooms Web App Platform"
          >
            <RentalIcon className="w-full h-auto" />
          </WorkCard>
          <WorkCard
            date="App Design - June 20, 2022"
            title="Calendar App for Big SASS Company"
          >
            <CalendarIcon className="w-full h-auto" />
          </WorkCard>
        </div>
      </div>
    </Wrapper>
  );
};

export default OurWork;
