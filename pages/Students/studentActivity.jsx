import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { VscFilePdf } from 'react-icons/vsc';
import { RiDeleteBin6Line } from 'react-icons/ri';

const StudentActivity = () => {
    const [showRecentActivities, setShowRecentActivities] = useState(true);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [applicationData] = useState([
        {
            id: "#3036",
            collegeName: "Islington College",
            email: "islington@example.com",
            country: "Nepal",
            date: "2024-03-10",
            ownership: "Public",
            status: "Pending"
        },
        {
            id: "#3046",
            collegeName: "Kathmandu University",
            email: "kathu@example.com",
            country: "Nepal",
            date: "2024-03-09",
            ownership: "Private",
            status: "Approved"
        },
        {
            id: "#3033",
            collegeName: "Tribhuvan University",
            email: "tribhu@example.com",
            country: "Nepal",
            date: "2024-02-09",
            ownership: "Private",
            status: "Rejected"
        },
        {
            id: "#3032",
            collegeName: "Pokhara University",
            email: "pokhara@example.com",
            country: "Nepal",
            date: "2024-02-29",
            ownership: "Private",
            status: "Approved"
        },
        {
            id: "#3026",
            collegeName: "Nepal Engineering College",
            email: "nec@example.com",
            country: "Nepal",
            date: "2024-03-01",
            ownership: "Private",
            status: "Rejected"
        },
        {
            id: "#3038",
            collegeName: "Nepal Medical College",
            email: "nmc@example.com",
            country: "Nepal",
            date: "2024-02-15",
            ownership: "Private",
            status: "Rejected"
        },
    ]);


    const toggleRecentActivities = () => {
        setShowRecentActivities(true);
    };

    const toggleApplicationHistory = () => {
        setShowRecentActivities(false);
    };

    const handleSelectAll = (e) => {
        const isChecked = e.target.checked;
        setSelectAll(isChecked);
        const selectedRowIds = isChecked ? applicationData.map(row => row.id) : [];
        setSelectedRows(selectedRowIds);
    };

    const handleSelectRow = (id) => {
        const selectedIndex = selectedRows.indexOf(id);
        const newSelected = [...selectedRows];

        if (selectedIndex === -1) {
            newSelected.push(id);
        } else {
            newSelected.splice(selectedIndex, 1);
        }

        setSelectedRows(newSelected);
    };

    const generateNotification = (id, text, timestamp) => (
        <div id={id} className="bg-white border mb-4 p-4 flex flex-col">
            <div className="flex items-center space-x-4">
                <img src="/susan.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
                <div className="flex-1">
                    <p className=" text-black font-medium text-2xl">{text}</p>
                    <span className="text-gray-500 text-lg mt-2 time" data-timestamp={timestamp}>{formatTimestamp(timestamp)}</span>
                </div>
            </div>
        </div>
    );

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        return (
            <span>
                {formattedDate} <span className="text-2xl">·</span> {formattedTime}
            </span>
        );
    };

    return (
        <div className="flex h-full mt-16">
            <main className="bg-white text-black flex-1 p-2">
                <div className="bg-cyan-700 p-4 rounded-lg mb-4 mr-2">
                    <h1 className="text-2xl text-white">Students Dashboard &gt; Activities</h1>
                </div>

                <div className="mt-10 mx-4">
                    <button onClick={toggleRecentActivities} className={`text-2xl px-4 py-2 relative font-medium ${showRecentActivities ? 'text-black' : 'text-gray-500'}`}>
                        Recent Activities
                        {showRecentActivities && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4 "></span>}
                    </button>

                    <button onClick={toggleApplicationHistory} className={`text-2xl px-4 py-2 relative font-medium ${showRecentActivities ? 'text-gray-500' : 'text-black'}`}>
                        Application History
                        {!showRecentActivities && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4"></span>}
                    </button>
                </div>

                <div className="font-sans">
                    <div className="mt-10 mx-4" id="timeContainer">
                        {showRecentActivities &&
                            <>
                                {generateNotification("notification1", "Islington College has requested for approval.", "2024-02-29T18:20:00")}
                                {generateNotification("notification2", "A new application has been received.", "2024-02-26T10:45:00")}
                                {generateNotification("notification3", "Your application status has been updated.", "2024-03-03T15:30:00")}
                                {generateNotification("notification4", "Reminder: Deadline for course registration.", "2024-03-07T09:00:00")}
                                {generateNotification("notification5", "Congratulations! You have been accepted.", "2024-03-06T14:15:00")}
                                {generateNotification("notification6", "Your application status has been updated.", "2024-03-02T15:30:00")}
                                {generateNotification("notification7", "Reminder: Deadline for course registration.", "2024-03-01T09:00:00")}
                                {generateNotification("notification8", "Your application status has been updated.", "2024-03-02T15:30:00")}
                                {generateNotification("notification9", "Reminder: Deadline for course registration.", "2024-03-08T09:00:00")}
                            </>
                        }
                    </div>
                </div>

                <div>
                    <div>
                        {!showRecentActivities &&
                            <>
                                <div className="flex bg-gray-100 p-2 rounded-lg font-bold text-center">
                                    <div className="w-10">
                                        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                                    </div>
                                    <div className="w-1/5 min-w-32">Application ID</div>
                                    <div className="w-1/2 min-w-36 text-left ml-14">College Name/Email</div>
                                    <div className="w-1/3 min-w-32">Country/Address</div>
                                    <div className="w-1/3 min-w-28 text-left ml-14">Applied date</div>
                                    <div className="w-24 lg:w-1/5">Ownership</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-16 sm:w-20">Action</div>
                                </div>

                                {applicationData.map((row) => (
                                    <div key={row.id} className={`flex bg-white p-2 border border-grey-200 text-center${selectedRows.includes(row.id) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-10">
                                            <input type="checkbox" checked={selectedRows.includes(row.id)} onChange={() => handleSelectRow(row.id)} />
                                        </div>
                                        <div className="w-1/5 font-semibold  min-w-32">{row.id}</div>
                                        <div className="w-1/2 min-w-36 text-left ml-14">
                                            <span className="text-gray-800 text-lg font-bold">{row.collegeName}</span> <br /> <span className="text-sm text-light">{row.email}</span>
                                        </div>
                                        <div className="w-1/3 min-w-28 ">{row.country}</div>
                                        <div className="w-1/3 min-w-28 text-left ml-20">{row.date}</div>
                                        <div className="w-24 lg:w-1/5">{row.ownership}</div>
                                        <div className="w-1/4">
                                            {row.status === 'Pending' && <span className="rounded-full bg-gray-100 text-gray-600 px-2">{row.status}</span>}
                                            {row.status === 'Approved' && <span className="rounded-full bg-gray-100 text-green-500 px-2">{row.status}</span>}
                                            {row.status === 'Rejected' && <span className="rounded-full bg-gray-100 text-red-500 px-2">{row.status}</span>}
                                        </div>
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
                                    </div>
                                ))}
                            </>
                        }
                    </div>
                </div>

            </main>
        </div>
    );
};

export default StudentActivity;
