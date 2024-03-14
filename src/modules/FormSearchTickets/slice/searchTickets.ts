import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCities } from "../API/getCities"
import type { ICity } from "@interface"

interface IFrom {
  cities: ICity[]
  date_start: string
  date_end: string
  routeFrom: {
    _id: string
    name: string
  }
  routeTo: {
    _id: string
    name: string
  }
}

const formSearchLocal = localStorage.getItem("form_search")
const formSearch = formSearchLocal
  ? JSON.parse(formSearchLocal)
  : {
      date_start: "",
      date_end: "",
      routeFrom: {
        _id: "",
        name: "",
      },
      routeTo: {
        _id: "",
        name: "",
      },
    }

export const getCity = createAsyncThunk("getCities", async (city: string) => {
  const response = await getCities(city)
  return response.data
})

const initialState: IFrom = {
  cities: [],
  date_start: formSearch.date_start,
  date_end: formSearch.date_end,
  routeFrom: formSearch.routeFrom,
  routeTo: formSearch.routeTo
}

export const searchTickets = createSlice({
  name: "searchTickets",
  initialState,
  reducers: {
    setCity: (state, action) => {
      action.payload.direction === "routeFrom"
        ? (state.routeFrom = action.payload.value)
        : (state.routeTo = action.payload.value)
      const formSearch = JSON.parse(localStorage.getItem("form_search") || "{}")
      localStorage.setItem(
        "form_search",
        JSON.stringify({
          ...formSearch,
          routeFrom: state.routeFrom,
          routeTo: state.routeTo,
        }),
      )
    },
    swapRoutes: state => {
      const temp = { ...state.routeFrom }
      state.routeFrom = { ...state.routeTo }
      state.routeTo = temp

      const formSearch = JSON.parse(localStorage.getItem("form_search") || "{}")
      localStorage.setItem(
        "form_search",
        JSON.stringify({
          ...formSearch,
          routeFrom: state.routeFrom,
          routeTo: state.routeTo,
        }),
      )
    },
    setDate: (state, action) => {
      action.payload.dateName === "date_start"
        ? (state.date_start = action.payload.value)
        : (state.date_end = action.payload.value)
      const formSearch = JSON.parse(localStorage.getItem("form_search") || "{}")

      localStorage.setItem(
        "form_search",
        JSON.stringify({
          ...formSearch,
          date_start: state.date_start,
          date_end: state.date_end,
        }),
      )
    },
  },
  extraReducers: builder => {
    builder.addCase(getCity.fulfilled, (state, action) => {
      state.cities = action.payload
    })
  },
})

export const { setCity, swapRoutes, setDate } = searchTickets.actions
export default searchTickets.reducer
