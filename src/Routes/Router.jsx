import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter (
    [
        {
            path:'/',
            element:<Root/>,
            errorElement:<ErrorPage/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                }
            ]
        },
        // Auth Related
        {
            path:'signUp',
            element:<SignUp/>
        },
        {
            path:'signIn',
            element:<SignIn/>
        }
    ]
)

export default router