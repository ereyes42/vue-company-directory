<script setup>
  import { faker } from '@faker-js/faker'

  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const fullName = `${firstName} ${lastName}`

  const selectCard = () => {
    console.log(`${fullName} selected`)
  }
</script>

<template>
  <div class="card" @click="selectCard">
    <div class="card-image">
      <img :src="faker.internet.avatar()" alt="" srcset="" />
    </div>
    <div class="card-details">
      <p class="card-details-name">{{ fullName }}</p>
      <p class="card-details-job">{{ faker.name.jobTitle() }}, {{ faker.name.jobArea() }}</p>
      <p class="card-details-email">{{ faker.internet.exampleEmail(firstName, lastName) }}</p>
      <p class="card-details-quote">{{ faker.lorem.paragraph() }}</p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  .card {
    @apply cursor-pointer overflow-hidden rounded-lg bg-emerald-100 p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-900;
    &-image {
      img {
        @apply mx-auto rounded-full object-contain;
      }
    }
    &-details {
      @apply flex flex-col gap-2 pt-4 text-center;
      &-name {
        @apply text-3xl font-thin  tracking-wide text-sky-900;
      }
      &-job {
        @apply -mt-2 text-sm font-semibold text-lime-600;
      }
      &-email {
        @apply -mt-2 text-xs text-emerald-600;
      }
      &-quote {
        @apply pt-4 text-lg italic text-emerald-800;
      }
    }
  }
</style>
