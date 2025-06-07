import { useEffect, useState } from "react"
import { Button } from "./src/components/Button"
import { Input } from "./src/components/Input"
import { Heart, Activity, Stethoscope, Plus } from "./src/components/Icons"
import "./HomePage.css"

// Additional icons as SVG components
const Search = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
)

const MoreHorizontal = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="19" cy="12" r="1"></circle>
    <circle cx="5" cy="12" r="1"></circle>
  </svg>
)

const MessageCircle = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
)

const Microscope = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M6 18h8"></path>
    <path d="M3 22h18"></path>
    <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
    <path d="M9 14h.01"></path>
    <path d="M15 2v4"></path>
    <path d="M11 4h4"></path>
    <path d="M12 2v2"></path>
  </svg>
)

const Building2 = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
    <path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2"></path>
    <path d="M10 6h4"></path>
    <path d="M10 10h4"></path>
    <path d="M10 14h4"></path>
    <path d="M10 18h4"></path>
  </svg>
)

const User = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

const Smile = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="m9 9 1.5 1.5L9 12"></path>
    <path d="m15 9-1.5 1.5L15 12"></path>
    <path d="M8 15s1.5 2 4 2 4-2 4-2"></path>
  </svg>
)

const Brain = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
    <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
    <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
  </svg>
)

const ChevronRight = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="m9 18 6-6-6-6"></path>
  </svg>
)

const ArrowLeft = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="m12 19-7-7 7-7"></path>
    <path d="M19 12H5"></path>
  </svg>
)

const LifeBuoy = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="m4.93 4.93 4.24 4.24"></path>
    <path d="m14.83 9.17 4.24-4.24"></path>
    <path d="m14.83 14.83 4.24 4.24"></path>
    <path d="m9.17 14.83-4.24 4.24"></path>
    <circle cx="12" cy="12" r="4"></circle>
  </svg>
)

const DoorOpen = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M13 4h3a2 2 0 0 1 2 2v14"></path>
    <path d="M2 20h3"></path>
    <path d="M13 20h9"></path>
    <path d="M13 4v16"></path>
    <path d="M13 8h3"></path>
  </svg>
)

const Zap = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
  </svg>
)

const Dental = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M8 21s-4-3-4-9 4-9 4-9 4 3 4 9-4 9-4 9z" />
    <path d="m16 21s4-3 4-9-4-9-4-9-4 3-4 9 4 9 4 9z" />
  </svg>
)

const Bell = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
)

const services = [
  {
    icon: Microscope,
    label: "Laboratory and scans",
    color: "text-teal-600",
    bgColor: "bg-gradient-to-br from-teal-50 to-teal-100",
    hoverColor: "hover:from-teal-100 hover:to-teal-200",
  },
  {
    icon: Building2,
    label: "Hospital",
    color: "text-blue-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    hoverColor: "hover:from-blue-100 hover:to-blue-200",
  },
  {
    icon: Stethoscope,
    label: "General Physician",
    color: "text-green-600",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100",
    hoverColor: "hover:from-green-100 hover:to-green-200",
  },
  {
    icon: User,
    label: "Skincare and Hair",
    color: "text-purple-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    hoverColor: "hover:from-purple-100 hover:to-purple-200",
  },
  {
    icon: Dental,
    label: "Dental Care",
    color: "text-indigo-600",
    bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    hoverColor: "hover:from-indigo-100 hover:to-indigo-200",
  },
  {
    icon: Brain,
    label: "Mental Health",
    color: "text-pink-600",
    bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
    hoverColor: "hover:from-pink-100 hover:to-pink-200",
  },
  {
    icon: Smile,
    label: "Child Specialist",
    color: "text-orange-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
    hoverColor: "hover:from-orange-100 hover:to-orange-200",
  },
  {
    icon: () => (
      <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold text-sm shadow-lg">
        20+
      </div>
    ),
    label: "More",
    color: "text-gray-600",
    bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
    hoverColor: "hover:from-gray-100 hover:to-gray-200",
  },
]

const slides = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/h8.jpg-TDE6lca50dlsfbHF9MzreRr7Iy5mP1.jpeg",
    alt: "Advanced Respiratory Monitoring System - CPAP/Ventilator Display",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/h2.jpg-V53N5QyOFrjWn2lSDVfMiD0Nb79B6y.jpeg",
    alt: "Apollo Specialty Hospitals - Modern Healthcare Facility",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/h7.jpg-5d07ljB8kpulFLD5I3vYoTySNBmuyu.jpeg",
    alt: "Modern MRI/CT Scanner - Philips Medical Imaging Equipment",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/h1.jpg-Yl8pq9DKkNHpsh7CaWrlWAdVeEMQKW.jpeg",
    alt: "Apollo Hospitals - Multi-Specialty Medical Center",
  },
]

const familyMembers = [
  { name: "MOM", color: "bg-gradient-to-r from-green-400 to-green-500" },
  { name: "DAUGHTER", color: "bg-gradient-to-r from-purple-400 to-purple-500" },
  { name: "FATHER", color: "bg-gradient-to-r from-yellow-400 to-yellow-500" },
]

export default function HomePage({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [userData, setUserData] = useState({
    fullName: "",
    abhaId: "",
    age: "",
  })

  const [notifications, setNotifications] = useState([])
  const [showNotifications, setShowNotifications] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const savedData = localStorage.getItem("signInFormData")
    if (savedData) {
      const parsedData = JSON.parse(savedData)

      let calculatedAge = ""
      if (parsedData.dateOfBirth) {
        const birthDate = new Date(parsedData.dateOfBirth)
        const today = new Date()
        let age = today.getFullYear() - birthDate.getFullYear()
        const monthDiff = today.getMonth() - birthDate.getMonth()

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--
        }
        calculatedAge = age.toString()
      }

      setUserData({
        fullName: parsedData.fullName || "Not provided",
        abhaId: parsedData.abhaId || "Not provided",
        age: calculatedAge || "Not provided",
      })
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setImageLoaded(false)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Check for appointment notifications
    const checkForAppointments = () => {
      const appointmentData = localStorage.getItem("appointmentData")
      if (appointmentData) {
        try {
          const appointment = JSON.parse(appointmentData)

          // Create notification for the appointment
          const newNotification = {
            id: appointment.appointmentId || Date.now().toString(),
            title: "Appointment Confirmed!",
            message: `Your appointment with ${appointment.doctorName || "Dr. Kumar"} is confirmed for ${appointment.date || "Today"} at ${appointment.time || "10:00 AM"}`,
            time: new Date(),
            read: false,
            type: "appointment",
          }

          // Check if this notification already exists
          setNotifications((prev) => {
            const exists = prev.some((n) => n.id === newNotification.id)
            if (!exists) {
              return [newNotification, ...prev]
            }
            return prev
          })
        } catch (error) {
          console.error("Error parsing appointment data:", error)
        }
      }
    }

    checkForAppointments()
  }, [])

  const handleSettingsClick = () => {
    setShowSettings(true)
  }

  const handleCloseSettings = () => {
    setShowSettings(false)
  }

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications)
  }

  const handleNotificationClose = () => {
    setShowNotifications(false)
  }

  const markNotificationAsRead = (notificationId) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === notificationId ? { ...notification, read: true } : notification)),
    )
  }

  const clearAllNotifications = () => {
    setNotifications([])
  }

  const handleServiceClick = (service) => {
    if (service.label === "Hospital") {
      // Navigate to hospital page
      if (onNavigate) {
        onNavigate("hospital")
      }
    } else if (service.label === "General Physician") {
      if (onNavigate) {
        onNavigate("specialty", "general-physician")
      }
    } else if (service.label === "Skincare and Hair") {
      if (onNavigate) {
        onNavigate("specialty", "skincare-hair")
      }
    } else if (service.label === "Dental Care") {
      if (onNavigate) {
        onNavigate("specialty", "dental-care")
      }
    } else if (service.label === "Mental Health") {
      if (onNavigate) {
        onNavigate("specialty", "mental-health")
      }
    } else if (service.label === "Child Specialist") {
      if (onNavigate) {
        onNavigate("specialty", "child-specialist")
      }
    } else if (service.label === "Laboratory and scans") {
      if (onNavigate) {
        onNavigate("specialty", "laboratory-scans")
      }
    } else {
      alert(`${service.label} feature coming soon!`)
    }
  }

  return (
    <div className="betshow-home-container">
      {/* Floating Medical Background */}
      <div className="floating-medical-bg">
        <div className="floating-icon icon-1">
          <Heart className="w-8 h-8 text-red-400" />
        </div>
        <div className="floating-icon icon-2">
          <Stethoscope className="w-10 h-10 text-teal-400" />
        </div>
        <div className="floating-icon icon-3">
          <Plus className="w-6 h-6 text-blue-400" />
        </div>
        <div className="floating-icon icon-4">
          <Activity className="w-9 h-9 text-green-400" />
        </div>
        <div className="floating-icon icon-5">
          <Zap className="w-12 h-12 text-yellow-400" />
        </div>

        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Main Content */}
      <div className={`main-content ${showSettings ? "shifted" : ""}`}>
        {/* Header */}
        <div className="betshow-header">
          <div className="header-pattern">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-30">
              <defs>
                <pattern id="medical-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M10,2 L10,18 M2,10 L18,10" stroke="white" strokeWidth="0.5" strokeLinecap="round" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#medical-grid)" />
            </svg>
          </div>

          <h1 className="betshow-logo">
            <span className="logo-gradient">BETSHOW</span>
          </h1>
          <div className="header-actions">
            <Button onClick={handleNotificationClick} className="notification-button">
              <Bell className="w-6 h-6" />
              {notifications.filter((n) => !n.read).length > 0 && (
                <span className="notification-badge">{notifications.filter((n) => !n.read).length}</span>
              )}
            </Button>
            <Button onClick={handleSettingsClick} className="settings-button">
              <MoreHorizontal className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-section">
          <div className="search-wrapper">
            <Input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <Search className="search-icon" />
            <div className="search-overlay"></div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="carousel-section">
          <div className="carousel-container">
            <div className="carousel-bg-pattern">
              <Heart className="w-4 h-4 text-white carousel-heart" />
              <Activity className="w-4 h-4 text-white carousel-activity" />
            </div>

            <div className="carousel-image-wrapper">
              <img
                src={slides[currentSlide].src || "/placeholder.svg"}
                alt={slides[currentSlide].alt}
                className="carousel-image"
                onLoad={() => setImageLoaded(true)}
              />

              <div className="carousel-dots">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setImageLoaded(false)
                      setCurrentSlide(index)
                    }}
                    className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-section">
          <div className="services-grid">
            {services.map((service, index) => (
              <Button
                key={index}
                onClick={() => handleServiceClick(service)}
                className={`service-card ${service.bgColor} ${service.hoverColor}`}
              >
                <div className="service-overlay"></div>
                <div className={`service-icon ${service.color}`}>
                  <service.icon className="w-12 h-12" />
                </div>
                <span className="service-label">{service.label}</span>
                <div className="service-ping"></div>
              </Button>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="about-section">
          <div className="about-pattern">
            <Stethoscope className="w-8 h-8 about-stethoscope" />
            <Heart className="w-6 h-6 about-heart" />
          </div>

          <div className="about-content">
            <h2 className="about-title">About BETSHOW:</h2>
            <p className="about-text">
              Betshow, founded by engineering students, is developing a system integrating seven medical sensors for
              advanced health monitoring, along with software for patient appointment booking to enhance healthcare
              accessibility.
            </p>
            <p className="about-helpline">
              <span className="helpline-label">Help-line:</span>89xx-890xx
            </p>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <div className="chat-button">
        <Button className="chat-btn">
          <MessageCircle className="w-6 h-6 chat-icon" />
          <div className="chat-ping"></div>
        </Button>
      </div>

      {/* Notification Panel */}
      <div className={`notification-panel ${showNotifications ? "open" : ""}`}>
        <div className="notification-header">
          <h2>Notifications</h2>
          <div className="notification-actions">
            {notifications.length > 0 && (
              <Button onClick={clearAllNotifications} className="clear-notifications-btn">
                Clear All
              </Button>
            )}
            <Button onClick={handleNotificationClose} className="close-notification-btn">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="notification-list">
          {notifications.length === 0 ? (
            <div className="no-notifications">
              <Bell className="w-12 h-12" />
              <p>No notifications</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`notification-item ${notification.read ? "read" : "unread"}`}
                onClick={() => markNotificationAsRead(notification.id)}
              >
                <div className="notification-icon">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div className="notification-content">
                  <h3>{notification.title}</h3>
                  <p>{notification.message}</p>
                  <span className="notification-time">
                    {notification.time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
                {!notification.read && <div className="unread-dot"></div>}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Settings Panel */}
      <div className={`settings-panel ${showSettings ? "open" : ""}`}>
        <div className="settings-pattern">
          <svg width="100%" height="100%" viewBox="0 0 60 60" className="w-full h-full">
            <defs>
              <pattern id="settingsPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M15,5 L15,25 M5,15 L25,15" stroke="white" strokeWidth="1" strokeLinecap="round" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#settingsPattern)" />
          </svg>
        </div>

        <div className="settings-content">
          {/* Settings Header */}
          <div className="settings-header">
            <Button onClick={handleCloseSettings} className="back-button">
              <ArrowLeft className="w-8 h-8" />
            </Button>
            <h1 className="settings-title">Settings</h1>
          </div>

          {/* User Profile */}
          <div className="user-profile">
            <div className="profile-avatar">
              <User className="w-12 h-12 text-red-300" />
              <div className="avatar-pulse"></div>
            </div>
            <div className="profile-info">
              <div className="profile-item">Name: {userData.fullName}</div>
              <div className="profile-item">Abha id: {userData.abhaId}</div>
              <div className="profile-item">Age: {userData.age}</div>
            </div>
          </div>

          {/* Family Members */}
          <div className="family-section">
            {familyMembers.map((member, index) => (
              <div key={index} className="family-member">
                <div className={`family-avatar ${member.color}`}>
                  <User className="w-10 h-10 text-white" />
                </div>
                <div className="family-name">{member.name}</div>
              </div>
            ))}
          </div>

          {/* Settings Options */}
          <div className="settings-options">
            <div className="settings-option">
              <div className="option-content">
                <div className="option-icon">
                  <LifeBuoy className="w-8 h-8 text-white" />
                </div>
                <span className="option-label">HELP</span>
              </div>
              <ChevronRight className="w-6 h-6 text-white option-arrow" />
            </div>

            <div className="settings-option">
              <div className="option-content">
                <div className="option-icon">
                  <User className="w-8 h-8 text-white" />
                </div>
                <span className="option-label">ACCOUNT STATUS</span>
              </div>
              <ChevronRight className="w-6 h-6 text-white option-arrow" />
            </div>

            <div className="settings-option">
              <div className="option-content">
                <div className="option-icon">
                  <DoorOpen className="w-8 h-8 text-white" />
                </div>
                <span className="option-label">EXIT</span>
              </div>
            </div>
          </div>

          {/* Account Actions */}
          <div className="account-actions">
            <div className="action-item login">Login</div>
            <div className="action-item add-account">Add account</div>
            <div className="action-item logout">Log out</div>
            <div className="action-item logout-all">Log out all accounts</div>
          </div>
        </div>
      </div>

      {/* Settings Backdrop */}
      {showSettings && <div className="settings-backdrop" onClick={handleCloseSettings} />}
      {showNotifications && <div className="notification-backdrop" onClick={handleNotificationClose} />}
    </div>
  )
}
