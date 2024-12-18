// components/DevDaphCard.tsx

import React from "react";

interface DevDaphCardProps {
    title: string;
    content: string;
    imageUrl: string;
}

const DevDaphCard: React.FC<DevDaphCardProps> = ({ title, content, imageUrl }) => {
    return (
        <div className="border rounded-lg p-4 shadow-lg">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 mt-2">{content}</p>
        </div>
    );
};

export default DevDaphCard;
