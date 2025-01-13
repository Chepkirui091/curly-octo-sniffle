import React from "react";
import { ModernSidebarItemProps } from "./types";

interface SidebarSectionProps {
    name: string;
    items: ModernSidebarItemProps[];
    pathname: string;
}

function SidebarSection({ name, items, pathname }: SidebarSectionProps) {
    return (
        <div className="mt-4">
            <h3 className="px-4 text-sm font-semibold text-gray-500 uppercase">{name}</h3>
            <ul className="space-y-2 mt-2">
                {items.map((item) => (
                    <li key={item.pageName}>
                        <a
                            href={item.route}
                            className={`flex items-center space-x-3 p-3 m-4 ${
                                pathname === item.route
                                    ? "text-[#FF6767] bg-white"
                                    : "hover:text-[#FF6767] hover:bg-white"
                            } rounded transition-transform transform hover:scale-105`}
                        >
                            <div className="text-xl">{item.pageIcon}</div>
                            <span>{item.pageName}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SidebarSection;
