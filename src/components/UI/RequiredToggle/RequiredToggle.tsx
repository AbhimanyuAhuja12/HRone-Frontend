import type React from "react"
import { Switch } from "../../../../components/ui/switch"

interface RequiredToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
  className?: string
}

const RequiredToggle: React.FC<RequiredToggleProps> = ({ checked, onChange, className = "" }) => {
  return <Switch checked={checked} onCheckedChange={onChange} className={`scale-90 ${className}`} />
}

export default RequiredToggle
