import { Link } from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <Link to="/" className="logo-title-container">
            <img
              className="website-logo"
              src="https://ik.imagekit.io/kili4mtus/ik-genimg-prompt-Minimalist%20vector%20logo%20for%20a%20Healthcare%20Appointment%20Booking%20app.%20Include%20a%20stethoscope%20forming%20a%20calendar%20or%20clock%20shape%20to%20represent%20time%20and%20healthcare.%20Use%20medical%20symbols%20subtly%20(like%20a%20cross%20or%20heart).%20Flat%20design%2C%20modern%20and%20professional%20look%2C%20no%20text%2C%20no%20background%2C%20transparent%20PNG%20style.%22/12e12d78-e0e2-4a4a-bdfd-952f69b2b5e4/image.jpg?tr=f-jpg%2Ch-1024%2Cw-1024&ik-s=6d89d7f93e4a03fb02ae672df6de23b5ca3d5da3"
              alt="BookMyCare Logo"
            />
            <span className="brand-name">BookMyCare</span>
          </Link>

          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/doctors" className="nav-link">Find a Doctor</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
