// pages/home.jsx
import React from 'react';
import Sidenavbar from '../Navbars/Sidenavbar';
import HeadNavbar from '../Navbars/headnavbar';

const Approval = () => {
    return (
        <div className="flex min-h-screen mt-16">
            <Sidenavbar />
            <main className="bg-white text-black flex-1 p-2">
                <HeadNavbar />
                <header>
                    <div className="bg-cyan-700p-4 rounded-lg">
                        <h1 className="text-2xl text-white">Approval request</h1>
                    </div>
                </header>
            </main>
        </div>
    );
};

export default Approval;
