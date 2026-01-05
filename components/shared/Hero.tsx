"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const defaultImages = [
  "/images/hero_slider/1.jpg",
  "/images/hero_slider/2.jpg",
  "/images/hero_slider/3.jpg",
  "/images/hero_slider/4.jpg",
  "/images/hero_slider/5.jpg",
];

interface HeroProps {
  title: React.ReactNode;
  description: React.ReactNode;
  images?: string[];
  showBanner?: boolean;
}

export function Hero({
  title,
  description,
  images = defaultImages,
  showBanner = true,
}: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Image Slider */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center lg:pt-20">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="font-heading mb-6 max-w-5xl text-4xl leading-tight font-bold text-pretty text-white drop-shadow-lg lg:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-lg font-light text-white/90 drop-shadow-md md:text-2xl"
        >
          {description}
        </motion.div>
      </div>

      {/* Bottom Banner */}
      {showBanner && (
        <div className="absolute right-0 bottom-0 left-0 z-20 border-t border-white/10 bg-black/30 backdrop-blur-md">
          <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row">
            <div className="text-center text-white md:text-left">
              <h3 className="text-primary-foreground mb-2 text-xl font-semibold">
                Join us for Service
              </h3>
              <p className="text-lg text-white/90">
                Sunday Service: 9:00 AM &nbsp;•&nbsp; Wednesday: 6:00 PM
              </p>
            </div>

            <Link href="/location">
              <Button
                size="lg"
                className="h-14 bg-white px-8 text-lg font-bold text-black hover:bg-white/90"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
