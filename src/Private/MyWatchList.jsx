import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import Spinner from "../pages/Spinner";
import { Helmet } from "react-helmet";

const MyWatchList = () => {
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
  }, []);

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
    <section className="bg-[#1D1D1D] min-h-screen">
      {loader ? (
        <Spinner></Spinner>
      ) : (
        <div className="container mx-auto px-4 py-12">
          <Helmet>
            <title>My Watchlist Page || GameScope</title>
          </Helmet>
          <h2 className="text-3xl font-bold text-center mb-6 text-[#ADFF00]">
            My Watch List
          </h2>
          {watchLists.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-700 text-[#ADFF00] shadow-lg rounded-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white">
                    <th className="px-4 py-3 border border-gray-700 text-left">
                      #
                    </th>
                    <th className="px-4 py-3 border border-gray-700 text-left">
                      Image
                    </th>
                    <th className="px-4 py-3 border border-gray-700 text-left">
                      Name
                    </th>
                    <th className="px-4 py-3 border hidden md:flex border-gray-700 text-left">
                      Genres
                    </th>
                    <th className="px-4 py-3 border border-gray-700 text-left">
                      Rating
                    </th>
                    <th className="px-4 py-3 border border-gray-700 text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {watchLists.map((watchLists, index) => (
                    <tr
                      key={watchLists._id}
                      className={`border-t border-gray-700 ${
                        index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                      } hover:bg-gray-700`}
                    >
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3">
                        <img
                          className="w-14 h-14 rounded-full border border-gray-500"
                          src={watchLists.image}
                          alt={watchLists.title}
                        />
                      </td>
                      <td className="px-4 py-3">{watchLists.title}</td>
                      <td className="px-4 py-3 hidden  md:flex mt-4">
                        {watchLists.genres}
                      </td>
                      <td className="px-4 py-3">{watchLists.rating}/10</td>
                      <td className="px-4 py-3 flex flex-col items-center  md:flex-row space-x-2 space-y-2 md:space-y-0">
                        {/* <button className="w-20 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow">
                          Update
                        </button> */}
                        <button
                          onClick={() => {
                            handleRemoveWatchList(watchLists._id);
                          }}
                          className="w-20 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 shadow"
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
              No watchListss added yet.
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default MyWatchList;
