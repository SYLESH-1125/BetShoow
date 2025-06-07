import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

import SignInForm from "./components/SignInForm"
import AddressForm from "./components/AddressForm"
import AbhaForm from "./components/AbhaForm"
import OtpForm from "./components/OtpForm"
import HomePage from "./components/HomePage"
import HospitalPage from "./components/HospitalPage"
import SpecialistPage from "./components/SpecialistPage"
import SpecialtyPage from "./components/SpecialtyPage"
import BookingPage from "./components/BookingPage"
import ConfirmationPage from "./components/ConfirmationPage"
import TicketPage from "./components/TicketPage"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/address" element={<AddressForm />} />
          <Route path="/abha" element={<AbhaForm />} />
          <Route path="/otp" element={<OtpForm />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/hospital" element={<HospitalPage />} />
          <Route path="/specialists/:hospitalId" element={<SpecialistPage />} />
          <Route path="/specialty/:specialtyType" element={<SpecialtyPage />} />
          <Route path="/booking/:doctorId" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/ticket" element={<TicketPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
