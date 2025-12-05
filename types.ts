import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  bgIcon?: LucideIcon; // Optional background watermark icon
}

export interface ProcessStep {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}
