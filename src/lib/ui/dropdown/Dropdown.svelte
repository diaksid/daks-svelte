<script lang="ts">
  import Icon from '$lib/ui/iconify';
  import { outside } from '$lib/utils/event';
  import Items from './Items.svelte';
  import Item from './Item.svelte';

  let className = '';
  export { className as class };

  export let label!: string;
  export let title = '';

  export let duration = 300;
  export let items!: (MenuItem | NavLink)[][];

  const classes = ['pointer-events-none', 'opacity-0', 'scale-75'];

  const close = (node?: HTMLElement) =>
    node?.parentElement?.nextElementSibling?.classList.add(...classes);

  const toggle = (event: any) =>
    classes.forEach((val) => event.target.parentElement?.nextElementSibling?.classList.toggle(val));
</script>

<div
  class="relative inline-block text-left fixed:text-right
         {className}">
  <div>
    <button
      use:outside={close}
      on:click|preventDefault|stopPropagation={toggle}
      on:keypress
      id="menu-button"
      type="button"
      class="inline-flex w-full justify-center px-4 py-2
             bg-white hover:bg-gray-50 rounded-md border border-gray-300 shadow-sm
             font-medium text-sm text-gray-700
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      title={title.trim() || undefined}
      aria-expanded="true"
      aria-haspopup="true">
      {label}
      <Icon
        icon="ic:round-chevron-right"
        class="w-6 h-6 ml-2 -mr-1 pointer-events-none"
        rotate="45" />
    </button>
  </div>

  <div
    role="menu"
    class="absolute z-40 left-auto right-0 fixed:left-0 fixed:right-auto
           mt-2 w-56
           divide-y divide-gray-100
           rounded-md bg-white shadow-lg
           ring-1 ring-black ring-opacity-5
           focus:outline-none
           transition origin-top-right fixed:origin-top-left
           {classes.join(' ')}"
    style:transition-duration={`${duration}ms`}
    aria-orientation="vertical"
    aria-labelledby="menu-button"
    tabindex="-1">
    {#each items as item}
      {#if item instanceof Array}
        <Items items={item} />
      {:else}
        <Item {item} />
      {/if}
    {/each}
  </div>
</div>
