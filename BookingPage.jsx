import { useState, useEffect } from "react"

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

const Star = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
  </svg>
)

const MapPin = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
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

const Calendar = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
)

const User = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

const Award = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="8" r="6"></circle>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
  </svg>
)

const Stethoscope = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
    <circle cx="20" cy="10" r="2"></circle>
  </svg>
)

export default function BookingPage({ doctorId, onBack, onBookingConfirm }) {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [doctor, setDoctor] = useState({
    id: "1",
    name: "Dr. Arun Kumar",
    specialist: "Cardiologist",
    system: "Cardiovascular",
    hospital: "Apollo Hospitals",
    experience: "15 years",
    availability: "moderate",
    busyRate: "Medium",
    consultationFee: 750,
    rating: 4.8,
    qualifications: "MBBS, MD (Cardiology), DM",
    languages: "English, Hindi, Tamil",
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Generate calendar dates for current month
  const generateCalendarDates = () => {
    const today = new Date()
    const currentMonth = today.getMonth()
    const currentYear = today.getFullYear()
    const firstDay = new Date(currentYear, currentMonth, 1)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const dates = []
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)
      dates.push(date)
    }
    return dates
  }

  const calendarDates = generateCalendarDates()
  const today = new Date()

  // Time slots
  const timeSlots = [
    { time: "09:00 AM", available: true, busyRate: "available" },
    { time: "09:30 AM", available: true, busyRate: "available" },
    { time: "10:00 AM", available: true, busyRate: "moderate" },
    { time: "10:30 AM", available: false, busyRate: "busy" },
    { time: "11:00 AM", available: true, busyRate: "moderate" },
    { time: "11:30 AM", available: true, busyRate: "available" },
    { time: "02:00 PM", available: true, busyRate: "available" },
    { time: "02:30 PM", available: true, busyRate: "moderate" },
    { time: "03:00 PM", available: true, busyRate: "available" },
    { time: "03:30 PM", available: false, busyRate: "busy" },
    { time: "04:00 PM", available: true, busyRate: "moderate" },
    { time: "04:30 PM", available: true, busyRate: "available" },
  ]

  const handleBack = () => {
    if (onBack) {
      onBack()
    }
  }

  const handleDateSelect = (date) => {
    if (date >= today) {
      setSelectedDate(date)
      setSelectedTime(null)
    }
  }

  const handleTimeSelect = (timeSlot) => {
    if (timeSlot.available) {
      setSelectedTime(timeSlot.time)
    }
  }

  const handleBookAppointment = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time for your appointment")
      return
    }

    const appointmentData = {
      doctorName: doctor.name,
      doctorId: doctor.id,
      specialist: doctor.specialist,
      hospital: doctor.hospital,
      date: selectedDate.toDateString(),
      time: selectedTime,
      fee: doctor.consultationFee.toString(),
      availability: doctor.availability,
      qualifications: doctor.qualifications,
      languages: doctor.languages,
      experience: doctor.experience,
    }

    if (onBookingConfirm) {
      onBookingConfirm(appointmentData)
    }
  }

  const formatDate = (date) => {
    return date.getDate()
  }

  const isToday = (date) => {
    return date.toDateString() === today.toDateString()
  }

  const isPastDate = (date) => {
    return date < today
  }

  const isCurrentMonth = (date) => {
    return date.getMonth() === today.getMonth()
  }

  const getTimeSlotStyle = (timeSlot) => {
    if (!timeSlot.available) {
      return {
        backgroundColor: "#e5e7eb",
        color: "#6b7280",
        cursor: "not-allowed",
        border: "1px solid #9ca3af",
      }
    }

    if (selectedTime === timeSlot.time) {
      return {
        background: "linear-gradient(45deg, #14b8a6, #0d9488)",
        color: "white",
        border: "1px solid #0f766e",
        boxShadow: "0 4px 12px rgba(20, 184, 166, 0.4)",
      }
    }

    switch (timeSlot.busyRate) {
      case "available":
        return {
          background: "linear-gradient(45deg, #dcfce7, #bbf7d0)",
          color: "#166534",
          border: "1px solid #16a34a",
        }
      case "moderate":
        return {
          background: "linear-gradient(45deg, #fef3c7, #fde68a)",
          color: "#92400e",
          border: "1px solid #d97706",
        }
      default:
        return {
          backgroundColor: "#f9fafb",
          color: "#374151",
          border: "1px solid #e5e7eb",
        }
    }
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* Clean Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0d9488, #0f766e)",
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button
          onClick={handleBack}
          style={{
            background: "transparent",
            color: "white",
            border: "none",
            padding: "0.5rem",
            marginRight: "1rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowLeft style={{ width: "2rem", height: "2rem" }} />
        </button>
        <h1 style={{ fontSize: "1.875rem", fontWeight: "bold", color: "white", margin: 0, flex: 1 }}>BETSHOW</h1>
        <button
          style={{
            background: "transparent",
            color: "white",
            border: "none",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MoreHorizontal style={{ width: "1.5rem", height: "1.5rem" }} />
        </button>
      </div>

      {/* Calendar Section */}
      <div style={{ padding: "1.5rem 1rem" }}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "1rem",
            padding: "1.5rem",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                width: "0.75rem",
                height: "0.75rem",
                backgroundColor: "#3b82f6",
                borderRadius: "50%",
              }}
            />
            <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1f2937", margin: 0 }}>
              Select Appointment Date
            </h2>
            <Calendar style={{ width: "1.25rem", height: "1.25rem", color: "#3b82f6" }} />
          </div>

          {/* Calendar Days Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                style={{
                  textAlign: "center",
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#0d9488",
                  padding: "0.75rem",
                  background: "linear-gradient(45deg, #f0fdfa, #e0f2fe)",
                  borderRadius: "0.5rem",
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Dates */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "0.5rem" }}>
            {calendarDates.map((date, index) => (
              <button
                key={index}
                onClick={() => handleDateSelect(date)}
                disabled={isPastDate(date)}
                style={{
                  height: "3rem",
                  width: "100%",
                  borderRadius: "0.75rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  border: "2px solid #e5e7eb",
                  backgroundColor:
                    selectedDate && selectedDate.toDateString() === date.toDateString()
                      ? "#14b8a6"
                      : isToday(date)
                        ? "#dbeafe"
                        : isPastDate(date)
                          ? "#f9fafb"
                          : "white",
                  color:
                    selectedDate && selectedDate.toDateString() === date.toDateString()
                      ? "white"
                      : isToday(date)
                        ? "#0d9488"
                        : isPastDate(date)
                          ? "#d1d5db"
                          : isCurrentMonth(date)
                            ? "#1f2937"
                            : "#9ca3af",
                  cursor: isPastDate(date) ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {formatDate(date)}
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        {selectedDate && (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "1rem",
              padding: "1.5rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e5e7eb",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "0.75rem",
                  height: "0.75rem",
                  backgroundColor: "#10b981",
                  borderRadius: "50%",
                }}
              />
              <h3 style={{ fontSize: "1.125rem", fontWeight: "bold", color: "#1f2937", margin: 0 }}>
                Available Time Slots
              </h3>
              <Clock style={{ width: "1.25rem", height: "1.25rem", color: "#10b981" }} />
            </div>

            {/* Legend */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "1.5rem",
                padding: "1rem",
                background: "linear-gradient(45deg, #f9fafb, #e0f2fe)",
                borderRadius: "0.75rem",
                border: "1px solid #e5e7eb",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div
                  style={{
                    width: "1rem",
                    height: "1rem",
                    background: "linear-gradient(45deg, #dcfce7, #bbf7d0)",
                    border: "1px solid #16a34a",
                    borderRadius: "0.25rem",
                  }}
                />
                <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#374151" }}>Available</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div
                  style={{
                    width: "1rem",
                    height: "1rem",
                    background: "linear-gradient(45deg, #fef3c7, #fde68a)",
                    border: "1px solid #d97706",
                    borderRadius: "0.25rem",
                  }}
                />
                <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#374151" }}>Moderate</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div
                  style={{
                    width: "1rem",
                    height: "1rem",
                    backgroundColor: "#e5e7eb",
                    border: "1px solid #9ca3af",
                    borderRadius: "0.25rem",
                  }}
                />
                <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#374151" }}>Unavailable</span>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "1rem",
              }}
            >
              {timeSlots.map((timeSlot, index) => (
                <button
                  key={index}
                  onClick={() => handleTimeSelect(timeSlot)}
                  disabled={!timeSlot.available}
                  style={{
                    padding: "1rem",
                    borderRadius: "0.75rem",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    cursor: timeSlot.available ? "pointer" : "not-allowed",
                    textAlign: "center",
                    ...getTimeSlotStyle(timeSlot),
                  }}
                >
                  <div style={{ fontSize: "1rem", fontWeight: "bold" }}>{timeSlot.time}</div>
                  {timeSlot.available && (
                    <div style={{ fontSize: "0.75rem", opacity: 0.8, marginTop: "0.25rem" }}>
                      {timeSlot.busyRate === "available"
                        ? "Available"
                        : timeSlot.busyRate === "moderate"
                          ? "Moderate"
                          : "Busy"}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Doctor Details */}
      <div style={{ padding: "1.5rem 1rem 8rem" }}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "1rem",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
            overflow: "hidden",
          }}
        >
          {/* Doctor Header */}
          <div
            style={{
              background: "linear-gradient(45deg, rgba(20, 184, 166, 0.1), rgba(59, 130, 246, 0.1))",
              padding: "1rem 1.5rem",
              borderBottom: "1px solid #f0fdfa",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "0.75rem",
                  height: "0.75rem",
                  backgroundColor: "#14b8a6",
                  borderRadius: "50%",
                }}
              />
              <span style={{ fontSize: "0.875rem", fontWeight: "bold", color: "#0d9488" }}>MEDICAL PROFESSIONAL</span>
              <Stethoscope style={{ width: "1rem", height: "1rem", color: "#14b8a6" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  backgroundColor: "#10b981",
                  borderRadius: "50%",
                }}
              />
              <span style={{ fontSize: "0.75rem", fontWeight: "500", color: "#059669" }}>AVAILABLE</span>
            </div>
          </div>

          <div style={{ padding: "1.5rem" }}>
            {/* Doctor Info */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    width: "6rem",
                    height: "6rem",
                    background: "linear-gradient(135deg, #f0fdfa, #dbeafe)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "4px solid white",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <User style={{ width: "3rem", height: "3rem", color: "#14b8a6" }} />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-0.25rem",
                    right: "-0.25rem",
                    width: "1.5rem",
                    height: "1.5rem",
                    backgroundColor: "#10b981",
                    borderRadius: "50%",
                    border: "2px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>

              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#0d9488",
                    marginBottom: "0.5rem",
                  }}
                >
                  {doctor.name}
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Stethoscope style={{ width: "1rem", height: "1rem", color: "#14b8a6" }} />
                  <p
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      color: "#0f766e",
                      margin: 0,
                    }}
                  >
                    {doctor.specialist}
                  </p>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "linear-gradient(45deg, #e0f2fe, #f0fdfa)",
                    padding: "0.5rem 0.75rem",
                    borderRadius: "9999px",
                    border: "1px solid #bae6fd",
                  }}
                >
                  <Award style={{ width: "0.75rem", height: "0.75rem", color: "#0369a1" }} />
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#0369a1",
                      margin: 0,
                    }}
                  >
                    {doctor.qualifications}
                  </p>
                </div>
              </div>
            </div>

            {/* Medical Info Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  border: "1px solid #bae6fd",
                  background: "linear-gradient(45deg, #e0f2fe, #e0e7ff)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <MapPin style={{ width: "1.25rem", height: "1.25rem", color: "#1d4ed8" }} />
                  <div>
                    <span style={{ fontSize: "0.875rem", fontWeight: "bold", color: "#374151" }}>Hospital:</span>
                    <p style={{ fontWeight: "600", margin: 0, color: "#1d4ed8" }}>{doctor.hospital}</p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  border: "1px solid #bbf7d0",
                  background: "linear-gradient(45deg, #dcfce7, #d1fae5)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Clock style={{ width: "1.25rem", height: "1.25rem", color: "#166534" }} />
                  <div>
                    <span style={{ fontSize: "0.875rem", fontWeight: "bold", color: "#374151" }}>Experience:</span>
                    <p style={{ fontWeight: "600", margin: 0, color: "#166534" }}>{doctor.experience}</p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  border: "1px solid #fde68a",
                  background: "linear-gradient(45deg, #fef3c7, #fed7aa)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <DollarSign style={{ width: "1.25rem", height: "1.25rem", color: "#92400e" }} />
                  <div>
                    <span style={{ fontSize: "0.875rem", fontWeight: "bold", color: "#374151" }}>
                      Consultation Fee:
                    </span>
                    <p
                      style={{
                        color: "#92400e",
                        fontWeight: "bold",
                        fontSize: "1.125rem",
                        margin: 0,
                      }}
                    >
                      ₹{doctor.consultationFee}
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  border: "1px solid #f8bbd9",
                  background: "linear-gradient(45deg, #fce7f3, #f3e8ff)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Star style={{ width: "1.25rem", height: "1.25rem", color: "#7c3aed", fill: "#7c3aed" }} />
                  <div>
                    <span style={{ fontSize: "0.875rem", fontWeight: "bold", color: "#374151" }}>Rating:</span>
                    <p style={{ fontWeight: "600", margin: 0, color: "#7c3aed" }}>{doctor.rating}/5.0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div
              style={{
                padding: "1rem",
                borderRadius: "0.75rem",
                border: "1px solid #a7f3d0",
                background: "linear-gradient(45deg, #f0fdfa, #ecfdf5)",
                marginBottom: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <svg
                  style={{ width: "1.25rem", height: "1.25rem", color: "#14b8a6" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <div>
                  <span style={{ fontSize: "0.875rem", fontWeight: "bold", color: "#374151" }}>Languages:</span>
                  <p style={{ fontWeight: "600", margin: 0, color: "#059669" }}>{doctor.languages}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Appointment Button */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(to top, white, rgba(255, 255, 255, 0.95), transparent)",
          borderTop: "1px solid #e5e7eb",
          padding: "1rem",
        }}
      >
        <button
          onClick={handleBookAppointment}
          disabled={!selectedDate || !selectedTime}
          style={{
            width: "100%",
            background: !selectedDate || !selectedTime ? "#9ca3af" : "linear-gradient(45deg, #14b8a6, #0d9488)",
            color: "white",
            fontSize: "1.125rem",
            fontWeight: "bold",
            padding: "1rem",
            borderRadius: "0.75rem",
            border: "none",
            cursor: !selectedDate || !selectedTime ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            boxShadow: !selectedDate || !selectedTime ? "none" : "0 4px 12px rgba(20, 184, 166, 0.3)",
            opacity: !selectedDate || !selectedTime ? 0.5 : 1,
          }}
        >
          <Calendar style={{ width: "1.25rem", height: "1.25rem" }} />
          BOOK APPOINTMENT
          <Stethoscope style={{ width: "1.25rem", height: "1.25rem" }} />
        </button>
      </div>
    </div>
  )
}
