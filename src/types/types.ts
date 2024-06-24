import { MutableRefObject, ReactNode } from 'react';
export interface AppHeaderProps {
  title: string;
  isFixed: boolean;
}
export interface NavLinkType {
  name: string;
  href: string;
}

export interface PageCardProps {
  children: ReactNode;
  ref: any;
}

export interface AppContextType {
  currentPath: string;
}
export interface AppContextProviderType {
  currentPath: string;
  pageClass?: string;
  children: ReactNode;
}
export interface IconPropsType {
  icon: string;
  color?: string;
  width?: number;
  height?: number;
  bg?: any;
}
export interface SvgType {
  fragment: ReactNode;
  viewBox: string;
  fill?: string;
}
export interface IconType {
  [key: string]: SvgType;
}

export interface LoaderPropsType {
  show: boolean;
}
export interface SkillCardPropsType {
  name: string;
  xp: number;
  icon: IconPropsType;
  browser?: string;
}

export interface TimelineItemPropsType {
  company: string;
  title: string;
  dateFrom: string;
  dateTo: string;
  logo: string;
  logoSize: string;
  logoPos?: string;
  description: string;
}
