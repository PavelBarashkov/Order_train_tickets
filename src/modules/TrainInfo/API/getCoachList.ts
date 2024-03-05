import axios from "axios"

export const getCoachList = async ( params: any) => {
  const response = await axios.get(
    `https://students.netoservices.ru/fe-diplom/routes/${params.id}/seats/${params.search}`,
  )
  return response
}
