import { useState } from 'react';
import { useRouter } from 'next/router';
import { FaCog, FaExclamation, FaBars, FaTimes } from 'react-icons/fa';
import { LuListCollapse } from "react-icons/lu";
import { BiSidebar, BiTask } from "react-icons/bi";
import { MdDashboard, MdLogout, MdOutlineHelp } from "react-icons/md";
import Link from "next/link";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true); // State to toggle sidebar visibility
    const router = useRouter();
    const { pathname } = router;

    return (
        <>
            <div className="flex">
                {/* Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="fixed top-8 left-5 z-50  text-black"
                >
                    {isOpen ? <BiSidebar className="text-3xl" /> : <BiSidebar className="text-3xl" />}
                </button>

                {/* Sidebar */}
                {isOpen && (
                    <div
                        className="w-[270px] text-white flex flex-col mt-20 rounded dark:bg-gray-800 bg-black transition-transform duration-300 ease-in-out"
                    >
                        {/* User Profile */}
                        <div className="relative pt-12 pb-4 flex flex-col items-center">
                            <div
                                className="w-24 h-24 bg-gray-500 rounded-full flex items-center justify-center absolute top-0 -mt-16 border-4 border-gray-800"
                            >
                                <span className="text-3xl text-white font-semibold">JD</span>
                            </div>
                            <p className="text-xl">John Doe</p>
                            <p className="text-sm text-gray-400">johndoe@example.com</p>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex-1">
                            <nav>
                                <ul className="space-y-2 mt-4">
                                    <li>
                                        <Link
                                            href="/"
                                            className={`flex items-center space-x-3 p-3 m-4 ${
                                                pathname === '/' ? 'text-[#FF6767] bg-white' : 'hover:text-[#FF6767] hover:bg-white'
                                            } rounded transition-transform transform hover:scale-105`}
                                        >
                                            <MdDashboard className="text-xl"/>
                                            <span>Dashboard</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/vital-task"
                                            className={`flex items-center space-x-3 p-3 m-4 ${
                                                pathname === '/vital-task' ? 'text-[#FF6767] bg-white' : 'hover:text-[#FF6767] hover:bg-white'
                                            } rounded transition-transform transform hover:scale-105`}
                                        >
                                            <FaExclamation className="text-xl"/>
                                            <span>Vital Task</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/my-task"
                                            className={`flex items-center space-x-3 p-3 m-4 ${
                                                pathname === '/my-task' ? 'text-[#FF6767] bg-white' : 'hover:text-[#FF6767] hover:bg-white'
                                            } rounded transition-transform transform hover:scale-105`}
                                        >
                                            <BiTask className="text-xl"/>
                                            <span>My Task</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/task-categories"
                                            className={`flex items-center space-x-3 p-3 m-4 ${
                                                pathname === '/task-categories' ? 'text-[#FF6767] bg-white' : 'hover:text-[#FF6767] hover:bg-white'
                                            } rounded transition-transform transform hover:scale-105`}
                                        >
                                            <LuListCollapse className="text-xl"/>
                                            <span>Task Categories</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/settings"
                                            className={`flex items-center space-x-3 p-3 m-4 ${
                                                pathname === '/settings' ? 'text-[#FF6767] bg-white' : 'hover:text-[#FF6767] hover:bg-white'
                                            } rounded transition-transform transform hover:scale-105`}
                                        >
                                            <FaCog className="text-xl"/>
                                            <span>Settings</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/help"
                                            className={`flex items-center space-x-3 p-3 m-4 ${
                                                pathname === '/help' ? 'text-[#FF6767] bg-white' : 'hover:text-[#FF6767] hover:bg-white'
                                            } rounded transition-transform transform hover:scale-105`}
                                        >
                                            <MdOutlineHelp className="text-xl"/>
                                            <span>Help</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        {/* Logout Button */}
                        <div className="p-4">
                            <Link
                                href="/logout"
                                className="flex items-center space-x-3 p-3 bg-gray-700 hover:text-[#FF6767] hover:bg-white rounded text-center justify-center transition-transform transform hover:scale-105"
                            >
                                <MdLogout className="text-xl"/>
                                <span>Logout</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
