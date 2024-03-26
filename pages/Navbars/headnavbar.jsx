// HeadNavbar.jsx
import React from 'react';
import { MdOutlineNotifications } from "react-icons/md";
import { RiAccountPinCircleLine } from "react-icons/ri";

const HeadNavbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white text-black p-4 h-16 flex justify-between shadow-md z-20">
      <div className="flex items-center">
        <a href="../notDone/dashboard">
          <img src="/edxplor.png" alt="Logo" className="w-24 h-20 ml-4" />
        </a>
      </div>
      <div className="flex items-center">
        <a href="../Notification" title="Notifications" className="mr-6">
          <MdOutlineNotifications className="text-2xl cursor-pointer" />
        </a>
        <RiAccountPinCircleLine className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default HeadNavbar;

