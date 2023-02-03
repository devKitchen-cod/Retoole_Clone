import { createBrowserRouter } from "react-router-dom";
import Page from "./Pages/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
]);
