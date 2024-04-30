<template>
  <div>
    <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
      {{ locale.name }}
    </NuxtLink>
  </div>
</template>

<script setup>
  const { locale, locales, setLocale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const availableLocales = computed(() => locales.value.filter(l => l.code !== locale.value))
  const language = computed({
    get: () => locale.value,
    set: (value) => setLocale(value)
  })
</script>
<style scoped>

</style>