"use client"

import type React from "react"
import type { Field } from "../../types/field.types"
import FieldRow from "../FieldRow/FieldRow"
import AddItemButton from "../UI/AddItemButton/AddItemButton"
import { Button } from "../../../components/ui/button"

interface SchemaBuilderProps {
  fields: Field[]
  onFieldUpdate: (index: number, updatedField: Field) => void
  onFieldDelete: (index: number) => void
  onAddField: () => void
  onSubmit: () => void
}

const SchemaBuilder: React.FC<SchemaBuilderProps> = ({
  fields,
  onFieldUpdate,
  onFieldDelete,
  onAddField,
  onSubmit,
}) => {
  return (
    <div className="w-1/2 p-6 border-r border-gray-200 overflow-auto bg-white">
      <div className="space-y-1">
        {fields.map((field, index) => (
          <FieldRow
            key={field.id}
            field={field}
            onUpdate={(updatedField) => onFieldUpdate(index, updatedField)}
            onDelete={() => onFieldDelete(index)}
            level={0}
          />
        ))}

        {/* Main Add Item button */}
        <div className="pt-4">
          <AddItemButton onClick={onAddField} />
        </div>
      </div>

      {/* Submit button */}
      <div className="mt-8">
        <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded text-sm" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  )
}

export default SchemaBuilder
