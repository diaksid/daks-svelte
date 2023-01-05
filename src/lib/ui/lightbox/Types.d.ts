type Behaviour = 'hide' | 'loop' | '';

type Status =
  | {
      countItems: number;
      activeItem: number;
    }
  | undefined;

type Loader = (() => void) | undefined;

interface Options {
  behaviour?: Behaviour;
  clickableClose?: boolean;
  buttonClose?: boolean;
  buttonFullscreen?: boolean;
  enableKeyboard?: boolean;
  bodyScroll?: boolean;
  duration?: number;
}

interface Css {
  overlay?: string;
  header?: string;
  footer?: string;
}

interface Item {
  id: number;
  title: string;
  description: string;
}

export type { Options, Css, Item, Status, Loader };
