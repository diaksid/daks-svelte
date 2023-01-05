<script lang="ts">
  import { onMount } from 'svelte';
  import Overlay from './components/Overlay.svelte';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Body from './components/Body.svelte';
  import type { Options, Css, Loader } from './Types';

  import './index.css';

  let className: string = '';
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

  // -----
  $: fullscreen;

  let visible = false;

  let toggleScroll: Function;

  export const open = () => {
    visible = true;
    toggleScroll();
  };

  export const close = () => {
    visible = false;
    toggleScroll();
  };

  const toogleFullscreen = () => (fullscreen = !fullscreen);

  onMount(() => {
    loader && loader();
    //window.getComputedStyle(document.body).overflowY
    //window.innerWidth - document.documentElement.clientWidth
    if (!options.bodyScroll || scrollable) {
      toggleScroll = () => {
        if (visible) document.body.classList.add('overflow-hidden');
        else document.body.classList.remove('overflow-hidden');
      };
    }
  });
</script>

{#if $$slots.thumbnail}
  <span
    on:keypress
    on:click={open}
    class="hover:cursor-zoom-in {className}"
    role="button"
    tabIndex="0">
    <slot name="thumbnail" />
  </span>
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
    <Body
      {fullscreen}
      {scrollable}
      {options}>
      <slot />
    </Body>
    <Footer
      {css}
      {fullscreen}
      {title}
      {description} />
  </Overlay>
{/if}
