<script lang="ts">
  import Icon from '$lib/ui/iconify';
  import Bundle from './Bundle.svelte';

  import type { PageData } from './$types';
  export let data: PageData;

  let waiting = false;
  $: iconset = {};

  const upload = async () => {
    waiting = true;
    const response = await fetch('/iconify/upload', {
      method: 'GET',
      headers: {
        accept: 'application/json'
      },
      body: undefined
    });
    if (response.ok) {
      iconset = await response.json();
    } else alert('Ошибка HTTP: ' + response.status);
    setTimeout(() => (waiting = false), 300);
  };
</script>

<svelte:head>
  <meta
    name="robots"
    content="noindex, follow" />
  <title>DAKS • Iconify</title>
</svelte:head>

<main>
  <header class="content">
    <h1 class="title">Iconify</h1>
  </header>

  {#if import.meta.env?.DEV}
    <div class="content flex justify-start items-center mb-8">
      <button
        on:click|preventDefault={upload}
        type="button"
        class="px-3 py-2 mx-2 border-2 rounded"
        disabled={waiting}>
        ICONSET UPLOAD
      </button>
      {#if waiting}
        <Icon
          icon="line-md:loading-twotone-loop"
          class="w-8 h-8" />
      {:else}
        {#each Object.entries(iconset) as [key, val]}
          <div class="px-2">
            <i class="font-mono text-xl text-slate-500">{key}</i> : {val}
          </div>
        {/each}
      {/if}
    </div>
  {/if}

  <div class="content divide-y divide-dotted">
    {#if data.custom.length}
      <Bundle
        prefix="custom"
        icons={data.custom} />
    {/if}
    {#each data.bundles as { prefix, icons }}
      <Bundle
        {prefix}
        icons={Object.keys(icons)} />
    {/each}
  </div>
</main>
