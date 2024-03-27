import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { SlPencil } from 'react-icons/sl';
import { VscFilePdf } from 'react-icons/vsc';
import { RiDeleteBin6Line } from 'react-icons/ri';
import applicationData from './data.json';
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineTurnLeft } from "react-icons/md";
import { sortByDate } from '../../sorting/sortDate.js';
import { RiArrowDropDownLine } from "react-icons/ri";



export const ApplicationCard = ({ title, count, onClick, color }) => (
    <div onClick={onClick} className={`flex-1 p-4 rounded-lg border border-gray-200 cursor-pointer ${color}`}>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-3xl font-bold text-black mb-8">{count}</p>
        <p className="underline text-black mt-2 flex items-center">
            View All <span className="ml-1">&#8594;</span>
        </p>
    </div>
);

export const ApplicationPage = () => {
    const [selectedType, setSelectedType] = useState('Total');
    const [selectedRows, setSelectedRows] = useState([]);
    const [sortBy, setSortBy] = useState(null);
    const [showSortText, setShowSortText] = useState(false);

    const handleSelectType = (type) => {
        setSelectedType(type);

    };

    const handleSortByDate = (value) => {
        setSortBy(value);
        setShowSortText(false);
    };

    const handleSelectRow = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    let sortedData = applicationData; // Default to original data

    // Sort data based on the selected option
    if (sortBy === 'oldest') {
        sortedData = sortByDate(applicationData, 'oldest');
    } else if (sortBy === 'latest') {
        sortedData = sortByDate(applicationData, 'latest');
    }

    const filteredData = selectedType === 'Total' ? sortedData : sortedData.filter(app => app.status === selectedType);

    return (
        <div className="flex h-full p-2">
            <main className="bg-white text-black flex-1 p-2">

                <header>
                    <div className="bg-cyan-700 p-4 rounded-lg mt-16">
                        <h1 className="text-2xl text-white"> Application </h1>
                    </div>
                </header>


                <div className="flex mt-8 space-x-6 mb-6">
                    <ApplicationCard
                        title="Total Applications"
                        count={applicationData.length}
                        onClick={() => handleSelectType('Total')}
                        color="bg-white"
                    />

                    <ApplicationCard
                        title="Pending Applications"
                        count={applicationData.filter(app => app.status === 'Pending').length}
                        onClick={() => handleSelectType('Pending')}
                        color="bg-blue-100"
                    />

                    <ApplicationCard
                        title="Approved Applications"
                        count={applicationData.filter(app => app.status === 'Approved').length}
                        onClick={() => handleSelectType('Approved')}
                        color="bg-green-100"
                    />

                    <ApplicationCard
                        title="Rejected Applications"
                        count={applicationData.filter(app => app.status === 'Rejected').length}
                        onClick={() => handleSelectType('Rejected')}
                        color="bg-red-100"
                    />
                </div>

                <div className="flex space-x-4 mb-4">
                    <input type="text" className="flex-1 h-12 px-4 border border-grey-400 rounded-lg" placeholder="Search for applicant" />
                    <input type="text" className="flex-1 h-12 px-4 border border-grey-400 rounded-lg" placeholder="Search with country or address" />
                    <input type="text" className="flex-1 h-12 px-4 border border-grey-400 rounded-lg" placeholder="Search with date" />
                </div>

                <div>
                    <div className="flex bg-gray-100 p-4 rounded-lg font-bold text-sm">
                        <div className="w-10">
                            <input type="checkbox" />
                        </div>
                        <div className="w-1/5 min-w-32 ml-auto">Application ID</div>
                        <div className="w-1/3 min-w-36 text-left">Applicant</div>
                        <div className="w-1/3 min-w-32">Country/Address</div>
                        <div className="w-1/4 mb-4 relative">
                            <div className="flex items-center">
                                <div>Applied date</div>
                                <button onClick={() => setShowSortText(!showSortText)} className="flex items-center focus:outline-none">
                                    <RiArrowDropDownLine className="h-6 w-6 text-gray-800" />
                                </button>
                            </div>
                            {showSortText && (
                                <div className="absolute z-10 mt-2 w-24 bg-white rounded-lg shadow-md border border-gray-200">
                                    <div className="py-1">
                                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSortByDate('oldest')}>
                                            Oldest
                                        </div>
                                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSortByDate('latest')}>
                                            Latest
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>


                        <div className="w-1/4 ">Ownership</div>
                        <div className="w-1/5 text-left">Status</div>
                        <div className="w-1/4 text-center">Action</div>
                    </div>

                    {filteredData.map((row) => (
                        <div key={row.id} className="flex bg-white p-4 border border-grey-200 text-sm text-gray-500">
                            <div className="w-10">
                                <input type="checkbox" />
                            </div>
                            <div className="w-1/5 font-medium min-w-32 ml-auto text-black">{row.id}</div>
                            <div className="w-1/3 min-w-36 text-left ml-auto">
                                <span className="text-black font-medium">{row.collegeName}</span> <br /> <span className="text-sm text-light text-gray-500">{row.email}</span>
                            </div>
                            <div className="w-1/3 min-w-28">{row.country}</div>
                            <div className="w-1/4 min-w-24 text-left">{row.date}</div>
                            <div className="w-1/4">{row.ownership}</div>
                            <div className="w-1/5 text-left">
                                {row.status === 'Pending' && (
                                    <span className="inline-block rounded-full bg-gray-100 text-gray-600 px-2 border border-gray-100">
                                        <MdOutlineTurnLeft className="mr-1 inline" /> {row.status}
                                    </span>
                                )}
                                {row.status === 'Approved' && (
                                    <span className="inline-block rounded-full bg-green-100 text-green-500 px-2 border border-green-100">
                                        <TiTick className="mr-1 inline" /> {row.status}
                                    </span>
                                )}
                                {row.status === 'Rejected' && (
                                    <span className="inline-block rounded-full bg-red-100 text-red-500 px-2 border border-red-100">
                                        <RxCross2 className="mr-1 inline" /> {row.status}
                                    </span>
                                )}
                            </div>
                            <div className="w-1/4 flex items-center justify-end text-base cursor-pointer text-gray-700">
                                <a href="../collegeProfile/Profile" title="View">
                                    <MdOutlineRemoveRedEye className=" ml-2 mr-4" />
                                </a>
                                <a href="../collegeProfile/editProgramDetails" title="Edit">
                                    <SlPencil className="mr-4" />
                                </a>
                                <a href="your_link_here" title="Download" >
                                    <VscFilePdf className="mr-4" />
                                </a>
                                <a href="your_link_here" title="Delete">
                                    <RiDeleteBin6Line className="mr-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ApplicationPage;
