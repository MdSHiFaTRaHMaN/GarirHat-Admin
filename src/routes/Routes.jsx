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
import RequestVehicleFeature from "../pages/feature/RequestVehicleFeature";
import VendorDetails from "../pages/vendor/VendorDetails";
import ShowAllDivition from "../pages/location/ShowAllDivition";
import SingleUserInfo from "../pages/user/SingleUserInfo";
import PriceReason from "../pages/pricereason/PriceReason";

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
        path: "/request-feature",
        element: <RequestVehicleFeature />
      },
      {
        path: "/vendor-list",
        element: <VendorList />
      },
      {
        path: "/vendor-details/:vendorId",
        element: <VendorDetails />
      },
      {
        path: "/user-list",
        element: <UserList />
      },
      {
        path: "/divition-bd",
        element: <ShowAllDivition />
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
        path: "/user-info/:userId",
        element: <SingleUserInfo />
      },
      {
        path: "/price-reason",
        element: <PriceReason />
      },
      {
        path: "/test",
        element: <Test />
      }
    ],
  },
]);
