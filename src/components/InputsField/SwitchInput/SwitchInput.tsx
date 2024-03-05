import type React from "react"
import type { InputProps } from "../Interface/InputProps"
import { useField } from "formik"
import { MySwitch } from "../../UI"

export const SwitchInput: React.FC<InputProps> = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: "checkbox" })

  return <MySwitch {...field} {...props} />
}
