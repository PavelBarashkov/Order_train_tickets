import { Main } from "../../Main";
import { OrderTickets } from "../../OrderTickets";
import { MAIN_ROUTE, TICKETS_ROUTE } from "../const/const";

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
        path: TICKETS_ROUTE,
        element: <OrderTickets/> 
    },
    {
        path: '/*',
        element: <Main/>
    }
]