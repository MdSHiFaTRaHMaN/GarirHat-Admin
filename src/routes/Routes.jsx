import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Main from "../layout/Main";
import DashBoard from "../pages/DashBoard";
import AllVehicleList from "../pages/AllVehicleList";
import ShowAllBrand from "../pages/brand/ShowAllBrand";
import BrandRequest from "../pages/brand/BrandRequest";
import ShowAllModel from "../pages/model/ShowAllModel";
import ShowAllFeature from "../pages/feature/ShowAllFeature";
import VendorList from "../pages/vendor/VendorList";
import UserList from "../pages/user/UserList";
import AboutUs from "../pages/settings/AboutUs";
import CarDetails from "../pages/vehicleDetails/CarDetails";
import Test from "../pages/Test";
import ModelRequest from "../pages/model/ModelRequest";

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
        path: "/all-vehicles",
        element: <AllVehicleList />,
      },
      {
        path: "/brand",
        element: <ShowAllBrand />,
      },
      {
        path: "/brand-request",
        element: <BrandRequest />,
      },
      {
        path: "/model",
        element: <ShowAllModel />,
      },
      {
        path: "/model-request",
        element: <ModelRequest />
      },
      {
        path: "/feature",
        element: <ShowAllFeature />
      },
      {
        path: "/vendor-list",
        element: <VendorList />
      },
      {
        path: "/user-list",
        element: <UserList />
      },
      {
        path: "/:settings",
        element: <AboutUs />
      },
      {
        path: "/Vehicle-details/:vehicleID",
        element: <CarDetails />
      },
      {
        path: "/test",
        element: <Test />
      }
    ],
  },
]);
