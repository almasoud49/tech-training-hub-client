import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category";
import Course from "../../Pages/Course/Course";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Blog from "../../Pages/Others/Blog/Blog";
import FAQ from "../../Pages/Others/FAQ/FAQ";
import ToggleTheme from "../../Pages/Others/ToggleTheme/ToggleTheme";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('https://tech-training-hub-server-almasoud49.vercel.app/courses')
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`https://tech-training-hub-server-almasoud49.vercel.app/category/${params.id}`)
            },
            {
                path:'/course/:id',
                element:<PrivateRoute><Course></Course></PrivateRoute>,
                loader:({params}) =>fetch(`https://tech-training-hub-server-almasoud49.vercel.app/course/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/toggle',
                element:<ToggleTheme></ToggleTheme>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])