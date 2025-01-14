import dynamic from "next/dynamic";
import animationData from "../../../../public/lottie/login-lottie.json";
import { APP_NAME } from "@/utils/constants";

// Dynamically import react-lottie without server-side rendering
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const LoginLottie = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return <Lottie options={defaultOptions} height={250} width={250} isClickToPauseDisabled={true} />;
};

const RegisterBanner = () => {
    return (
        <div className="flex flex-col items-center justify-center rounded-lg text-center p-6">
            {/* App Name */}
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">{APP_NAME}</h1>

            {/* Lottie Animation */}
            <LoginLottie />
        </div>
    );
};

export default RegisterBanner;
