import React, { useState } from 'react';
import { SlDocs } from "react-icons/sl";
import { FcFolder } from "react-icons/fc";
import { BsThreeDotsVertical } from "react-icons/bs";
import DeleteModal from '../Modals/DeleteModal';

const Document = () => {
    const [currentSection, setCurrentSection] = useState('Students');
    const [showModal, setShowModal] = useState(false);


    //Modal details for the students section 
    const [folderName, setFolderName] = useState('');
    const [addFile, setAddFile] = useState(null);

    //Modal details for the colleges section 
    const [folderNameCol, setFolderNameCol] = useState('');
    const [addFileCol, setAddFileCol] = useState(null);

    // State variables for Students section
    const [studentsDocs, setStudentsDocs] = useState([]);
    // State variables for Colleges section
    const [collegesDocs, setCollegesDocs] = useState([]);

    const [selectedDocumentIndex, setSelectedDocumentIndex] = useState(null);
    const [showOptions, setShowOptions] = useState(false); // New state variable to manage the visibility of the options menu

    const [showDeleteModal, setShowDeleteModal] = useState(false); // State variable for showing delete modal
    const [documentToDeleteIndex, setDocumentToDeleteIndex] = useState(null); // State variable to store the index of the document to delete


    const handleMenuClick = (index) => {
        setSelectedDocumentIndex(index);
        setShowOptions(prevState => index === selectedDocumentIndex ? !prevState : true);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (currentSection === 'Students') {
            setAddFile(file);
        } else if (currentSection === 'Colleges') {
            setAddFileCol(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (currentSection === 'Students') {
            setAddFile(file);
        } else if (currentSection === 'Colleges') {
            setAddFileCol(file); // Corrected to setAddFileCol for the "Colleges" section
        }
    };

    const handleAddNewClick = () => {
        setShowModal(true);
        if (currentSection === 'Students') {
            setFolderName('');
            setAddFile(null);
        } else if (currentSection === 'Colleges') {
            setFolderNameCol('');
            setAddFileCol(null);
        }
    };

    const handleCancel = () => {
        setShowModal(false);
        if (currentSection === 'Students') {
            setFolderName('');
            setAddFile(null);
        } else if (currentSection === 'Colleges') {
            setFolderNameCol('');
            setAddFileCol(null);
        }
    };

    const handleSaveAccess = () => {
        // Check validation based on the current section
        if ((currentSection === 'Students' && (folderName.trim() === '' || !addFile)) ||
            (currentSection === 'Colleges' && (folderNameCol.trim() === '' || !addFileCol))) {
            alert('Please enter folder name and select a file.');
            return;
        }

        const newDocument = {
            name: currentSection === 'Students' ? folderName : folderNameCol,
            size: currentSection === 'Students' ? (addFile ? addFile.size : 0) : (addFileCol ? addFileCol.size : 0),
            uploadedOn: new Date(),
        };
        if (currentSection === 'Students') {
            setStudentsDocs([...studentsDocs, newDocument]);
        } else if (currentSection === 'Colleges') {
            setCollegesDocs([...collegesDocs, newDocument]);
        }

        setShowModal(false);
        setFolderName('');
        setAddFile(null);
        setFolderNameCol('');
        setAddFileCol(null);
    };



    const toggleSection = (section) => {
        setCurrentSection(section);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDownload = () => {

    };

    const handleDelete = (index) => {
        // Set the index of the document to delete and show the delete modal
        setDocumentToDeleteIndex(index);
        setShowDeleteModal(true);
    };


    const handleConfirmDelete = () => {
        const updatedDocs = currentSection === 'Students' ? [...studentsDocs] : [...collegesDocs];
        updatedDocs.splice(documentToDeleteIndex, 1);
        currentSection === 'Students' ? setStudentsDocs(updatedDocs) : setCollegesDocs(updatedDocs);
        setShowDeleteModal(false);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false); // Close the delete confirmation modal
    };


    return (
        <div className="flex min-h-screen mt-16">
            <main className="bg-white text-black flex-1 p-2">
                <div className="bg-cyan-700 p-4 rounded-lg">
                    <h1 className="text-2xl text-white">Document Management</h1>
                </div>


                <div className="mt-6 mx-4">
                    <button onClick={() => toggleSection('Students')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'Students' ? 'text-black' : 'text-gray-500'}`}>
                        Students
                        {currentSection === 'Students' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4"></span>}
                    </button>

                    <button onClick={() => toggleSection('Colleges')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'Colleges' ? 'text-black' : 'text-gray-500'}`}>
                        Colleges
                        {currentSection === 'Colleges' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4"></span>}
                    </button>
                </div>

                {currentSection === 'Students' && (
                    <div>
                        <div className="mt-10 ml-2">
                            <div className="flex space-x-4 mt-10 ml-2 items-center">
                                <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search Student name or ID" />

                                <div className="items-end space-x-6">
                                    <button onClick={() => handleAddNewClick('Students')} className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                        + Add new
                                    </button>

                                    <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                        View all
                                    </button>
                                </div>
                            </div>
                        </div>

                        {studentsDocs.length === 0 ? (
                            <div className="flex items-center justify-center h-screen text-center">
                                <div className="text-center">
                                    <SlDocs className="text-9xl ml-32" />
                                    <h1 className="text-black text-3xl font-bold"> No record yet </h1>
                                    <h1 className="text-black text-xl font-medium"> All of your records will remain once created </h1>
                                    <button onClick={() => handleAddNewClick('Students')} className="mt-4 bg-orange-500 text-white px-4 py-2 border border-orange-500 hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                        + Add new
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="p-2">
                                <div className="flex bg-gray-100 p-2 rounded-lg font-bold">
                                    <div className="w-1/5">Folder name</div>
                                    <div className="w-1/5">Size</div>
                                    <div className="w-1/4">Uploaded On</div>
                                </div>

                                {studentsDocs.map((document, index) => (
                                    <div key={index} className="flex bg-white p-2 border border-grey-200 items-center">
                                        <div className="w-1/5 flex items-center">
                                            <FcFolder />
                                            <span className="ml-2">{document.name}</span>
                                        </div>
                                        <div className="w-1/5">{(document.size / 1024).toFixed(2)} KB</div>
                                        <div className="w-1/4 flex items-center justify-between">
                                            <span>{new Date(document.uploadedOn).toLocaleDateString('en-GB')}</span>
                                            <div className="relative">
                                                <BsThreeDotsVertical onClick={() => handleMenuClick(index)} className="cursor-pointer" />
                                                {showOptions && selectedDocumentIndex === index && (
                                                    <div className="absolute top-8 right-0 bg-white shadow-md border border-gray-200 rounded-md py-1 w-32 z-10">
                                                        <button onClick={() => handleDownload(document)} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Download</button>
                                                        <button onClick={() => handleDelete(index)} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Delete</button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {showDeleteModal && (
                            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                                <DeleteModal
                                    isOpen={showDeleteModal}
                                    onCancel={handleCloseDeleteModal}
                                    onConfirm={handleConfirmDelete}
                                />
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
                                    <h2 className="text-2xl font-bold mb-4">Create new folder</h2>
                                    <div className="mb-4">
                                        <label htmlFor="folderName" className="block text-lg font-medium mb-2">Folder name</label>
                                        <input
                                            type="text"
                                            id="folderName"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=""
                                            value={folderName}
                                            onChange={(e) => setFolderName(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="fileInput" className="block text-lg font-medium mb-2">Upload File (optional)</label>
                                        <div
                                            className="custom-file-upload h-32 w-full border-2 border-dashed border-blue-400 rounded-md text-lg px-2 py-2 bg-gray-100 hover:bg-gray-200 flex flex-col items-center justify-center"
                                            onDragOver={handleDragOver}
                                            onDrop={handleDrop}
                                            style={{ height: '200px', width: '100%' }}
                                        >
                                            <p className="text-center mb-2 font-semibold">Drag your file here </p>
                                            <p className="text-center mb-2">or</p>
                                            <div className="flex flex-col items-center justify-center">
                                                <label htmlFor="fileInput" className="custom-file-label border border-blue-400 rounded-md text-lg px-2 py-2 mb-2">+ Upload File</label>
                                                <input
                                                    type="file"
                                                    id="fileInput"
                                                    className="hidden"
                                                    onChange={handleFileChange}
                                                />
                                            </div>
                                        </div>
                                        {addFile && (
                                            <div>
                                                <p>File Selected: {addFile.name}</p>
                                            </div>
                                        )}
                                    </div>


                                    <div className="flex justify-end mt-4">
                                        <button onClick={handleCancel} className="mr-4 bg-white-500 text-gray-600 border border-gray-600 px-4 py-2 hover:bg-blue-300 hover:border-blue-300 rounded-md">Cancel</button>
                                        <button onClick={handleSaveAccess} className="bg-orange-500 text-white px-4 py-2 rounded-md border border-orange-500 hover:bg-green-500 hover:border-green-500"> Save </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}


                {currentSection === 'Colleges' && (
                    <div>
                        <div className="mt-10 ml-2">
                            <div className="flex space-x-4 mt-10 ml-2 items-center">
                                <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search Colleges" />

                                <div className="items-end space-x-6">
                                    <button onClick={() => handleAddNewClick('Colleges')} className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                        + Add new
                                    </button>

                                    <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                        View all
                                    </button>
                                </div>
                            </div>
                        </div>

                        {collegesDocs.length === 0 ? (
                            <div className="flex items-center justify-center h-screen text-center">
                                <div className="text-center">
                                    <SlDocs className="text-9xl ml-32" />
                                    <h1 className="text-black text-3xl font-bold"> No record yet </h1>
                                    <h1 className="text-black text-xl font-medium"> All of your records will remain once created </h1>
                                    <button onClick={() => handleAddNewClick('Colleges')} className="mt-4 bg-orange-500 text-white px-4 py-2 border border-orange-500 hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                        + Add new
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="p-2">
                                <div className="flex bg-gray-100 p-2 rounded-lg font-bold">
                                    <div className="w-1/5">Folder name</div>
                                    <div className="w-1/5">Size</div>
                                    <div className="w-1/4">Uploaded On</div>
                                </div>

                                {collegesDocs.map((document, index) => (
                                    <div key={index} className="flex bg-white p-2 border border-grey-200 items-center">
                                        <div className="w-1/5 flex items-center">
                                            <FcFolder />
                                            <span className="ml-2">{document.name}</span>
                                        </div>
                                        <div className="w-1/5">{(document.size / 1024).toFixed(2)} KB</div>
                                        <div className="w-1/4 flex items-center justify-between">
                                            <span>{new Date(document.uploadedOn).toLocaleDateString('en-GB')}</span>
                                            <div className="relative">
                                                <BsThreeDotsVertical onClick={() => handleMenuClick(index)} className="cursor-pointer" />
                                                {showOptions && selectedDocumentIndex === index && (
                                                    <div className="absolute top-8 right-0 bg-white shadow-md border border-gray-200 rounded-md py-1 w-32 z-10">
                                                        <button onClick={() => handleDownload(document)} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Download</button>
                                                        <button onClick={() => handleDelete(index)} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Delete</button>
                                                    </div>
                                                )}
                                            </div>
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
                                    <h2 className="text-2xl font-bold mb-4">Create new folder</h2>
                                    <div className="mb-4">
                                        <label htmlFor="folderName" className="block text-lg font-medium mb-2">Folder name</label>
                                        <input
                                            type="text"
                                            id="folderName"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=""
                                            value={folderNameCol}
                                            onChange={(e) => setFolderNameCol(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="fileInput" className="block text-lg font-medium mb-2">Upload File (optional)</label>
                                        <div
                                            className="custom-file-upload h-32 w-full border-2 border-dashed border-blue-400 rounded-md text-lg px-2 py-2 bg-gray-100 hover:bg-gray-200 flex flex-col items-center justify-center"
                                            onDragOver={handleDragOver}
                                            onDrop={handleDrop}
                                            style={{ height: '200px', width: '100%' }}
                                        >
                                            <p className="text-center mb-2 font-semibold">Drag your file here </p>
                                            <p className="text-center mb-2">or</p>
                                            <div className="flex flex-col items-center justify-center">
                                                <label htmlFor="fileInput" className="custom-file-label border border-blue-400 rounded-md text-lg px-2 py-2 mb-2">+ Upload File</label>
                                                <input
                                                    type="file"
                                                    id="fileInput"
                                                    className="hidden"
                                                    onChange={handleFileChange}
                                                />
                                            </div>
                                        </div>
                                        {addFileCol && (
                                            <div>
                                                <p>File Selected: {addFileCol.name}</p>
                                            </div>
                                        )}
                                    </div>


                                    <div className="flex justify-end mt-4">
                                        <button onClick={handleCancel} className="mr-4 bg-white-500 text-gray-600 border border-gray-600 px-4 py-2 hover:bg-blue-300 hover:border-blue-300 rounded-md">Cancel</button>
                                        <button onClick={handleSaveAccess} className="bg-orange-500 text-white px-4 py-2 rounded-md border border-orange-500 hover:bg-green-500 hover:border-green-500"> Save </button>
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

export default Document;
