export const Heart = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
)

export const Activity = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} points="22,12 18,12 15,21 9,3 6,12 2,12" />
  </svg>
)

export const Stethoscope = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 2a2 2 0 012 2v6.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V4a2 2 0 012-2zM4.5 10.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-2a.5.5 0 01-.5-.5v-1zM17 10.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-2a.5.5 0 01-.5-.5v-1z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12v2a5 5 0 0010 0v-2" />
    <circle cx="20" cy="16" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

export const Plus = ({ className = "", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)