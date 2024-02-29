import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getCoachList } from "../API/getCoachList"

const storedTicket = localStorage.getItem("train_info")
const ticketFromLocalStorage = storedTicket ? JSON.parse(storedTicket) : {}

interface ITrainInfoSlice {
  ticket: any
  coachList: []
  loading: boolean
  error: string
}

const initialState: ITrainInfoSlice = {
  ticket: ticketFromLocalStorage,
  coachList: [],
  loading: false,
  error: "",
}

export const getCoach = createAsyncThunk("getTickets", async (id: string) => {
  const response = await getCoachList(id)
  return response.data
})

export const trainInfoSlice = createSlice({
  name: "listTicketsSlice",
  initialState,
  reducers: {
    setTicket: (state, action) => {
      state.ticket = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCoach.pending, state => {
        state.loading = true
        state.error = ""
      })
      .addCase(getCoach.fulfilled, (state, action) => {
        state.coachList = action.payload
        state.loading = false
      })
      .addCase(getCoach.rejected, (state, action) => {
        console.log("Error:", action.payload)
        state.loading = false
      })
  },
})

export const { setTicket } = trainInfoSlice.actions
export default trainInfoSlice.reducer
