import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Body from "./components/Body.jsx";
import "./app.css"
// import Restaurant from "./pages/Restaurant.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";

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
        path:"/contact",
        element:<Contact/>
      },      
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      // errorElement:
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
