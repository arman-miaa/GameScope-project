import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../pages/Spinner";

const HighestRatedReviews = () => {
  const [reviews, setReviews] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch(
      "https://ph-assignment10-server-lilac.vercel.app/highest-rated-reviews"
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false); 
      })
      .catch((error) => {
        setLoading(false); 
      });
  }, []);

  return (
    <div>
      {loading ? ( 
      <Spinner></Spinner>
      ) : (
        <div>
          <div id="top" className="text-center mb-8 mt-12">
            <h1 className="text-4xl font-bold text-[var(--footer-title-color)]">
              Top-Tier Game Reviews
            </h1>
            <p className=" mt-4 md:w-1/2 mx-auto text-xl tewh text-[gray]">
              Discover the top-rated reviews from our community! Explore
              detailed insights and experiences from real users to help you make
              informed decisions. Find out what makes these reviews stand out!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8  rounded-xl p-6">
            {reviews.map((review, index) => (
              <div key={index}>
                <div className="card  flex flex-col justify-between border-2 border-lime-400 shadow-xl p-6 h-full">
                  <figure>
                    <img
                      className="w-full h-[200px] object-cover rounded-xl"
                      src={review.image}
                      alt={review.title}
                    />
                  </figure>
                  <div className="flex flex-col flex-grow mt-4 text-[var(--text-color)] ">
                    <h2 className="text-3xl font-bold">{review.title}</h2>
                    <p className="text-2xl mt-2">Genres: {review.genres}</p>
                    <p className="text-2xl mt-2">
                      Rating: {review.rating} / 10 ⭐
                    </p>
                    <div className="mt-auto">
                      <Link to={`/reviewsDetails/${review._id}`}>
                        <button className="btn text-black bg-[#ADFF00] border-none w-full hover:bg-[#ADFF00] mt-6 font-bold">
                          Explore Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HighestRatedReviews;
