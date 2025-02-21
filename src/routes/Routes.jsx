import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Main from "../layout/Main";
import DashBoard from "../pages/homepage/DashBoard";
import AddMyCar from "../pages/addcar/AddMyCar";
import UserMessage from "../pages/usermessage/UserMessage";
import UserProfile from "../pages/UserProfile";
import MyCarList from "../pages/mycarlist/MyCarList";
import CarDetails from "../pages/cardetailspage/CarDetails";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/add-my-car",
        element: <AddMyCar />,
      },
      {
        path: "/user-messages",
        element: <UserMessage />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/my-car-list",
        element: <MyCarList />,
      },
      {
        path: "/car-details",
        element: <CarDetails />,
      },
    ],
  },
]);
