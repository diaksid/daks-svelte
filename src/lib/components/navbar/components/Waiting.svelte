<script lang="ts">
  import { onMount } from 'svelte';
  import Spinner from '$lib/ui/spinner';

  let className = '';
  export { className as class };

  export let waiting: boolean;
  export let size = '24';

  let icon: ConstructorOfATypedSvelteComponent;
  onMount(() => (icon = Spinner));
</script>

<div
  class:invisible={!waiting}
  class="relative z-10 flex
         {className}">
  <svelte:component
    this={icon}
    {size} />
</div>
