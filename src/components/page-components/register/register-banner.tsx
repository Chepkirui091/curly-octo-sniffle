import Image from "next/image";

// Dynamically import react-lottie without server-side rendering
// const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

// const LoginLottie = () => {
//     const defaultOptions = {
//         loop: true,
//         autoplay: true,
//         animationData: animationData,
//         rendererSettings: {
//             preserveAspectRatio: "xMidYMid slice",
//         },
//     };
//
//     return <Lottie options={defaultOptions} height={250} width={250} isClickToPauseDisabled={true} />;
// };

const RegisterBanner = () => {
    return (
        <div className="flex justify-center items-center">
            {/* App Name */}
            {/*<h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{APP_NAME}</h1>*/}

            {/* Lottie Animation */}
            {/*<LoginLottie />*/}
            <Image src="/static/loginbg.png" width={350} height={350} alt="Descriptive text" />
        </div>
    );
};

export default RegisterBanner;
