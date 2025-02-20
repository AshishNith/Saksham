import React from 'react'

const Suites = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
            alt="Hero Suite"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
            <h1 className="text-white text-6xl md:text-8xl font-light mb-6 max-w-2xl">
              Luxury Suites
            </h1>
            <p className="text-gray-200 text-xl md:text-2xl font-light max-w-xl">
              Experience unparalleled luxury in our meticulously designed spaces
            </p>
          </div>
        </div>
      </div>

      {/* Featured Suite */}
      <div className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-light mb-6">Presidential Suite</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our signature Presidential Suite offers panoramic city views, luxurious furnishings, and unparalleled service. With over 2,000 square feet of living space, it's the epitome of sophisticated urban living.
              </p>
              <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition duration-300">
                Explore Suite
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg"
                alt="Presidential Suite"
                className="w-full h-[500px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Suite Categories */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16">Our Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[600px] group overflow-hidden">
              <img
                src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg"
                alt="Royal Suite"
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-3xl font-light mb-4">Royal Suite</h3>
                <p className="text-gray-200 font-light mb-6">
                  Spacious living with elegant furnishings and premium amenities
                </p>
                <button className="text-white border-2 border-white px-6 py-2 hover:bg-white hover:text-black transition duration-300">
                  View Details
                </button>
              </div>
            </div>

            <div className="relative h-[600px] group overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
                alt="Executive Suite"
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-3xl font-light mb-4">Executive Suite</h3>
                <p className="text-gray-200 font-light mb-6">
                  Perfect blend of comfort and sophisticated design
                </p>
                <button className="text-white border-2 border-white px-6 py-2 hover:bg-white hover:text-black transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-black text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16">Suite Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Private Balcony",
                description: "Enjoy breathtaking views from your private outdoor space"
              },
              {
                title: "Marble Bathroom",
                description: "Luxurious bathrooms with premium fixtures and amenities"
              },
              {
                title: "Butler Service",
                description: "24/7 personalized butler service for your convenience"
              },
              {
                title: "Living Area",
                description: "Separate living space for entertainment and relaxation"
              },
              {
                title: "Smart Controls",
                description: "State-of-the-art room controls at your fingertips"
              },
              {
                title: "Premium Bedding",
                description: "Handpicked luxury linens for ultimate comfort"
              }
            ].map((feature, index) => (
              <div key={index} className="border border-white/20 p-8 hover:bg-white/5 transition duration-300">
                <h3 className="text-2xl font-light mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="relative overflow-hidden bg-black">
        <div className="flex animate-slide">
          {/* First set of images */}
          <div className="flex min-w-full">
            <img
              src="https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg"
              alt="Suite Gallery"
              className="w-1/4 h-[300px] object-cover hover:opacity-80 transition duration-300"
            />
            <img
              src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg"
              alt="Suite Gallery"
              className="w-1/4 h-[300px] object-cover hover:opacity-80 transition duration-300"
            />
            <img
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
              alt="Suite Gallery"
              className="w-1/4 h-[300px] object-cover hover:opacity-80 transition duration-300"
            />
            <img
              src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
              alt="Suite Gallery"
              className="w-1/4 h-[300px] object-cover hover:opacity-80 transition duration-300"
            />
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex min-w-full">
            <img
              src="https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg"
              alt="Suite Gallery"
              className="w-1/4 h-[300px] object-cover hover:opacity-80 transition duration-300"
            />
            <img
              src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg"
              alt="Suite Gallery"
              className="w-1/4 h-[300px] object-cover hover:opacity-80 transition duration-300"
            />
            <img
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
              alt="Suite Gallery"
              className="w-1/4 h-[300px] object-cover hover:opacity-80 transition duration-300"
            />
            <img
              src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
              alt="Suite Gallery"
              className="w-1/4 h-[300px] object-cover hover:opacity-80 transition duration-300"
            />
          </div>
        </div>
        <style>
          {`
            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .animate-slide {
              animation: slide 20s linear infinite;
            }
          `}
        </style>
      </div>
    </div>
  )
}

export default Suites
