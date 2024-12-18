import {FaSearch, FaCalendarAlt, FaBell} from 'react-icons/fa';
import {useState} from 'react';
import Logo from "@/components/page-components/logo";

const TopNav = () => {
    const [searchQuery, setSearchQuery] = useState('');

    // Get the current date and day
    const currentDate = new Date();
    const dayOfWeek = currentDate.toLocaleString('en-US', {weekday: 'long'});
    const date = currentDate.toLocaleDateString();

    return (
        <div className="dark:bg-gray-800 bg-[#F8F8F8] shadow-xl text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <Logo/>
            </div>

            <div className="relative w-1/3">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search your task here..."
                    className="w-full p-2 pl-10 pr-12 dark:placeholder:text-gray-400 rounded-lg bg-[#F5F8FF] dark:bg-[#2A2A2A] shadow-xl text-black dark:text-gray-400 focus:outline-none"
                />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#FF6767] p-3 rounded-lg">
                    <FaSearch className="text-white"/>
                </div>
            </div>


            <div className="flex items-center space-x-6 ">
                <div className="bg-[#FF6767] p-2 rounded-lg">
                    <FaCalendarAlt className="text-xl"/>
                </div>
                <div className="bg-[#FF6767] p-2 rounded-lg">
                    <FaBell className="text-xl"/>
                </div>


                <div className="text-sm">
                    <p className="text-black dark:text-gray-400 ">{dayOfWeek}</p>
                    <p className="text-[#3ABEFF]">{date}</p>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
