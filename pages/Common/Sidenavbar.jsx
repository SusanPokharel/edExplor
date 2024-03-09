import React, { useState } from 'react';
import { GrHomeRounded } from 'react-icons/gr';
import { BsPersonLinesFill } from 'react-icons/bs';
import { PiIdentificationCard } from 'react-icons/pi';
import { PiStudentBold } from 'react-icons/pi';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { BiMessageDots } from 'react-icons/bi';
import { BsDatabaseDown } from 'react-icons/bs';
import { BsPersonExclamation } from 'react-icons/bs';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';

const Sidebar = () => {
  const [showMasterdata, setShowMasterdata] = useState(false);
  const dropdownItems = ['Location', 'Filter', 'Colleges', 'Approval Request'];

  return (
    <div className="fixed top-16 left-0 h-full bg-white text-gray-800 p-4 shadow-md">
      {/* Logo section visible on smaller screens */}
      <div className="md:hidden text-3xl">
        <GrHomeRounded className="mb-4" />
        <BsPersonLinesFill className="mb-4" />
        <PiIdentificationCard className="mb-4" />
        <HiOutlineDocumentSearch className="mb-4" />
        <IoAnalyticsSharp className="mb-4" />  
        <BiMessageDots className="mb-4" />   
        <BsDatabaseDown className="mb-4" /> 
        <BsPersonExclamation className="mb-4"  />  
        <MdOutlineNotificationsActive className="mb-4"  />
        <IoSettingsOutline className="mb-4" />
      </div>


      {/* Sidebar content */}
      <nav className="md:flex hidden">
        <ul>
          <li className="py-2 flex items-center">
            <GrHomeRounded className="mr-2" />
            Dashboard
          </li>
          <li className="py-2 flex items-center">
            <BsPersonLinesFill className="mr-2" />
            Applications
          </li>
          <li className="py-2 flex items-center">
            <PiIdentificationCard className="mr-2" />
            Approval
          </li>
          <li className="py-2 flex items-center">
            <PiStudentBold className="mr-2" />
            Students
          </li>
          <li className="py-2 flex items-center">
            <HiOutlineDocumentSearch className="mr-2" />
            Documents
          </li>
          <li className="py-2 flex items-center">
            <IoAnalyticsSharp className="mr-2" />
            Analytics
          </li>
          <li className="py-2 flex items-center">
            <BiMessageDots className="mr-2" />
            Message
          </li>
          <li
            className="py-2 flex items-center cursor-pointer"
            onClick={() => setShowMasterdata(!showMasterdata)}
          >
            <BsDatabaseDown className="mr-2" />
            Masterdata
          </li>
          {showMasterdata && (
            <ul className="pl-4">
              {dropdownItems.map((item, index) => (
                <li key={index} className="py-2">
                  {item}
                </li>
              ))}
            </ul>
          )}
          <li className="py-2 flex items-center">
            <BsPersonExclamation className="mr-2 text-xl" />
            <span className="overflow-hidden whitespace-nowrap">Role Management</span>
          </li>
          <li className="py-2 flex items-center ">
            <MdOutlineNotificationsActive className="mr-2 text-xl" />
            <span className="overflow-hidden whitespace-nowrap">Notification</span>
          </li>
          <li className="py-2 flex items-center">
            <IoSettingsOutline className="mr-2" />
            Settings
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
