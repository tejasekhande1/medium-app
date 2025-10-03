import type { SignUpInputProps, SignInInputProps } from "../types/Auth.types.ts";
import { Link } from "react-router-dom";
import LabelledInput from "./LabelledInput.tsx";
import { useState } from "react";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import {BASE_URL} from "../config/config.ts";

function Auth({ type }: { type: "SIGNIN" | "SIGNUP" }) {
    const [signUpInputs, setSignUpInputs] = useState<SignUpInputProps>({
        name: "",
        username: "",
        password: "",
    });

    const [signInInputs, setSignInInputs] = useState<SignInInputProps>({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (type === "SIGNUP") {
            setSignUpInputs((prev) => ({
                ...prev,
                [field]: e.target.value,
            }));
        } else {
            setSignInInputs((prev) => ({
                ...prev,
                [field]: e.target.value,
            }));
        }
    };

    const isSignUp = type === "SIGNUP";

    const handleSubmit = async () => {
        try {
            const url = isSignUp ? "user/signup" : "user/login";
            const body = isSignUp ? signUpInputs : signInInputs;

            const res = await fetch(`${BASE_URL}${url}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            // Industry standard: store JWT securely
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("user", JSON.stringify(data));

            navigate("/blogs");
        } catch (err: Error) {
            console.error(err)
        }
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-extrabold mb-1">
                    {isSignUp ? "Create an account" : "Sign in to your account"}
                </h1>

                <span className="text-sm text-gray-400">
                    {isSignUp ? (
                        <>Already have an account? <Link to="/signin" className="text-blue-500 underline">Sign
                            in</Link></>
                    ) : (
                        <>Don't have an account? <Link to="/signup" className="text-blue-500 underline">Sign
                            up</Link></>
                    )}
                </span>
            </div>

            {isSignUp && (
                <LabelledInput
                    label="Name"
                    placeholder="Enter your full name"
                    value={signUpInputs.name}
                    onChange={handleInputChange('name')}
                />
            )}

            <LabelledInput
                label="Username"
                placeholder="Enter your username"
                value={isSignUp ? signUpInputs.username : signInInputs.username}
                onChange={handleInputChange('username')}
            />

            <LabelledInput
                type="password"
                label="Password"
                placeholder="Enter your password"
                value={isSignUp ? signUpInputs.password : signInInputs.password}
                onChange={handleInputChange('password')}
            />

            <button type="button"
                    onClick={handleSubmit}
                    className="
                    w-full  max-w-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none
                    focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2
                    dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
                {isSignUp ? "Sign Up" : "Sign In"}
            </button>

        </div>
    );
}

export default Auth;