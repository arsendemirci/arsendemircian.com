import { ReactNode } from 'react';
export interface AppHeaderProps {
  title: string;
}
export interface NavLinkType {
  name: string;
  href: string;
}

export interface PageCardProps {
  children: ReactNode;
}

export interface AppContextType {
  currentPath: string;
}
export interface AppContextProviderType {
  currentPath: string;
  pageClass: string;
  children: ReactNode;
}
export interface IconPropsType {
  icon: string;
  color?: string;
  width?: number;
  height?: number;
}
export interface SvgType {
  fragment: ReactNode;
  viewBox: string;
}
export interface IconType {
  [key: string]: SvgType;
}
