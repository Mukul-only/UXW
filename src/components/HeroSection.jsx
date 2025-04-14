import { useState, useEffect } from "react";
import Wrapper from "../utils/Wrapper";
import ProductIcon from "../assets/products.svg?react";
import HeroBgIcon from "../assets/herobg.svg?react";
import H1Icon from "../assets/h1.svg?react";
import H2Icon from "../assets/h2.svg?react";
import H3Icon from "../assets/h3.svg?react";
import ContactUs from "../utils/Contactus";
import Play from "../assets/play.svg?react";

const HeroSection = () => {
  // Check screen size for responsive adjustments
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    // Set initial state
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper className="overflow-x-hidden">
      <div className="flex flex-col lg:flex-row gap-4 py-8 px-4 lg:px-0">
        {/* Text Content */}
        <div className="flex flex-col w-full lg:w-1/2 mt-6 lg:mt-12">
          <h1
            className={`text-3xl  sm:text-4xl lg:text-6xl font-bold leading-tight lg:leading-20 text-primary_dark tracking-wide`}
          >
            We Design Impactful
          </h1>
          <div className="flex items-center flex-wrap">
            <h1
              className={`text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight lg:leading-20 text-primary_dark tracking-wide mr-4`}
            >
              Digital
            </h1>
            <ProductIcon className="w-20 h-20 lg:w-auto lg:h-auto mt-2 lg:mt-0" />
          </div>
          <p className="mt-6 lg:mt-16 text-base sm:text-lg lg:text-xl text-grey_shade leading-relaxed lg:leading-10">
            Help find solutions with institutive and in accordance with client
            business goals. we provide a high-quality services.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-24 mt-8 lg:mt-16">
            <ContactUs />

            <a
              href="#"
              className="flex items-center gap-3 lg:gap-4 font-semibold text-primary_dark max-w-[16rem]"
            >
              <Play className="w-8 h-8 lg:w-12 lg:h-12" />
              <span className="text-sm sm:text-base">
                Watch our introduction video
              </span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 h-64 sm:h-96 lg:h-[38rem] mt-8 lg:mt-0">
          <HeroBgIcon className="absolute inset-0 w-full h-full" />
          <H1Icon className="absolute top-0 left-0 w-16 sm:w-12 lg:w-auto h-16 sm:h-24 lg:h-auto a" />
          <H2Icon className="absolute right-0 top-0 w-16 sm:w-12 lg:w-auto h-16 sm:h-24 lg:h-auto c" />
          <H3Icon className="absolute top-8 sm:top-12 lg:top-16 left-8 sm:left-12 lg:left-16 b_f w-16 sm:w-12 lg:w-auto h-16 sm:h-24 lg:h-auto" />
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
