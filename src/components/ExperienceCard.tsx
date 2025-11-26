import { VerticalTimelineElement } from "react-vertical-timeline-component"
import { useTheme } from "../context/themeContext"

const ExperienceCard = ({ experience }: any) => {
  const theme = useTheme()

  const color = theme.theme === "Dark" ? "#ffffff" : "#151030"

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#151030" }}
      contentArrowStyle={{ borderRight: `7px solid ${color}` }}
      className="dark:text-white text-black"
      date={experience.date}
      iconStyle={{ boxShadow: `0px 0px 0px 4px ${color}`, overflow: "hidden" }}
      icon={
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px]">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point: string, index: number) => (
            <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}

export default ExperienceCard