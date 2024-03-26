import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { SlPencil } from 'react-icons/sl';
import { SlDocs } from "react-icons/sl";
import { RiDeleteBin6Line } from 'react-icons/ri';

const Location = () => {
    const [currentSection, setCurrentSection] = useState('Country');
    const [showModal, setShowModal] = useState(false);
    //Country Section Modal Details
    const [countryCode, setCountryCode] = useState('');
    const [countryName, setCountryName] = useState('');
    //Province Section Modal Details
    const [countryNamePro, setCountryNamePro] = useState('');
    const [provinceName, setProvinceName] = useState('');
    //District Section Modal Details
    const [countryNameDis, setCountryNameDis] = useState('');
    const [provinceNameDis, setProvinceNameDis] = useState('');
    const [districtName, setDistrictName] = useState('');
    //City Section Modal Details
    const [countryNameCty, setCountryNameCty] = useState('');
    const [provinceNameCty, setProvinceNameCty] = useState('');
    const [districtNameCty, setDistrictNameCty] = useState('');
    const [cityName, setCityName] = useState('');

    //Street Address Section Modal Details
    const [countryNameSA, setCountryNameSA] = useState('');
    const [provinceNameSA, setProvinceNameSA] = useState('');
    const [districtNameSA, setDistrictNameSA] = useState('');
    const [cityNameSA, setCityNameSA] = useState('');
    const [streetAddress, setStreetAddress] = useState('');

    // State variables for Degree section
    const [countryPreferences, setCountryPreferences] = useState([]);
    // State variables for Faculty section
    const [provincePreferences, setProvincePreferences] = useState([]);
    // State variables for Course section
    const [districtPreferences, setDistrictPreferences] = useState([]);
    // State variables for Faculty section
    const [cityPreferences, setCityPreferences] = useState([]);
    // State variables for Course section
    const [streetAddressPreferences, setStreetAddressPreferences] = useState([]);


    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [creationTime, setCreationTime] = useState(null);
    const countryMapping = {
        'NE': 'Nepal',
        'IN': 'India',
        'CH': 'China',
        'JP': 'Japan',
        'PK': 'Pakistan',
    };

    //Pressing on +Add new button - event handling each section wise
    const handleAddNewClick = (index) => {
        setEditIndex(index);
        setShowModal(true);
        if (index !== null) {
            // Preferences array based on the current section
            let preference;
            if (currentSection === 'Country') {
                preference = countryPreferences[index];
            } else if (currentSection === 'Province') {
                preference = provincePreferences[index];
            } else if (currentSection === 'District') {
                preference = districtPreferences[index];
            } else if (currentSection === 'City') {
                preference = cityPreferences[index];
            } else if (currentSection === 'Street Address') {
                preference = streetAddressPreferences[index];
            }
            if (preference) {
                // Update state based on the current section
                if (currentSection === 'Country') {
                    setCountryCode(preference.Ccode);
                    setCountryName(preference.Cname);
                } else if (currentSection === 'Province') {
                    setCountryNamePro(preference.Cname);
                    setProvinceName(preference.Pname);
                } else if (currentSection === 'District') {
                    setCountryNameDis(preference.Cname);
                    setProvinceNameDis(preference.Pname);
                    setDistrictName(preference.Dname);
                } else if (currentSection === 'City') {
                    setCountryNameCty(preference.Cname);
                    setProvinceNameCty(preference.Pname);
                    setDistrictNameCty(preference.Dname);
                    setCityName(preference.Ctname);
                } else if (currentSection === 'Street Address') {
                    setCountryNameSA(preference.Cname);
                    setProvinceNameSA(preference.Pname);
                    setDistrictNameSA(preference.Dname);
                    setCityNameSA(preference.Ctname);
                    setStreetAddress(preference.Saname);
                }
            }
        } else {
            const newCreationTime = new Date().getTime();
            setCreationTime(newCreationTime);
            // Initialize state based on the current section
            if (currentSection === 'Country') {
                setCountryCode('');
                setCountryName('');
            } else if (currentSection === 'Province') {
                setCountryNamePro('');
                setProvinceName('');
            } else if (currentSection === 'District') {
                setCountryNameDis('');
                setProvinceNameDis('');
                setDistrictName('');
            } else if (currentSection === 'City') {
                setCountryNameCty('');
                setProvinceNameCty('');
                setDistrictNameCty('');
                setCityName('');
            } else if (currentSection === 'Street Address') {
                setCountryNameSA('');
                setProvinceNameSA('');
                setDistrictNameSA('');
                setCityNameSA('');
                setStreetAddress('');
            }
        }
    };

    const handleCancel = () => {
        setShowModal(false);
        if (currentSection === 'Country') {
            setCountryCode('');
            setCountryName('');
        } else if (currentSection === 'Province') {
            setCountryNamePro('');
            setProvinceName('');
        } else if (currentSection === 'District') {
            setCountryNameDis('');
            setProvinceNameDis('');
            setDistrictName('');
        } else if (currentSection === 'City') {
            setCountryNameCty('');
            setProvinceNameCty('');
            setDistrictNameCty('');
            setCityName('');
        } else if (currentSection === 'Street Address') {
            setCountryNameSA('');
            setProvinceNameSA('');
            setDistrictNameSA('');
            setCityNameSA('');
            setStreetAddress('');
        }
    };

    const handleSave = () => {
        // Checking if required fields are empty for each section and displaying an error message if necessary
        if (currentSection === 'Country' && (countryCode.trim() === '' || countryName.trim() === '')) {
            alert('Some fields are empty. Please fill the form first.');
            return;
        } else if (currentSection === 'Province' && (countryNamePro.trim() === '' || provinceName.trim() === '')) {
            alert('Some fields are empty. Please fill the form first.');
            return;
        } else if (currentSection === 'District' && (countryNameDis.trim() === '' || provinceNameDis.trim() === '' || districtName.trim() === '')) {
            alert('Some fields are empty. Please fill the form first.');
            return;
        } else if (currentSection === 'City' && (countryNameCty.trim() === '' || provinceNameCty.trim() === '' || districtNameCty.trim() === '' || cityName.trim() === '')) {
            alert('Some fields are empty. Please fill the form first.');
            return;
        } else if (currentSection === 'Street Address' && (countryNameSA.trim() === '' || provinceNameSA.trim() === '' || districtNameSA.trim() === '' || cityNameSA.trim() === '' || streetAddress.trim() === '')) {
            alert('Some fields are empty. Please fill the form first.');
            return;
        }
        setShowModal(false);
        const formattedDate = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

        if (editIndex !== null) {
            // Editing existing entry
            if (currentSection === 'Country') {
                const updatedCountryPreferences = [...countryPreferences];
                updatedCountryPreferences[editIndex] = { Ccode: countryCode, Cname: countryName, updatedOn: formattedDate };
                setCountryPreferences(updatedCountryPreferences);
            } else if (currentSection === 'Province') {
                const updatedProvincePreferences = [...provincePreferences];
                updatedProvincePreferences[editIndex] = { Cname: countryNamePro, Pname: provinceName, updatedOn: formattedDate };
                setProvincePreferences(updatedProvincePreferences);
            } else if (currentSection === 'District') {
                const updatedDistrictPreferences = [...districtPreferences];
                updatedDistrictPreferences[editIndex] = { Cname: countryNameDis, Pname: provinceNameDis, Dname: districtName, updatedOn: formattedDate };
                setDistrictPreferences(updatedDistrictPreferences);
            } else if (currentSection === 'City') {
                const updatedCityPreferences = [...cityPreferences];
                updatedCityPreferences[editIndex] = { Cname: countryNameCty, Pname: provinceNameCty, Dname: districtNameCty, Ctname: cityName, updatedOn: formattedDate };
                setCityPreferences(updatedCityPreferences);
            } else if (currentSection === 'Street Address') {
                const updatedStreetAddressPreferences = [...streetAddressPreferences];
                updatedStreetAddressPreferences[editIndex] = { Cname: countryNameSA, Pname: provinceNameSA, Dname: districtNameSA, Ctname: cityNameSA, Saname: streetAddress, updatedOn: formattedDate };
                setStreetAddressPreferences(updatedStreetAddressPreferences);
            }
        } else {
            // Adding new entry
            if (currentSection === 'Country') {
                const updatedCountryPreferences = [...countryPreferences];
                updatedCountryPreferences.push({ Ccode: countryCode, Cname: countryName, updatedOn: formattedDate });
                setCountryPreferences(updatedCountryPreferences);
            } else if (currentSection === 'Province') {
                const updatedProvincePreferences = [...provincePreferences];
                updatedProvincePreferences.push({ Cname: countryNamePro, Pname: provinceName, updatedOn: formattedDate });
                setProvincePreferences(updatedProvincePreferences);
            } else if (currentSection === 'District') {
                const updatedDistrictPreferences = [...districtPreferences];
                updatedDistrictPreferences.push({ Cname: countryNameDis, Pname: provinceNameDis, Dname: districtName, updatedOn: formattedDate });
                setDistrictPreferences(updatedDistrictPreferences);
            } else if (currentSection === 'City') {
                const updatedCityPreferences = [...cityPreferences];
                updatedCityPreferences.push({ Cname: countryNameCty, Pname: provinceNameCty, Dname: districtNameCty, Ctname: cityName, updatedOn: formattedDate });
                setCityPreferences(updatedCityPreferences);
            } else if (currentSection === 'Street Address') {
                const updatedStreetAddressPreferences = [...streetAddressPreferences];
                updatedStreetAddressPreferences.push({ Cname: countryNameSA, Pname: provinceNameSA, Dname: districtNameSA, Ctname: cityNameSA, Saname: streetAddress, updatedOn: formattedDate });
                setStreetAddressPreferences(updatedStreetAddressPreferences);
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
            if (currentSection === 'Country') {
                const allCountryNames = countryPreferences.map(preference => preference.creationTime);
                setSelectedRows(allCountryNames);
            } else if (currentSection === 'Province') {
                const allProvinceNames = provincePreferences.map(preference => preference.creationTime);
                setSelectedRows(allProvinceNames);
            } else if (currentSection === 'District') {
                const allDistrictNames = districtPreferences.map(preference => preference.creationTime);
                setSelectedRows(allDistrictNames);
            } else if (currentSection === 'City') {
                const allCityNames = cityPreferences.map(preference => preference.creationTime);
                setSelectedRows(allCityNames);
            } else if (currentSection === 'Street Address') {
                const allStreetAddressNames = streetAddressPreferences.map(preference => preference.creationTime);
                setSelectedRows(allStreetAddressNames);
            }
        }
        setSelectAll(!selectAll);
    };

    const handleSelectRow = (identifier) => {
        let updatedSelectedRows = [...selectedRows];
        if (currentSection === 'Country') {
            if (updatedSelectedRows.includes(identifier)) {
                updatedSelectedRows = updatedSelectedRows.filter(name => name !== identifier);
            } else {
                updatedSelectedRows.push(identifier);
            }
        } else if (currentSection === 'Province') {
            if (updatedSelectedRows.includes(identifier)) {
                updatedSelectedRows = updatedSelectedRows.filter(name => name !== identifier);
            } else {
                updatedSelectedRows.push(identifier);
            }
        } else if (currentSection === 'District') {
            if (updatedSelectedRows.includes(identifier)) {
                updatedSelectedRows = updatedSelectedRows.filter(name => name !== identifier);
            } else {
                updatedSelectedRows.push(identifier);
            }
        } else if (currentSection === 'City') {
            if (updatedSelectedRows.includes(identifier)) {
                updatedSelectedRows = updatedSelectedRows.filter(name => name !== identifier);
            } else {
                updatedSelectedRows.push(identifier);
            }
        } else if (currentSection === 'Street Address') {
            if (updatedSelectedRows.includes(identifier)) {
                updatedSelectedRows = updatedSelectedRows.filter(name => name !== identifier);
            } else {
                updatedSelectedRows.push(identifier);
            }
        }
        setSelectedRows(updatedSelectedRows);
    };


    const handleDelete = (index) => {
        let updatedPreferences;
        if (currentSection === 'Country') {
            updatedPreferences = [...countryPreferences];
            updatedPreferences.splice(index, 1);
            setCountryPreferences(updatedPreferences);
        } else if (currentSection === 'Province') {
            updatedPreferences = [...provincePreferences];
            updatedPreferences.splice(index, 1);
            setProvincePreferences(updatedPreferences);
        } else if (currentSection === 'District') {
            updatedPreferences = [...districtPreferences];
            updatedPreferences.splice(index, 1);
            setDistrictPreferences(updatedPreferences);
        } else if (currentSection === 'City') {
            updatedPreferences = [...cityPreferences];
            updatedPreferences.splice(index, 1);
            setCityPreferences(updatedPreferences);
        } else if (currentSection === 'Street Address') {
            updatedPreferences = [...streetAddressPreferences];
            updatedPreferences.splice(index, 1);
            setStreetAddressPreferences(updatedPreferences);
        }
    };

    const handleToggle = (index) => {
        let updatedPreferences;
        if (currentSection === 'Country') {
            updatedPreferences = [...countryPreferences];
        } else if (currentSection === 'Province') {
            updatedPreferences = [...provincePreferences];
        } else if (currentSection === 'District') {
            updatedPreferences = [...districtPreferences];
        } else if (currentSection === 'City') {
            updatedPreferences = [...cityPreferences];
        } else if (currentSection === 'Street Address') {
            updatedPreferences = [...streetAddressPreferences];
        }
        updatedPreferences[index].status = !updatedPreferences[index].status;
        if (currentSection === 'Country') {
            setCountryPreferences(updatedPreferences);
        } else if (currentSection === 'Province') {
            setProvincePreferences(updatedPreferences);
        } else if (currentSection === 'District') {
            setDistrictPreferences(updatedPreferences);
        } else if (currentSection === 'City') {
            setCityPreferences(updatedPreferences);
        } else if (currentSection === 'Street Address') {
            setStreetAddressPreferences(updatedPreferences);
        }
    };


    const countryOptions = Object.keys(countryMapping).map(code => (
        <option key={code} value={code}>{countryMapping[code]}</option>
    ));

    return (
        <div className="flex h-full mt-16">
            <main className="bg-white text-black flex-1 p-2">
                <header>
                    <div className="bg-cyan-700 p-4 rounded-lg">
                        <h1 className="text-2xl text-white">Master Data management &gt; location </h1>
                    </div>
                </header>

                <div className="mt-6 mb-3">
                    <button onClick={() => toggleSection('Country')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'Country' ? 'text-black' : 'text-gray-500'}`}>
                        Country
                        {currentSection === 'Country' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4 "></span>}
                    </button>

                    <button onClick={() => toggleSection('Province')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'Province' ? 'text-black' : 'text-gray-500'}`}>
                        Province
                        {currentSection === 'Province' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4"></span>}
                    </button>

                    <button onClick={() => toggleSection('District')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'District' ? 'text-black' : 'text-gray-500'}`}>
                        District
                        {currentSection === 'District' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4"></span>}
                    </button>

                    <button onClick={() => toggleSection('City')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'City' ? 'text-black' : 'text-gray-500'}`}>
                        City
                        {currentSection === 'City' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4"></span>}
                    </button>

                    <button onClick={() => toggleSection('Street Address')} className={`text-2xl px-4 py-2 relative font-medium ${currentSection === 'Street Address' ? 'text-black' : 'text-gray-500'}`}>
                        Street Address
                        {currentSection === 'Street Address' && <span className="block absolute w-full h-1.5 bg-orange-500 left-0 mt-4"></span>}
                    </button>
                </div>

                {currentSection === 'Country' && (
                    <div>
                        <div className="flex space-x-4 mt-10 ml-2 items-center mb-6">
                            <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search country name" />

                            <div className="items-end space-x-6">
                                <button onClick={() => handleAddNewClick(null)} className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                    + Add new
                                </button>

                                <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                    View all
                                </button>
                            </div>
                        </div>

                        {countryPreferences.length === 0 ? (
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
                                    <div className="w-1/5">Country code</div>
                                    <div className="w-1/5">Country name</div>
                                    <div className="w-1/4">Updated On</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-16 sm:w-20 md:w-24 lg:w-24">Action</div>
                                </div>


                                {countryPreferences.map((preference, index) => (
                                    <div key={index} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(preference.creationTime) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                            <input type="checkbox" checked={selectedRows.includes(preference.creationTime)} onChange={() => handleSelectRow(preference.creationTime)} />
                                        </div>
                                        <div className="w-1/5">{preference.Ccode}</div>
                                        <div className="w-1/5">{preference.Cname}</div>
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
                                    <h2 className="text-2xl font-bold mb-4">Add new Country</h2>
                                    <div className="mb-4">
                                        <label htmlFor="countryCode" className="block text-lg font-medium mb-2">Country Code:</label>
                                        <input
                                            type="text"
                                            id="countryCode"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter country code"
                                            value={countryCode}
                                            onChange={(e) => setCountryCode(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="countryName" className="block text-lg font-medium mb-2">Country Name:</label>
                                        <input
                                            type="text"
                                            id="countryName"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter country name"
                                            value={countryName}
                                            onChange={(e) => setCountryName(e.target.value)}
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

                {currentSection === 'Province' && (
                    <div>
                        <div className="flex space-x-4 mt-10 ml-2 items-center mb-6">
                            <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search province or country" />

                            <div className="items-end space-x-6">
                                <button onClick={() => handleAddNewClick(null)} className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                    + Add new
                                </button>

                                <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                    View all
                                </button>
                            </div>
                        </div>

                        {provincePreferences.length === 0 ? (
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
                                    <div className="w-1/5">Province name</div>
                                    <div className="w-1/5">Country name</div>
                                    <div className="w-1/4">Updated On</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-16 sm:w-20 md:w-24 lg:w-24">Action</div>
                                </div>


                                {provincePreferences.map((preference, index) => (
                                    <div key={index} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(preference.creationTime) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                            <input type="checkbox" checked={selectedRows.includes(preference.creationTime)} onChange={() => handleSelectRow(preference.creationTime)} />
                                        </div>
                                        <div className="w-1/5">{preference.Pname}</div>
                                        <div className="w-1/5">{preference.Cname}</div>
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
                                    <h2 className="text-2xl font-bold mb-4">Add new Province</h2>

                                    <div className="mb-4">
                                        <label htmlFor="countryNamePro" className="block text-lg font-medium mb-2">Country</label>
                                        <select
                                            id="countryNamePro"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            value={countryNamePro}
                                            onChange={(e) => setCountryNamePro(e.target.value)}>
                                            <option value="" className='text-gray-400'> Select a Country</option>
                                            {countryOptions}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="provinceName" className="block text-lg font-medium mb-2">Province Name:</label>
                                        <input
                                            type="text"
                                            id="provinceName"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter province name"
                                            value={provinceName}
                                            onChange={(e) => setProvinceName(e.target.value)}
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

                {currentSection === 'District' && (
                    <div>
                        <div className="flex space-x-4 mt-10 ml-2 items-center mb-6">
                            <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search district or country" />

                            <div className="items-end space-x-6">
                                <button onClick={() => handleAddNewClick(null)} className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                    + Add new
                                </button>

                                <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                    View all
                                </button>
                            </div>
                        </div>


                        {districtPreferences.length === 0 ? (
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
                                    <div className="w-1/5">District name</div>
                                    <div className="w-1/5">Province name</div>
                                    <div className="w-1/5">Country name</div>
                                    <div className="w-1/4">Updated On</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-16 sm:w-20 md:w-24 lg:w-24">Action</div>
                                </div>


                                {districtPreferences.map((preference, index) => (
                                    <div key={index} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(preference.creationTime) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                            <input type="checkbox" checked={selectedRows.includes(preference.creationTime)} onChange={() => handleSelectRow(preference.creationTime)} />
                                        </div>
                                        <div className="w-1/5">{preference.Dname}</div>
                                        <div className="w-1/5">{preference.Pname}</div>
                                        <div className="w-1/5">{preference.Cname}</div>
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

                                    <h2 className="text-2xl font-bold mb-4">Add new District</h2>

                                    <div className="mb-4">
                                        <label htmlFor="countryNameDis" className="block text-lg font-medium mb-2">Country</label>
                                        <select
                                            id="countryNameDis"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            value={countryNameDis}
                                            onChange={(e) => setCountryNameDis(e.target.value)}>
                                            <option value="" className='text-gray-400'> Select a Country</option>
                                            {countryOptions}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="provinceNameDis" className="block text-lg font-medium mb-2">Province</label>
                                        <input
                                            type="text"
                                            id="provinceNameDis"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter province name"
                                            value={provinceNameDis}
                                            onChange={(e) => setProvinceNameDis(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="districtName" className="block text-lg font-medium mb-2">District</label>
                                        <input
                                            type="text"
                                            id="districtName"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter district name"
                                            value={districtName}
                                            onChange={(e) => setDistrictName(e.target.value)}
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

                {currentSection === 'City' && (
                    <div>
                        <div className="flex space-x-4 mt-10 ml-2 items-center mb-6">
                            <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search city or Country" />
                            <div className="items-end space-x-6">
                                <button onClick={() => handleAddNewClick(null)} className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                    + Add new
                                </button>

                                <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                    View all
                                </button>
                            </div>
                        </div>

                        {cityPreferences.length === 0 ? (
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
                                    <div className="w-1/5">City name</div>
                                    <div className="w-1/5">Province name</div>
                                    <div className="w-1/5">Country name</div>
                                    <div className="w-1/4">Updated On</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-16 sm:w-20 md:w-24 lg:w-24">Action</div>
                                </div>


                                {cityPreferences.map((preference, index) => (
                                    <div key={index} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(preference.creationTime) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                            <input type="checkbox" checked={selectedRows.includes(preference.creationTime)} onChange={() => handleSelectRow(preference.creationTime)} />
                                        </div>
                                        <div className="w-1/5">{preference.Ctname}</div>
                                        <div className="w-1/5">{preference.Pname}</div>
                                        <div className="w-1/5">{preference.Cname}</div>
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
                                    <h2 className="text-2xl font-bold mb-4">Add new City</h2>

                                    <div className="mb-4">
                                        <label htmlFor="countryNameCty" className="block text-lg font-medium mb-2">Country</label>
                                        <select
                                            id="countryNameCty"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            value={countryNameCty}
                                            onChange={(e) => setCountryNameCty(e.target.value)}>
                                            <option value="" className='text-gray-400'> Select a Country</option>
                                            {countryOptions}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="provinceNameCty" className="block text-lg font-medium mb-2">Province</label>
                                        <input
                                            type="text"
                                            id="provinceNameCty"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter province name"
                                            value={provinceNameCty}
                                            onChange={(e) => setProvinceNameCty(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="districtNameCty" className="block text-lg font-medium mb-2">District</label>
                                        <input
                                            type="text"
                                            id="provinceNameCty"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter district name"
                                            value={districtNameCty}
                                            onChange={(e) => setDistrictNameCty(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="cityName" className="block text-lg font-medium mb-2">City</label>
                                        <input
                                            type="text"
                                            id="cityName"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter city name"
                                            value={cityName}
                                            onChange={(e) => setCityName(e.target.value)}
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

                {currentSection === 'Street Address' && (
                    <div>
                        <div className="flex space-x-4 mt-10 ml-2 items-center mb-6">
                            <input type="text" className="flex-1 ml-2 max-w-3xl h-12 px-4 border border-grey-400 rounded-lg mr-auto" placeholder="Search street address or country" />

                            <div className="items-end space-x-6">
                                <button onClick={() => handleAddNewClick(null)} className="bg-orange-500 text-white px-4 py-2 border border-orange-500  hover:bg-orange-300 hover:border-orange-300 rounded-md">
                                    + Add new
                                </button>

                                <button onClick={() => { window.location.href = "./Programs"; }} className="bg-cyan-700 text-white px-4 py-2 border border-blue-500  hover:bg-blue-300 hover:border-blue-300 rounded-md">
                                    View all
                                </button>
                            </div>
                        </div>

                        {streetAddressPreferences.length === 0 ? (
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
                                    <div className="w-1/5">Street address</div>
                                    <div className="w-1/5">City name</div>
                                    <div className="w-1/5">Province name</div>
                                    <div className="w-1/5">Country name</div>
                                    <div className="w-1/4">Updated On</div>
                                    <div className="w-1/4">Status</div>
                                    <div className="w-16 sm:w-20 md:w-24 lg:w-24">Action</div>
                                </div>


                                {streetAddressPreferences.map((preference, index) => (
                                    <div key={index} className={`flex bg-white p-2 border border-grey-200 ${selectedRows.includes(preference.creationTime) ? 'bg-gray-100' : ''}`}>
                                        <div className="w-12 sm:w-10 md:w-12 lg:w-1/8">
                                            <input type="checkbox" checked={selectedRows.includes(preference.creationTime)} onChange={() => handleSelectRow(preference.creationTime)} />
                                        </div>
                                        <div className="w-1/5">{preference.Saname}</div>
                                        <div className="w-1/5">{preference.Ctname}</div>
                                        <div className="w-1/5">{preference.Pname}</div>
                                        <div className="w-1/5">{preference.Cname}</div>
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
                                    <h2 className="text-2xl font-bold mb-4">Add new strret address</h2>

                                    <div className="mb-4">
                                        <label htmlFor="countryNameSA" className="block text-lg font-medium mb-2">Country</label>
                                        <select
                                            id="countryNameSA"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            value={countryNameSA}
                                            onChange={(e) => setCountryNameSA(e.target.value)}>
                                            <option value="" className='text-gray-400'> Select a Country</option>
                                            {countryOptions}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="provinceNameSA" className="block text-lg font-medium mb-2">Province</label>
                                        <input
                                            type="text"
                                            id="provinceNameSA"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter province name"
                                            value={provinceNameSA}
                                            onChange={(e) => setProvinceNameSA(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="districtNameSA" className="block text-lg font-medium mb-2">District</label>
                                        <input
                                            type="text"
                                            id="districtNameSA"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter district name"
                                            value={districtNameSA}
                                            onChange={(e) => setDistrictNameSA(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="cityNameSA" className="block text-lg font-medium mb-2">City</label>
                                        <input
                                            type="text"
                                            id="cityNameSA"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter city name"
                                            value={cityNameSA}
                                            onChange={(e) => setCityNameSA(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="streetAddress" className="block text-lg font-medium mb-2">Street Address</label>
                                        <input
                                            type="text"
                                            id="streetAddress"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter street name"
                                            value={streetAddress}
                                            onChange={(e) => setStreetAddress(e.target.value)}
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

export default Location;
