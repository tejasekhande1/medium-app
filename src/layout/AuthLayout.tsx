import {ReactNode} from "react";
import Quote from "../components/Quote.tsx";

function AuthLayout({children}: { children: ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            {children}

            <div className="hidden md:block">
                <Quote/>
            </div>
        </div>
    );
}

export default AuthLayout;