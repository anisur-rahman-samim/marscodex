import { CalendarDays } from "lucide-react"
import AppointmentContainer from "./_components/AppointmentContainer"

export default function AppointmentPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      <div className="bg-gradient-to-br from-purple-600 to-indigo-800 md:w-1/2 p-8 flex flex-col justify-center items-center text-white">
        <CalendarDays size={64} className="md:mb-6 mb-3" />
        <h1 className="lg:text-4xl text-2xl text-center font-bold md:mb-3">Book Your Appointment</h1>
        <p className="md:text-xl text-center max-w-md">
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
