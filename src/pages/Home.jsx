import React, { useState } from "react";
import Navbar from "../components/Navbar";
import User from "../components/User";
import Admin from "../components/Admin";

function Home() {
    const [mockEmployees, setMockEmployees] = useState([
        { id: 0, name: "mock", lastname: "mocklastname", position: "Manager" },
        { id: 1, name: "employee 1", lastname: "em", position: "Engineer" },
        { id: 2, name: "employee 2", lastname: "lord", position: "Designer" },
    ]);

    const [selectSector, setSelectSector] = useState('');

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            {/* Header */}
            <div className="text-center p-9">
                <h1 className="text-3xl font-bold text-gray-700">Generation Thailand</h1>
                <h2 className="text-lg text-gray-500">React Assessment</h2>
            </div>

            {/* Buttons */}
            <div className="flex justify-center space-x-6 mb-8">
                <button 
                    className="py-2 px-10 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    onClick={() => setSelectSector('user')}>
                    User
                </button>
                <button 
                    className="py-2 px-10 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    onClick={() => setSelectSector('admin')}>
                    Admin
                </button>
            </div>

            {/* Conditional Rendering */}
            <div className="mt-10">
                {selectSector === 'user' && <User users={mockEmployees} />}
                {selectSector === 'admin' && <Admin users={mockEmployees} setUsers={setMockEmployees} />}
            </div>
        </div>
    );
}

export default Home;
