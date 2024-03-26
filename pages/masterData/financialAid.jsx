import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { SlPencil } from 'react-icons/sl';
import { SlDocs } from "react-icons/sl";
import { RiDeleteBin6Line } from 'react-icons/ri';


const Financial = () => {
    const [currentSection, setCurrentSection] = useState('Financial Aid Type');
    const [showModal, setShowModal] = useState(false);
    //Financial Aid Type Section Modal Details
    const [financialAidType, setFinancialAidType] = useState('');
    const [financialAidDesc, setFinancialAidDesc] = useState('');
    //Financial Aid Section Modal Details
    const [financialAidTypeDrop, setFinancialAidTypeDrop] = useState('');
    const [financialAidName, setFinancialAidName] = useState('');



    // State variables for Financial Aid Type section
    const [aidTypePreferences, setAidTypePreferences] = useState([]);
    // State variables for Financial Aid section
    const [aidPreferences, setAidPreferences] = useState([]);


    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [creationTime, setCreationTime] = useState(null);

    //Pressing on +Add new button - event handling each section wise
    const handleAddNewClick = (index) => {
        setEditIndex(index);
        setShowModal(true);
        if (index !== null) {
            // Preferences array based on the current section
            let preference;
            if (currentSection === 'Financial Aid Type') {
                preference = aidTypePreferences[index];
            } else if (currentSection === 'Financial aid') {
                preference = aidPreferences[index];
            }
            if (preference) {
                // Update state based on the current section
                if (currentSection === 'Financial Aid Type') {
                    setFinancialAidType(preference.aidType);
                    setFinancialAidDesc(preference.aidDesc);
                } else if (currentSection === 'Financial aid') {
                    setFinancialAidTypeDrop(preference.aidType);
                    setFinancialAidName(preference.aidName);
                }
            }
        } else {
            const newCreationTime = new Date().getTime();
            setCreationTime(newCreationTime);
            // Initialize state based on the current section
            if (currentSection === 'Financial Aid Type') {
                setFinancialAidType('');
                setFinancialAidDesc('');
            } else if (currentSection === 'Financial aid') {
                setFinancialAidTypeDrop('');
                setFinancialAidName('');
            }
        }
    };

    //Event handling for cancel button for each models 
    const handleCancel = () => {
        setShowModal(false);
        if (currentSection === 'Financial Aid Type') {
            setFinancialAidType('');
            setFinancialAidDesc('');
        } else if (currentSection === 'Financial aid') {
            setFinancialAidTypeDrop('');
            setFinancialAidName('');
        }
    };

    const handleSave = () => {
        // Checking if required fields are empty for each section and displaying an error message if necessary
        if (currentSection === 'Financial Aid Type' && (financialAidType.trim() === '' || financialAidDesc.trim() === '')) {
            alert('Some fields are empty. Please fill the form first.');
            return;
        } else if (currentSection === 'Financial aid' && (financialAidTypeDrop.trim() === '' || financialAidName.trim() === '')) {
            alert('Some fields are empty. Please fill the form first.');
            return;
        }

        setShowModal(false);
        const formattedDate = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

        if (editIndex !== null) {
            // Editing existing entry
            if (currentSection === 'Financial Aid Type') {
                const updatedAidTypePreferences = [...aidTypePreferences];
                updatedAidTypePreferences[editIndex] = { aidType: financialAidType, aidDesc: financialAidDesc, updatedOn: formattedDate };
                setAidTypePreferences(updatedAidTypePreferences);
            } else if (currentSection === 'Financial aid') {
                const updatedAidPreferences = [...aidPreferences];
                updatedAidPreferences[editIndex] = { aidType: financialAidTypeDrop, aidName: financialAidName, updatedOn: formattedDate };
                setAidPreferences(updatedAidPreferences);
            }
        } else {
            // Adding new entry
            if (currentSection === 'Financial Aid Type') {
                const updatedAidTypePreferences = [...aidTypePreferences];
                updatedAidTypePreferences.push({ aidType: financialAidType, aidDesc: financialAidDesc, updatedOn: formattedDate });
                setAidTypePreferences(updatedAidTypePreferences);
            } else if (currentSection === 'Financial aid') {
                const updatedAidPreferences = [...aidPreferences];
                updatedAidPreferences.push({ aidType: financialAidTypeDrop, aidName: financialAidName, updatedOn: formattedDate });
                setAidPreferences(updatedAidPreferences);
            }
        }
    };

    const toggleSection = (section) => {
        setCurrentSection(section);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedRows([]);
        } else {
            if (currentSection === 'Financial Aid Type') {
                const allAidTypeNames = aidTypePreferences.map(preference => preference.creationTime);
                setSelectedRows(allAidTypeNames);
            } else if (currentSection === 'Financial aid') {
                const allAidNames = aidPreferences.map(preference => preference.creationTime);
                setSelectedRows(allAidNames);
            }
        }
        setSelectAll(!selectAll);
    };


    const handleSelectRow = (identifier) => {
        let updatedSelectedRows = [...selectedRows];
        if (currentSection === 'Financial Aid Type') {
            if (updatedSelectedRows.includes(identifier)) {
                updatedSelectedRows = updatedSelectedRows.filter(name => name !== identifier);
            } else {
                updatedSelectedRows.push(identifier);
            }
        } else if (currentSection === 'Financial aid') {
            if (updatedSelectedRows.includes(identifier)) {
                updatedSelectedRows = updatedSelectedRows.filter(name => name !== identifier);
            } else {
                updatedSelectedRows.push(identifier);
            }
        }
        setSelectedRows(updatedSelectedRows);
    };

    const handleToggle = (index) => {
        let updatedPreferences;
        if (currentSection === 'Financial Aid Type') {
            updatedPreferences = [...aidTypePreferences];
            updatedPreferences[index].status = !updatedPreferences[index].status;
            setAidTypePreferences(updatedPreferences);
        } else if (currentSection === 'Financial aid') {
            updatedPreferences = [...aidPreferences];
            updatedPreferences[index].status = !updatedPreferences[index].status;
            setAidPreferences(updatedPreferences);
        }
    };

    const handleDelete = (index) => {
        let updatedPreferences;
        if (currentSection === 'Financial Aid Type') {
            updatedPreferences = [...aidTypePreferences];
            updatedPreferences.splice(index, 1);
            setAidTypePreferences(updatedPreferences);
        } else if (currentSection === 'Financial aid') {
            updatedPreferences = [...aidPreferences];
            updatedPreferences.splice(index, 1);
            setAidPreferences(updatedPreferences);
        }
    };

    return (
        <div className="flex min-h-screen mt-16">
            <main className="bg-white text-black flex-1 p-2">
                <header>
                    <div className="bg-cyan-700 p-4 rounded-lg">
                        <h1 className="text-2xl text-white">Master Data management &gt; Financial Aid </h1>
                    </div>
                </header>



                <div className="mt-6 mx-4">
                    <button onClick={() => toggleSection('Financial Aid Type')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'Financial Aid Type' ? 'text-black' : 'text-gray-500'}`}>
                        Financial aid type
                        {currentSection === 'Financial Aid Type' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4 "></span>}
                    </button>

                    <button onClick={() => toggleSection('Financial aid')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'Financial aid' ? 'text-black' : 'text-gray-500'}`}>
                        Financial aid
                        {currentSection === 'Financial aid' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4"></span>}
                    </button>
                </div>



                {currentSection === 'Financial Aid Type' && (
                    <div>
                        <div className="flex space-x-4 mt-10 ml-2 items-center">
                            <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search financial aid type" />

                            <div className="items-end space-x-6">
                                <button onClick={() => handleAddNewClick(null)} className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                    + Add new
                                </button>

                                <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                    View all
                                </button>
                            </div>
                        </div>

                        {aidTypePreferences.length === 0 ? (
                            <div className="flex items-center justify-center h-screen text-center">
                                <div className="text-center">
                                    <SlDocs className="text-9xl ml-32" />
                                    <h1 className="text-black text-3xl font-bold"> No record yet </h1>
                                    <h1 className="text-black text-xl font-medium"> All of your records will remain once created </h1>
                                    <button onClick={() => handleAddNewClick(null)} className="mt-4 bg-orange-500 text-white px-4 py-2 border border-orange-500 hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                        + Add new
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="p-2 mt-4">
                                <div className="flex bg-gray-100 p-2 rounded-lg font-bold">
                                    <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                                    </div>
                                    <div className="w-1/5">Financial aid type</div>
                                    <div className="w-1/5">Description</div>
                                    <div className="w-1/4">Updated On</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-16 sm:w-20 md:w-24 lg:w-24">Action</div>
                                </div>


                                {aidTypePreferences.map((preference, index) => (
                                    <div key={index} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(preference.creationTime) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                            <input type="checkbox" checked={selectedRows.includes(preference.creationTime)} onChange={() => handleSelectRow(preference.creationTime)} />
                                        </div>
                                        <div className="w-1/5">{preference.aidType}</div>
                                        <div className="w-1/5">{preference.aidDesc}</div>
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

                        {showModal && (
                            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                                <div className="bg-white p-6 rounded-lg flex-1 max-w-96 relative">
                                    <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <h2 className="text-2xl font-bold mb-4">Add new financial aid type</h2>
                                    <div className="mb-4">
                                        <label htmlFor="financialAidType" className="block text-lg font-medium mb-2">Financial Aid Type</label>
                                        <input
                                            type="text"
                                            id="financialAidType"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=""
                                            value={financialAidType}
                                            onChange={(e) => setFinancialAidType(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="financialAidDesc" className="block text-lg font-medium mb-2">Description</label>
                                        <textarea
                                            type="text"
                                            id="financialAidDesc"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=""
                                            value={financialAidDesc}
                                            onChange={(e) => setFinancialAidDesc(e.target.value)}
                                            rows={1}
                                        />
                                    </div>

                                    <div className="flex justify-end mt-4">
                                        <button onClick={handleCancel} className="mr-4 bg-white-500 text-gray-600 border border-gray-600 px-4 py-2 hover:bg-blue-300 hover:border-blue-300 rounded-md">Cancel</button>
                                        <button onClick={handleSave} className="bg-orange-500 text-white px-4 py-2 rounded-md border border-orenge-500 hover:bg-green-500 hover:border-green-500">
                                            {editIndex !== null ? 'Edit' : 'Save'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}



                {currentSection === 'Financial aid' && (
                    <div>
                        <div className="flex space-x-4 mt-10 ml-2 items-center">
                            <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search financial aid" />

                            <div className="items-end space-x-6">
                                <button onClick={() => handleAddNewClick(null)} className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                    + Add new
                                </button>

                                <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                    View all
                                </button>
                            </div>
                        </div>

                        {aidPreferences.length === 0 ? (
                            <div className="flex items-center justify-center h-screen text-center">
                                <div className="text-center">
                                    <SlDocs className="text-9xl ml-32" />
                                    <h1 className="text-black text-3xl font-bold"> No record yet </h1>
                                    <h1 className="text-black text-xl font-medium"> All of your records will remain once created </h1>
                                    <button onClick={() => handleAddNewClick(null)} className="mt-4 bg-orange-500 text-white px-4 py-2 border border-orange-500 hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                        + Add new
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="p-2 mt-4">
                                <div className="flex bg-gray-100 p-2 rounded-lg font-bold">
                                    <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                                    </div>
                                    <div className="w-1/5">Financial aid name</div>
                                    <div className="w-1/5">Financial aid type</div>
                                    <div className="w-1/4">Updated On</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-16 sm:w-20 md:w-24 lg:w-24">Action</div>
                                </div>


                                {aidPreferences.map((preference, index) => (
                                    <div key={index} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(preference.creationTime) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                            <input type="checkbox" checked={selectedRows.includes(preference.creationTime)} onChange={() => handleSelectRow(preference.creationTime)} />
                                        </div>
                                        <div className="w-1/5">{preference.aidName}</div>
                                        <div className="w-1/5">{preference.aidType}</div>
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

                        {showModal && (
                            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                                <div className="bg-white p-6 rounded-lg flex-1 max-w-96 relative">
                                    <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <h2 className="text-2xl font-bold mb-4">Add new financial aid </h2>
                                    <div className="mb-4">
                                        <label htmlFor="financialAidTypeDrop" className="block text-lg font-medium mb-2">Financial aid type</label>
                                        <input
                                            type="text"
                                            id="financialAidTypeDrop"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=""
                                            value={financialAidTypeDrop}
                                            onChange={(e) => setFinancialAidTypeDrop(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="financialAidName" className="block text-lg font-medium mb-2">Financial aid name</label>
                                        <input
                                            type="text"
                                            id="financialAidName"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=""
                                            value={financialAidName}
                                            onChange={(e) => setFinancialAidName(e.target.value)}
                                            rows={1}
                                        />
                                    </div>

                                    <div className="flex justify-end mt-4">
                                        <button onClick={handleCancel} className="mr-4 bg-white-500 text-gray-600 border border-gray-600 px-4 py-2 hover:bg-blue-300 hover:border-blue-300 rounded-md">Cancel</button>
                                        <button onClick={handleSave} className="bg-orange-500 text-white px-4 py-2 rounded-md border border-orenge-500 hover:bg-green-500 hover:border-green-500">Save</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                
            </main>
        </div>
    );
};

export default Financial;
