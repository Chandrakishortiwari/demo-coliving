"use client";

import { useState, useMemo, useCallback } from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";

// अलग component for better performance
const CityCard = ({ city, priority, onLoad, isLoaded }) => (
  <article className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
    <a
      href={city.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block aspect-[4/3] relative"
      aria-label={`Explore co-living spaces in ${city.name}`}
    >
      <Image
        src={city.image}
        alt={`Co-living spaces in ${city.name}`}
        className="object-cover transition-transform duration-500"
        fill
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        onLoad={onLoad}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk6Me6q+obMZcXMk2lSdFhl5kG6EYMfSMd2Ml6K/9k="
      />

      {/* Dark Overlay - केवल तभी दिखाएं जब image load हो गया हो */}
      {isLoaded && (
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
      )}

      {/* City Info */}
      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
        <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
        <h3 className="text-white font-semibold text-lg">
          {city.name}
        </h3>
      </div>
    </a>
  </article>
);

export default function MostPopularSpaces() {
  const [showAll, setShowAll] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  const cities = useMemo(() => [
    {
      id: 1,
      name: "Bangalore",
      image: "Images/bangalore.webp",
      link: "https://www.flatmate.in/city/bangalore",
    },
    {
      id: 2,
      name: "Gurugram",
      image: "Images/gurgaon.webp",
      link: "https://www.flatmate.in/city/gurgaon",
    },
    {
      id: 3,
      name: "Noida",
      image: "Images/noida.webp",
      link: "https://www.flatmate.in/city/noida",
    },
    {
      id: 4,
      name: "Delhi",
      image: "Images/delhi.webp",
      link: "https://www.flatmate.in/city/delhi",
    },
    {
      id: 5,
      name: "Mumbai",
      image: "Images/mumbai.webp",
      link: "https://www.flatmate.in/city/mumbai",
    },
    {
      id: 6,
      name: "Pune",
      image: "Images/pune.webp",
      link: "https://www.flatmate.in/city/pune",
    },
    {
      id: 7,
      name: "Hyderabad",
      image: "Images/hydrabad.webp",
      link: "https://www.flatmate.in/city/hyderabad",
    },
    {
      id: 8,
      name: "Chennai",
      image: "Images/chennai.webp",
      link: "https://www.flatmate.in/city/chennai",
    },
  ], []);

  const displayedCities = useMemo(() => 
    showAll ? cities : cities.slice(0, 6), 
    [showAll, cities]
  );

  const handleImageLoad = useCallback((id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  }, []);

  const toggleShowAll = useCallback(() => {
    setShowAll(prev => !prev);
  }, []);

  return (
    <section className="py-16 bg-white" aria-labelledby="coliving-cities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h2
            id="coliving-cities"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold text-lg mb-6"
          >
            Top Coliving Cities in India
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
        </header>

        {/* Cities Grid - Lazy load के साथ */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {displayedCities.map((city, index) => (
            <CityCard 
              key={city.id} 
              city={city} 
              priority={index < 3} // पहली 3 images को priority दें
              onLoad={() => handleImageLoad(city.id)}
              isLoaded={!!loadedImages[city.id]}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={toggleShowAll}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
            aria-label={showAll ? "Show fewer cities" : "Show more cities"}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}