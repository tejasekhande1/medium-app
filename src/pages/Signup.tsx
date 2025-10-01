import Quote from "../components/Quote.tsx";
import Auth from "../components/Auth.tsx";

function Signup() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            <Auth/>

            <div className="invisible md:visible">
                <Quote/>
            </div>
        </div>
    )
}

export default Signup;