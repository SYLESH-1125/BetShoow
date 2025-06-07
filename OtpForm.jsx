import { useState, useEffect, useRef } from "react"
import { Button } from "./src/components/Button"
import { Label } from "./src/components/Label"
import { Heart, Activity, Stethoscope, Plus } from "./src/components/Icons"
import "./OtpForm.css"

export default function OtpForm({ onNext, onPrevious }) {
  const [otp, setOtp] = useState(["", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)
  const inputRefs = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)

    // Initialize refs array
    inputRefs.current = inputRefs.current.slice(0, 4)

    // Focus first input on mount
    if (inputRefs.current[0]) {
      setTimeout(() => {
        inputRefs.current[0].focus()
      }, 100)
    }
  }, [])

  const handleDigitChange = (index, value) => {
    // Only allow numbers
    const digit = value.replace(/\D/g, "")

    // Update the OTP array
    const newOtp = [...otp]
    newOtp[index] = digit
    setOtp(newOtp)

    // Auto-advance to next field if current field is filled
    if (digit && index < 3 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (index, e) => {
    // Handle backspace to go to previous field
    if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus()
    }
  }

  const handleVerifyOTP = async () => {
    const otpString = otp.join("")

    if (otpString.length !== 4) {
      alert("Please enter the complete 4-digit OTP")
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // For demo purposes, accept any 4-digit OTP
    setIsLoading(false)

    // Save OTP to localStorage
    const savedData = localStorage.getItem("signInFormData")
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      const updatedData = {
        ...parsedData,
        otp: otpString,
      }
      localStorage.setItem("signInFormData", JSON.stringify(updatedData))
    } else {
      localStorage.setItem("signInFormData", JSON.stringify({ otp: otpString }))
    }

    if (onNext) {
      onNext({ otp: otpString })
    }
  }

  const handlePrevious = () => {
    if (onPrevious) {
      onPrevious()
    }
  }

  const handleResendOTP = () => {
    alert("OTP has been resent to your registered mobile number")
  }

  return (
    <div className="otp-container">
      {/* Enhanced Animated Bubble Background */}
      <div className="otp-background">
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

        {/* Animated Gradient Bubble Orbs */}
        <div className="bubble-orb orb-1"></div>
        <div className="bubble-orb orb-2"></div>
        <div className="bubble-orb orb-3"></div>
        <div className="bubble-orb orb-4"></div>
        <div className="bubble-orb orb-5"></div>
      </div>

      <div className="otp-header">
        <div className="hex-pattern">
          <svg width="100%" height="100%" viewBox="0 0 60 60" className="w-full h-full">
            <defs>
              <pattern id="otpHexPattern" x="0" y="0" width="30" height="26" patternUnits="userSpaceOnUse">
                <path d="M15,2 L25,8 L25,20 L15,26 L5,20 L5,8 Z" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#otpHexPattern)" />
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
          <div className="header-icon-left">
            <Heart className="w-8 h-8 text-white heartbeat-icon" />
          </div>
          <div className="header-icon-center">
            <Activity className="w-10 h-10 text-white" />
          </div>
        </div>

        <div className="dna-helix">
          <svg width="40" height="128" viewBox="0 0 40 128">
            <path
              d="M10,0 Q25,16 30,32 Q25,48 10,64 Q25,80 30,96 Q25,112 10,128"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="3,3"
              className="dna-strand-1"
            />
            <path
              d="M30,0 Q15,16 10,32 Q15,48 30,64 Q15,80 10,96 Q15,112 30,128"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="3,3"
              className="dna-strand-2"
            />
          </svg>
        </div>

        <div className="medical-cross">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <path d="M16,6 L16,26 M6,16 L26,16" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <div className="gradient-overlay"></div>
      </div>

      <div className="otp-content">
        <div className="otp-form-header">
          <h1 className="otp-title">Verify OTP</h1>
          <p className="otp-subtitle">Please enter the 4-digit OTP sent to your registered mobile number</p>
        </div>

        <div className="otp-fields">
          <div className="field-group">
            <Label className="otp-label">
              <div className="label-dot"></div>
              Enter OTP :
            </Label>
            <div className="otp-blocks-container">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength="1"
                  className="otp-block"
                  value={otp[index] || ""}
                  onChange={(e) => handleDigitChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>
            <div className="resend-container">
              <button onClick={handleResendOTP} className="resend-button">
                Resend OTP
              </button>
            </div>
          </div>
        </div>

        <div className="otp-buttons">
          <Button onClick={handlePrevious} className="previous-button">
            Previous
          </Button>
          <Button onClick={handleVerifyOTP} disabled={isLoading} className="verify-button">
            {isLoading ? (
              <div className="loading-content">
                <div className="loading-spinner"></div>
                Verifying...
              </div>
            ) : (
              <>
                <span className="button-text">Verify</span>
                <div className="button-overlay"></div>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
