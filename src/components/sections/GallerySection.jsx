import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';

const mediaModules = import.meta.glob('/src/media_carousel/*', { eager: true });

const mediaItems = Object.entries(mediaModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, module]) => {
    const src = module.default;
    const extension = path.split('.').pop().toLowerCase();
    const type = ['mp4', 'webm', 'ogg'].includes(extension) ? 'video' : 'image';
    return { type, src, extension };
  });

const imageCount = mediaItems.filter((item) => item.type === 'image').length;
const videoCount = mediaItems.length - imageCount;

const GallerySection = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const filteredItems = useMemo(
    () => (filter === 'all' ? mediaItems : mediaItems.filter((item) => item.type === filter)),
    [filter]
  );

  const filters = [
    { key: 'all', label: t('gallerySection.filterAll'), count: mediaItems.length },
    { key: 'image', label: t('gallerySection.filterPhotos'), count: imageCount },
    { key: 'video', label: t('gallerySection.filterVideos'), count: videoCount },
  ];

  const changeFilter = (key) => {
    setActiveIndex(null);
    setFilter(key);
  };

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback((e) => { e?.stopPropagation(); setActiveIndex((i) => (i + 1) % filteredItems.length); }, [filteredItems.length]);
  const prev = useCallback((e) => { e?.stopPropagation(); setActiveIndex((i) => (i - 1 + filteredItems.length) % filteredItems.length); }, [filteredItems.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, next, prev]);

  const active = isOpen ? filteredItems[activeIndex] : null;

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow mb-4">Gallery</span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold md:text-4xl"
          >
            <Trans i18nKey="gallerySection.title">
              From the <span className="text-gradient">water</span>
            </Trans>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            {t('gallerySection.intro')}
          </motion.p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map(({ key, label, count }) => (
            <button
              key={key}
              type="button"
              onClick={() => changeFilter(key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filter === key
                  ? "bg-gradient-ocean text-white shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/70"
              }`}
            >
              {label} <span className="opacity-70">({count})</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {filteredItems.map((item, index) => (
            <motion.button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: Math.min(index, 8) * 0.03 }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label={t('gallerySection.open')}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <>
                  <video preload="metadata" muted playsInline className="h-full w-full object-cover">
                    <source src={`${item.src}#t=0.1`} type={`video/${item.extension}`} />
                  </video>
                  <span className="absolute inset-0 flex items-center justify-center bg-slate-900/30 transition-colors group-hover:bg-slate-900/20">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg">
                      <Play className="ml-0.5 h-5 w-5 fill-current" />
                    </span>
                  </span>
                </>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label={t('gallerySection.close')}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <div className="max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {active.type === 'image' ? (
              <img src={active.src} alt="" className="mx-auto max-h-[85vh] w-auto rounded-2xl object-contain" />
            ) : (
              <video controls autoPlay playsInline className="mx-auto max-h-[85vh] w-full rounded-2xl bg-black">
                <source src={active.src} type={`video/${active.extension}`} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
