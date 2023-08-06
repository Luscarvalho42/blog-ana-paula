"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import { NavLink } from "./Link";

const navItems = [
  {
    title: "Início",
    href: "#inicio",
  },
  {
    title: "Postagens",
    href: "#postagens",
  },
  {
    title: "Serviços",
    href: "#servicos",
  },
  {
    title: "Avaliações",
    href: "#avaliacoes",
  },
  {
    title: "Contato",
    href: "#contato",
  },
];

export default function index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`bg-white/75 backdrop-blur-xl ${styles.menu}`}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p className="font-bold font-serif">Ana Paula Vilas Boas</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></NavLink>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
