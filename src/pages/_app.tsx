import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "@/components/page-components/sidebar";
import { ThemeProvider } from "@/context/theme-context";
import TopNav from "@/components/page-components/top-nav";
import MainSidebar from "@/components/@layout/sidebar";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <div className="flex flex-col h-screen">
                {/* Top Navbar */}
                <TopNav />

                {/* Main Content and Sidebar */}
                <div className="flex flex-1 overflow-hidden dark:bg-darkBackground">
                        <MainSidebar />
                    <main className="flex-1 lg:p-6 overflow-auto">
                        <Component {...pageProps} />
                    </main>
                </div>
            </div>
        </ThemeProvider>
    );
}
