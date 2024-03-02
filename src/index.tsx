import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import Experience from "./pages/Experience/Experience";
import theme from "./theme";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-me",
    element: <AboutMe />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
