"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

export default function CustomerFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimeoutRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Arjun Sharma",
      role: "Software Engineer",
      rating: 5,
      feedback:
        "Outstanding co-living experience! The rooms are spotless, amenities are top-notch, and I've made lifelong friends here. Highly recommend!",
      image: "/images/default-avatar-profile-icon-vector-social-media-user-image-182145777.webp",
      propertyImage: "/images/description3.webp",
      propertyAlt:
        "Modern co-living room with comfortable seating and natural lighting",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Marketing Manager",
      rating: 5,
      feedback:
        "Perfect for working professionals! The location is excellent, facilities are modern, and the staff is incredibly supportive. Love it here!",
      image: "/images/default-avatar-profile-icon-vector-social-media-user-image-182145777.webp",
      propertyImage: "/images/description.webp",
      propertyAlt: "Professional co-living workspace with modern amenities",
    },
    {
      id: 3,
      name: "Rohit Kumar",
      role: "UI/UX Designer",
      rating: 5,
      feedback:
        "The community vibe is incredible! Made amazing friends and the interior design is absolutely beautiful. Best decision I made!",
      image: "/images/default-avatar-profile-icon-vector-social-media-user-image-182145777.webp",
      propertyImage: "/images/slide_image3.webp",
      propertyAlt:
        "Stylish co-living common area with contemporary interior design",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      role: "Data Analyst",
      rating: 5,
      feedback:
        "Exceptional service and wonderful community! The facilities are world-class and the management team is always helpful. Couldn't be happier!",
      image: "/images/default-avatar-profile-icon-vector-social-media-user-image-182145777.webp",
      propertyImage: "/images/slide_image2.webp",
      propertyAlt: "Premium co-living facility with world-class amenities",
    },
    {
      id: 5,
      name: "Vikash Singh",
      role: "Product Manager",
      rating: 5,
      feedback:
        "Amazing co-living space with great amenities! The community is vibrant and the location is perfect for my daily commute.",
      image: "/images/default-avatar-profile-icon-vector-social-media-user-image-182145777.webp",
      propertyImage: "/images/shared_image.webp",
      propertyAlt:
        "Vibrant co-living community space with excellent location access",
    },
    {
      id: 6,
      name: "Anita Desai",
      role: "Content Writer",
      rating: 5,
      feedback:
        "Love the modern interiors and the friendly atmosphere! It's more than just accommodation - it's a lifestyle. Highly recommended!",
      image: "/images/default-avatar-profile-icon-vector-social-media-user-image-182145777.webp",
      propertyImage: "/images/description.webp",
      propertyAlt:
        "Modern co-living interior with friendly atmosphere and lifestyle amenities",
    },
  ];

  // Move to next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Move to previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // When user selects a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
    pauseAutoPlay();
  };

  // Pause autoplay and resume after 10 seconds
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);

    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  // Auto play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
        pauseAutoPlay();
      } else if (e.key === "ArrowRight") {
        nextSlide();
        pauseAutoPlay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-gray-50"
      aria-label="Customer testimonials and reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Customer's <span className="text-green-600">Feedback</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Read what our satisfied residents say about their co-living experience with us
          </p>
          <div className="flex justify-center space-x-2" aria-hidden="true">
            <div className="w-12 h-1 bg-green-600 rounded-full"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full border-2 border-white"></div>
            <div className="w-12 h-1 bg-green-600 rounded-full"></div>
          </div>
        </header>

        <div className="relative max-w-6xl mx-auto">
          <article
            className="bg-white rounded-3xl overflow-hidden shadow-xl relative"
            itemScope
            itemType="https://schema.org/Review"
            aria-live="polite"
          >
            <div className="grid lg:grid-cols-2 min-h-[400px]">
              {/* Left Side - Review content */}
              <figure className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden mr-6 border-4 border-green-100 flex-shrink-0 relative">
                    <Image
                      src={currentTestimonial.image}
                      alt={`${currentTestimonial.name} - ${currentTestimonial.role}`}
                      fill
                      className="object-cover rounded-full"
                      loading="lazy"
                      placeholder="blur"
                    
                      blurDataURL="/images/blure.webp"
                      itemProp="image"
                      sizes="(max-width: 768px) 100vw, 200px"
                    />
                  </div>
                  <figcaption>
                    <h3
                      className="text-2xl font-bold text-gray-900 mb-1"
                      itemProp="author"
                      itemScope
                      itemType="https://schema.org/Person"
                    >
                      <span itemProp="name">{currentTestimonial.name}</span>
                    </h3>
                    <p className="text-green-600 text-lg">{currentTestimonial.role}</p>
                  </figcaption>
                </div>

                <div
                  className="flex items-center mb-6"
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  <div
                    className="flex space-x-1"
                    role="img"
                    aria-label={`${currentTestimonial.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        className={`w-6 h-6 ${
                          index < currentTestimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <meta itemProp="ratingValue" content={currentTestimonial.rating} />
                  <meta itemProp="bestRating" content="5" />
                </div>

                <blockquote
                  className="text-gray-700 text-xl leading-relaxed font-light"
                  itemProp="reviewBody"
                >
                  "{currentTestimonial.feedback}"
                </blockquote>

                <footer className="sr-only">
                  <meta itemProp="itemReviewed" content="CoLiving Co-living Spaces" />
                  <meta itemProp="datePublished" content="2024-01-01" />
                </footer>
              </figure>

              {/* Right Side - Property Image */}
              <figure className="relative overflow-hidden w-full h-64 lg:h-auto">
                <Image
                  src={currentTestimonial.propertyImage}
                  alt={currentTestimonial.propertyAlt}
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/images/blure.webp"
                  className="object-cover transition-transform duration-700"
                  sizes="100vw"
                />
                <figcaption className="sr-only">{currentTestimonial.propertyAlt}</figcaption>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>
              </figure>
            </div>

            {/* Navigation Buttons */}
            <button
              type="button"
              onClick={() => {
                prevSlide();
                pauseAutoPlay();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white focus:ring-2 focus:ring-green-500 transition-colors shadow-lg"
              aria-label="Previous testimonial"
              onFocus={pauseAutoPlay}
            >
              <ChevronLeft />
            </button>

            <button
              type="button"
              onClick={() => {
                nextSlide();
                pauseAutoPlay();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white focus:ring-2 focus:ring-green-500 transition-colors shadow-lg"
              aria-label="Next testimonial"
              onFocus={pauseAutoPlay}
            >
              <ChevronRight />
            </button>
          </article>

          {/* Navigation Dots */}
          <nav
            className="flex justify-center mt-8 space-x-4"
            aria-label="Testimonial navigation"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  index === currentIndex ? "bg-green-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </nav>

          {/* Counter */}
          <div className="text-center mt-6">
            <span className="text-gray-500 text-base">
              {currentIndex + 1} of {testimonials.length}
            </span>
          </div>
        </div>

        {/* SEO summary for screen readers */}
        <aside className="sr-only">
          <h3>Customer Reviews Summary</h3>
          <p>
            Our co-living spaces have received excellent reviews from residents
            including software engineers, marketing managers, designers, and
            other professionals. Common praise includes spotless rooms,
            top-notch amenities, vibrant community, modern facilities, and
            exceptional service.
          </p>
        </aside>
      </div>
    </section>
  );
}
