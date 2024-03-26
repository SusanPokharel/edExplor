import React, { useState } from 'react';

const ProgramDetails = () => {
    const [editable, setEditable] = useState(false); // State to manage edit mode

    const [courseName, setCourseName] = useState("Computer Science and Engineering");
    const [courseDetails, setCourseDetails] = useState("Islington College is a leading institution known for its excellence in computer science and engineering education. Our program equips students with the knowledge and skills needed to thrive in the rapidly evolving technology industry.");
    const [Degree, setDegree] = useState("Bachelor of Science");
    const [Faculty, setFaculty] = useState("Science");
    const [courseCategory, setCourseCategory] = useState("Computer Science");
    const [noOfSemester, setNoOfSemester] = useState("8");
    const [courseDuration, setCourseDuration] = useState("4 years");
    const [gpaRequirement, setGpaRequirement] = useState("3.5");
    const [applicationFee, setApplicationFee] = useState("$50");
    const [feePerYear, setFeePerYear] = useState("$10,000");
    const [courseFormat, setCourseFormat] = useState("Full-time");
    const [applicationStart, setApplicationStart] = useState("March 1, 2024");
    const [applicationEnd, setApplicationEnd] = useState("June 30, 2024");
    const [noOfSeats, setNoOfSeats] = useState("100");
    const [firstSemester, setFirstSemester] = useState(`    - Introduction to Computer Science
    - Mathematics for Computer Science
    - Programming Fundamentals
    - Digital Logic `);

    const [careerOptions, setCareerOptions] = useState(`    - Software Developer
    - Data Scientist
    - Web Developer
    - Network Engineer
    - Systems Analyst
    - IT Consultant
    - Database Administrator
    - Mobile App Developer
    - Cybersecurity Analyst
    - UX/UI Designer `);

    const [practicalSkill, setPracticalSkill] = useState("Upon completion of this course, students will gain hands-on practical skills in software development, database management, network design, and more. The curriculum is designed to provide real-world experience, ensuring graduates are well-prepared for the challenges of the industry.");

    const [careerAdvancement, setCareerAdvancement] = useState("Upon completion of this course, students will gain hands-on practical skills in software development, database management, network design, and more. The curriculum is designed to provide real-world experience, ensuring graduates are well-prepared for the challenges of the industry.");

    const [higherSalaries, setHigherSalaries] = useState("Upon completion of this course, students will gain hands-on practical skills in software development, database management, network design, and more. The curriculum is designed to provide real-world experience, ensuring graduates are well-prepared for the challenges of the industry.");

    const [topCompanies, setTopCompanies] = useState("Upon completion of this course, students will gain hands-on practical skills in software development, database management, network design, and more. The curriculum is designed to provide real-world experience, ensuring graduates are well-prepared for the challenges of the industry.");

    const toggleEditMode = () => {
        setEditable(!editable);
    };

    const renderInputField = (value, onChangeHandler) => {
        if (editable) {
            return <input type="text" value={value} onChange={onChangeHandler} className="w-full p-2 border rounded-lg text-gray-600" />;
        } else {
            return <input type="text" value={value} className="w-full p-2 border rounded-lg text-gray-600" readOnly />;
        }
    };

    const renderTextAreaField = (value, onChangeHandler) => {
        if (editable) {
            return <textarea value={value} onChange={onChangeHandler} className="w-full p-2 border rounded-lg resize-y text-gray-600" rows="4" />;
        } else {
            return <textarea value={value} className="w-full p-2 border rounded-lg resize-y text-gray-600" rows="4" readOnly />;
        }
    };

    return (
        <div className="flex flex-col h-full bg-gray-100 mt-16 text-black p-2">
            <div className="bg-cyan-700 p-4 rounded-lg mb-4">
                <h1 className="text-2xl text-white">Applications &gt; College Profile &gt; Programs</h1>
            </div>

            <div className='mt-1 text-black text-3xl font-bold text-center'>
                <p>Program Details</p>
            </div>

            <div className='p-4'>
                {/* Course name */}
                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2">Course name</p>
                    {renderInputField(courseName, (e) => setCourseName(e.target.value))}
                </div>

                {/* Course details */}
                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2">Course details</p>
                    {renderTextAreaField(courseDetails, (e) => setCourseDetails(e.target.value))}
                </div>

                {/* Degree and Faculty */}
                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Degree</p>
                        {renderInputField(Degree, (e) => setDegree(e.target.value))}
                    </div>
                    <div className="flex-1 ml-2">
                        <p className="text-lg font-semibold mb-2">Faculty</p>
                        {renderInputField(Faculty, (e) => setFaculty(e.target.value))}
                    </div>
                </div>

                {/* Course category and No of semester */}
                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Course category</p>
                        {renderInputField(courseCategory, (e) => setCourseCategory(e.target.value))}
                    </div>
                    <div className="flex-1 ml-2">
                        <p className="text-lg font-semibold mb-2">No of semester</p>
                        {renderInputField(noOfSemester, (e) => setNoOfSemester(e.target.value))}
                    </div>
                </div>

                {/* Course duration and GPA requirement */}
                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Course duration</p>
                        {renderInputField(courseDuration, (e) => setCourseDuration(e.target.value))}
                    </div>
                    <div className="flex-1 ml-2">
                        <p className="text-lg font-semibold mb-2">GPA requirement</p>
                        {renderInputField(gpaRequirement, (e) => setGpaRequirement(e.target.value))}
                    </div>
                </div>

                {/* Application fee and Fee per year */}
                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Application fee</p>
                        {renderInputField(applicationFee, (e) => setApplicationFee(e.target.value))}
                    </div>
                    <div className="flex-1 ml-2">
                        <p className="text-lg font-semibold mb-2">Fee/year</p>
                        {renderInputField(feePerYear, (e) => setFeePerYear(e.target.value))}
                    </div>
                </div>

                {/* Course format and Application start */}
                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Course format</p>
                        {renderInputField(courseFormat, (e) => setCourseFormat(e.target.value))}
                    </div>
                    <div className="flex-1 ml-2">
                        <p className="text-lg font-semibold mb-2">Application start</p>
                        {renderInputField(applicationStart, (e) => setApplicationStart(e.target.value))}
                    </div>
                </div>

                {/* Application deadline and No of seats */}
                <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                        <p className="text-lg font-semibold mb-2">Application deadline</p>
                        {renderInputField(applicationEnd, (e) => setApplicationEnd(e.target.value))}
                    </div>
                    <div className="flex-1 ml-2">
                        <p className="text-lg font-semibold mb-2">No of seats</p>
                        {renderInputField(noOfSeats, (e) => setNoOfSeats(e.target.value))}
                    </div>
                </div>

                {/* Semesters */}
                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2">First semester</p>
                    {renderTextAreaField(firstSemester, (e) => setFirstSemester(e.target.value))}
                </div>

                {/* Career Options */}
                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2">Career Options</p>
                    {renderTextAreaField(careerOptions, (e) => setCareerOptions(e.target.value))}
                </div>

                {/* Practical Skill Development */}
                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2">Practical Skill Development</p>
                    {renderTextAreaField(practicalSkill, (e) => setPracticalSkill(e.target.value))}
                </div>

                {/* Career Advancement */}
                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2">Career Advancement</p>
                    {renderTextAreaField(careerAdvancement, (e) => setCareerAdvancement(e.target.value))}
                </div>

                {/* Higher Salaries */}
                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2">Higher Salaries</p>
                    {renderTextAreaField(higherSalaries, (e) => setHigherSalaries(e.target.value))}
                </div>

                {/* Be a part of top companies */}
                <div className="mb-4">
                    <p className="text-lg font-semibold mb-2">Be a part of top companies</p>
                    {renderTextAreaField(topCompanies, (e) => setTopCompanies(e.target.value))}
                </div>

                {/* Buttons */}
                <div className="flex mt-16 mb-1">
                <button onClick={() => { window.location.href = "../Applications/Common"; }} className="ml-auto bg-gray-200 text-black border border-gray-600 px-4 py-2 hover:bg-blue-300 hover:border-blue-300 rounded-md">Cancel</button>
                    <button onClick={toggleEditMode} className="bg-white text-orange-600 px-2 py-2 border border-orange-600 hover:bg-green-600 hover:border-green-600 hover:text-white rounded-md ml-2 mr-2">
                        {editable ? "Save" : "Edit"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetails;

