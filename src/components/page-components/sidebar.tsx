import { FaCog, FaExclamation } from 'react-icons/fa';
import { LuListCollapse } from "react-icons/lu";
import { BiTask } from "react-icons/bi";
import {MdDashboard, MdLogout, MdOutlineHelp} from "react-icons/md";

export default function Sidebar() {

    return (
        <div className="w-[270px] text-white flex flex-col mt-20 rounded dark:bg-gray-800 bg-black">
            {/* User Profile */}
            <div className="relative pt-12 pb-4 flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-500 rounded-full flex items-center justify-center absolute top-0 -mt-16 border-4 border-gray-800">
                    <span className="text-3xl text-white font-semibold">JD</span> {/* Initials, replace with actual image */}
                </div>
                <p className="text-xl">John Doe</p>
                <p className="text-sm text-gray-400">johndoe@example.com</p>
            </div>

            {/* Navigation Links */}
            <div className="flex-1">
                <nav>
                    <ul className="space-y-2 mt-4">
                        <li>
                            <a
                                href="#"
                                className="flex items-center hover:text-xl space-x-3 p-3 m-4 hover:text-[#FF6767] hover:bg-white rounded"
                            >
                                <MdDashboard className="text-xl"/>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center space-x-3 hover:text-xl p-3 m-4 hover:text-[#FF6767] hover:bg-white rounded"
                            >
                                <FaExclamation className="text-xl"/>
                                <span>Vital Task</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center space-x-3 p-3 m-4 hover:text-xl hover:text-[#FF6767] hover:bg-white rounded"
                            >
                                <BiTask className="text-xl"/>
                                <span>My Task</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center space-x-3 p-3 hover:text-xl m-4 hover:text-[#FF6767] hover:bg-white rounded"
                            >
                                <LuListCollapse className="text-xl"/>
                                <span>Task Categories</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center space-x-3 p-3 hover:text-xl hover:text-[#FF6767] m-4 hover:bg-white rounded"
                            >
                                <FaCog className="text-xl"/>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center hover:text-xl space-x-3 p-3 hover:text-[#FF6767] hover:bg-white m-4 rounded"
                            >
                                <MdOutlineHelp className="text-xl"/>
                                <span>Help</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Logout Button */}
            <div className="p-4">
                <a
                    href="#"
                    className="flex items-center hover:text-xl space-x-3 p-3 bg-gray-700 hover:text-[#FF6767] hover:bg-white rounded text-center justify-center"
                >
                    <MdLogout className="text-xl"/>
                    <span>Logout</span>
                </a>
            </div>
        </div>
    );
}
