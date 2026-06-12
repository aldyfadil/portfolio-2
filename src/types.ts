export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullStory: string;
  techStack: string[];
  role: string;
  duration: string;
  url: string;
  image: string;
  scope: string[];
  challenge: string;
  solution: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  deliverables: string[];
  features?: string[];
  popular?: boolean;
  extraTitle?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface ProcessStep {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
  deliverables: string[];
  color: string;
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
  iconName: string;
  level: string;
}
