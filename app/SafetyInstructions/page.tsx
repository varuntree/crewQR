"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { HardHat, Shield, Footprints, AlertTriangle } from 'lucide-react'

interface SafetyInstructionProps {
  onComplete: () => void
}

const safetyInstructions = [
  { id: 1, text: "Wear a hard hat at all times", icon: HardHat },
  { id: 2, text: "Use proper safety equipment", icon: Shield },
  { id: 3, text: "Wear safety boots", icon: Footprints },
  { id: 4, text: "Report any hazards immediately", icon: AlertTriangle },
]

export default function SafetyInstructions({ onComplete }: SafetyInstructionProps) {
  const [checkedItems, setCheckedItems] = useState<number[]>([])

  const handleCheckboxChange = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handleAgreeToAll = () => {
    setCheckedItems(safetyInstructions.map((instruction) => instruction.id))
  }

  const isAllChecked = checkedItems.length === safetyInstructions.length

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Safety Instructions</h1>
      {safetyInstructions.map((instruction) => (
        <div key={instruction.id} className="flex items-center space-x-2">
          <Checkbox
            id={`instruction-${instruction.id}`}
            checked={checkedItems.includes(instruction.id)}
            onCheckedChange={() => handleCheckboxChange(instruction.id)}
          />
          <label
            htmlFor={`instruction-${instruction.id}`}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
          >
            <instruction.icon className="mr-2 h-4 w-4" />
            {instruction.text}
          </label>
        </div>
      ))}
      <Button onClick={handleAgreeToAll} variant="outline" className="w-full">
        Agree to All
      </Button>
      <Button onClick={onComplete} disabled={!isAllChecked} className="w-full">
        Confirm and Continue
      </Button>
    </div>
  )
}

