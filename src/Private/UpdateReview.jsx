import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useTheme } from "../provider/ThemeProvider ";

const UpdateReview = () => {
      const { theme } = useTheme();
  
  const reviewfoUpdate = useLoaderData();
  const { _id, image, title, review, rating, year, genres, email, name } =
    reviewfoUpdate;

  const navigate = useNavigate();
  const handleUpdate = (e) => {
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

    const updateReview = {
      image,
      title,
      review,
      rating,
      year,
      genres,
      email,
      name,
    };

    fetch(
      `https://ph-assignment10-server-lilac.vercel.app/updateReview/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Review Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/myReviews");
      })
      .catch((error) => {
      });
  };

  return (
    <div>
      <Helmet>
        <title>Update Review Page || GameScope</title>
      </Helmet>
      <div
        className={`${
          theme === "dark" ? "bg-[#1D1D1D]" : "bg-gray-200"
        } min-h-screen   text-white flex items-center justify-center py-12 px-4`}
      >
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl font-bold text-center text-[var(--highlight)] mb-6">
            Update Your Previously Review
          </h2>
          <form
            onSubmit={handleUpdate}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Game Cover Image */}
            <div>
              <label
                htmlFor="coverImage"
                className="block text-sm font-medium text-[var(--highlight)] mb-2"
              >
                Game Cover Image/Thumbnail
              </label>
              <input
                type="url"
                id="coverImage"
                name="image"
                defaultValue={reviewfoUpdate.image}
                required
                placeholder="Enter image URL"
                className="w-full border border-gray-500 bg-[var(--bg-color)] text-[var(--text-color)] rounded-lg p-2 focus:border-[#ADFF00] focus:ring-[#ADFF00]"
              />
            </div>

            {/* Game Title */}
            <div>
              <label
                htmlFor="gameTitle"
                className="block text-sm font-medium text-[var(--highlight)] mb-2"
              >
                Game Title/Name
              </label>
              <input
                type="text"
                id="gameTitle"
                name="title"
                defaultValue={reviewfoUpdate.title}
                required
                placeholder="Enter game title"
                className="w-full border border-gray-500 bg-[var(--bg-color)] text-[var(--text-color)] rounded-lg p-2 focus:border-[#ADFF00] focus:ring-[#ADFF00]"
              />
            </div>

            {/* Review Description */}
            <div className="md:col-span-2">
              <label
                htmlFor="reviewDescription"
                className="block text-sm font-medium text-[var(--highlight)] mb-2"
              >
                Review Description
              </label>
              <textarea
                id="reviewDescription"
                name="review"
                defaultValue={reviewfoUpdate.review}
                rows="4"
                required
                placeholder="Write your review here..."
                className="w-full border resize-none border-gray-500 bg-[var(--bg-color)] text-[var(--text-color)] rounded-lg p-2 focus:border-[#ADFF00] focus:ring-[#ADFF00]"
              ></textarea>
            </div>

            {/* Rating */}
            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-[var(--highlight)] mb-2"
              >
                Rating (1-10)
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                defaultValue={reviewfoUpdate.rating}
                min="1"
                max="10"
                required
                placeholder="Enter rating (1-10)"
                className="w-full border border-gray-500 bg-[var(--bg-color)] text-[var(--text-color)] rounded-lg p-2 focus:border-[#ADFF00] focus:ring-[#ADFF00]"
              />
            </div>

            {/* Publishing Year */}
            <div>
              <label
                htmlFor="publishingYear"
                className="block text-sm font-medium text-[var(--highlight)] mb-2"
              >
                Publishing Year
              </label>
              <input
                type="number"
                id="publishingYear"
                name="year"
                defaultValue={reviewfoUpdate.year}
                min="1990"
                max="2024"
                required
                placeholder="Enter year (e.g., 2024)"
                className="w-full border border-gray-500 bg-[var(--bg-color)] text-[var(--text-color)] rounded-lg p-2 focus:border-[#ADFF00] focus:ring-[#ADFF00]"
              />
            </div>

            {/* Genres */}
            <div>
              <label
                htmlFor="genres"
                className="block text-sm font-medium text-[var(--highlight)] mb-2"
              >
                Genres
              </label>
              <select
                id="genres"
                name="genres"
                defaultValue={reviewfoUpdate.genres}
                className="w-full border border-gray-500 bg-[var(--bg-color)] text-[var(--text-color)] rounded-lg p-2 focus:border-[#ADFF00] focus:ring-[#ADFF00]"
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
                className="block text-sm font-medium text-[var(--highlight)] mb-2"
              >
                User Email
              </label>
              <input
                type="email"
                id="userEmail"
                name="email"
                value={reviewfoUpdate?.email || "exampl@gmail.com"}
                readOnly
                className="w-full border border-gray-500 bg-[var(--bg-color)] text-[var(--text-color)] rounded-lg p-2 cursor-not-allowed"
              />
            </div>

            {/* User Name */}
            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-[var(--highlight)] mb-2"
              >
                User Name
              </label>
              <input
                type="text"
                id="userName"
                name="name"
                defaultValue={reviewfoUpdate?.name || "user name"}
                readOnly
                className="w-full border border-gray-500 bg-[var(--bg-color)] text-[var(--text-color)] rounded-lg p-2 cursor-not-allowed"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-[#ADFF00] text-[#1D1D1D] font-bold py-2 px-4 rounded-lg hover:bg-[#1D1D1D] hover:text-[#ADFF00] border border-[#ADFF00] transition"
              >
                Update Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
