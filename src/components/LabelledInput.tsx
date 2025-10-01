import type {LabelledInputProps} from "../types/Auth.types.ts";
import {memo} from "react";

const LabelledInput = memo(function LabelledInput({label, placeholder, onChange, value, type}: LabelledInputProps) {
    return (
        <div className="w-full max-w-sm mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type || 'text'}
                value={value}
                onChange={onChange}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 transition-colors"
                placeholder={placeholder}
                required
            />
        </div>
    );
});

export default LabelledInput;