declare module "react-vertical-timeline-component" {
  import * as React from "react"

  export interface VerticalTimelineElementProps {
    contentStyle?: React.CSSProperties
    children?: React.ReactNode
    contentArrowStyle?: React.CSSProperties
    date?: string | JSX.Element
    iconStyle?: React.CSSProperties
    icon?: JSX.Element
    className?: string
  }

  export class VerticalTimelineElement extends React.Component<VerticalTimelineElementProps> { }

  export interface VerticalTimelineProps { }

  export class VerticalTimeline extends React.Component<VerticalTimelineProps> { }
}