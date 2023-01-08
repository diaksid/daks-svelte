<script lang="ts">
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import { Bars3 } from 'svelte-heros-v2';
  //import Icon from '$lib/ui/iconify';
  import { outside } from '$lib/utils/event';

  const dispatch = createEventDispatcher();

  let className = '';
  export { className as class };
  export let size = '24';

  let icon: ConstructorOfATypedSvelteComponent;
  onMount(() => (icon = Bars3));
</script>

<button
  use:outside={() => dispatch('close')}
  on:click={() => dispatch('toggle')}
  class="relative z-10
         {className}">
  <svelte:component
    this={icon}
    {size}
    ariaLabel="toggle menu" />
  <!--Icon
    icon="material-symbols:menu"
    width={size}
    height={size} /-->
</button>
