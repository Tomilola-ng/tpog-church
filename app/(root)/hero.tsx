"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const images = [
  "/images/hero_slider/1.jpg",
  "/images/hero_slider/2.jpg",
  "/images/hero_slider/3.jpg",
  "/images/hero_slider/4.jpg",
  "/images/hero_slider/5.jpg",
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl leading-tight drop-shadow-lg font-heading"
        >
          The Place Of Grace Church, <br className="hidden md:block" />
          <span className="text-primary-foreground">
            Making your life count
          </span>
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/90 max-w-3xl font-light drop-shadow-md"
        >
          <p className="mb-2">Heralding the Lordship of the Word,</p>
          <p>Demonstrating the Influence of the Spirit</p>
        </motion.div>
      </div>

      {/* Bottom Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/30 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2 text-primary-foreground">
              Join us for Service
            </h3>
            <p className="text-white/90 text-lg">
              Sunday Service: 9:00 AM &nbsp;•&nbsp; Wednesday: 6:00 PM
            </p>
          </div>

          <Link href="/location">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-bold text-lg px-8 h-14"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
