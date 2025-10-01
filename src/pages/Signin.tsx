import Auth from "../components/Auth.tsx";
import AuthLayout from "../layout/AuthLayout.tsx";

function Signin() {
    return (
        <AuthLayout>
            <Auth type={'SIGNIN'}/>
        </AuthLayout>
    )
}

export default Signin;