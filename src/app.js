import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet, data } from "react-router";
import Contact from "./components/contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import './index.css'
import UserContext from "./Util/UserContext";
import { Provider } from "react-redux";
import appStore from "./Util/appStore";
import Cart from "./components/Cart2";
// import Crosaury from "./components/Crosaury";


console.log("working");
//  console.log(resObj[0].info.name)
const root = ReactDOM.createRoot(document.getElementById("root"));


const Crosaury = lazy(()=>import("./components/Crosaury"))
const App = () => {
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{username:"Pruthvi"}} >
    <div className="App">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
       {
        path: "/crosaury",
        element: <Suspense> <Crosaury />,</Suspense>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:ResId",
        element: <ResturantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      
    ],
   
  },
]);
// root.render(<About/>)
root.render(<RouterProvider router={appRouter} />);
