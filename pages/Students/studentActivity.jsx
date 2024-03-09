import React, { useEffect } from 'react';

const StudentActivity = () => {
    useEffect(() => {
        sortTimes();
    }, []);

    const sortTimes = () => {
        const container = document.getElementById('timeContainer');
        const times = Array.from(container.children);

        times.sort((a, b) => {
            const timeA = new Date(a.querySelector('.time').dataset.timestamp);
            const timeB = new Date(b.querySelector('.time').dataset.timestamp);
            return timeB - timeA;
        });

        container.innerHTML = '';
        times.forEach((time) => {
            container.appendChild(time);
        });
    };

    const generateNotification = (id, text, timestamp) => (
        <div id={id} className="bg-white border mb-4 p-4 flex flex-col">
            <div className="flex items-center space-x-4">
                <img src="/susan.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
                <div className="flex-1">
                    <p className=" text-black font-semibold text-xl">{text}</p>
                    <span className="text-gray-500 text-sm mt-2 time" data-timestamp={timestamp}>{formatTimestamp(timestamp)}</span>
                </div>
            </div>
        </div>
    );

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        return (
            <span>
                {formattedDate} <span className="text-2xl">·</span> {formattedTime}
            </span>
        );
    };

    return (
        <div className="flex min-h-screen">
            <main className="bg-white text-black flex-1 pt-20">
                <div className="bg-blue-500 p-4 rounded-lg mb-4 mr-2">
                    <h1 className="text-2xl text-white">Students Dashboard &gt; Activities</h1>
                </div>

                <div className="font-sans">
                    <div className="mt-10 mx-4" id="timeContainer">
                        {generateNotification("notification1", "Islington College has requested for approval.", "2024-02-29T18:20:00")}
                        {generateNotification("notification2", "A new application has been received.", "2024-02-26T10:45:00")}
                        {generateNotification("notification3", "Your application status has been updated.", "2024-03-03T15:30:00")}
                        {generateNotification("notification4", "Reminder: Deadline for course registration.", "2024-03-07T09:00:00")}
                        {generateNotification("notification5", "Congratulations! You have been accepted.", "2024-03-06T14:15:00")}
                        {generateNotification("notification6", "Your application status has been updated.", "2024-03-02T15:30:00")}
                        {generateNotification("notification7", "Reminder: Deadline for course registration.", "2024-03-01T09:00:00")}
                        {generateNotification("notification8", "Your application status has been updated.", "2024-03-02T15:30:00")}
                        {generateNotification("notification9", "Reminder: Deadline for course registration.", "2024-03-08T09:00:00")}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentActivity;
