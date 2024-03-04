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

export interface ProjectLabelProps {
  label: string;
  color: string;
}

export interface ProjectProps {
  thumbnail: string;
  title: string;
  contRate: number;
  appContRate?: number;
  labels: ProjectLabelProps[];
  contribution: string;
  description: string;
}
