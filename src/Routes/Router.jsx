import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";

const router = createBrowserRouter (
    [
        {
            path:'/',
            element:<Root/>,
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