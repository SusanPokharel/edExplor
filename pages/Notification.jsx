import React, { useEffect } from 'react';

const Notification = () => {
  const markAsRead = (notification) => {
    notification.classList.remove('hover:bg-blue-100');
    const dot = notification.querySelector('.dot');
    if (dot) {
      dot.remove();
    }
  };

  const calculateRelativeTime = () => {
    const relativeTimeElements = document.querySelectorAll('.relative-time');

    relativeTimeElements.forEach((element) => {
      const timeString = element.dataset.time;
      const time = new Date(timeString);
      element.textContent = getRelativeTime(time);
    });
  };

  const getRelativeTime = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 1) {
      return `1 second ago`;
    } else if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
  };

  const sortTimes = () => {
    const container = document.getElementById('timeContainer');
    const times = Array.from(container.children);

    times.sort((a, b) => {
      const timeA = new Date(a.querySelector('.relative-time').dataset.time);
      const timeB = new Date(b.querySelector('.relative-time').dataset.time);
      return timeB - timeA;
    });

    container.innerHTML = '';
    times.forEach((time) => {
      container.appendChild(time);
    });
  };

  useEffect(() => {
    sortTimes();

    // Time Calculation ---- calculates the relative time in accordance with the present time
    calculateRelativeTime();

    // Updates the relative time every second by comparing it with the present time
    const intervalId = setInterval(() => {
      calculateRelativeTime();
      sortTimes(); // Ensure sorting is updated after relative times change
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
      <div className="font-sans bg-white h-screen mt-16 p-2">
        <div className="mx-4" id="timeContainer">
          <div
            id="notification1"
            className="bg-white border mb-4 p-4 flex flex-col cursor-pointer transition transform hover:bg-blue-100"
            onClick={() => markAsRead(document.getElementById('notification1'))}
          >
            <div className="flex items-center space-x-4">
              <img src="isling.png" alt="Logo" className="w-9 h-10" />
              <div className="flex-1">
                <p className="text-sm text-black">Islington College has requested for approval.</p>
                <span className="text-gray-500 text-xs mt-2 relative-time" data-time="2024-02-29T18:20:00"></span>
              </div>
              <div className="w-2 h-2 bg-blue-500 rounded-full dot"></div>
            </div>
          </div>


          <div
            id="notification2"
            className="bg-white border mb-4 p-4 flex flex-col cursor-pointer transition transform hover:bg-blue-100"
            onClick={() => markAsRead(document.getElementById('notification2'))}
          >
            <div className="flex items-center space-x-4">
              <img src="isling.png" alt="Logo" className="w-9 h-10" />
              <div className="flex-1">
                <p className="text-sm  text-black">A new application has been received.</p>
                <span className="text-gray-500 text-xs mt-2 relative-time" data-time="2024-02-29T11:00:00"></span>
              </div>
              <div className="w-2 h-2 bg-blue-500 rounded-full dot"></div>
            </div>
          </div>

          <div
            id="notification3"
            className="bg-white border mb-4 p-4 flex flex-col cursor-pointer transition transform hover:bg-blue-100"
            onClick={() => markAsRead(document.getElementById('notification3'))}
          >
            <div className="flex items-center space-x-4">
              <img src="isling.png" alt="Logo" className="w-9 h-10" />
              <div className="flex-1">
                <p className="text-sm  text-black">You have 34 pending notifications.</p>
                <span className="text-gray-500 text-xs mt-2 relative-time" data-time="2024-02-28T11:00:00"></span>
              </div>
              <div className="w-2 h-2 bg-blue-500 rounded-full dot"></div>
            </div>
          </div>

          <div
            id="notification4"
            className="bg-white border mb-4 p-4 flex flex-col cursor-pointer transition transform hover:bg-blue-100"
            onClick={() => markAsRead(document.getElementById('notification4'))}
          >
            <div className="flex items-center space-x-4">
              <img src="isling.png" alt="Logo" className="w-9 h-10" />
              <div className="flex-1">
                <p className="text-sm  text-black">The deadline to submit your application to St.Lawrence is approaching.</p>
                <span className="text-gray-500 text-xs mt-2 relative-time" data-time="2024-02-29T14:00:00"></span>
              </div>
              <div className="w-2 h-2 bg-blue-500 rounded-full dot"></div>
            </div>
          </div>

          <div
            id="notification5"
            className="bg-white border mb-4 p-4 flex flex-col cursor-pointer transition transform hover:bg-blue-100"
            onClick={() => markAsRead(document.getElementById('notification5'))}
          >
            <div className="flex items-center space-x-4">
              <img src="isling.png" alt="Logo" className="w-9 h-10" />
              <div className="flex-1">
                <p className="text-sm  text-black">A new application has been received.</p>
                <span className="text-gray-500 text-xs mt-2 relative-time" data-time="2024-02-29T01:00:00"></span>
              </div>
              <div className="w-2 h-2 bg-blue-500 rounded-full dot"></div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Notification;
