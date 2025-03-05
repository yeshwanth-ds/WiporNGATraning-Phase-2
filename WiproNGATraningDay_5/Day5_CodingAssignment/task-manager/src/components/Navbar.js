import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("auth");

    const handleLogout = () => {
        localStorage.removeItem("auth");
        navigate("/login");
    };

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md flex items-center justify-between">
            {/* Left Navigation Links */}
            <div className="space-x-6 text-lg">
                <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
                {isAuthenticated && <Link to="/dashboard" className="hover:text-gray-300 transition duration-300">Dashboard</Link>}
                {isAuthenticated && <Link to="/profile" className="hover:text-gray-300 transition duration-300">Profile</Link>}
            </div>

            {/* Right Side - Login/Logout Button */}
            {isAuthenticated ? (
                <button 
                    onClick={handleLogout} 
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                    Logout
                </button>
            ) : (
                <Link 
                    to="/login" 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                    Login
                </Link>
            )}
        </nav>
    );
};

export default Navbar;
