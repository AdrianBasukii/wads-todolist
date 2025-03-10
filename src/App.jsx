import {Navigate,RouterProvider,createBrowserRouter,} from "react-router-dom"
import Homepage from "./pages/Homepage.jsx"
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" replace/>,
    },
    {
      path: "/home",
      element: <Homepage/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/todolist",
      element: <></>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
