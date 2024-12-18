"use client"


import React from "react";

interface DevDaphAccordionProps {
    title: string;
    content: string;
}

const DevDaphAccordion: React.FC<DevDaphAccordionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border-b">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer p-2 bg-gray-100 hover:bg-gray-200"
            >
                <h4>{title}</h4>
            </div>
            {isOpen && <div className="p-2 text-gray-600">{content}</div>}
        </div>
    );
};

export default DevDaphAccordion;
