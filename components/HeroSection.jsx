"use client";

import { useEffect, useState, useRef, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Memoized Slide Component
const Slide = memo(({ slide }) => (
  <div className="absolute inset-0 transition-opacity duration-700 opacity-100">
    <Image
      src={slide.image}
      alt={slide.title}
      fill
      className="object-cover rounded-xl"
      placeholder="blur"
      blurDataURL="/Images/blure.webp"
      priority={slide.priority}
      sizes="100vw"
    />
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="relative z-50 h-full flex items-center justify-center text-center text-white px-4">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          {slide.title.split(" ").map((word, i) => (
            <span
              key={i}
              className={i === slide.title.split(" ").length - 1 ? "text-green-600" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <p className="text-lg md:text-xl mb-4 font-light">{slide.subtitle}</p>
        <p className="text-base md:text-lg leading-relaxed opacity-90">{slide.description}</p>
      </div>
    </div>
  </div>
));

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stats, setStats] = useState({ users: 0, reviews: 0 });
  const animationFrame = useRef(null);

  const slides = [
    {
      image: "Images/1cdff56c-f084-4b4c-8c91-a806089626ca.webp",
      title: "Community Living Spaces",
      subtitle: "Connect • Share • Grow • Experience Together",
      description: "Experience the warmth of community living in thoughtfully designed common areas perfect for socializing and relaxation",
      priority: true,
    },
    {
      image: "Images/Slider_Image2.webp",
      title: "Modern Co-Living Spaces",
      subtitle: "Live • Work • Connect • Thrive Together",
      description: "Discover beautifully designed spaces that blend privacy with community, perfect for modern living",
      priority: false,
    },
    {
      image: "Images/Slider_Image3.webp",
      title: "Thoughtfully Designed Homes",
      subtitle: "Comfort • Style • Community • Connection",
      description: "Every detail crafted to create the perfect balance between personal space and shared experiences",
      priority: false,
    },
  ];

  // Counter animation using requestAnimationFrame for smoothness and less blocking
  // useEffect(() => {
  //   const duration = 2000; // animation duration in ms
  //   const startTime = performance.now();

  //   const targets = { users: 85, reviews: 3500 };

  //   function animate(time) {
  //     const elapsed = time - startTime;
  //     if (elapsed < duration) {
  //       setStats({
  //         users: Math.floor((elapsed / duration) * targets.users),
  //         reviews: Math.floor((elapsed / duration) * targets.reviews),
  //       });
  //       animationFrame.current = requestAnimationFrame(animate);
  //     } else {
  //       setStats(targets);
  //       cancelAnimationFrame(animationFrame.current);
  //     }
  //   }
  //   animationFrame.current = requestAnimationFrame(animate);

  //   return () => cancelAnimationFrame(animationFrame.current);
  // }, []);


  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  // Auto slide with cleanup
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      <div className="relative h-screen">
      
        <Slide slide={slides[currentSlide]} />

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-green-600" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex items-center gap-12">
          <div className="text-center text-white">
            <div className="text-3xl font-bold">{stats.users}+</div>
            <div className="text-sm opacity-80">Happy residents</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-green-600">{stats.reviews.toLocaleString()}+</div>
            <div className="text-sm opacity-80">5-star reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
