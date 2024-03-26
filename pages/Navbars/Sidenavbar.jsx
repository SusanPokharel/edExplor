import React, { useState, useEffect } from 'react';
import { GrHomeRounded } from 'react-icons/gr';
import { BsPersonLinesFill } from 'react-icons/bs';
import { PiIdentificationCard } from 'react-icons/pi';
import { PiStudentBold } from 'react-icons/pi';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { BiMessageDots } from 'react-icons/bi';
import { PiGitBranch } from "react-icons/pi";
import { BsPersonExclamation } from 'react-icons/bs';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { CiLocationOn } from "react-icons/ci"; //location
import { FaRegBuilding } from "react-icons/fa"; //college
import { GiNotebook } from "react-icons/gi"; //course
import { PiStudent } from "react-icons/pi"; // student preferences
import { GiReceiveMoney } from "react-icons/gi"; // financial aid


const dropdownItems = [
  { label: 'Location', link: '../masterData/location', icon: <CiLocationOn /> },
  { label: 'College', link: '../masterData/college', icon: <FaRegBuilding /> },
  { label: 'Course', link: '../masterData/course', icon: <GiNotebook /> },
  { label: 'Student preferences', link: '../masterData/studentPreferences', icon: <PiStudent /> },
  { label: 'Financial aid', link: '../masterData/financialAid', icon: <GiReceiveMoney /> }
];

function Sidebar() {
  const [showMasterdata, setShowMasterdata] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  useEffect(() => {
    // Get active section from local storage or default to 'dashboard'
    const storedSection = localStorage.getItem('activeSection');
    setActiveSection(storedSection || 'dashboard');
  }, []);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    localStorage.setItem('activeSection', section);
  };



  return (
    <div className="fixed top-16 left-0 h-full bg-white text-gray-800 p-2 shadow-md border-4 shadow-r z-10 overflow-y-auto">
      {/* Logo section visible on smaller screens */}
      <div className="md:hidden text-3xl text-gray-600">
        <ul>
          <li>
            <button onClick={() => { handleSectionClick('dashboard'); window.location.href = "../notDone/dashboard"; }} className={`mb-4 rounded-full p-2 ${activeSection === 'dashboard' ? 'bg-gray-300' : ''}`}>
              <GrHomeRounded />
            </button>
          </li>
          <li>
            <button onClick={() => { handleSectionClick('applications'); window.location.href = "../Applications/Common"; }} className={`mb-4 rounded-full p-2 ${activeSection === 'applications' ? 'bg-gray-300' : ''}`}>
              <BsPersonLinesFill />
            </button>
          </li>
          <li>
            <button onClick={() => { handleSectionClick('approval'); window.location.href = "../notDone/approval"; }} className={`mb-4 rounded-full p-2 ${activeSection === 'approval' ? 'bg-gray-300' : ''}`}>
              <PiIdentificationCard />
            </button>
          </li>
          <li>
            <button onClick={() => { handleSectionClick('students'); window.location.href = "../Students/studentDashboard"; }} className={`mb-4 rounded-full p-2 ${activeSection === 'students' ? 'bg-gray-300' : ''}`}>
              <PiStudentBold />
            </button>
          </li>
          <li>
            <button onClick={() => { handleSectionClick('documents'); window.location.href = "../notDone/documents"; }} className={`mb-4 rounded-full p-2 ${activeSection === 'documents' ? 'bg-gray-300' : ''}`}>
              <HiOutlineDocumentSearch />
            </button>
          </li>
          <li>
            <button onClick={() => { handleSectionClick('analytics'); window.location.href = "../notDone/analytics"; }} className={`mb-4 rounded-full p-2 ${activeSection === 'analytics' ? 'bg-gray-300' : ''}`}>
              <IoAnalyticsSharp />
            </button>
          </li>
          <li>
            <button onClick={() => { handleSectionClick('message'); window.location.href = "../notDone/message"; }} className={`mb-4 rounded-full p-2 ${activeSection === 'message' ? 'bg-gray-300' : ''}`}>
              <BiMessageDots />
            </button>
          </li>
          <li>
  <button onClick={() => { setShowMasterdata(!showMasterdata); handleSectionClick('masterdata'); }} className={`mb-4 rounded-full p-2 ${showMasterdata ? 'bg-gray-300' : ''}`}>
    <PiGitBranch />
  </button>
  {showMasterdata && (
    <ul className="pl-4">
      {dropdownItems.map((item, index) => (
        <li key={index} className="py-4 flex items-center">
          <a href={item.link} onClick={() => { handleSectionClick(item.label); setShowMasterdata(false); }} className={`flex items-center ${activeSection === 'masterdata' ? '' : ''}`}>
            <span className="text-lg">{item.icon}</span>
            {/* Conditionally render label based on screen size */}
            <span className="hidden md:inline">{item.label}</span> {/* Hide label on small screens */}
          </a>
        </li>
      ))}
    </ul>
  )}
</li>
          <li>
            <button onClick={() => { handleSectionClick('roleManagement'); window.location.href = "../roleManagement/roleManagement"; }} className={`mb-4 rounded-full p-2 ${activeSection === 'roleManagement' ? 'bg-gray-300' : ''}`}>
              <BsPersonExclamation />
            </button>
          </li>
          <li>
            <button onClick={() => { handleSectionClick('notificationManagement'); window.location.href = "../notDone/notificationManagement"; }} className={`mb-4 rounded-full p-2 ${activeSection === 'notificationManagement' ? 'bg-gray-300' : ''}`}>
              <MdOutlineNotificationsActive />
            </button>
          </li>
          <li>
            <button onClick={() => { handleSectionClick('settings'); window.location.href = "../Settings/settings"; }} className={`mb-4 rounded-full p-2 ${activeSection === 'settings' ? 'bg-gray-300' : ''}`}>
              <IoSettingsOutline />
            </button>
          </li>
        </ul>
      </div>

      {/* Sidebar content */}
      <nav className="md:flex hidden text-gray-600">
        <ul>
          <button onClick={() => { handleSectionClick('dashboard'); window.location.href = "../notDone/dashboard"; }} className={`py-4 flex items-center hover:bg-gray-100 rounded-full ${activeSection === 'dashboard' ? 'bg-gray-200 rounded-full px-4 text-black' : ''}`}>
            <GrHomeRounded className="mr-2" />
            Dashboard
          </button>
          <button onClick={() => { handleSectionClick('applications'); window.location.href = "../Applications/Common"; }} className={`py-4 flex items-center hover:bg-gray-100 rounded-full ${activeSection === 'applications' ? 'bg-gray-200 rounded-full px-4 text-black' : ''}`}>
            <BsPersonLinesFill className="mr-2" />
            Applications
          </button>
          <button onClick={() => { handleSectionClick('approval'); window.location.href = "../notDone/approval"; }} className={`py-4 flex items-center hover:bg-gray-100 rounded-full ${activeSection === 'approval' ? 'bg-gray-200 rounded-full px-4 text-black' : ''}`}>
            <PiIdentificationCard className="mr-2" />
            Approval
          </button>
          <button onClick={() => { handleSectionClick('students'); window.location.href = "../Students/studentDashboard"; }} className={`py-4 flex items-center hover:bg-gray-100 rounded-full ${activeSection === 'students' ? 'bg-gray-200 rounded-full px-4 text-black' : ''}`}>
            <PiStudentBold className="mr-2" />
            Students
          </button>
          <button onClick={() => { handleSectionClick('documents'); window.location.href = "../notDone/documents"; }} className={`py-4 flex items-center hover:bg-gray-100 rounded-full ${activeSection === 'documents' ? 'bg-gray-200 rounded-full px-4 text-black' : ''}`}>
            <HiOutlineDocumentSearch className="mr-2" />
            Documents
          </button>
          <button onClick={() => { handleSectionClick('analytics'); window.location.href = "../notDone/analytics"; }} className={`py-4 flex items-center hover:bg-gray-100 rounded-full ${activeSection === 'analytics' ? 'bg-gray-200 rounded-full px-4 text-black' : ''}`}>
            <IoAnalyticsSharp className="mr-2" />
            Analytics
          </button>
          <button onClick={() => { handleSectionClick('message'); window.location.href = "../notDone/message"; }} className={`py-4 flex items-center hover:bg-gray-100 rounded-full ${activeSection === 'message' ? 'bg-gray-200 rounded-full px-4 text-black' : ''}`}>
            <BiMessageDots className="mr-2" />
            Message
          </button>
          <button onClick={() => { handleSectionClick('masterdata'); setShowMasterdata(!showMasterdata); }} className={`py-4 flex items-center cursor-pointer hover:bg-gray-100 rounded-full ${activeSection === 'masterdata' ? 'bg-gray-200 rounded-full px-4 text-black' : ''}`}>
            <PiGitBranch className="mr-2" />
            Masterdata
          </button>
          {showMasterdata && (
            <ul className="pl-4 w-32 oevrflow-hidden">
              {dropdownItems.map((item, index) => (
                <li key={index} className="py-4 flex items-center">
                  <a href={item.link} onClick={() => { handleSectionClick('masterdata'); setShowMasterdata(false); }} className="flex items-center">
                    <span className='mr-2'>{item.icon}</span>
                    <span className='whitespace-nowrap max-w-full inline-block'>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
          <button onClick={() => { handleSectionClick('roleManagement'); window.location.href = "../roleManagement/roleManagement"; }} className={`py-4 flex items-center hover:bg-gray-100 rounded-full${activeSection === 'roleManagement' ? 'bg-gray-200 rounded-full px-4 text-black' : ''}`}>
            <BsPersonExclamation className="mr-2 text-xl" />
            <span className="overflow-hidden whitespace-nowrap">Role Management</span>
          </button>
          <button onClick={() => { handleSectionClick('notificationManagement'); window.location.href = "../notDone/notificationManagement"; }} className={`py-4 flex items-center hover:bg-gray-100 rounded-full${activeSection === 'notificationManagement' ? 'bg-gray-200 rounded-full px-4 text-black' : ''}`}>
            <MdOutlineNotificationsActive className="mr-2 text-xl" />
            <span className="overflow-hidden whitespace-nowrap">Notification</span>
          </button>
          <button onClick={() => { handleSectionClick('settings'); window.location.href = "../Settings/settings"; }} className={`py-4 flex items-center hover:bg-gray-100 rounded-full ${activeSection === 'settings' ? 'bg-gray-200 rounded-full px-4 text-black' : ''}`}>
            <IoSettingsOutline className="mr-2" />
            Settings
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
