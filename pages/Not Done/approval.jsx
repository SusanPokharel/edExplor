// pages/home.jsx
import React from 'react';
import Sidenavbar from '../Common/Sidenavbar';
import HeadNavbar from '../Common/headnavbar';

const Approval = () => {
    return (
        <div className="flex h-screen">
            <Sidenavbar />
            <main className="bg-white text-black flex-1 p-4 pt-20">
                <HeadNavbar />
                <header>
                    <div className="bg-blue-500 p-4 rounded-lg">
                        <h1 className="text-2xl text-white">Approval request</h1>
                    </div>
                </header>
            </main>
        </div>
    );
};

export default Approval;
