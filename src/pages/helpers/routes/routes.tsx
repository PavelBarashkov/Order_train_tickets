import { Main } from "../../Main";
import { MAIN_ROUTE } from "../const/const";

interface Path {
    path: string;
    element: React.ReactNode
}

export const publicRoutes: Path[] = [
    {
        path: MAIN_ROUTE,
        element: <Main/> 
    },
    {
        path: '/*',
        element: <Main/>
    }
]