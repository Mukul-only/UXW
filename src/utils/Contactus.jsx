const ContactUs = (props) => {
  return (
    <button
      className={`${props?.className} px-6 py-3 text-white cursor-pointer border-2 duration-150 border-primary  hover:border-primary_dark rounded-lg bg-primary `}
    >
      Contact Us
    </button>
  );
};
export default ContactUs;
