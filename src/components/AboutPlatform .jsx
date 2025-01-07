import { useTheme } from "../provider/ThemeProvider ";
import { FaGamepad, FaUsers, FaChartLine } from "react-icons/fa"; // Importing icons

const AboutPlatform = () => {
  const { theme } = useTheme();

  return (
    <section className="about-platform py-16 bg-[var(---bg-color)]">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 text-[var(--highlight)]">
          About Chill Gamer
        </h1>

        <p className="max-w-xl mx-auto text-[gray] text-xl">
          Welcome to your gaming haven—where you can uncover top games, exchange
          opinions, and join a passionate community of players who love gaming
          as much as you do.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Card 1 */}
          <div
            className={`${
              theme === "dark" ? "bg-[#2D2D2D]" : "bg-gray-200"
            } card  shadow-lg p-6 rounded-lg`}
          >
            <div className="icon mx-auto mb-4 text-[var(--highlight)] text-4xl">
              <FaGamepad />
            </div>
            <h3 className="text-xl font-semibold mb-2">Explore Game Library</h3>
            <p className="text-gray-500">
              Dive into a rich collection of games tailored to your preferences.
              Discover hidden gems and fan-favorites to level up your gaming
              experience.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className={`${
              theme === "dark" ? "bg-[#2D2D2D]" : "bg-gray-200"
            } card  shadow-lg p-6 rounded-lg`}
          >
            <div className="icon mx-auto mb-4 text-[var(--highlight)] text-4xl">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold mb-2">Engage with Gamers</h3>
            <p className="text-gray-500">
              Participate in forums, share tips, and exchange strategies with
              other players. Be part of a thriving community that shares your
              love for games.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className={`${
              theme === "dark" ? "bg-[#2D2D2D]" : "bg-gray-200"
            } card  shadow-lg p-6 rounded-lg`}
          >
            <div className="icon mx-auto mb-4 text-[var(--highlight)] text-4xl">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
            <p className="text-gray-500">
              Keep a record of the games you've played, completed, or plan to
              play. Stay organized and never miss out on your favorite titles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPlatform;
