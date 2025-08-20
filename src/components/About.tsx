import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation()

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{t("about.subtitle")}</p>
        <h2 className={styles.sectionHeadText}>{t("about.title")}.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-primary dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {t("about.description")}
      </motion.p>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map(technology => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
