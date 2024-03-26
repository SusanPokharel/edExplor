import React from 'react';

const Programs = () => {
    const programs = [
        {
            level: "Bachelor in Computing",
            description: "Explore the world of computer science with a comprehensive curriculum and hands-on projects.",
            imageUrl: "/image1.jpg",
            applicationStarts: "Application Starts: 2024-05-01",
            deadline: "Deadline: 2024-08-31",
        },
        {
            level: "Bachelor in Computing",
            description: "Explore the world of computer science with a comprehensive curriculum and hands-on projects.",
            imageUrl: "/image1.jpg",
            applicationStarts: "Application Starts: 2024-05-01",
            deadline: "Deadline: 2024-08-31",
        },
        {
            level: "Bachelor in Computing",
            description: "Explore the world of computer science with a comprehensive curriculum and hands-on projects.",
            imageUrl: "/image1.jpg",
            applicationStarts: "Application Starts: 2024-05-01",
            deadline: "Deadline: 2024-08-31",
        },
    ];

    return (
        <div className="flex flex-col h-full bg-white mt-16 ">
            <div className="bg-cyan-700 p-4 rounded-lg mb-4">
                <h1 className="text-xl text-white">Applications &gt; College Profile &gt; Programs</h1>
            </div>

            <div className='mt-4 text-black text-3xl font-semibold text-center'><p> Programs </p></div>
            <div className='mt-4 text-black text-xl font-bold ml-4'><p> IT degree </p></div>
            {/* Programs Container */}
            <div className="container mx-auto flex flex-wrap">
                {programs.map((program, index) => (
                    <div key={index} className="flex md:w-1/2 xl:w-1/3 p-4">
                        <div className="bg-white p-4 rounded-lg h-full border border-gray-300">


                            <img src={program.imageUrl} alt={program.level} className="w-full max-h-64 object-contain" />
                            <p className="text-2xl font-bold mb-2 text-gray-600">{program.level}</p>
                            <p className="text-gray-400">{program.description}</p>
                            <p className="text-gray-600 mt-4  font-medium">{program.applicationStarts}</p>
                            <p className="text-gray-600 font-medium">{program.deadline}</p>

                            <div className="text-center">
                                <button onClick={() => { window.location.href = "./programDetails"; }} className="bg-white text-orange-600 px-4 py-2 border mt-4 mx-auto border-orange-600 hover:bg-orange-600 hover:text-white rounded-md">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className='mt-10 text-black text-xl font-bold ml-4'><p> Business degree </p></div>
            {/* Programs Container */}
            <div className="container mx-auto flex flex-wrap">
                {programs.map((program, index) => (
                    <div key={index} className="flex md:w-1/2 xl:w-1/3 p-4">
                        <div className="bg-white p-4 rounded-lg h-full border border-gray-300">


                        <img src={program.imageUrl} alt={program.level} className="w-full max-h-64 object-contain" />

        
                            <p className="text-2xl font-bold mb-2 text-gray-600">{program.level}</p>
                            <p className="text-gray-400">{program.description}</p>
                            <p className="text-gray-600 mt-4 font-medium">{program.applicationStarts}</p>
                            <p className="text-gray-600 font-medium">{program.deadline}</p>

                            <div className="text-center">
                                <button onClick={() => { window.location.href = "./programDetails"; }} className="bg-white text-orange-600 px-4 py-2 border mt-4 mx-auto border-orange-600 hover:bg-orange-600 hover:text-white rounded-md">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex mt-16 mb-10">
                    <button onClick={() => { window.location.href = "./Profile"; }} className="bg-white text-orange-600 px-4 py-2 border border-orange-600 hover:bg-green-600  hover:border-green-600 hover:text-white rounded-md ml-auto mr-2">
                        Previous
                    </button>

                    <button onClick={() => { window.location.href = "./Decision"; }} className="bg-orange-600 text-white px-4 py-2 border border-orange-700  hover:bg-orange-400 hover:border-orange-400 rounded-md mr-2">
                        Proceed to decision
                    </button>
                </div>

        </div>
    );
};

export default Programs;