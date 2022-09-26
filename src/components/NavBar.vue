<script setup>
  import { ref } from 'vue'
  import { useAuth } from '@/composables/useAuth'

  const { isAuthenticated, logout, user } = useAuth()

  const brand = ref(import.meta.env.VITE_APP_NAME)
</script>

<template>
  <nav>
    <div class="wrapper">
      <RouterLink :to="{ name: 'Home' }" class="brand">
        <span class="brand-title">{{ brand }}</span>
      </RouterLink>
      <div class="menu">
        <p v-show="isAuthenticated" class="px-1 py-2">
          Welcome back
          <strong
            ><i>{{ user.name }}</i></strong
          >
        </p>
        <div v-if="isAuthenticated">
          <RouterLink :to="{ name: 'Settings' }" href="#" class="menu-item">Settings</RouterLink>
          <button class="menu-logout" @click="logout">Logout</button>
        </div>
        <div v-else>
          <RouterLink :to="{ name: 'Login' }" href="#" class="menu-login">Login</RouterLink>
        </div>
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
        & div {
          @apply py-1;
        }
        &-item {
          @apply py-1 px-1 font-bold hover:font-extrabold hover:text-emerald-900;
        }
        &-login {
          @apply rounded-md bg-green-300 py-1 px-1 font-bold hover:font-extrabold hover:text-green-700;
        }
        &-logout {
          @apply mx-2 rounded-md bg-red-300 py-1 px-1 font-bold hover:font-extrabold hover:text-red-700;
        }
      }
    }
  }
</style>
