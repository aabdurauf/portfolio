import { Tilt } from "react-tilt";
import { github2 } from "../assets";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useTranslation } from "react-i18next";

type Props = {
  index: number;
  image: string;
  name: string;
  source_code_link: string;
  description: string;
  tags: any;
  deploy: string;
};

type TagProps = {
  name: string;
  color: string;
};

const ProjectCard = ({
  index,
  image,
  name,
  source_code_link,
  description,
  tags,
  deploy,
}: Props) => {
  const { t } = useTranslation()

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="shadow-lg dark:shadow-none bg-tertiary p-5 rounded-2xl sm:w-[360px]"
      >
        <div className="relative h-[230px]">
          <a href={deploy} target="_blank">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          </a>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="absolute top-3 right-3 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github2} alt="github" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{t(name)}</h3>
          <p className="mt-2 text-secondary text-[14px]">{t(description)}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: TagProps) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
