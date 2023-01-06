<script lang="ts">
  import { Icon } from '$lib';

  export let prefix: string;
  export let icons: string[];
</script>

<div class="grid grid-cols-5 gap-8 py-4">
  {#each icons as icon}
    <figure class="flex flex-col justify-start items-center">
      <Icon
        icon={`${prefix}:${icon}`}
        width="144"
        height="144" />
      <figcaption class="text-center text-sm">
        <b class="block text-slate-500">{prefix}</b>
        {icon}
      </figcaption>
    </figure>
  {/each}
</div>
