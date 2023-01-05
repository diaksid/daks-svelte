interface Image {
  src: string,
  width: number,
  height: number,
  title?: string
}

interface Item {
  id: number,
  order: number,
  data: Element | Image
}

interface Css {
  item?: string,
  button?: string
}

type Show = number | ((x: number) => number);

type Controls = string | string[];

type Easing = (x: any) => any;

type Loader = (() => void) | undefined;

type Loaded = ((e: Event) => void) | undefined;

type Timeout = string | number | NodeJS.Timeout | undefined;

export type {
  Image,
  Item,
  Css,
  Show,
  Controls,
  Easing,
  Loader,
  Loaded,
  Timeout
};
