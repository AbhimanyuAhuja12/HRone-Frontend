import type { Field } from "../types"

export const generateId = (): string => {
  return `field_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

export const createNewField = (): Field => ({
  id: generateId(),
  name: "",
  type: "string",
  required: false,
  children: [],
})

export const generateJsonSchema = (fields: Field[]): Record<string, any> => {
  const schema: Record<string, any> = {}

  fields.forEach((field) => {
    if (!field.name.trim()) return

    if (field.type === "nested") {
      schema[field.name] = generateJsonSchema(field.children)
    } else {
      const defaultValues = {
        string: "STRING",
        number: "number",
        boolean: "boolean",
      }
      schema[field.name] = defaultValues[field.type] || ""
    }
  })

  return schema
}
