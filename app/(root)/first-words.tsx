"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FirstWords() {
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
              src="/images/pastor-picture.jpg"
              alt="Pastor Kayode Samuel"
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
          <h2 className="text-primary mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            First Words
          </h2>

          <div className="text-muted-foreground mb-10 max-w-2xl text-lg leading-relaxed">
            <p className="text-foreground mb-6 text-xl font-medium">
              Hello friends,
            </p>

            <p className="mb-6">
              On behalf of The Place Of Grace Church, I welcome you here. We
              pray and trust God&apos;s Spirit to open your eyes to truths found
              in His word via this medium. The Word as a message and ministry is
              our mandate in all the earth.
            </p>

            <p className="mb-8">
              It brings clarity of purpose, wholeness, wellness and above all
              stability in Christ. This we pray and receive is your experience
              here. Don&apos;t just surf here. Learn here and also tell your
              friends!
              <br />
              <br />
              You are blessed !!!
            </p>

            <p className="text-primary mt-2 text-xl font-medium">
              Kayode Samuel
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 lg:justify-start">
            <Button
              asChild
              size="lg"
              className="px-12 py-8 text-2xl font-semibold"
            >
              <Link href="/about-us">About Us</Link>
            </Button>

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
