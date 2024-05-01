import { createBrowserRouter } from "react-router-dom"
import Login from "../Login"
import Browse from "./Browse"
import { RouterProvider } from "react-router-dom"
import Test from "./test"
import Log from "./log"

const Body = () => {
    const appRouter = createBrowserRouter([
{
    path: "/",
     element: <Login/>
},

{
  path: "/browse",
  element: <Browse/>
},
{
  path: "/test",
  element: <Test/>
},
{
  path:"/log",
  element:<Log/>
}

    ])
  return (
    <div classname=" bg-blue-600 .h-screen">
    
        <RouterProvider router={appRouter}/>
    </div>
  );
}

export default Body