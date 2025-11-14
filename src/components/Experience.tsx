import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"
import { styles } from "../styles"
import { useTranslation } from "react-i18next"
import { SectionWrapper } from "../hoc"

const Experience = () => {
  const { t } = useTranslation()

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{t("experience.subtitle")}</p>
        <h2 className={styles.sectionHeadText}>{t("experience.title")}.</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")