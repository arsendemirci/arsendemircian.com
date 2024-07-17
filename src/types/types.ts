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
  bg?: string;
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
export interface ChipsType {
  [key: string]: {
    label: string;
    labelColor?: string;
    labelBg?: string;
    text?: string;
    textBg: string;
    textColor: string;
  };
}
export interface IconChipPropsType {
  icon: string;
  label: string;
  labelColor?: string;
  labelBg?: string;
  text?: string;
  textBg: string;
  textColor: string;
}

export interface PortfolioItemLinkType {
  name: string;
  icon: string;
  link: string;
}
export interface PortfolioItemType {
  name: string;
  description: string;
  images: Array<string>;
  tags: Array<string>;
  links?: Array<PortfolioItemLinkType>;
  readMore?: Function;
}
export interface ContactFormDataType {
  name: string;
  email: string;
  subject: string;
  message: string;
}
