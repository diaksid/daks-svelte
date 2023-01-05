<script lang="ts">
  import Icon from '$lib/ui/iconfy';

  let className = '';
  export { className as class };

  export let waiting: boolean;
  export let size = 24;
</script>

<div
  class:invisible={!waiting}
  class="relative z-10 flex
         {className}">
  <Icon
    icon="line-md:loading-twotone-loop"
    width={size}
    height={size}
    {...$$restProps} />
</div>
