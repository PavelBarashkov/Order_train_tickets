import axios from "axios"

export const subscribe = async (email: string) => {
  const response = await axios.post(
    `https://students.netoservices.ru/fe-diplom/subscribe`, {
      email: email
    }
  )
  return response
}
