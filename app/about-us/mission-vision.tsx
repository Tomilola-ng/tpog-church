"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

export function MissionVision() {
  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Mission */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-card flex flex-col items-center rounded-2xl p-8 text-center shadow-lg lg:p-12"
          >
            <div className="bg-primary/10 mb-6 flex h-20 w-20 items-center justify-center rounded-full">
              <Target className="text-primary h-10 w-10" />
            </div>
            <h3 className="text-primary mb-4 text-3xl font-bold">
              Our Mission
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              To raise a people of grace and power, equipped with the Word of
              God to transform their world and manifest the kingdom of God in
              every sphere of life.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-card flex flex-col items-center rounded-2xl p-8 text-center shadow-lg lg:p-12"
          >
            <div className="bg-primary/10 mb-6 flex h-20 w-20 items-center justify-center rounded-full">
              <Lightbulb className="text-primary h-10 w-10" />
            </div>
            <h3 className="text-primary mb-4 text-3xl font-bold">Our Vision</h3>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              To see lives transformed by the power of God&apos;s grace,
              creating a community of believers who walk in dominion, victory,
              and divine purpose.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
