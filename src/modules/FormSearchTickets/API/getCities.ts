import axios from "axios"

export const getCities = async (city: string) => {
  const response = await axios.get(
    `https://students.netoservices.ru/fe-diplom/routes/cities?name=${city}`,
  )
  return response
}
