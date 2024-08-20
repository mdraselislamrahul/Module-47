import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="text-center mt-32">
            <h1 className="text-5xl font-bold">Oops!</h1>
            <p className="text-2xl mt-7">Sorry, an unexpected error has occurred.</p>
            <p className="mt-5 text-xl">
                <i>{error.statusText || error.message}</i>
            </p>
            <div className="mt-10">
                <Link to="/" className="bg-blue-500 text-white px-5 py-3 rounded-lg">Go Back Home</Link>
            </div>
        </div>

    );
};

export default ErrorPage;