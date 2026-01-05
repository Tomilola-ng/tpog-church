"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function AboutUsSection() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
        {/* Image Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full lg:basis-3/7"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/tpog-service.jpg"
              alt="The Place Of Grace Church Service"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 43vw"
            />

            {/* Decorative border */}
            <div className="border-primary absolute inset-0 rounded-2xl border-4 opacity-20" />
          </div>

          {/* Decorative background shape */}
          <div className="bg-primary/10 absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex w-full flex-col items-center text-center lg:basis-4/7 lg:items-start lg:text-left"
        >
          <h2 className="text-primary font-heading mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Who We Are
          </h2>

          <div className="text-muted-foreground mb-10 max-w-2xl text-lg leading-relaxed">
            <p className="mb-6">
              The Place Of Grace Church is a vibrant community of believers
              dedicated to the teaching of God&apos;s Word and the manifestation
              of His power. We are a family bound together by the love of
              Christ, committed to raising a generation that walks in dominion
              and victory.
            </p>

            <p className="mb-6">
              We believe that the Word of God brings clarity of purpose,
              wholeness, and stability. Our mandate is to equip you with
              biblical truths that will transform your life and empower you to
              fulfill your God-given destiny.
            </p>

            <p className="mb-8">
              Whether you are seeking spiritual growth, a supportive community,
              or a place to encounter God&apos;s presence, you are welcome here.
              Join us as we grow together in grace and impact our world for the
              Kingdom.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 lg:justify-start">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-12 py-8 text-2xl font-semibold"
            >
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
