import { ReactNode } from 'react';
export interface AppHeaderProps {
  title: string;
}
export interface NavLinkType {
  name: string;
  href: string;
}

export interface PageCardProps {
  //   title: String | null;
  children: ReactNode;
}

export interface AppContextType {
  pageTitle: string;
  currentPath: string;
}
export interface AppContextProviderType {
  currentPath: string;
  children: ReactNode;
}
