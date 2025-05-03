import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../page/Home";
import CetegoryNews from "../page/CetegoryNews";
import Login from "../page/Login";
import Register from "../page/Register";
import Auth from "../Layout/Auth";
import DetailsNews from "../page/DetailsNews";
import PrivetRouter from "../Provider/PrivetRouter";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/cetegory/:id',
                element:<CetegoryNews></CetegoryNews>,
                loader:()=>fetch('/news.json')
            },
        ]
    },
    {
        path:'/auth', 
        element:<Auth></Auth>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>,
            },
            {
              path:'/auth/register',
              element:<Register></Register> ,
            }
        ]
    },
    {
        path:'/news-detail/:id',
        element:<PrivetRouter>
            <DetailsNews></DetailsNews>
        </PrivetRouter> ,
        loader:()=>fetch('/news.json'),
    },
    {
        path:'/*',
        element:<h2>error 402 not page found </h2>
    }

])

export default Router;