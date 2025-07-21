"use client"

import type React from "react"
import { Input } from "../../../../components/ui/input"

interface FieldInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

const FieldInput: React.FC<FieldInputProps> = ({ value, onChange, placeholder = "Field name", className = "" }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <Input
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`w-48 h-9 text-sm ${className}`}
    />
  )
}

export default FieldInput
