export interface AboutProfileProps {
  icon: string;
  content: string;
  noBoldContent?: string;
  link?: string;
}

export interface WorkEduProps {
  startDate: string;
  endDate: string;
  name: string;
  link?: string;
  tooltip?: string;
  description: string;
}

export interface SkillProps {
  icon: string;
  name: string;
  period: string;
}
