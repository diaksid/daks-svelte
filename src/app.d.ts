/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  // interface Platform {}
}

type Timeout = string | number | NodeJS.Timeout | undefined;

declare let Ya: any;
declare let ymaps: any;
declare let ym: any;

interface NavLink {
  label: string;
  href: string;
  target?: string;
  handle?: (event?: Event) => void;
  links?: NavLink[];
}

interface MenuItem {
  name: string;
  title?: string;
  handle?: (event?: Event) => void;
}

declare module '*?webp' {
  const value: any;
  export = value;
}

declare module '*&webp' {
  const value: any;
  export = value;
}
