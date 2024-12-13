import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const PopularGames = () => {
  const [populargames, setPopulargames] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("https://ph-assignment10-server-lilac.vercel.app/populargame")
      .then((res) => res.json())
      .then((data) => {
        setPopulargames(data);
        setLoading(false); 
      })
      .catch((error) => {
        setLoading(false); 
      });
  }, []);

  const handlePlayGame = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="px-6 py-8 mt-8 ">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[var(--footer-title-color)]">Popular Games</h1>
        <p className=" mt-4 md:w-1/2 mx-auto text-xl tewh text-[gray]">
          Discover the most popular games that gamers around the globe adore.
          Whether you're into epic adventures, strategic challenges, or
          fast-paced action, there's something for everyone.
        </p>
      </div>

      {loading ? (
        <p className="text-center text-gray-300">Loading...</p>
      ) : (
        <div>
          <Marquee pauseOnHover={true} speed={100}>
            <div className="flex flex-wrap mt-4  gap-8 mr-8">
              {populargames.map((game, index) => (
                <div
                  key={index}
                  className="bg-black border-2 border-lime-400 p-6 px-8 rounded-lg shadow-lg text-white flex flex-col h-full min-h-[350px] justify-between"
                >
                  {/* Image Section */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-52 h-52 rounded-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="text-center flex flex-col flex-grow">
                    <p className="text-lime-400 text-xl font-bold mb-2">
                      [ {index + 1} ]
                    </p>
                    <h2 className="text-2xl font-bold uppercase mb-4">
                      {game.title}
                    </h2>
                    <h2 className="text-2xl font-bold uppercase mb-4">
                      Rating: {game?.rating}⭐
                    </h2>
                    <p className="text-gray-400 flex-grow">
                      {game.description}
                    </p>
                  </div>

                  {/* Button Section */}
                  <div className="mt-4">
                    <button
                      onClick={() => handlePlayGame(game.playLink)}
                      className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-6 rounded w-full"
                    >
                      [ Play Now! ]
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      )}
    </div>
  );
};

export default PopularGames;
