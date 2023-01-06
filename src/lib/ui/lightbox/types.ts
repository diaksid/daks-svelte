export interface Options {
  behaviour?: Behaviour;
  clickableClose?: boolean;
  buttonClose?: boolean;
  buttonFullscreen?: boolean;
  enableKeyboard?: boolean;
  bodyScroll?: boolean;
  duration?: number;
}

export interface Css {
  overlay?: string;
  header?: string;
  footer?: string;
}

export interface Item {
  id: number;
  title: string;
  description: string;
}

export type Behaviour = '' | 'hide' | 'loop';

export type Status =
  | undefined
  | {
      countItems: number;
      activeItem: number;
    };

export type Loader = undefined | (() => void);
