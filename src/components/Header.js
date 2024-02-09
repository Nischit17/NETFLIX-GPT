import React from "react";
import Netflix_logo_img from "../assets/image/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" alt="netflix_logo_img" src={Netflix_logo_img} />
    </div>
  );
};

export default Header;
