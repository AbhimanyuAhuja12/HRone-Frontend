"use client"

import type React from "react"
import { Button } from "../../../../components/ui/button"
import { X } from "lucide-react"

interface DeleteButtonProps {
  onClick: () => void
  className?: string
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick, className = "" }) => {
  return (
    <Button variant="ghost" size="sm" onClick={onClick} className={`h-8 w-8 p-0 hover:bg-gray-100 ${className}`}>
      <X className="h-4 w-4" />
    </Button>
  )
}

export default DeleteButton
