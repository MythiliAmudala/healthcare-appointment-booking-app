import React, { useState } from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import doctorsList from '../DoctorData'
import Header from '../Header'
import './index.css'

const DoctorsList = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleDoctorClick = id => {
    navigate(`/doctors/${id}`)
  }

  const filteredDoctors = doctorsList.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <Header />
      <div className="doctors-container">
        <h2 className="title">Meet Our Expert Doctors</h2>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name or specialization..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />

        {/* Doctor List */}
        <ul className="doctors-grid">
          {filteredDoctors.map(doctor => (
            <li
              key={doctor.id}
              className="doctor-card"
              onClick={() => handleDoctorClick(doctor.id)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={doctor.profileImageUrl}
                alt={doctor.name}
                className="doctor-images-1"
              />
              <div className="doctor-details">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-specialization">{doctor.specialization}</p>
                <p
                  className={`doctor-status ${
                    doctor.isAvailable ? 'available' : 'unavailable'
                  }`}
                >
                  {doctor.isAvailable ? (
                    <>
                      <FaCheckCircle className="status-icon available-icon" />
                      Available
                    </>
                  ) : (
                    <>
                      <FaTimesCircle className="status-icon unavailable-icon" />
                      Unavailable
                    </>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {filteredDoctors.length === 0 && (
          <p className="no-doctors-message">No doctors found matching your search.</p>
        )}
      </div>
    </div>
  )
}

export default DoctorsList
