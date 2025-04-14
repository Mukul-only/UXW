import Wrapper from "../utils/Wrapper";

const CtaSection = (props) => {
  const buttonStyle =
    "text-white font-medium px-6 sm:px-8 py-3 sm:py-4 bg-primary rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 text-sm sm:text-base";

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-black_shade">
      <Wrapper className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 px-4 sm:px-6 md:px-0">
        <div className="w-full md:w-2/3">
          <h1 className="text-white font-medium text-2xl sm:text-3xl text-center md:text-left">
            Do you have a project in mind?
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-gray-300 max-w-[32rem] text-base sm:text-lg text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipiscing elit amet diam in
            est pharetra porttitor libero.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button className={buttonStyle + " w-full sm:w-auto"}>
            Let's talk
          </button>
          <button className={buttonStyle + " w-full sm:w-auto"}>
            Learn More
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default CtaSection;
