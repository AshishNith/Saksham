import React, { useState, useEffect } from 'react'
import Button from './Button'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      
      // Determine if scrolled
      if (currentScrollPos > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Show/hide navbar based on scroll direction
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/20 shadow-lg backdrop-blur-lg' : 'bg-transparent'
    } ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className={`text-3xl font-light ${isScrolled ? 'text-black' : 'text-white'}`}>
              Saksham
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/suites" className={`font-bold transition-colors duration-300 ${isScrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-200'}`}>SUITES</a>
            <a href="/wellness" className={`font-bold transition-colors duration-300 ${isScrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-200'}`}>WELLNESS</a>
            <a href="/dining" className={`font-bold transition-colors duration-300 ${isScrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-200'}`}>DINING</a>
            <a href="/offers" className={`font-bold transition-colors duration-300 ${isScrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-200'}`}>LEISURE</a>
            <a href="/experiences" className={`font-bold transition-colors duration-300 ${isScrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-200'}`}>EXPERIENCES</a>
          </div>

          <div className="md:flex items-center space-x-4 hidden">
            <Button text="BOOK A STAY" fontSize="text-sm" textColor="text-white" color1="bg-transparent" color2={`${isScrolled ? 'bg-black' : 'bg-white'}`} />
          </div>

          <div className="md:hidden">
            <button 
              className={`${isScrolled ? 'text-black' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/suites" className="block px-3 py-2 text-gray-600 hover:text-black font-light">SUITES</a>
              <a href="/wellness" className="block px-3 py-2 text-gray-600 hover:text-black font-light">WELLNESS</a>
              <a href="/dining" className="block px-3 py-2 text-gray-600 hover:text-black font-light">DINING</a>
              <a href="/offers" className="block px-3 py-2 text-gray-600 hover:text-black font-light">LEISURE</a>
              <a href="/experiences" className="block px-3 py-2 text-gray-600 hover:text-black font-light">EXPERIENCES</a>
              <button className="w-full mt-4 bg-black text-white px-8 py-3 rounded-sm hover:bg-white hover:text-black border border-black transition duration-300">
                BOOK A STAY
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
