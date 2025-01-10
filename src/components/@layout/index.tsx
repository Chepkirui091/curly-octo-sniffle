import React, { useEffect, useState } from "react";
import Sidebar from "@/components/@layout/sidebar";
import TopNav from "@/components/page-components/top-nav";


export const drawerWidth = 258;

type ModernLayoutProps = {
    children: React.ReactNode;
    title?: string;
};

function ModernLayout({ children, title }: ModernLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Detect if the screen size is large (lg breakpoint in Tailwind CSS)
    const isLgUp =
        typeof window !== "undefined" && window.innerWidth >= 1024;

    useEffect(() => {
        setIsSidebarOpen(isLgUp); // Auto-open sidebar on large screens
    }, [isLgUp]);

    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main Content */}
            <div
                className={`flex flex-col flex-grow transition-all duration-300 ${
                    isSidebarOpen ? `ml-${drawerWidth}px` : "ml-0"
                }`}
            >
                {/* Top Navigation */}
                <TopNav title={title || "Dashboard"} />

                {/* Content */}
                <main className="p-6 flex-grow">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default ModernLayout;
