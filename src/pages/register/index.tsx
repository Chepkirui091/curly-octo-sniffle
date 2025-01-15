import Register from "@/components/page-components/register";

const RegisterPage = () => {
    return (
        <div className="register-page bg-[#FFD1B0] h-screen flex items-start relative">
            {/* Background image with reduced opacity and blur */}
            <div
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('/static/loginbg.png')",
                    backgroundPosition: "top left",
                    opacity: 0.5, // 50% opacity
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    filter: "blur(5px)", // Add blur effect
                }}
            ></div>
            {/* Content above the background */}
            <div className="relative w-full flex items-center justify-center h-screen ">
                <Register />
            </div>
        </div>
    );
};

export default RegisterPage;
