import ReactDOM from "react-dom/client";
import AppRouter from "./routes/index.jsx";
import { BrowserRouter as Router, RouterProvider } from "react-router-dom";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AppRouter />
  </Router>,
);
