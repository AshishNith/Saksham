import React from 'react'

const Dining = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen bg-black">
        <div className="absolute inset-0">
          {/* Slideshow images */}
          <div className="relative w-full h-full">
            {[
              "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
              "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg", 
              "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
              "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Dining ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                style={{
                  opacity: 0,
                  animation: `fadeInOut 1s infinite`,
                  animationDelay: `${index * 4}s`
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <h1 className="text-white text-7xl md:text-8xl font-light mb-6">
              Dining
            </h1>
            <p className="text-gray-200 text-xl md:text-2xl font-light text-center max-w-2xl">
              Experience culinary excellence at our world-class restaurants
            </p>
          </div>
        </div>
        <style>
          {`
            @keyframes fadeInOut {
              0%, 100% { opacity: 0; }
              4%, 96% { opacity: 0.5; }
              25%, 75% { opacity: 0.5; }
            }
          `}
          
        </style>
      </div>

      {/* Restaurants Grid */}
      <div className="py-24 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
          Our Restaurants
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="group cursor-pointer">
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"
                alt="The Royal Kitchen"
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-3xl font-light mb-3">The Royal Kitchen</h3>
                <p className="text-gray-200 font-light">
                  Traditional Indian cuisine with a modern twist
                </p>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
                alt="Azure"
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-3xl font-light mb-3">Azure</h3>
                <p className="text-gray-200 font-light">
                  Contemporary Asian fusion with city views
                </p>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"
                alt="La Terrazza"
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-3xl font-light mb-3">La Terrazza</h3>
                <p className="text-gray-200 font-light">
                  Authentic Italian in an elegant setting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="relative py-32 bg-black text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg"
            alt="Culinary Experience"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Culinary Excellence
            </h2>
            <p className="text-xl font-light leading-relaxed">
              Our team of world-renowned chefs creates unforgettable dining experiences, combining local ingredients with global techniques. Each restaurant offers a unique ambiance and carefully curated menu to satisfy the most discerning palates.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <img
          src="https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg"
          alt="Dining Gallery"
          className="w-full h-[400px] object-cover"
        />
        <img
          src="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg"
          alt="Dining Gallery"
          className="w-full h-[400px] object-cover"
        />
        <img
          src="https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg"
          alt="Dining Gallery"
          className="w-full h-[400px] object-cover"
        />
        <img
          src="https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg"
          alt="Dining Gallery"
          className="w-full h-[400px] object-cover"
        />
      </div>
    </div>
  )
}

export default Dining
