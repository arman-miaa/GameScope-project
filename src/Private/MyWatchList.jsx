import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import Spinner from "../pages/Spinner";
import { Helmet } from "react-helmet";
import { useTheme } from "../provider/ThemeProvider ";

const MyWatchList = () => {
  const { theme } = useTheme();
  const { users } = useContext(AuthContext);
  const [watchLists, setWatchLists] = useState([]);
  const [loader, setLoader] = useState(true);

  const email = users.email;

  useEffect(() => {
    fetch(
      `https://ph-assignment10-server-lilac.vercel.app/mywatchlist?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWatchLists(data);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
      });
  }, [email]);

  const handleRemoveWatchList = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://ph-assignment10-server-lilac.vercel.app/removemywatchlist/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const remaining = watchLists.filter(
              (watchList) => watchList._id !== id
            );
            setWatchLists(remaining);
          });
      }
    });
  };

  return (
    <section
      className={`${
        theme === "dark" ? "bg-[#1D1D1D] text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      {loader ? (
        <Spinner />
      ) : (
        <div className="container mx-auto px-4 py-12">
          <Helmet>
            <title>My Watchlist Page || GameScope</title>
          </Helmet>
          <h2 className="text-3xl text-[var(--highlight)] font-bold text-center mb-6">
            My Watch List
          </h2>
          {watchLists.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse text-sm">
                <thead>
                  <tr
                    className={`${
                      theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    <th className="px-4 py-3 border border-gray-700">#</th>
                    <th className="px-4 py-3 border border-gray-700">Image</th>
                    <th className="px-4 py-3 border border-gray-700">Name</th>
                    <th className="px-4 py-3 border hidden md:flex border-gray-700">
                      Genres
                    </th>
                    <th className="px-4 py-3 border border-gray-700">Rating</th>
                    <th className="px-4 py-3 border border-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {watchLists.map((watchList, index) => (
                    <tr
                      key={watchList._id}
                      className={`${
                        index % 2 === 0
                          ? theme === "dark"
                            ? "bg-gray-900 hover:bg-gray-700"
                            : "bg-gray-100 hover:bg-gray-300"
                          : theme === "dark"
                          ? "bg-gray-800 hover:bg-gray-700"
                          : "bg-white hover:bg-gray-300"
                      } `}
                    >
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3">
                        <img
                          className="w-14 h-14 rounded-full border border-gray-500"
                          src={watchList.image}
                          alt={watchList.title}
                        />
                      </td>
                      <td className="px-4 py-3">{watchList.title}</td>
                      <td className="px-4 py-3 hidden md:flex mt-4">
                        {watchList.genres}
                      </td>
                      <td className="px-4 py-3">{watchList.rating}/10</td>
                      <td className="px-4 py-3 flex flex-col items-center md:flex-row space-x-2 space-y-2 md:space-y-0">
                        <button
                          onClick={() => {
                            handleRemoveWatchList(watchList._id);
                          }}
                          className={`${
                            theme === "dark" ? "bg-red-500" : "bg-red-600"
                          } w-20 py-2 text-sm text-white rounded-lg hover:bg-red-700 shadow`}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-400 mt-4">
              No watchlists added yet.
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default MyWatchList;
