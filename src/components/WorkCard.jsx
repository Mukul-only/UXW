const WorkCard = (props) => {
  return (
    <div>
      {props.children}
      <p className="mt-4 text-sm text-grey_light">{props.date}</p>
      <h1
        className={
          props.xl
            ? `text-3xl mt-3 font-bold text-grey_shade`
            : "text-xl mt-3 font-bold text-grey_shade max-w-[18rem]"
        }
      >
        {props.title}
      </h1>
      {props.desc && (
        <p className={`text-gray-600 mt-3 max-w-[40rem]`}>{props.desc}</p>
      )}
    </div>
  );
};
export default WorkCard;
