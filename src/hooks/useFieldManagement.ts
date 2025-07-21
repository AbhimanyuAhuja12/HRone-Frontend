"use client"

import { useState, useCallback } from "react"
import type { Field } from "../types/field.types"
import { createNewField } from "../utils/fieldUtils"

export const useFieldManagement = (initialFields: Field[] = []) => {
  const [fields, setFields] = useState<Field[]>(initialFields)

  const updateField = useCallback((index: number, updatedField: Field) => {
    setFields((prev) => {
      const newFields = [...prev]
      newFields[index] = updatedField
      return newFields
    })
  }, [])

  const deleteField = useCallback((index: number) => {
    setFields((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const addField = useCallback(() => {
    const newField = createNewField()
    setFields((prev) => [...prev, newField])
  }, [])

  const resetFields = useCallback(() => {
    setFields([])
  }, [])

  return {
    fields,
    updateField,
    deleteField,
    addField,
    resetFields,
  }
}
