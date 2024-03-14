import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getCoachList } from "../API/getCoachList"

const storedTicket = localStorage.getItem("train_info")
const ticketFromLocalStorage = storedTicket ? JSON.parse(storedTicket) : {}

const selectedFrom = localStorage.getItem("ticket_from_info")
const selectedFromLocalStorage = selectedFrom
  ? JSON.parse(selectedFrom)
  : {  seats: [], cost: 0 }

const selectedTo = localStorage.getItem("ticket_to_info")
const selectedToLocalStorage = selectedTo
  ? JSON.parse(selectedTo)
  : { seats: [], cost: 0 }

interface Seat {
  route_direction_id: string
  coach_id: string
  seat_number: string
  cost: number
  is_child: boolean,
  include_children_seat: boolean
}

interface ITrainInfoSlice {
  ticket: any
  coachListFrom: {
    list: []
    selected: {
      seats: Seat[]
      cost: number
    }

    loading: boolean
    error: string
  }
  coachListTo: {
    list: []
    selected: {
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
    selected: selectedFromLocalStorage,
    loading: false,
    error: "",
  },
  coachListTo: {
    list: [],
    selected: selectedToLocalStorage,
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
  name: "trainInfoSlice",
  initialState,
  reducers: {
    setTicket: (state, action) => {
      state.ticket = action.payload
    },
    setSelectedSeatFrom: (state, action) => {
      const { id, number, price, id_route } = action.payload

      const existingIndex = state.coachListFrom.selected.seats.findIndex(
        seat => seat.seat_number === number && seat.coach_id === id,
      )

      if (existingIndex !== -1) {
        state.coachListFrom.selected.seats.splice(existingIndex, 1)
      } else {
        state.coachListFrom.selected.seats.push({
          route_direction_id: id_route,
          coach_id: id,
          seat_number: number,
          cost: price,
          is_child: false,
          include_children_seat: false
        })
      }
    },
    setSelectedSeatTo: (state, action) => {
      const { id, number, price, id_route } = action.payload

      const existingIndex = state.coachListTo.selected.seats.findIndex(
        seat => seat.seat_number === number && seat.coach_id === id,
      )

      if (existingIndex !== -1) {
        state.coachListTo.selected.seats.splice(existingIndex, 1)
      } else {
        state.coachListTo.selected.seats.push({
          route_direction_id: id_route,
          coach_id: id,
          seat_number: number,
          cost: price,
          is_child: false,
          include_children_seat: false
        })
      }
    },
    addToTotalCostFrom: (state, action) => {
      state.coachListFrom.selected.cost = action.payload
      localStorage.setItem(
        "ticket_from_info",
        JSON.stringify(state.coachListFrom.selected),
      )
    },
    addToTotalCostTo: (state, action) => {
      state.coachListTo.selected.cost = action.payload
      localStorage.setItem(
        "ticket_to_info",
        JSON.stringify(state.coachListTo.selected),
      )
    },
    clearSelected: state => {
      state.coachListFrom.selected = {
        seats: [],
        cost: 0,
      }
      state.coachListTo.selected = {
        seats: [],
        cost: 0,
      }
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
  clearSelected,
} = trainInfoSlice.actions
export default trainInfoSlice.reducer
