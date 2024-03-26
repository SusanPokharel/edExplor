import React, { useState } from 'react';

const Settings = () => {
    const [language, setLanguage] = useState('');
    const [theme, setTheme] = useState('light');
    const [timezone, setTimezone] = useState('');
    const [notification, setNotification] = useState(false);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className={`flex min-h-screen mt-16 ${theme === 'dark' ? 'dark' : ''}`}>
            <main className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'} flex-1 p-2 `}>
                <header>
                    <div className={`bg-cyan-700 p-4 rounded-lg ${theme === 'dark' ? 'dark:bg-blue-300' : ''}`}>
                        <h1 className="text-2xl text-white">Settings </h1>
                    </div>
                </header>
                <section className="mt-4 p-2">
                    <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Language</h2>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className={`border border-gray-300 rounded-md py-2 px-3 w-full mt-1 ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}
                    >
                        <option value="nepali">Nepali</option>
                        <option value="chinese">Chinese</option>
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                    </select>
                </section>

                <section className="mt-4">
                    <h2 className="text-xl font-bold p-2">Theme</h2>
                    <div className="flex items-center pl-2 text-xl font-bold">
                        <input
                            type="radio"
                            id="lightTheme"
                            name="theme"
                            value="light"
                            checked={theme === 'light'}
                            onChange={toggleTheme}
                            className="sr-only"
                        />
                        <label htmlFor="lightTheme" className={`cursor-pointer mr-14 border p-4 ${theme === 'light' ? 'text-black bg-green-300' : 'text-white'}`}>
                            Light
                        </label>

                        <input
                            type="radio"
                            id="darkTheme"
                            name="theme"
                            value="dark"
                            checked={theme === 'dark'}
                            onChange={toggleTheme}
                            className="sr-only"
                        />
                        <label htmlFor="darkTheme" className={`cursor-pointer border p-4 ${theme === 'dark' ? 'text-white-600 bg-green-300 ' : 'text-gray-500 '}`}>
                            Dark
                        </label>
                    </div>
                </section>
                <section className="mt-4">
                    <h2 className={`text-xl font-bold p-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Time Zone</h2>
                    <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className={`border border-gray-300 rounded-md py-2 px-3 w-full mt-1 ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}
                    >
                        <option value="nepali">🇳🇵 Nepal (Nepal Standard Time, GMT+5:45)</option>
                        <option value="chinese">🇨🇳 Chinese (China Standard Time, GMT+8:00)</option>
                        <option value="english">🇺🇸 English (Eastern Standard Time, GMT-5:00)</option>
                        <option value="spanish">🇪🇸 Spanish (Central European Time, GMT+1:00)</option>
                        <option value="french">🇫🇷 French (Central European Time, GMT+1:00)</option>
                    </select>
                </section>
                <section className="mt-4">
                    <h2 className="text-xl font-bold p-2">Notification Preferences</h2>
                    <div>
                        <input type="checkbox" id="notifications" checked={notification} onChange={(e) => setNotification(e.target.checked)} className="ml-2 mr-2" />
                        <label htmlFor="notifications">Enable Notifications</label>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Settings;
