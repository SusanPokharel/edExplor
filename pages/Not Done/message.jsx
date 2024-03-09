import React from 'react';

const Message = () => {
    return (
        <div className="flex h-screen">
            <main className="bg-white text-black flex-1 p-4 pt-20">
                <header>
                    <div className="bg-blue-500 p-4 rounded-lg">
                        <h1 className="text-2xl text-white">Message box</h1>
                    </div>
                </header>
            </main>
        </div>
    );
};

export default Message;