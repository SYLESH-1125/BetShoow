import { useState, useEffect } from "react"

export const Select = ({ value, onValueChange, children, required = false }) => {
  return <div className="select-container">{children}</div>
}

export const SelectTrigger = ({ children, className = "" }) => {
  return <div className={`select-trigger ${className}`}>{children}</div>
}

export const SelectValue = ({ placeholder }) => {
  return <span className="select-placeholder">{placeholder}</span>
}

export const SelectContent = ({ children }) => {
  return <div className="select-content">{children}</div>
}

export const SelectItem = ({ value, children, onClick }) => {
  return (
    <div className="select-item" onClick={() => onClick && onClick(value)}>
      {children}
    </div>
  )
}

export const SimpleSelect = ({
  value,
  onValueChange,
  placeholder = "Select an option",
  options = [],
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (selectedValue) => {
    onValueChange(selectedValue)
    setIsOpen(false)
  }

  const selectedOption = options.find((option) => option.value === value)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".simple-select")) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className={`simple-select ${className}`}>
      <div className="simple-select-trigger" onClick={() => setIsOpen(!isOpen)}>
        <span className="simple-select-value">{selectedOption ? selectedOption.label : placeholder}</span>
        <svg className={`simple-select-arrow ${isOpen ? "rotate" : ""}`} width="12" height="12" viewBox="0 0 12 12">
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {isOpen && (
        <div className="simple-select-content">
          {options.map((option) => (
            <div
              key={option.value}
              className={`simple-select-item ${value === option.value ? "selected" : ""}`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}