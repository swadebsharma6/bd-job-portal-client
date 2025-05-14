import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/AuthPages/SignUp";
import SignIn from "../Pages/AuthPages/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../Pages/JobDetails/JobApply";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<p>Route Not Found</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/jobs/:id',
        element: <PrivetRoute><JobDetails/></PrivetRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: '/jobApply/:id',
        element: <PrivetRoute><JobApply/></PrivetRoute>,
       
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
