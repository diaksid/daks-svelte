export type Timeout = string | number | NodeJS.Timeout | undefined;

export interface NavLink {
  label: string;
  href: string;
  title?: string;
  target?: string;
  handle?: (event?: Event) => void;
  links?: NavLink[];
}

export interface MenuItem {
  name: string;
  title?: string;
  handle?: (event?: Event) => void;
}
