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
        <div className="bg-white  rounded-md flex w-1/2"
        >
            <RegisterForm onRegister={handleOnRegister}/>
            <RegisterBanner/>

        </div>
    );
};

export default Register;
