// pages/_app.js
import React from 'react';
import '../styles/globals.css';
import Notification from './index';
import Sidebar from '../pages/Common/Sidenavbar';
import HeadNavbar from '../pages/Common/headnavbar';

function MyApp({ Component, pageProps }) {
  const isNotificationPage = Component === Notification;

  return (
    <div className="flex flex-col">
      <HeadNavbar/>
      <div className="flex">
        {!isNotificationPage && <Sidebar />}
        <main className={`flex-1 p-4 ${isNotificationPage ? 'pl-0' : 'pl-16 md:pl-48'}`}>
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;
