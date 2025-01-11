import React, { useEffect, useState } from "react";
import ModernTopNav from "@/components/@layout/top-nav-bar";
import ModernSidebar from "@/components/@layout/sidebar/modern-sidebar";


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



            <div className="flex flex-col h-screen dark:bg-darkBackground">

                <ModernTopNav title={title || "Dashboard"}/>


                {/* Main Content */}
                <div className="flex flex-1 overflow-hidden ">

                    <ModernSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>

                    {/* Content */}
                    <main className="flex-1 lg:p-6 overflow-auto">
                        {children}
                    </main>
                </div>
            </div>
            );
            }

            export default ModernLayout;
