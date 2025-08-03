import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import DoctorsList from './components/DoctorsList'
import DoctorProfile from './components/DoctorProfile'
import BookAppointment from './components/BookAppointment'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctors" element={<DoctorsList />} />
      <Route path="/doctors/:id" element={<DoctorProfile />} />
      <Route path="/doctors/:id/book" element={<BookAppointment />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)

export default App
