<template>
  <div
    class="flex flex-col justify-between min-h-svh bg-slate-100 font-Raleway text-slate-900 dark:bg-slate-900 dark:text-slate-200"
  >
    <div class="max-w-screen-xl min-w-full p-4 pt-0 mx-auto">
      <NuxtLoadingIndicator />
      <Header />
      <main
        class="container w-full mx-auto"
      >
          <div class="w-full p-6 text-center rounded bg-slate-400 dark:bg-slate-800">
            <h1 class="mt-5 text-3xl"> {{ $t("error") }}</h1>
            <h2 class="mt-5 text-3xl font-bold">{{ error?.statusCode }}</h2>
          </div>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>
