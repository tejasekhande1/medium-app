import type {ChangeEvent} from "react";

export interface LabelledInputProps {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: string;
    type?: 'text' | 'password' | 'email';
}

export interface SignUpInputProps {
    name: string,
    username: string,
    password: string,
}

export interface SignInInputProps {
    username: string,
    password: string,
}