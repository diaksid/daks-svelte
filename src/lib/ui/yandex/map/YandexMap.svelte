<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let className: string = '';
  export { className as class };
  export let data!: any;

  const lang = import.meta.env.VITE_APP_LANG ?? 'ru_RU';
  const apikey = import.meta.env.VITE_YA_API_MAPS;

  if (apikey) {
    let interval: Timeout;
    const upload = () => typeof ymaps !== 'undefined' && ymaps?.Map && ymaps?.Placemark;
    const mount = () => {
      interval = setInterval(() => {
        if (upload()) {
          const points = new ymaps.Map('ymap', data.state).geoObjects;
          data.locations.forEach((location: any) => {
            points.add(
              new ymaps.Placemark(location.geometry, location.properties, location.options)
            );
          });
          clearInterval(interval);
          interval = undefined;
        }
      }, 100);
    };

    onMount(() => {
      if (upload()) mount();
      else {
        const script = document.createElement('script');
        script.src = `https://api-maps.yandex.ru/2.1/?lang=${lang}&amp;apikey=${apikey}`;
        document.body.appendChild(script);
        script.addEventListener('load', mount);
      }
    });
    onDestroy(() => interval && clearInterval(interval));
  } else console.debug('Yandex.Maps <apikey> incorrect');
</script>

{#if apikey}
  <section
    id="ymap"
    class="w-full h-[50vh]
        bg-no-repeat bg-center bg-loading bg-1/5 lg:bg-1/10
        bg-gray-300 dark:bg-gray-500
        border-t-4 border-slate-200 dark:border-slate-800
        {className}"
    aria-hidden="true" />
{/if}
