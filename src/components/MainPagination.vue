<script setup>
  import { ref } from 'vue'
  const pages = ref(10)
  const activePage = ref(4)

  const prevPage = () => {
    if (activePage.value > 1) {
      activePage.value--
    }
  }
  const nextPage = () => {
    if (activePage.value < pages.value) {
      activePage.value++
    }
  }
</script>

<template>
  <div class="pagination">
    <button class="action" :disabled="activePage === 1" @click="prevPage">Prev</button>
    <button v-for="page in pages" class="page" :class="page === activePage ? 'active' : ''" @click="activePage = page">
      {{ page }}
    </button>
    <button class="action" :disabled="activePage === pages" @click="nextPage">Next</button>
  </div>
</template>

<style lang="postcss" scoped>
  .pagination {
    @apply flex justify-center gap-3;
    .action {
      @apply rounded-md bg-emerald-50 p-1 font-medium text-sky-900 shadow-md hover:bg-emerald-200 disabled:text-gray-400 hover:disabled:bg-gray-100;
    }
    .page {
      @apply rounded-md bg-white p-2 font-normal text-sky-700 shadow-md hover:bg-emerald-200;
      &.active {
        @apply bg-blue-700 text-white hover:bg-emerald-300;
      }
    }
  }
</style>
