import { useState } from "react"
import { Button } from "./src/components/Button"
import { Input } from "./src/components/Input"
import { Heart, Activity, Stethoscope, Plus } from "./src/components/Icons"
import "./ConfirmationPage.css"

const ArrowLeft = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="m12 19-7-7 7-7"></path>
    <path d="M19 12H5"></path>
  </svg>
)

const MoreHorizontal = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="19" cy="12" r="1"></circle>
    <circle cx="5" cy="12" r="1"></circle>
  </svg>
)

const User = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

const Calendar = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
)

const Clock = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12,6 12,12 16,14"></polyline>
  </svg>
)

const DollarSign = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
)

const FileText = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14,2 14,8 20,8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10,9 9,9 8,9"></polyline>
  </svg>
)

const Phone = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
)

const AlertCircle = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
)

const MapPin = ({ className = "", ...props }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

export default function ConfirmationPage({ appointmentData, onBack, onConfirm }) {
  const [formData, setFormData] = useState({
    name: appointmentData?.patientName || "",
    age: appointmentData?.patientAge || "",
    abhaId: appointmentData?.patientAbhaId || "",
    emergencyContact: appointmentData?.emergencyContact || "",
    symptoms: "",
    medicalHistory: "",
    allergies: "",
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.age.trim()) {
      newErrors.age = "Age is required"
    } else if (isNaN(formData.age) || formData.age < 1 || formData.age > 120) {
      newErrors.age = "Please enter a valid age (1-120)"
    }

    if (!formData.symptoms.trim()) {
      newErrors.symptoms = "Please describe your symptoms"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleConfirm = () => {
    if (validateForm()) {
      // Save appointment data to localStorage
      const appointmentId = `APT${Date.now().toString().slice(-6)}`
      const completeAppointmentData = {
        ...appointmentData,
        ...formData,
        appointmentId,
        bookedAt: new Date().toISOString(),
        status: "Confirmed",
        hospital: appointmentData?.hospital || "Apollo Hospitals",
        specialist: appointmentData?.specialist || "Cardiologist",
      }

      localStorage.setItem("appointmentData", JSON.stringify(completeAppointmentData))

      // Remove the alert that might be interrupting navigation
      // alert(
      //   `Appointment Confirmed Successfully!\n\nAppointment ID: ${appointmentId}\nPatient: ${formData.name}\nDoctor: ${appointmentData?.doctorName || "Dr. Kumar"}\nHospital: ${appointmentData?.hospital || "Apollo Hospitals"}\nDate: ${appointmentData?.date || "Today"}\nTime: ${appointmentData?.time || "10:00 AM"}\n\nYou will receive a confirmation SMS and email shortly.`,
      // )

      // Directly call onConfirm to navigate to the ticket page
      if (onConfirm) {
        onConfirm(completeAppointmentData)
      }
    }
  }

  const handleBack = () => {
    if (onBack) {
      onBack()
    }
  }

  return (
    <div className="confirmation-container">
      {/* Animated Medical Background */}
      <div className="confirmation-background">
        {/* Floating Medical Icons */}
        <div className="floating-icon icon-1">
          <Heart className="w-6 h-6 text-red-300" />
        </div>
        <div className="floating-icon icon-2">
          <Stethoscope className="w-8 h-8 text-teal-300" />
        </div>
        <div className="floating-icon icon-3">
          <Plus className="w-5 h-5 text-blue-300" />
        </div>
        <div className="floating-icon icon-4">
          <Activity className="w-7 h-7 text-green-300" />
        </div>
        <div className="floating-icon icon-5">
          <FileText className="w-6 h-6 text-purple-300" />
        </div>

        {/* Medical Grid Pattern */}
        <div className="medical-grid"></div>

        {/* Animated Gradient Orbs */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="gradient-orb orb-4"></div>
      </div>

      {/* Enhanced Medical Header */}
      <div className="confirmation-header">
        {/* ECG Line Animation */}
        <div className="ecg-animation">
          <svg width="100%" height="100%" viewBox="0 0 1000 60" preserveAspectRatio="none">
            <path
              d="M0,30 L100,30 L120,15 L140,45 L160,10 L180,50 L200,25 L220,30 L300,30 L320,20 L340,40 L360,15 L380,45 L400,30 L500,30 L520,18 L540,42 L560,12 L580,48 L600,28 L620,30 L700,30 L720,22 L740,38 L760,14 L780,46 L800,30 L1000,30"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="heartbeat-line"
            />
          </svg>
        </div>

        <Button onClick={handleBack} className="header-back-button">
          <ArrowLeft className="w-8 h-8" />
        </Button>
        <h1 className="header-title">BETSHOW</h1>
        <Button className="header-menu-button">
          <MoreHorizontal className="w-6 h-6" />
        </Button>
      </div>

      {/* Appointment Summary Card */}
      {appointmentData && (
        <div className="appointment-summary">
          <div className="summary-header">
            <div className="summary-indicator"></div>
            <h2 className="summary-title">Appointment Summary</h2>
            <Calendar className="w-5 h-5 text-teal-600" />
          </div>
          <div className="summary-content">
            <div className="summary-item">
              <User className="w-5 h-5 text-blue-600" />
              <span className="summary-label">Doctor:</span>
              <span className="summary-value">{appointmentData.doctorName}</span>
            </div>
            <div className="summary-item">
              <Stethoscope className="w-5 h-5 text-teal-600" />
              <span className="summary-label">Specialist:</span>
              <span className="summary-value">{appointmentData.specialist}</span>
            </div>
            <div className="summary-item">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span className="summary-label">Hospital:</span>
              <span className="summary-value">{appointmentData.hospital}</span>
            </div>
            <div className="summary-item">
              <Calendar className="w-5 h-5 text-green-600" />
              <span className="summary-label">Date:</span>
              <span className="summary-value">{appointmentData.date}</span>
            </div>
            <div className="summary-item">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className="summary-label">Time:</span>
              <span className="summary-value">{appointmentData.time}</span>
            </div>
            <div className="summary-item">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <span className="summary-label">Fee:</span>
              <span className="summary-value">₹{appointmentData.fee}</span>
            </div>
          </div>
        </div>
      )}

      {/* Patient Information Form */}
      <div className="patient-form">
        <div className="form-header">
          <div className="form-indicator"></div>
          <h2 className="form-title">Patient Information</h2>
          <FileText className="w-5 h-5 text-blue-600" />
        </div>

        <div className="form-content">
          {/* Name Field */}
          <div className="form-group">
            <label className="form-label">
              <User className="w-4 h-4 text-teal-600" />
              Name <span className="required">*</span>
            </label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter your full name"
              className={`form-input ${errors.name ? "error" : ""}`}
            />
            {errors.name && (
              <div className="error-message">
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </div>
            )}
          </div>

          {/* Age Field */}
          <div className="form-group">
            <label className="form-label">
              <Calendar className="w-4 h-4 text-teal-600" />
              Age <span className="required">*</span>
            </label>
            <Input
              type="number"
              value={formData.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
              placeholder="Enter your age"
              className={`form-input age-input ${errors.age ? "error" : ""}`}
              min="1"
              max="120"
            />
            {errors.age && (
              <div className="error-message">
                <AlertCircle className="w-4 h-4" />
                {errors.age}
              </div>
            )}
          </div>

          {/* ABHA ID Field */}
          <div className="form-group">
            <label className="form-label">
              <FileText className="w-4 h-4 text-teal-600" />
              ABHA ID <span className="optional">(Optional)</span>
            </label>
            <Input
              type="text"
              value={formData.abhaId}
              onChange={(e) => handleInputChange("abhaId", e.target.value)}
              placeholder="Enter your ABHA ID"
              className="form-input"
            />
          </div>

          {/* Emergency Contact Field */}
          <div className="form-group">
            <label className="form-label">
              <Phone className="w-4 h-4 text-teal-600" />
              Emergency Contact <span className="optional">(Optional)</span>
            </label>
            <Input
              type="tel"
              value={formData.emergencyContact}
              onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
              placeholder="Enter emergency contact number"
              className="form-input"
            />
          </div>

          {/* Symptoms Field */}
          <div className="form-group">
            <label className="form-label">
              <Stethoscope className="w-4 h-4 text-teal-600" />
              Symptoms <span className="required">*</span>
            </label>
            <textarea
              value={formData.symptoms}
              onChange={(e) => handleInputChange("symptoms", e.target.value)}
              placeholder="Describe your current symptoms..."
              className={`form-textarea ${errors.symptoms ? "error" : ""}`}
              rows="3"
            />
            {errors.symptoms && (
              <div className="error-message">
                <AlertCircle className="w-4 h-4" />
                {errors.symptoms}
              </div>
            )}
          </div>

          {/* Medical History Field */}
          <div className="form-group">
            <label className="form-label">
              <FileText className="w-4 h-4 text-teal-600" />
              Medical History <span className="optional">(Optional)</span>
            </label>
            <textarea
              value={formData.medicalHistory}
              onChange={(e) => handleInputChange("medicalHistory", e.target.value)}
              placeholder="Any relevant medical history..."
              className="form-textarea"
              rows="3"
            />
          </div>

          {/* Allergies Field */}
          <div className="form-group">
            <label className="form-label">
              <AlertCircle className="w-4 h-4 text-teal-600" />
              Allergies <span className="optional">(Optional)</span>
            </label>
            <Input
              type="text"
              value={formData.allergies}
              onChange={(e) => handleInputChange("allergies", e.target.value)}
              placeholder="Any known allergies..."
              className="form-input"
            />
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="important-info">
        <div className="info-header">
          <div className="info-indicator"></div>
          <h3 className="info-title">Important Information</h3>
          <AlertCircle className="w-5 h-5 text-orange-600" />
        </div>
        <div className="info-content">
          <div className="info-item">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>Please arrive 15 minutes before your appointment</span>
          </div>
          <div className="info-item">
            <FileText className="w-4 h-4 text-green-600" />
            <span>Bring a valid ID proof and insurance card</span>
          </div>
          <div className="info-item">
            <Phone className="w-4 h-4 text-purple-600" />
            <span>You will receive SMS and email confirmation</span>
          </div>
          <div className="info-item">
            <AlertCircle className="w-4 h-4 text-orange-600" />
            <span>Cancellation requires 2 hours advance notice</span>
          </div>
        </div>
      </div>

      {/* Book Confirmation Button */}
      <div className="confirmation-footer">
        <Button onClick={handleConfirm} className="book-confirmation-button">
          <span className="confirmation-button-content">
            <Stethoscope className="w-5 h-5 confirmation-icon" />
            BOOK CONFIRMATION
            <Calendar className="w-5 h-5 confirmation-icon" />
          </span>
          <div className="confirmation-button-overlay"></div>
        </Button>
      </div>

      {/* Medical Chat Button */}
      <div className="chat-button">
        <Button className="chat-btn">
          <div className="chat-ping"></div>
          <Heart className="w-7 h-7 chat-icon" />
        </Button>
      </div>
    </div>
  )
}
