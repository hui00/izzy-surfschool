import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // modules séparés

import 'swiper/css';
import 'swiper/css/navigation';

const mediaLabels = {
  "surf_action_2.jpg": "Surfer riding a green wave in Lombok",
  "surf_session_1.mp4": "Surf lesson video from Izzy Surf School",
};

const mediaModules = import.meta.glob('/src/media_carousel/*', { eager: true });

const mediaItems = Object.entries(mediaModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([path, module]) => {
    const src = module.default;
    const filename = path.split('/').pop();
    const extension = path.split('.').pop().toLowerCase();
    const type = ['mp4', 'webm', 'ogg'].includes(extension) ? 'video' : 'image';
    const alt = mediaLabels[filename] || "Izzy Surf School surf lesson media";

    return { type, src, alt, extension };
  });

const MediaCarousel = () => {
  return (
    <section className="w-full max-w-full min-w-0 overflow-hidden p-0 sm:p-4">
      <div className="w-full max-w-3xl min-w-0 mx-auto overflow-hidden">
        <Swiper
          navigation
          modules={[Navigation]}
          className="w-full max-w-full rounded-xl overflow-hidden"
          style={{ width: "100%" }}
        >
          {mediaItems.map((item, index) => (
            <SwiperSlide
              key={`${item.src}-${index}`}
              className="flex items-center justify-center bg-black h-[300px] md:h-[420px]"
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              ) : (
                <video controls playsInline preload="metadata" className="h-full w-full object-contain">
                  <source src={item.src} type={`video/${item.extension}`} />
                  Your browser does not support the video tag.
                </video>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export { MediaCarousel };
