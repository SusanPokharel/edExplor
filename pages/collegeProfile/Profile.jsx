import React from 'react';

const CollegeProfile = () => {
    // Example details
    const collegeName = "Islingon College";
    const aboutCollege = "Islington College is a leading institution known for its excellence in arts and sciences education.";
    const collegeType = "Private";
    const country = "Nepal";
    const provinceState = "Bagmati";
    const cityVillage = "Kathmandu";
    const streetAddress = "Kamalpokhari";
    const postalCode = "33600";
    const locationImage = "/isling.png";
    const telephone = "123-456-7890";
    const phoneNumber = "+977 9876543210";
    const emailAddress = "info@islington.edu.np";
    const graduationRate = "90%";
    const website = "https://www.islington.edu.np";
    const establishedYear = "1980";
    const awardAmount = "$5000";
    const noOfAward = "200";
    const applicationStart = "12/12/2024";
    const applicationEnd = "12/02/2025";

    return (
        <div className="flex flex-col min-h-screen bg-white mt-12">
            <div className="bg-blue-500 p-4 rounded-lg mb-4">
                <h1 className="text-2xl text-white">Applications &gt; College Profile</h1>
            </div>


            <div className="container mx-auto flex-1 p-4 text-black">
                <div className="bg-gray-100 p-4 rounded-lg mb-4 mx-auto">
                    <h2 className="text-4xl font-semibold mb-8 text-center">College details</h2>


                    <div className="flex items-center mb-4">
                        <div className="flex flex-col ">
                        <p className="text-lg font-semibold mb-2">College Logo</p>
                            <img src="/isling.png" alt="College Logo" className="h-64 mr-4" />
                        </div>


                        <div className="flex flex-col ml-auto">
                        <p className="text-lg font-semibold mb-2">College Banner</p>
                            <div className="bg-gray-100 rounded-lg">
                                <img
                                    src="/isling.png" alt="Banner" className=" w-96 rounded-lg h-64" />
                            </div>
                        </div>
                    </div>



                    <div className="mb-4">
                        <p className="text-lg font-semibold mb-2">College Name</p>
                        <input type="text" value={collegeName} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>


                    <div className="mb-4">
                        <p className="text-lg font-semibold mb-2">About College</p>
                        <textarea value={aboutCollege} className="w-full p-2 border rounded-lg resize-y text-gray-600" rows="4" readOnly />
                    </div>



                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className="text-lg font-semibold mb-2">College Type</p>
                            <input type="text" value={collegeType} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>


                        <div className="flex-1 ml-2">
                            <p className="text-lg font-semibold mb-2">Country</p>
                            <input type="text" value={country} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>
                    </div>



                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className="text-lg font-semibold mb-2">Province/State</p>
                            <input type="text" value={provinceState} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>


                        <div className="flex-1 ml-2">
                            <p className="text-lg font-semibold mb-2">City/Village</p>
                            <input type="text" value={cityVillage} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>
                    </div>



                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className="text-lg font-semibold mb-2">Street Address</p>
                            <input type="text" value={streetAddress} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>


                        <div className="flex-1 ml-2">
                            <p className="text-lg font-semibold mb-2">Postal Code</p>
                            <input type="text" value={postalCode} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>
                    </div>


                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className="text-lg font-semibold mb-2">Location on Map</p>
                            <img src={locationImage} alt="Location Image" className="w-full h-40 object-cover rounded-lg text-gray-600" />
                        </div>
                    </div>


                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className="text-lg font-semibold mb-2">Telephone</p>
                            <input type="text" value={telephone} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>


                        <div className="flex-1 ml-2">
                            <p className="text-lg font-semibold mb-2">Phone Number</p>
                            <input type="text" value={phoneNumber} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>
                    </div>


                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className="text-lg font-semibold mb-2">Email Address</p>
                            <input type="text" value={emailAddress} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>


                        <div className="flex-1 ml-2">
                            <p className="text-lg font-semibold mb-2">Website</p>
                            <input type="text" value={website} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>
                    </div>

                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className="text-lg font-semibold mb-2">Graduation Rate</p>
                            <input type="text" value={graduationRate} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>


                        <div className="flex-1 ml-2">
                            <p className="text-lg font-semibold mb-2">Established Year</p>
                            <input type="text" value={establishedYear} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>
                    </div>


                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className="text-lg font-semibold mb-2">Scholarship Name</p>
                            <input type="text" value={collegeName} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>
                    </div>


                    <div className="mb-4">
                        <p className="text-lg font-semibold mb-2">Scholarship Details</p>
                        <textarea value={aboutCollege} className="w-full p-2 border rounded-lg resize-y text-gray-600" rows="4" readOnly />
                    </div>


                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className="text-lg font-semibold mb-2">Award Amount</p>
                            <input type="text" value={awardAmount} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>


                        <div className="flex-1 ml-2">
                            <p className="text-lg font-semibold mb-2">No of award</p>
                            <input type="text" value={noOfAward} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>
                    </div>


                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className="text-lg font-semibold mb-2">Application start</p>
                            <input type="text" value={applicationStart} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>


                        <div className="flex-1 ml-2">
                            <p className="text-lg font-semibold mb-2">Application deadline</p>
                            <input type="text" value={applicationEnd} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CollegeProfile;
