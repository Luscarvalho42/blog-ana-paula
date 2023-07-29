"use client";
import { Subtitle, Title } from "@/components/Typography";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const LastPostsSection = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);
  return (
    <section className="w-full max-w-7xl m-auto px-4 overflow-hidden">
      <Title className="text-white mb-2 mt-8">Últimas postagens</Title>

      <motion.div
        ref={carousel}
        className="cursor-grab"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex gap-4"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          <div className="bg-white h-96 min-w-[288px] rounded-xl"></div>
          <div className="bg-white h-96 min-w-[288px] rounded-xl"></div>
          <div className="bg-white h-96 min-w-[288px] rounded-xl"></div>
          <div className="bg-white h-96 min-w-[288px] rounded-xl"></div>
          <div className="bg-white h-96 min-w-[288px] rounded-xl"></div>
          <div className="bg-white h-96 min-w-[288px] rounded-xl"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};
