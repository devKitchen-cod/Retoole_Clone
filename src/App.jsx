import { Box } from "@mui/material";
import { height } from "@mui/system";
import { RouterProvider } from "react-router-dom";
// import './App.css'
import styles from "./App.module.scss";
import { router } from "./routing";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
