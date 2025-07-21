import type { Field, FieldType } from "../types/field.types"

export const generateFieldId = (): string => {
  return `field_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

export const createNewField = (type: FieldType = "string"): Field => ({
  id: generateFieldId(),
  name: "",
  type,
  required: false,
  children: [],
})

export const getDefaultValueForType = (type: FieldType): any => {
  switch (type) {
    case "string":
      return "STRING"
    case "number":
      return "number"
    case "boolean":
      return "boolean"
    case "nested":
      return {}
    default:
      return ""
  }
}
