import GmailIcon from "../assets/gmail.svg?react";
import TwitterIcon from "../assets/twitter.svg?react";
import FbIcon from "../assets/facebook.svg?react";
import InstaIcon from "../assets/insta.svg?react";
import LinkedInIcon from "../assets/linkedin.svg?react";
import Wrapper from "../utils/Wrapper";

const FooterSection = (props) => {
  const icon =
    "flex items-center justify-center w-10 h-10  rounded-full shadow-xl ";
  return (
    <>
      <Wrapper className="flex py-24  justify-between">
        <div className="space-y-8">
          <p className="font-bold text-primary text-xl">Logo</p>
          <p>G-23/260 Sector-7 Rohini Delhi-110085</p>
          <div className="flex gap-4 items-center ">
            <span className={icon}>
              <GmailIcon />
            </span>
            <p>thebaecare29@gmail.com</p>
          </div>
        </div>
        <div>
          <p className="font-medium text-xl">About Us</p>
          <p className="text-grey_light mt-6">Lorem</p>
          <p className="text-grey_light ">Portfolio</p>
          <p className="text-grey_light ">Careers</p>
          <p className="text-grey_light ">Contact Us</p>
        </div>
        <div>
          <p className="font-medium text-xl">Contact Us</p>
          <p className="text-grey_light mt-6 max-w-[15rem]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-grey_light mt-4">+908 89097 890</p>
        </div>
        <div className="flex gap-2 items-end justify-center">
          <div className={icon}>
            <FbIcon />
          </div>
          <div className={icon}>
            <InstaIcon />
          </div>
          <div className={icon}>
            <TwitterIcon />
          </div>
          <div className={icon}>
            <LinkedInIcon />
          </div>
        </div>
      </Wrapper>
      <p className="py-4 text-center text-grey_light border border-t-gray-200">
        Copyright ® 2025 All rights Rcerved
      </p>
    </>
  );
};
export default FooterSection;
