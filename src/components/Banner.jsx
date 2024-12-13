import { Typewriter } from "react-simple-typewriter";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
const Banner = () => {
   const handleScrollToTop = () => {
     const element = document.getElementById("top");
     if (element) {
       element.scrollIntoView({
         behavior: "smooth",
         block: "start", 
       });
     }
   };
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="relative carousel-item w-full">
          <img
            src={banner3}
            className="w-full h-[60vh] object-cover rounded-xl"
          />
          {/* text */}
          <div className=" bg-cover bg-center h-96">
            <div className="absolute inset-0 flex flex-col justify-center items-start px-8 text-white ">
              {/* Title Section */}
              <h1 className="text-5xl font-extrabold uppercase tracking-wide drop-shadow-lg">
                <Typewriter
                  words={["PUBG"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                />
              </h1>

              {/* Game Info */}
              <div className="flex items-center space-x-4 mt-4 text-sm md:text-base">
                <span className="flex items-center space-x-2">
                  <i className="fas fa-gamepad text-yellow-400"></i>
                  <span>Battle Royale</span>
                </span>
                <span className="flex items-center space-x-2">
                  <i className="fas fa-calendar-alt text-blue-400"></i>
                  <span>2023</span>
                </span>
                <span className="flex items-center space-x-2">
                  <i className="fas fa-clock text-green-400"></i>
                  <span>45 min match</span>
                </span>
                <span className="bg-[#ADFF00] text-black text-xs px-3 py-1 rounded-full">
                  4K
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-base md:text-lg max-w-2xl text-white md:font-bold drop-shadow">
                Dive into the intense battlegrounds of PUBG, where strategy,
                precision, and survival instincts determine the ultimate
                champion. Fight, loot, and dominate in this high-octane action
                game.
              </p>

              {/* Button */}
              <button
                onClick={handleScrollToTop}
                className="mt-6 bg-[#ADFF00] text-black hover:bg-[#496905d9] px-8 py-3 rounded-lg font-semibold shadow-lg  transition duration-300"
              >
                See More
              </button>
            </div>
          </div>
        </div>

        <div id="item2" className="relative carousel-item w-full">
          <img
            src={banner2}
            className="w-full h-[60vh] object-cover rounded-xl"
          />

          {/* text */}
          <div className=" bg-cover bg-center h-96">
            <div className="absolute inset-0 flex flex-col justify-center items-start px-8 text-white">
              <h1 className="text-4xl font-bold">
                <Typewriter
                  words={["Valorant"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                />
              </h1>
              <div className="flex items-center space-x-4 mt-4">
                <span className="flex items-center space-x-1">
                  <i className="fas fa-film"></i> <span>Tactical Shooter</span>
                </span>
                <span className="flex items-center space-x-1">
                  <i className="fas fa-calendar-alt"></i> <span>2020</span>
                </span>
                <span className="flex items-center space-x-1">
                  <i className="fas fa-clock"></i>{" "}
                  <span>30-40 mins per match</span>
                </span>
                <span className="bg-[#ADFF00] text-black text-sm px-2 py-1 rounded">
                  PC
                </span>
              </div>
              <p className="mt-4 text-lg max-w-2xl font-bold">
                Valorant, the highly competitive tactical shooter, brings
                strategy, precision, and fast-paced action together in 5v5
                matches. Test your skills with unique agents and dynamic maps.
              </p>
              <button
                onClick={handleScrollToTop}
                className="mt-6 bg-[#ADFF00] text-black hover:bg-[#496905d9] px-8 py-3 rounded-lg font-semibold shadow-lg  transition duration-300"
              >
                See More
              </button>
            </div>
          </div>
        </div>
        <div id="item3" className=" relative carousel-item w-full">
          <img
            src={banner1}
            className="w-full h-[60vh] object-cover rounded-xl"
          />
          {/* text */}
          <div className=" bg-cover bg-center h-96">
            <div className="absolute inset-0 flex flex-col justify-center items-start px-8 text-white">
              <h1 className="text-4xl font-bold">
                <Typewriter
                  words={["FREE FIRE"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                />
              </h1>
              <div className="flex items-center space-x-4 mt-4">
                <span className="flex items-center space-x-1">
                  <i className="fas fa-film"></i> <span>Battle Royale</span>
                </span>
                <span className="flex items-center space-x-1">
                  <i className="fas fa-calendar-alt"></i> <span>2017</span>
                </span>
                <span className="flex items-center space-x-1">
                  <i className="fas fa-clock"></i>{" "}
                  <span>15-20 mins per match</span>
                </span>
                <span className="bg-[#ADFF00] text-black text-sm px-2 py-1 rounded">
                  Mobile
                </span>
              </div>
              <p className="mt-4 text-lg max-w-2xl md:font-bold">
                Free Fire, a fast-paced battle royale game, pushes players into
                an action-packed survival mode with quick matches and strategic
                gameplay, offering endless excitement.
              </p>
              <button
                onClick={handleScrollToTop}
                className="mt-6 bg-[#ADFF00] text-black hover:bg-[#496905d9] px-8 py-3 rounded-lg font-semibold shadow-lg  transition duration-300"
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-4 py-4">
        <a href="#item1" className="btn btn-xl text-xl border-blue-200">
          1
        </a>
        <a href="#item2" className="btn btn-xl text-xl border-blue-200">
          2
        </a>
        <a href="#item3" className="btn btn-xl text-xl border-blue-200">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
