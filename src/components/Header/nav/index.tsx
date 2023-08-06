"use client";

import styles from "./styles.module.css";
import { motion } from "framer-motion";
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

const index = () => {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`bg-white/75 backdrop-blur-xl ${styles.menu}`}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p className="font-bold font-serif">Ana Paula Vilas Boas</p>
          </div>
          {navItems.map((data, index) => {
            return <NavLink key={index} data={{ ...data, index }}></NavLink>;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default index;
