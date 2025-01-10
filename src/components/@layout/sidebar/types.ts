import {JSX} from "react";

export interface ModernSidebarItemProps {
    pageName: string; 
    route: string;
    pageIcon: JSX.Element;
    enabled: boolean;
}
