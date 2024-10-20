import pin_icon from "../assets/pin_icon.png"

/* Home image disabled for now */
const HomeImage = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6  bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={pin_icon} alt="Loading" />
      Montreal, Canada
    </div>
  );
};

export default HomeImage;
