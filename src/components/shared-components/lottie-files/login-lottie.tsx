import React from "react";
import dynamic from "next/dynamic";
import animationData from "../../../../public/lottie/login-lottie.json";

// Dynamically import react-lottie without server-side rendering
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

// Define the type for the default options
interface LottieOptions {
    loop: boolean;
    autoplay: boolean;
    animationData: object;
    rendererSettings: {
        preserveAspectRatio: string;
    };
}

const LoginLottie = () => {
    const defaultOptions: LottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Lottie
            options={defaultOptions}
            height={250}
            width={250}
            isClickToPauseDisabled={true}
        />
    );
};

export default LoginLottie;
