import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from '../src/components/Navbar.jsx'
import Education from '../src/components/Education.jsx'
import EducationInfo from './components/EducationInfo.jsx'
import Internship from './components/Internship.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Education />
    <EducationInfo/>
    <Internship />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
