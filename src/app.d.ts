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

interface MenuItem {
  label: string;
  title?: string;
  handle?: (event?: Event) => void;
}

interface NavLink extends MenuItem {
  href: string;
  links?: NavLink[];
}

declare module '*?webp' {
  const value: any;
  export = value;
}

declare module '*&webp' {
  const value: any;
  export = value;
}
