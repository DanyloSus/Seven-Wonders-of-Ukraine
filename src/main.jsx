import { createRoot } from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import App from './App';
import ErrorPage from './roots/ErrorPage';
import AttPage from "./roots/Att";
import { ROUTES } from "./routes";
import { fetchIdByRouted } from './fetchId';
import MainPage from './roots/MainPage';

const router = createBrowserRouter([
    {
        path: ROUTES.atts,
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: ROUTES.att,
                element: <AttPage />,
                loader: fetchIdByRouted
            }
        ]
    }
])

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<RouterProvider router={router} />)
