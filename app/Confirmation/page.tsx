import { CheckCircle, Clock } from 'lucide-react'

interface ConfirmationPageProps {
  phoneNumber: string
}

export default function ConfirmationPage({ phoneNumber }: ConfirmationPageProps) {
  const timestamp = new Date().toLocaleString()

  return (
    <div className="text-center space-y-4">
      <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
      <h1 className="text-2xl font-bold">Your entry is recorded Recorded Successfully!</h1>
      <p className="text-gray-600">Thank you for checking in.</p>
      <div className="flex items-center justify-center text-gray-500">
        <Clock className="mr-2 h-4 w-4" />
        <span>{timestamp}</span>
      </div>
      <p className="text-sm text-gray-500">Phone: {phoneNumber}</p>
      <p className="font-medium text-blue-600">Stay safe and have a great day!</p>
    </div>
  )
}

