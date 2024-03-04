import type React from "react"
import { useEffect, useState } from "react"
import { Pagination as PaginationBoot } from "react-bootstrap"
import "./style.css"
import { useSearchParams } from "react-router-dom"
import { useAppDispatch } from "../../../../app/hooks"
import { setOffset } from "../../slice/listTicketsSlice"

interface PaginationProps {
  totalCount: number
  limit: string
}

export const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  limit,
}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageCount = Math.ceil(totalCount / Number(limit))
  const dispatch = useAppDispatch()
  const [active, setActive] = useState(1)
  const [currentLimit, setCurrentLimit] = useState(Number(limit))

  const currentOffset = (page: number, limit: number) => {
    return (page - 1) * limit
  }

  const handleBtn = (number: number) => {
    setActive(number)
    const offset = currentOffset(number, currentLimit)
    searchParams.set("offset", String(offset))
    setSearchParams(searchParams)
    dispatch(setOffset(offset))
  }

  useEffect(() => {
    const offset = searchParams.get("offset")
    if (offset) setActive(Math.trunc(Number(offset) / currentLimit) + 1)
  }, [currentLimit])

  useEffect(() => {
    const offset = searchParams.get("offset")
    if (offset) setActive(Math.trunc(Number(offset) / currentLimit) + 1)
  }, [])

  const generatePages = () => {
    let startPage = Math.max(1, active - 1)
    let endPage = Math.min(pageCount, startPage + 2)
    const pages = []
    for (let number = startPage; number <= endPage; number++) {
      pages.push(
        <PaginationBoot.Item
          key={number}
          active={number === active}
          onClick={() => handleBtn(number)}
        >
          {number}
        </PaginationBoot.Item>,
      )
    }
    return pages
  }

  const handleNext = () => {
    if (active < pageCount) {
      handleBtn(active + 1)
    }
  }

  const handlePrev = () => {
    if (active > 1) {
      handleBtn(active - 1)
    }
  }

  return (
    <PaginationBoot size="lg">
      <PaginationBoot.Prev onClick={handlePrev} />
      {generatePages()}
      <PaginationBoot.Next onClick={handleNext} />
    </PaginationBoot>
  )
}
