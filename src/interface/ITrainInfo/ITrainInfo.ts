export interface ITrainInfo {
  _id: string
  have_first_class: boolean
  have_second_class: boolean
  have_third_class: boolean
  have_fourth_class: boolean
  have_wifi: boolean
  have_air_conditioning: boolean
  is_express: boolean
  min_price: number
  duration: number
  available_seats: number
  available_seats_info: AvailableSeatsInfo
  train: Train
  from: From
  to: To
  price_info: PriceInfo
}

export interface AvailableSeatsInfo {
  second: number
  third: number
}

export interface Train {
  _id: string
  name: string
}

export interface From {
  railway_station_name: string
  city: City
  datetime: number
}

export interface City {
  _id: string
  name: string
}

export interface To {
  railway_station_name: string
  city: City2
  datetime: number
}

export interface City2 {
  _id: string
  name: string
}

export interface PriceInfo {
  second: Second
  third: Third
}

export interface Second {
  top_price: number
  bottom_price: number
}

export interface Third {
  top_price: number
  bottom_price: number
  side_price: number
}
