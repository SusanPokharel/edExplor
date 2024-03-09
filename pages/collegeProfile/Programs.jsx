import React from 'react';

const Programs = () => {
    const programs = [
        {
            name: "Computer Science",
            level: "Bachelor in Computing",
            description: "Explore the world of computer science with a comprehensive curriculum and hands-on projects.",
            imageUrl: "/image1.png",
            applicationStarts: "Application Starts: 2024-05-01",
            deadline: "Deadline: 2024-08-31",
        },
        {
            name: "Computer Science",
            level: "Bachelor in Computing",
            description: "Explore the world of computer science with a comprehensive curriculum and hands-on projects.",
            imageUrl: "/image2.png",
            applicationStarts: "Application Starts: 2024-05-01",
            deadline: "Deadline: 2024-08-31",
        },
        {
            name: "Computer Science",
            level: "Bachelor in Computing",
            description: "Explore the world of computer science with a comprehensive curriculum and hands-on projects.",
            imageUrl: "/isling.png",
            applicationStarts: "Application Starts: 2024-05-01",
            deadline: "Deadline: 2024-08-31",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white mt-12 ">
            <div className="bg-blue-500 p-4 rounded-lg mb-4">
                <h1 className="text-2xl text-white">Applications &gt; College Profile &gt; Programs</h1>
            </div>

            <div className='mt-4 text-black text-3xl font-bold text-center'><p> Programs </p></div>
            <div className='mt-4 text-black text-3xl font-bold ml-4'><p> IT degree </p></div>
            {/* Programs Container */}
            <div className="container mx-auto flex flex-wrap">
                {programs.map((program, index) => (
                    <div key={index} className="flex md:w-1/2 xl:w-1/3 p-4">
                        <div className="bg-white p-4 rounded-lg h-full border border-gray-300">


                            <img src={program.imageUrl} alt={program.name} className="w-full max-h-64 object-contain" />

                            <h2 className="text-xl font-semibold mb-2">{program.name}</h2>
                            <p className="text-2xl font-bold mb-2 text-gray-600">{program.level}</p>
                            <p className="text-gray-400">{program.description}</p>
                            <p className="text-gray-600 mt-4 font-semibold ">{program.applicationStarts}</p>
                            <p className="text-gray-600 font-semibold ">{program.deadline}</p>

                            <div className="text-center">
                                <button className="bg-white text-orange-600 px-4 py-2 border mt-4 mx-auto border-orange-600 rounded-md">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className='mt-10 text-black text-3xl font-bold ml-4'><p> Business degree </p></div>
            {/* Programs Container */}
            <div className="container mx-auto flex flex-wrap">
                {programs.map((program, index) => (
                    <div key={index} className="flex md:w-1/2 xl:w-1/3 p-4">
                        <div className="bg-white p-4 rounded-lg h-full border border-gray-300">


                        <img src={program.imageUrl} alt={program.name} className="w-full max-h-64 object-contain" />

                            <h2 className="text-xl font-semibold mb-2">{program.name}</h2>
                            <p className="text-2xl font-bold mb-2 text-gray-600">{program.level}</p>
                            <p className="text-gray-400">{program.description}</p>
                            <p className="text-gray-600 mt-4 font-semibold ">{program.applicationStarts}</p>
                            <p className="text-gray-600 font-semibold ">{program.deadline}</p>

                            <div className="text-center">
                                <button className="bg-white text-orange-600 px-4 py-2 border mt-4 mx-auto border-orange-600 rounded-md">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Programs;