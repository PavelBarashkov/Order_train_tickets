import axios from "axios"

export const getLast = async () => {
  const response = await axios.get(
    `https://students.netoservices.ru/fe-diplom/routes/last`,
  )
  return response
}
