export interface Image {
  src: string,
  width: number,
  height: number,
  title?: string
}

export interface Item {
  id: number,
  order: number,
  data: Element | Image
}

export interface Css {
  item?: string,
  button?: string
}

export type Show = number | ((x: number) => number);

export type Controls = string | string[];

export type Easing = (x: any) => any;

export type Loader = (() => void) | undefined;

export type Loaded = ((e: Event) => void) | undefined;
