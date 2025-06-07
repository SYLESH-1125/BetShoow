import { useState, useEffect } from "react"
import { Button } from "./src/components/Button"
import { Input } from "./src/components/Input"
import { Label } from "./src/components/Label"
import { Heart, Activity, Stethoscope, Plus } from "./src/components/Icons"
import "./AbhaForm.css"

export default function AbhaForm({ onNext, onPrevious }) {
  const [abhaId, setAbhaId] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const savedData = localStorage.getItem("signInFormData")
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      if (parsedData.abhaId) {
        setAbhaId(parsedData.abhaId)
      }
    }
  }, [])

  const handleInputChange = (value) => {
    setAbhaId(value)
  }

  const handleGetOTP = () => {
    if (!abhaId.trim()) {
      alert("Please enter your ABHA ID")
      return
    }

    const savedData = localStorage.getItem("signInFormData")
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      const updatedData = {
        ...parsedData,
        abhaId: abhaId,
      }
      localStorage.setItem("signInFormData", JSON.stringify(updatedData))
    } else {
      localStorage.setItem("signInFormData", JSON.stringify({ abhaId }))
    }

    if (onNext) {
      onNext({ abhaId })
    }
  }

  const handlePrevious = () => {
    const savedData = localStorage.getItem("signInFormData")
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      const updatedData = {
        ...parsedData,
        abhaId: abhaId,
      }
      localStorage.setItem("signInFormData", JSON.stringify(updatedData))
    }

    if (onPrevious) {
      onPrevious()
    }
  }

  return (
    <div className="abha-container">
      {/* Enhanced Animated Bubble Background */}
      <div className="abha-background">
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

        <div className="bubble-orb orb-1"></div>
        <div className="bubble-orb orb-2"></div>
        <div className="bubble-orb orb-3"></div>
        <div className="bubble-orb orb-4"></div>
        <div className="bubble-orb orb-5"></div>
      </div>

      <div className="abha-header">
        <div className="hex-pattern">
          <svg width="100%" height="100%" viewBox="0 0 60 60" className="w-full h-full">
            <defs>
              <pattern id="abhaHexPattern" x="0" y="0" width="30" height="26" patternUnits="userSpaceOnUse">
                <path d="M15,2 L25,8 L25,20 L15,26 L5,20 L5,8 Z" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#abhaHexPattern)" />
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

      <div className="abha-content">
        <div className="abha-form-header">
          <h1 className="abha-title">ABHA ID</h1>
          <p className="abha-subtitle">Please enter your Ayushman Bharat Health Account (ABHA) ID to proceed</p>
        </div>

        <div className="abha-fields">
          <div className="field-group">
            <Label className="abha-label">
              <div className="label-dot"></div>
              ABHA ID :
            </Label>
            <div className="input-wrapper">
              <Input
                type="text"
                placeholder="Enter your ABHA ID"
                value={abhaId}
                onChange={(e) => handleInputChange(e.target.value)}
                className="abha-input"
                required
              />
              <div className="input-overlay"></div>
            </div>
          </div>
        </div>

        <div className="abha-buttons">
          <Button onClick={handlePrevious} className="previous-button">
            Previous
          </Button>
          <Button onClick={handleGetOTP} className="get-otp-button">
            Get OTP
          </Button>
        </div>
      </div>
    </div>
  )
}
