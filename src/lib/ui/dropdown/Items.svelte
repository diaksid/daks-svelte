<script lang="ts">
  import Item from './Item.svelte';

  export let items!: (MenuItem | NavLink)[];
</script>

<div
  role="none"
  class="py-1">
  {#each items as item}
    <Item {item} />
  {/each}
</div>
