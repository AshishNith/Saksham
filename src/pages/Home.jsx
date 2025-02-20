import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-r from-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="container mx-auto px-8 h-full flex items-center">
            <div className="w-full md:w-2/3">
              <h1 className="text-white text-6xl md:text-8xl font-extralight tracking-tight mb-6">
                Saksham
              </h1>
              <p className="text-gray-400 text-xl md:text-2xl font-light max-w-lg mb-12">
                The India's most iconic hotel, redefined for the modern era
              </p>
              <button className="group relative px-8 py-3 overflow-hidden">
                <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative text-white group-hover:text-black text-sm tracking-widest">
                  BOOK A STAY
                </span>
              </button>
            </div>
            <div className="hidden md:block absolute right-0 top-0 w-1/3 h-full">
              <div className="h-full w-1 bg-white/10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              A GLOBAL ICON OF INDIAN LUXURY
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Saksham sets a new standard for luxury hotels, offering unparalleled elegance and world-class hospitality that has earned its reputation as one of the finest hotels in Dubai and across the globe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">SUITES</h3>
                <p className="text-gray-600">201 luxury duplexes</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">RESTAURANTS</h3>
                <p className="text-gray-600">9 world-class venues</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">LOCATION</h3>
                <p className="text-gray-600">Jumeirah Beach Road</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            EXCEPTIONAL EXPERIENCES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" 
                  alt="Luxury Dining"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <h3 className="text-xl font-light mt-4 mb-2">DINING</h3>
              <p className="text-gray-600">Experience culinary excellence</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg" 
                  alt="Luxury Spa"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <h3 className="text-xl font-light mt-4 mb-2">WELLNESS</h3>
              <p className="text-gray-600">Rejuvenate mind, body and soul</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg" 
                  alt="Leisure Activities"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <h3 className="text-xl font-light mt-4 mb-2">LEISURE</h3>
              <p className="text-gray-600">Create unforgettable moments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
