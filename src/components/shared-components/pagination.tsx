// components/DevDaphPagination.tsx

import React from "react";

interface DevDaphPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const DevDaphPagination: React.FC<DevDaphPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center space-x-2">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="p-2">
                Prev
            </button>
            <span>
        {currentPage} of {totalPages}
      </span>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-2">
                Next
            </button>
        </div>
    );
};

export default DevDaphPagination;
