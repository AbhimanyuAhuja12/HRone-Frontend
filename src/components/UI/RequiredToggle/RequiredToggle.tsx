import type React from "react"
import { Switch } from "../../../../components/ui/switch"
import { cn } from "../../../../lib/utils" 

interface RequiredToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
  className?: string
}

const RequiredToggle: React.FC<RequiredToggleProps> = ({ checked, onChange, className = "" }) => {
  return (
    <Switch
      checked={checked}
      onCheckedChange={onChange}
      className={cn(
        "scale-90 data-[state=checked]:bg-black data-[state=unchecked]:bg-white", 
        className,
      )}
    />
  )
}

export default RequiredToggle
