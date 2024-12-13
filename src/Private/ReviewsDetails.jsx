import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const ReviewsDetails = () => {
  const { users } = useContext(AuthContext);
  const details = useLoaderData();
  const {
    image,
    title,
    review,
    rating,
    genres,
    email,
    name: reviewer,
  } = details;

  const loggedInUser = {
    name: `${users.displayName}`,
    email: `${users.email}`,
  };

  const handleWatchList = () => {
    const watchlistData = {
      reviewId: details._id,
      title,
      image,
      rating,
      genres,
      addedBy: loggedInUser.name,
      userEmail: loggedInUser.email,
    };

    fetch("https://ph-assignment10-server-lilac.vercel.app/watchlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watchlistData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("added watchlist successfully on database");
      })
      .catch((error) => {
        toast.success("not added watchlist on database");

      });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <Helmet>
        <title>Review Details Page || GameScope</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row gap-8 bg-base-100 shadow-xl p-6 rounded-lg">
        <div className="w-full h-auto lg:w-1/3">
          <img
            src={image}
            alt={title}
            className="w-full h-full  rounded-lg object-fit shadow-md"
          />
        </div>

        {/* Game Details */}
        <div className="w-full lg:w-2/3 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-[var(--text-color)] mb-4">{review}</p>
            <div className="mb-4">
              <p className="font-semibold">
                <span className="font-bold text-[var(--text-color)]">
                  Genre:
                </span>{" "}
                {genres}
              </p>
              <p className="font-semibold">
                <span className="font-bold text-[var(--text-color)]">
                  Rating:
                </span>{" "}
                {rating}/10⭐
              </p>
            </div>
            <div>
              <p className="text-[var(--text-color)] ">
                <span className="font-bold text-[var(--text-color)]">
                  Reviewed By:
                </span>{" "}
                {reviewer}
              </p>
              <p className="text-[var(--text-color)] ">
                <span className="font-bold text-[var(--text-color)]">
                  Reviewer Email:
                </span>{" "}
                {email}
              </p>
            </div>
          </div>

          {/* Add to Watchlist */}
          <button
            onClick={handleWatchList}
            className="btn bg-[#ADFF00] hover:bg-[#ADFF00] text-black md:font-bold mt-6 w-full lg:w-auto"
          >
            Add to WatchList
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsDetails;
