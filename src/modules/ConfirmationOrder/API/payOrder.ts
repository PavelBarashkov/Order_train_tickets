import axios from "axios"

export const payOrder = async (data: any) => {
  const response = await axios.post(
    `https://students.netoservices.ru/fe-diplom/order`, data
  )
  return response
}
