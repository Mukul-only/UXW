import Wrapper from "../utils/Wrapper";
import WorkCard from "./WorkCard";
import AppRedesignIcon from "../assets/appredesign.svg?react";
import LucaIcon from "../assets/luca.svg?react";
import LocatorIcon from "../assets/locator.svg?react";
import RentalIcon from "../assets/rentalroom.svg?react";
import CalendarIcon from "../assets/calendar.svg?react";
const OurWork = (props) => {
  return (
    <Wrapper className="py-24">
      <div className="flex flex-col items-center">
        <h1 className="bg-primary rounded-full px-4 py-2 w-fit text-white font-medium">
          Our Work
        </h1>
        <h1 className="mt-12 text-4xl font-semibold text-primary_dark ">
          We create world-class digital products
        </h1>
        <p className="text-grey_light text-md max-w-[44rem] mt-6 text-center">
          By information about design the world to the best instructors, heatc
          helping By information
        </p>
      </div>
      <div className="flex mt-24 gap-10">
        <div>
          <WorkCard
            date="App Design - June 20, 2022"
            title="App Redesign"
            desc="By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping"
            xl
          >
            <AppRedesignIcon className="w-[40rem] h-[32rem]" />
          </WorkCard>
        </div>
        <div className="flex flex-wrap gap-6">
          <WorkCard
            date="App Design - June 20, 2022"
            title="Redesign channel website landng page"
          >
            <LucaIcon className="w-[18rem] h-[13rem]" />
          </WorkCard>
          <WorkCard
            date="App Design - June 20, 2022"
            title="New Locator App For 
a New Company"
          >
            <LocatorIcon className="w-[18rem] h-[13rem]" />
          </WorkCard>
          <WorkCard
            date="App Design - June 20, 2022"
            title="Rental Rooms Web 
App Platform"
          >
            <RentalIcon className="w-[18rem] h-[13rem]" />
          </WorkCard>
          <WorkCard
            date="App Design - June 20, 2022"
            title="Calendar App for Big
SASS Company"
          >
            <CalendarIcon className="w-[18rem] h-[13rem]" />
          </WorkCard>
        </div>
      </div>
    </Wrapper>
  );
};
export default OurWork;
