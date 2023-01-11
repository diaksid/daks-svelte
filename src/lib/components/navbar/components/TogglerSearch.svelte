<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from '$lib/ui/iconify';
  import { YandexSearchForm } from '$lib/ui/yandex/search';

  let className = '';
  export { className as class };
  export let frame: HTMLElement;
  export let size = '24';
  export let disabled = false;

  let search = false;
  let trigger: HTMLElement;

  const toggle = () => {
    frame.classList.toggle('pb-24');
    frame.classList.toggle('bg-slate-700/90');
    search = !search;
  };

  const close = () => {
    frame.classList.remove('pb-24', 'bg-slate-700/90');
    search = false;
  };

  const outside = (node: HTMLElement) => {
    const handle = (event: any) =>
      node.contains(event.target) || trigger.contains(event.target) || close();
    document.addEventListener('click', handle, true);
    return {
      destroy() {
        document.removeEventListener('click', handle, true);
      }
    };
  };

  const handleKey = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Escape': {
        close();
        break;
      }
      default: {
      }
    }
  };

  let form: ConstructorOfATypedSvelteComponent;
  onMount(() => (form = YandexSearchForm));
</script>

<svelte:window on:keydown={handleKey} />

<div
  class="relative z-10 flex
         {className}">
  <button
    bind:this={trigger}
    on:click={toggle}
    class="disabled:text-gray-500"
    type="button"
    {disabled}
    aria-haspopup="true"
    aria-expanded="false"
    aria-labelledby="">
    <Icon
      icon={`ic:round-search${search || disabled ? '-off' : ''}`}
      class="pointer-events-none"
      width={size}
      height={size} />
  </button>
</div>

<div
  use:outside
  class="absolute top-full left-0 right-0
         transition-all duration-300 ease-in-out origin-center"
  class:scale-x-0={!search}>
  <svelte:component
    this={form}
    class="max-w-xs sm:max-w-xl mx-auto mt-8
           drop-shadow-lg hover:shadow-xl shadow-slate-300"
    button={true}
    callback={close} />
</div>
