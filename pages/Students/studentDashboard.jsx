import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { SlPencil } from 'react-icons/sl';
import { VscFilePdf } from 'react-icons/vsc';
import { RiDeleteBin6Line } from 'react-icons/ri';


const StudentData = [
    { id: '#3068', applicant: 'Susan Pokharel', email: 'susan@example.com', country: 'Nepal, Kathmandu', faculty: 'Engineering', joinedOn: '2024-03-06', appliedOn: '2024-03-06' },
    { id: '#3066', applicant: 'Nishan Pokharel', email: 'nishan@example.com', country: 'Nepal, Pokhara', faculty: 'Science', joinedOn: '2023-09-02', appliedOn: '2023-09-02' },
    { id: '#3065', applicant: 'Durga Pokharel', email: 'durga@example.com', country: 'Mumbai, India', faculty: 'Arts', joinedOn: '2023-10-06', appliedOn: '2023-10-06' },
    { id: '#3064', applicant: 'Sulav Pokharel', email: 'sulav@example.com', country: 'Sydney, Australia', faculty: 'Business', joinedOn: '2024-01-05', appliedOn: '2024-01-05' },
    { id: '#3061', applicant: 'Ram Gurung', email: 'ram@example.com', country: 'Cape Town, SA', faculty: 'Engineering', joinedOn: '2024-01-15', appliedOn: '2024-01-15' },
    { id: '#3060', applicant: 'Hari Adhikari', email: 'hari@example.com', country: 'USA', faculty: 'Science', joinedOn: '2024-01-25', appliedOn: '2024-01-25' },
    { id: '#3067', applicant: 'Sita Devi Acharya', email: 'sita@example.com', country: 'Sydney, Australia', faculty: 'Business', joinedOn: '2024-02-08', appliedOn: '2024-02-08' },
];

const ApplicationPage1 = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            setSelectedRows(StudentData.map((item) => item.id));
        } else {
            setSelectedRows([]);
        }
    };

    const handleSelectRow = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    return (
        <div className="flex min-h-screen">
            <main className="bg-white text-black flex-1 mt-12">
                <div className="bg-blue-500 p-4 rounded-lg mb-4 mr-2">
                    <h1 className="text-2xl text-white">Students Dashboard</h1>
                </div>

                {/* Search Bars */}
                <div className="flex space-x-4 mb-4 ml-2">
                    <input type="text" className="flex-1 h-12 px-4 border border-grey-400 rounded-lg" placeholder="Search Student Name or ID" />
                    <input type="text" className="flex-1 h-12 px-4 border border-grey-400 rounded-lg" placeholder="Search with country or address" />
                </div>

                {/* Table data below the search bar */}
                <div className="p-2">
                    <div className="flex bg-gray-100 p-2 rounded-lg font-bold">
                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                            <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                        </div>
                        <div className="w-1/5">Student ID</div>
                        <div className="w-1/2">Applicant</div>
                        <div className="w-1/3">Country/Address</div>
                        <div className="w-1/3">Faculty</div>
                        <div className="w-24 sm:w-32 md:w-40 lg:w-1/5">Joined on</div>
                        <div className="w-1/4 sm:w-1/3 md:w-1/3 lg:w-1/4">Applied on</div>
                        <div className="w-16 sm:w-20 md:w-24 lg:w-28 ">Action</div>
                    </div>

                    {StudentData.map((row) => (
                        <div key={row.id} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(row.id) ? 'bg-gray-100' : ''}`}>
                            <div className="w-12 sm:w-10 md:w-12 lg:w-1/8"> 
                                <input type="checkbox" checked={selectedRows.includes(row.id)} onChange={() => handleSelectRow(row.id)} />
                            </div>
                            <div className="w-1/5 font-semibold">{row.id}</div>
                            <div className="w-1/2">
                                <span className="text-gray-800 text-lg font-bold">{row.applicant}</span> <br /> <span className="text-sm text-light">{row.email}</span>
                            </div>
                            <div className="w-1/3 ml-2">{row.country}</div>
                            <div className="w-1/3">{row.faculty}</div>
                            <div className="w-24 sm:w-32 md:w-40 lg:w-1/5">{row.joinedOn}</div>
                            <div className="w-1/4 sm:w-1/3 md:w-1/3 lg:w-1/4">{row.appliedOn}</div>
                            

                            <div className="w-16 sm:w-20 md:w-24 lg:w-28 flex text-lg">
                                <MdOutlineRemoveRedEye className="cursor-pointer" title="View" />
                                <SlPencil className="cursor-pointer ml-2" title="Edit" />
                                <VscFilePdf className="cursor-pointer ml-2" title="Download" />
                                <RiDeleteBin6Line className="cursor-pointer ml-2" title="Delete" />
                            </div>
                        </div>
                    ))}

                </div>

            </main>
        </div>
    );
};

export default ApplicationPage1;
