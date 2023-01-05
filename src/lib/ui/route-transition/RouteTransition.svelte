<script lang="ts">
  import { blur, fly } from 'svelte/transition';
  import { sineIn, sineInOut, sineOut } from 'svelte/easing';
  //import mode from './stores';

  export let referesh!: string;
  export let mode: 0 | 1 | 2 | 3 = 0;
  export let tag = 'div';

  const transition = mode == 3 ? blur : fly;
  const options = (() => {
    switch (mode) {
      case 3:
        return {
          in: {
            duration: 250,
            delay: 50,
            amount: 5,
            easing: sineIn
          },
          out: {
            duration: 50,
            easing: sineOut
          }
        };
      case 2:
        return {
          in: {
            x: 512,
            duration: 500,
            delay: 100,
            easing: sineInOut
          },
          out: {
            x: -512,
            duration: 250,
            easing: sineOut
          }
        };
      default:
        return {
          in: {
            y: -384,
            duration: 500,
            delay: 100,
            easing: sineInOut
          },
          out: {
            y: 384,
            duration: 250,
            easing: sineOut
          }
        };
    }
  })();
</script>

{#if mode}
  {#key referesh}
    <svelte:element
      this={tag}
      in:transition={options.in}
      out:transition={options.out}
      {...$$restProps}>
      <slot />
    </svelte:element>
  {/key}
{:else}
  <slot />
{/if}
