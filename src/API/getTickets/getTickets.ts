import axios from "axios"

export const getTickets = async (url: string) => {
  const response = await axios.post(url)
  return response
}
