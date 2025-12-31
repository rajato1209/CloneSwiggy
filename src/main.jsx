import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Body from "./components/Body.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // errorElement:
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
