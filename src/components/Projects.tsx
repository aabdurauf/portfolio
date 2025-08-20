import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { ProjectCard } from "./";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation()

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{t("projects.subtitle")}</p>
        <h2 className={styles.sectionHeadText}>{t("projects.title")}.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-primary dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {t("projects.description")}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
