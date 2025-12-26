
import React from 'react';
import { Building2, HardHat, Truck, Ruler, ShieldCheck, Briefcase } from 'lucide-react';
import { Project, Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'General Construction',
    description: 'Specializing in residential, commercial, and industrial building projects with uncompromised quality.',
    icon: 'Building2'
  },
  {
    id: 2,
    title: 'Civil Engineering',
    description: 'Road construction, drainage systems, and structural infrastructure development across Sierra Leone.',
    icon: 'Ruler'
  },
  {
    id: 3,
    title: 'General Trading',
    description: 'Import and supply of high-grade construction materials, machinery, and industrial equipment.',
    icon: 'Truck'
  },
  {
    id: 4,
    title: 'Project Management',
    description: 'End-to-end oversight ensuring projects are delivered on time, within budget, and to specifications.',
    icon: 'Briefcase'
  },
  {
    id: 5,
    title: 'Interior Design',
    description: 'Modern and functional interior solutions for corporate offices and luxury residences.',
    icon: 'HardHat'
  },
  {
    id: 6,
    title: 'Maintenance Services',
    description: 'Proactive facility maintenance and structural repair services for aging infrastructure.',
    icon: 'ShieldCheck'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Freetown Commercial Hub',
    category: 'Commercial',
    image: 'https://picsum.photos/seed/const1/800/600',
    description: 'A 10-story modern office complex in the heart of Freetown.'
  },
  {
    id: 2,
    title: 'Lungi Modern Housing',
    category: 'Residential',
    image: 'https://picsum.photos/seed/const2/800/600',
    description: 'sustainable luxury villa community with renewable energy integration.'
  },
  {
    id: 3,
    title: 'Bo Industrial Warehouse',
    category: 'Industrial',
    image: 'https://picsum.photos/seed/const3/800/600',
    description: 'High-capacity storage and logistics facility for regional trade.'
  },
  {
    id: 4,
    title: 'Makeni Road Rehabilitation',
    category: 'Infrastructure',
    image: 'https://picsum.photos/seed/const4/800/600',
    description: 'Infrastructure upgrade project improving regional connectivity.'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-8 h-8" />,
  Ruler: <Ruler className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />,
  Briefcase: <Briefcase className="w-8 h-8" />,
  HardHat: <HardHat className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />
};
