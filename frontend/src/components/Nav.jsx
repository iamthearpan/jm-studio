import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="grid sm:grid-cols-12">
            <div
                className={`sm:col-span-3 xl:col-span-2 sm:pt-9 p-5 bg-slate-800 min-h-screen text-white ${
                    isSidebarOpen ? "block" : "hidden"
                } sm:block absolute sm:relative left-0 top-0 z-50`}
            >
                <div className="flex justify-end text-red-700 mb-4 sm:hidden" onClick={toggleSidebar}>
                    &#x2717;
                </div>
                <ul className="w-48 sm:w-auto">
                    <li>
                        <Link to="/dashboard" className="block p-3 hover:text-blue-400">
                        <i className="bi bi-speedometer2"></i> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="block p-3 hover:text-blue-400">
                        <i className="bi bi-people"></i> Customer
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="block p-3 hover:text-blue-400">
                        <i className="bi bi-cart"></i> Orders
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="block p-3 hover:text-blue-400">
                        <i className="bi bi-gear"></i> Settings
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sm:col-span-9 xl:col-span-10 p-5 bg-slate-900 min-h-screen text-white">
                <button className="text-xl sm:hidden" onClick={toggleSidebar}>
                    &#9776;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Nav;