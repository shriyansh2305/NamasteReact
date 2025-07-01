import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";
// import Grocery from "./components/Grocery.js";

// Chunking/ Code Splitting/ Dynamic Bundling/ lazy Loading/ On-demand Loading/ dynamic import
const Grocery = lazy(() => import("./components/Grocery.js"));
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Elon Musk",
    };
    setUserName(data.name);
  }, []);
  return (
    // Default Value
    <UserContext.Provider value={{ loggedInUser: userName }}>
      {/* Elon Musk */}
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: "Bagar Billa" }}>
          {/* Bagar Billa */}
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
