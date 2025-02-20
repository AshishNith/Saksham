import React from 'react'

const Experiences = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      quote: "An unforgettable luxury experience. The attention to detail and personalized service exceeded all expectations.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
    },
    {
      name: "Michael Chen",
      role: "Food Critic",
      quote: "The culinary offerings are simply outstanding. Each restaurant delivers a unique and memorable dining experience.",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
    },
    {
      name: "Emma Williams",
      role: "Travel Blogger",
      quote: "From the stunning architecture to the world-class amenities, every aspect of my stay was absolutely perfect.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg"
            alt="Hero"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-white text-8xl font-extralight mb-8 tracking-wider">
                Experiences
              </h1>
              <p className="text-gray-200 text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                Discover what our guests have to say about their extraordinary stays
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-light text-center mb-24 tracking-wide">Guest Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="space-y-8">
                <div className="relative w-full aspect-square overflow-hidden">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-xl text-gray-600 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="text-xl font-medium">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center">
            <div>
              <p className="text-6xl font-light mb-4">98%</p>
              <p className="text-xl text-gray-600">Guest Satisfaction</p>
            </div>
            <div>
              <p className="text-6xl font-light mb-4">15K+</p>
              <p className="text-xl text-gray-600">Happy Guests</p>
            </div>
            <div>
              <p className="text-6xl font-light mb-4">200+</p>
              <p className="text-xl text-gray-600">Awards Won</p>
            </div>
            <div>
              <p className="text-6xl font-light mb-4">50+</p>
              <p className="text-xl text-gray-600">Luxury Amenities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Guest Reviews */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-light text-center mb-24 tracking-wide">Recent Reviews</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="bg-gray-50 p-12 space-y-6">
                <div className="flex items-center space-x-2 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl text-gray-600 italic">
                  "Absolutely magnificent. The service was impeccable, the amenities were top-notch, and the overall experience was unforgettable."
                </p>
                <div className="pt-4">
                  <p className="text-lg font-medium">Guest Review</p>
                  <p className="text-gray-500">Luxury Suite Stay - August 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences

