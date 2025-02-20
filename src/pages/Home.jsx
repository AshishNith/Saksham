import React from 'react'
import logo from '../assets/Logo.jpg'
import Button from '../components/Button'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-r from-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="container mx-auto px-8 h-full flex flex-col justify-center">
            <div className="w-full md:w-2/3 mx-auto text-center">
              <h1 className="text-white text-7xl md:text-9xl font-extralight tracking-wider mb-8">
                Saksham
              </h1>
              <div className="w-24 h-px bg-white/30 mx-auto mb-8"></div>
              <p className="text-gray-300 text-xl md:text-2xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                Experience unparalleled luxury at India's most iconic destination
              </p>
              <Button text="DISCOVER MORE" fontSize="text-lg" textColor="text-white" color1="bg-transparent" color2="bg-white" />
            </div>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
              <img src={logo} alt="Saksham Logo" className="w-24 h-auto opacity-70" />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8">
                A GLOBAL ICON OF INDIAN LUXURY
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                Saksham sets a new standard for luxury hotels, offering unparalleled elegance and world-class hospitality that has earned its reputation as one of the finest hotels in Dubai and across the globe.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-light mb-2">201</h3>
                  <p className="text-gray-600">Luxury Suites</p>
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2">9</h3>
                  <p className="text-gray-600">Restaurants</p>
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2">5★</h3>
                  <p className="text-gray-600">Experience</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px]">
              <img 
                src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg"
                alt="Luxury Hotel"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
            EXCEPTIONAL EXPERIENCES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group cursor-pointer relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" 
                  alt="Luxury Dining"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-light mb-2">DINING</h3>
                <p className="text-gray-200">Experience culinary excellence</p>
              </div>
            </div>
            <div className="group cursor-pointer relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg" 
                  alt="Luxury Spa"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-light mb-2">WELLNESS</h3>
                <p className="text-gray-200">Rejuvenate mind, body and soul</p>
              </div>
            </div>
            <div className="group cursor-pointer relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg" 
                  alt="Leisure Activities"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-light mb-2">LEISURE</h3>
                <p className="text-gray-200">Create unforgettable moments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
