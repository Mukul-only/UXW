import GmailIcon from "../assets/gmail.svg?react";
import TwitterIcon from "../assets/twitter.svg?react";
import FbIcon from "../assets/facebook.svg?react";
import InstaIcon from "../assets/insta.svg?react";
import LinkedInIcon from "../assets/linkedin.svg?react";
import Wrapper from "../utils/Wrapper";

const FooterSection = (props) => {
  const icon =
    "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-xl";

  return (
    <>
      <Wrapper className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-6 sm:space-y-8">
            <p className="font-bold text-primary text-xl">Logo</p>
            <p className="text-sm sm:text-base">
              G-23/260 Sector-7 Rohini Delhi-110085
            </p>
            <div className="flex gap-3 sm:gap-4 items-center">
              <span className={icon}>
                <GmailIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              <p className="text-sm sm:text-base">thebaecare29@gmail.com</p>
            </div>
          </div>

          {/* About Us Links */}
          <div>
            <p className="font-medium text-lg sm:text-xl mb-4 sm:mb-6">
              About Us
            </p>
            <p className="text-grey_light mb-2 text-sm sm:text-base">Lorem</p>
            <p className="text-grey_light mb-2 text-sm sm:text-base">
              Portfolio
            </p>
            <p className="text-grey_light mb-2 text-sm sm:text-base">Careers</p>
            <p className="text-grey_light text-sm sm:text-base">Contact Us</p>
          </div>

          {/* Contact Info */}
          <div>
            <p className="font-medium text-lg sm:text-xl mb-4 sm:mb-6">
              Contact Us
            </p>
            <p className="text-grey_light max-w-[15rem] text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="text-grey_light mt-4 text-sm sm:text-base">
              +908 89097 890
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2 sm:gap-3 items-center sm:items-end justify-start sm:justify-center lg:justify-end">
            <div className={icon}>
              <FbIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className={icon}>
              <InstaIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className={icon}>
              <TwitterIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className={icon}>
              <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>
      </Wrapper>
      <p className="py-4 text-center text-grey_light border border-t-gray-200 text-xs sm:text-sm">
        Copyright ® 2025 All rights Reserved
      </p>
    </>
  );
};

export default FooterSection;
