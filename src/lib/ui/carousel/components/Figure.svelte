<script lang="ts">
  import placeholder from './placeholder';
  import type { Image, Item, Css, Loaded } from '../types';

  export let item: Item;

  export let css: Css;
  const className = css.item || undefined;

  export let nativ: boolean;
  export let loaded: Loaded;

  const handleLoad = (e: Event) => typeof loaded === 'function' && loaded(e);

  const image = item.data as Image;
  const src = nativ ? image.src : placeholder;
</script>

<figure class={className}>
  <img
    on:load={handleLoad}
    class:lazy={!nativ}
    class="max-w-full w-full h-auto object-contain
           bg-no-repeat bg-center bg-1/5 bg-Loader"
    {src}
    data-src={nativ ? null : image.src}
    width={image.width}
    height={image.height}
    alt={`# ${item.id}`}
    loading="lazy" />
  {#if image.title}
    <figcaption
      class="absolute left-0 bottom-0 w-full py-1 px-2
             whitespace-normal leading-normal text-sm
       text-gray-300/75">
      {image.title}
    </figcaption>
  {/if}
  <link rel="image" href={image.src} />
</figure>
