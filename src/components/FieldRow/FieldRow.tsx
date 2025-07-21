"use client"

import type React from "react"
import { useCallback } from "react"
import type { FieldRowProps } from "../../types/field.types"
import { createNewField } from "../../utils/fieldUtils"
import { NESTING_INDENT_WIDTH, VERTICAL_LINE_OFFSET } from "../../constants/fieldTypes"
import FieldInput from "../UI/FieldInput/FieldInput"
import TypeSelector from "../UI/TypeSelector/TypeSelector"
import RequiredToggle from "../UI/RequiredToggle/RequiredToggle"
import DeleteButton from "../UI/DeleteButton/DeleteButton"
import AddItemButton from "../UI/AddItemButton/AddItemButton"

const FieldRow: React.FC<FieldRowProps> = ({ field, onUpdate, onDelete, level }) => {
  const handleNameChange = useCallback(
    (name: string) => {
      onUpdate({
        ...field,
        name,
      })
    },
    [field, onUpdate],
  )

  const handleTypeChange = useCallback(
    (type: typeof field.type) => {
      onUpdate({
        ...field,
        type,
        children: type === "nested" ? field.children : [],
      })
    },
    [field, onUpdate],
  )

  const handleRequiredChange = useCallback(
    (required: boolean) => {
      onUpdate({
        ...field,
        required,
      })
    },
    [field, onUpdate],
  )

  const handleChildUpdate = useCallback(
    (childIndex: number, updatedChild: typeof field) => {
      const newChildren = [...field.children]
      newChildren[childIndex] = updatedChild
      onUpdate({
        ...field,
        children: newChildren,
      })
    },
    [field, onUpdate],
  )

  const handleChildDelete = useCallback(
    (childIndex: number) => {
      const newChildren = field.children.filter((_, index) => index !== childIndex)
      onUpdate({
        ...field,
        children: newChildren,
      })
    },
    [field, onUpdate],
  )

  const handleAddChild = useCallback(() => {
    const newChild = createNewField()
    onUpdate({
      ...field,
      children: [...field.children, newChild],
    })
  }, [field, onUpdate])

  const indentWidth = level * NESTING_INDENT_WIDTH
  const lineLeft = level > 0 ? indentWidth - VERTICAL_LINE_OFFSET : 0

  return (
    <div className="relative">
      {/* Vertical line for nesting */}
      {level > 0 && <div className="absolute top-0 bottom-0 w-0.5 bg-gray-300" style={{ left: `${lineLeft}px` }} />}

      {/* Field row */}
      <div className="flex items-center gap-3 py-2 relative" style={{ paddingLeft: `${indentWidth}px` }}>
        <FieldInput value={field.name} onChange={handleNameChange} />
        <TypeSelector value={field.type} onChange={handleTypeChange} />
        <RequiredToggle checked={field.required} onChange={handleRequiredChange} />
        <DeleteButton onClick={onDelete} />
      </div>

      {/* Children fields */}
      {field.type === "nested" && (
        <div className="relative">
          {field.children.map((child, index) => (
            <FieldRow
              key={child.id}
              field={child}
              onUpdate={(updatedChild) => handleChildUpdate(index, updatedChild)}
              onDelete={() => handleChildDelete(index)}
              level={level + 1}
            />
          ))}

          {/* Add Item button for this nesting level */}
          <div className="py-1" style={{ paddingLeft: `${(level + 1) * NESTING_INDENT_WIDTH}px` }}>
            <AddItemButton onClick={handleAddChild} />
          </div>
        </div>
      )}
    </div>
  )
}

export default FieldRow
