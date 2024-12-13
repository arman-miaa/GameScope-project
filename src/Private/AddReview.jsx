import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet";

const AddReview = () => {
  const { users } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const review = form.review.value;
    const rating = parseFloat(form.rating.value);
    const year = form.year.value;
    const genres = form.genres.value;
    const email = form.email.value;
    const name = form.name.value;

    const newReview = {
      image,
      title,
      review,
      rating,
      year,
      genres,
      email,
      name,
      userId: users?.uid,
    };

    fetch("https://ph-assignment10-server-lilac.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("review added successfully");
        form.reset();
      })
      .catch((error) => {
        toast.error("failed to add review");
        form.reset();
      });
  };

  return (
    <div className="min-h-screen bg-[#1D1D1D] text-white flex items-center justify-center py-12 px-4">
      <Helmet>
        <title>Add Review Page || GameScope</title>
      </Helmet>
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center text-[#ADFF00] mb-6">
          Add New Review
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Game Cover Image */}
          <div>
            <label
              htmlFor="coverImage"
              className="block text-sm font-medium text-[#ADFF00] mb-2"
            >
              Game Cover Image/Thumbnail
            </label>
            <input
              type="url"
              id="coverImage"
              name="image"
              required
              placeholder="Enter image URL"
              className="w-full border border-gray-500 bg-[#1D1D1D] text-white rounded-lg p-2 focus:border-[#ADFF00] focus:ring-[#ADFF00]"
            />
          </div>

          {/* Game Title */}
          <div>
            <label
              htmlFor="gameTitle"
              className="block text-sm font-medium text-[#ADFF00] mb-2"
            >
              Game Title/Name
            </label>
            <input
              type="text"
              id="gameTitle"
              name="title"
              required
              placeholder="Enter game title"
              className="w-full border border-gray-500 bg-[#1D1D1D] text-white rounded-lg p-2 focus:border-[#ADFF00] focus:ring-[#ADFF00]"
            />
          </div>

          {/* Review Description */}
          <div className="md:col-span-2">
            <label
              htmlFor="reviewDescription"
              className="block text-sm font-medium text-[#ADFF00] mb-2"
            >
              Review Description
            </label>
            <textarea
              id="reviewDescription"
              name="review"
              rows="4"
              required
              placeholder="Write your review here..."
              className="w-full border resize-none border-gray-500 bg-[#1D1D1D] text-white rounded-lg p-2 focus:border-[#ADFF00] focus:ring-[#ADFF00]"
            ></textarea>
          </div>

          {/* Rating */}
          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-[#ADFF00] mb-2"
            >
              Rating (1-10)
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="1"
              max="10"
              required
              placeholder="Enter rating (1-10)"
              className="w-full border border-gray-500 bg-[#1D1D1D] text-white rounded-lg p-2 focus:border-[#ADFF00] focus:ring-[#ADFF00]"
            />
          </div>

          {/* Publishing Year */}
          <div>
            <label
              htmlFor="publishingYear"
              className="block text-sm font-medium text-[#ADFF00] mb-2"
            >
              Publishing Year
            </label>
            <input
              type="number"
              id="publishingYear"
              name="year"
              min="1990"
              max="2024"
              required
              placeholder="Enter year (e.g., 2024)"
              className="w-full border border-gray-500 bg-[#1D1D1D] text-white rounded-lg p-2 focus:border-[#ADFF00] focus:ring-[#ADFF00]"
            />
          </div>

          {/* Genres */}
          <div>
            <label
              htmlFor="genres"
              className="block text-sm font-medium text-[#ADFF00] mb-2"
            >
              Genres
            </label>
            <select
              id="genres"
              name="genres"
              className="w-full border border-gray-500 bg-[#1D1D1D] text-white rounded-lg p-2 focus:border-[#ADFF00] focus:ring-[#ADFF00]"
            >
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
            </select>
          </div>

          {/* User Email */}
          <div>
            <label
              htmlFor="userEmail"
              className="block text-sm font-medium text-[#ADFF00] mb-2"
            >
              User Email
            </label>
            <input
              type="email"
              id="userEmail"
              name="email"
              value={users?.email || "exampl@gmail.com"}
              readOnly
              className="w-full border border-gray-500 bg-[#1D1D1D] text-gray-400 rounded-lg p-2 cursor-not-allowed"
            />
          </div>

          {/* User Name */}
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-[#ADFF00] mb-2"
            >
              User Name
            </label>
            <input
              type="text"
              id="userName"
              name="name"
              defaultValue={users?.displayName || "user name"}
              readOnly
              className="w-full border border-gray-500 bg-[#1D1D1D] text-gray-400 rounded-lg p-2 cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-[#ADFF00] text-[#1D1D1D] font-bold py-2 px-4 rounded-lg hover:bg-[#1D1D1D] hover:text-[#ADFF00] border border-[#ADFF00] transition"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
