import { useState, useEffect } from "react"
import { Button } from "./src/components/Button"
import { Input } from "./src/components/Input"
import { Label } from "./src/components/Label"
import { Heart, Activity, Stethoscope, Plus } from "./src/components/Icons"
import "./SignInForm.css"

export default function SignInForm({ onNext }) {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    phoneNumber: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const savedData = localStorage.getItem("signInFormData")
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      setFormData({
        fullName: parsedData.fullName || "",
        dateOfBirth: parsedData.dateOfBirth || "",
        phoneNumber: parsedData.phoneNumber || "",
      })
    }
  }, [])

  const handleInputChange = (field, value) => {
    if (field === "phoneNumber") {
      const digitsOnly = value.replace(/\D/g, "")
      setFormData((prev) => ({
        ...prev,
        [field]: digitsOnly,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }))
    }
  }

  const handleNext = async () => {
    if (!formData.fullName.trim()) {
      alert("Please enter your Full Name")
      return
    }

    if (!formData.dateOfBirth) {
      alert("Please select your Date of Birth")
      return
    }

    if (!formData.phoneNumber.trim()) {
      alert("Please enter your Phone Number")
      return
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      alert("Phone Number must be exactly 10 digits")
      return
    }

    setIsLoading(true)

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 1500))

    localStorage.setItem("signInFormData", JSON.stringify(formData))

    // Call the onNext callback instead of navigate
    if (onNext) {
      onNext(formData)
    }

    setIsLoading(false)
  }

  return (
    <div className="signin-container">
      {/* Medical Background Pattern */}
      <div className="medical-bg-pattern">
        <div className="floating-icon icon-1">
          <Heart className="w-6 h-6 text-red-300 opacity-30" />
        </div>
        <div className="floating-icon icon-2">
          <Stethoscope className="w-8 h-8 text-teal-300 opacity-25" />
        </div>
        <div className="floating-icon icon-3">
          <Plus className="w-5 h-5 text-blue-300 opacity-30" />
        </div>
        <div className="floating-icon icon-4">
          <Activity className="w-7 h-7 text-green-300 opacity-25" />
        </div>
        <div className="animated-circle circle-1"></div>
        <div className="animated-circle circle-2"></div>
      </div>

      {/* Header */}
      <div className="medical-header">
        <div className="header-pattern">
          <svg width="100%" height="100%" viewBox="0 0 60 60">
            <defs>
              <pattern id="medicalPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M15,5 L15,25 M5,15 L25,15" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#medicalPattern)" />
          </svg>
        </div>

        <div className="heartbeat-line">
          <svg width="100%" height="60" viewBox="0 0 1000 60" preserveAspectRatio="none">
            <path
              d="M0,30 L100,30 L120,15 L140,45 L160,10 L180,50 L200,25 L220,30 L300,30 L320,20 L340,40 L360,15 L380,45 L400,30 L500,30 L520,18 L540,42 L560,12 L580,48 L600,28 L620,30 L700,30 L720,22 L740,38 L760,14 L780,46 L800,30 L1000,30"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="heartbeat-path"
            />
          </svg>
        </div>

        <div className="header-icons">
          <Heart className="w-8 h-8 text-white heartbeat-icon" />
          <Activity className="w-10 h-10 text-white bounce-slow" />
        </div>
      </div>

      {/* Form */}
      <div className="signin-form">
        <div className="form-title-section">
          <h1 className="signin-title">Sign In</h1>
          <p className="signin-subtitle">Hi welcome, you've been missed</p>
        </div>

        <div className="form-fields">
          <div className="field-group">
            <Label className="field-label">
              <div className="label-dot dot-teal"></div>
              Full Name
            </Label>
            <div className="input-wrapper">
              <Input
                type="text"
                placeholder="Full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="field-group">
            <Label className="field-label">
              <div className="label-dot dot-blue"></div>
              Date of Birth
            </Label>
            <div className="input-wrapper">
              <Input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="field-group">
            <Label className="field-label">
              <div className="label-dot dot-green"></div>
              Phone Number
            </Label>
            <div className="input-wrapper">
              <Input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                className="form-input"
                required
              />
            </div>
          </div>
        </div>

        <div className="form-footer">
          <Button onClick={handleNext} disabled={isLoading} className="next-button">
            {isLoading ? (
              <div className="loading-content">
                <div className="loading-spinner"></div>
                Processing...
              </div>
            ) : (
              <span className="button-text">Next</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
