import { useState } from "react"

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

const MapPin = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

const Star = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
  </svg>
)

const Clock = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12,6 12,12 16,14"></polyline>
  </svg>
)

const Phone = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
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

const Users = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="m22 21-3.3-3.3a4.12 4.12 0 0 0 0-5.4 4 4 0 0 0-5.4 0"></path>
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
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"></polygon>
  </svg>
)

const X = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

export default function HospitalPage({ onBack, onHospitalSelect }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState({
    specialty: "",
    rating: "",
    distance: "",
    availability: "",
  })

  const filterOptions = {
    specialty: [
      "Cardiology",
      "Neurology",
      "Oncology",
      "Orthopedics",
      "Gastroenterology",
      "Nephrology",
      "Pulmonology",
      "Pediatrics",
      "Gynecology",
      "General Surgery",
    ],
    rating: ["4.5+", "4.0+", "3.5+", "3.0+"],
    distance: ["Under 2km", "Under 5km", "Under 10km", "Any distance"],
    availability: ["24/7 Emergency", "Regular Hours"],
  }

  const hospitals = [
    {
      id: "apollo-chennai",
      name: "Apollo Hospitals",
      location: "Greams Road, Chennai",
      rating: 4.8,
      distance: "2.5 km",
      specialties: ["Cardiology", "Neurology", "Oncology", "Orthopedics"],
      availability: "24/7 Emergency",
      phone: "+91 44 2829 3333",
      doctors: 150,
      beds: 500,
      established: "1983",
    },
    {
      id: "fortis-chennai",
      name: "Fortis Malar Hospital",
      location: "Adyar, Chennai",
      rating: 4.6,
      distance: "3.2 km",
      specialties: ["Gastroenterology", "Nephrology", "Pulmonology"],
      availability: "24/7 Emergency",
      phone: "+91 44 4289 2222",
      doctors: 120,
      beds: 400,
      established: "1992",
    },
    {
      id: "vijaya-chennai",
      name: "Vijaya Hospital",
      location: "Vadapalani, Chennai",
      rating: 4.5,
      distance: "4.1 km",
      specialties: ["Pediatrics", "Gynecology", "General Surgery"],
      availability: "24/7 Emergency",
      phone: "+91 44 2471 9999",
      doctors: 100,
      beds: 350,
      established: "1972",
    },
  ]

  const handleHospitalClick = (hospitalId) => {
    if (onHospitalSelect) {
      onHospitalSelect(hospitalId)
    }
  }

  const handleBack = () => {
    if (onBack) {
      onBack()
    }
  }

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType] === value ? "" : value,
    }))
  }

  const clearAllFilters = () => {
    setSelectedFilters({
      specialty: "",
      rating: "",
      distance: "",
      availability: "",
    })
  }

  const getFilteredHospitals = () => {
    let filtered = hospitals.filter(
      (hospital) =>
        hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hospital.specialties.some((specialty) => specialty.toLowerCase().includes(searchQuery.toLowerCase())),
    )

    if (selectedFilters.specialty) {
      filtered = filtered.filter((hospital) => hospital.specialties.includes(selectedFilters.specialty))
    }

    if (selectedFilters.rating) {
      const minRating = Number.parseFloat(selectedFilters.rating.replace("+", ""))
      filtered = filtered.filter((hospital) => hospital.rating >= minRating)
    }

    return filtered
  }

  const filteredHospitals = getFilteredHospitals()

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* Clean Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
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
          <ArrowLeft style={{ width: "1.5rem", height: "1.5rem" }} />
        </button>

        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "white",
            margin: 0,
            flex: 1,
          }}
        >
          Hospitals
        </h1>

        <button
          onClick={() => setShowFilters(!showFilters)}
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
          <Filter style={{ width: "1.5rem", height: "1.5rem" }} />
        </button>
      </div>

      {/* Search Bar */}
      <div style={{ padding: "1rem 1.5rem" }}>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search hospitals or specialties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              height: "3rem",
              backgroundColor: "white",
              border: "2px solid #e5e7eb",
              borderRadius: "0.75rem",
              fontSize: "1rem",
              padding: "0 3rem 0 1rem",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <Search
            style={{
              position: "absolute",
              right: "0.75rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#6b7280",
              width: "1.25rem",
              height: "1.25rem",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "1rem",
            margin: "0 1.5rem 1rem",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 1.5rem",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#0d9488", margin: 0 }}>Filters</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <button
                onClick={clearAllFilters}
                style={{
                  background: "transparent",
                  color: "#6b7280",
                  border: "1px solid #e5e7eb",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                }}
              >
                Clear All
              </button>
              <button
                onClick={() => setShowFilters(false)}
                style={{
                  background: "transparent",
                  color: "#6b7280",
                  border: "none",
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                }}
              >
                <X style={{ width: "1.25rem", height: "1.25rem" }} />
              </button>
            </div>
          </div>

          <div style={{ padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {Object.entries(filterOptions).map(([filterType, options]) => (
              <div key={filterType} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#374151",
                    margin: 0,
                    textTransform: "capitalize",
                  }}
                >
                  {filterType === "specialty" ? "Specialty" : filterType}
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleFilterChange(filterType, option)}
                      style={{
                        background:
                          selectedFilters[filterType] === option
                            ? "linear-gradient(to right, #14b8a6, #0d9488)"
                            : "rgba(20, 184, 166, 0.1)",
                        color: selectedFilters[filterType] === option ? "white" : "#0d9488",
                        border: `1px solid ${selectedFilters[filterType] === option ? "#0d9488" : "rgba(20, 184, 166, 0.2)"}`,
                        padding: "0.5rem 1rem",
                        borderRadius: "9999px",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        cursor: "pointer",
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hospital Cards */}
      <div style={{ padding: "0 1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        {filteredHospitals.map((hospital) => (
          <div
            key={hospital.id}
            onClick={() => handleHospitalClick(hospital.id)}
            style={{
              backgroundColor: "white",
              borderRadius: "1rem",
              padding: "1.5rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e5e7eb",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {/* Hospital Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "0.75rem",
                    height: "0.75rem",
                    backgroundColor: "#10b981",
                    borderRadius: "50%",
                  }}
                />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#1f2937", margin: 0 }}>{hospital.name}</h3>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                <Star style={{ width: "1rem", height: "1rem", color: "#fbbf24", fill: "#fbbf24" }} />
                <span style={{ fontSize: "0.875rem", fontWeight: "600", color: "#4b5563" }}>{hospital.rating}</span>
              </div>
            </div>

            {/* Location */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <MapPin style={{ width: "1rem", height: "1rem", color: "#14b8a6" }} />
              <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>{hospital.location}</span>
              <span
                style={{
                  fontSize: "0.75rem",
                  backgroundColor: "#f0fdfa",
                  color: "#0d9488",
                  padding: "0.125rem 0.5rem",
                  borderRadius: "9999px",
                  fontWeight: "600",
                }}
              >
                {hospital.distance}
              </span>
            </div>

            {/* Stats Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.25rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  <Users style={{ width: "1rem", height: "1rem", color: "#3b82f6" }} />
                  <span style={{ fontSize: "1.125rem", fontWeight: "700", color: "#2563eb" }}>{hospital.doctors}</span>
                </div>
                <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>Doctors</span>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.25rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  <Building2 style={{ width: "1rem", height: "1rem", color: "#22c55e" }} />
                  <span style={{ fontSize: "1.125rem", fontWeight: "700", color: "#16a34a" }}>{hospital.beds}</span>
                </div>
                <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>Beds</span>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.25rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  <Award style={{ width: "1rem", height: "1rem", color: "#a855f7" }} />
                  <span style={{ fontSize: "1.125rem", fontWeight: "700", color: "#9333ea" }}>
                    {hospital.established}
                  </span>
                </div>
                <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>Est.</span>
              </div>
            </div>

            {/* Specialties */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
              {hospital.specialties.slice(0, 3).map((specialty, idx) => (
                <span
                  key={idx}
                  style={{
                    background: "linear-gradient(to right, #f0fdfa, #eff6ff)",
                    color: "#0d9488",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  {specialty}
                </span>
              ))}
              {hospital.specialties.length > 3 && (
                <span
                  style={{
                    backgroundColor: "#f3f4f6",
                    color: "#4b5563",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  +{hospital.specialties.length - 3} more
                </span>
              )}
            </div>

            {/* Contact Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Clock style={{ width: "1rem", height: "1rem", color: "#059669" }} />
                <span style={{ fontSize: "0.875rem", fontWeight: "600", color: "#059669" }}>
                  {hospital.availability}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone style={{ width: "1rem", height: "1rem", color: "#2563eb" }} />
                <span style={{ fontSize: "0.875rem", color: "#2563eb", fontWeight: "600" }}>{hospital.phone}</span>
              </div>
            </div>

            {/* Action Button */}
            <button
              style={{
                width: "100%",
                background: "linear-gradient(to right, #14b8a6, #2563eb)",
                color: "white",
                fontWeight: "600",
                border: "none",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                fontSize: "1rem",
              }}
            >
              View Specialists
              <ArrowLeft style={{ width: "1rem", height: "1rem", transform: "rotate(180deg)" }} />
            </button>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredHospitals.length === 0 && (
        <div style={{ padding: "2rem 1.5rem", textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "1rem",
              padding: "2rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Building2 style={{ width: "4rem", height: "4rem", color: "#9ca3af", margin: "0 auto 1rem" }} />
            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#4b5563", marginBottom: "0.5rem" }}>
              No hospitals found
            </h3>
            <p style={{ color: "#6b7280" }}>Try adjusting your search criteria</p>
          </div>
        </div>
      )}
    </div>
  )
}
