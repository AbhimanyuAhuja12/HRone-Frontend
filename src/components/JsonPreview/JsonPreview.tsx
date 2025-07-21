import type React from "react"

interface JsonPreviewProps {
  jsonOutput: Record<string, unknown>
  className?: string
}

const JsonPreview: React.FC<JsonPreviewProps> = ({ jsonOutput, className = "" }) => {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-4 h-full overflow-auto ${className}`}>
      <pre className="text-sm font-mono whitespace-pre-wrap text-gray-800">{JSON.stringify(jsonOutput, null, 2)}</pre>
    </div>
  )
}

export default JsonPreview
