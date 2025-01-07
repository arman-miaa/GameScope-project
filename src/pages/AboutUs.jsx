import { useTheme } from "../provider/ThemeProvider ";
import { FaBullseye, FaGlobe } from "react-icons/fa"; // Import icons

const AboutUs = () => {
  const { theme } = useTheme();

  return (
    <section className={`about-us py-16`}>
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-[var(--highlight)]">
          About Us
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          } max-w-3xl mx-auto`}
        >
          Welcome to Chill Gamer! We are a passionate team of gaming enthusiasts
          dedicated to creating a platform that connects players, sparks
          conversations, and helps you discover your next favorite game. Dive
          into our community and experience gaming like never before.
        </p>

        {/* Our Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Mission Card */}
          <div
            className={`${
              theme === "dark" ? "bg-[#2D2D2D]" : "bg-gray-200"
            } shadow-md p-6 rounded-lg`}
          >
            <div className="icon mb-4">
              <FaBullseye
                className={`w-12 h-12 mx-auto ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              />
            </div>
            <h3 className="text-2xl font-semibold text-[var(--highlight)] mb-4">
              Our Mission
            </h3>
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              To bring gamers together by providing a one-stop platform for game
              reviews, recommendations, and community engagement.
            </p>
          </div>

          {/* Vision Card */}
          <div
            className={`${
              theme === "dark" ? "bg-[#2D2D2D]" : "bg-gray-200"
            } shadow-md p-6 rounded-lg`}
          >
            <div className="icon mb-4">
              <FaGlobe
                className={`w-12 h-12 mx-auto ${
                  theme === "dark" ? "text-green-400" : "text-green-600"
                }`}
              />
            </div>
            <h3 className="text-2xl font-semibold text-[var(--highlight)] mb-4">
              Our Vision
            </h3>
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              To become the ultimate destination for gamers worldwide, fostering
              meaningful connections and making gaming even more enjoyable.
            </p>
          </div>
        </div>

       
       
      </div>
      <section
        className={`why-choose-us py-12 mt-16 ${
          theme === "dark"
            ? "bg-[#1E1E1E] text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-6 text-[var(--highlight)]">
            Why Choose Us?
          </h2>

          {/* Subtitle */}
          <p className="text-lg max-w-3xl mx-auto mb-8">
            We are passionate about gaming and dedicated to providing a platform
            that empowers gamers to make informed decisions, share their
            thoughts, and connect with others who share their interests.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Feature 1 */}
            <div
              className={`${
                theme === "dark" ? "bg-[#2D2D2D]" : "bg-white"
              } shadow-md p-6 rounded-lg flex flex-col items-center`}
            >
              <div
                className={`${
                  theme === "dark" ? "text-[var(--highlight)]" : "text-blue-500"
                } text-4xl mb-4`}
              >
                🎮
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Comprehensive Database
              </h3>
              <p className="text-sm text-gray-600">
                Explore a wide array of games with detailed reviews to guide
                your choices.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className={`${
                theme === "dark" ? "bg-[#2D2D2D]" : "bg-white"
              } shadow-md p-6 rounded-lg flex flex-col items-center`}
            >
              <div
                className={`${
                  theme === "dark"
                    ? "text-[var(--highlight)]"
                    : "text-green-500"
                } text-4xl mb-4`}
              >
                ✍️
              </div>
              <h3 className="text-xl font-semibold mb-2">
                User-Friendly Platform
              </h3>
              <p className="text-sm text-gray-600">
                Easily share your opinions and feedback with our intuitive
                interface.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className={`${
                theme === "dark" ? "bg-[#2D2D2D]" : "bg-white"
              } shadow-md p-6 rounded-lg flex flex-col items-center`}
            >
              <div
                className={`${
                  theme === "dark"
                    ? "text-[var(--highlight)]"
                    : "text-yellow-500"
                } text-4xl mb-4`}
              >
                🌐
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Community Engagement
              </h3>
              <p className="text-sm text-gray-600">
                Connect with gamers worldwide and build meaningful
                relationships.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              className={`${
                theme === "dark" ? "bg-[#2D2D2D]" : "bg-white"
              } shadow-md p-6 rounded-lg flex flex-col items-center`}
            >
              <div
                className={`${
                  theme === "dark"
                    ? "text-[var(--highlight)]"
                    : "text-purple-500"
                } text-4xl mb-4`}
              >
                🔄
              </div>
              <h3 className="text-xl font-semibold mb-2">Regular Updates</h3>
              <p className="text-sm text-gray-600">
                Stay up to date with fresh and relevant content added regularly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
