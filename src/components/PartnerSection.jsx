import Wrapper from "../utils/Wrapper";
import M5CIcon from "../assets/M5C.svg?react";
import MSIcon from "../assets/makersharks.svg?react";
import PSIcon from "../assets/paanshala.svg?react";
import RCIcon from "../assets/rightchoice.svg?react";
const PartnerSection = (props) => {
  return (
    <div className="bg-grey_tint mt-26 py-12">
      <Wrapper>
        <h1 className="text-4xl font-bold text-grey_shade text-center">
          Trusted by greatest companies
        </h1>
        <div className="flex justify-between mt-12 px-24 py-8">
          <M5CIcon />
          <MSIcon />
          <PSIcon />
          <RCIcon />
        </div>
      </Wrapper>
    </div>
  );
};
export default PartnerSection;
