<script setup>
  import MainSearch from './MainSearch.vue'
  import MainCards from './MainCards.vue'
</script>
<template>
  <div class="wrapper">
    <MainSearch />
    <MainCards />
  </div>
</template>
<style scoped lang="postcss">
  .wrapper {
    @apply container mx-auto flex w-4/5 flex-col gap-1 py-2;
  }
</style>
