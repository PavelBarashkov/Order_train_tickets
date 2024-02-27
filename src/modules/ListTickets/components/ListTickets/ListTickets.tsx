import type React from 'react'
import { Col, Row } from 'react-bootstrap'
import { SortTickets } from '../SortTickets/SortTickets'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import queryString from 'query-string'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { getTicket } from '../../slice/listTicketsSlice'
import type { RootState } from '../../../../app/store'

export const ListTickets: React.FC = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {total_count} = useAppSelector((state: RootState) => (state.listTickets))


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const limit = '5'
    queryParams.set('limit', limit)
    navigate(`?${queryParams.toString()}`, { replace: true })
  }, []); 

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const queryStrings = queryParams.toString();
    dispatch(getTicket(queryStrings));
  }, [location.search]); 
  
  return (
    <Row className="g-5">
    <Col>
      <SortTickets total_count={total_count}/>
    </Col>
  </Row>
  )
}
