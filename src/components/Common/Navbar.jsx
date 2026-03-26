import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* গ্রিড বা ফ্লেক্স ব্যবহার করে ৩টি অংশ ভাগ করা হয়েছে */}
                <div className="flex justify-between items-center h-16">
                    
                    {/* ১. লোগো (বামে) */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={logo} alt="Hero.io" className="w-10" />
                            <span className="text-xl font-bold text-blue-600">HERO.IO</span>
                        </Link>
                    </div>

                    {/* ২. ডেস্কটপ মেনু (একদম সেন্টারে) */}
                    <div className="hidden md:flex flex-grow justify-center items-center gap-10 font-medium">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-600 hover:text-purple-500 transition"}>Home</NavLink>
                        <NavLink to="/apps" className={({ isActive }) => isActive ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-600 hover:text-purple-500 transition"}>Apps</NavLink>
                        <NavLink to="/installation" className={({ isActive }) => isActive ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-600 hover:text-purple-500 transition"}>Installation</NavLink>
                    </div>

                    {/* ৩. কন্ট্রিবিউট বাটন (ডানে) */}
                    <div className="hidden md:block">
                        <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="bg-purple-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition">
                            <i className="fa-brands fa-github"></i> Contribute
                        </a>
                    </div>

                    {/* মোবাইল বাটন */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* মোবাইল ড্রপডাউন (এটি আগের মতোই থাকবে) */}
            {isOpen && (
                <div className="md:hidden bg-white border-t px-4 pt-2 pb-6 space-y-2">
                    <NavLink to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:bg-purple-50 rounded-md">Home</NavLink>
                    <NavLink to="/apps" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:bg-purple-50 rounded-md">Apps</NavLink>
                    <NavLink to="/installation" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:bg-purple-50 rounded-md">Installation</NavLink>
                    <div className="pt-4">
                        <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="w-full bg-purple-600 text-white px-5 py-3 rounded-lg flex justify-center gap-2">Contribute</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;