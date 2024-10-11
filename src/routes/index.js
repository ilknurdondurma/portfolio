import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import { Layout } from "../layout";
import {ScrollToTop} from './scroll'
import Educate from "../pages/educate";
import Work from "../pages/work";
import Project from "../pages/project";
import Language from "../pages/language";
import Hobbies from "../pages/hobies";
import Footer from "../layout/footer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop/>
        <Layout/>
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      
    ],
  },
]);

export default routes;
