import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import {
  ConfirmationOrder,
  FilterTickets,
  FormSearchTickets,
  LastTickets,
  ListTickets,
} from "@modules"
import { trainInfoSlice } from "../modules/TrainInfo"
import passengerSlice from "../modules/PassengerRegistration/slice/passengerSlice"

export const store = configureStore({
  reducer: {
    searchTickets: FormSearchTickets.searchTickets.reducer,
    filterTickets: FilterTickets.filterTicketsSlice.reducer,
    listTickets: ListTickets.listTicketsSlice.reducer,
    trainInfo: trainInfoSlice,
    passengerRegistration: passengerSlice,
    payOrder: ConfirmationOrder.paySlice,
    lastTickets: LastTickets.lastTicketsSlice
  },
})

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
