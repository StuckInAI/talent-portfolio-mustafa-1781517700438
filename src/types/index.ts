export type NavItem = {
  to: string;
  label: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export type CaseStudy = {
  title: string;
  company: string;
  challenge: string;
  approach: string[];
  result: string;
  metrics: { label: string; value: string }[];
};

export type Skill = {
  name: string;
  level: number;
};

export type Stat = {
  value: string;
  label: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  title: string;
};
