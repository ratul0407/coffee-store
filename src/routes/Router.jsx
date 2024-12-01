import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Users from "../components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://coffee-store-server-8629nprmk-ratuls-projects-4bca9837.vercel.app/coffee"
          ),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-8629nprmk-ratuls-projects-4bca9837.vercel.app/coffee/${params.id}`
          ),
      },
    ],
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "users",
    element: <Users />,
    loader: () =>
      fetch(
        "https://coffee-store-server-8629nprmk-ratuls-projects-4bca9837.vercel.app/users"
      ),
  },
]);
export default router;
