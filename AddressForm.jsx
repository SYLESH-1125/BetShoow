import { useState, useEffect, useRef } from "react"
import { Button } from "./src/components/Button"
import { Input } from "./src/components/Input"
import { Label } from "./src/components/Label"
import { Heart, Activity, Stethoscope, Plus } from "./src/components/Icons"
import "./AddressForm.css"

const cityOptions = [
  { value: "chennai", label: "Chennai" },
  { value: "coimbatore", label: "Coimbatore" },
  { value: "madurai", label: "Madurai" },
  { value: "tiruchirappalli", label: "Tiruchirappalli" },
  { value: "salem", label: "Salem" },
  { value: "tirunelveli", label: "Tirunelveli" },
  { value: "erode", label: "Erode" },
  { value: "vellore", label: "Vellore" },
  { value: "thanjavur", label: "Thanjavur" },
  { value: "dindigul", label: "Dindigul" },
  { value: "tiruppur", label: "Tiruppur" },
  { value: "nagercoil", label: "Nagercoil" },
  { value: "kanchipuram", label: "Kanchipuram" },
  { value: "karur", label: "Karur" },
  { value: "sivakasi", label: "Sivakasi" },
  { value: "udhagamandalam", label: "Udhagamandalam (Ooty)" },
  { value: "hosur", label: "Hosur" },
  { value: "nandyal", label: "Nandyal" },
  { value: "kumbakonam", label: "Kumbakonam" },
  { value: "pudukkottai", label: "Pudukkottai" },
  { value: "rajapalayam", label: "Rajapalayam" },
  { value: "pollachi", label: "Pollachi" },
  { value: "palani", label: "Palani" },
  { value: "ambur", label: "Ambur" },
  { value: "thiruvallur", label: "Thiruvallur" },
  { value: "vaniyambadi", label: "Vaniyambadi" },
  { value: "theni", label: "Theni" },
  { value: "arakkonam", label: "Arakkonam" },
  { value: "virudhunagar", label: "Virudhunagar" },
  { value: "namakkal", label: "Namakkal" },
  { value: "rasipuram", label: "Rasipuram" },
  { value: "tiruvottiyur", label: "Tiruvottiyur" },
  { value: "krishnagiri", label: "Krishnagiri" },
  { value: "yercaud", label: "Yercaud" },
  { value: "mettupalayam", label: "Mettupalayam" },
  { value: "chidambaram", label: "Chidambaram" },
  { value: "tiruvannamalai", label: "Tiruvannamalai" },
  { value: "udumalaipettai", label: "Udumalaipettai" },
  { value: "gobichettipalayam", label: "Gobichettipalayam" },
  { value: "cuddalore", label: "Cuddalore" },
  { value: "mayiladuthurai", label: "Mayiladuthurai" },
  { value: "dharmapuri", label: "Dharmapuri" },
  { value: "gudiyatham", label: "Gudiyatham" },
  { value: "viluppuram", label: "Viluppuram" },
  { value: "tindivanam", label: "Tindivanam" },
  { value: "arani", label: "Arani" },
  { value: "pallavaram", label: "Pallavaram" },
  { value: "tambaram", label: "Tambaram" },
  { value: "avadi", label: "Avadi" },
  { value: "tiruvallur", label: "Tiruvallur" },
  { value: "kanyakumari", label: "Kanyakumari" },
  { value: "rameswaram", label: "Rameswaram" },
]

export default function AddressForm({ onNext, onPrevious }) {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    city: "",
    address: "",
    pinCode: "",
  })
  const [showCityList, setShowCityList] = useState(false)
  const citySelectRef = useRef(null)
  const cityTriggerRef = useRef(null)
  const [triggerPosition, setTriggerPosition] = useState({ top: 0 })

  useEffect(() => {
    window.scrollTo(0, 0)

    const savedData = localStorage.getItem("signInFormData")
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      setFormData({
        phoneNumber: parsedData.phoneNumber || "",
        city: parsedData.city || "",
        address: parsedData.address || "",
        pinCode: parsedData.pinCode || "",
      })
    }

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (
        citySelectRef.current &&
        !citySelectRef.current.contains(event.target) &&
        !cityTriggerRef.current.contains(event.target)
      ) {
        setShowCityList(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (showCityList && cityTriggerRef.current) {
      const rect = cityTriggerRef.current.getBoundingClientRect()
      setTriggerPosition({
        top: rect.bottom + window.scrollY,
      })
    }
  }, [showCityList])

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

  const handleCitySelect = (cityValue) => {
    setFormData((prev) => ({
      ...prev,
      city: cityValue,
    }))
    setShowCityList(false)
  }

  const handleNext = () => {
    if (!formData.phoneNumber.trim()) {
      alert("Please enter your Phone Number")
      return
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      alert("Phone Number must be exactly 10 digits")
      return
    }

    if (!formData.city) {
      alert("Please select your City")
      return
    }

    if (!formData.address.trim()) {
      alert("Please enter your Address")
      return
    }

    if (!formData.pinCode.trim()) {
      alert("Please enter your Pin Code")
      return
    }

    const savedData = localStorage.getItem("signInFormData")
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      const updatedData = {
        ...parsedData,
        phoneNumber: formData.phoneNumber,
        city: formData.city,
        address: formData.address,
        pinCode: formData.pinCode,
      }
      localStorage.setItem("signInFormData", JSON.stringify(updatedData))
    }

    if (onNext) {
      onNext(formData)
    }
  }

  const handlePrevious = () => {
    const savedData = localStorage.getItem("signInFormData")
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      const updatedData = {
        ...parsedData,
        phoneNumber: formData.phoneNumber,
        city: formData.city,
        address: formData.address,
        pinCode: formData.pinCode,
      }
      localStorage.setItem("signInFormData", JSON.stringify(updatedData))
    }

    if (onPrevious) {
      onPrevious()
    }
  }

  const selectedCity = cityOptions.find((city) => city.value === formData.city)

  return (
    <div className="address-container">
      {/* Enhanced Animated Bubble Background */}
      <div className="address-background">
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

      <div className="address-header">
        <div className="hex-pattern">
          <svg width="100%" height="100%" viewBox="0 0 60 60" className="w-full h-full">
            <defs>
              <pattern id="hexPattern" x="0" y="0" width="30" height="26" patternUnits="userSpaceOnUse">
                <path d="M15,2 L25,8 L25,20 L15,26 L5,20 L5,8 Z" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexPattern)" />
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

      <div className="address-content">
        <div className="address-fields">
          <div className="field-group">
            <Label className="address-label">Phone Number :</Label>
            <Input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              className="address-input"
              required
            />
          </div>

          <div className="field-group">
            <Label className="address-label">City</Label>
            <div className="city-select-container">
              <div ref={cityTriggerRef} className="city-select-trigger" onClick={() => setShowCityList(!showCityList)}>
                <span className="city-select-value">{selectedCity ? selectedCity.label : "Select city"}</span>
                <svg
                  className={`city-select-arrow ${showCityList ? "rotate" : ""}`}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                >
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          <div className="field-group">
            <Label className="address-label">Address</Label>
            <Input
              type="text"
              placeholder="Enter your address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="address-input"
              required
            />
          </div>

          <div className="field-group">
            <Label className="address-label">Pin code</Label>
            <Input
              type="text"
              placeholder="Pin code"
              value={formData.pinCode}
              onChange={(e) => handleInputChange("pinCode", e.target.value)}
              className="address-input"
              required
            />
          </div>
        </div>

        <div className="address-buttons">
          <Button onClick={handlePrevious} className="previous-button">
            Previous
          </Button>
          <Button onClick={handleNext} className="next-button">
            Next
          </Button>
        </div>
      </div>

      {/* Overlay city list that doesn't affect layout */}
      {showCityList && (
        <div ref={citySelectRef} className="city-list-container" style={{ top: triggerPosition.top + "px" }}>
          <div className="city-list-grid">
            {cityOptions.map((city) => (
              <div
                key={city.value}
                className={`city-item ${formData.city === city.value ? "selected" : ""}`}
                onClick={() => handleCitySelect(city.value)}
              >
                {city.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
