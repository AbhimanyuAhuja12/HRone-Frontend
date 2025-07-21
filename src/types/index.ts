export type FieldType = "string" | "number" | "boolean" | "nested"

export interface Field {
  id: string
  name: string
  type: FieldType
  required: boolean
  children: Field[]
}
