"use client";

import { SetStateAction, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login({
  setStep,
}: {
  setStep: (step: number) => void;
}) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!mobileNumber.match(/^\d{8}$/)) {
      setError("Please enter a valid 8-digit mobile number");
      return;
    }
    setStep(2);
    // Here you would typically call your login API
    console.log("Logging in with:", mobileNumber);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8 space-y-6">
        <div className="flex justify-center mb-4">
          <Image
            src="/s4.PNG"
            alt="Logo"
            width={280}
            height={280}
            className="sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label
              className="block text-sm font-medium text-gray-700"
              htmlFor="mobileNumber"
            >
              Mobile Number
            </Label>
            <Input
              id="mobileNumber"
              type="tel"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
