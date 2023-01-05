<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Icon from '$lib/ui/iconfy';
  import { outside } from '$lib/utils/event';

  const dispatch = createEventDispatcher();

  let className = '';
  export { className as class };
  export let size = 24;
</script>

<button
  use:outside={() => dispatch('close')}
  on:click={() => dispatch('toggle')}
  class="relative z-10
         {className}">
  <Icon
    icon="material-symbols:menu"
    width={size}
    height={size} />
</button>
