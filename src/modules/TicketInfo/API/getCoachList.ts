import axios from "axios"

export const getCoachList = async (id: string) => {
  const response = await axios.get(
    `https://students.netoservices.ru/fe-diplom/routes/${id}/seats`,
  )
  return response
}
