// components/DevDaphModal.tsx

import React from "react";

interface DevDaphModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const DevDaphModal: React.FC<DevDaphModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default DevDaphModal;