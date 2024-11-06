import React, { useState, useEffect } from "react";

const AdminSector = ({ users: initialUsers, setUsers }) => {
    const [users, setLocalUsers] = useState(initialUsers);
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        position: ''
    });
    const [editUserData, setEditUserData] = useState(null);

    useEffect(() => {
        setLocalUsers(initialUsers);
    }, [initialUsers]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSave = () => {
        const newUsers = [...users, formData];
        setLocalUsers(newUsers);
        setUsers(newUsers);
        setFormData({ name: '', lastName: '', position: '' });
    };

    const handleDelete = (id) => {
        const newUsers = users.filter((user) => user.id !== id);
        setLocalUsers(newUsers);
        setUsers(newUsers);
    };

    const handleEdit = (id) => {
        const user = users.find((user) => user.id === id);
        setEditUserData(user);
        setFormData({ 
            name: user.name, 
            lastName: user.lastName, 
            position: user.position 
        });
    };

    const handleUpdateUser = () => {
        if (!editUserData) return;
        
        const updatedUsers = users.map((user) =>
            user.id === editUserData.id ? { ...user, ...formData } : user
        );
        
        setUsers(updatedUsers);
        setEditUserData(null);
        setFormData({ name: '', lastName: '', position: '' });
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Create User Here</h2>

            {/* Input fields */}
            <div className="flex space-x-4 mb-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    name="position"
                    placeholder="Position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {editUserData ? (
                    <button
                        onClick={handleUpdateUser}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
                    >
                        Update
                    </button>
                ) : (
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
                    >
                        Save
                    </button>
                )}
            </div>

            {/* Table */}
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg mt-5">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="px-4 py-2 border border-gray-300">Name</th>
                        <th className="px-4 py-2 border border-gray-300">Last Name</th>
                        <th className="px-4 py-2 border border-gray-300">Position</th>
                        <th className="px-4 py-2 border border-gray-300">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="bg-white odd:bg-gray-100">
                            <td className="px-4 py-2 border border-gray-300 text-center">{user.name}</td>
                            <td className="px-4 py-2 border border-gray-300 text-center">{user.lastName}</td>
                            <td className="px-4 py-2 border border-gray-300 text-center">{user.position}</td>
                            <td className="px-4 py-2 border border-gray-300 text-center space-x-2">
                                <button
                                    onClick={() => handleEdit(user.id)}
                                    className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminSector;
