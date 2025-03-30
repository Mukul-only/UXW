import ContactUs from "../utils/Contactus";
import Wrapper from "../utils/Wrapper";

const Customlink = (props) => {
  return (
    <a
      href={props.href}
      className={`${props?.className} hover:text-primary duration-150`}
    >
      {props.children}
    </a>
  );
};

const Navbar = (props) => {
  return (
    <Wrapper className="flex py-10 px-4 justify-between">
      <h1 className="text-3xl font-bold text-primary">LOGO</h1>
      <div className="space-x-16 font-medium ">
        <Customlink href="#" className="hover:text-primary">
          Home
        </Customlink>
        <Customlink href="#">About us</Customlink>
        <Customlink href="#">Services</Customlink>
        <Customlink href="#">Blog</Customlink>
        <ContactUs />
      </div>
    </Wrapper>
  );
};
export default Navbar;
