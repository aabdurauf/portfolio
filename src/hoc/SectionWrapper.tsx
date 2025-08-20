import { FC } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../styles";

const SectionWrapper = (Component: FC, sectionId: string) =>
  function HOC() {
    return (
      <motion.section
        id={sectionId}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer()}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
