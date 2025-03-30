const ServicesCard = (props) => {
  return (
    <div className="flex gap-6 items-center ">
      {/* temp box */}
      <div
        className={`w-16 h-16 rounded-xl flex items-center justify-center `}
        style={{ backgroundColor: props.color }}
      >
        {props.children}
      </div>
      <div className="">
        <h1 className="text-xl font-medium text-primary_dark tracking-tight">
          {props.title}
        </h1>
        <p className="text-grey_light max-w-[12rem] text-[.8rem]">
          {props.desc}
        </p>
      </div>
    </div>
  );
};
export default ServicesCard;
