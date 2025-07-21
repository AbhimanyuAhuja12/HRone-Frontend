"use client"

import type React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select"
import type { FieldType } from "../../../types/field.types"
import { FIELD_TYPES } from "../../../constants/fieldTypes"

interface TypeSelectorProps {
  value: FieldType
  onChange: (value: FieldType) => void
  className?: string
}

const TypeSelector: React.FC<TypeSelectorProps> = ({ value, onChange, className = "" }) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={`w-32 h-9 text-sm ${className}`}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {FIELD_TYPES.map((type) => (
          <SelectItem key={type.value} value={type.value}>
            {type.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default TypeSelector
