import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="p-4 text-center">
            <h2>Welcome to Task Manager</h2>
            <Link to="/login" className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block">
                Go to Login
            </Link>
        </div>
    );
};

export default Home;
