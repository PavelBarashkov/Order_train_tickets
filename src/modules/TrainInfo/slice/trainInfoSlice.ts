import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getCoachList } from "../API/getCoachList"

const storedTicket = localStorage.getItem("train_info")
const ticketFromLocalStorage = storedTicket ? JSON.parse(storedTicket) : {}

const selectedFrom = localStorage.getItem("departure_tickets")
const selectedFromLocalStorage = selectedFrom
  ? JSON.parse(selectedFrom)
  : { seats: [], cost: 0, route_direction_id: "" }

const selectedTo = localStorage.getItem("arrival_tickets")
const selectedToLocalStorage = selectedTo
  ? JSON.parse(selectedTo)
  : { seats: [], cost: 0 }

interface Seat {
  coach_id: string
  seat_number: string
  cost: number
  is_child: boolean
  include_children_seat: boolean
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
        state.coachListFrom.selected.route_direction_id = id_route
        state.coachListFrom.selected.seats.push({
          coach_id: id,
          seat_number: number,
          cost: price,
          is_child: false,
          include_children_seat: false,
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
        state.coachListTo.selected.route_direction_id = id_route
        state.coachListTo.selected.seats.push({
          coach_id: id,
          seat_number: number,
          cost: price,
          is_child: false,
          include_children_seat: false,
        })
      }
    },
    addToTotalCostFrom: (state, action) => {
      const { option } = action.payload
      const sumOption = option === undefined ? 0 : option
      console.log(option)
      let sum = 0
      state.coachListFrom.selected.seats.forEach((item: any) => {
        sum += item.cost
        return sum
      })
      state.coachListFrom.selected.cost = sum + sumOption
      localStorage.setItem(
        "departure_tickets",
        JSON.stringify(state.coachListFrom.selected),
      )
    },
    addToTotalCostTo: (state, action) => {
      const { option } = action.payload
      const sumOption = option === undefined ? 0 : option
      console.log(option)
      let sum = 0
      state.coachListTo.selected.seats.forEach((item: any) => {
        sum += item.cost
        return sum
      })
      state.coachListTo.selected.cost = sum + sumOption
      localStorage.setItem(
        "arrival_tickets",
        JSON.stringify(state.coachListTo.selected),
      )
    },
    clearSelected: state => {
      state.coachListFrom.selected = {
        route_direction_id: "",
        seats: [],
        cost: 0,
      }
      state.coachListTo.selected = {
        route_direction_id: "",
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
