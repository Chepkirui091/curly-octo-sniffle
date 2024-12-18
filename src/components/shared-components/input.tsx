// components/DevDaphInput.tsx

import React from "react";

interface DevDaphInputProps {
    type: 'text' | 'password' | 'email';
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const DevDaphInput: React.FC<DevDaphInputProps> = ({ type, placeholder, value, onChange, error }) => {
    return (
        <div>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full p-2 border rounded-lg"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default DevDaphInput;
