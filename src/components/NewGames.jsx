import { useEffect, useState } from "react";

const NewGames = () => {
  const [newGames, setNewGames] = useState([]); 
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    fetch("https://ph-assignment10-server-lilac.vercel.app/newgame")
      .then((res) => res.json())
      .then((data) => {
        setNewGames(data);
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
    <div>
      {loading ? (
        <p>loading....</p>
      ) : (
        <div>
          new game {newGames.length}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newGames.map((newGame, index) => (
              <div
                key={index}
                className="bg-black border-2 border-lime-400 p-6 rounded-lg shadow-lg text-white flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="flex justify-center mb-4">
                  <img src={newGame.image} alt="Icon" className="w-16 h-16" />
                </div>

                {/* Content Section */}
                <div className="text-center flex flex-col flex-grow">
                  <p className="text-lime-400 text-xl font-bold mb-2">
                    [ {index + 1} ]
                  </p>
                  <h2 className="text-2xl font-bold uppercase mb-4">
                    {newGame.title}
                  </h2>
                  <p className="text-gray-400 flex-grow">
                    {newGame.description}
                  </p>
                </div>

                {/* Button Section */}
                <div className="mt-4">
                  <button
                    onClick={() => {
                      handlePlayGame(newGame.playLink);
                    }}
                    className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-6 rounded w-full"
                  >
                    [ Play Now! ]
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewGames;
