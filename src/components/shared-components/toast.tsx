// components/DevDaphToast.tsx

import React from "react";

interface DevDaphToastProps {
    message: string;
    type: 'success' | 'error' | 'info';
}

const DevDaphToast: React.FC<DevDaphToastProps> = ({ message, type }) => {
    const bgColor = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
    };

    return (
        <div className={`p-4 rounded-lg text-white ${bgColor[type]}`}>
            {message}
        </div>
    );
};

export default DevDaphToast;
