import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import Statistics from "./Components/Statistics/Statistics";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import JobsDatles from "./Components/Statistics/FeaturedJobs/FeaturedJob/JobsDatles/JobsDatles";
import AllJobs from "./Components/AllJobs/AllJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Statistics></Statistics>
      },
      {
        path:"/job/:id",
        element: <JobsDatles></JobsDatles>,
        loader: ()=> fetch("../public/jobs.json")
      },
      {
        path: "/AllJobs",
        element: <AllJobs></AllJobs>,
        loader: ()=>fetch("jobs.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);