import React from 'react'

const Dining = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"
            alt="Hero"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-white text-8xl font-extralight mb-8 tracking-wider">
                Dining
              </h1>
              <p className="text-gray-200 text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                Embark on a culinary journey through our exceptional restaurants
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Showcase */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-light text-center mb-24 tracking-wide">Our Signature Venues</h2>
          
          <div className="space-y-40">
            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="md:w-1/2 group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"
                    alt="The Royal Kitchen"
                    className="w-full h-[600px] object-cover shadow-2xl transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </div>
              <div className="md:w-1/2 space-y-8">
                <h3 className="text-4xl font-light tracking-wide">The Royal Kitchen</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience the rich heritage of Indian cuisine reimagined for the modern palate. Our master chefs blend traditional recipes with contemporary techniques to create unforgettable flavors.
                </p>
                <div className="pt-6">
                  <button className="border-2 border-black px-10 py-4 text-lg hover:bg-black hover:text-white transition duration-300 tracking-wider">
                    VIEW MENU
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-20">
              <div className="md:w-1/2 group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
                    alt="Azure"
                    className="w-full h-[600px] object-cover shadow-2xl transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </div>
              <div className="md:w-1/2 space-y-8">
                <h3 className="text-4xl font-light tracking-wide">Azure</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A sophisticated Asian fusion restaurant offering panoramic city views. Innovative dishes combine the best of Eastern and Western culinary traditions.
                </p>
                <div className="pt-6">
                  <button className="border-2 border-black px-10 py-4 text-lg hover:bg-black hover:text-white transition duration-300 tracking-wider">
                    VIEW MENU
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="md:w-1/2 group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"
                    alt="La Terrazza"
                    className="w-full h-[600px] object-cover shadow-2xl transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </div>
              <div className="md:w-1/2 space-y-8">
                <h3 className="text-4xl font-light tracking-wide">La Terrazza</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transport yourself to Italy in our elegant rooftop restaurant. Savor authentic Italian cuisine made with imported ingredients and local produce.
                </p>
                <div className="pt-6">
                  <button className="border-2 border-black px-10 py-4 text-lg hover:bg-black hover:text-white transition duration-300 tracking-wider">
                    VIEW MENU
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-light text-center mb-20 tracking-wide">Culinary Moments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg",
              "https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg",
              "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg",
              "https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg",
              "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
              "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"
            ].map((src, index) => (
              <div key={index} className="group relative overflow-hidden aspect-square cursor-pointer">
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <span className="text-white text-lg tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                    VIEW MORE
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dining
