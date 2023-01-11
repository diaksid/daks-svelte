<script lang="ts">
  import Icon from '$lib/ui/iconify';

  export let lable!: string;
</script>

        <!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
          Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
        -->
<li
  role="option"
  id="listbox-option-0"
  class="relative
                 py-2 pl-3 pr-9 
                 text-gray-900
                 cursor-default select-none"
  aria-selected="true">
  <div class="flex items-center">
    <!-- Heroicon name: stop -->
    <Icon
      icon="ic:round-check-box-outline-blank"
      class="w-6 h-6 text-gray-400" />
        <!--img
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          class="h-6 w-6 flex-shrink-0 rounded-full" /-->
    <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
    <span class="font-normal ml-3 block truncate">
      {@html lable}
    </span>
  </div>

  <!--
    Checkmark, only display for selected option.
    Highlighted: "text-white", Not Highlighted: "text-indigo-600"
  -->
  <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
    <Icon
      icon="ic:round-check"
      class="w-5 h-5" />
  </span>
</li>
