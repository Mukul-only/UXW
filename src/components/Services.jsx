import Wrapper from "../utils/Wrapper";
import ServicesCard from "./ServicesCard";
import WebIcon from "../assets/webapplication.svg?react";
import GraphicIcon from "../assets/graphicdesign.svg?react";
import BrandingIcon from "../assets/branding.svg?react";
import MobileIcon from "../assets/mobileapplication.svg?react";
import ShapeIcon from "../assets/shape.svg?react";

const Services = (props) => {
  return (
    <div className=" mt-24 shadow py-12">
      {/* <ShapeIcon className="" /> */}
      <Wrapper className="flex justify-between">
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
      </Wrapper>
    </div>
  );
};
export default Services;
