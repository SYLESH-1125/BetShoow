import { useState } from "react"
import SignInForm from "./SignInForm"
import AddressForm from "./AddressForm"
import AbhaForm from "./AbhaForm"
import OtpForm from "./OtpForm"
import HomePage from "./HomePage"
import HospitalPage from "./HospitalPage"
import SpecialistPage from "./SpecialistPage"
import SpecialtyPage from "./SpecialtyPage"
import BookingPage from "./BookingPage"
import ConfirmationPage from "./ConfirmationPage"
import TicketPage from "./TicketPage"

export default function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})
  const [selectedHospitalId, setSelectedHospitalId] = useState(null)
  const [selectedSpecialtyType, setSelectedSpecialtyType] = useState(null)
  const [selectedDoctorId, setSelectedDoctorId] = useState(null)
  const [appointmentData, setAppointmentData] = useState(null)

  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return ""
    const dob = new Date(dateOfBirth)
    const today = new Date()
    let age = today.getFullYear() - dob.getFullYear()
    const monthDiff = today.getMonth() - dob.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--
    }
    return age.toString()
  }

  const handleSignInNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }))
    setCurrentStep(2)
  }

  const handleAddressNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }))
    setCurrentStep(3)
  }

  const handleAddressPrevious = () => {
    setCurrentStep(1)
  }

  const handleAbhaNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }))
    setCurrentStep(4)
  }

  const handleAbhaPrevious = () => {
    setCurrentStep(2)
  }

  const handleOtpNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }))
    setCurrentStep(5) // Navigate to home page
    console.log("Complete form data:", { ...formData, ...data })
  }

  const handleOtpPrevious = () => {
    setCurrentStep(3)
  }

  const handleHomeNavigation = (destination, specialtyType = null) => {
    if (destination === "hospital") {
      setCurrentStep(6) // Navigate to hospital page
    } else if (destination === "specialty") {
      setSelectedSpecialtyType(specialtyType)
      setCurrentStep(8) // Navigate to specialty page
    }
  }

  const handleBackToHome = () => {
    setCurrentStep(5) // Back to home page
  }

  const handleHospitalSelect = (hospitalId) => {
    setSelectedHospitalId(hospitalId)
    setCurrentStep(7) // Navigate to specialist page
  }

  const handleBackToHospitals = () => {
    setCurrentStep(6) // Back to hospital page
  }

  const handleSpecialistSelect = (specialistId) => {
    setSelectedDoctorId(specialistId)
    setCurrentStep(9) // Navigate to booking page
  }

  const handleDoctorSelect = (doctorId) => {
    setSelectedDoctorId(doctorId)
    setCurrentStep(9) // Navigate to booking page
  }

  const handleBackFromBooking = () => {
    // Go back to the previous page (either specialist or specialty page)
    if (selectedHospitalId) {
      setCurrentStep(7) // Back to specialist page
    } else {
      setCurrentStep(8) // Back to specialty page
    }
  }

  const handleBackToHomeFromSpecialty = () => {
    setCurrentStep(5) // Back to home page
  }

  const handleBookingConfirm = (appointmentData) => {
    // Find the doctor data
    const doctor = {}

    // Combine with user data from sign-in
    const enhancedAppointmentData = {
      ...appointmentData,
      patientName: formData.fullName,
      patientAge: calculateAge(formData.dateOfBirth),
      patientAbhaId: formData.abhaId || "",
      emergencyContact: formData.phoneNumber,
      hospital: doctor.hospital || "Apollo Hospitals",
      specialist: doctor.specialist || "Specialist",
    }

    setAppointmentData(enhancedAppointmentData)
    setCurrentStep(10) // Navigate to confirmation page
  }

  const handleConfirmationComplete = (updatedAppointmentData) => {
    // If we receive updated appointment data, use it
    if (updatedAppointmentData) {
      setAppointmentData(updatedAppointmentData)
    }
    setCurrentStep(11) // Navigate to ticket page
  }

  const handleTicketComplete = () => {
    setCurrentStep(5) // Back to home page after ticket
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <SignInForm onNext={handleSignInNext} />
      case 2:
        return <AddressForm onNext={handleAddressNext} onPrevious={handleAddressPrevious} />
      case 3:
        return <AbhaForm onNext={handleAbhaNext} onPrevious={handleAbhaPrevious} />
      case 4:
        return <OtpForm onNext={handleOtpNext} onPrevious={handleOtpPrevious} />
      case 5:
        return <HomePage onNavigate={handleHomeNavigation} />
      case 6:
        return <HospitalPage onBack={handleBackToHome} onHospitalSelect={handleHospitalSelect} />
      case 7:
        return (
          <SpecialistPage
            hospitalId={selectedHospitalId}
            onBack={handleBackToHospitals}
            onSpecialistSelect={handleSpecialistSelect}
          />
        )
      case 8:
        return (
          <SpecialtyPage
            specialtyType={selectedSpecialtyType}
            onBack={handleBackToHomeFromSpecialty}
            onDoctorSelect={handleDoctorSelect}
          />
        )
      case 9:
        return (
          <BookingPage
            doctorId={selectedDoctorId}
            onBack={handleBackFromBooking}
            onBookingConfirm={handleBookingConfirm}
          />
        )
      case 10:
        return (
          <ConfirmationPage
            appointmentData={appointmentData}
            onBack={handleBackFromBooking}
            onConfirm={handleConfirmationComplete}
          />
        )
      case 11:
        return <TicketPage appointmentData={appointmentData} onBack={handleTicketComplete} />
      default:
        return <SignInForm onNext={handleSignInNext} />
    }
  }

  return <div className="app">{renderCurrentStep()}</div>
}
