import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getLast } from "../API/getLast"


export const getLastTickets = createAsyncThunk(
  "getLastTickets",
  async () => {
    const response = await getLast()
    return response.data
  },
)

const initialState = {
  tickets: [],
  loading: false,
  error: "",
}

export const listTicketsSlice = createSlice({
  name: "listTicketsSlice",
  initialState,
  reducers: {
 
  },
  extraReducers: builder => {
    builder
      .addCase(getLastTickets.pending, state => {
        state.loading = true
        state.error = ""
      })
      .addCase(getLastTickets.fulfilled, (state, action) => {
        state.tickets = action.payload
        state.loading = false
        if (action.payload.error) {
          state.error = 'Ошибка'
        }
      })
      .addCase(getLastTickets.rejected, (state, action) => {
        console.log("Error:", action.payload)
        state.loading = false
      })
  },
})

export const {} = listTicketsSlice.actions
export default listTicketsSlice.reducer
