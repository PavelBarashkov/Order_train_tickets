/* eslint-disable @typescript-eslint/no-unused-vars */
import "./style.css"
import { Autocomplete } from "@mui/material"
import type { ICity } from "@interface"
import { useField } from "formik"

interface IDirectionInputProps {
  name: string
  placeholder: string
  setField: (direction: string, value: any) => void
  onChangeAutocomplete: (event: any, value: any, direction: string) => void
  handlerInput: (e: any, params: any) => void
  direction: string
  options: ICity[]
  value: ICity
}

export const DirectionInput: React.FC<IDirectionInputProps> = ({
  name,
  setField,
  onChangeAutocomplete,
  handlerInput,
  direction,
  options,
  placeholder,
  value,
  ...props
}) => {
  const [field, meta]: any = useField(props as any)
  return (
    <div>
      <Autocomplete
        {...props}
        {...field}
        onChange={(event, value: any) =>
          onChangeAutocomplete(event, value, direction)
        }
        value={value}
        options={options}
        noOptionsText="Выбранного направления не найдено"
        filterOptions={(options, state) =>
          options.filter((option: any) =>
            option.name
              .toLowerCase()
              .startsWith(state.inputValue.toLowerCase()),
          )
        }
        getOptionLabel={(option: ICity) => option.name}
        renderInput={params => (
          <div ref={params.InputProps.ref}>
            <input
              {...params.inputProps}
              type="text"
              name={name}
              value={params.inputProps.value}
              className="myInput"
              onChange={e => handlerInput(e, params)}
              placeholder={placeholder}
            />
            <span className="iconLocation" />

            {meta.touched && meta.error?.[direction] ? (
              <div className="error">
                {meta.error ? meta?.error?.[direction].name : "ошибка"}
              </div>
            ) : null}
          </div>
        )}
      />
    </div>
  )
}
