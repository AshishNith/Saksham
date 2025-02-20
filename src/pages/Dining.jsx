import React from 'react'

const Dining = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="animate-slide flex">
            <img
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
              alt="Fine Dining"
              className="w-full h-full object-cover opacity-70 flex-shrink-0"
            />
            <img 
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
              alt="Fine Dining"
              className="w-full h-full object-cover opacity-70 flex-shrink-0"
            />
            <img
              src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg" 
              alt="Fine Dining"
              className="w-full h-full object-cover opacity-70 flex-shrink-0"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-6xl md:text-7xl font-light tracking-tight">
              Dining Experience
            </h1>
          </div>
        </div>
      </div>

      {/* Restaurants Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
          OUR RESTAURANTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group">
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"
                alt="Fine Dining Restaurant"
                className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
            <h3 className="text-2xl font-light mt-6 mb-3">The Royal Kitchen</h3>
            <p className="text-gray-600 mb-4">
              Experience the finest Indian cuisine crafted with traditional recipes and modern techniques.
            </p>
          </div>

          <div className="group">
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
                alt="Asian Restaurant"
                className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
            <h3 className="text-2xl font-light mt-6 mb-3">Azure</h3>
            <p className="text-gray-600 mb-4">
              A contemporary Asian fusion restaurant offering panoramic city views.
            </p>
          </div>

          <div className="group">
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"
                alt="Italian Restaurant"
                className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
            <h3 className="text-2xl font-light mt-6 mb-3">La Terrazza</h3>
            <p className="text-gray-600 mb-4">
              Authentic Italian cuisine served in an elegant outdoor setting.
            </p>
          </div>

          <div className="group">
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg"
                alt="Lounge Bar"
                className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
            <h3 className="text-2xl font-light mt-6 mb-3">Sky Lounge</h3>
            <p className="text-gray-600 mb-4">
              Sophisticated bar offering craft cocktails and light bites.
            </p>
          </div>
        </div>
      </div>

      {/* Culinary Experience Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            CULINARY EXCELLENCE
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team of world-renowned chefs creates unforgettable dining experiences, combining local ingredients with global techniques. Each restaurant offers a unique ambiance and carefully curated menu to satisfy the most discerning palates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dining
