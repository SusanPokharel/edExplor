// pages/home.jsx
import React from 'react';
import Sidenavbar from './Navbars/Sidenavbar';
import HeadNavbar from './Navbars/headnavbar';

const HomePage = () => {
    return (
        <div className="flex min-h-screen mt-16">
            <Sidenavbar />
            <main className="bg-white text-black flex-1 p-2">
                <HeadNavbar />
                <header>
                    <div className="bg-cyan-700 p-4 rounded-lg">
                        <h1 className="text-2xl text-white">Dashboard</h1>
                    </div>
                </header>
                <section className="flex">
                    <div className="flex-1 bg-gray-100 p-4 m-3 rounded-lg border border-gray-200">
                        Total Colleges
                    </div>
                    <div className="flex-1 bg-gray-100 p-4 m-3 rounded-lg border border-gray-200">
                        Total Students
                    </div>
                    <div className="flex-1 bg-gray-100  p-4 m-3 rounded-lg border border-gray-200">
                        Applications
                    </div>
                    <div className="flex-1 bg-gray-100  p-4 m-3 rounded-lg border border-gray-200">
                        This month
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
