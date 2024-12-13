import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const { createUser, setUsers, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

  
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long, include at least one uppercase letter, and one lowercase letter."
      );
      toast.error(
        "Password must be at least 6 characters long, include one uppercase letter, and one lowercase letter."
      );
      return;
    }

    setError(""); 

    
    createUser(email, password)
      .then((result) => {
       
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUsers({ ...result.user, displayName: name, photoURL: photo });
            toast.success("Account created successfully!");
            navigate("/"); 
          })
          .catch((error) => {
            setError("Profile update failed. Please try again.");
            toast.error("Profile update failed. Please try again.");
          });
      })
      .catch((error) => {
      
        if (error.code === "auth/email-already-in-use") {
          setError(
            "This email is already in use. Please try another email address."
          );
          toast.error(
            "This email is already in use. Please try another email address.",
            {
              position: "top-center",
            }
          );
        } else {
          setError("Sign-up failed. Please try again.");
          toast.error("Sign-up failed. Please try again.");
        }
      });
  };

  return (
    <div className="hero min-h-screen" style={{ backgroundColor: "#1D1D1D" }}>
      <Helmet>
        <title>SignUp Page || GameScope</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4" style={{ color: "#ADFF00" }}>
            Join Us!
          </h1>
          <p className="text-lg text-gray-400">
            Create an account to unlock amazing game reviews and features.
          </p>
        </div>
        <div
          className="card w-full max-w-md shadow-lg rounded-lg mt-6"
          style={{
            backgroundColor: "#292929",
            borderColor: "#ADFF00",
            borderWidth: "1px",
          }}
        >
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span
                  className="label-text font-semibold"
                  style={{ color: "#ADFF00" }}
                >
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered focus:outline-none focus:ring-2 transition-all"
                style={{
                  backgroundColor: "#1D1D1D",
                  color: "#ADFF00",
                  borderColor: "#ADFF00",
                }}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span
                  className="label-text font-semibold"
                  style={{ color: "#ADFF00" }}
                >
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                required
                className="input input-bordered focus:outline-none focus:ring-2 transition-all"
                style={{
                  backgroundColor: "#1D1D1D",
                  color: "#ADFF00",
                  borderColor: "#ADFF00",
                }}
              />
            </div>
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
                className="input input-bordered focus:outline-none focus:ring-2 transition-all"
                style={{
                  backgroundColor: "#1D1D1D",
                  color: "#ADFF00",
                  borderColor: "#ADFF00",
                }}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span
                  className="label-text font-semibold"
                  style={{ color: "#ADFF00" }}
                >
                  Password
                </span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered focus:outline-none focus:ring-2 transition-all"
                style={{
                  backgroundColor: "#1D1D1D",
                  color: "#ADFF00",
                  borderColor: "#ADFF00",
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute text-xl  right-12 mt-12"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="form-control mt-6">
              <button
                className="btn btn-primary transition-all"
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
                Sign Up
              </button>
              <p className="mt-4 text-center text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold underline"
                  style={{ color: "#ADFF00" }}
                  onMouseOver={(e) => (e.target.style.color = "#89F300")}
                  onMouseOut={(e) => (e.target.style.color = "#ADFF00")}
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
