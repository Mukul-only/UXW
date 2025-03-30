import HeroSection from "./HeroSection";
import Services from "./Services";
import Navbar from "./Navbar";
import OurWork from "./OurWork.";
import PartnerSection from "./PartnerSection";
import CtaSection from "./CtaSection";
import FooterSection from "./FooterSection";
const Homepage = (props) => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <OurWork />
      <PartnerSection />
      <CtaSection />
      <FooterSection />
    </>
  );
};
export default Homepage;
