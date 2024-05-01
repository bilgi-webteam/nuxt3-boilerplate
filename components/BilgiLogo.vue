<template>
  <client-only>
  <img :src="'https://tbl.bilgi.edu.tr/brand-resources/logotypes/bilgi/' + oppositeColorMode + '/bilgi-logotype-' + $i18n.locale + '-' + oppositeColorMode + '@2x.png'" class="h-16 pt-4 md:h-24" :alt="'Logo '+ $colorMode.value + 'Mode'">
  </client-only>
</template>
<script setup>
import { computed } from 'vue'
const colorMode = useColorMode()
const oppositeColorMode = computed(() => colorMode.value === 'dark' ? 'light' : 'dark')
</script>