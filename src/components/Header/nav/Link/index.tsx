import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";

interface LinkProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
}

export const NavLink = ({ data }: LinkProps) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div variants={scale} className={styles.indicator}></motion.div>
      <a href={href} className="text-stone-800 font-sans">
        {title}
      </a>
    </motion.div>
  );
};
