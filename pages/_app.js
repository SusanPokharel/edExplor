// pages/_app.js
import React from 'react';
import '../styles/globals.css';
import Notification from './Notification';
import Sidebar from './Navbars/Sidenavbar';
import HeadNavbar from './Navbars/headnavbar';

function MyApp({ Component, pageProps }) {
  const isNotificationPage = Component === Notification;

  return (
    <div className="flex flex-col pb-5">
      <HeadNavbar/>
      <div className="flex">
        {!isNotificationPage && <Sidebar />}
        <main className={`flex-1 ${isNotificationPage ? 'pl-0' : 'pl-16 md:pl-48'}`}>
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;
