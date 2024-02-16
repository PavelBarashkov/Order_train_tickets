export interface InputProps {
    name: string
    placeholder: string
    label?: string
    validate?: (value: any) => undefined | string | Promise<any>
    type?: string
    multiple?: boolean
    value?: string
    id?: string
    max?: number
    min?: number
    step?: number
    typeInput?: string
} 