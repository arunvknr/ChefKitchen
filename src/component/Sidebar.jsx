// import React, { useState } from "react";
// import Home from "../assets/icn2.svg?react";
// import Coupons from "../assets/icn3.svg?react";
// import Whishlist from "../assets/icn4.svg?react";
// import Email from "../assets/icn5.svg?react";
// import Notification from "../assets/icn6.svg?react";
// import Exit from "../assets/icn7.svg";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   const sideBarItems = [
//     { id: 1, icon: <Home /> },
//     { id: 2, icon: <Coupons /> },
//     { id: 3, icon: <Whishlist /> },
//     { id: 4, icon: <Email /> },
//     { id: 5, icon: <Notification /> },
//   ];

//   const [activeButton, setActiveButton] = useState(sideBarItems[0].id);

//   return (
//     <div className="bg-[#1F1D2B] min-h-screen w-24 flex flex-col fixed top-0">
//       {/* Logo */}
//       <div className="flex items-center justify-center mt-4">
//         <img src="/Logo.png" alt="Logo" className="w-15 h-15" />
//       </div>

//       {/* Sidebar Buttons */}
//       <div className="flex flex-col items-center gap-y-4 mt-7 w-full flex-1 relative pl-3">
//         {sideBarItems.map((item) => (
//           <button
//             key={item.id}
//             onClick={() => setActiveButton(item.id)}
//             className={`relative w-full h-16 flex items-center justify-center
//               cursor-pointer rounded-l-2xl
//               transition-all duration-500 ease-in-out
//               ${
//                 activeButton === item.id
//                   ? "bg-gray-800"
//                   : "bg-[#1F1D2B]"
//               }`}
//           >
//             {/* Orange circle behind icon */}
//             <span
//               className={`absolute w-10 h-10 rounded-xl bg-orange-500
//                 transition-all duration-500 ease-in-out
//                 ${
//                   activeButton === item.id
//                     ? "opacity-100 scale-100"
//                     : "opacity-0 scale-75"
//                 }`}
//             ></span>

//             {/* Icon */}
//             <span
//               className={`relative z-10 transition-colors duration-500
//                 ${
//                   activeButton === item.id
//                     ? "text-white"
//                     : "text-button"
//                 }`}
//             >
//               {item.icon}
//             </span>

//             {/* Top cuttings */}
//             <span
//               className={`w-5 h-5 bg-[#1F1D2B] absolute -top-5 right-0 rounded-br-2xl z-20
//                 transition-all duration-500
//                 ${
//                   activeButton === item.id
//                     ? "opacity-100"
//                     : "opacity-0"
//                 }`}
//             ></span>
//             <span
//               className={`w-5 h-5 bg-gray-800 absolute -top-5 right-0 z-10
//                 transition-all duration-500
//                 ${
//                   activeButton === item.id
//                     ? "opacity-100"
//                     : "opacity-0"
//                 }`}
//             ></span>

//             {/* Bottom cuttings */}
//             <span
//               className={`w-5 h-5 bg-[#1F1D2B] absolute -bottom-5 right-0 rounded-tr-2xl z-20
//                 transition-all duration-500
//                 ${
//                   activeButton === item.id
//                     ? "opacity-100"
//                     : "opacity-0"
//                 }`}
//             ></span>
//             <span
//               className={`w-5 h-5 bg-gray-800 absolute -bottom-5 right-0 z-10
//                 transition-all duration-500
//                 ${
//                   activeButton === item.id
//                     ? "opacity-100"
//                     : "opacity-0"
//                 }`}
//             ></span>
//           </button>
//         ))}

//         {/* Exit button */}
//         <Link to="/">
//           <button className="mt-23 mb-4">
//             <img src={Exit} alt="Exit" className="w-6 h-6 text-[#F99147]" />
//           </button>
//         </Link>
//       </div>
//       <div className="fixed bottom-0 left-0 z-50 w-full bg-[#1F1D2B] border-t border-gray-800 lg:hidden">
//   <nav className="flex justify-around items-center h-14">
//     <button className="flex flex-col items-center">
//       <Home className="w-6 h-6" />
//     </button>

//     <button className="flex flex-col items-center">
//       <Coupons  className="w-6 h-6" />
//     </button>

//     <button className="flex flex-col items-center">
//       <Email  className="w-6 h-6" />
//     </button>

//     <button className="flex flex-col items-center">
//       <Notification  className="w-6 h-6" />
//     </button>
//   </nav>
// </div>



//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import Home from "../assets/icn2.svg?react";
import Coupons from "../assets/icn3.svg?react";
import Whishlist from "../assets/icn4.svg?react";
import Email from "../assets/icn5.svg?react";
import Notification from "../assets/icn6.svg?react";
import Exit from "../assets/icn7.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sideBarItems = [
    { id: 1, icon: <Home /> },
    { id: 2, icon: <Coupons /> },
    { id: 3, icon: <Whishlist /> },
    { id: 4, icon: <Email /> },
    { id: 5, icon: <Notification /> },
  ];

  const [activeButton, setActiveButton] = useState(sideBarItems[0].id);

  return (
    <>
      {/* ===== Desktop Sidebar ===== */}
      <div className="hidden lg:flex bg-[#1F1D2B] min-h-screen w-24 flex-col fixed top-0 left-0 z-40">
        {/* Logo */}
        <div className="flex items-center justify-center mt-4">
          <img src="/Logo.png" alt="Logo" className="w-15 h-15" />
        </div>

        {/* Sidebar Buttons */}
        <div className="flex flex-col items-center gap-y-4 mt-7 w-full flex-1 relative pl-3">
          {sideBarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveButton(item.id)}
              className={`relative w-full h-16 flex items-center justify-center
                cursor-pointer rounded-l-2xl
                transition-all duration-500 ease-in-out
                ${
                  activeButton === item.id
                    ? "bg-gray-800"
                    : "bg-[#1F1D2B]"
                }`}
            >
              {/* Orange background */}
              <span
                className={`absolute w-10 h-10 rounded-xl bg-orange-500
                  transition-all duration-500 ease-in-out
                  ${
                    activeButton === item.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75"
                  }`}
              />

              {/* Icon */}
              <span
                className={`relative z-10 transition-colors duration-500
                  ${
                    activeButton === item.id
                      ? "text-white"
                      : "text-gray-400"
                  }`}
              >
                {item.icon}
              </span>

              {/* Top curve */}
              <span
                className={`w-5 h-5 bg-[#1F1D2B] absolute -top-5 right-0 rounded-br-2xl z-20
                  ${activeButton === item.id ? "opacity-100" : "opacity-0"}`}
              />
              <span
                className={`w-5 h-5 bg-gray-800 absolute -top-5 right-0 z-10
                  ${activeButton === item.id ? "opacity-100" : "opacity-0"}`}
              />

              {/* Bottom curve */}
              <span
                className={`w-5 h-5 bg-[#1F1D2B] absolute -bottom-5 right-0 rounded-tr-2xl z-20
                  ${activeButton === item.id ? "opacity-100" : "opacity-0"}`}
              />
              <span
                className={`w-5 h-5 bg-gray-800 absolute -bottom-5 right-0 z-10
                  ${activeButton === item.id ? "opacity-100" : "opacity-0"}`}
              />
            </button>
          ))}

          {/* Exit */}
          <Link to="/" className="mt-24 mb-4">
            <button>
              <img src={Exit} alt="Exit" className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>

      {/* ===== Mobile Bottom Navbar ===== */}
      <div className="fixed bottom-0 left-0 z-50 w-full bg-[#1F1D2B] border-t border-gray-800 lg:hidden">
        <nav className="flex justify-around items-center h-14">
          {[1, 2, 4, 5].map((id, index) => {
            const icons = [Home, Coupons, Email, Notification];
            const Icon = icons[index];

            return (
              <button
                key={id}
                onClick={() => setActiveButton(id)}
                className="flex items-center justify-center"
              >
                <Icon
                  className={`w-6 h-6 transition-colors ${
                    activeButton === id
                      ? "text-orange-500"
                      : "text-gray-400"
                  }`}
                />
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
