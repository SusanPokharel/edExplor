import React from 'react';

const StudentDetails = () => {
    const studentName = "Susan Pokharel";
    const dateOfBirth = "2004-04-24";
    const Gender = "Male";
    const Nationality = "Nepali";
    const Country = "Nepal";
    const temporaryAddress = "1234 Kathmandu, Nepal";
    const permanentAddress = "5678 Pokhara, Nepal";
    const emailAddress = "susan.pokharel@example.com";
    const mobileNumber = "+977 981-234-5678";
    const guardianName = "Janardan Pokharel";
    const guardainRelationship = "Father";
    const emergencyContact = "+977 984-567-1234";
    const previousSchoolCollege = "XYZ School";
    const passoutYear = "2022";
    const cgpaPercentage = "3.2";
    const outOf = "4.0";
    const Stdspreferences = [
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



    return (
        <div className="flex flex-col min-h-screen bg-gray-100 mt-12 mb-10 text-black">

            <div className="bg-blue-500 p-4 rounded-lg mb-4">
                <h1 className="text-2xl text-white">Student Details</h1>
            </div>

            <div className='p-4'>
                <div className='p-4'>
                    <div className='p-4 flex justify-between'>
                        {/* Left side -- logo portion*/}
                        <div className='w-1/3'>
                            <h2 className="text-xl font-semibold mb-2 text-black ml-8">Student Profile</h2>
                            <img src="/image1.png" alt="Banner" className="ml-10 min-h-40 min-w-40 rounded-full" />
                        </div>

                        {/* Right side -- text portion */}
                        <div className='mt-10  ml-20 flex flex-col justify-between w-2/3'>
                            <div className="flex-grow">
                                <div className="flex justify-between ">
                                    <div>
                                        <h2 className="text-xl font-semibold text-black mt-2 text-left mb-12">Joined on: 1st January, 2024</h2>
                                        <h2 className="text-xl font-semibold mb-12 text-black mt-2 text-left">Pending: 1 application</h2>
                                        <button className="bg-white text-orange-600 px-6 lg:px-20 py-2 mr-2 border border-orange-600 rounded-md font-bold overflow-hidden whitespace-nowrap">
                                            View activities
                                        </button>
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-semibold mb-12 text-black mt-2 text-left ml-2">Applied: 4 application </h2>
                                        <h2 className="text-xl font-semibold mb-12 text-black mt-2 text-left ml-2">Rejected: 1 application</h2>
                                        <button className="bg-orange-600 text-white px-6 lg:px-20 py-2 border border-orange-600 rounded-md font-bold">
                                            Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Student name</p>
                        <input type="text" value={studentName} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>


                    <div className="flex-1 ml-8">
                        <p className="text-lg font-semibold mb-2">Date of Birth</p>
                        <input type="text" value={dateOfBirth} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>
                </div>



                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Gender</p>
                        <input type="text" value={Gender} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>


                    <div className="flex-1 ml-8">
                        <p className="text-lg font-semibold mb-2">Nationality</p>
                        <input type="text" value={Nationality} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>
                </div>



                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Country</p>
                        <input type="text" value={Country} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>


                    <div className="flex-1 ml-8">
                        <p className="text-lg font-semibold mb-2">Temporary address</p>
                        <input type="text" value={temporaryAddress} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>
                </div>



                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Permanent address</p>
                        <input type="text" value={permanentAddress} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>

                    <div className="flex-1 ml-8">
                        <p className="text-lg font-semibold mb-2">Email address</p>
                        <input type="text" value={emailAddress} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>
                </div>


                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Mobile number</p>
                        <input type="text" value={mobileNumber} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>


                    <div className="flex-1 ml-8">
                        <p className="text-lg font-semibold mb-2">Guardian name</p>
                        <input type="text" value={guardianName} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>
                </div>



                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Guardain relationship</p>
                        <input type="text" value={guardainRelationship} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>


                    <div className="flex-1 ml-8">
                        <p className="text-lg font-semibold mb-2">Emergency contact</p>
                        <input type="text" value={emergencyContact} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>
                </div>


                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Previous school/college name</p>
                        <input type="text" value={previousSchoolCollege} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>


                    <div className="flex-1 ml-8">
                        <p className="text-lg font-semibold mb-2">Passout year</p>
                        <input type="text" value={passoutYear} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>
                </div>


                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">CGPA percentage</p>
                        <input type="text" value={cgpaPercentage} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>

                    <div className="flex-1 ml-8">
                        <p className="text-lg font-semibold mb-2">Out of</p>
                        <input type="text" value={outOf} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>
                </div>


                <div className="flex flex-col mb-4">
                    <p className="text-lg font-semibold mb-2">Favorite colleges:</p>

                    <div className="flex justify-between">
                        {/* Card 1 */}
                        <div className="flex-1 mr-16 bg-white rounded-lg overflow-hidden">
                            <img src="/building.png" alt="Image 1" className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-2">Islington College</h2>
                                <p className="text-gray-600">Kamal Pokhari, Kathmandu</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex-1 mr-16 bg-white rounded-lg overflow-hidden">
                            <img src="/building.png" alt="Image 2" className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-2">Herald College</h2>
                                <p className="text-gray-600">Kamal Pokhari, Kathmandu</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex-1 mr-16 bg-white rounded-lg overflow-hidden">
                            <img src="/building.png" alt="Image 3" className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-2">Oxford College</h2>
                                <p className="text-gray-600">Kamal Pokhari, Kathmandu</p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="flex-1 bg-white rounded-lg overflow-hidden">
                            <img src="/building.png" alt="Image 4" className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-2">Susan College of Engineering</h2>
                                <p className="text-gray-600">Kamal Pokhari, Kathmandu</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Student Preferences:</h2>

                    <div className="flex flex-wrap">
                        {Stdspreferences.map((course, index) => (
                            <div key={index} className="bg-blue-200 text-gray-800 px-4 py-2 rounded-full mr-2 mb-4">
                                {course}
                            </div>
                        ))}
                    </div>
                </div>
                

                <div className='flex justify-end mb-10 mt-10'>
                    <button className="bg-white text-orange-600 px-2 lg:px-16 py-2 mr-2 border border-orange-600 rounded-md font-bold overflow-hidden whitespace-nowrap">
                        Return to Dashboard
                    </button>

                    <button className="bg-orange-600 text-white px-2 lg:px-16 py-2 border border-orange-600 rounded-md font-bold items-end">
                        Edit Profile
                    </button>
                </div>


            </div>

        </div>
    );
};

export default StudentDetails;
