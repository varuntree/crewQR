"use client"

import Login from "@/Mycomponents/login"
import SafetyChecks from "@/Mycomponents/SafetyChecks"
import { useState } from "react"
import ConfirmationPage from "./Confirmation/page"

export default function ConstructionAttendance() {
  const [step, setStep] = useState(1)
  const [phoneNumber, setPhoneNumber] = useState("")
  const handleSafetyInstructionsComplete = () => setStep(3)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        {step === 1 && <Login setStep = {setStep}/>}
        {step === 2 && <SafetyChecks onComplete={handleSafetyInstructionsComplete} />}
        {step === 3 && <ConfirmationPage phoneNumber={phoneNumber} />}
      </div>
    </div>
  )
}

