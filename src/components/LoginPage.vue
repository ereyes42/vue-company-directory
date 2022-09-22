<script setup>
  import { ref } from 'vue'

  import { useRouter, useRoute } from 'vue-router'
  import { useAuth } from '@/composables/useAuth'
  const { login, logout } = useAuth()
  const router = useRouter()
  const route = useRoute()

  const username = ref('')
  const password = ref('')

  const logUserIn = () => {
    if (login(username.value, password.value)) {
      if (route.query.redirect) {
        router.push(route.query.redirect)
      } else {
        router.push({ name: 'Home' })
      }
    } else {
      logout()
    }
  }
</script>

<template>
  <form class="login-form" @submit.prevent="logUserIn">
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit" class="bg-green-300 px-2 py-1">Log In</button>
  </form>
</template>

<style lang="postcss">
  .login-form {
    @apply mx-auto mt-64 flex max-w-md flex-col gap-2 rounded-md bg-white p-6 shadow-md;
    & input {
      @apply rounded-md px-2 py-1 text-lg ring-1 ring-emerald-200;
    }
  }
</style>
