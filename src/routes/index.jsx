import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "../Pages"
import Layouts from "../Layouts";

const routes = createBrowserRouter([

    {
        path: "/",
        element: <Layouts />,
        children: [
            {
                index: true,
                path: "",
                element: <HomePage />
            },
            {

                path: "register",
                element: <RegisterPage />
            },

            {

                path: "login",
                element: <LoginPage />
            },



        ]
    }
])


export default routes
