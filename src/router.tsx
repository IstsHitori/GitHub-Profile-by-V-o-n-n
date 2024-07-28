import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import SearchProfile from "./views/SearchProfile";
import { action as searchUserGithub } from "./components/Header";
import { loader as loaderSearchProfile } from "./views/SearchProfile";
export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        action:searchUserGithub,
        children:[
            {
                path:"profile/:name",
                element:<SearchProfile />,
                loader:loaderSearchProfile
            }
        ],
    }
])