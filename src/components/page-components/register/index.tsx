import React, {useState} from "react";
import RegisterBanner from "./register-banner";
import RegisterForm from "./register-form";


const Register: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleOnRegister = (values: { username: string; password: string }, callBackFunc: (msg: string) => void) => {
        console.log("Register Attempt:", values);
        if (values.username === "test" && values.password === "password") {
            alert("Register successful!");
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
        <div className="grid h-screen grid-cols-1 md:grid-cols-2 gap-4 items-center"
             // style={{
             //     backgroundImage: "url('/static/loginbg.jpg')",
             //     backgroundSize: 'cover',
             //     backgroundPosition: 'center',
             // }}

        >

            {/* Register Banner */}
            <div className="hidden md:flex p-4">
                <RegisterBanner/>
            </div>

            {/* Form Section */}
            <div className="">
                {activeStep === 0 && (
                    <div
                        className={`transition-all duration-500 ${activeStep === 0 ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                        <RegisterForm onRegister={handleOnRegister}/>
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

export default Register;
