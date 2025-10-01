import Auth from "../components/Auth.tsx";
import Quote from "../components/Quote.tsx";

function Signin() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <Auth type={"SIGNIN"}/>

            <div className="hidden md:block">
                <Quote/>
            </div>
        </div>
    )
}

export default Signin;