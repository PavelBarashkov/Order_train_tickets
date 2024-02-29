import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { ICity } from "@interface"
import { getTickets } from "../API/getTickets"

interface IListTicketsSlice {
  tickets: []
  offset: number
  activePage: number
  loading: boolean
  total_count: number
  error: string
}
export const getTicket = createAsyncThunk(
  "getTickets",
  async (params: string) => {
    const response = await getTickets(params)
    return response.data
  },
)

const initialState: IListTicketsSlice = {
  tickets: [],
  offset: 0,
  activePage: 1,
  loading: false,
  error: "",
  total_count: 0,
}

export const listTicketsSlice = createSlice({
  name: "listTicketsSlice",
  initialState,
  reducers: {
    setOffset: (state, action) => {
      state.offset = action.payload
    },
 
  },
  extraReducers: builder => {
    builder
      .addCase(getTicket.pending, state => {
        state.loading = true
        state.error = ""
      })
      .addCase(getTicket.fulfilled, (state, action) => {
        state.total_count = action.payload.total_count
        state.tickets = action.payload.items
        state.loading = false
      })
      .addCase(getTicket.rejected, (state, action) => {
        console.log("Error:", action.payload)
        state.loading = false
      })
  },
})

export const { setOffset } = listTicketsSlice.actions
export default listTicketsSlice.reducer
