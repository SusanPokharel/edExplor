// HeadNavbar.jsx
import React from 'react';
import { MdOutlineNotifications } from "react-icons/md";
import { RiAccountPinCircleLine } from "react-icons/ri";

const HeadNavbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white text-black p-4 h-16 flex justify-between shadow-md z-20">
      <div className="flex items-center">
        <img src="/isling.png" alt="Logo" className="w-8 h-8" />
      </div>
      <div className="flex items-center">
        <MdOutlineNotifications className="text-2xl cursor-pointer mr-6" />
        <RiAccountPinCircleLine className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default HeadNavbar;
