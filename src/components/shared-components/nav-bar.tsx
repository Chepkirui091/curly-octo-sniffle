// components/DevDaphNavbar.tsx

import React from "react";

const DevDaphNavbar: React.FC = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <ul className="flex space-x-4 text-white">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default DevDaphNavbar;
