<script lang="ts">
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  import './index.css';

  let className = '';
  export { className as class };
  export let duration = 500;

  let result: HTMLElement;

  const load = () => {
    Ya.Site.Results.init();
    setTimeout(() => result.classList.remove('hidden'), 300);
    setTimeout(() => result.classList.remove('opacity-0', 'scale-y-0'), 350);
  };

  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://site.yandex.net/v2.0/js/all.js';
    script.async = true;
    script.addEventListener('load', load);
    document.body.appendChild(script);
  });
  afterNavigate(() =>
    document.querySelectorAll('#navbar a, #footer a').forEach((el: any) => (el.target = '_self'))
  );
</script>

<div
  bind:this={result}
  id="ya-site-results"
  class="custom
         hidden opacity-0 scale-y-0
         {className}"
  style:transition-duration={`${duration}ms`}
  data-bem={JSON.stringify({
    tld: 'ru',
    language: 'ru',
    encoding: '',
    htmlcss: '1.x',
    updatehash: true
  })} />
