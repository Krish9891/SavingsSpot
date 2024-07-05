import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import DealDetails from "../../features/catalog/DealDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";

export const router = createBrowserRouter([
{
    path:'/',
    element: <App />,
    children:[
        {path:'',element:<HomePage/>},
        {path:'catalog',element:<Catalog/>},
        {path:'catalog/:dealId',element:<DealDetails/>},
        {path:'about',element:<AboutPage/>},
        {path:'contact',element:<ContactPage/>},
    ]

}
])