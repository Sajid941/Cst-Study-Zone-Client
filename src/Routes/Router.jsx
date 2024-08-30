import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomeWork from "../pages/HomeWork/HomeWork";
import SuggestionPage from "../pages/SuggestionPage/SuggestionPage";

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
                },
                {
                    path:'/homeWork',
                    element:<HomeWork/>
                },
                {
                    path:'/suggestion',
                    element:<SuggestionPage/>
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