import React from "react";

const UserSector = ({ users }) => {
    return (
        <>
            {/* create table */}
            <table className="w-full border-collapse border border-gray-300 shadow-lg mt-5">

                {/* create table header */}
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="px-4 py-2 border border-gray-300">Name</th>
                        <th className="px-4 py-2 border border-gray-300">Last Name</th>
                        <th className="px-4 py-2 border border-gray-300">Position</th>
                    </tr>
                </thead>

                {/* create table body */}
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="bg-white odd:bg-gray-100">
                            <td className="px-4 py-2 border border-gray-300 text-center">{user.name}</td>
                            <td className="px-4 py-2 border border-gray-300 text-center">{user.lastname}</td>
                            <td className="px-4 py-2 border border-gray-300 text-center">{user.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default UserSector;
