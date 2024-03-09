//Common
import React, { useState } from 'react';
import applicationData from './data';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { SlPencil } from 'react-icons/sl';
import { VscFilePdf } from 'react-icons/vsc';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const PageHeader = ({ title }) => (
    <header>
        <div className="bg-blue-500 p-4 rounded-lg">
            <h1 className="text-2xl text-white">{title}</h1>
        </div>
    </header>
);

export const ApplicationCard = ({ title, count, link, color }) => (
    <div className={`flex-1 p-4 rounded-lg border border-gray-200 ${color}`}>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-3xl font-bold text-black mb-6">{count}</p>
        <a href={link} className="underline text-black mt-2 flex items-center">
            View All <span className="ml-1">&#8594;</span>
        </a>
    </div>
);


export const ApplicationPage = ({ title, data, link, color }) => {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            setSelectedRows(data.map((item) => item.id));
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

    const pendingApplications = applicationData.filter((app) => app.status === 'Pending');
    const approvedApplications = applicationData.filter((app) => app.status === 'Approved');
    const rejectedApplications = applicationData.filter((app) => app.status === 'Rejected');

    return (
        <div className="flex min-h-screen">
            <main className="bg-white text-black flex-1 p-4 pt-20">
                <PageHeader title={title} />

                <div className="flex mt-8 space-x-4 mb-6">
                    {/* Total Applications Card */}
                    <ApplicationCard
                        title={`Total Applications`}
                        count={data.length}
                        link={link}
                        color={color}
                    />

                    {/* Pending Applications Card - file (pending-application) */}
                    <ApplicationCard
                        title="Pending Applications"
                        count={pendingApplications.length}
                        link="/Applications/pending-applications"
                        color="bg-blue-100"
                    />

                    {/* Approved Applications Card - file (approved-application) */}
                    <ApplicationCard
                        title="Approved Applications"
                        count={approvedApplications.length}
                        link="/Applications/approved-applications"
                        color="bg-green-100"
                    />

                    {/* Rejected Applications Card  - file (rejected-application) */}
                    <ApplicationCard
                        title="Rejected Applications"
                        count={rejectedApplications.length}
                        link="/Applications/rejected-applications"
                        color="bg-red-100"
                    />
                </div>
                {/* Search Bars */}
                <div className="flex space-x-4 mb-4">

                    {/* Search for Applicant */}
                    <input type="text" className="flex-1 h-12 px-4 border border-grey-400 rounded-lg" placeholder="Search for applicant" />

                    {/* Search with Country or Address */}
                    <input type="text" className="flex-1 h-12 px-4 border border-grey-400 rounded-lg" placeholder="Search with country or address" />

                    {/* Search with Date */}
                    <input type="text" className="flex-1 h-12 px-4 border border-grey-400 rounded-lg" placeholder="Search with date" />

                </div>

                {/* Table data below the search bar */}
                <div>
                    <div className="flex bg-gray-100 p-2 rounded-lg">
                        <div className="w-12">
                            <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                        </div>
                        <div className="w-24">Application ID</div>
                        <div className="flex-1">Applicant</div>
                        <div className="flex-1">Country/Address</div>
                        <div className="w-32">Applied date</div>
                        <div className="w-24">Ownership</div>
                        <div className="w-24">Status</div>
                        <div className="w-16">Action</div>
                    </div>


                    {applicationData.map((row) => (
                        <div key={row.id} className={`flex bg-white p-2 rounded-lg border border-grey-200 ${selectedRows.includes(row.id) ? 'bg-gray-100' : ''}`}>
                            <div className="w-12">
                                <input type="checkbox" checked={selectedRows.includes(row.id)} onChange={() => handleSelectRow(row.id)} />
                            </div>
                            <div className="w-24">{row.id}</div>
                            <div className="flex-1">{row.applicant}</div>
                            <div className="flex-1">{row.country}</div>
                            <div className="w-32">{row.date}</div>
                            <div className="w-24">{row.ownership}</div>
                            <div className="w-24">
                                {row.status === 'Pending' && <span className="rounded bg-gray-200 text-black px-2">{row.status}</span>}
                                {row.status === 'Approved' && <span className="rounded bg-green-300 text-black px-2">{row.status}</span>}
                                {row.status === 'Rejected' && <span className="rounded bg-red-300 text-black px-2">{row.status}</span>}
                            </div>

                            {/* Icons in the action : view , edit, download and delete */}
                            <div className="w-16 flex items-center">
                                <MdOutlineRemoveRedEye className="cursor-pointer" title="View" />
                                <SlPencil className="cursor-pointer ml-2" title="Edit" />
                                <VscFilePdf className="cursor-pointer ml-2" title="Download" />
                                <RiDeleteBin6Line className="cursor-pointer ml-2" title="Delete" />
                            </div>
                        </div>
                    ))}
                </div>

            </main >
        </div >
    );
};