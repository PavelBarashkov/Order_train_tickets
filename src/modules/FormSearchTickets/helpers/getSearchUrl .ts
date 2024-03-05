import { TICKET_ROUTE } from "@pages"
import type { ICity } from "../../../interface"


export const getSearchUrl = ({
  routeFrom,
  routeTo,
  date_start,
  date_end,
}: {
  routeFrom: ICity
  routeTo: ICity
  date_start: string
  date_end: string
}) => {
  let url = `${TICKET_ROUTE}?routeFromCity=${routeFrom.name}&from_city_id=${routeFrom._id}&routeToCity=${
    routeTo.name
  }&to_city_id=${routeTo._id}&limit=5&sort=date&offset=0`

  if (date_start) url += `&date_start=${date_start}`
  if (date_end) url += `&date_end=${date_end}`

  return url
}
