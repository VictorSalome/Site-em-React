import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./Styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";

import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
