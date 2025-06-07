import { useState, useEffect } from "react"
import "./SpecialistPage.css"

// Clean SVG icons
const Search = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
)

const ArrowLeft = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="m12 19-7-7 7-7"></path>
    <path d="M19 12H5"></path>
  </svg>
)

const Star = ({ className = "", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
  </svg>
)

const Clock = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12,6 12,12 16,14"></polyline>
  </svg>
)

const MapPin = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
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

const Filter = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6.001V4z"
    />
  </svg>
)

export default function SpecialistPage({ hospitalId, onBack, onSpecialistSelect }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const hospitalData = {
    "apollo-chennai": {
      name: "Apollo Hospitals",
      location: "Greams Road, Chennai",
    },
    "fortis-chennai": {
      name: "Fortis Malar Hospital",
      location: "Adyar, Chennai",
    },
    "vijaya-chennai": {
      name: "Vijaya Hospital",
      location: "Vadapalani, Chennai",
    },
    "gleneagles-chennai": {
      name: "Gleneagles Global Health City",
      location: "Perumbakkam, Chennai",
    },
    "stanley-chennai": {
      name: "Stanley Medical College Hospital",
      location: "Old Jail Road, Chennai",
    },
  }

  const hospital = hospitalData[hospitalId] || {
    name: "Hospital",
    location: "Chennai",
  }

  const specialists = [
    {
      id: "dr-rajesh-kumar",
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      experience: "15 years",
      rating: 4.9,
      education: "MBBS, MD, DM Cardiology",
      availability: "Mon-Sat",
      nextSlot: "Today 2:00 PM",
      consultationFee: 800,
      languages: ["English", "Hindi", "Tamil"],
    },
    {
      id: "dr-priya-sharma",
      name: "Dr. Priya Sharma",
      specialty: "Neurologist",
      experience: "12 years",
      rating: 4.8,
      education: "MBBS, MD Neurology",
      availability: "Mon-Fri",
      nextSlot: "Tomorrow 10:00 AM",
      consultationFee: 750,
      languages: ["English", "Hindi"],
    },
    {
      id: "dr-arun-patel",
      name: "Dr. Arun Patel",
      specialty: "Orthopedic Surgeon",
      experience: "18 years",
      rating: 4.7,
      education: "MBBS, MS Orthopedics",
      availability: "Tue-Sun",
      nextSlot: "Today 4:30 PM",
      consultationFee: 900,
      languages: ["English", "Gujarati", "Hindi"],
    },
  ]

  const filteredSpecialists = specialists.filter(
    (specialist) =>
      specialist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      specialist.specialty.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSpecialistClick = (doctorId) => {
    if (onSpecialistSelect) {
      onSpecialistSelect(doctorId)
    }
  }

  const handleBack = () => {
    if (onBack) {
      onBack()
    }
  }

  return (
    <div className="clean-specialist-container">
      {/* Clean Header */}
      <div className="clean-header">
        <div className="clean-header-content">
          <button onClick={handleBack} className="clean-back-button">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="clean-hospital-info">
            <h1 className="clean-hospital-title">{hospital.name}</h1>
            <div className="clean-location-info">
              <MapPin className="w-4 h-4" />
              <span className="clean-location-text">{hospital.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Search Section */}
      <div className="clean-search-section">
        <div className="clean-search-wrapper">
          <input
            type="text"
            placeholder="Search specialists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="clean-search-input"
          />
          <Search className="clean-search-icon" />
        </div>
        <button onClick={() => setShowFilters(!showFilters)} className="clean-filter-button">
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Clean Specialists List */}
      <div className="clean-specialists-list">
        {filteredSpecialists.map((specialist) => (
          <div
            key={specialist.id}
            className="clean-specialist-card"
            onClick={() => handleSpecialistClick(specialist.id)}
          >
            {/* Doctor Avatar */}
            <div className="clean-doctor-avatar">
              <User className="w-12 h-12 text-teal-600" />
            </div>

            {/* Doctor Info */}
            <div className="clean-doctor-info">
              {/* Name and Rating Row */}
              <div className="clean-name-rating-row">
                <h3 className="clean-doctor-name">{specialist.name}</h3>
                <div className="clean-rating">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="clean-rating-text">{specialist.rating}</span>
                </div>
              </div>

              {/* Specialty and Education */}
              <div className="clean-specialty-section">
                <p className="clean-specialty">{specialist.specialty}</p>
                <p className="clean-education">{specialist.education}</p>
              </div>

              {/* Stats Row */}
              <div className="clean-stats-row">
                <div className="clean-stat">
                  <Award className="w-4 h-4 text-blue-500" />
                  <div className="clean-stat-content">
                    <span className="clean-stat-label">Experience</span>
                    <span className="clean-stat-value">{specialist.experience}</span>
                  </div>
                </div>
                <div className="clean-stat">
                  <Calendar className="w-4 h-4 text-green-500" />
                  <div className="clean-stat-content">
                    <span className="clean-stat-label">Available</span>
                    <span className="clean-stat-value">{specialist.availability}</span>
                  </div>
                </div>
                <div className="clean-stat">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <div className="clean-stat-content">
                    <span className="clean-stat-label">Next Slot</span>
                    <span className="clean-stat-value">{specialist.nextSlot}</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="clean-languages">
                {specialist.languages.map((language, idx) => (
                  <span key={idx} className="clean-language-badge">
                    {language}
                  </span>
                ))}
              </div>

              {/* Fee and Book Button */}
              <div className="clean-booking-row">
                <div className="clean-fee">
                  <span className="clean-fee-label">Consultation Fee:</span>
                  <span className="clean-fee-amount">₹{specialist.consultationFee}</span>
                </div>
                <button className="clean-book-button">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredSpecialists.length === 0 && (
        <div className="clean-no-results">
          <User className="w-16 h-16 text-gray-400" />
          <h3 className="clean-no-results-title">No specialists found</h3>
          <p className="clean-no-results-text">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  )
}
