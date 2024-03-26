import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { SlPencil } from 'react-icons/sl';
import { SlDocs } from "react-icons/sl";
import { RiDeleteBin6Line } from 'react-icons/ri';

const Role = () => {
    const [currentSection, setCurrentSection] = useState('AccessType');
    const [showModal, setShowModal] = useState(false);

    //Modal details for the access section 
    const [accessType, setAccessType] = useState('');
    const [accessDesc, setAccessDesc] = useState('');

    //Modal details for the role management section 
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [access, setAccess] = useState([]);


    //for handling different events
    // State variables for AccessType section
    const [accessPreferences, setAccessPreferences] = useState([]);
    // State variables for RoleManagement section
    const [rolePreferences, setRolePreferences] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [creationTime, setCreationTime] = useState(null);


    const handleAddNewClick = (index) => {
        setEditIndex(index);
        setShowModal(true);
        if (index !== null) {
            // Use the correct preferences array based on the current section
            const preference = currentSection === 'AccessType' ? accessPreferences[index] : rolePreferences[index];
            if (preference) {
                // Update state based on the current section
                if (currentSection === 'AccessType') {
                    setAccessType(preference.type);
                    setAccessDesc(preference.desc);
                } else if (currentSection === 'RoleManagement') {
                    setUserName(preference.userName);
                    setRole(preference.role);
                    setEmail(preference.email);
                    setAccess(preference.access);
                }
            }
        } else {
            const newCreationTime = new Date().getTime();
            setCreationTime(newCreationTime);
            // Initialize state based on the current section
            if (currentSection === 'AccessType') {
                setAccessType('');
                setAccessDesc('');
            } else if (currentSection === 'RoleManagement') {
                setUserName('');
                setEmail('');
                setRole('');
                setAccess([]);
            }
        }
    };


    const handleCancel = () => {
        setShowModal(false);
        if (currentSection === 'AccessType') {
            setAccessType('');
            setAccessDesc('');
        } else if (currentSection === 'RoleManagement') {
            setUserName('');
            setEmail('');
            setRole('');
            setAccess([]);
        }
    };

    const handleSaveAccess = () => {
        if (currentSection === 'AccessType' && (accessType.trim() === '' || accessDesc.trim() === '')) {
            // Display error message for AccessType section
            alert('The fields are empty. Please fill the form first.');
            return;
        } else if (currentSection === 'RoleManagement' && (role.trim() === '' || userName.trim() === '')) {
            // Display error message for roleManagement section
            alert('The fields are empty. Please fill the form first.');
            return;
        }
    
        setShowModal(false);
        const formattedDate = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    
        if (currentSection === 'AccessType') {
            // preferences related to AccessType
            const updatedAccessPreferences = [...accessPreferences];
            if (editIndex !== null) {
                updatedAccessPreferences[editIndex] = { type: accessType, desc: accessDesc, updatedOn: formattedDate };
            } else {
                updatedAccessPreferences.push({ type: accessType, desc: accessDesc, creationTime, updatedOn: formattedDate });
            }
            setAccessPreferences(updatedAccessPreferences);
        } else if (currentSection === 'RoleManagement') {
            //preferences related to roleManagement
            const updatedRolePreferences = [...rolePreferences];
            if (editIndex !== null) {
                updatedRolePreferences[editIndex] = { role, userName, email, access, updatedOn: formattedDate };
            } else {
                updatedRolePreferences.push({ role, userName, creationTime, email, access, updatedOn: formattedDate });
            }
            setRolePreferences(updatedRolePreferences);
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
            if (currentSection === 'AccessType') {
                const allCreationTimes = accessPreferences.map(preference => preference.creationTime);
                setSelectedRows(allCreationTimes);
            } else if (currentSection === 'RoleManagement') {
                const allRoles = rolePreferences.map(preference => preference.role);
                setSelectedRows(allRoles);
            }
        }
        setSelectAll(!selectAll);
    };

    const handleSelectRow = (identifier) => {
        let updatedSelectedRows = [...selectedRows];
        if (currentSection === 'AccessType') {
            if (updatedSelectedRows.includes(identifier)) {
                updatedSelectedRows = updatedSelectedRows.filter(time => time !== identifier);
            } else {
                updatedSelectedRows.push(identifier);
            }
        } else if (currentSection === 'RoleManagement') {
            if (updatedSelectedRows.includes(identifier)) {
                updatedSelectedRows = updatedSelectedRows.filter(role => role !== identifier);
            } else {
                updatedSelectedRows.push(identifier);
            }
        }
        setSelectedRows(updatedSelectedRows);
    };

    const handleToggle = (index) => {
        const updatedPreferences = currentSection === 'AccessType' ? [...accessPreferences] : [...rolePreferences];
        updatedPreferences[index].status = !updatedPreferences[index].status;
        if (currentSection === 'AccessType') {
            setAccessPreferences(updatedPreferences);
        } else if (currentSection === 'RoleManagement') {
            setRolePreferences(updatedPreferences);
        }
    };

    const handleDelete = (index) => {
        const updatedPreferences = currentSection === 'AccessType' ? [...accessPreferences] : [...rolePreferences];
        updatedPreferences.splice(index, 1);
        if (currentSection === 'AccessType') {
            setAccessPreferences(updatedPreferences);
        } else if (currentSection === 'RoleManagement') {
            setRolePreferences(updatedPreferences);
        }
    };

    const handleAccessChange = (option, checked) => {
        if (checked) {
            setAccess(prevAccess => [...prevAccess, option]); // Add the option to the access state
        } else {
            setAccess(prevAccess => {
                return prevAccess.filter(item => item !== option); // Remove the option from the access state
            });
        }
    };
    
    

    return (
        <div className="flex h-screen mt-16">
            <main className="bg-white text-black flex-1 p-2">
                <div className="bg-cyan-700 p-4 rounded-lg">
                    <h1 className="text-2xl text-white">Role Management </h1>
                </div>

                <div className="mt-6 mx-4">
                    <button onClick={() => toggleSection('AccessType')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'AccessType' ? 'text-black' : 'text-gray-500'}`}>
                        Access
                        {currentSection === 'AccessType' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4 "></span>}
                    </button>

                    <button onClick={() => toggleSection('RoleManagement')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'RoleManagement' ? 'text-black' : 'text-gray-500'}`}>
                        Role Management
                        {currentSection === 'RoleManagement' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4"></span>}
                    </button>
                </div>


                {currentSection === 'AccessType' && (
                    <div className="mt-10 ml-2">
                        <div className="flex space-x-4 mt-10 ml-2 items-center">
                            <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search name or role" />

                            <div className="items-end space-x-6">
                                <button onClick={() => handleAddNewClick(null)} className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                    + Add new
                                </button>

                                <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                    View all
                                </button>
                            </div>
                        </div>

                        {accessPreferences.length === 0 ? (
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
                            <div className="p-2">
                                <div className="flex bg-gray-100 p-2 rounded-lg font-bold">
                                    <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                                    </div>
                                    <div className="w-1/5">Access</div>
                                    <div className="w-1/5">Access Description</div>
                                    <div className="w-1/4">Updated On</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-16 sm:w-20 md:w-24 lg:w-24">Action</div>
                                </div>

                                {accessPreferences.map((preference, index) => (
                                    <div key={index} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(preference.creationTime) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                            <input type="checkbox" checked={selectedRows.includes(preference.creationTime)} onChange={() => handleSelectRow(preference.creationTime)} />
                                        </div>
                                        <div className="w-1/5">{preference.type}</div>
                                        <div className="w-1/5">{preference.desc}</div>
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
                                    <h2 className="text-2xl font-bold mb-4">Add new access</h2>
                                    <div className="mb-4">
                                        <label htmlFor="accessType" className="block text-lg font-medium mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="accessType"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=""
                                            value={accessType}
                                            onChange={(e) => setAccessType(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="accessDesc" className="block text-lg font-medium mb-2">Description</label>
                                        <textarea
                                            type="text"
                                            id="accessDesc"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3 resize-vertical"
                                            placeholder=""
                                            value={accessDesc}
                                            onChange={(e) => setAccessDesc(e.target.value)}
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


                {currentSection === 'RoleManagement' && (
                    <div className="mt-10 ml-2">
                        <div className="flex space-x-4 mt-10 ml-2 items-center">
                            <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search name or role" />

                            <div className="items-end space-x-6">
                                <button onClick={() => handleAddNewClick(null)} className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                    + Add new
                                </button>

                                <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                    View all
                                </button>
                            </div>
                        </div>



                        {rolePreferences.length === 0 ? (
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
                            <div className="p-2">
                                <div className="flex bg-gray-100 p-2 rounded-lg font-bold">
                                    <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                                    </div>
                                    <div className="w-1/4">Name</div>
                                    <div className="w-1/4">Role</div>
                                    <div className="w-1/4">Updated On</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-1/4">Action</div>
                                </div>

                                {/* Table Rows */}
                                {rolePreferences.map((preference, index) => (
                                    <div key={index} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(preference.creationTime) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                            <input type="checkbox" checked={selectedRows.includes(preference.creationTime)} onChange={() => handleSelectRow(preference.creationTime)} />
                                        </div>
                                        <div className="w-1/4">{preference.userName}</div>
                                        <div className="w-1/4">{preference.role}</div>
                                        <div className="w-1/4">{preference.updatedOn}</div>
                                        <div className="w-1/4">
                                            <label className="flex items-center relative w-max cursor-pointer select-none px-4 py-2">
                                                <input type="checkbox" className="hidden" checked={preference.status} onChange={() => handleToggle(index)} />
                                                <span className="absolute font-medium text-xs uppercase right-1 text-black bg-red-300 w-7 text-center">OFF</span>
                                                <span className="absolute font-medium text-xs uppercase right-8 text-black bg-green-300 w-7 text-center">ON</span>
                                                <span className={`w-8 h-5 right-8 absolute rounded-full transform transition-transform ${preference.status ? 'bg-green-500 translate-x-full' : 'bg-gray-200'}`} />
                                            </label>
                                        </div>
                                        {/* Action */}
                                        <div className="w-1/4 flex items-center text-xl space-x-4">
                                            <a href="#" title="View" onClick={() => handleAddNewClick(null)}>
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
                                    <h2 className="text-2xl font-bold mb-4">Add new user</h2>
                                    <div className="mb-4">
                                        <label htmlFor="userName" className="block text-lg font-medium mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="userName"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder=""
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-4 flex flex-wrap">
                                        <div className="w-full md:w-4/5 pr-6">
                                            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full border border-gray-300 rounded-md py-2 px-3"
                                                placeholder=""
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/5">
                                            <label htmlFor="role" className="block text-lg font-medium mb-2">Role</label>
                                            <input
                                                type="text"
                                                id="role"
                                                className="w-full border border-gray-300 rounded-md py-2 px-3"
                                                placeholder=""
                                                value={role}
                                                onChange={(e) => setRole(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="access" className="block text-lg font-medium mb-2">Access</label>
                                        <div className="flex flex-col mb-2">
                                            <div className="flex items-center mb-1">
                                                <input type="checkbox" id="userManagement" className="mr-2" onChange={(e) => handleAccessChange('userManagement', e.target.checked)} checked={access.includes('userManagement')} />
                                                <label htmlFor="userManagement">User Management</label>
                                            </div>
                                            <div className="flex items-center mb-1">
                                                <input type="checkbox" id="applicationManagement" className="mr-2" onChange={(e) => handleAccessChange('applicationManagement', e.target.checked)} checked={access.includes('applicationManagement')} />
                                                <label htmlFor="applicationManagement">Application Management</label>
                                            </div>

                                            <div className="flex items-center mb-1">
                                                <input type="checkbox" id="contentManagement" className="mr-2" onChange={(e) => handleAccessChange('Content Management', e.target.checked)} checked={access.includes('Content Management')} />
                                                <label htmlFor="contentManagement">Content Management</label>
                                            </div>
                                            <div className="flex items-center mb-1">
                                                <input type="checkbox" id="systemSettings" className="mr-2" onChange={(e) => handleAccessChange('System Settings', e.target.checked)} checked={access.includes('System Settings')} />
                                                <label htmlFor="systemSettings">System Settings</label>
                                            </div>
                                            <div className="flex items-center mb-1">
                                                <input type="checkbox" id="roleManagement" className="mr-2" onChange={(e) => handleAccessChange('Role Management', e.target.checked)} checked={access.includes('Role Management')} />
                                                <label htmlFor="roleManagement">Role Management</label>
                                            </div>
                                            <div className="flex items-center mb-1">
                                                <input type="checkbox" id="limitedUserManagement" className="mr-2" onChange={(e) => handleAccessChange('Limited User Management', e.target.checked)} checked={access.includes('Limited User Management')} />
                                                <label htmlFor="limitedUserManagement">Limited User Management</label>
                                            </div>
                                            <div className="flex items-center mb-1">
                                                <input type="checkbox" id="limitedApplicationManagement" className="mr-2" onChange={(e) => handleAccessChange('Limited Application Management', e.target.checked)} checked={access.includes('Limited Application Management')} />
                                                <label htmlFor="limitedApplicationManagement">Limited Application Management</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end mt-6">
                                        <button onClick={handleCancel} className="mr-4 bg-white-500 text-gray-600 border border-gray-600 px-4 py-2 hover:bg-blue-300 hover:border-blue-300 rounded-md">Cancel</button>
                                        <button onClick={handleSaveAccess} className="bg-orange-500 text-white px-4 py-2 rounded-md border border-orenge-500 hover:bg-green-500 hover:border-green-500">Save</button>
                                    </div>
                                </div>
                            </div>
                        )}


                    </div>

                )
                }

            </main >
        </div >
    );
};



export default Role;
