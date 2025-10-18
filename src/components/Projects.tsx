import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { progLangs, projects } from "../constants";
import { ProjectCard } from "./";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Projects = () => {
  const { t } = useTranslation()
  const [active, setActive] = useState<string>("projects.langBtns.all")

  const filterProjects = (projectLang: string) => {
    if (projectLang !== active) {
      console.log(active);
    }
  }

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

      <div className="flex gap-5 mt-5">
        {progLangs.map((language, index) => (
          <button
            key={index}
            onClick={() => {
              filterProjects(language.name)
              setActive(language.name)
            }}
            className={`${active === language.name ? "dark:text-white text-primary" : "text-secondaryLightText dark:text-secondary"} hover:text-primary dark:hover:text-white duration-300`}
          >
            {t(language.name)}
          </button>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
