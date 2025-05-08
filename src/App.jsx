import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaKeyboard,
  FaTasks,
  FaFolderOpen,
  FaPhone,
  FaCartArrowDown,
  FaBrain,
  FaStar,
  FaImages
} from 'react-icons/fa'

const features = [
  { path: '/auto-complete', label: 'Auto Complete', icon: <FaKeyboard size={20} /> },
  { path: '/multi-select-input', label: 'Multi Select Input', icon: <FaTasks size={20} /> },
  { path: '/folder-system', label: 'Folder System', icon: <FaFolderOpen size={20} /> },
  { path: '/phone-otp', label: 'Phone OTP', icon: <FaPhone size={20} /> },
  { path: '/cartsteper', label: 'Cart Stepper', icon: <FaCartArrowDown size={20} /> },
  { path: '/memory-game', label: 'Memory Game', icon: <FaBrain size={20} /> },
  { path: '/star-rating', label: 'Star Rating', icon: <FaStar size={20} /> },
  { path: '/carousel', label: 'Carousel', icon: <FaImages size={20} /> },
]

const App = () => {
  return (
    <div className="bg-[#121212] min-h-screen w-full text-white px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Mini Project Hub</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {features.map(({ path, label, icon }) => (
          <Link
            key={path}
            to={path}
            className="bg-[#1e1e1e] p-6 rounded-2xl shadow-md hover:bg-[#2a2a2a] transition-all duration-300 flex flex-col items-center justify-center gap-3 text-lg font-medium text-center"
          >
            <div className="text-[#a3a3a3]">{icon}</div>
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default App
