import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Studentdata from "./pages/Studentdata";
import Contact from "./pages/Contact";
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
          element: <Studentdata />,
        },

        {
          path: "/about",
          element: <About />,
        },

        {
          path: "/contact",
          element: <Contact />,
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
