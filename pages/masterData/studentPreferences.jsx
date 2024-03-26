import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { SlPencil } from 'react-icons/sl';
import { SlDocs } from "react-icons/sl";
import { RiDeleteBin6Line } from 'react-icons/ri';

const Preferences = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [preferenceType, setPreferenceType] = useState('');
    const [preferenceName, setPreferenceName] = useState('');
    const [preferences, setPreferences] = useState([]);
    const [creationTime, setCreationTime] = useState(null); // Track creation time

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleAddNewClick = (index) => {
        setEditIndex(index);
        setShowModal(true);
        if (index !== null) {
            const preference = preferences[index];
            setPreferenceType(preference.type);
            setPreferenceName(preference.name);
        } else {
            // Generate a unique creation time for the new preference
            const creationTime = new Date().getTime();
            // Update state with the new preference's creation time
            setCreationTime(creationTime);
        }
    };

    const handleCancel = () => {
        setShowModal(false);
        setEditIndex(null);
        setPreferenceType('');
        setPreferenceName('');
    };

    const handleSelectAll = () => {
        if (!selectAll) {
            const allCreationTimes = preferences.map((preference) => preference.creationTime);
            setSelectedRows(allCreationTimes);
        } else {
            setSelectedRows([]);
        }
        setSelectAll(!selectAll);
    };

    const handleSelectRow = (creationTime) => {
        if (selectedRows.includes(creationTime)) {
            setSelectedRows(selectedRows.filter((rowCreationTime) => rowCreationTime !== creationTime));
        } else {
            setSelectedRows([...selectedRows, creationTime]);
        }
    };

    const handleSave = () => {
        if (preferenceName.trim() === '' || preferenceType.trim() === '') {
            // Display error message
            alert('The fields are empty. Please fill the form first.');
            return;
        }

        const newPreference = {
            name: preferenceName,
            type: preferenceType,
            updatedOn: new Date().toLocaleDateString(),
            status: false, // Assuming initially the status is off
            creationTime: creationTime // Store creation time
        };

        if (editIndex !== null) {
            const updatedPreferences = [...preferences];
            updatedPreferences[editIndex] = newPreference;
            setPreferences(updatedPreferences);
        } else {
            setPreferences([...preferences, newPreference]);
        }

        setShowModal(false);
        setEditIndex(null);
        setPreferenceType('');
        setPreferenceName('');
        setCreationTime(null); // Reset creation time
    };



    const handleToggle = (index) => {
        const updatedPreferences = [...preferences];
        updatedPreferences[index].status = !updatedPreferences[index].status;
        setPreferences(updatedPreferences);
    };

    const handleDelete = (index) => {
        const updatedPreferences = [...preferences];
        updatedPreferences.splice(index, 1);
        setPreferences(updatedPreferences);
    };

    return (
        <div className="flex min-h-screen mt-16">
            <main className="bg-white text-black flex-1 p-2">
                <header>
                    <div className="bg-cyan-700 p-4 rounded-lg">
                        <h1 className="text-2xl text-white">Master Data management &gt; Student preferences </h1>
                    </div>
                </header>

                <div>
                    <div className="flex space-x-4 mt-10 ml-2 items-center">
                        <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search college name or country" />

                        <div className="items-end space-x-6">
                            <button onClick={() => handleAddNewClick(null)} className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                + Add new
                            </button>

                            <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                View all
                            </button>
                        </div>
                    </div>

                    <div >
                        {preferences.length === 0 ? (
                            <div className="flex items-center justify-center h-screen text-center">
                                <div className="text-center">
                                    <SlDocs className=" text-9xl ml-32" />
                                    <h1 className="text-black text-3xl font-bold"> No record yet </h1>
                                    <h1 className="text-black text-xl font-medium"> All of your records will remain once created </h1>
                                    <button onClick={() => handleAddNewClick(null)} className=" mt-4 bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                        + Add new
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="p-2">
                                <div className="flex bg-gray-100 p-2 rounded-lg font-bold">
                                    <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                                    </div>
                                    <div className="w-1/5">Preference Name</div>
                                    <div className="w-1/5">Preference Type</div>
                                    <div className="w-1/4">Updated On</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-16 sm:w-20 md:w-24 lg:w-24">Action</div>
                                </div>

                                {preferences.map((preference, index) => (
                                    <div key={index} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(preference.creationTime) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                            <input type="checkbox" checked={selectedRows.includes(preference.creationTime)} onChange={() => handleSelectRow(preference.creationTime)} />
                                        </div>
                                        <div className="w-1/5">{preference.name}</div>
                                        <div className="w-1/5">{preference.type}</div>
                                        <div className="w-1/4">{preference.updatedOn}</div>
                                        <div className="w-1/4">
                                            <label className="flex items-center relative w-max cursor-pointer select-none px-4 py-2">
                                                <input type="checkbox" className="hidden" checked={preference.status} onChange={() => handleToggle(index)} />
                                                <span className="absolute font-medium text-xs uppercase right-1 text-black bg-red-300 w-7 text-center">OFF</span>
                                                <span className="absolute font-medium text-xs uppercase right-8 text-black bg-green-300 w-7 text-center">ON</span>
                                                <span className={`w-8 h-5 right-8 absolute rounded-full transform transition-transform ${preference.status ? 'bg-green-500 translate-x-full' : 'bg-gray-200'}`} />
                                            </label>
                                        </div>
                                        <div className="w-16 sm:w-20 md:w-24 lg:w-24 flex items-center text-xl space-x-4">
                                            <a href="" title="View">
                                                <MdOutlineRemoveRedEye className="cursor-pointer" />
                                            </a>
                                            <button onClick={() => handleAddNewClick(index)} className="flex items-center">
                                                <SlPencil className="cursor-pointer" />
                                            </button>
                                            <button onClick={() => handleDelete(index)} className="flex items-center ml-2">
                                                <RiDeleteBin6Line className="cursor-pointer" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>

                    {showModal && (
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                            <div className="bg-white p-6 rounded-lg flex-1 max-w-xl relative">
                                <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <h2 className="text-2xl font-bold mb-4">{editIndex !== null ? 'Edit preferences' : 'Add new preferences'}</h2>
                                <div className="flex flex-wrap">
                                    <div className="mb-4 flex-1/2">
                                        <label htmlFor="preferenceType" className="block text-lg font-medium mb-2">Preference type</label>
                                        <input
                                            type="text"
                                            id="preferenceType"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=""
                                            value={preferenceType}
                                            onChange={(e) => setPreferenceType(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4 flex-1/2 ml-auto">
                                        <label htmlFor="preferenceName" className="block text-lg font-medium mb-2">Preference name</label>
                                        <input
                                            type="text"
                                            id="preferenceName"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=""
                                            value={preferenceName}
                                            onChange={(e) => setPreferenceName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end mt-4">
                                    <button onClick={handleCancel} className="mr-4 bg-white-500 text-gray-600 border border-gray-600 px-4 py-2 hover:bg-blue-300 hover:border-blue-300 rounded-md">Cancel</button>
                                    <button onClick={handleSave} className="bg-orange-500 text-white px-4 py-2 rounded-md border border-orange-500 hover:bg-green-500 hover:border-green-500">{editIndex !== null ? 'Edit' : 'Save'}</button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
};

export default Preferences;
