import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Course from "./pages/Course";
import About from "./pages/About";
import Notfound from "./pages/Notfound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },

        {
          path: "/student",
          element: <Students />,
        },

        {
          path: "/course",
          element: <Course />,
        },

        {
          path: "/about",
          element: <About />,
        },

        {
          path: "*",
          element: <Notfound />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
