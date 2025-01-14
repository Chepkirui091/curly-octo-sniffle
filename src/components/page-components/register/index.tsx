import React from "react";
import RegisterBanner from "./register-banner";
import RegisterForm from "./register-form";

const Register = () => {
    const handleOnRegister = (values: { username: string; password: string }, callBackFunc: (msg: string) => void) => {
        console.log("Register Attempt:", values);
        if (values.username === "test" && values.password === "password") {
            alert("Register successful!");
        } else {
            callBackFunc("Invalid username or password.");
        }
    };

    return (
        <div className="flex h-screen items-center justify-center overflow-hidden md:flex-row flex-col">
            {/* Register Banner */}
            <div className=" md:flex flex-1 p-4">
                <RegisterBanner />
            </div>

            {/* Form Section */}
            <div className="z-10 flex-1">
                <RegisterForm onRegister={handleOnRegister} />
            </div>
        </div>
    );
};

export default Register;
