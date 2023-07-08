import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import NotFound from "../page/NotFound/NotFound"
import Home from "../page/Home/Home"
import Login from "../page/Login/Login"
const routers = createBrowserRouter([
  {
    path:"/",
    element:<App></App>
  },
  {
    path:"/home",
    element:<Home></Home>
  },
  {
    path:"*",
    element:<NotFound/>
  },
  {
    path:"/login",
    element:<Login></Login>
  }
])
export default routers