import type {AuthFormType, SignUpInputProps} from "../types/Auth.types.ts";
import {Link} from "react-router-dom";
import LabelledInput from "./LabelledInput.tsx";
import {useState} from "react";
import * as React from "react";

function Auth({type}: { type: AuthFormType }) {
    const [signUpInputs, setSignUpInputs] = useState<SignUpInputProps>({
        name: "",
        username: "",
        password: "",
    });

    const handleInputChange = (field: keyof SignUpInputProps) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSignUpInputs((prev) => ({
            ...prev,
            [field]: e.target.value
        }));
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className={'text-center mb-12'}>
                <h1 className="text-3xl font-extrabold mb-1">
                    Create an account
                </h1>

                <span className="text-sm text-gray-400">
                    Already have an account? <Link to="/signin" className="text-blue-500 underline">Sign in</Link>
                </span>
            </div>

            <LabelledInput
                label="Name"
                placeholder="Enter your full name"
                value={signUpInputs.name}
                onChange={handleInputChange('name')}
            />

            <LabelledInput
                label="Username"
                placeholder="Enter your username"
                value={signUpInputs.username}
                onChange={handleInputChange('username')}
            />

            <LabelledInput
                type="password"
                label="Password"
                placeholder="Enter your password"
                value={signUpInputs.password}
                onChange={handleInputChange('password')}
            />
        </div>
    );
}

export default Auth;