<script lang="ts">
  import * as Heros from 'svelte-heros-v2';

  const handle = (ev: Event) => {
    const text = (ev.target as HTMLElement).dataset.icon;
    if (text) navigator.clipboard.writeText(text).then(() => console.log(text));
  };
</script>

<svelte:head>
  <meta
    name="robots"
    content="noindex, follow" />
  <title>DAKS • Heros v2</title>
</svelte:head>

<main>
  <header class="content">
    <h1 class="title">Heros v2</h1>
  </header>

  <div class="content grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-8">
    {#each Object.entries(Heros) as [key, component]}
      <figure
        on:click={handle}
        on:keypress
        class="flex flex-col justify-start items-center cursor-pointer"
        title="copy to clipboard"
        data-icon={key}>
        <svelte:component
          this={component}
          class="disabled"
          size="96" />
        <figcaption class="disabled text-center text-sm">
          {key}
        </figcaption>
      </figure>
    {/each}
  </div>
</main>
