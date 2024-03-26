import React, { useState } from 'react';

const ChatApp = () => {
    const [active, setActive] = useState(null);
    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState({
        0: [
            { text: 'Hi there!', sender: 'Ramesh Shrestha', time: '10:00 AM' },
            { text: 'How are you?', sender: 'Ramesh Shrestha', time: '10:05 AM' },
        ],
        1: [
            { text: 'Hello!', sender: 'Sita Gurung', time: '11:00 AM' },
            { text: 'How are you?', sender: 'Sita Gurung', time: '10:05 AM' },
        ],
        2: [
            { text: 'Hey!', sender: 'Hari Thapa', time: '9:00 AM' },
            { text: 'How was your weekend?', sender: 'Hari Thapa', time: '9:05 AM' },
        ],
        3: [
            { text: 'Hi!', sender: 'Gita Adhikari', time: '9:30 AM' },
            { text: 'Are you coming to the party tonight?', sender: 'Gita Adhikari', time: '9:35 AM' },
        ],
        4: [
            { text: 'Hello!', sender: 'Sunil Bhattarai', time: '10:00 AM' },
            { text: 'Have you finished that project?', sender: 'Sunil Bhattarai', time: '10:05 AM' },
        ],
        5: [
            { text: 'Good morning!', sender: 'Manisha Rai', time: '8:45 AM' },
            { text: 'How was your trip?', sender: 'Manisha Rai', time: '8:50 AM' },
        ],
        6: [
            { text: 'Morning!', sender: 'Rajesh Dhakal', time: '11:00 AM' },
            { text: 'Did you watch the game last night?', sender: 'Rajesh Dhakal', time: '11:05 AM' },
        ],
        7: [
            { text: 'Hey there!', sender: 'Anju Lama', time: '9:15 AM' },
            { text: 'What\'s up?', sender: 'Anju Lama', time: '9:20 AM' },
        ],
        8: [
            { text: 'Hi!', sender: 'Dipesh Magar', time: '10:30 AM' },
            { text: 'How\'s it going?', sender: 'Dipesh Magar', time: '10:35 AM' },
        ],
        9: [
            { text: 'Hey!', sender: 'Pratima Aryal', time: '8:00 AM' },
            { text: 'Are you free this evening?', sender: 'Pratima Aryal', time: '8:05 AM' },
        ],
    });
    const [selectedPerson, setSelectedPerson] = useState(null);

    const toggleAccordion = (index) => {
        setActive((prevIndex) => (prevIndex === index ? null : index));
        setSelectedPerson((prevSelectedPerson) => (prevSelectedPerson === index ? null : index));
    };

    const sendMessage = () => {
        if (messageInput.trim() === '') return;

        const newMessage = {
            text: messageInput,
            sender: 'You',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages((prevMessages) => ({
            ...prevMessages,
            [selectedPerson]: [...(prevMessages[selectedPerson] || []), newMessage],
        }));
        setMessageInput('');
    };


    const nepaliNames = [
        'Ramesh Shrestha',
        'Sita Gurung',
        'Hari Thapa',
        'Gita Adhikari',
        'Sunil Bhattarai',
        'Manisha Rai',
        'Rajesh Dhakal',
        'Anju Lama',
        'Dipesh Magar',
        'Pratima Aryal',

    ];

    return (
        <div className="flex flex-col mt-16">
            <header className="bg-cyan-700 p-4 rounded-lg fixed w-full">
                <h1 className="text-2xl text-white">Message box</h1>
            </header>

            <div className="flex-1 flex bg-gray-100 text-gray-800">
                <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
                    <div className="font-bold text-lg p-4">All Messages</div>
                    {nepaliNames.map((name, index) => (
                        <div key={index}>
                            <div className='flex justify-between items-center cursor-pointer p-4 border-b border-gray-200' onClick={() => toggleAccordion(index)}>
                                <div className="flex items-center">
                                    <img src={`/image1.png`} alt="Person" className="w-6 h-6 mr-2 rounded-full" />
                                    <div className="font-semibold">{name}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex-1 bg-gray-100 p-8 relative">
                    {selectedPerson !== null && (

                        <div>
                            <div className="flex items-center mb-10 border-b-4 border-gray-800 py-2">
                                <img src={`/image1.png`} alt="Person" className="w-6 h-6 mr-2 rounded-full" />
                                <h2 className="text-xl font-semibold">{nepaliNames[selectedPerson]}</h2>
                            </div>

                            {messages[selectedPerson] && messages[selectedPerson].map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start mb-2 ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`${message.sender === 'You' ? 'bg-sky-200 text-black font-semibold ' : 'bg-cyan-600 text-white font-semibold'}  px-3 py-1 rounded-lg mr-2`}
                                    >
                                        {message.text}
                                    </div>
                                    <div className="text-xs text-gray-500"> {message.time}</div>
                                </div>
                            ))}
                            <div className="absolute message-input-container bottom-16 left-0 right-0 px-8 py-4 bg-white border-t border-gray-200 flex items-center">
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-md px-3 py-1 flex-1 mr-2"
                                    placeholder="Type your message..."
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                />
                                <button
                                    className="bg-cyan-700 text-white px-4 py-2 rounded-md"
                                    onClick={sendMessage}
                                >
                                    Send
                                </button>
                            </div>
                        </div>

                    )}



                </div>


            </div>
        </div>
    );
};

export default ChatApp;
