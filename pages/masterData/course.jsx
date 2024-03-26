import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { SlPencil } from 'react-icons/sl';
import { SlDocs } from "react-icons/sl";
import { RiDeleteBin6Line } from 'react-icons/ri';

const Course = () => {
    const [currentSection, setCurrentSection] = useState('Degree');
    const [showModal, setShowModal] = useState(false);
    //Degree Section Modal Details
    const [degreeName, setDegreeName] = useState('');
    const [degreeDesc, setDegreeDescription] = useState('');
    //Faculty Section Modal Details
    const [facultyName, setFacultyName] = useState('');
    const [facultyDesc, setFacultyDescription] = useState('');
    //Course Section Modal Details
    const [degreeType, setDegreeType] = useState('');
    const [facultyType, setFacultyType] = useState('');
    const [courseName, setCourseName] = useState('');


    // State variables for Degree section
    const [degreePreferences, setDegreePreferences] = useState([]);
    // State variables for Faculty section
    const [facultyPreferences, setFacultyPreferences] = useState([]);
    // State variables for Course section
    const [coursePreferences, setCoursePreferences] = useState([]);

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
            if (currentSection === 'Degree') {
                preference = degreePreferences[index];
            } else if (currentSection === 'Faculty') {
                preference = facultyPreferences[index];
            } else if (currentSection === 'Course') {
                preference = coursePreferences[index];
            }
            if (preference) {
                // Update state based on the current section
                if (currentSection === 'Degree') {
                    setDegreeName(preference.DName);
                    setDegreeDescription(preference.DDesc);
                } else if (currentSection === 'Faculty') {
                    setFacultyName(preference.FName);
                    setFacultyDescription(preference.FDesc);
                } else if (currentSection === 'Course') {
                    setDegreeType(preference.DType);
                    setFacultyType(preference.FType);
                    setCourseName(preference.CName);
                }
            }
        } else {
            const newCreationTime = new Date().getTime();
            setCreationTime(newCreationTime);
            // Initialize state based on the current section
            if (currentSection === 'Degree') {
                setDegreeName('');
                setDegreeDescription('');
            } else if (currentSection === 'Faculty') {
                setFacultyName('');
                setFacultyDescription('');
            } else if (currentSection === 'Course') {
                setDegreeType('');
                setFacultyType('');
                setCourseName('');
            }
        }
    };

    //Event handling for cancel button for each models 
    const handleCancel = () => {
        setShowModal(false);
        if (currentSection === 'Degree') {
            setDegreeName('');
            setDegreeDescription('');
        } else if (currentSection === 'Faculty') {
            setFacultyName('');
            setFacultyDescription('');
        } else if (currentSection === 'Course') {
            setDegreeType('');
            setFacultyType('');
            setCourseName('');
        }
    };

    const handleSave = () => {
        // Checking if required fields are empty for each section and displaying an error message if necessary
        if (currentSection === 'Degree' && (degreeName.trim() === '' || degreeDesc.trim() === '')) {
            alert('Some fields are empty. Please fill the form first.');
            return;
        } else if (currentSection === 'Faculty' && (facultyName.trim() === '' || facultyDesc.trim() === '')) {
            alert('Some fields are empty. Please fill the form first.');
            return;
        } else if (currentSection === 'Course' && (degreeType.trim() === '' || facultyType.trim() === '' || courseName.trim() === '')) {
            alert('Some fields are empty. Please fill the form first.');
            return;
        }

        setShowModal(false);
        const formattedDate = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

        if (editIndex !== null) {
            // Editing existing entry
            if (currentSection === 'Degree') {
                const updatedDegreePreferences = [...degreePreferences];
                updatedDegreePreferences[editIndex] = { DName: degreeName, DDesc: degreeDesc, updatedOn: formattedDate };
                setDegreePreferences(updatedDegreePreferences);
            } else if (currentSection === 'Faculty') {
                const updatedFacultyPreferences = [...facultyPreferences];
                updatedFacultyPreferences[editIndex] = { FName: facultyName, FDesc: facultyDesc, updatedOn: formattedDate };
                setFacultyPreferences(updatedFacultyPreferences);
            } else if (currentSection === 'Course') {
                const updatedCoursePreferences = [...coursePreferences];
                updatedCoursePreferences[editIndex] = { DType: degreeType, FType: facultyType, CName: courseName, updatedOn: formattedDate };
                setCoursePreferences(updatedCoursePreferences);
            }
        } else {
            // Adding new entry
            if (currentSection === 'Degree') {
                const updatedDegreePreferences = [...degreePreferences];
                updatedDegreePreferences.push({ DName: degreeName, DDesc: degreeDesc, updatedOn: formattedDate });
                setDegreePreferences(updatedDegreePreferences);
            } else if (currentSection === 'Faculty') {
                const updatedFacultyPreferences = [...facultyPreferences];
                updatedFacultyPreferences.push({ FName: facultyName, FDesc: facultyDesc, updatedOn: formattedDate });
                setFacultyPreferences(updatedFacultyPreferences);
            } else if (currentSection === 'Course') {
                const updatedCoursePreferences = [...coursePreferences];
                updatedCoursePreferences.push({ DType: degreeType, FType: facultyType, CName: courseName, updatedOn: formattedDate });
                setCoursePreferences(updatedCoursePreferences);
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
            if (currentSection === 'Degree') {
                const allDegreeNames = degreePreferences.map(preference => preference.creationTime);
                setSelectedRows(allDegreeNames);
            } else if (currentSection === 'Faculty') {
                const allFacultyNames = facultyPreferences.map(preference => preference.creationTime);
                setSelectedRows(allFacultyNames);
            } else if (currentSection === 'Course') {
                const allCourseNames = coursePreferences.map(preference => preference.creationTime);
                setSelectedRows(allCourseNames);
            }
        }
        setSelectAll(!selectAll);
    };


    const handleSelectRow = (identifier) => {
        let updatedSelectedRows = [...selectedRows];
        if (currentSection === 'Degree') {
            if (updatedSelectedRows.includes(identifier)) {
                updatedSelectedRows = updatedSelectedRows.filter(name => name !== identifier);
            } else {
                updatedSelectedRows.push(identifier);
            }
        } else if (currentSection === 'Faculty') {
            if (updatedSelectedRows.includes(identifier)) {
                updatedSelectedRows = updatedSelectedRows.filter(name => name !== identifier);
            } else {
                updatedSelectedRows.push(identifier);
            }
        } else if (currentSection === 'Course') {
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
        if (currentSection === 'Degree') {
            updatedPreferences = [...degreePreferences];
            updatedPreferences[index].status = !updatedPreferences[index].status;
            setDegreePreferences(updatedPreferences);
        } else if (currentSection === 'Faculty') {
            updatedPreferences = [...facultyPreferences];
            updatedPreferences[index].status = !updatedPreferences[index].status;
            setFacultyPreferences(updatedPreferences);
        } else if (currentSection === 'Course') {
            updatedPreferences = [...coursePreferences];
            updatedPreferences[index].status = !updatedPreferences[index].status;
            setCoursePreferences(updatedPreferences);
        }
    };

    const handleDelete = (index) => {
        let updatedPreferences;
        if (currentSection === 'Degree') {
            updatedPreferences = [...degreePreferences];
            updatedPreferences.splice(index, 1);
            setDegreePreferences(updatedPreferences);
        } else if (currentSection === 'Faculty') {
            updatedPreferences = [...facultyPreferences];
            updatedPreferences.splice(index, 1);
            setFacultyPreferences(updatedPreferences);
        } else if (currentSection === 'Course') {
            updatedPreferences = [...coursePreferences];
            updatedPreferences.splice(index, 1);
            setCoursePreferences(updatedPreferences);
        }
    };



    return (
        <div className="flex min-h-screen mt-16">
            <main className="bg-white text-black flex-1 p-2">
                <header>
                    <div className="bg-cyan-700 p-4 rounded-lg">
                        <h1 className="text-2xl text-white">Master Data management &gt; Course </h1>
                    </div>
                </header>


                <div className="mt-6 mx-4">
                    <button onClick={() => toggleSection('Degree')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'Degree' ? 'text-black' : 'text-gray-500'}`}>
                        Degree
                        {currentSection === 'Degree' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4 "></span>}
                    </button>

                    <button onClick={() => toggleSection('Faculty')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'Faculty' ? 'text-black' : 'text-gray-500'}`}>
                        Faculty
                        {currentSection === 'Faculty' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4"></span>}
                    </button>

                    <button onClick={() => toggleSection('Course')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'Course' ? 'text-black' : 'text-gray-500'}`}>
                        Course
                        {currentSection === 'Course' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4"></span>}
                    </button>
                </div>


                {currentSection === 'Degree' && (
                    <div>
                        <div className="flex space-x-4 mt-10 ml-2 items-center">
                            <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search degree name" />

                            <div className="items-end space-x-6">
                                <button onClick={() => handleAddNewClick(null)} className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                    + Add new
                                </button>

                                <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                    View all
                                </button>
                            </div>
                        </div>

                        {degreePreferences.length === 0 ? (
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
                                    <div className="w-1/5">Degree name</div>
                                    <div className="w-1/5">Description</div>
                                    <div className="w-1/4">Updated On</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-16 sm:w-20 md:w-24 lg:w-24">Action</div>
                                </div>


                                {degreePreferences.map((preference, index) => (
                                    <div key={index} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(preference.creationTime) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                            <input type="checkbox" checked={selectedRows.includes(preference.creationTime)} onChange={() => handleSelectRow(preference.creationTime)} />
                                        </div>
                                        <div className="w-1/5">{preference.DName}</div>
                                        <div className="w-1/5">{preference.DDesc}</div>
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
                                    <h2 className="text-2xl font-bold mb-4">Add new Degree</h2>
                                    <div className="mb-4">
                                        <label htmlFor="degreeName" className="block text-lg font-medium mb-2">Degree name</label>
                                        <input
                                            type="text"
                                            id="degreeName"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=""
                                            value={degreeName}
                                            onChange={(e) => setDegreeName(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="degreeDesc" className="block text-lg font-medium mb-2">Description</label>
                                        <textarea
                                            type="text"
                                            id="degreeDesc"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=""
                                            value={degreeDesc}
                                            onChange={(e) => setDegreeDescription(e.target.value)}
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


                {currentSection === 'Faculty' && (
                    <div>
                        <div className="flex space-x-4 mt-10 ml-2 items-center">
                            <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search faculty name" />

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
                                    <div className="w-1/5">Description</div>
                                    <div className="w-1/4">Updated On</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-16 sm:w-20 md:w-24 lg:w-24">Action</div>
                                </div>


                                {facultyPreferences.map((preference, index) => (
                                    <div key={index} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(preference.creationTime) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                            <input type="checkbox" checked={selectedRows.includes(preference.creationTime)} onChange={() => handleSelectRow(preference.creationTime)} />
                                        </div>
                                        <div className="w-1/5">{preference.FName}</div>
                                        <div className="w-1/5">{preference.FDesc}</div>
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
                                    <h2 className="text-2xl font-bold mb-4">Add new Faculty</h2>
                                    <div className="mb-4">
                                        <label htmlFor="facultyName" className="block text-lg font-medium mb-2">Faculty name</label>
                                        <input
                                            type="text"
                                            id="facultyName"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=" "
                                            value={facultyName}
                                            onChange={(e) => setFacultyName(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="facultyDesc" className="block text-lg font-medium mb-2">Description</label>
                                        <textarea
                                            type="text"
                                            id="facultyDesc"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=" "
                                            value={facultyDesc}
                                            onChange={(e) => setFacultyDescription(e.target.value)}
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


                {currentSection === 'Course' && (
                    <div>
                        <div className="flex space-x-4 mt-10 ml-2 items-center">
                            <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search course name" />

                            <div className="items-end space-x-6">
                                <button onClick={() => handleAddNewClick(null)} className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                    + Add new
                                </button>

                                <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                    View all
                                </button>
                            </div>
                        </div>

                        {coursePreferences.length === 0 ? (
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
                                    <div className="w-1/5">Course name</div>
                                    <div className="w-1/5">Degree</div>
                                    <div className="w-1/5">Faculty</div>
                                    <div className="w-1/4">Updated On</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-16 sm:w-20 md:w-24 lg:w-24">Action</div>
                                </div>


                                {coursePreferences.map((preference, index) => (
                                    <div key={index} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(preference.creationTime) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                            <input type="checkbox" checked={selectedRows.includes(preference.creationTime)} onChange={() => handleSelectRow(preference.creationTime)} />
                                        </div>
                                        <div className="w-1/5">{preference.CName}</div>
                                        <div className="w-1/5">{preference.DType}</div>
                                        <div className="w-1/5">{preference.FType}</div>
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
                                    <h2 className="text-2xl font-bold mb-4">Add new Course</h2>
                                    <div className="mb-4">
                                        <label htmlFor="degreeType" className="block text-lg font-medium mb-2">Degree</label>
                                        <input
                                            type="text"
                                            id="degreeType"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=" "
                                            value={degreeType}
                                            onChange={(e) => setDegreeType(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="facultyType" className="block text-lg font-medium mb-2">Faculty</label>
                                        <input
                                            type="text"
                                            id="facultyType"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=" "
                                            value={facultyType}
                                            onChange={(e) => setFacultyType(e.target.value)}
                                            rows={1}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="courseName" className="block text-lg font-medium mb-2">Course Name</label>
                                        <input
                                            type="text"
                                            id="courseName"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=" "
                                            value={courseName}
                                            onChange={(e) => setCourseName(e.target.value)}
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




            </main>
        </div>
    );
};

export default Course;
