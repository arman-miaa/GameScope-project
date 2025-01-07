import toast from "react-hot-toast";
import { useTheme } from "../provider/ThemeProvider ";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const { theme } = useTheme();
const formRef = useRef();
  const handleSubmitForm = (e) => {
   
    e.preventDefault();
    
     Swal.fire({
       position: "center",
       icon: "success",
       title: "Your feedback has been submitted successfully!",
       showConfirmButton: false,
       timer: 1500,
     });
  
    formRef.current.reset();
    
  };



  return (
    <div id="contact" className="text-white py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-[var(--highlight)]">
          Stay Connected and Share Your Feedback
        </h1>

        <p className="max-w-xl mx-auto text-[gray] text-xl">
          We'd love to hear from you! Feel free to share your thoughts,
          feedback, or inquiries using the form below.
        </p>
      </div>

      {/* Contact and Form Section */}
      <div className="container mx-auto px-6 lg:px-32 flex items-center  flex-col md:flex-row gap-2">
        {/* Contact Information */}
        <div className="flex-1  md:text-left hidden md:flex flex-col">
          <h2 className="text-3xl font-semibold mb-6 text-[var(--highlight)]">
            Contact Information
          </h2>
          <p className="text-gray-400 mb-6">
            You can reach us through the following channels:
          </p>
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <i className="fas fa-phone-alt text-[#ADFF00]"></i>
              <p className="text-gray-400">+880 173 6550 601</p>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <i className="fas fa-map-marker-alt text-[#ADFF00]"></i>
              <p className="text-gray-400">2300 Bhairav, Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <i className="fas fa-envelope text-[#ADFF00]"></i>
              <p className="text-gray-400">arman.miaa36gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className={`flex-1 ${
            theme === "dark" ? "bg-[#2D2D2D]" : "bg-gray-200"
          } mt-12 w-full rounded-lg p-6 shadow-lg`}
        >
          <h2 className="text-2xl font-bold text-center text-[var(--highlight)] mb-6">
            Send Us a Message
          </h2>
          <form ref={formRef} onSubmit={handleSubmitForm}>
            <div className="mb-4">
              <label
                className={`block mb-2 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3  text-[var(--text-color)]  border border-[#ADFF00] rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className={`block mb-2 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3  text-[var(--text-color)]  border border-[#ADFF00] rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className={`block mb-2 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                className="w-full p-3  text-[var(--text-color)] resize-none border border-[#ADFF00] rounded"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#ADFF00] text-black font-bold rounded hover:bg-[#aeff00c6] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
