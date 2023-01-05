<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import Icon from '$lib/ui/iconfy';
  import { beep } from '$lib/utils/audio';

  let className = '';
  export { className as class };
  export let css = {
    input: '',
    button: ''
  };
  export let reload = false;
  export let reverse = false;
  export let button = true;
  export let callback: null | (() => void) = null;

  const searchid = import.meta.env.VITE_YA_SEARCHID;

  let form: HTMLFormElement;
  let text: null | string;

  $: validation = () => {
    const val = text?.trim();
    return !!val && val !== $page.url.searchParams.get('text');
  };

  const submit = () => {
    const search = new URLSearchParams({
      searchid: searchid,
      l10n: 'ru',
      reqenc: '',
      text: text ? text.trim() : ''
    }).toString();
    goto(`/search?${search}`, { noScroll: true });
  };

  const handleSubmit = (ev: Event) => {
    ev.preventDefault();
    if (validation()) {
      reload ? form.submit() : submit();
      callback && callback();
    } else beep();
  };

  onMount(() => (text = $page.url.searchParams.get('text')));
</script>

<form
  bind:this={form}
  on:submit={handleSubmit}
  id="ya-site-form"
  class="flex flex-row justify-between items-start gap-3
         {className}"
  class:flex-row-reverse={button && reverse}
  action="/search"
  method="get">
  <input
    type="hidden"
    name="searchid"
    value={searchid} />
  <input
    type="hidden"
    name="l10n"
    value="ru" />
  <input
    type="hidden"
    name="reqenc"
    value="" />
  <div class="relative grow">
    <input
      bind:value={text}
      class="w-full py-0.5 px-2
           text-slate-700 bg-slate-300 rounded
           focus:bg-white focus:outline-none
           {css.input}"
      class:text-red-800={!validation()}
      type="search"
      name="text" />
    <div
      class="absolute bottom-0 py-0.5 px-2
             opacity-80 font-semibold text-gray-500 first-letter:text-red-700
             transition-all duration-500 ease-in-out"
      class:right-0={reverse}
      class:bottom-full={text}
      class:opacity-100={text}>
      Яндекс
    </div>
    {#if callback}
      <div
        on:click|preventDefault={callback}
        on:keypress
        role="button"
        tabindex="-1"
        class="absolute bottom-0 right-0 py-0.5 px-2
               opacity-80 font-semibold text-gray-500 hover:text-red-800
               bg-gray-400 cursor-pointer
               transition-all duration-500 ease-in-out"
        class:right-auto={reverse}
        class:bottom-full={text}
        class:bg-transparent={text}
        class:opacity-100={text}>
        Esc
      </div>
    {/if}
  </div>
  {#if button}
    <button
      on:click={handleSubmit}
      class="text-sky-600 hover:text-sky-300 disabled:!text-gray-500/50
             {css.button}"
      type="button"
      disabled={!validation()}>
      <Icon
        icon="wpf:search"
        class="h-7 w-7"
        hFlip={!reverse} />
    </button>
  {/if}
</form>
