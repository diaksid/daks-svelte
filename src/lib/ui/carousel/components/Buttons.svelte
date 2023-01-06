<script lang="ts">
  import Button from './Button.svelte';
  import type { Css } from '../types';

  export let css: Css = {};
  export let control: (s: string) => boolean;
  export let play: boolean;
</script>

{#if !play && control('move') && !control('mouse')}
  <Button
    on:next
    class="top-0 right-0 justify-end items-center w-20 h-full hover:bg-black/25"
    {css}
    event="next" />
  <Button
    on:previous
    class="top-0 left-0 justify-start items-center w-20 h-full hover:bg-black/25"
    {css}
    event="previous" />
{/if}
{#if !play && control('play')}
  <Button
    on:start
    class="left-1/2 bottom-1 items-start justify-center -ml-4 w-8 h-9 hover:drop-shadow-xl shadow-black"
    {css}
    disabled={control('mouse')}
    event="start" />
{/if}
{#if play && control('play')}
  <Button
    on:pause
    class="left-1/2 bottom-1 items-start justify-center -ml-4 w-8 h-9 hover:drop-shadow-xl shadow-black"
    {css}
    disabled={control('mouse')}
    event="pause" />
{/if}
