import {
  CONFIRMATION_ORDER_ROUTE,
  MAIN_ROUTE,
  PASSENGER_ROUTER,
  PAYMENT_ORDER_ROUTE,
  SUCCESS_ORDER_ROUTE,
  TICKET_ROUTE,
  TRAIN_INFO_ROUTER,
} from "../const/const"
import {
  ConfirmationPage,
  MainPage,
  PassengerPage,
  PaymentPage,
  SuccessPage,
  TicketPage,
  TrainInfoPage,
} from "@pages"

interface Path {
  path: string
  element: React.ReactNode
}

export const publicRoutes: Path[] = [
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
  },
  {
    path: TICKET_ROUTE,
    element: <TicketPage />,
  },
  {
    path: TRAIN_INFO_ROUTER + "/:id",
    element: <TrainInfoPage />,
  },
  {
    path: PASSENGER_ROUTER,
    element: <PassengerPage />,
  },
  {
    path: PAYMENT_ORDER_ROUTE,
    element: <PaymentPage />,
  },
  {
    path: CONFIRMATION_ORDER_ROUTE,
    element: <ConfirmationPage />,
  },
  {
    path: SUCCESS_ORDER_ROUTE,
    element: <SuccessPage />,
  },
  {
    path: "/*",
    element: <MainPage />,
  },
]
