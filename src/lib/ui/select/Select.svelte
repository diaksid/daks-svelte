<script lang="ts">
  import { Bars3, ChevronDown, ChevronUp } from 'svelte-heros-v2';
  import { outside } from '$lib/utils/event';
  import Option from './Option.svelte';

  let className = '';
  export { className as class };

  //export let lable!: string;
  //export let title = '';
  //export let duration = 300;

  const classes = ['pointer-events-none', 'opacity-0', 'scale-y-75'];

  const close = (node?: HTMLElement) => {
    const el = node?.nextElementSibling;
    el?.classList.contains('pointer-events-none') || el?.classList.add(...classes);
  };

  const toggle = (ev: Event) => {
    const el = (ev.target as HTMLElement).nextElementSibling;
    if (el?.classList.contains('pointer-events-none')) el.classList.remove(...classes);
    else el?.classList.add(...classes);
  };
</script>

<div
  class="relative mt-1
         {className}">
  <button
    use:outside={close}
    on:click|preventDefault|stopPropagation={toggle}
    on:keypress
    type="button"
    class="relative
             w-full py-2 pl-3 pr-10
             rounded-md shadow-sm border border-gray-300 bg-white
             text-left sm:text-sm text-gray-700
             focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
    aria-haspopup="listbox"
    aria-expanded="true"
    aria-labelledby="listbox-label">
    <span class="flex items-center pointer-events-none">
      <!-- Heroicon name: bars-3 -->
      <Bars3 class="w-6 h-6 text-gray-400" />
      <span class="ml-3 block truncate">Select</span>
    </span>
    <span class="absolute inset-y-0 right-0 ml-3 flex items-center pr-2 pointer-events-none">
      <!-- Heroicon name: mini/chevron-up-down -->
      <ChevronDown class="h-6 w-6 text-gray-400 cursor-pointer" />
    </span>
  </button>

  <!--
        Select popover, show/hide based on select state.
  
        Entering: ""
          From: ""
          To: ""
        Leaving: "transition ease-in duration-100"
          From: "opacity-100"
          To: "opacity-0"
      -->
  <ul
    role="listbox"
    class="absolute z-10 
             mt-1 py-1 max-h-56 w-full overflow-auto
             rounded-md shadow-lg bg-white
             text-base sm:text-sm
             ring-1 ring-black ring-opacity-5
             focus:outline-none
             transition origin-top
             {classes.join(' ')}"
    tabindex="-1"
    aria-labelledby="listbox-label"
    aria-activedescendant="listbox-option-3">
    <Option lable="Option 0" />
    <Option lable="Option 1" />
    <Option lable="Option 2" />
    <!-- More items... -->
  </ul>
</div>
