// components/DevDaphDropdown.tsx

import React from "react";

interface DevDaphDropdownProps {
    options: string[];
    selectedOption: string;
    onSelect: (option: string) => void;
}

const DevDaphDropdown: React.FC<DevDaphDropdownProps> = ({ options, selectedOption, onSelect }) => {
    return (
        <div className="relative">
            <button className="w-full p-2 border rounded-lg bg-white">
                {selectedOption}
            </button>
            <div className="absolute w-full mt-1 bg-white border rounded-lg">
                {options.map((option) => (
                    <button
                        key={option}
                        onClick={() => onSelect(option)}
                        className="w-full text-left p-2 hover:bg-gray-200"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DevDaphDropdown;
