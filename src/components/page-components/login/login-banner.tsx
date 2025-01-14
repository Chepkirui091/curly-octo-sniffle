import LoginLottie from "../../shared-components/lottie-files/login-lottie";
import { APP_NAME } from "@/utils/constants";
import React from "react";

const LoginBanner: React.FC = () => {
    return (
        <div className="flex flex-col items-center w-full h-full rounded-lg p-4">
            {/* App Name */}
            <h1 className="text-xl font-bold text-center mb-4">{APP_NAME}</h1>

            {/* Lottie Animation */}
            <LoginLottie />

        </div>
    );
};

export default LoginBanner;
