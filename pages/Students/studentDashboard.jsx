import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { SlPencil } from 'react-icons/sl';
import { VscFilePdf } from 'react-icons/vsc';
import { RiDeleteBin6Line } from 'react-icons/ri';


const StudentData = [
    { id: "#3068", applicant: "Susan Pokharel", email: "susan@example.com", country: "Nepal, Kathmandu", faculty: "Engineering", joinedOn: "2024-03-06", appliedOn: "3 colleges" },
    { id: "#3066", applicant: "Nishan Pokharel", email: "nishan@example.com", country: "Nepal, Pokhara", faculty: "Science", joinedOn: "2023-09-02", appliedOn: "2 colleges" },
    { id: "#3065", applicant: "Durga Pokharel", email: "durga@example.com", country: "Mumbai, India", faculty: "Arts", joinedOn: "2023-10-06", appliedOn: "4 colleges" },
    { id: "#3064", applicant: "Sulav Pokharel", email: "sulav@example.com", country: "Sydney, Australia", faculty: "Business", joinedOn: "2024-01-05", appliedOn: "1 college" },
    { id: "#3061", applicant: "Ram Gurung", email: "ram@example.com", country: "Cape Town, SA", faculty: "Engineering", joinedOn: "2024-01-15", appliedOn: "2 colleges" },
    { id: "#3060", applicant: "Hari Adhikari", email: "hari@example.com", country: "USA", faculty: "Science", joinedOn: "2024-01-25", appliedOn: "4 colleges" },
    { id: "#3067", applicant: "Sita Devi Acharya", email: "sita@example.com", country: "Sydney, Australia", faculty: "Business", joinedOn: "2024-02-08", appliedOn: "2 colleges" },
    { id: "#3069", applicant: "Rajesh Sharma", email: "rajesh@example.com", country: "Delhi, India", faculty: "Engineering", joinedOn: "2023-11-12", appliedOn: "3 colleges" },
    { id: "#3070", applicant: "Anita Rai", email: "anita@example.com", country: "Kathmandu, Nepal", faculty: "Medicine", joinedOn: "2023-12-20", appliedOn: "1 college" },
    { id: "#3071", applicant: "Rajesh Khadka", email: "rajesh.k@example.com", country: "Bangalore, India", faculty: "Computer Science", joinedOn: "2024-02-01", appliedOn: "2 colleges" },
    { id: "#3072", applicant: "Sangeeta Thapa", email: "sangeeta@example.com", country: "Kathmandu, Nepal", faculty: "Business", joinedOn: "2023-12-15", appliedOn: "4 colleges" },
    { id: "#3073", applicant: "Amit Sharma", email: "amit@example.com", country: "New Delhi, India", faculty: "Law", joinedOn: "2024-01-10", appliedOn: "1 college" },
    { id: "#3074", applicant: "Shristi Thapa", email: "shristi@example.com", country: "Kathmandu, Nepal", faculty: "Engineering", joinedOn: "2024-03-10", appliedOn: "2 colleges" },
    { id: "#3075", applicant: "Ramesh Chhetri", email: "ramesh@example.com", country: "Pokhara, Nepal", faculty: "Science", joinedOn: "2023-11-25", appliedOn: "3 colleges" },
    { id: "#3076", applicant: "Anjali Thakur", email: "anjali@example.com", country: "Mumbai, India", faculty: "Arts", joinedOn: "2024-02-20", appliedOn: "1 college" },
    { id: "#3077", applicant: "Suresh Lama", email: "suresh@example.com", country: "Lalitpur, Nepal", faculty: "Business", joinedOn: "2024-02-28", appliedOn: "3 colleges" },
    { id: "#3078", applicant: "Priya Koirala", email: "priya@example.com", country: "Biratnagar, Nepal", faculty: "Medicine", joinedOn: "2023-10-15", appliedOn: "2 colleges" },
    { id: "#3079", applicant: "Raju Tamang", email: "raju@example.com", country: "Kathmandu, Nepal", faculty: "Computer Science", joinedOn: "2024-03-02", appliedOn: "4 colleges" },
    { id: "#3080", applicant: "Neha Sharma", email: "neha@example.com", country: "Delhi, India", faculty: "Engineering", joinedOn: "2023-12-05", appliedOn: "1 college" },
    { id: "#3081", applicant: "Manoj Singh", email: "manoj@example.com", country: "Lucknow, India", faculty: "Business", joinedOn: "2024-01-28", appliedOn: "3 colleges" },
    { id: "#3082", applicant: "Saraswati Devi", email: "saraswati@example.com", country: "Varanasi, India", faculty: "Arts", joinedOn: "2023-11-15", appliedOn: "2 colleges" },
    { id: "#3083", applicant: "Sajan Rai", email: "sajan@example.com", country: "Bhaktapur, Nepal", faculty: "Medicine", joinedOn: "2023-12-22", appliedOn: "4 colleges" }
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
        <div className="flex min-h-screen mt-16">
            <main className="bg-white text-black flex-1 p-2">
                <div className="bg-cyan-700 p-4 rounded-lg mb-4 mr-2">
                    <h1 className="text-2xl text-white">Students Dashboard</h1>
                </div>

                {/* Search Bars */}
                <div className="flex-1 space-x-4 mb-4 ml-2">
                    <input type="text" className="flex-1 w-1/3 h-12 px-4 border border-grey-400 rounded-lg" placeholder="Search Student Name or ID" />
                    <button type="button" className="ml-auto h-12 px-4 border border-grey-400 rounded-lg bg-white">
                        <span className="text-gray-600">+ Filter</span>
                    </button>
                </div>

                {/* Table data below the search bar */}
                <div className="p-2">
                    <div className="flex bg-gray-100 p-4 rounded-lg font-bold text-sm">
                        <div className="w-10">
                            <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                        </div>
                        <div className="w-1/6 ml-auto mr-2 min-w-24">Student ID</div>
                        <div className="w-1/4 text-left mr-2">Applicant</div>
                        <div className="w-1/3 mr-2">Country/Address</div>
                        <div className="w-1/4 mr-2">Faculty</div>
                        <div className="w-1/4 text-left">Joined on</div>
                        <div className="w-1/4  text-left">Applied on</div>
                        <div className="w-1/5 text-center">Action</div>
                    </div>

                    {StudentData.map((row) => (
                        <div key={row.id} className={`flex bg-white p-4 border border-grey-200 text-sm text-gray-500 ${selectedRows.includes(row.id) ? 'bg-gray-100' : ''}`}>
                            <div className="w-10">
                                <input type="checkbox" checked={selectedRows.includes(row.id)} onChange={() => handleSelectRow(row.id)} />
                            </div>
                            <div className="w-1/6 font-medium ml-auto text-black mr-2 min-w-24">{row.id}</div>
                            <div className="w-1/4 mr-2 text-left">
                                <span className="text-gray-800 font-medium ">{row.applicant}</span> <br /> <span className="text-sm text-light">{row.email}</span>
                            </div>
                            <div className="w-1/3 mr-2">{row.country}</div>
                            <div className="w-1/4 mr-2">{row.faculty}</div>
                            <div className="w-1/4 text-left">{row.joinedOn}</div>
                            <div className="w-1/4 text-left">{row.appliedOn}</div>

                            <div className="w-1/5 flex items-center justify-end text-base text-gray-700">
                                <a href="./studentDetails" title="View">
                                    <MdOutlineRemoveRedEye className="cursor-pointer mr-4" />
                                </a>
                                <a href="" title="View">
                                    <SlPencil className="cursor-pointer mr-4" />
                                </a>
                                <a href="your_link_here" title="Download" >
                                    <VscFilePdf className="cursor-pointer mr-4" />
                                </a>
                                <a href="your_link_here" title="Delete">
                                    <RiDeleteBin6Line className="cursor-pointer mr-4" />
                                </a>

                            </div>
                        </div>
                    ))}

                </div>

            </main>
        </div>
    );
};

export default ApplicationPage1;
