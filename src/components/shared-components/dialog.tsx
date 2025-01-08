import React, { ReactNode } from "react";

const CustomDialog = ({
                          open,
                          title,
                          children,
                          onClose,
                      }: {
    open: boolean;
    title: string;
    children: ReactNode;
    onClose: () => void;
}) => {
    if (!open) return null; // Do not render dialog if not open

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg">
                {/* Dialog Header */}
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 text-lg"
                    >
                        &times;
                    </button>
                </div>
                {/* Dialog Content */}
                <div className="mt-4">{children}</div>
            </div>
        </div>
    );
};

export default CustomDialog;
