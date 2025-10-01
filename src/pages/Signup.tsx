import AuthLayout from "../layout/AuthLayout.tsx";
import Auth from "../components/Auth.tsx";

function Signup() {
    return (
        <AuthLayout>
            <Auth type={'SIGNUP'}/>
        </AuthLayout>
    )
}

export default Signup;