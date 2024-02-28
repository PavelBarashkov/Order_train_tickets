import React, { useState } from 'react'
import { ButtonGroup, Dropdown, ToggleButton } from 'react-bootstrap'
import './style.css'
import { useLocation, useNavigate } from 'react-router-dom'

export const SortTickets: React.FC<any> = ({total_count}) => {
  const location = useLocation()
  const navigate = useNavigate()
    const options = [
      { value: "chocolate", label: "времени" },
      { value: "strawberry", label: "стоимости" },
      { value: "vanilla", label: "длительности" },
    ]
  
    const [label, setLabel] = useState(options[0].label)
  
    const handleChange = (item: any) => {
      setLabel(item.label)
    }
  
    const [radioValue, setRadioValue] = useState("5")
  
    const radios = [
      { name: "5", value: "5" },
      { name: "10", value: "10" },
      { name: "20", value: "20" },
    ]
  const handleBtnLimit = (e: any) => {
    setRadioValue(e.currentTarget.value)
    const searchParams = new URLSearchParams(location.search)
    const limit = searchParams.get("limit")
    searchParams.set("limit", e.currentTarget.value)
    navigate(`?${searchParams.toString()}`, { replace: true})
  }
    return (
      <div className="listManagement">
        <div>
          <div>
            <span>найдено {total_count}</span>
          </div>
        </div>
        <div className="sortSection">
          <div className="sort">
            <span>сортировать по: </span>
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                {label}
              </Dropdown.Toggle>
  
              <Dropdown.Menu>
                {options.map((item: any) => (
                  <Dropdown.Item
                    key={item.value}
                    onClick={() => handleChange(item)}
                  >
                    {item.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="sort">
            <span>показать по:</span>
            <ButtonGroup className="btns">
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  className="btn"
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={handleBtnLimit}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>
        </div>
      </div>
    )
  }
  
  const CustomToggle = React.forwardRef<any>(
    ({ children, onClick }: any, ref) => (
      <div
        ref={ref}
        onClick={e => {
          e.preventDefault()
          onClick(e)
        }}
      >
        {children}
      </div>
    ),
  )
