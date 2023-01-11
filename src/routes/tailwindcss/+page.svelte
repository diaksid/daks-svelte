<script lang="ts">
  import { YandexMetrikaHit, Dropdown, Select } from '$lib';
  import type { MenuItem, NavLink } from '$lib';

  const items: (MenuItem | NavLink)[][] = [
    [{ label: 'Link 0 0', href: '#dropdown' }],
    [
      { label: 'Link 1 0', href: '#dropdown' },
      { name: 'Button 1 1', handle: () => alert('handle click 1 1') }
    ],
    [
      { label: 'Link 2 0', href: '#dropdown' },
      { label: 'Link 2 1', href: '#dropdown' },
      { name: 'Button 2 2', handle: () => alert('handle click 2 2') }
    ],
    [{ label: 'Link 3 0', href: '#dropdown' }]
  ];

  const title = 'DAKS • Tailwind CSS';
  const description = 'фреймворк компонующий CSS классы для создания любого дизайна Tailwind CSS';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Tailwind&nbsp;CSS&nbsp;!</h1>
  </header>

  <section
    id="dropdown"
    class="content">
    <h1 class="mb-8 text-2xl">Dropdown...</h1>
    <Dropdown
      class="mr-8"
      label="Dropdown 0"
      {items} />
    <Dropdown
      class="fixed"
      label="Dropdown 1"
      {items} />
  </section>

  <section
    id="select"
    class="content pt-16">
    <h1 class="mb-8 text-2xl">Select...</h1>
    <Select />
  </section>
</main>
