import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {route} from "./Route/Route.tsx";

createRoot(document.getElementById('root')!).render(<RouterProvider router={route}/>);
