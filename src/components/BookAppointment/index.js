import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import doctorsList from '../DoctorData';
import './index.css';

const BookAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctorsList.find(doc => doc.id === id);

  const savedAppointment = JSON.parse(localStorage.getItem(`appointment_${id}`)) || {
    name: '',
    email: '',
    datetime: '',
  };

  const [formData, setFormData] = useState(savedAppointment);
  const [submitted, setSubmitted] = useState(savedAppointment.datetime !== '');
  const [showCancelWarning, setShowCancelWarning] = useState(false);

  useEffect(() => {
    if (formData.datetime !== '') {
      localStorage.setItem(`appointment_${id}`, JSON.stringify(formData));
    }
  }, [formData, id]);

  if (!doctor) {
    return <h2>Doctor Not Found</h2>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    localStorage.setItem(`appointment_${id}`, JSON.stringify(formData));
  };

  const handleBackToDoctorList = () => {
    navigate('/doctors');
  };

  const handleBackToProfile = () => {
    navigate(`/doctors/${id}`);
  };

  const handleRemoveAppointment = () => {
    setShowCancelWarning(true);
  };

  const confirmCancel = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', datetime: '' });
    localStorage.removeItem(`appointment_${id}`);
    setShowCancelWarning(false);
  };

  const cancelCancel = () => {
    setShowCancelWarning(false);
  };

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };

  return (
    <div className="book-appointment-container">
      <h1>BookMyCare</h1>
      
      <div className="doctor-profile">
        <div className="doctor-image-container">
          <img src={doctor.profileImageUrl} alt={doctor.name} className="doctor-image" />
        </div>
        <div className="doctor-info">
          <h2>{doctor.specialization}</h2>
          <p className="about">{doctor.about}</p>
          <div className="doctor-meta">
            <span className="rating">
              {renderStars(parseFloat(doctor.rating))} {doctor.rating}
            </span>
            <span className="availability">
              {doctor.isAvailable ? (
                <>
                  <i className="fas fa-check-circle"></i> Available
                </>
              ) : (
                <>
                  <i className="fas fa-times-circle"></i> Not Available
                </>
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Rest of your component remains the same */}
      {!submitted ? (
        <form className="appointment-form" onSubmit={handleSubmit}>
          <h3>Patient Name</h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          
          <h3>Email</h3>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          
          <h3>Date & Time</h3>
          <input
            type="datetime-local"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            required
          />

          <div className="form-buttons">
            <button type="submit" className="submit-btn">
              <i className="fas fa-calendar-check"></i> Submit Appointment
            </button>
            <button type="button" className="back-btn" onClick={handleBackToProfile}>
              <i className="fas fa-arrow-left"></i> Back to Profile
            </button>
          </div>
        </form>
      ) : (
        <div className="confirmation-section">
          <h3><i className="fas fa-check-circle"></i> Appointment Confirmed!</h3>
          
          <div className="appointment-details">
            <div className="patient-icon">
              <i className="fas fa-user-circle"></i>
            </div>
            <div className="patient-info">
              <p><strong><i className="fas fa-user"></i> Name:</strong> {formData.name}</p>
              <p><strong><i className="fas fa-envelope"></i> Email:</strong> {formData.email}</p>
              <p><strong><i className="fas fa-clock"></i> Date & Time:</strong> {new Date(formData.datetime).toLocaleString()}</p>
            </div>
          </div>
          
          <div className="confirmation-buttons">
            <button className="remove-btn" onClick={handleRemoveAppointment}>
              <i className="fas fa-trash-alt"></i> Remove Appointment
            </button>
            <button className="doctor-list-btn" onClick={handleBackToDoctorList}>
              <i className="fas fa-list"></i> Back to Doctor List
            </button>
          </div>
          
          {showCancelWarning && (
            <div className="cancel-warning">
              <p><i className="fas fa-exclamation-triangle"></i> Your appointment will be cancelled. Are you sure?</p>
              <div className="warning-buttons">
                <button className="confirm-cancel" onClick={confirmCancel}>
                  <i className="fas fa-check"></i> Confirm
                </button>
                <button className="cancel-cancel" onClick={cancelCancel}>
                  <i className="fas fa-times"></i> Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookAppointment;