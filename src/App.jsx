import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AppLayout from "./AppLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/contact',
          element: <Contact/>
        }
    
      ]
    },
    {
      path: '/register',
      element: <Register/>
    },
    {
      path: '/login',
      element: <Login/>
    }
  ])

  return (
    <RouterProvider router={router} />
  );
};

export default App;
