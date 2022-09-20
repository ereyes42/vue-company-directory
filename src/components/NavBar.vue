<script setup>
  import { ref } from 'vue'
  const brand = ref('🏦Company Directory')
</script>

<template>
  <nav>
    <div class="wrapper">
      <RouterLink :to="{ name: 'Home' }" class="brand">
        <!--RouterLink (links back to MainCom)-->
        <span class="brand-title">{{ brand }}</span>
      </RouterLink>
      <div class="menu">
        <a href="#" class="menu-item">Department</a>
        <a href="#" class="menu-item">Settings</a>
        <a href="#" class="menu-login">Logout</a>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
  nav {
    @apply flex h-16 items-center justify-between bg-teal-500 text-emerald-900;
    .wrapper {
      @apply container mx-auto flex w-full items-center justify-between;
      .brand {
        &-title {
          @apply text-xl font-bold text-sky-900;
        }
      }
      .menu {
        @apply flex gap-4;
        &-item {
          @apply py-1 px-1 font-bold hover:font-extrabold hover:text-emerald-900;
        }
        &-login {
          @apply rounded-md bg-red-300 py-1 px-1 font-bold hover:font-extrabold hover:text-red-700;
        }
      }
    }
  }
</style>
