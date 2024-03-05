import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getCoachList } from "../API/getCoachList"

const storedTicket = localStorage.getItem("train_info")
const ticketFromLocalStorage = storedTicket ? JSON.parse(storedTicket) : {}

interface Seat {
  coach_id: string
  seat_number: string
  cost: number
}

interface ITrainInfoSlice {
  ticket: any
  coachListFrom: {
    list: []
    selected: {
      route_direction_id: string
      seats: Seat[]
      cost: number
    }

    loading: boolean
    error: string
  }
  coachListTo: {
    list: []
    selected: {
      route_direction_id: string
      seats: Seat[]
      cost: number
    }
    loading: boolean
    error: string
  }
}

const initialState: ITrainInfoSlice = {
  ticket: ticketFromLocalStorage,
  coachListFrom: {
    list: [],
    selected: {
      route_direction_id: "",
      seats: [],
      cost: 0,
    },
    loading: false,
    error: "",
  },
  coachListTo: {
    list: [],
    selected: {
      route_direction_id: "",
      seats: [],
      cost: 0,
    },
    loading: false,
    error: "",
  },
}

export const getCoachFrom = createAsyncThunk(
  "getCoachFrom",
  async (params: any) => {
    const response = await getCoachList(params)
    return response.data
  },
)

export const getCoachTo = createAsyncThunk(
  "getCoachTo",
  async (params: any) => {
    const response = await getCoachList(params)
    return response.data
  },
)

export const trainInfoSlice = createSlice({
  name: "listTicketsSlice",
  initialState,
  reducers: {
    setTicket: (state, action) => {
      state.ticket = action.payload
    },
    setSelectedSeatFrom: (state, action) => {
      const { id, number, price } = action.payload

      const existingIndex = state.coachListFrom.selected.seats.findIndex(
        seat => seat.seat_number === number && seat.coach_id === id,
      )

      if (existingIndex !== -1) {
        state.coachListFrom.selected.seats.splice(existingIndex, 1)
      } else {
        state.coachListFrom.selected.seats.push({
          coach_id: id,
          seat_number: number,
          cost: price,
        })
      }
    },
    setSelectedSeatTo: (state, action) => {
      const { id, number, price } = action.payload

      const existingIndex = state.coachListTo.selected.seats.findIndex(
        seat => seat.seat_number === number && seat.coach_id === id,
      )

      if (existingIndex !== -1) {
        state.coachListTo.selected.seats.splice(existingIndex, 1)
      } else {
        state.coachListTo.selected.seats.push({
          coach_id: id,
          seat_number: number,
          cost: price,
        })
      }
    },
    addToTotalCostFrom: (state, action) => {
      state.coachListFrom.selected.cost = action.payload
    },
    addToTotalCostTo: (state, action) => {
      state.coachListTo.selected.cost = action.payload
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

export const {
  setTicket,
  setSelectedSeatFrom,
  setSelectedSeatTo,
  addToTotalCostFrom,
  addToTotalCostTo,
} = trainInfoSlice.actions
export default trainInfoSlice.reducer
