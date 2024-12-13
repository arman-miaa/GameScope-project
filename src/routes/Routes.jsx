import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Header from "../components/Header";
import Home from "../pages/Home";
// import Users from "../pages/Users";
import Loing from "../pages/Loing";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/ErrorPage";
import AllReviews from "../Private/AllReviews";
import AddReview from "../Private/AddReview";
import MyReviews from "../Private/MyReviews";
// import GameWatchList from "../Private/GameWatchList";
import ReviewsDetails from "../Private/ReviewsDetails";
import UpdateReview from "../Private/UpdateReview";
import MyWatchList from "../Private/MyWatchList";
import Private from "../Private/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allReviews",
        element: <AllReviews></AllReviews>,
        loader: () =>
          fetch("https://ph-assignment10-server-lilac.vercel.app/reviews"),
      },
      {
        path: "addReview",
        element: (
          <Private>
            <AddReview></AddReview>
          </Private>
        ),
      },
      {
        path: "reviewsDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://ph-assignment10-server-lilac.vercel.app/reviews/${params.id}`
          ),
        element: (
          <Private>
            <ReviewsDetails></ReviewsDetails>
          </Private>
        ),
      },
      {
        path: "myReviews",
        element: (
          <Private>
            <MyReviews></MyReviews>
          </Private>
        ),
      },
      {
        path: "getReview/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(
            `https://ph-assignment10-server-lilac.vercel.app/getReview/${params.id}`
          ),
      },
      {
        path: "gameWatchList",
        element: (
          <Private>
            <MyWatchList></MyWatchList>
          </Private>
        ),
      },

      {
        path: "login",
        element: <Loing></Loing>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
