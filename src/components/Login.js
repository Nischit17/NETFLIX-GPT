import React, { useRef, useState } from "react";
import Header from "./Header";
import Netflix_bg_img from "../assets/image/Netflix_BG_.jpg";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const HandleButtonClick = () => {
    const message = checkValidData(
      fullname.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="bg_img" src={Netflix_bg_img} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85"
      >
        <h1 className="font-bold text-3xl py-4 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-[#36455d] rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full bg-[#36455d] rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-[#36455d] rounded-lg"
        />
        <p className="text-red-600 font-semibold py-2">{errorMessage}</p>
        <button
          onClick={HandleButtonClick}
          className="w-full p-4 my-6 bg-[#c11119] rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-gray-400">
          {!isSignInForm ? "Already registered? " : "New to Netflix? "}
          <span
            onClick={toggleSignInForm}
            className="text-white hover:underline cursor-pointer"
          >
            {!isSignInForm ? "Sign In Now..." : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
