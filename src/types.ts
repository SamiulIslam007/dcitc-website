import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface DomainFeature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  image: string;
  tier: 'executive' | 'chief' | 'joint';
}