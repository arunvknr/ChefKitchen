// import React from 'react'
// import bg from '../assets/bg.svg'
// import img1 from '../assets/img1.svg'
// import logo from '../assets/logo.svg'
// import { useNavigate } from 'react-router-dom'

// const ExplorePage = () => {
//   const navigate = useNavigate()

//   return (
//     <div
//       className="flex flex-col min-h-screen w-full items-center justify-center bg-center bg-cover bg-no-repeat px-4"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       {/* Image Section */}
//       <div className="relative w-full max-w-[300px] sm:max-w-[350px]">
//         <img src={img1} alt="Food" className="w-full h-auto" />

//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
//                         w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] 
//                         rounded-full backdrop-blur-sm flex items-center justify-center">
//           <img src={logo} alt="Logo" className="w-10 sm:w-14" />
//         </div>
//       </div>

//       {/* Text Section */}
//       <div className="flex flex-col mt-6 text-center max-w-xl">
//         <span className="text-white text-2xl sm:text-3xl lg:text-[38px] font-semibold">
//           Welcome to Chef Kitchen
//         </span>

//         <span className="text-white text-sm sm:text-base mt-2">
//           Check out the awesome food experience! It's super fresh, quick,
//           and oh-so tasty!
//         </span>
//       </div>

//       {/* Button */}
//       <div className="mt-8 w-full max-w-md">
//         <button
//           onClick={() => navigate('/home')}
//           className="w-full h-12 bg-amber-500 rounded-md text-white font-medium 
//                      hover:bg-amber-600 transition"
//         >
//           Explore More
//         </button>
//       </div>
//     </div>
//   )
// }

// export default ExplorePage



import React from "react";
import bg from "../assets/bg.svg";
import img1 from "../assets/img1.svg";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ExplorePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col min-h-screen w-full items-center justify-center bg-center bg-cover bg-no-repeat px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Image Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="relative w-full max-w-[300px] sm:max-w-[350px]"
      >
        <img src={img1} alt="Food" className="w-full h-auto" />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] 
                     rounded-full backdrop-blur-sm flex items-center justify-center"
        >
          <img src={logo} alt="Logo" className="w-10 sm:w-14" />
        </motion.div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col mt-6 text-center max-w-xl"
      >
        <span className="text-white text-2xl sm:text-3xl lg:text-[38px] font-semibold">
          Welcome to Chef Kitchen
        </span>

        <span className="text-white text-sm sm:text-base mt-2">
          Check out the awesome food experience! It's super fresh, quick,
          and oh-so tasty!
        </span>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 w-full max-w-md"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/home")}
          className="w-full h-12 bg-amber-500 rounded-md text-white font-medium 
                     hover:bg-amber-600 transition"
        >
          Explore More
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ExplorePage;
