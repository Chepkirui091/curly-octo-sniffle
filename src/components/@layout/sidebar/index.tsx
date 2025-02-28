import React, {useState} from "react";
import {useRouter} from "next/router";
import {BiSidebar} from "react-icons/bi";
import {MdDashboard, MdLogout, MdOutlineHelp} from "react-icons/md";
import {FaCog, FaExclamation} from "react-icons/fa";
import {LuListCollapse} from "react-icons/lu";
import SidebarSection from "@/components/@layout/sidebar/sidebar-section"; // Assuming SidebarSection is a reusable component

// Define sections with their respective items
const sections = [
    {
        name: "Main",
        items: [
            {pageName: "Dashboard", route: "/", pageIcon: <MdDashboard/>, enabled: true},
            {pageName: "Vital Task", route: "/vital-task", pageIcon: <FaExclamation/>, enabled: true},
            {pageName: "My Task", route: "/my-task", pageIcon: <BiSidebar/>, enabled: true},
            {pageName: "Task Categories", route: "/task-categories", pageIcon: <LuListCollapse/>, enabled: true},
        ],
    },
    {
        name: "Settings",
        items: [
            {pageName: "Settings", route: "/settings", pageIcon: <FaCog/>, enabled: true},
            {pageName: "Help", route: "/help", pageIcon: <MdOutlineHelp/>, enabled: true},
        ],
    },
];

// Mock user data
const user = {
    name: "John Mich",
    email: "johndoe@example.com",
};

// Function to extract initials from user's name
const getUserInitials = (name: string) => {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
};

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const router = useRouter();
    const {pathname} = router;

    return (
        <div className="flex">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-8 left-5 z-50 text-gray-500"
            >
                <BiSidebar className="text-3xl"/>
            </button>

            {/* Sidebar */}
            {isOpen && (
                <div
                    className="w-[270px] text-white flex-col mt-20 rounded dark:bg-gray-800 bg-black transition-transform duration-300 ease-in-out hidden sm:flex"
                    >

                {/*</div>*/}
            {/* User Profile */}
                    <div className="relative pt-12 pb-4 flex flex-col items-center">
                        <div
                            className="w-24 h-24 bg-gray-500 rounded-full flex items-center justify-center absolute top-0 -mt-16 border-4 border-gray-800">
                            <span className="text-3xl text-white font-semibold">{getUserInitials(user.name)}</span>
                        </div>
                        <p className="text-xl">{user.name}</p>
                        <p className="text-sm text-gray-400">{user.email}</p>
                    </div>

                    {/* Navigation Sections */}
                    <div className="flex-1">
                        {sections.map((section) => (
                            <SidebarSection
                                key={section.name}
                                name={section.name}
                                items={section.items}
                                pathname={pathname}
                            />
                        ))}
                    </div>

                    {/* Logout Button */}
                    <div className="p-4">
                        <button
                            // onClick={logout}
                            className="flex items-center space-x-3 w-full p-3 bg-gray-700 hover:text-[#FF6767] hover:bg-white rounded text-center justify-center transition-transform transform hover:scale-105"
                        >
                            <MdLogout className="text-xl"/>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
