import React, { useState } from "react";
import bg from "../assets/bg.svg";
import img1 from "../assets/img1.svg";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const ExplorePage = () => {
  const [loginForm, setLoginForm] = useState(false);
  const[name, setName] = useState("")
  const[password, setPassword] = useState("")  
  const navigate = useNavigate();

  const handleSubmit = () => {
  if (name === "user" && password === "123") {
    navigate("/home");
  } else if (name === "admin" && password === "123") {
    navigate("/layout");
  } else {
    alert("Invalid User or Password");
  }
};


  return (
    <>
      {/* LOGIN POPUP */}
      {loginForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Login
            </h2>

            <input
              type="text"
              placeholder="User / Adim"
              className="w-full border p-2 rounded mb-3" value={name} onChange={(e)=> setName(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 rounded mb-4" value={password} onChange={(e)=> setPassword(e.target.value)}

            />

            <button className="w-full bg-amber-500 text-white py-2 rounded"
            onClick={handleSubmit}>
              Login
            </button>

            <button
              onClick={() => setLoginForm(false)}
              className="w-full mt-3 text-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* MAIN PAGE */}
      <div
        className="flex flex-col min-h-screen w-full items-center justify-center 
                   bg-center bg-cover bg-no-repeat px-4"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Image Section */}
        <div className="relative w-full max-w-[300px] sm:max-w-[350px]">
          <img src={img1} alt="Food" className="w-full h-auto" />

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] 
                       rounded-full backdrop-blur-sm flex items-center justify-center"
          >
            <img src={logo} alt="Logo" className="w-10 sm:w-14" />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col mt-6 text-center max-w-xl">
          <span className="text-white text-2xl sm:text-3xl lg:text-[38px] font-semibold">
            Welcome to Chef Kitchen
          </span>

          <span className="text-white text-sm sm:text-base mt-2">
            Check out the awesome food experience! It's super fresh, quick,
            and oh-so tasty!
          </span>
        </div>

        {/* Button */}
        <div className="mt-8 w-full max-w-[356px]">
          <button
            onClick={() => setLoginForm(true)}
            className="w-full h-12 bg-amber-500 rounded-md text-white font-medium 
                       hover:bg-amber-600 transition"
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default ExplorePage;
