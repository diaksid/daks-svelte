<script lang="ts">
  import { YandexMetrikaHit } from '$lib';
  import Icon from '$lib/ui/iconify';

  const title = 'DAKS • SVELTE npm packege';
  const description = 'DAks DEV: npm packege for  SVELTE';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main class="content justify-around grow">
  <div class="content flex flex-col items-center gap-4p">
    <a
      rel="noreferrer nofollow"
      class="opacity-50 hover:opacity-100 hover:scale-110
             transition-all duration-300 ease-in-out"
      href="//www.npmjs.com/package/daks-svelte"
      target="_blank">
    <h1 class="mb-8 text-3xl">Welcome to your library project</h1>
    </a>

    <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>

    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

    <a
      rel="noreferrer nofollow"
      class="mt-8
             opacity-50 hover:opacity-100 text-slate-500 hover:text-slate-300 hover:scale-110
             transition-all duration-300 ease-in-out"
      href="//github.com/diaksid/daks-svelte"
      target="_blank">
      <Icon
        icon="line-md:github-loop"
        class="w-[20vmin] h-[20vmin] vector-non-scaling-stroke">
        2022 &star; Svelte.Kit
      </Icon>
    </a>
  </div>
</main>
