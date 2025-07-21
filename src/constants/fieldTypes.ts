import type { FieldType } from "../types/field.types"

export const FIELD_TYPES: Array<{ value: FieldType; label: string }> = [
  { value: "string", label: "String" },
  { value: "number", label: "Number" },
  { value: "boolean", label: "Boolean" },
  { value: "nested", label: "Nested" },
]

export const NESTING_INDENT_WIDTH = 40
export const VERTICAL_LINE_OFFSET = 20
