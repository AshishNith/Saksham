import React from 'react'

const Wellness = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
            alt="Wellness Hero"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
            <h1 className="text-white text-6xl md:text-7xl font-light mb-6 max-w-2xl">
              Discover Inner Peace & Wellness
            </h1>
            <p className="text-gray-200 text-xl font-light max-w-xl">
              Experience tranquility and rejuvenation at our luxury wellness sanctuary
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-light mb-6">Our Wellness Philosophy</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We believe in a holistic approach to wellness, combining ancient healing traditions with modern therapeutic techniques. Our expert practitioners are dedicated to guiding you on your journey to complete wellbeing.
              </p>
              <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition duration-300">
                Book a Session
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg"
                alt="Wellness Philosophy"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Massage Therapy",
                description: "From deep tissue to aromatherapy, our massages are tailored to your needs",
                image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
              },
              {
                title: "Meditation & Mindfulness",
                description: "Guided sessions to help you achieve mental clarity and peace",
                image: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg"
              },
              {
                title: "Holistic Treatments",
                description: "Ancient healing practices combined with modern techniques",
                image: "https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover mb-6"
                />
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-black border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition duration-300">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              "Private Treatment Rooms",
              "Luxury Spa Facilities",
              "Expert Practitioners",
              "Natural Products"
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-light mb-4">{feature}</h3>
                <div className="w-16 h-1 bg-white mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-8">Begin Your Wellness Journey</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to schedule your personalized wellness consultation
          </p>
          <button className="bg-black text-white px-12 py-4 hover:bg-gray-800 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Wellness
