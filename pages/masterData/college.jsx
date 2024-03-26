import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { SlPencil } from 'react-icons/sl';
import { SlDocs } from "react-icons/sl";
import { RiDeleteBin6Line } from 'react-icons/ri';

const College = () => {
    const [currentSection, setCurrentSection] = useState('CollegeType');
    const [showModal, setShowModal] = useState(false);
    //College Section Type Modal
    const [collegeType, setCollegeType] = useState('');
    //Faculty Section Modal
    const [facultyName, setFacultyName] = useState('');
    //College Section Modal
    const [collegeTypeDrop, setCollegeTypeDrop] = useState('');
    const [facultyNameDrop, setFacultyNameDrop] = useState('');
    const [collegeName, setCollegeName] = useState('');


    // State variables for CollegeType section
    const [collegeTypePreferences, setCollegeTypePreferences] = useState([]);
    // State variables for Faculty section
    const [facultyPreferences, setFacultyPreferences] = useState([]);
    // State variables for College section
    const [collegePreferences, setCollegePreferences] = useState([]);

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
            if (currentSection === 'CollegeType') {
                preference = collegeTypePreferences[index];
            } else if (currentSection === 'Faculty') {
                preference = facultyPreferences[index];
            } else if (currentSection === 'College') {
                preference = collegePreferences[index];
            }
            if (preference) {
                // Update state based on the current section
                if (currentSection === 'CollegeType') {
                    setCollegeType(preference.type);
                } else if (currentSection === 'Faculty') {
                    setFacultyName(preference.name);
                } else if (currentSection === 'College') {
                    setCollegeTypeDrop(preference.type);
                    setFacultyNameDrop(preference.faculty);
                    setCollegeName(preference.name);
                }
            }
        } else {
            const newCreationTime = new Date().getTime();
            setCreationTime(newCreationTime);
            // Initialize state based on the current section
            if (currentSection === 'CollegeType') {
                setCollegeType('');
            } else if (currentSection === 'Faculty') {
                setFacultyName('');
            } else if (currentSection === 'College') {
                setCollegeTypeDrop('');
                setFacultyNameDrop('');
                setCollegeName('');
            }
        }
    };

    //Event handling for cancel button for each models 
    const handleCancel = () => {
        setShowModal(false);
        if (currentSection === 'CollegeType') {
            setCollegeType('');
        } else if (currentSection === 'Faculty') {
            setFacultyName('');
        } else if (currentSection === 'College') {
            setCollegeTypeDrop('');
            setFacultyNameDrop('');
            setCollegeName('');
        }
    };

    const handleSaveAccess = () => {
        // Checking if required fields are empty for each section and displaying an error message if necessary
        if (currentSection === 'CollegeType' && collegeType.trim() === '') {
            alert('The College Type field is empty. Please fill the form first.');
            return;
        } else if (currentSection === 'Faculty' && facultyName.trim() === '') {
            alert('The Faculty Name field is empty. Please fill the form first.');
            return;
        } else if (currentSection === 'College' && (collegeTypeDrop.trim() === '' || facultyNameDrop.trim() === '' || collegeName.trim() === '')) {
            alert('Some fields are empty. Please fill the form first.');
            return;
        }

        setShowModal(false);
        const formattedDate = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

        if (editIndex !== null) {
            // Editing existing entry
            if (currentSection === 'CollegeType') {
                const updatedCollegeTypePreferences = [...collegeTypePreferences];
                updatedCollegeTypePreferences[editIndex] = { type: collegeType, updatedOn: formattedDate };
                setCollegeTypePreferences(updatedCollegeTypePreferences);
            } else if (currentSection === 'Faculty') {
                const updatedFacultyPreferences = [...facultyPreferences];
                updatedFacultyPreferences[editIndex] = { name: facultyName, updatedOn: formattedDate };
                setFacultyPreferences(updatedFacultyPreferences);
            } else if (currentSection === 'College') {
                const updatedCollegePreferences = [...collegePreferences];
                updatedCollegePreferences[editIndex] = { type: collegeTypeDrop, faculty: facultyNameDrop, name: collegeName, updatedOn: formattedDate };
                setCollegePreferences(updatedCollegePreferences);
            }
        } else {
            // Adding new entry
            if (currentSection === 'CollegeType') {
                const updatedCollegeTypePreferences = [...collegeTypePreferences];
                updatedCollegeTypePreferences.push({ type: collegeType, updatedOn: formattedDate });
                setCollegeTypePreferences(updatedCollegeTypePreferences);
            } else if (currentSection === 'Faculty') {
                const updatedFacultyPreferences = [...facultyPreferences];
                updatedFacultyPreferences.push({ name: facultyName, creationTime, updatedOn: formattedDate });
                setFacultyPreferences(updatedFacultyPreferences);
            } else if (currentSection === 'College') {
                const updatedCollegePreferences = [...collegePreferences];
                updatedCollegePreferences.push({ type: collegeTypeDrop, faculty: facultyNameDrop, name: collegeName, creationTime, updatedOn: formattedDate });
                setCollegePreferences(updatedCollegePreferences);
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
            if (currentSection === 'CollegeType') {
                const allCollegeTypes = collegeTypePreferences.map(preference => preference.creationTime);
                setSelectedRows(allCollegeTypes);
            } else if (currentSection === 'Faculty') {
                const allFacultyNames = facultyPreferences.map(preference => preference.creationTime);
                setSelectedRows(allFacultyNames);
            } else if (currentSection === 'College') {
                const allCollegeNames = collegePreferences.map(preference => preference.creationTime);
                setSelectedRows(allCollegeNames);
            }
        }
        setSelectAll(!selectAll);
    };

    const handleSelectRow = (identifier) => {
        let updatedSelectedRows = [...selectedRows];
        if (currentSection === 'CollegeType') {
            if (updatedSelectedRows.includes(identifier)) {
                updatedSelectedRows = updatedSelectedRows.filter(type => type !== identifier);
            } else {
                updatedSelectedRows.push(identifier);
            }
        } else if (currentSection === 'Faculty') {
            if (updatedSelectedRows.includes(identifier)) {
                updatedSelectedRows = updatedSelectedRows.filter(name => name !== identifier);
            } else {
                updatedSelectedRows.push(identifier);
            }
        } else if (currentSection === 'College') {
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
        if (currentSection === 'CollegeType') {
            updatedPreferences = [...collegeTypePreferences];
            updatedPreferences[index].status = !updatedPreferences[index].status;
            setCollegeTypePreferences(updatedPreferences);
        } else if (currentSection === 'Faculty') {
            updatedPreferences = [...facultyPreferences];
            updatedPreferences[index].status = !updatedPreferences[index].status;
            setFacultyPreferences(updatedPreferences);
        } else if (currentSection === 'College') {
            updatedPreferences = [...collegePreferences];
            updatedPreferences[index].status = !updatedPreferences[index].status;
            setCollegePreferences(updatedPreferences);
        }
    };

    const handleDelete = (index) => {
        let updatedPreferences;
        if (currentSection === 'CollegeType') {
            updatedPreferences = [...collegeTypePreferences];
            updatedPreferences.splice(index, 1);
            setCollegeTypePreferences(updatedPreferences);
        } else if (currentSection === 'Faculty') {
            updatedPreferences = [...facultyPreferences];
            updatedPreferences.splice(index, 1);
            setFacultyPreferences(updatedPreferences);
        } else if (currentSection === 'College') {
            updatedPreferences = [...collegePreferences];
            updatedPreferences.splice(index, 1);
            setCollegePreferences(updatedPreferences);
        }
    };

    const handleAccessChange = (option, checked) => {
        if (currentSection === 'CollegeType') {
            if (checked) {
                setCollegeType(prevCollegeType => [...prevCollegeType, option]); // Add the option to the collegeType state
            } else {
                setCollegeType(prevCollegeType => prevCollegeType.filter(item => item !== option)); // Remove the option from the collegeType state
            }
        } else if (currentSection === 'Faculty') {
            if (checked) {
                setFacultyName(prevFacultyName => [...prevFacultyName, option]); // Add the option to the facultyName state
            } else {
                setFacultyName(prevFacultyName => prevFacultyName.filter(item => item !== option)); // Remove the option from the facultyName state
            }
        } else if (currentSection === 'College') {
            if (checked) {
                setCollegeName(prevCollegeName => [...prevCollegeName, option]); // Add the option to the collegeName state
            } else {
                setCollegeName(prevCollegeName => prevCollegeName.filter(item => item !== option)); // Remove the option from the collegeName state
            }
        }
    };


    return (
        <div className="flex h-full mt-16">
            <main className="bg-white text-black flex-1 p-2">
                <header>
                    <div className="bg-cyan-700 p-4 rounded-lg">
                        <h1 className="text-2xl text-white">Master Data management &gt; College </h1>
                    </div>
                </header>

                <div className="mt-6 mx-4">
                    <button onClick={() => toggleSection('CollegeType')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'CollegeType' ? 'text-black' : 'text-gray-500'}`}>
                        College Type
                        {currentSection === 'CollegeType' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4 "></span>}
                    </button>

                    <button onClick={() => toggleSection('Faculty')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'Faculty' ? 'text-black' : 'text-gray-500'}`}>
                        Faculty
                        {currentSection === 'Faculty' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4"></span>}
                    </button>

                    <button onClick={() => toggleSection('College')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'College' ? 'text-black' : 'text-gray-500'}`}>
                        College
                        {currentSection === 'College' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4"></span>}
                    </button>
                </div>


                {currentSection === 'CollegeType' && (
                    <div className="mt-10 ml-2">
                        <div className="flex space-x-4 mt-10 ml-2 items-center">
                            <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search College Type" />

                            <div className="items-end space-x-6">
                                <button onClick={() => handleAddNewClick(null)} className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                    + Add new
                                </button>

                                <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                    View all
                                </button>
                            </div>
                        </div>

                        {collegeTypePreferences.length === 0 ? (
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
                                    <div className="w-1/5">College type</div>
                                    <div className="w-1/4">Updated On</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-16 sm:w-20 md:w-24 lg:w-24">Action</div>
                                </div>


                                {collegeTypePreferences.map((preference, index) => (
                                    <div key={index} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(preference.creationTime) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                            <input type="checkbox" checked={selectedRows.includes(preference.creationTime)} onChange={() => handleSelectRow(preference.creationTime)} />
                                        </div>
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


                        {showModal && (
                            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                                <div className="bg-white p-6 rounded-lg flex-1 max-w-96 relative">
                                    <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <h2 className="text-2xl font-bold mb-4">Add new college type</h2>
                                    <div className="mb-4">
                                        <label htmlFor="collegeType" className="block text-lg font-medium mb-2">College Type</label>
                                        <input
                                            type="text"
                                            id="collegeType"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter college type"
                                            value={collegeType}
                                            onChange={(e) => setCollegeType(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <button onClick={handleCancel} className="mr-4 bg-white-500 text-gray-600 border border-gray-600 px-4 py-2 hover:bg-blue-300 hover:border-blue-300 rounded-md">Cancel</button>
                                        <button onClick={handleSaveAccess} className="bg-orange-500 text-white px-4 py-2 rounded-md border border-orenge-500 hover:bg-green-500 hover:border-green-500">
                                            {editIndex !== null ? 'Edit' : 'Save'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}



                {currentSection === 'Faculty' && (
                    <div>
                        <div className="flex space-x-4 mt-10 ml-2 items-center">
                            <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search Faculty" />

                            <div className="items-end space-x-6">
                                <button onClick={() => handleAddNewClick(null)} className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                    + Add new
                                </button>

                                <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                    View all
                                </button>
                            </div>
                        </div>

                        {facultyPreferences.length === 0 ? (
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
                                    <div className="w-1/5">Faculty name</div>
                                    <div className="w-1/4">Updated On</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-16 sm:w-20 md:w-24 lg:w-24">Action</div>
                                </div>


                                {facultyPreferences.map((preference, index) => (
                                    <div key={index} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(preference.creationTime) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                            <input type="checkbox" checked={selectedRows.includes(preference.creationTime)} onChange={() => handleSelectRow(preference.creationTime)} />
                                        </div>
                                        <div className="w-1/5">{preference.name}</div>
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
                                <div className="bg-white p-6 rounded-lg flex-1 max-w-96">
                                    <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <h2 className="text-2xl font-bold mb-4">Add new Faculty</h2>
                                    <div className="mb-4">
                                        <label htmlFor="facultyName" className="block text-lg font-medium mb-2">Faculty Name</label>
                                        <input
                                            type="text"
                                            id="facultyName"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter faculty name"
                                            value={facultyName}
                                            onChange={(e) => setFacultyName(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <button onClick={handleCancel} className="mr-4 bg-white-500 text-gray-600 border border-gray-600 px-4 py-2 hover:bg-blue-300 hover:border-blue-300 rounded-md">Cancel</button>
                                        <button onClick={handleSaveAccess} className="bg-orange-500 text-white px-4 py-2 rounded-md border border-orenge-500 hover:bg-green-500 hover:border-green-500">
                                            {editIndex !== null ? 'Edit' : 'Save'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}





                {currentSection === 'College' && (
                    <div>
                        <div className="flex space-x-4 mt-10 ml-2 items-center">
                            <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search College" />

                            <div className="items-end space-x-6">
                                <button onClick={() => handleAddNewClick(null)}  className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                    + Add new
                                </button>

                                <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                    View all
                                </button>
                            </div>
                        </div>

                        {collegePreferences.length === 0 ? (
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
                                    <div className="w-1/5">College name</div>
                                    <div className="w-1/5">Type</div>
                                    <div className="w-1/5">Faculty</div>
                                    <div className="w-1/4">Updated On</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-16 sm:w-20 md:w-24 lg:w-24">Action</div>
                                </div>


                                {collegePreferences.map((preference, index) => (
                                    <div key={index} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(preference.creationTime) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                            <input type="checkbox" checked={selectedRows.includes(preference.creationTime)} onChange={() => handleSelectRow(preference.creationTime)} />
                                        </div>
                                        <div className="w-1/5">{preference.name}</div>
                                        <div className="w-1/5">{preference.type}</div>
                                        <div className="w-1/5">{preference.faculty}</div>
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
                                <div className="bg-white p-6 rounded-lg flex-1 max-w-96">
                                    <h2 className="text-2xl font-bold mb-4">Add new College</h2>
                                    <div className="mb-4">
                                        <label htmlFor="collegeType" className="block text-lg font-medium mb-2">College Type</label>
                                        <input
                                            type="text"
                                            id="collegeType"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter college type"
                                            value={collegeTypeDrop}
                                            onChange={(e) => setCollegeTypeDrop(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="facultyName" className="block text-lg font-medium mb-2">Faculty</label>
                                        <input
                                            type="text"
                                            id="facultyName"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter faculty"
                                            value={facultyNameDrop}
                                            onChange={(e) => setFacultyNameDrop(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="collegeName" className="block text-lg font-medium mb-2">College Name</label>
                                        <input
                                            type="text"
                                            id="collegeName"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter college name"
                                            value={collegeName}
                                            onChange={(e) => setCollegeName(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <button onClick={handleCancel} className="mr-4 bg-white-500 text-gray-600 border border-gray-600 px-4 py-2 hover:bg-blue-300 hover:border-blue-300 rounded-md">Cancel</button>
                                        <button onClick={handleSaveAccess} className="bg-orange-500 text-white px-4 py-2 rounded-md border border-orenge-500 hover:bg-green-500 hover:border-green-500">
                                            {editIndex !== null ? 'Edit' : 'Save'}
                                        </button>
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

export default College;
