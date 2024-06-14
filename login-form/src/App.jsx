import { useState } from 'react'
import Login from "./Components/login";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import User from "./Components/User";
import Signup from './Components/signup';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <NavBar />
          <Login />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <NavBar />
          <Signup />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <NavBar />
          <About />
        </>
      ),
    },
    {
      path: "/user/:username",
      element: (
        <>
          <NavBar />
          <User />
        </>
      ),
    },
  ]);
  return (
    //navbar
    //carousel
    //footer
    <RouterProvider router={router} />
  );
}

export default App
