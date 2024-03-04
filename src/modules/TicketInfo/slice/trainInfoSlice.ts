import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getCoachList } from "../API/getCoachList"

const storedTicket = localStorage.getItem("train_info")
const ticketFromLocalStorage = storedTicket ? JSON.parse(storedTicket) : {}

interface ITrainInfoSlice {
  ticket: any
  coachListFrom: {
    list: []
    loading: boolean
    error: string
  }
  coachListTo: {
    list: []
    loading: boolean
    error: string
  }
}

const initialState: ITrainInfoSlice = {
  ticket: ticketFromLocalStorage,
  coachListFrom: {
    list: [],
    loading: false,
    error: "",
  },
  coachListTo: {
    list: [],
    loading: false,
    error: "",
  },
}

export const getCoachFrom = createAsyncThunk(
  "getCoachFrom",
  async (id: string) => {
    const response = await getCoachList(id)
    return response.data
  },
)

export const getCoachTo = createAsyncThunk("getCoachTo", async (id: string) => {
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
      .addCase(getCoachFrom.pending, state => {
        state.coachListFrom.loading = true
        state.coachListFrom.error = ""
      })
      .addCase(getCoachFrom.fulfilled, (state, action) => {
        state.coachListFrom.list = action.payload
        state.coachListFrom.loading = false
      })
      .addCase(getCoachFrom.rejected, (state, action) => {
        console.log("Error:", action.payload)
        state.coachListFrom.loading = false
      })

      .addCase(getCoachTo.pending, state => {
        state.coachListTo.loading = true
        state.coachListTo.error = ""
      })
      .addCase(getCoachTo.fulfilled, (state, action) => {
        state.coachListTo.list = action.payload
        state.coachListTo.loading = false
      })
      .addCase(getCoachTo.rejected, (state, action) => {
        console.log("Error:", action.payload)
        state.coachListTo.loading = false
      })
  },
})

export const { setTicket } = trainInfoSlice.actions
export default trainInfoSlice.reducer
