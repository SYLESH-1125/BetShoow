import { useState, useEffect } from "react"
import { Button } from "./src/components/Button"
import { Input } from "./src/components/Input"
import { Heart, Activity, Stethoscope, Plus } from "./src/components/Icons"
import "./Speciality"

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

const Filter = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"></polygon>
  </svg>
)

const User = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

const MoreHorizontal = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="19" cy="12" r="1"></circle>
    <circle cx="5" cy="12" r="1"></circle>
  </svg>
)

export default function SpecialtyPage({ specialtyType, onBack, onDoctorSelect }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilter, setShowFilter] = useState(false)
  const [filters, setFilters] = useState({
    hospital: "all",
    experience: "all",
    availability: "all",
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const specialtyData = {
    "general-physician": {
      title: "General Physician",
      doctors: [
        {
          id: 1,
          name: "Dr. Rajesh Kumar",
          system: "Primary Care",
          hospital: "Apollo Hospitals",
          experience: "12 years",
          experienceYears: 12,
          availability: "available",
          busyRate: "Low",
        },
        {
          id: 2,
          name: "Dr. Priya Sharma",
          system: "Family Medicine",
          hospital: "Fortis Healthcare",
          experience: "8 years",
          experienceYears: 8,
          availability: "moderate",
          busyRate: "Medium",
        },
        {
          id: 3,
          name: "Dr. Amit Patel",
          system: "Internal Medicine",
          hospital: "Max Healthcare",
          experience: "15 years",
          experienceYears: 15,
          availability: "busy",
          busyRate: "High",
        },
        {
          id: 4,
          name: "Dr. Sunita Gupta",
          system: "General Practice",
          hospital: "Manipal Hospitals",
          experience: "6 years",
          experienceYears: 6,
          availability: "available",
          busyRate: "Low",
        },
        {
          id: 5,
          name: "Dr. Vikram Singh",
          system: "Primary Care",
          hospital: "AIIMS",
          experience: "20 years",
          experienceYears: 20,
          availability: "moderate",
          busyRate: "Medium",
        },
        {
          id: 6,
          name: "Dr. Meera Joshi",
          system: "Family Medicine",
          hospital: "Medanta",
          experience: "4 years",
          experienceYears: 4,
          availability: "available",
          busyRate: "Low",
        },
      ],
    },
    "skincare-hair": {
      title: "Skincare & Hair",
      doctors: [
        {
          id: 1,
          name: "Dr. Ananya Reddy",
          system: "Dermatology",
          hospital: "Apollo Hospitals",
          experience: "14 years",
          experienceYears: 14,
          availability: "busy",
          busyRate: "High",
        },
        {
          id: 2,
          name: "Dr. Kiran Malhotra",
          system: "Cosmetic Dermatology",
          hospital: "Fortis Healthcare",
          experience: "3 years",
          experienceYears: 3,
          availability: "available",
          busyRate: "Low",
        },
        {
          id: 3,
          name: "Dr. Deepak Verma",
          system: "Hair Transplant",
          hospital: "Max Healthcare",
          experience: "11 years",
          experienceYears: 11,
          availability: "moderate",
          busyRate: "Medium",
        },
        {
          id: 4,
          name: "Dr. Pooja Agarwal",
          system: "Aesthetic Medicine",
          hospital: "Manipal Hospitals",
          experience: "7 years",
          experienceYears: 7,
          availability: "available",
          busyRate: "Low",
        },
        {
          id: 5,
          name: "Dr. Rohit Khanna",
          system: "Trichology",
          hospital: "AIIMS",
          experience: "18 years",
          experienceYears: 18,
          availability: "busy",
          busyRate: "High",
        },
        {
          id: 6,
          name: "Dr. Kavita Nair",
          system: "Skin Surgery",
          hospital: "Medanta",
          experience: "2 years",
          experienceYears: 2,
          availability: "moderate",
          busyRate: "Medium",
        },
      ],
    },
    "dental-care": {
      title: "Dental Care",
      doctors: [
        {
          id: 1,
          name: "Dr. Suresh Desai",
          system: "Orthodontics",
          hospital: "Apollo Hospitals",
          experience: "18 years",
          experienceYears: 18,
          availability: "moderate",
          busyRate: "Medium",
        },
        {
          id: 2,
          name: "Dr. Neha Kapoor",
          system: "Oral Surgery",
          hospital: "Fortis Healthcare",
          experience: "5 years",
          experienceYears: 5,
          availability: "available",
          busyRate: "Low",
        },
        {
          id: 3,
          name: "Dr. Arjun Mehta",
          system: "Periodontics",
          hospital: "Max Healthcare",
          experience: "10 years",
          experienceYears: 10,
          availability: "busy",
          busyRate: "High",
        },
        {
          id: 4,
          name: "Dr. Ritu Sharma",
          system: "Endodontics",
          hospital: "Manipal Hospitals",
          experience: "3 years",
          experienceYears: 3,
          availability: "available",
          busyRate: "Low",
        },
        {
          id: 5,
          name: "Dr. Sanjay Rao",
          system: "Prosthodontics",
          hospital: "AIIMS",
          experience: "22 years",
          experienceYears: 22,
          availability: "busy",
          busyRate: "High",
        },
        {
          id: 6,
          name: "Dr. Divya Singh",
          system: "Pediatric Dentistry",
          hospital: "Medanta",
          experience: "1 year",
          experienceYears: 1,
          availability: "available",
          busyRate: "Low",
        },
      ],
    },
    "mental-health": {
      title: "Mental Health",
      doctors: [
        {
          id: 1,
          name: "Dr. Rahul Gupta",
          system: "Psychiatry",
          hospital: "Apollo Hospitals",
          experience: "16 years",
          experienceYears: 16,
          availability: "busy",
          busyRate: "High",
        },
        {
          id: 2,
          name: "Dr. Shreya Jain",
          system: "Clinical Psychology",
          hospital: "Fortis Healthcare",
          experience: "9 years",
          experienceYears: 9,
          availability: "moderate",
          busyRate: "Medium",
        },
        {
          id: 3,
          name: "Dr. Manish Kumar",
          system: "Behavioral Therapy",
          hospital: "Max Healthcare",
          experience: "4 years",
          experienceYears: 4,
          availability: "available",
          busyRate: "Low",
        },
        {
          id: 4,
          name: "Dr. Anjali Verma",
          system: "Counseling Psychology",
          hospital: "Manipal Hospitals",
          experience: "2 years",
          experienceYears: 2,
          availability: "available",
          busyRate: "Low",
        },
        {
          id: 5,
          name: "Dr. Varun Malhotra",
          system: "Addiction Medicine",
          hospital: "AIIMS",
          experience: "19 years",
          experienceYears: 19,
          availability: "moderate",
          busyRate: "Medium",
        },
        {
          id: 6,
          name: "Dr. Priyanka Agarwal",
          system: "Child Psychology",
          hospital: "Medanta",
          experience: "12 years",
          experienceYears: 12,
          availability: "available",
          busyRate: "Low",
        },
      ],
    },
    "child-specialist": {
      title: "Child Specialist",
      doctors: [
        {
          id: 1,
          name: "Dr. Ravi Patel",
          system: "Pediatrics",
          hospital: "Apollo Hospitals",
          experience: "17 years",
          experienceYears: 17,
          availability: "busy",
          busyRate: "High",
        },
        {
          id: 2,
          name: "Dr. Swati Sharma",
          system: "Neonatology",
          hospital: "Fortis Healthcare",
          experience: "13 years",
          experienceYears: 13,
          availability: "moderate",
          busyRate: "Medium",
        },
        {
          id: 3,
          name: "Dr. Anil Reddy",
          system: "Pediatric Surgery",
          hospital: "Max Healthcare",
          experience: "21 years",
          experienceYears: 21,
          availability: "busy",
          busyRate: "High",
        },
        {
          id: 4,
          name: "Dr. Nisha Gupta",
          system: "Child Development",
          hospital: "Manipal Hospitals",
          experience: "5 years",
          experienceYears: 5,
          availability: "available",
          busyRate: "Low",
        },
        {
          id: 5,
          name: "Dr. Manoj Singh",
          system: "Pediatric Cardiology",
          hospital: "AIIMS",
          experience: "8 years",
          experienceYears: 8,
          availability: "moderate",
          busyRate: "Medium",
        },
        {
          id: 6,
          name: "Dr. Rekha Joshi",
          system: "Pediatric Neurology",
          hospital: "Medanta",
          experience: "3 years",
          experienceYears: 3,
          availability: "available",
          busyRate: "Low",
        },
      ],
    },
    "laboratory-scans": {
      title: "Laboratory & Scans",
      doctors: [
        {
          id: 1,
          name: "Dr. Sanjay Gupta",
          system: "Radiology",
          hospital: "Apollo Hospitals",
          experience: "15 years",
          experienceYears: 15,
          availability: "moderate",
          busyRate: "Medium",
        },
        {
          id: 2,
          name: "Dr. Meera Patel",
          system: "Pathology",
          hospital: "Fortis Healthcare",
          experience: "10 years",
          experienceYears: 10,
          availability: "available",
          busyRate: "Low",
        },
        {
          id: 3,
          name: "Dr. Rajesh Verma",
          system: "Nuclear Medicine",
          hospital: "Max Healthcare",
          experience: "12 years",
          experienceYears: 12,
          availability: "busy",
          busyRate: "High",
        },
        {
          id: 4,
          name: "Dr. Priya Singh",
          system: "Clinical Laboratory",
          hospital: "Manipal Hospitals",
          experience: "8 years",
          experienceYears: 8,
          availability: "available",
          busyRate: "Low",
        },
        {
          id: 5,
          name: "Dr. Arun Kumar",
          system: "Interventional Radiology",
          hospital: "AIIMS",
          experience: "18 years",
          experienceYears: 18,
          availability: "moderate",
          busyRate: "Medium",
        },
        {
          id: 6,
          name: "Dr. Kavita Sharma",
          system: "Molecular Diagnostics",
          hospital: "Medanta",
          experience: "6 years",
          experienceYears: 6,
          availability: "available",
          busyRate: "Low",
        },
      ],
    },
  }

  const currentSpecialty = specialtyData[specialtyType] || {
    title: "Specialists",
    doctors: [],
  }

  const handleBack = () => {
    if (onBack) {
      onBack()
    }
  }

  const handleFilterToggle = () => {
    setShowFilter(!showFilter)
  }

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  const clearFilters = () => {
    setFilters({
      hospital: "all",
      experience: "all",
      availability: "all",
    })
  }

  const filteredDoctors = currentSpecialty.doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.system.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesHospital = filters.hospital === "all" || doctor.hospital === filters.hospital

    const matchesExperience =
      filters.experience === "all" ||
      (filters.experience === "junior" && doctor.experienceYears >= 0 && doctor.experienceYears <= 5) ||
      (filters.experience === "senior" && doctor.experienceYears > 5 && doctor.experienceYears <= 15) ||
      (filters.experience === "expert" && doctor.experienceYears > 15)

    const matchesAvailability =
      filters.availability === "all" ||
      (filters.availability === "available" && doctor.availability === "available") ||
      (filters.availability === "moderate" && doctor.availability === "moderate") ||
      (filters.availability === "busy" && doctor.availability === "busy")

    return matchesSearch && matchesHospital && matchesExperience && matchesAvailability
  })

  const hospitals = [...new Set(currentSpecialty.doctors.map((doctor) => doctor.hospital))]

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case "available":
        return "bg-green-100 text-green-800 border-green-200"
      case "moderate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "busy":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const handleDoctorClick = (doctor) => {
    if (onDoctorSelect) {
      onDoctorSelect(doctor.id)
    }
  }

  return (
    <div className="specialty-container">
      <div className="specialty-background">
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

      <div className="specialty-header">
        <Button onClick={handleBack} className="back-button">
          <ArrowLeft className="w-8 h-8" />
        </Button>
        <h1 className="specialty-title">BETSHOW</h1>
        <Button className="settings-button">
          <MoreHorizontal className="w-6 h-6" />
        </Button>
      </div>

      <div className="search-section">
        <div className="search-wrapper">
          <Input
            type="text"
            placeholder="Search doctors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="specialty-search-input"
          />
          <Search className="search-icon" />
        </div>
      </div>
      
      <div className="filter-section">
        <div className="filter-header">
          <Button onClick={handleFilterToggle} className={`filter-button ${showFilter ? "active" : ""}`}>
            <Filter className="w-6 h-6" />
          </Button>
        </div>

        {showFilter && (
          <div className="filter-dropdown">
            <div className="filter-dropdown-content">
              <div className="filter-dropdown-header">
                <h3 className="filter-dropdown-title">Filters</h3>
                <Button onClick={clearFilters} className="clear-filters-button">
                  Clear All
                </Button>
              </div>

              <div className="filter-group">
                <label className="filter-group-label">Hospital</label>
                <div className="filter-options">
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="hospital"
                      value="all"
                      checked={filters.hospital === "all"}
                      onChange={(e) => handleFilterChange("hospital", e.target.value)}
                      className="filter-radio"
                    />
                    <span className="filter-option-text">All Hospitals</span>
                  </label>
                  {hospitals.map((hospital) => (
                    <label key={hospital} className="filter-option">
                      <input
                        type="radio"
                        name="hospital"
                        value={hospital}
                        checked={filters.hospital === hospital}
                        onChange={(e) => handleFilterChange("hospital", e.target.value)}
                        className="filter-radio"
                      />
                      <span className="filter-option-text">{hospital}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label className="filter-group-label">Experience</label>
                <div className="filter-options">
                  {[
                    { value: "all", label: "All Experience" },
                    { value: "junior", label: "0-5 years" },
                    { value: "senior", label: "5-15 years" },
                    { value: "expert", label: "15+ years" },
                  ].map((exp) => (
                    <label key={exp.value} className="filter-option">
                      <input
                        type="radio"
                        name="experience"
                        value={exp.value}
                        checked={filters.experience === exp.value}
                        onChange={(e) => handleFilterChange("experience", e.target.value)}
                        className="filter-radio"
                      />
                      <span className="filter-option-text">{exp.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label className="filter-group-label">Availability</label>
                <div className="filter-options">
                  {[
                    { value: "all", label: "All Availability" },
                    { value: "available", label: "Available (Low Demand)" },
                    { value: "moderate", label: "Moderate (Medium Demand)" },
                    { value: "busy", label: "Busy (High Demand)" },
                  ].map((avail) => (
                    <label key={avail.value} className="filter-option">
                      <input
                        type="radio"
                        name="availability"
                        value={avail.value}
                        checked={filters.availability === avail.value}
                        onChange={(e) => handleFilterChange("availability", e.target.value)}
                        className="filter-radio"
                      />
                      <span className="filter-option-text">{avail.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="specialty-info">
          <h2 className="specialty-name">{currentSpecialty.title}</h2>
        </div>

        <div className="results-count">
          <p className="results-text">
            Showing {filteredDoctors.length} of {currentSpecialty.doctors.length} doctors
          </p>
        </div>

        <div className="doctors-list">
          {filteredDoctors.length === 0 ? (
            <div className="no-results">
              <div className="no-results-content">
                <User className="w-16 h-16 text-gray-400 no-results-icon" />
                <h3 className="no-results-title">No doctors found</h3>
                <p className="no-results-text">Try adjusting your search criteria</p>
              </div>
            </div>
          ) : (
            filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="doctor-card" onClick={() => handleDoctorClick(doctor)}>
                <div className="doctor-card-content">
                  <div className="doctor-avatar-section">
                    <div className="doctor-avatar">
                      <User className="w-12 h-12 text-teal-600" />
                    </div>
                  </div>
                  <div className="doctor-info-section">
                    <div className="doctor-name">Doctor: {doctor.name}</div>
                    <div className="doctor-system">System: {doctor.system}</div>
                    <div className="doctor-hospital">Hospital: {doctor.hospital}</div>
                    <div className="doctor-details">
                      <span className="doctor-experience">Experience: {doctor.experience}</span>
                      <span className={`availability-badge ${getAvailabilityColor(doctor.availability)}`}>
                        {doctor.busyRate} Demand
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="chat-button">
        <Button className="chat-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </Button>
      </div>
    </div>
  )
}
