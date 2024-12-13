import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <Helmet>
          <title>ERROR Page || GameScope</title>
        </Helmet>
        <h1 className="text-gray-400 md:text-3xl font-bold">
          Sorry! Page Not Found
        </h1>
        <p className="text-gray-400 mt-2 md:text-3xl">
          Go bace to{" "}
          <Link to="/" className="text-red-400 underline ">
            Home
          </Link>
        </p>
      </div>
    );
};

export default ErrorPage;