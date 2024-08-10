export interface Experience {
  primarySkills: string;
  title: string;
  dateRange: string;
  summary: string;
  points: string[];
}

export interface Cv {
  name: string;
  jobTitle: string;
  contacts: string[];
  summaryPoints: string[];
  professionalExperiences: Experience[];
  personalExperiences: Experience[];
}
