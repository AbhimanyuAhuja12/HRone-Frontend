import type { Field } from "../types/field.types"
import { getDefaultValueForType } from "./fieldUtils"

export const generateJsonSchema = (fields: Field[]): Record<string, any> => {
  const schema: Record<string, any> = {}

  fields.forEach((field) => {
    if (!field.name.trim()) return

    if (field.type === "nested") {
      schema[field.name] = generateJsonSchema(field.children)
    } else {
      schema[field.name] = getDefaultValueForType(field.type)
    }
  })

  return schema
}

export const formatJsonOutput = (schema: Record<string, any>): string => {
  return JSON.stringify(schema, null, 2)
}
