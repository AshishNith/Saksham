import React from 'react'

const Leasure = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
            alt="Hero"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-white text-8xl font-extralight mb-8 tracking-wider">
                Leisure
              </h1>
              <p className="text-gray-200 text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                Indulge in luxurious amenities and recreational activities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Showcase */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-light text-center mb-24 tracking-wide">Our Facilities</h2>
          
          <div className="space-y-40">
            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="md:w-1/2 group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
                    alt="Swimming Pool"
                    className="w-full h-[600px] object-cover shadow-2xl transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </div>
              <div className="md:w-1/2 space-y-8">
                <h3 className="text-4xl font-light tracking-wide">Infinity Pool</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Immerse yourself in our stunning infinity pool with panoramic views of the city skyline. Perfect for both relaxation and invigorating morning swims.
                </p>
                <div className="pt-6">
                  <button className="border-2 border-black px-10 py-4 text-lg hover:bg-black hover:text-white transition duration-300 tracking-wider">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-20">
              <div className="md:w-1/2 group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
                    alt="Spa"
                    className="w-full h-[600px] object-cover shadow-2xl transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </div>
              <div className="md:w-1/2 space-y-8">
                <h3 className="text-4xl font-light tracking-wide">Luxury Spa</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Rejuvenate your body and soul in our world-class spa. Experience traditional and modern treatments delivered by expert therapists.
                </p>
                <div className="pt-6">
                  <button className="border-2 border-black px-10 py-4 text-lg hover:bg-black hover:text-white transition duration-300 tracking-wider">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="md:w-1/2 group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg"
                    alt="Fitness Center"
                    className="w-full h-[600px] object-cover shadow-2xl transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </div>
              <div className="md:w-1/2 space-y-8">
                <h3 className="text-4xl font-light tracking-wide">Fitness Center</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Stay active in our state-of-the-art fitness center featuring premium equipment and personal training services.
                </p>
                <div className="pt-6">
                  <button className="border-2 border-black px-10 py-4 text-lg hover:bg-black hover:text-white transition duration-300 tracking-wider">
                    EXPLORE
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
          <h2 className="text-5xl font-light text-center mb-20 tracking-wide">Leisure Moments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
              "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
              "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg",
              "https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg",
              "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg",
              "https://images.pexels.com/photos/3757937/pexels-photo-3757937.jpeg"
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

export default Leasure
