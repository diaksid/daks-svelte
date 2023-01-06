<script lang="ts">
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import Overlay from './components/Overlay.svelte';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Body from './components/Body.svelte';
  import Controller from './components/Controller.svelte';
  import type { Writable } from 'svelte/store';
  import type { Options, Css, Item, Loader } from './types';

  import './index.css';

  // Lightbox
  let className: undefined | string = undefined;
  export { className as class };

  export let css: Css = {};
  css = Object.assign(
    {
      overlay: '',
      header: '',
      footer: ''
    },
    css
  );

  export let title: string = '';
  export let description: string = '';

  export let fullscreen: boolean = false;
  export let scrollable: boolean = false;

  export let options: Options = {};
  options = Object.assign(
    {
      behaviour: '',
      clickableClose: true,
      buttonClose: true,
      buttonFullscreen: true,
      enableKeyboard: true,
      bodyScroll: false,
      duration: 300
    },
    options
  );

  export let loader: Loader = undefined;

  if (scrollable) fullscreen = options.buttonFullscreen = false;

  // Lightboxes
  let activeItem: number = 0;
  export { activeItem as active };

  // -----
  $: fullscreen;

  let visible = false;

  let items: Item[] = [];
  let countThumbnails = 0;

  let toggleScroll: Function;

  export const toggle = () => {
    visible = !visible;
    toggleScroll();
  };

  export const open = () => {
    visible = true;
    toggleScroll();
  };

  export const close = () => {
    visible = false;
    toggleScroll();
  };

  export const openImage = (id: number) => {
    open();
    activeItem = id;
  };

  const toogleFullscreen = () => (fullscreen = !fullscreen);

  const keepOrEmptyImageList = (visible: boolean) => {
    if (!visible) items = [];
  };
  $: keepOrEmptyImageList(visible);

  const countItemsStore: Writable<number> = writable(items.length);
  const activeItemStore: Writable<number> = writable(activeItem);
  $: activeItemStore.set(activeItem);

  $: status = { countItems: $countItemsStore, activeItem: $activeItemStore };

  setContext('activeItem', activeItemStore);
  setContext('counterItems', (item: Item) => {
    item.id = items.length;
    items = [...items, item];
    $countItemsStore = items.length;
    return $countItemsStore - 1;
  });
  setContext('counterThumbnails', () => {
    return countThumbnails++;
  });
  setContext('openImage', openImage);

  $: activeItemTitle = items[$activeItemStore]?.title || title || '';
  $: activeItemDescription = items[$activeItemStore]?.description || description || '';

  onMount(() => {
    loader && loader();
    //window.getComputedStyle(document.body).overflowY
    //window.innerWidth - document.documentElement.clientWidth
    if (!options.bodyScroll || scrollable) {
      toggleScroll = () => {
        if (visible) {
          document.body.classList.add('overflow-hidden');
        } else {
          document.body.classList.remove('overflow-hidden');
        }
      };
    }
  });
</script>

{#if $$slots.thumbnail}
  <div class={className}>
    <slot name="thumbnail" />
  </div>
{/if}

{#if visible}
  <Overlay
    on:close={close}
    {css}
    {fullscreen}
    {options}>
    <Header
      on:close={close}
      on:fullscreen={toogleFullscreen}
      {css}
      {fullscreen}
      {options} />
    <Controller
      {options}
      {countItemsStore}
      {activeItemStore}>
      <Body
        {fullscreen}
        {scrollable}
        {options}>
        <slot />
      </Body>
    </Controller>
    <Footer
      {css}
      {fullscreen}
      title={activeItemTitle}
      description={activeItemDescription}
      {status} />
  </Overlay>
{/if}
