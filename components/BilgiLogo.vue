<template>
  <div class="mb-10">
    <img :src="'/logo-' + $i18n.locale + '-' + oppositeColorMode + '.png'" class="pt-4 md:h-24 " :alt="'Logo '+ $colorMode.value + 'Mode'">
    <img :src="'https://tbl.bilgi.edu.tr/brand-resources/logotypes/bilgi/' + oppositeColorMode + '/bilgi-logotype-' + $i18n.locale + '-' + oppositeColorMode + '@2x.png'" class="pt-4 md:h-24" :alt="'Logo '+ $colorMode.value + 'Mode'">
  </div>
</template>
<script setup>
import { computed } from 'vue'
const colorMode = useColorMode()
const oppositeColorMode = computed(() => colorMode.value === 'dark' ? 'light' : 'dark')
</script>