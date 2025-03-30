import Wrapper from "../utils/Wrapper";

const CtaSection = (props) => {
  const buttonStyle =
    "text-white font-medium px-8 py-4 bg-primary rounded-lg cursor-pointer hover:scale-105 duration-400";
  return (
    <div className="py-24 bg-black_shade">
      <Wrapper className="flex items-center justify-between">
        <div>
          <h1 className="text-white font-medium text-3xl">
            Do you have a project in mind?
          </h1>
          <p className="mt-8 text-gray-300 max-w-[32rem] text-lg">
            Lorem ipsum dolor sit amet consectetur adipiscing elit amet diam in
            est pharetra porttitor libero.
          </p>
        </div>
        <div className="flex gap-4">
          <button className={buttonStyle}>Let's talk</button>
          <button className={buttonStyle}>Learn More</button>
        </div>
      </Wrapper>
    </div>
  );
};
export default CtaSection;
