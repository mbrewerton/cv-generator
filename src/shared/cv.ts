export interface Experience {
  primarySkills: string;
  title: string;
  dateRange: string;
  summary: string;
  points: string[];
}

export interface Subject {
  name: string;
  grade: string|number;
}

export interface Education {
  school: string;
  level: string;
  subjects: Subject[];
  dateRange: string;
}

export interface Cv {
  name: string;
  jobTitle: string;
  contacts: string[];
  summaryPoints: string[];
  professionalExperiences: Experience[];
  personalExperiences: Experience[];
  education: Education[];
}
