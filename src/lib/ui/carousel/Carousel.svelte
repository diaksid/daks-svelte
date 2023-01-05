<script lang="ts">
  import { tick, onMount, onDestroy } from 'svelte';
  import { quintOut } from 'svelte/easing';
  import { flip } from 'svelte/animate';
  import Figure from './components/Figure.svelte';
  import Buttons from './components/Buttons.svelte';
  import type { Image, Item, Css, Show, Controls, Easing, Loader, Loaded, Timeout } from './Types';

  let className = '';
  export { className as class };

  export let images: Image[] | undefined = undefined;

  export let css: Css = {};
  css = Object.assign(
    {
      item: '',
      button: ''
    },
    css
  );

  export let show: Show = (n: number) => (n < 480 && 1) || (n < 1024 && 2) || 3;

  export let autoplay = false;
  export let controls: Controls = ['move', 'play'];
  const control = (s: string) => controls.indexOf(s) > -1;

  export let duration = 3000;
  export let delay = 2000;
  export let easing: Easing = quintOut;
  export let aspect = 'auto';
  export let appear = 10000;

  export let nativ = true;
  export let loader: Loader = undefined;
  export let loaded: Loaded = undefined;

  let items: Item[] = [];

  let carousel: HTMLElement;
  let slot: HTMLElement;

  let rebuild = false;
  let play = false;
  let forward: boolean;

  let innerWidth: number;
  $: count = typeof show === 'function' ? show(innerWidth) : show;
  $: ratio = () => {
    const arr = aspect.split('/');
    if (arr.length === 2) return `${parseInt(arr[0]) * count} / ${arr[1].trim()}`;
    else return aspect;
  };

  let __timeout: Timeout;
  const timeout = (cb: () => void, ms: number = delay): void => {
    __timeout = setTimeout(cb, ms);
  };
  const timeoutClear = (): void => {
    if (__timeout) {
      clearTimeout(__timeout);
      __timeout = undefined;
    }
  };

  const ANIMATION_DELAY = 60;
  const loop = (): void => {
    if (carousel)
      if (carousel.getAnimations({ subtree: true }).find((a) => a.playState === 'running'))
        timeout(loop, ANIMATION_DELAY / 2);
      else timeout(next);
  };
  const finish = (): void => {
    if (play) {
      carousel?.getAnimations({ subtree: true }).forEach((a) => a.finish());
      timeoutClear();
    }
  };

  const next = async (): Promise<void> => {
    forward = true;
    items = items.map((el) => {
      if (el.order === 1) el.order = items.length;
      else el.order--;
      return el;
    });
    await tick();
    if (play) loop();
  };
  const previous = async (): Promise<void> => {
    forward = false;
    items = items.map((el) => {
      if (el.order === items.length) el.order = 1;
      else el.order++;
      return el;
    });
    await tick();
  };
  const start = (): void => {
    play = true;
    next();
  };
  const pause = (): void => {
    finish();
    play = false;
  };
  const toggle = (): boolean => (play = !play);

  const attach = (node: HTMLElement, child: Element | Image) => {
    if (child instanceof Element && !node.children.length) node.appendChild(child);
    return;
  };

  const opacity = (order: number): string =>
    (forward && order > count + 1) || (!forward && order === 1) ? '0' : '';

  const setup = (data: Element[] | Image[]) => {
    let uid = 0;
    for (let key in data)
      items.push({
        id: uid++,
        order: uid < data.length ? uid + 1 : 1,
        data: data[key]
      });
  };

  if (images) setup(images);

  onMount(async () => {
    if (!images) {
      const nodes = [...slot.children];
      setup(nodes);
      rebuild = true;
      await tick();
    }
    carousel.classList.remove('opacity-0');
    if (loader) loader();
    if (autoplay) timeout(start, delay);
  });

  onDestroy(() => timeoutClear());
</script>

<svelte:window bind:innerWidth />

<div class="relative {className}">
  <div
    bind:this={carousel}
    on:mouseenter={() => control('mouse') && finish()}
    on:mouseleave={() => control('mouse') && play && next()}
    on:mousedown={() => control('mouse') && toggle()}
    class="flex flex-row flex-nowrap w-full overflow-hidden
           cursor-default
           opacity-0 transition-opacity ease-in-out"
    class:hover:cursor-pointer={control('mouse')}
    style:aspect-ratio={ratio()}
    style:transition-duration={`${appear}ms`}>
    {#key rebuild}
      {#each items as item (item.id)}
        <div
          use:attach={item.data}
          animate:flip={{ duration: duration, easing: easing }}
          class="relative"
          style:order={item.order}
          style:opacity={opacity(item.order)}
          style:min-width={`${100 / count}%`}
          style:max-width={`${100 / count}%`}
          style:left={`-${100 / count}%`}>
          {#if images}
            <Figure
              {item}
              {css}
              {nativ}
              {loaded} />
          {/if}
        </div>
      {/each}
    {/key}
  </div>

  <Buttons
    on:next={next}
    on:previous={previous}
    on:start={start}
    on:pause={pause}
    {css}
    {control}
    {play} />

  <div
    bind:this={slot}
    hidden>
    <slot />
  </div>
</div>
