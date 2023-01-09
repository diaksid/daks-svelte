declare global {
  type Timeout = string | number | NodeJS.Timeout | undefined;

  interface NavLink {
    label: string;
    href: string;
    title?: string;
    target?: string;
    handle?: (event?: Event) => void;
    links?: NavLink[];
  }

  interface MenuItem {
    name: string;
    title?: string;
    handle?: (event?: Event) => void;
  }
}
export type { Timeout, NavLink, MenuItem };

export { default as Navbar } from './components/navbar/Navbar.svelte';
export { default as Footer } from './components/footer/Footer.svelte';

export { default as YandexMetrikaHit } from './seo/yandex/metrika/YandexMetrikaHit.svelte';
export { default as YandexMetrikaInit } from './seo/yandex/metrika/YandexMetrikaInit.svelte';

export { default as Carousel } from './ui/carousel/Carousel.svelte';

export { default as Dropdown } from './ui/dropdown/Dropdown.svelte';

export { default as Lightbox } from './ui/lightbox/Lightbox.svelte';
export { default as Lightboxes } from './ui/lightbox/Lightboxes.svelte';
export { default as LightboxModal } from './ui/lightbox/LightboxModal.svelte';
export { default as LightboxThumbnail } from './ui/lightbox/LightboxThumbnail.svelte';

export { default as Link } from './ui/link/Link.svelte';

export { default as RouteTransition } from './ui/route-transition/RouteTransition.svelte';

export { default as ScreenBlock } from './ui/screen-block/ScreenBlock.svelte';

export { default as Select } from './ui/select/Select.svelte';

export { default as Spinner } from './ui/spinner/Spinner.svelte';

export { default as YandexMap } from './ui/yandex/map/YandexMap.svelte';
export { default as YandexSearchForm } from './ui/yandex/search/YandexSearchForm.svelte';
export { default as YandexSearchSerp } from './ui/yandex/search/YandexSearchSerp.svelte';
