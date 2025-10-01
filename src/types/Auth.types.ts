import type {ChangeEvent} from "react";

export enum AuthFormType {
    SIGNIN = 'SIGNIN',
    SIGNUP = 'SIGNUP',
}

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