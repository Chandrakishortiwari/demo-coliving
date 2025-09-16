"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

export default function MeetHomana() {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = useCallback((imageId) => {
    setLoadedImages(prev => ({ ...prev, [imageId]: true }));
  }, []);

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="meet-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <article>
            <header>
              <h2
                id="meet-heading"
                className="text-4xl font-bold text-gray-900 mb-6"
              >
                Meet CoLiving
              </h2>
            </header>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              CoLiving revolutionizes modern living for ambitious professionals,
              creative dreamers, and location-independent digital nomads. We
              transform ordinary spaces into extraordinary communities where
              connections flourish and lifelong friendships begin.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our premium co-living spaces feature fully-furnished rooms,
              high-speed WiFi, flexible lease terms, and vibrant community
              events. From networking sessions to skill-sharing workshops, we
              create an ecosystem where residents thrive personally and
              professionally while enjoying hassle-free living in India's top
              cities.
            </p>
          </article>

          {/* Images */}
          <figure className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-40 rounded-2xl overflow-hidden relative bg-gray-200">
                  <Image
                    src="Images/Slide_Image2.webp"
                    alt="Co-living room interior"
                    fill
                  
                    onLoad={() => handleImageLoad('image1')}
                    className="object-cover rounded-2xl transition-opacity duration-300"
                    style={{ opacity: loadedImages.image1 ? 1 : 0 }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="h-32 rounded-2xl overflow-hidden relative bg-gray-200">
                  <Image
                    src="Images/Slide_Image3.webp"
                    alt="Modern kitchen area"
                    fill
                    loading="lazy"
                    onLoad={() => handleImageLoad('image2')}
                    className="object-cover rounded-2xl transition-opacity duration-300"
                    style={{ opacity: loadedImages.image2 ? 1 : 0 }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="h-32 rounded-2xl overflow-hidden relative bg-gray-200">
                  <Image
                    src="/images/Description.webp"
                    alt="Cozy living area"
                    fill
                    loading="lazy"
                    onLoad={() => handleImageLoad('image3')}
                    className="object-cover rounded-2xl transition-opacity duration-300"
                    style={{ opacity: loadedImages.image3 ? 1 : 0 }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="h-40 rounded-2xl overflow-hidden relative bg-gray-200">
                  <Image
                    src="/Images/Description3.webp"
                    alt="Workspace and study table"
                    fill
                    loading="lazy"
                    onLoad={() => handleImageLoad('image4')}
                    className="object-cover rounded-2xl transition-opacity duration-300"
                    style={{ opacity: loadedImages.image4 ? 1 : 0 }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            
            <div className="absolute -bottom-4 left-4 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-200">
              <Image
                src="/default-avatar-profile-icon-vector-social-media-user-image-182145777.webp"
                alt="Resident of CoLiving"
                fill
                loading="lazy"
                onLoad={() => handleImageLoad('avatar')}
                className="object-cover transition-opacity duration-300"
                style={{ opacity: loadedImages.avatar ? 1 : 0 }}
                sizes="80px"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}