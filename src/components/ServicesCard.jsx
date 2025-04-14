const ServicesCard = (props) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start md:items-center p-3 sm:p-4">
      {/* Icon container */}
      <div
        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shrink-0`}
        style={{ backgroundColor: props.color }}
      >
        {props.children}
      </div>
      {/* Text content */}
      <div className="text-center sm:text-left md:text-left">
        <h1 className="text-lg sm:text-xl font-medium text-primary_dark tracking-tight">
          {props.title}
        </h1>
        <p className="text-grey_light max-w-xs sm:max-w-[12rem] text-xs sm:text-[0.8rem] mt-1 sm:mt-2">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
