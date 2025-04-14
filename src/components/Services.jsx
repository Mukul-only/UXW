import { useState, useEffect } from "react";
import Wrapper from "../utils/Wrapper";
import ServicesCard from "./ServicesCard";
import WebIcon from "../assets/webapplication.svg?react";
import GraphicIcon from "../assets/graphicdesign.svg?react";
import BrandingIcon from "../assets/branding.svg?react";
import MobileIcon from "../assets/mobileapplication.svg?react";
import ShapeIcon from "../assets/shape.svg?react";

const Services = (props) => {
  const [screenSize, setScreenSize] = useState("large");

  useEffect(() => {
    // Function to update screen size state
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("small");
      } else if (window.innerWidth < 1024) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-16 sm:mt-20 md:mt-24 shadow py-8 sm:py-10 md:py-12 relative">
      {/* <ShapeIcon className="absolute top-0 left-0 w-full h-auto opacity-10" /> */}
      <Wrapper>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12 lg:hidden">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <ServicesCard
            title="Web Application"
            desc="Responsive Website Design and Developing"
            color="#EFEAFF"
          >
            <WebIcon className="h-8 w-8" />
          </ServicesCard>

          <ServicesCard
            title="Graphic Design"
            desc="Posters, Labels, Banners Etc."
            color="#ECFFDA"
          >
            <GraphicIcon className="w-6 h-6" />
          </ServicesCard>

          <ServicesCard
            title="Branding"
            desc="Logo Design, Banners, Brand Colors Etc."
            color="#DAE6FF"
          >
            <BrandingIcon className="w-6 h-6" />
          </ServicesCard>

          <ServicesCard
            title="Mobile Application"
            desc="User Centric Product"
            color="#FFE5DA"
          >
            <MobileIcon className="w-6 h-6" />
          </ServicesCard>
        </div>
      </Wrapper>
    </div>
  );
};

export default Services;
