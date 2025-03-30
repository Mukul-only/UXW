import Wrapper from "../utils/Wrapper";
import ProductIcon from "../assets/products.svg?react";
import HeroImage from "../assets/heroImage.svg?react";
import ContactUs from "../utils/Contactus";
import Play from "../assets/play.svg?react";

const HeroSection = () => {
  const h = "text-6xl font-bold leading-20 text-primary_dark tracking-wide";
  return (
    <Wrapper className="flex gap-4">
      <div className="felx mt-12">
        <h1 className={h}>We Design Impactful</h1>
        <div className="flex items-center">
          <h1 className={h}>Digital</h1>
          <ProductIcon />
        </div>
        <p className="mt-16 text-xl text-grey_shade leading-10">
          Help find solutions with institutive and in accordance with client
          business goals. we provide a high-quality services.
        </p>
        <div className=" flex gap-24 mt-16">
          <ContactUs />

          <a
            href="#"
            className="flex gap-4 font-semibold text-primary_dark max-w-[16rem]"
          >
            <Play className="w-[3rem] h-[3rem]" /> Watch our introduction video
          </a>
        </div>
      </div>
      <HeroImage className="w-[62rem]" />
    </Wrapper>
  );
};

export default HeroSection;
