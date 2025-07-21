"use client"

import type React from "react"
import { Button } from "../../../../components/ui/button"

interface AddItemButtonProps {
  onClick: () => void
  className?: string
  fullWidth?: boolean
}

const AddItemButton: React.FC<AddItemButtonProps> = ({ onClick, className = "", fullWidth = true }) => {
  return (
    <Button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      + Add Item
    </Button>
  )
}

export default AddItemButton
