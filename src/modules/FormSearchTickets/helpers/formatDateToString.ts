export const formatDateToString = (date: Date): string => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${formate(month)}-${formate(day)}`
}

const formate = (value: number) => (value < 10 ? `0${value}` : value)
