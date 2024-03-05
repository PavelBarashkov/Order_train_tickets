import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import { FilterTickets, FormSearchTickets, ListTickets } from "@modules"
import { trainInfoSlice } from "../modules/TrainInfo"

export const store = configureStore({
  reducer: {
    searchTickets: FormSearchTickets.searchTickets.reducer,
    filterTickets: FilterTickets.filterTicketsSlice.reducer,
    listTickets: ListTickets.listTicketsSlice.reducer,
    trainInfo: trainInfoSlice
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
