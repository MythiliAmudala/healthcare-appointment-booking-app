import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import doctorsList from '../DoctorData'
import Header from '../Header'
import './index.css'

const DoctorProfile = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const doctor = doctorsList.find(doc => doc.id === id)

  if (!doctor) {
    return (
      <div>
        <Header />
        <div className="not-found">
          <h2>Doctor Not Found</h2>
        </div>
      </div>
    )
  }

  const goBack = () => {
    navigate('/doctors')
  }

  const handleBooking = () => {
    navigate(`/doctors/${id}/book`)
  }

  return (
    <div>
      <Header />
      <div className="profile-container">
        <div className="profile-header">
          <img
            src={doctor.profileImageUrl}
            alt={doctor.name}
            className="profile-image"
          />
          <div className="profile-info">
            <h1>{doctor.name}</h1>
            <p className="specialization">{doctor.specialization}</p>
            <p className={doctor.isAvailable ? 'available' : 'unavailable'}>
              {doctor.isAvailable ? 'Available Now' : 'Currently Unavailable'}
            </p>
            <p className="timings">Timings: {doctor.timings || '10:00 AM - 6:00 PM'}</p>
            <p className="rating">Rating: ⭐ {doctor.rating || '4.5'}</p>
          </div>
        </div>

        <div className="profile-sections">
          <div className="section">
            <h2>About Doctor</h2>
            <p>{doctor.about || 'Dr. is a highly qualified and experienced professional providing excellent care and support to patients.'}</p>
          </div>

          <div className="section">
            <h2>About Specialization</h2>
            <p>{doctor.aboutSpecialization || 'Specialized in treating complex conditions with a focus on patient comfort and well-being.'}</p>
          </div>

          <div className="section button-group">
            <button
              className="book-button"
              onClick={handleBooking}
              disabled={!doctor.isAvailable}
            >
              {doctor.isAvailable ? 'Book Appointment' : 'Not Available for Booking'}
            </button>

            <button
              className="back-button"
              onClick={goBack}
            >
              ← Back to Doctor List
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile
