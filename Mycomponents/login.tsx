"use client"

import { SetStateAction, useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login({setStep}:{ setStep: (step: number) => void }) {
  const [mobileNumber, setMobileNumber] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!mobileNumber.match(/^\d{8}$/)) {
      setError('Please enter a valid 8-digit mobile number')
      return
    }
    setStep(2)
    // Here you would typically call your login API
    console.log('Logging in with:', mobileNumber)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-8">
        <div className="flex justify-center">
          <Image
            src="/s4logo.jpg?height=80&width=80"
            alt="Company Logo"
            width={220}
            height={180}
            className="rounded-full"
          />
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <Input
              id="mobileNumber"
              type="tel"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

