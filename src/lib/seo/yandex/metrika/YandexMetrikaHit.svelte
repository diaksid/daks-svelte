<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { page, navigating } from '$app/stores';

  export let robots: undefined | string = undefined;
  export let title!: string;
  export let description!: string;
  export let canonical = `${new URL(import.meta.env.VITE_APP_CANONICAL).origin}${
    $page.url.pathname
  }`;

  const counter = import.meta.env.VITE_YA_COUNTER;

  if (counter) {
    let interval: Timeout;
    const referer = $navigating?.from?.url.href;
    const hit = () => {
      interval = setInterval(() => {
        if (typeof ym !== 'undefined') {
          ym(counter, 'hit', $page.url.href, { title: title, referer: referer });
          clearInterval(interval);
          interval = undefined;
        }
      }, 100);
    };

    onMount(hit);
    onDestroy(() => interval && clearInterval(interval));
  } else console.debug('Yandex.Metrika <counter> incorrect');
</script>

<svelte:head>
  {#if robots}
    <meta
      name="robots"
      content={robots} />
  {/if}
  <title>{title}</title>
  <meta
    name="description"
    content={description} />
  {#if canonical}
    <link
      rel="canonical"
      href={canonical} />
  {/if}
</svelte:head>
