import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { payOrder } from "../API/payOrder"

interface IPaySlice {
  status: boolean
  loading: boolean
  error: string
}
export const order = createAsyncThunk("payOrder", async (params: any) => {
  const response = await payOrder(params)
  return response.data
})

const initialState: IPaySlice = {
  status: false,
  loading: false,
  error: "",
}

export const paySlice = createSlice({
  name: "paySlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(order.pending, state => {
        state.loading = true
        state.error = ""
      })
      .addCase(order.fulfilled, (state, action) => {
        state.status = true
        state.loading = false
        if (action.payload.error) {
          state.error = "Ошибка"
        }
      })
      .addCase(order.rejected, (state, action) => {
        console.log("Error:", action.payload)
        state.status = false
        state.loading = false
      })
  },
})

export const {} = paySlice.actions
export default paySlice.reducer
