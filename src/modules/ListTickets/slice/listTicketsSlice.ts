import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { ICity } from "@interface"
import { getTickets } from "../API/getTickets"

interface IListTicketsSlice {
  tickets: []
  total_count: number

}
export const getTicket = createAsyncThunk("getTickets", async (params: string) => {
  const response = await getTickets(params)
  console.log(response)
  return response.data
})

const initialState: IListTicketsSlice = {
  tickets: [],
  total_count: 0
}

export const listTicketsSlice = createSlice({
  name: "listTicketsSlice",
  initialState,
  reducers: {
  
  },
  extraReducers: builder => {
    builder.addCase(getTicket.fulfilled, (state, action) => {
      state.total_count = action.payload.total_count
    })
  },
})

export const {  } = listTicketsSlice.actions
export default listTicketsSlice.reducer
