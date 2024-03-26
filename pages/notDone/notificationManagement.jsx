import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { VscFilePdf } from 'react-icons/vsc';
import { RiDeleteBin6Line } from 'react-icons/ri';

const NotificationManagement = () => {
    const [currentSection, setCurrentSection] = useState('NotificationType');
    const [showModal, setShowModal] = useState(false);
    const [notificationType, setNotificationType] = useState('');
    const [notificationTypeDesc, setNotificationTypeDesc] = useState('');
    const [notificationData, setNotificationData] = useState([]);
    const [notificationGroup, setNotificationGroup] = useState('');
    const [notificationGroupName, setNotificationGroupName] = useState('');
    const [notificationGroupDesc, setNotificationGroupDesc] = useState('');
    const [access, setAccess] = useState('');
    const [notificationTypeDrop, setNotificationTypeDrop] = useState('');
    const [notificationGroupDrop, setNotificationGroupDrop] = useState('');
    const [notificationHeader, setNotificationHeader] = useState('');
    const [notificationContent, setNotificationContent] = useState('');

    const toggleSection = (section) => {
        setCurrentSection(section);
    };

    const handleAddNewClick = () => {
        setShowModal(true);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    const handleSaveNotificationType = () => {
        const currentDate = new Date().toLocaleDateString();
        const newData = {
            name: notificationType,
            description: notificationTypeDesc,
            createdOn: currentDate
        };
        setNotificationData([...notificationData, newData]);
        setShowModal(false);
    };

    const handleSaveNotificationGroup = () => {
        const currentDate1 = new Date().toLocaleDateString();
        const newData = {
            notificationGroup: notificationGroup,
            recipients: notificationGroupName,
            descriptionGroup: notificationGroupDesc,
            createdOn1: currentDate1
        };
        setNotificationData([...notificationData, newData]);
        setShowModal(false);
    };

    const handleSaveCreateNotification = () => {
        const currentDate2 = new Date().toLocaleDateString();
        const newData = {
            sender: "admin", // Assuming sender is set to "admin"
            recipient: "Student", // Assuming recipient is set to "Student"
            notificationType: notificationTypeDrop,
            notificationGroup: notificationGroupDrop,
            createdOn2: currentDate2
        };
        setNotificationData([...notificationData, newData]);
        setShowModal(false);
    };

    return (
        <div className="flex min-h-screen mt-16">
            <main className="bg-white text-black flex-1 p-2">
                <div className="bg-cyan-700 p-4 rounded-lg">
                    <h1 className="text-2xl text-white">Notification Management</h1>
                </div>

                <div className="mt-10">
                    <div className="mt-6 mx-4">
                        <button onClick={() => toggleSection('NotificationType')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'NotificationType' ? 'text-black' : 'text-gray-500'}`}>
                            Notification Type
                            {currentSection === 'NotificationType' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4 "></span>}
                        </button>

                        <button onClick={() => toggleSection('NotificationGroup')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'NotificationGroup' ? 'text-black' : 'text-gray-500'}`}>
                            Notification Group
                            {currentSection === 'NotificationGroup' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4"></span>}
                        </button>

                        <button onClick={() => toggleSection('CreateNotification')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'CreateNotification' ? 'text-black' : 'text-gray-500'}`}>
                            Create Notification
                            {currentSection === 'CreateNotification' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4"></span>}
                        </button>
                    </div>
                </div>

                {currentSection === 'NotificationType' && (
                    <div className="flex space-x-4 items-center mt-10 ml-2">
                        <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search notification type" />

                        <div className="items-end space-x-6">
                            <button onClick={handleAddNewClick} className="bg-orange-500 text-white px-4 py-2 border border-orange-500 hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                + Create new
                            </button>
                            <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500 hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                View all
                            </button>


                            {showModal && (
                                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                                    <div className="bg-white p-6 rounded-lg flex-1 max-w-96">
                                        <h2 className="text-2xl font-bold mb-4">Add New Notification Type</h2>
                                        <div className="mb-4">
                                            <label htmlFor="notificationTypeName" className="block text-lg font-medium mb-2">Name</label>
                                            <input
                                                type="text"
                                                id="notificationTypeName"
                                                className="w-full border border-gray-300 rounded-md py-2 px-3"
                                                placeholder="Enter name"
                                                value={notificationType}
                                                onChange={(e) => setNotificationType(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="notificationTypeDesc" className="block text-lg font-medium mb-2">Description</label>
                                            <textarea
                                                id="notificationTypeDesc"
                                                className="w-full border border-gray-300 rounded-md py-2 px-3 resize-vertical"
                                                placeholder="Enter description"
                                                value={notificationTypeDesc}
                                                onChange={(e) => setNotificationTypeDesc(e.target.value)}
                                            ></textarea>
                                        </div>
                                        <div className="flex justify-end mt-4">
                                            <button onClick={handleCancel} className="mr-4 bg-white-500 text-gray-600 border border-gray-600 px-4 py-2 hover:bg-blue-300 hover:border-blue-300 rounded-md">Cancel</button>
                                            <button onClick={handleSaveNotificationType} className="bg-orange-500 text-white px-4 py-2 rounded-md border border-orenge-500 hover:bg-green-500 hover:border-green-500">Save</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}




                {currentSection === 'NotificationGroup' && (
                    <div>
                        <div className="flex space-x-4 items-center mt-10 ml-2">
                            <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search notification group" />
                            <div className="items-end space-x-6">
                                <button onClick={handleAddNewClick} className="bg-orange-500 text-white px-4 py-2 border border-orange-500 hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                    + Create new
                                </button>
                                <button onClick={() => { /* Handle view all */ }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500 hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                    View all
                                </button>
                            </div>
                            {showModal && (
                                <div className="fixed top-10 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                                    <div className="bg-white p-6 rounded-lg flex-1 max-w-xl">
                                        <h2 className="text-2xl font-bold mb-4">Create Group</h2>
                                        <div className="mb-4">
                                            <label htmlFor="notificationGroup" className="block text-lg font-medium mb-2">Group type</label>
                                            <select
                                                id="notificationGroup"
                                                className="w-full border border-gray-300 rounded-md py-2 px-3"
                                                value={notificationGroup}
                                                onChange={(e) => setNotificationGroup(e.target.value)}
                                            >
                                                <option value="student">Student</option>
                                                <option value="colleges">College</option>
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="notificationGroupName" className="block text-lg font-medium mb-2">Group name</label>
                                            <input
                                                id="notificationGroupName"
                                                className="w-full border border-gray-300 rounded-md py-2 px-3 resize-vertical"
                                                placeholder=""
                                                value={notificationGroupName}
                                                onChange={(e) => setNotificationGroupName(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="notificationGroupDesc" className="block text-lg font-medium mb-2">Description (Optional)</label>
                                            <textarea
                                                id="notificationGroupDesc"
                                                className="w-full border border-gray-300 rounded-md py-2 px-3 resize-vertical"
                                                placeholder=""
                                                value={notificationGroupDesc}
                                                onChange={(e) => setNotificationGroupDesc(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="access" className="block text-lg font-medium mb-2">Select types of students</label>
                                            <div class="flex flex-col mb-2 border-2 p-2 font-semibold">
                                                <div class="flex items-center mb-1">
                                                    <input type="checkbox" id="access" className="mr-2" onChange={(e) => setAccess(e.target.checked ? 'access' : '')} />
                                                    <label htmlFor="option1">Waitlisted Students</label>
                                                </div>
                                                <div class="flex items-center mb-1">
                                                    <input type="checkbox" id="access" className="mr-2" onChange={(e) => setAccess(e.target.checked ? 'access' : '')} />
                                                    <label htmlFor="option2">Accepted Students</label>
                                                </div>
                                                <div class="flex items-center mb-1">
                                                    <input type="checkbox" id="access" className="mr-2" onChange={(e) => setAccess(e.target.checked ? 'access' : '')} />
                                                    <label htmlFor="option3">Rejected Students</label>
                                                </div>
                                                <div class="flex items-center mb-1">
                                                    <input type="checkbox" id="access" className="mr-2" onChange={(e) => setAccess(e.target.checked ? 'access' : '')} />
                                                    <label htmlFor="option2">Students who havenot applied for any colleges</label>
                                                </div>
                                                <div class="flex items-center mb-1">
                                                    <input type="checkbox" id="access" className="mr-2" onChange={(e) => setAccess(e.target.checked ? 'access' : '')} />
                                                    <label htmlFor="option3">Students who have applied for scholarship</label>
                                                </div>
                                                <div class="fltems-center mb-1">
                                                    <input type="checkbox" id="access" className="mr-2" onChange={(e) => setAccess(e.target.checked ? 'access' : '')} />
                                                    <label htmlFor="option2">Students who got the scholarship</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-4 flex flex-wrap">
                                            <div className="w-full md:w-3/5 pr-6">
                                                <label htmlFor="notificationTypeDrop" className="block text-lg font-medium mb-2">Manual Selection</label>
                                                <input
                                                    type="text"
                                                    id="notificationTypeDrop"
                                                    className="w-full border border-gray-300 rounded-md py-2 px-3"
                                                    placeholder=""
                                                    value={notificationTypeDrop}
                                                    onChange={(e) => setNotificationTypeDrop(e.target.value)}
                                                />
                                            </div>
                                            <div className="w-full md:w-2/5">
                                                <label htmlFor="imageUpload" className="block text-lg font-medium mb-2">Upload Image</label>
                                                <input
                                                    type="file"
                                                    id="imageUpload"
                                                    className="w-full border border-blue-600 rounded-md py-2 px-3 border-dashed"
                                                    onChange={(e) => handleImageUpload(e)}
                                                />
                                            </div>
                                        </div>


                                        <div className="flex justify-end mt-4">
                                            <button onClick={handleCancel} className="mr-4 bg-white-500 text-gray-600 border border-gray-600 px-4 py-2 hover:bg-blue-300 hover:border-blue-300 rounded-md">Cancel</button>
                                            <button onClick={handleSaveNotificationGroup} className="bg-orange-500 text-white px-4 py-2 rounded-md border border-orenge-500 hover:bg-green-500 hover:border-green-500">Save</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {currentSection === 'CreateNotification' && (
                    <div className="flex space-x-4 items-center mt-10 ml-2">
                        <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search" />
                        <div className="items-end space-x-6">
                            <button onClick={handleAddNewClick} className="bg-orange-500 text-white px-4 py-2 border border-orange-500 hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                + Send notifications
                            </button>
                            <button onClick={() => { /* Handle view all */ }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500 hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                View all
                            </button>
                        </div>
                        {showModal && (
                            <div className="fixed top-5 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                                <div className="bg-white p-6 rounded-lg flex-1 max-w-xl">
                                    <h2 className="text-2xl font-bold mb-4">Create Notification</h2>
                                    <div className="mb-4 flex flex-wrap">
                                        <div className="w-full md:w-1/2 pr-6">
                                            <label htmlFor="notificationTypeDrop" className="block text-lg font-medium mb-2">Notification Type</label>
                                            <input
                                                type="text"
                                                id="notificationTypeDrop"
                                                className="w-full border border-gray-300 rounded-md py-2 px-3"
                                                placeholder=""
                                                value={notificationTypeDrop}
                                                onChange={(e) => setNotificationTypeDrop(e.target.value)}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <label htmlFor="notificationGroupDrop" className="block text-lg font-medium mb-2">Notification Group</label>
                                            <input
                                                type="text"
                                                id="notificationGroupDrop"
                                                className="w-full border border-gray-300 rounded-md py-2 px-3"
                                                placeholder=""
                                                value={notificationGroupDrop}
                                                onChange={(e) => setNotificationGroupDrop(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="notificationHeader" className="block text-lg font-medium mb-2">Header</label>
                                        <input
                                            id="notificationHeader"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3 resize-vertical"
                                            placeholder=""
                                            value={notificationHeader}
                                            onChange={(e) => setNotificationHeader(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="notificationContent" className="block text-lg font-medium mb-2">Content</label>
                                        <textarea
                                            id="notificationContent"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3 resize-vertical"
                                            placeholder=""
                                            value={notificationContent}
                                            onChange={(e) => setNotificationContent(e.target.value)}
                                            rows={3}
                                        />
                                    </div>


                                    <div className="flex justify-end mt-4">
                                        <button onClick={handleCancel} className="mr-4 bg-white-500 text-gray-600 border border-gray-600 px-4 py-2 hover:bg-blue-300 hover:border-blue-300 rounded-md">Cancel</button>
                                        <button onClick={handleSaveCreateNotification} className="bg-orange-500 text-white px-4 py-2 rounded-md border border-orenge-500 hover:bg-green-500 hover:border-green-500">Save</button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                )}
                
                <table className="mt-5 w-full">
                    <thead>
                        <tr>
                            {currentSection === 'NotificationType' && (
                                <>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Description</th>
                                    <th className="px-4 py-2">Created On</th>
                                    <th className="px-4 py-2">Action</th>
                                </>
                            )}
                            {currentSection === 'NotificationGroup' && (
                                <>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Recipients</th>
                                    <th className="px-4 py-2">Description</th>
                                    <th className="px-4 py-2">Created On</th>
                                    <th className="px-4 py-2">Action</th>
                                </>
                            )}
                            {currentSection === 'CreateNotification' && (
                                <>
                                    <th className="px-4 py-2">Sender</th>
                                    <th className="px-4 py-2">Recipient</th>
                                    <th className="px-4 py-2">Notification Type</th>
                                    <th className="px-4 py-2">Notification Group</th>
                                    <th className="px-4 py-2">Created On</th>
                                    <th className="px-4 py-2">Action</th>
                                </>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {notificationData.map((data, index) => {
                            let hasRelevantData = false;

                            if (currentSection === 'NotificationType') {
                                hasRelevantData = Object.keys(data).some(key => ['name', 'description', 'createdOn'].includes(key));
                            } else if (currentSection === 'NotificationGroup') {
                                hasRelevantData = Object.keys(data).some(key => ['notificationGroup', 'recipients', 'descriptionGroup', 'createdOn1'].includes(key));
                            } else if (currentSection === 'CreateNotification') {
                                hasRelevantData = Object.keys(data).some(key => ['sender', 'recipient', 'notificationTypeDrop', 'notificationGroupDrop', 'createdOn2'].includes(key));
                            }

                            // Rendering
                            if (hasRelevantData) {
                                return (
                                    <tr key={index}>
                                        {Object.keys(data).map((key) => {
                                            let relevantKey = false;
                                            if (currentSection === 'NotificationType') {
                                                relevantKey = ['name', 'description', 'createdOn'].includes(key);
                                            } else if (currentSection === 'NotificationGroup') {
                                                relevantKey = ['notificationGroup', 'recipients', 'descriptionGroup', 'createdOn1'].includes(key);
                                            } else if (currentSection === 'CreateNotification') {
                                                relevantKey = ['sender', 'recipient', 'notificationTypeDrop', 'notificationGroupDrop', 'createdOn2'].includes(key);
                                            }

                                            // Render cell 
                                            if (relevantKey) {
                                                return <td className="border px-4 py-2">{data[key]}</td>;
                                            } else {
                                                return null; // Render nothing 
                                            }
                                        })}
                                        <td className="border px-4 py-2">
                                            <div className="w-16 sm:w-20 flex items-center text-xl">
                                                <a href="" title="View">
                                                    <MdOutlineRemoveRedEye className="cursor-pointer" />
                                                </a>
                                                <a href="your_link_here" title="Download" >
                                                    <VscFilePdf className="cursor-pointer ml-2" />
                                                </a>
                                                <a href="your_link_here" title="Delete">
                                                    <RiDeleteBin6Line className="cursor-pointer ml-2" />
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            } else {
                                return null; // Render nothing
                            }
                        })}
                    </tbody>
                </table>
            </main>
        </div>
    );
};


export default NotificationManagement;
