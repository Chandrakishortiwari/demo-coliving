
import { Shield, Clock, Users, Home, Star, Headphones } from 'lucide-react';

export default function WhyHomana() {
  const features = [
    {
      icon: Shield,
      title: "Verified Properties",
      description: "All our properties are thoroughly vetted and inspected for quality and safety standards."
    },
    {
      icon: Clock,
      title: "Instant Booking",
      description: "Book your perfect room in minutes with our ultra-fast booking process and instant confirmation."
    },
    {
      icon: Users,
      title: "Community Living",
      description: "Connect with like-minded individuals and build lasting friendships in our vibrant communities."
    },
    {
      icon: Home,
      title: "Fully Furnished",
      description: "Move in hassle-free with fully furnished rooms equipped with all modern essentials."
    },
    {
      icon: Star,
      title: "Premium Amenities",
      description: "Enjoy top-tier facilities including high-speed WiFi, housekeeping, and recreational facilities."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated support team is available round the clock to assist you with any queries."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-green-600">CoLiving</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Join the growing community of satisfied residents who have found their 
            perfect home with CoLiving across India
          </p>
          
          {/* Progress indicator */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="w-8 h-1 bg-green-600 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Professional feature cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 hover:shadow-md group">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <feature.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}