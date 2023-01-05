<script lang="ts">
  import { onMount } from 'svelte';
  import icon from './default.svg';

  let className = '';
  export { className as class };

  export let duration = 1000;

  let node: HTMLElement;

  const close = () => {
    node.style.transitionDuration = `${duration}ms`;
    node.style.pointerEvents = node.style.touchAction = 'none';
    node.style.opacity = '0';
    setTimeout(() => node.remove(), duration);
  };

  onMount(() => setTimeout(close, 100));
</script>

<div
  bind:this={node}
  class="fixed z-50 top-0 left-0 flex flex-col justify-center items-center
         w-screen h-screen
         bg-no-repeat bg-center bg-1/4 sm:bg-1/10 lg:bg-1/20
         transition-opacity ease-out
         {className}"
  style:background-image={`url(${icon})`}
  hidden />
