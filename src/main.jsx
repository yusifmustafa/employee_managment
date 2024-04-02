import ReactDOM from "react-dom/client";
import "./global.css";
import Layout from "./layout/Layout.jsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Layout />
  </Router>,
);
