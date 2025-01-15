import React, {useState} from "react";
import LoginBanner from "./login-banner";
import LoginForm from "./login-form";


const Login: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleOnLogin = (values: { username: string; password: string }, callBackFunc: (msg: string) => void) => {
        console.log("Login Attempt:", values);
        if (values.username === "test" && values.password === "password") {
            alert("Login successful!");
            setActiveStep(1); // Move to OTP step
        } else {
            callBackFunc("Invalid username or password.");
        }
    };

    // const handleSubmitOTP = (values: { otp: string }, callBackFunc: (msg: string) => void) => {
    //     console.log("OTP Submission:", values);
    //     if (values.otp === "123456") {
    //         alert("OTP Verified! Redirecting...");
    //         // Simulate redirection to dashboard
    //         setTimeout(() => {
    //             alert("Welcome to the Dashboard!");
    //         }, 500);
    //     } else {
    //         callBackFunc("Invalid OTP. Please try again.");
    //     }
    // };

    // const handleOnResendOTP = (callBackFunc: (msg: string) => void) => {
    //     console.log("Resending OTP...");
    //     alert("OTP has been resent to your phone.");
    //     callBackFunc("");
    // };

    return (
        <div
            className="grid h-screen grid-cols-1 md:grid-cols-2 gap-4 items-center overflow-hidden"
            style={{
                backgroundImage: "url('/static/loginbg.png')",
                backgroundSize: 'auto 25%', // Adjust the size (e.g., 25% of height)
                backgroundPosition: 'top center', // Position it at the top
                backgroundRepeat: 'no-repeat', // Prevent it from repeating
            }}
        >


            {/* Login Banner */}
            <div className="hidden md:flex p-4">
                <LoginBanner/>
            </div>

            {/* Form Section */}
            <div className="flex flex-col items-center justify-center gap-4 p-4 md:p-12">
                {activeStep === 0 && (
                    <div
                        className={`transition-all duration-500 ${activeStep === 0 ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                        <LoginForm onLogin={handleOnLogin}/>
                    </div>
                )}
                {/*{activeStep === 1 && (*/}
                {/*    <div className={`transition-all duration-500 ${activeStep === 1 ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>*/}
                {/*        <OtpForm*/}
                {/*            onSuccess={handleSubmitOTP}*/}
                {/*            message="An OTP has been sent to your phone number"*/}
                {/*            onResendOTP={handleOnResendOTP}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>
        </div>
    );
};

export default Login;
