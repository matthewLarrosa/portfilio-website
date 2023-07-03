import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from '../src/components/Navbar.jsx'
import Education from '../src/components/Education.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Education />
  </React.StrictMode>,
)
