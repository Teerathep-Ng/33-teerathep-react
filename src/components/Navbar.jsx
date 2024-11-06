import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-black text-white px-6 py-4 shadow-md">
            <p className="text-lg font-semibold">Generation Thailand</p>
            <nav>
                <ul className="flex gap-8">
                    <li>
                        <Link to='/' className="text-white hover:text-gray-300 transition-colors duration-200">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/Owner' className="text-white hover:text-gray-300 transition-colors duration-200">
                            Owner
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
