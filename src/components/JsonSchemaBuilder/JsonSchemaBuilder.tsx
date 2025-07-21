"use client"

import type React from "react"
import { useMemo } from "react"
import { useFieldManagement } from "../../hooks/useFieldManagement"
import { generateJsonSchema } from "../../utils/jsonSchemaGenerator"
import SchemaBuilder from "../SchemaBuilder/SchemaBuilder"
import JsonPreview from "../JsonPreview/JsonPreview"

const JsonSchemaBuilder: React.FC = () => {
  const { fields, updateField, deleteField, addField } = useFieldManagement()

  const jsonOutput = useMemo(() => generateJsonSchema(fields), [fields])

  const handleSubmit = () => {
    console.log("Schema submitted:", jsonOutput)
    // Here you can add logic to save or export the schema
  }

  return (
    <div className="flex h-screen">
      <SchemaBuilder
        fields={fields}
        onFieldUpdate={updateField}
        onFieldDelete={deleteField}
        onAddField={addField}
        onSubmit={handleSubmit}
      />

      {/* Right Panel - JSON Preview */}
      <div className="w-1/2 p-6 bg-gray-50">
        <JsonPreview jsonOutput={jsonOutput} />
      </div>
    </div>
  )
}

export default JsonSchemaBuilder
