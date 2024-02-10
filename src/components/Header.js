import React from "react";
import Netflix_logo_img from "../assets/image/Netflix_Logo_PMS.png";
import user_icon_img from "../assets/image/user_icon_img.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" alt="netflix_logo_img" src={Netflix_logo_img} />
      {user && (
        <div className="flex flex-col items-center mt-2">
          <img className="w-12 h-12" alt="user_img" src={user?.photoURL} />
          <button
            onClick={handleSignOut}
            className="font-bold hover:underline text-white pt-1"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
