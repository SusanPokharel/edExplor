import React from 'react';

const ProgramDetails = () => {

    const courseName = "Computer Science and Engineering";
    const courseDetails = "Islington College is a leading institution known for its excellence in computer science and engineering education. Our program equips students with the knowledge and skills needed to thrive in the rapidly evolving technology industry.";
    const Degree = "Bachelor of Science";
    const Faculty = "Science";
    const courseCategory = "Computer Science";
    const noOfSemester = "8";
    const courseDuration = "4 years";
    const gpaRequirement = "3.5";
    const applicationFee = "$50";
    const feePerYear = "$10,000";
    const courseFormat = "Full-time";
    const applicationStart = "March 1, 2024";
    const applicationEnd = "June 30, 2024";
    const noOfSeats = "100";
    const firstSemester = `    - Introduction to Computer Science
    - Mathematics for Computer Science
    - Programming Fundamentals
    - Digital Logic `;

    const secondSemester = `    - Introduction to Computer Science
    - Mathematics for Computer Science
    - Programming Fundamentals
    - Digital Logic `;

    const thirdSemester = `    - Introduction to Computer Science
    - Mathematics for Computer Science
    - Programming Fundamentals
    - Digital Logic `;

    const fourthSemester = `    - Introduction to Computer Science
    - Mathematics for Computer Science
    - Programming Fundamentals
    - Digital Logic `;

    const fifthSemester = `    - Introduction to Computer Science
    - Mathematics for Computer Science
    - Programming Fundamentals
    - Digital Logic `;

    const sixthSemester = `    - Introduction to Computer Science
    - Mathematics for Computer Science
    - Programming Fundamentals
    - Digital Logic `;


    const careerOptions = `    - Software Developer
    - Data Scientist
    - Web Developer
    - Network Engineer
    - Systems Analyst
    - IT Consultant
    - Database Administrator
    - Mobile App Developer
    - Cybersecurity Analyst
    - UX/UI Designer `;

    const practicalSkill = "Upon completion of this course, students will gain hands-on practical skills in software development, database management, network design, and more. The curriculum is designed to provide real-world experience, ensuring graduates are well-prepared for the challenges of the industry. ";
    const careerAdvancement = "Upon completion of this course, students will gain hands-on practical skills in software development, database management, network design, and more. The curriculum is designed to provide real-world experience, ensuring graduates are well-prepared for the challenges of the industry. ";
    const higherSalaries = "Upon completion of this course, students will gain hands-on practical skills in software development, database management, network design, and more. The curriculum is designed to provide real-world experience, ensuring graduates are well-prepared for the challenges of the industry. ";
    const topCompanies = "Upon completion of this course, students will gain hands-on practical skills in software development, database management, network design, and more. The curriculum is designed to provide real-world experience, ensuring graduates are well-prepared for the challenges of the industry. ";


    return (
        <div className="flex flex-col min-h-screen bg-gray-100 mt-12 text-black">

            <div className="bg-blue-500 p-4 rounded-lg mb-4">
                <h1 className="text-2xl text-white">Applications &gt; College Profile &gt; Programs</h1>
            </div>

            <div className='mt-1 text-black text-3xl font-bold text-center'>
                <p>Program Details</p>
            </div>

            <div className='p-4'>
                <h2 className="text-xl font-semibold mb-2 text-black mt-2">Banner Image</h2>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <img
                        src="/image4.png" alt="Banner" className="mx-auto w-4/5 rounded-lg max-h-96"/>
                </div>


                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2 text-black">Course name</p>
                    <input type="text" value={courseName} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                </div>


                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2 text-black">Course details</p>
                    <textarea value={courseDetails} className="w-full p-2 border rounded-lg resize-y text-gray-600" rows="4" readOnly />
                </div>


                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Degree</p>
                        <input type="text" value={Degree} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>


                    <div className="flex-1 ml-2">
                        <p className="text-lg font-semibold mb-2">Faculty</p>
                        <input type="text" value={Faculty} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>
                </div>



                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Course category</p>
                        <input type="text" value={courseCategory} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>


                    <div className="flex-1 ml-2">
                        <p className="text-lg font-semibold mb-2">No of semester</p>
                        <input type="text" value={noOfSemester} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>
                </div>



                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Course duration</p>
                        <input type="text" value={courseDuration} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>


                    <div className="flex-1 ml-2">
                        <p className="text-lg font-semibold mb-2">GPA requirement</p>
                        <input type="text" value={gpaRequirement} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>
                </div>



                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Application fee</p>
                        <input type="text" value={applicationFee} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>


                    <div className="flex-1 ml-2">
                        <p className="text-lg font-semibold mb-2">Fee/year</p>
                        <input type="text" value={feePerYear} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>
                </div>




                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Course format</p>
                        <input type="text" value={courseFormat} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>


                    <div className="flex-1 ml-2">
                        <p className="text-lg font-semibold mb-2">Application start</p>
                        <input type="text" value={applicationStart} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>
                </div>



                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Application deadline</p>
                        <input type="text" value={applicationEnd} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>


                    <div className="flex-1 ml-2">
                        <p className="text-lg font-semibold mb-2">No of seats</p>
                        <input type="text" value={noOfSeats} className="w-full p-2 border rounded-lg text-gray-600" readOnly />
                    </div>
                </div>


                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2 text-black">First semester</p>
                    <textarea value={firstSemester} className="w-full p-2 border rounded-lg resize-y text-gray-600" rows="4" readOnly />
                </div>



                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2 text-black">Second semester</p>
                    <textarea value={secondSemester} className="w-full p-2 border rounded-lg resize-y text-gray-600" rows="4" readOnly />
                </div>



                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2 text-black">Third semester</p>
                    <textarea value={thirdSemester} className="w-full p-2 border rounded-lg resize-y text-gray-600" rows="4" readOnly />
                </div>


                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2 text-black">Fourth semester</p>
                    <textarea value={fourthSemester} className="w-full p-2 border rounded-lg resize-y text-gray-600" rows="4" readOnly />
                </div>


                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2 text-black">Fifth semester</p>
                    <textarea value={fifthSemester} className="w-full p-2 border rounded-lg resize-y text-gray-600" rows="4" readOnly />
                </div>


                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2 text-black">Sixth semester</p>
                    <textarea value={sixthSemester} className="w-full p-2 border rounded-lg resize-y text-gray-600" rows="4" readOnly />
                </div>


                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2 text-black">Career Options</p>
                    <textarea value={careerOptions} className="w-full p-2 border rounded-lg resize-y text-gray-600" rows="10" readOnly />
                </div>


                <div className="mb-4 flex">
                    <div className='w-3/4'>
                        <p className="text-lg font-semibold mb-2 text-black">Practical Skill Development</p>
                        <textarea value={practicalSkill} className="w-full p-2 border rounded-lg resize-y text-gray-600" rows="4" readOnly />
                    </div>
                    <img
                        src="/image1.png"
                        alt="Image"
                        className="w-1/4 max-h-52 object-cover rounded-lg ml-2"
                    />
                </div>

                <div className="mb-4 flex">
                    <div className='w-3/4'>
                        <p className="text-lg font-semibold mb-2 text-black">Career Advancement</p>
                        <textarea value={careerAdvancement} className="w-full p-2 border rounded-lg resize-y text-gray-600" rows="4" readOnly />
                    </div>
                    <img
                        src="/image2.png"
                        alt="Image"
                        className="w-1/4 max-h-52 object-cover rounded-lg ml-2"
                    />
                </div>


                <div className="mb-4 flex">
                    <div className='w-3/4'>
                        <p className="text-lg font-semibold mb-2 text-black">Higher Salaries</p>
                        <textarea value={higherSalaries} className="w-full p-2 border rounded-lg resize-y text-gray-600" rows="4" readOnly />
                    </div>
                    <img
                        src="/image3.png"
                        alt="Image"
                        className="w-1/4 max-h-52 object-cover rounded-lg ml-2"
                    />
                </div>


                <div className="mb-4 flex">
                    <div className='w-3/4'>
                        <p className="text-lg font-semibold mb-2 text-black">Be a part of top companies</p>
                        <textarea value={topCompanies} className="w-full p-2 border rounded-lg text-gray-600" rows="4" readOnly />
                    </div>
                    <img
                        src="/image4.png"
                        alt="Image"
                        className="w-1/4 max-h-52 object-cover rounded-lg ml-2"
                    />
                </div>

            </div>

        </div>
    );
};

export default ProgramDetails;
