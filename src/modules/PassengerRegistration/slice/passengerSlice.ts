import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

const ticketsDepartureLocal = localStorage.getItem("departure_tickets")
const ticketsDeparture = ticketsDepartureLocal
  ? JSON.parse(ticketsDepartureLocal)
  : {}

const ticketsArrivalLocal = localStorage.getItem("arrival_tickets")
const ticketsArrival = ticketsArrivalLocal
  ? JSON.parse(ticketsArrivalLocal)
  : undefined

export interface PersonInfo {
  is_adult: boolean
  first_name: string
  last_name: string
  patronymic: string
  gender: boolean
  birthday: string
  document_type: string
  document_data: string
}

export interface Seat {
  coach_id: string
  person_info?: PersonInfo
  seat_number: number
  is_child?: boolean
  include_children_seat?: boolean
}

interface IPassengerSlice {
  departure: {
    route_direction_id: string
    seats: Seat[]
  }
  arrival: {
    route_direction_id: string
    seats: Seat[]
  }
}

const initialState: IPassengerSlice = {
  departure: ticketsDeparture,
  arrival: ticketsArrival
}

export const passengerSlice = createSlice({
  name: "passengerSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.departure = action.payload
    },
    updateUser: (state, action) => {
      console.log(action.payload)
      const { index, data } = action.payload
      const infoUser = {
        is_adult: data.age === "adult" ? true : false,
        first_name: data.name,
        last_name: data.surname,
        patronymic: data.middleName,
        gender: data.sex === "man" ? true : false,
        birthday: data.dateOfBirth,
        document_type: data.documentType,
        document_data: data.numberDocument,
      }
      state.departure.seats[index].person_info = infoUser
      localStorage.setItem('departure_tickets', JSON.stringify(state.departure))
      if(ticketsArrival) {
        state.arrival.seats[index].person_info = infoUser
      localStorage.setItem('arrival_tickets', JSON.stringify(state.arrival))

      }
    },
  },
})

export const { setUser, updateUser } = passengerSlice.actions
export default passengerSlice.reducer
