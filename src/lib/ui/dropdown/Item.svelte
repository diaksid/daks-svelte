<script lang="ts">
  export let item!: MenuItem | NavLink;
  export let tag = 'span';

  const href = 'href' in item ? item.href || './' : undefined;
  const text = 'label' in item ? item.label : item.name;
</script>

{#if href}
  <a
    on:click={item.handle}
    on:keypress
    class="block
         px-4 py-2
         text-sm text-gray-700 disabled:text-gray-300
         hover:bg-gray-300/50
         cursor-pointer"
    {href}
    title={item.title}
    role="menuitem">
    {@html text}
  </a>
{:else}
  <svelte:element
    this={tag}
    on:click={item.handle}
    on:keypress
    class="block
         px-4 py-2
         text-sm text-gray-700 disabled:text-gray-300
         hover:bg-gray-300/50
         cursor-pointer"
    title={item.title}
    role="menuitem">
    {@html text}
  </svelte:element>
{/if}
