export type FieldType = "string" | "number" | "boolean" | "nested"

export interface Field {
  id: string
  name: string
  type: FieldType
  required: boolean
  children: Field[]
}

export interface FieldRowProps {
  field: Field
  onUpdate: (updatedField: Field) => void
  onDelete: () => void
  level: number
}
