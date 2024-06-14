import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import './App.css'
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Card />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <NavBar />
          <Login />
          <Footer />
        </>
      ),
    },
    {
      path: "/card",
      element: (
        <>
          <Card />
        </>
      ),
    },

  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
