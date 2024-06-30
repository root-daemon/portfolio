"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { WobbleCard } from "@/components/ui/wobble-card";

const Hero = () => {
  return (
    <HeroHighlight>
      <div className="w-1/2 flex-shrink-0">
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <img
              className="h-full w-full object-cover"
              src="/images/me.png"
              alt="hero"
            />
          </div>
        </WobbleCard>
      </div>
      <div className="w-1/2 flex-shrink-0">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="mx-auto max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white md:text-4xl lg:text-5xl lg:leading-snug"
        >
          I&apos;m Vishal <br />
          <Highlight className="text-black dark:text-white">
            A full stack developer
          </Highlight>
        </motion.h1>
      </div>
    </HeroHighlight>
  );
};

export default Hero;
