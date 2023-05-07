
import App from './App';
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Dog from './pages/Details.jsx';

const app = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/:collectionName",
    element: <Dog/>,
  },
  

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={app} />
  </React.StrictMode>
);

