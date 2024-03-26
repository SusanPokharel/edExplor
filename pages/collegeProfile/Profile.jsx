import React from 'react';

const CollegeProfile = () => {
    // Example details
    const collegeName = "Islingon College";
    const aboutCollege = "Islington College is a leading institution known for its excellence in arts and sciences education. Islington College is a leading institution known for its excellence in arts and sciences education.";
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
    const scholarshipDetails = "Islington College is a leading institution known for its excellence in arts and sciences education. Islington College is a leading institution known for its excellence in arts and sciences education.";

    const socialMedia = "https://www.islington.edu.np";

    const services = [
        "Computer Science",
        "Master",
        "Engineering",
        "USA",
        "Intenship Placement",
        "Art History",
        "Economics",
        "Business Administration",
        "Business Studies",
        "IT",
        "UK",
        "Islington College",
        "Bachelor's in Computing",
        "Software Engineering",
        "Low Cost",
    ];

    const photos = [
        'https://th.bing.com/th/id/OIP.V-cfWqHJAEHoJKXj-GKi-wHaE7?rs=1&pid=ImgDetMain',
        'https://w0.peakpx.com/wallpaper/752/1002/HD-wallpaper-college-student-happy-students.jpg',
        'https://e0.pxfuel.com/wallpapers/529/857/desktop-wallpaper-college-students-1920-x-1080.jpg',
        'https://w0.peakpx.com/wallpaper/44/274/HD-wallpaper-bca-college-education-course.jpg',
        'https://www.atozpictures.com/uploads/2016/04/narendra-modi-victory-hd-wallpapers.jpg',
        'https://english.makalukhabar.com/wp-content/uploads/2022/10/kp-oli-1.jpg'
    ]

    return (
        <div className="flex flex-col h-full bg-gray-50 mt-16 text-base">
            <div className="bg-cyan-700 p-4 rounded-lg mb-4">
                <h1 className="text-xl text-white">Applications &gt; College Profile</h1>
            </div>


            <div className="container mx-auto flex-1 p-4 text-black">
                <div className="bg-white p-4 rounded-lg mb-4 mx-auto">
                    <h2 className="text-3xl font-semibold mb-8 text-center">College details</h2>


                    <div className="flex items-center mb-4 text-base">
                        <div className="flex flex-col ">
                            <p className="font-semibold mb-2">College Logo</p>
                            <img src="/isling.png" alt="College Logo" className="h-64 mr-4 rounded-lg" />
                        </div>


                        <div className="flex flex-col ml-auto">
                            <p className="font-semibold mb-2">College Banner</p>
                            <div className="bg-gray-100 rounded-lg">
                                <img
                                    src="/building.png" alt="Banner" className=" w-96 rounded-lg h-64" />
                            </div>
                        </div>
                    </div>



                    <div className="mb-4">
                        <p className="font-semibold mb-2">College Name</p>
                        <input type="text" value={collegeName} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                    </div>


                    <div className="mb-4">
                        <p className=" font-semibold mb-2">About College</p>
                        <textarea value={aboutCollege} className="w-full p-2 border rounded-lg resize-y text-gray-600 text-sm" rows="4" readOnly />
                    </div>



                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className=" font-semibold mb-2">College Type</p>
                            <input type="text" value={collegeType} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>


                        <div className="flex-1 ml-2">
                            <p className=" font-semibold mb-2">Country</p>
                            <input type="text" value={country} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>
                    </div>



                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className=" font-semibold mb-2">Province/State</p>
                            <input type="text" value={provinceState} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>


                        <div className="flex-1 ml-2">
                            <p className=" font-semibold mb-2">City/Village</p>
                            <input type="text" value={cityVillage} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>
                    </div>



                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className=" font-semibold mb-2">Street Address</p>
                            <input type="text" value={streetAddress} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>


                        <div className="flex-1 ml-2">
                            <p className=" font-semibold mb-2">Postal Code</p>
                            <input type="text" value={postalCode} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>
                    </div>


                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className=" font-semibold mb-2">Location on Map</p>
                            <img src={locationImage} alt="Location Image" className="w-full h-40 object-cover rounded-lg text-gray-600 border border-blue-500" />
                        </div>
                    </div>


                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className=" font-semibold mb-2">Telephone</p>
                            <input type="text" value={telephone} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>


                        <div className="flex-1 ml-2">
                            <p className=" font-semibold mb-2">Phone Number</p>
                            <input type="text" value={phoneNumber} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>
                    </div>


                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className=" font-semibold mb-2">Email Address</p>
                            <input type="text" value={emailAddress} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>


                        <div className="flex-1 ml-2">
                            <p className=" font-semibold mb-2">Website</p>
                            <input type="text" value={website} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>
                    </div>

                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className=" font-semibold mb-2">Graduation Rate</p>
                            <input type="text" value={graduationRate} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>


                        <div className="flex-1 ml-2">
                            <p className=" font-semibold mb-2">Established Year</p>
                            <input type="text" value={establishedYear} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>
                    </div>


                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className=" font-semibold mb-2">Scholarship Name</p>
                            <input type="text" value={collegeName} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>
                    </div>


                    <div className="mb-4">
                        <p className=" font-semibold mb-2">Scholarship Details</p>
                        <textarea value={scholarshipDetails} className="w-full p-2 border rounded-lg resize-y text-gray-600 text-sm" rows="4" readOnly />
                    </div>


                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className=" font-semibold mb-2">Award Amount</p>
                            <input type="text" value={awardAmount} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>


                        <div className="flex-1 ml-2">
                            <p className=" font-semibold mb-2">No of award</p>
                            <input type="text" value={noOfAward} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>
                    </div>


                    <div className="flex mb-4">
                        <div className="flex-1 mr-2">
                            <p className=" font-semibold mb-2">Application start</p>
                            <input type="text" value={applicationStart} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>


                        <div className="flex-1 ml-2">
                            <p className=" font-semibold mb-2">Application deadline</p>
                            <input type="text" value={applicationEnd} className="w-full p-2 border rounded-lg text-gray-600 text-sm" readOnly />
                        </div>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-base font-semibold mb-2">Services</h2>

                        <div className="flex flex-wrap text-sm">
                            {services.map((course, index) => (
                                <div key={index} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mr-2 mb-4">
                                    {course}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-base font-semibold mb-2">Photo gallery</h2>
                        {/* Loop through each line of containers */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                            <div className="text-gray-800 rounded-lg mb-6 flex" style={{ width: '60%', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={photos[0]} className="max-w-full" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="text-gray-800 rounded-lg mb-6 flex" style={{ width: '40%', flexDirection: 'column' }}>
                                <img src={photos[1]} className="max-w-full mb-4" style={{ width: '100%' }} />
                                <img src={photos[2]} className="max-w-full mt-2" style={{ width: '100%' }} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                        <div className="text-gray-800 rounded-lg mb-6 flex" style={{ width: '40%', flexDirection: 'column', alignItems: 'center'}}>
                                <img src={photos[3]} className="max-w-full mb-4" style={{ width: '100%' }} />
                                <img src={photos[4]} className="max-w-full mt-2" style={{ width: '100%' }} />
                            </div>
                            <div className="text-gray-800 rounded-lg mb-6 flex" style={{ width: '60%', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={photos[5]} className="max-w-full" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>

                    <div className="flex mb-4">
                        <div className="flex-1 mr-2 text-sm">
                            <p className="font-semibold mb-2 text-base">Social media</p>
                            <div className="flex mb-4">
                                <input type="text" value={socialMedia} className="w-1/2 p-2 border rounded-lg text-gray-600 mr-4" readOnly />
                                <input type="text" value={socialMedia} className="w-1/2 p-2 border rounded-lg text-gray-600" readOnly />
                            </div>
                            <div className="flex">
                                <input type="text" value={socialMedia} className="w-1/2 p-2 border rounded-lg text-gray-600 mr-4" readOnly />
                                <input type="text" value={socialMedia} className="w-1/2 p-2 border rounded-lg text-gray-600" readOnly />
                            </div>
                        </div>
                    </div>



                    <div className="flex mt-16 mb-10">
                        <button onClick={() => { window.location.href = "../Applications/Common"; }} className="bg-white text-gray-600 px-4 py-2 border border-gray-500 hover:bg-red-700 rounded-md ml-auto mr-2">
                            Close
                        </button>

                        <button onClick={() => { window.location.href = "./Programs"; }} className="bg-orange-600 text-white px-4 py-2 border border-orange-700  hover:bg-orange-400 hover:border-orange-400 rounded-md mr-2">
                            Next
                        </button>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default CollegeProfile;
