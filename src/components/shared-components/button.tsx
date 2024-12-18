// components/Button.tsx

import React from "react";

interface ButtonProps {
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    children: React.ReactNode;
}

const DevDaphButton: React.FC<ButtonProps> = ({ onClick, variant = 'primary', children }) => {
    const baseStyles = 'py-2 px-4 rounded-lg text-white font-semibold';
    const variantStyles = {
        primary: 'bg-blue-500 hover:bg-blue-600',
        secondary: 'bg-gray-500 hover:bg-gray-600',
        danger: 'bg-red-500 hover:bg-red-600',
    };

    return (
        <button onClick={onClick} className={`${baseStyles} ${variantStyles[variant]}`}>
            {children}
        </button>
    );
};

export default DevDaphButton;
