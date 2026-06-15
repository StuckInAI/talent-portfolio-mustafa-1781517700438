import type { ExperienceItem, CaseStudy, Skill, Stat, Testimonial, NavItem } from '@/types';

export const profile = {
  name: 'Alex Morgan',
  role: 'Manager, Talent Acquisition',
  tagline: 'Building world-class teams through people-first hiring strategy.',
  location: 'San Francisco, CA',
  email: 'alex.morgan@example.com',
  phone: '+1 (415) 555-0142',
  linkedin: 'https://linkedin.com/in/alexmorgan',
  photo: '/images/Passport-Photo.jpg',
  summary:
    "I'm a Talent Acquisition leader with 10+ years of experience scaling teams across tech, fintech, and healthcare. I partner with executives to design hiring strategies that move the needle — reducing time-to-hire, improving quality of hire, and building diverse, high-performing teams.",
};

export const nav: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/contact', label: 'Contact' },
];

export const stats: Stat[] = [
  { value: '500+', label: 'Hires placed' },
  { value: '32%', label: 'Avg. reduction in time-to-hire' },
  { value: '45%', label: 'Diversity hires in leadership' },
  { value: '10+', label: 'Years experience' },
];

export const skills: Skill[] = [
  { name: 'Executive Search & Sourcing', level: 95 },
  { name: 'Employer Branding', level: 88 },
  { name: 'ATS & HR Tech (Greenhouse, Lever, Workday)', level: 92 },
  { name: 'Diversity, Equity & Inclusion Hiring', level: 90 },
  { name: 'Workforce Planning', level: 85 },
  { name: 'Stakeholder Management', level: 94 },
  { name: 'Data-Driven Recruiting Analytics', level: 87 },
  { name: 'Candidate Experience Design', level: 91 },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Northwind Technologies',
    role: 'Manager, Talent Acquisition',
    period: '2021 — Present',
    location: 'San Francisco, CA',
    highlights: [
      'Lead a team of 6 recruiters across Engineering, Product, and GTM functions.',
      'Scaled headcount from 180 to 420 employees in 24 months with a 92% offer-acceptance rate.',
      'Built employer brand program that grew inbound applications by 3.4x.',
      'Implemented structured interviewing across the org; quality of hire scores up 28%.',
    ],
  },
  {
    company: 'BrightPath Health',
    role: 'Senior Talent Acquisition Partner',
    period: '2018 — 2021',
    location: 'Remote',
    highlights: [
      'Owned full-cycle recruiting for clinical and tech leadership roles.',
      'Reduced time-to-fill from 62 to 38 days through pipeline optimization.',
      'Launched DEI-focused sourcing strategy increasing underrepresented hires by 41%.',
    ],
  },
  {
    company: 'Apex Recruiting Group',
    role: 'Technical Recruiter',
    period: '2015 — 2018',
    location: 'New York, NY',
    highlights: [
      'Placed 120+ engineers and product managers at high-growth startups.',
      'Top-performing recruiter for 3 consecutive years (President\u2019s Club).',
      'Designed candidate-experience playbook adopted firm-wide.',
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: 'Scaling Engineering 2x in 12 Months',
    company: 'Northwind Technologies',
    challenge:
      'Executive team committed to doubling the engineering org while maintaining a 90%+ offer-accept rate and improving diversity benchmarks.',
    approach: [
      'Built a dedicated sourcing pod focused on senior IC and EM pipelines.',
      'Partnered with engineering leadership to standardize leveling and interview rubrics.',
      'Launched referral incentive program and revamped careers site.',
      'Established weekly hiring funnel reviews with VPs.',
    ],
    result:
      'Hit hiring plan two months early with 94% offer acceptance and 38% URG representation across new hires.',
    metrics: [
      { label: 'Engineers hired', value: '142' },
      { label: 'Offer acceptance', value: '94%' },
      { label: 'URG hires', value: '38%' },
      { label: 'Time-to-hire', value: '34d' },
    ],
  },
  {
    title: 'Rebuilding the Candidate Experience',
    company: 'BrightPath Health',
    challenge:
      'Glassdoor interview ratings had fallen to 2.9. Candidate drop-off after on-sites was 28%.',
    approach: [
      'Audited every touchpoint from application to onboarding.',
      'Trained 60+ interviewers on inclusive, structured interviewing.',
      'Introduced same-day debriefs and 48-hour decision SLAs.',
      'Built personalized rejection comms and feedback loops.',
    ],
    result:
      'Interview rating rose to 4.6 in 9 months. On-site to offer conversion improved 22 points.',
    metrics: [
      { label: 'Glassdoor rating', value: '4.6' },
      { label: 'Drop-off reduced', value: '−22pts' },
      { label: 'NPS (candidates)', value: '+71' },
      { label: 'Interviewers trained', value: '60+' },
    ],
  },
  {
    title: 'Executive Search: VP of Product',
    company: 'Confidential SaaS Scale-up',
    challenge:
      'Closed search for a VP of Product after a previous 6-month effort by an external firm failed.',
    approach: [
      'Re-scoped the role profile with the CEO and board sponsor.',
      'Built a curated long-list of 80 operators from competitive PLG companies.',
      'Ran a tight 5-stage process with structured scorecards.',
      'Negotiated total comp package including equity refresh.',
    ],
    result: 'Offer signed in 9 weeks. Candidate is still in seat 3+ years later.',
    metrics: [
      { label: 'Time to close', value: '9 wks' },
      { label: 'Final candidates', value: '4' },
      { label: 'Cost vs. agency', value: '−$120k' },
      { label: 'Tenure', value: '3+ yrs' },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Alex transformed how we hire. The combination of strategic thinking and hands-on execution is rare — and the results speak for themselves.',
    author: 'Priya Shah',
    title: 'VP Engineering, Northwind Technologies',
  },
  {
    quote:
      'The best TA partner I\u2019ve ever worked with. Brings rigor, empathy, and a real point of view on building teams.',
    author: 'Marcus Lee',
    title: 'CEO, BrightPath Health',
  },
  {
    quote:
      'Alex made our candidates feel seen and respected at every step. Our employer brand has never been stronger.',
    author: 'Dana Whitfield',
    title: 'Chief People Officer',
  },
];
