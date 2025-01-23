import { CalendarDays } from "lucide-react"
import AppointmentContainer from "./_components/AppointmentContainer"

export default function AppointmentPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="bg-gradient-to-br from-purple-600 to-indigo-800 md:w-1/2 p-8 flex flex-col justify-center items-center text-white">
        <CalendarDays size={64} className="mb-6" />
        <h1 className="text-4xl font-bold mb-4">Book Your Appointment</h1>
        <p className="text-xl text-center max-w-md">
          Take the first step towards your goals. Schedule a consultation with our experts today.
        </p>
      </div>
      <div className="md:w-1/2 p-8 bg-gray-50 flex items-center justify-center">
        <div className="w-full max-w-md">
          <AppointmentContainer />
        </div>
      </div>
    </div>
  )
}
