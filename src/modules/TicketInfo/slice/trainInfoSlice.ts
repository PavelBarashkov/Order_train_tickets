import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ITrainInfoSlice {
  ticket: {}
}


const initialState: ITrainInfoSlice = {
  ticket: {},

}

export const trainInfoSlice = createSlice({
  name: "listTicketsSlice",
  initialState,
  reducers: {
    setTicket: (state, action) => {
        state.ticket = action.payload
    }
  },
  extraReducers: builder => {

  },
})

export const {setTicket} = trainInfoSlice.actions
export default trainInfoSlice.reducer
