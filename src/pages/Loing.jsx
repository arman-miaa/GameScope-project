import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signInUser, sigInWithGoogle, setUsers } = useContext(AuthContext);
  const [error, setError] = useState("");
     const location = useLocation();
     const navigate = useNavigate();
     const from = location.state?.from?.pathname || "/";
   

  const handleSubmit = (e) => {

    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        setUsers(result.user);
        toast.success("Logged in successfully!");
        form.reset();
        setError("");
       
        // navigate(from);
         navigate(from, { replace: true });
      })
      .catch(() => {
        toast.error("Invalid email or password. Please try again!");
        setError("Invalid email or password. Please try again!");
      });
  };

  const handleSignInUserWithGoogle = () => {
    sigInWithGoogle().then(() => {
      toast.success("Login successful With Google!");
      navigate(from, { replace: true });
      // navigate(from);

    })

  };

  return (
    <div
      className="hero min-h-screen flex justify-center items-center"
      style={{ backgroundColor: "#1D1D1D" }}
    >
      <Helmet>
        <title>Login Page || GameScope</title>
      </Helmet>
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4" style={{ color: "#ADFF00" }}>
            Welcome Back!
          </h1>
          <p className="text-lg text-gray-400">
            Login to your account to explore amazing game reviews and features.
          </p>
        </div>

        {/* Login Form */}
        <div
          className="card mt-6 shadow-lg rounded-lg"
          style={{
            backgroundColor: "#292929",
            borderColor: "#ADFF00",
            borderWidth: "1px",
          }}
        >
          <form onSubmit={handleSubmit} className="card-body">
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span
                  className="label-text font-semibold"
                  style={{ color: "#ADFF00" }}
                >
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered transition-all focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: "#1D1D1D",
                  color: "#ADFF00",
                  borderColor: "#ADFF00",
                }}
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span
                  className="label-text font-semibold"
                  style={{ color: "#ADFF00" }}
                >
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered transition-all focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: "#1D1D1D",
                  color: "#ADFF00",
                  borderColor: "#ADFF00",
                }}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {/* Login Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn transition-all"
                style={{
                  backgroundColor: "#ADFF00",
                  color: "#1D1D1D",
                  border: "none",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#89F300")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ADFF00")
                }
              >
                Login
              </button>
            </div>

            {/* Google Login */}
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={handleSignInUserWithGoogle}
                className="btn transition-all"
                style={{
                  borderColor: "#ADFF00",
                  color: "#ADFF00",
                  backgroundColor: "transparent",
                  border: "1px solid #ADFF00",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#ADFF00";
                  e.currentTarget.style.color = "#1D1D1D";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#ADFF00";
                }}
              >
                Login with Google
              </button>
            </div>

            {/* Register Link */}
            <p className="mt-4 text-center text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold underline transition-all"
                style={{ color: "#ADFF00" }}
                onMouseOver={(e) => (e.target.style.color = "#89F300")}
                onMouseOut={(e) => (e.target.style.color = "#ADFF00")}
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
