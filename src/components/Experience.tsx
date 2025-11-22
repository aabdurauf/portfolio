import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"
import { styles } from "../styles"
import { useTranslation } from "react-i18next"
import { SectionWrapper } from "../hoc"
import { VerticalTimeline } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import { experiences } from "../constants"
import { ExperienceCard } from "./"

const Experience = () => {
  const { t } = useTranslation()

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{t("experience.subtitle")}</p>
        <h2 className={styles.sectionHeadText}>{t("experience.title")}.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")