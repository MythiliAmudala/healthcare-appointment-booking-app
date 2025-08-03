import { useNavigate } from 'react-router-dom'
import { FaHeartbeat, FaCalendarCheck, FaFlask } from 'react-icons/fa'
import Header from '../Header'
import './index.css'

const Home = () => {
  const navigate = useNavigate()

  const goToDoctorList = () => {
    navigate('/doctors')
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">
            We Care for Your Health Every Moment
          </h1>
          <p className="home-description">
            Book appointments with trusted doctors easily and quickly. Your
            health is our top priority, and we’re here to make it simple for
            you.
          </p>
          <button className="home-button" onClick={goToDoctorList}>
            Find Doctors
          </button>

          {/* Icon row below button */}
          <div className="home-inline-icons">
            <div className="home-icon-box">
              <FaHeartbeat className="home-icon" />
              <p className="icon-label">Emergency Cases</p>
            </div>
            <div className="home-icon-box">
              <FaCalendarCheck className="home-icon" />
              <p className="icon-label">Easy Appointment</p>
            </div>
            <div className="home-icon-box">
              <FaFlask className="home-icon" />
              <p className="icon-label">Qualified Doctors</p>
            </div>
          </div>
        </div>

        <div className="home-image-container">
          <img
            className="home-image"
            src="https://ik.imagekit.io/kili4mtus/download.jpg?updatedAt=1754105196935"
            alt="doctor group"
          />
        </div>
      </div>
    </>
  )
}

export default Home
