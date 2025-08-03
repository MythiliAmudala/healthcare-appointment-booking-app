import { useNavigate } from 'react-router-dom'
import './index.css'

const NotFound = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className="notfound-container">
      <div className="notfound-left">
        <h1 className="notfound-heading">404</h1>
        <p className="notfound-message">
          Sorry, the page you're looking for doesn't exist.<br />
          It may have been moved, deleted, or never existed at all.
        </p>
        <button className="go-back-button" onClick={goBack}>
          Go Back
        </button>
      </div>
      <div className="notfound-right">
        <img
          src="https://ik.imagekit.io/kili4mtus/doctor.jpg?updatedAt=1754122073412"
          alt="Doctor Not Found"
          className="notfound-image"
        />
      </div>
    </div>
  )
}

export default NotFound

