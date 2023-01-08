<script lang="ts">
  import Icon from '$lib/ui/iconify';

  export let prefix: string;
  export let icons: string[];

  const handle = (ev: Event) => {
    const text = (ev.target as HTMLElement).dataset.icon;
    if (text) navigator.clipboard.writeText(text).then(() => console.log(text));
  };
</script>

<div class="grid grid-cols-5 gap-8 py-4">
  {#each icons as icon}
    {@const name = `${prefix}:${icon}`}
    <figure
      on:click={handle}
      on:keypress
      class="flex flex-col justify-start items-center cursor-pointer"
      title="copy to clipboard"
      data-icon={name}>
      <Icon
        icon={name}
        class="disabled"
        width="144"
        height="144" />
      <figcaption class="disabled text-center text-sm">
        <b class="block text-slate-500">{prefix}</b>
        {icon}
      </figcaption>
    </figure>
  {/each}
</div>
