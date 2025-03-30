const Wrapper = (props) => {
  return (
    <div className={`${props?.className} max-w-7xl mx-auto`}>
      {props.children}
    </div>
  );
};
export default Wrapper;
