import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { IFilterTickets } from "@interface"



const initialState: IFilterTickets = {
    from_city_id: '',
    to_city_id : '',
}

export const filterTicketsSlice = createSlice({
  name: "filterTickets",
  initialState,
  reducers: {
    setFilter: (state: any, action) => {
        state[action.payload.name] = action.payload.value
    },
  },
})

export const { setFilter } = filterTicketsSlice.actions
export default filterTicketsSlice.reducer
