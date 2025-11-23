import { VerticalTimelineElement } from "react-vertical-timeline-component"

const ExperienceCard = ({ experience }: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      className=""
      date={experience.date}
      iconStyle={{ overflow: "hidden" }}
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