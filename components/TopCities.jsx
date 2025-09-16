import { MapPin, Wifi, Tv, Snowflake, Shield, Power as Towel, Droplets, SprayCan as Spray, Users } from 'lucide-react';

export default function TopCities() {
  const cities = [
    {
      name: "Bangalore",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      description: "Tech hub with modern co-living spaces"
    },
    {
      name: "Gurugram",
      image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      description: "Corporate district with premium amenities"
    },
    {
      name: "Mumbai",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      description: "Financial capital with vibrant communities"
    },
    {
      name: "Pune",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      description: "Educational hub with affordable living"
    }
  ];

  const amenities = [
    { icon: Wifi, name: "Free WiFi", color: "text-green-600" },
    { icon: Tv, name: "TV", color: "text-purple-600" },
    { icon: Snowflake, name: "AC", color: "text-cyan-600" },
    { icon: Shield, name: "24X7 Security", color: "text-green-600" },
    { icon: Towel, name: "Clean Towels", color: "text-orange-600" },
    { icon: Droplets, name: "Hot Water", color: "text-red-600" },
    { icon: Spray, name: "Toiletries", color: "text-pink-600" },
    { icon: Users, name: "Room Service", color: "text-indigo-600" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Amenities Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-green-600">Fabulous</span>, or <span className="text-green-600">Free</span>
            </h2>
            <p className="text-xl text-gray-700 mb-2">Great sleep. Refreshing showers.</p>
            {/* <p className="text-lg text-gray-600">
              Hassle free stay, else we pay. <a href="#" className="text-green-600 hover:underline">Know more</a>
            </p> */}
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-3 group-hover:shadow-md transition-shadow">
                  <amenity.icon className={`w-8 h-8 ${amenity.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                  {amenity.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}