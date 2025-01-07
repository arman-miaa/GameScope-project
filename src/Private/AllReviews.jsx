import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import Spinner from "../pages/Spinner";

const AllReviews = () => {
  const initialReviews = useLoaderData();
  const [reviews, setReviews] = useState(initialReviews);
  const [sortField, setSortField] = useState("");
  const [genre, setGenre] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (initialReviews) {
      setLoader(false);
    }
  }, [initialReviews]);

  // Handle Sort
  const handleSort = async () => {
    setLoader(true);
    const response = await fetch(
      `https://ph-assignment10-server-lilac.vercel.app/reviews?sortField=${sortField}&genre=${genre}`
    );
    const sortedReviews = await response.json();
    setReviews(sortedReviews);
    setLoader(false);
  };

  // Handle Filter
  const handleFilter = async () => {
    setLoader(true);
    if (genre === "All Reviews") {
      const response = await fetch(
        `https://ph-assignment10-server-lilac.vercel.app/reviews`
      );
      const allReviews = await response.json();
      setReviews(allReviews);
    } else {
      const response = await fetch(
        `https://ph-assignment10-server-lilac.vercel.app/reviews?genre=${genre}`
      );
      const filteredReviews = await response.json();
      setReviews(filteredReviews);
    }
    setLoader(false);
  };

  return (
    <div>
      {loader ? (
        <Spinner></Spinner>
      ) : (
        <div className="container mx-auto py-12">
          <Helmet>
            <title>All Review Page || GameScope</title>
          </Helmet>
          <div className="flex items-center justify-center p-4 gap-6">
            <select
              onChange={(e) => setGenre(e.target.value)}
              className="border-2 select select-bordered btn px-12 md:px-32"
            >
              <option value="">Filter By Genre</option>
              <option value="All Reviews">All Reviews</option>
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
            </select>
            <button
              onClick={handleFilter}
              className="btn bg-[#ADFF00] hover:bg-[#8ac214] text-black"
            >
              Filter
            </button>
          </div>

          {/* Sort by Rating or Year */}
          <div className="flex items-center p-4 gap-6">
            <select
              onChange={(e) => setSortField(e.target.value)}
              className="border-2 select select-bordered btn px-12"
            >
              <option value="">Sort By</option>
              <option value="Rating">Rating</option>
              <option value="Year">Year</option>
            </select>
            <button
              onClick={handleSort}
              className="btn bg-[#ADFF00] text-black hover:bg-[#8ac214]"
            >
              Sort
            </button>
          </div>

          {/* Display Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {reviews.map((review) => (
              <div key={review._id}>
                <div className="card bg-[#2D2D2D] p-6">
                  <figure>
                    <img
                      className="w-full h-[300px] object-cover rounded-xl"
                      src={review.image}
                      alt={review.title}
                    />
                  </figure>
                  <div className=" mt-4 text-white">
                    <h2 className=" text-2xl font-semibold">{review.title}</h2>
                    <p className="text-xl mt-2">Genres: {review.genres}</p>
                    {/* <p>Publishing year: {review.year}</p> */}
                    {/* <p>Rating: {review.rating}/10⭐</p> */}
                    <p className="mt-2 text-justify">{review.review.slice(0, 80)}...</p>
                    <div className="card-actions justify-end mt-2">
                      <Link to={`/reviewsDetails/${review._id}`}>
                        <button className="btn bg-[#ADFF00] hover:bg-[#8ac214] border-none text-black">
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

export default AllReviews;
