import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

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
  departure: {
    route_direction_id: "",
    seats: [],
  },
  arrival: {
    route_direction_id: "",
    seats: [],
  },
}

export const passengerSlice = createSlice({
  name: "passengerSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const users = action.payload

      for (const user of users) {
        if (user.arrival) {
          state.arrival.route_direction_id = user.arrival.route_direction_id
          state.arrival.seats.push(user.arrival)
        }
        if (user.departure) {
          state.departure.seats.push(user.departure)
          state.departure.route_direction_id = user.departure.route_direction_id
        }
      }
    },
    updateUser: (state, action) => {
        console.log(action.payload)
        const {index, data} = action.payload
        const infoUser = {
            is_adult: data.age === 'adult' ? true : false,
            first_name: data.name,
            last_name: data.surname,
            patronymic: data.middleName,
            gender: data.sex === 'man' ? true : false,
            birthday: data.dateOfBirth,
            document_type: data.documentType,
            document_data: data.numberDocument 
        }
        state.departure.seats[index].person_info =  infoUser
        state.arrival.seats[index].person_info =  infoUser
    }
  },
})

export const { setUser, updateUser } = passengerSlice.actions
export default passengerSlice.reducer
