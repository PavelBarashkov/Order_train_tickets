import axios from "axios"

export const getTickets = async (params: string) => {
  const response = await axios.get(
    `https://students.netoservices.ru/fe-diplom/routes${params}`,
  )
  return response
}
