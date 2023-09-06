import { createBrowserRouter } from "react-router-dom";
import { CallbackPage, LandingPage } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "callback",
        element: <CallbackPage />
    },
]);

export {router};