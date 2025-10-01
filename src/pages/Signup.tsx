import Quote from "../components/Quote.tsx";

function Signup() {
    return (
        <div className="grid grid-cols-12 h-screen">
            <div className="col-span-12 md:col-span-5">
                <h1 className="text-2xl font-semibold p-8">Signup Form</h1>
            </div>

            <div className="col-span-7 invisible md:visible">
                <Quote />
            </div>
        </div>
    )
}

export default Signup;