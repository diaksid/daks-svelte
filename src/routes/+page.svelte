<script lang="ts">
  import { Icon, YandexMetrikaHit } from '$lib';

  const title = 'DAKS • SVELTE npm packege';
  const description = 'DAks DEV: npm packege for  SVELTE';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main class="content justify-around grow">
  <div class="content flex flex-col items-center gap-4p">
    <h1 class="mb-8 text-2xl text-slate-500">Welcome to your library project</h1>

    <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>

    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

    <a
      rel="noreferrer nofollow"
      class="mt-8
             opacity-50 hover:opacity-100 text-slate-500 hover:text-sky-500 hover:scale-110
             transition-all duration-300 ease-in-out"
      href="https://github.com/diaksid/daks-svelte"
      target="_blank">
      <Icon
        icon="line-md:github-loop"
        class="w-[20vmin] h-[20vmin] vector-non-scaling-stroke">
        2022 &star; Svelte.Kit
      </Icon>
    </a>
  </div>
</main>
