<script setup>
  import MainCardsSingle from '@/components/MainCardsSingle.vue'
</script>
<template>
  <div class="subwrapper">
    <MainCardsSingle v-for="n in 16" :key="n" />
  </div>
</template>

<style scoped lang="postcss">
  .subwrapper {
    @apply grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
  }
</style>
