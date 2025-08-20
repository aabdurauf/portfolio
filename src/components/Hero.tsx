import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Trans, useTranslation } from "react-i18next";
import { Code } from "./";

const Hero = () => {
  useTranslation()

  return (
    <>
      <div className="flex justify-between lg:flex-row flex-col gap-5 overflow-hidden">
        <motion.div variants={textVariant()} className="w-full lg:w-1/2 lg:mb-0 mb-5">
          <h2 className="text-primary dark:text-secondary text-3xl lg:text-4xl font-bold leading-normal lg:mt-10">
            <Trans
              i18nKey="hero.title"
              components={{
                pink: <span className="text-pink-500" />,
                block: <span className="block" />
              }}
            />
          </h2>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-5 text-lg lg:text-xl text-primary dark:text-secondary"
          >
            <Trans
              i18nKey="hero.firstSubtitle"
              components={{
                bold: <span className="font-bold" />
              }}
            />
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-2 text-lg lg:text-xl text-primary dark:text-secondary"
          >
            <Trans
              i18nKey="hero.secondSubtitle"
              components={{
                bold: <span className="font-bold" />
              }}
            />
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 1)}
          className="shadow-lg dark:shadow-none bg-primary w-full lg:w-1/2 bg-gradient-to-r from-blue-750 to-indigo-900 rounded-lg select-none border border-blue-850 relative"
        >
          <Code />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Hero, "hero");
