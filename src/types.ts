import { LucideIcon } from 'lucide-react';

export interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  roi: string;
}

export interface ChartData {
  name: string;
  Facebook: number;
  Pixerun: number;
}