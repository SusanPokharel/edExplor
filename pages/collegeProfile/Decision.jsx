import React, { useState } from 'react';

const Decision = () => {
    const [showRejectionReasons, setShowRejectionReasons] = useState(false);

    const toggle = () => {
        setShowRejectionReasons(!showRejectionReasons);
    };

    return (
        <div className=" flex flex-col min-h-screen bg-gray-100 mt-12 text-black">

            <div className="bg-blue-500 p-4 rounded-lg mb-4 mr-2">
                <h1 className="text-2xl text-white">Applications &gt; College Profile &gt; Programs &gt; Decision</h1>
            </div>

            <div className="flex relative p-4 rounded-lg z-10">
                <img src="/image1.png" alt="Banner" className="w-full rounded-lg max-h-64 object-cover" />

                <img src="/isling.png" alt="collegeLogo" className="absolute inset-y-48 left-20 w-36 h-36 object-cover z-1 rounded-lg" />
            </div>

            <div className='flex flex-col justify-between'>
                <div>
                    <h1 className="text-4xl text-black font-bold mb-2 text-center">Islington College</h1>
                    <h1 className="text-xl text-gray-600 font-semibold text-center">Kamalpokhari, Kathmandu</h1>
                </div>
            </div>

            <div className="flex">
                <button className="bg-orange-500 text-white px-4 py-2 border border-orange-600 rounded-md ml-auto mr-2">
                    Message
                </button>

                <button className="bg-white text-orange-600 px-4 py-2 border border-orange-600 rounded-md mr-2">
                    Mail
                </button>
            </div>

            <div className='flex justify-between pl-2'>
                <div>
                    <h1 className="text-xl text-black font-bold mb-2">Take Decision : </h1>
                    <button className="bg-white text-gray-700 px-4 py-2 border border-gray-400 rounded-md ml-auto mr-2 hover:bg-green-400">
                        Accept
                    </button>
                    <button className="bg-white text-gray-700 px-4 py-2 border border-gray-400 rounded-md mr-2 hover:bg-gray-400">
                        Hold
                    </button>
                    <button className="bg-white text-gray-700 px-4 py-2 border border-gray-400 rounded-md mr-2 hover:bg-red-400" onClick={toggle}>
                        Reject
                    </button>
                </div>
            </div>

            <div className="mb-6 pl-2">
                <ul className={`text-lg ${showRejectionReasons ? 'block' : 'hidden'}`}>
                    <h1 className="text-xl text-black font-bold mt-4 mb-2">Rejection Reasons:</h1>
                    <li className='pl-4'>
                        <input type="checkbox" id="reason1" name="reason1" value="Reason 1" />
                        <label htmlFor="reason1" className='pl-4'>Insufficient Academic Standards</label>
                    </li>
                    <li className='pl-4'>
                        <input type="checkbox" id="reason2" name="reason2" value="Reason 2" />
                        <label htmlFor="reason2" className='pl-4'>Not Meeting Standard Requirements</label>
                    </li>
                    <li className='pl-4'>
                        <input type="checkbox" id="reason3" name="reason3" value="Reason 3" />
                        <label htmlFor="reason3" className='pl-4'>Failure to Meet Application Criteria</label>
                    </li>
                    <li className='pl-4'>
                        <input type="checkbox" id="reason4" name="reason4" value="Reason 4" />
                        <label htmlFor="reason4" className='pl-4'>Incomplete Documentation</label>
                    </li>
                    <li className='pl-4'>
                        <input type="checkbox" id="reason5" name="reason5" value="Reason 5" />
                        <label htmlFor="reason5" className='pl-4'>Ethical or Compliance Issue</label>
                    </li>
                    <li className='pl-4'>
                        <input type="checkbox" id="reason6" name="reason6" value="Reason 6" />
                        <label htmlFor="reason6" className='pl-4'>Failure to Meet Prerequisite Courses</label>
                    </li>
                    <li className='pl-4'>
                        <input type="checkbox" id="reason7" name="reason7" value="Reason 7" />
                        <label htmlFor="reason7" className='pl-4'>Poor reputation or track record</label>
                    </li>
                </ul>
            </div>

            <div className="mb-4 flex pl-2 mt-8">
                <div className="w-2/3">
                    <h1 className="text-xl text-black font-bold mb-2">Message:</h1>
                    <textarea
                        placeholder="Write your message here"
                        className=" w-4/5 p-2 border rounded-lg resize-y text-gray-600"
                        rows="4"
                    />
                </div>

                <div className="w-1/3">
                    <h1 className="text-xl text-black font-bold mb-2">Attach file:</h1>
                    <label htmlFor="imageUpload" className="cursor-pointer">
                        <img src="" alt={`Drag files here`} className=" border-4 border-dotted border-blue-200 mr-3 p-24"
                        />
                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleImageUpload(e)}
                        />
                    </label>
                </div>
            </div>

            <div className="flex mt-16 mb-10">
                <button className="bg-white text-orange-600 px-4 py-2 border border-orange-600 rounded-md ml-auto mr-2">
                    Previous
                </button>

                <button className="bg-orange-500 text-white px-4 py-2 border border-orange-600 rounded-md mr-2">
                    Take decision
                </button>
            </div>


        </div>
    );
};

export default Decision;
