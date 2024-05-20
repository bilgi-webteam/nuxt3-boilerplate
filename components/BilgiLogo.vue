<template>
  <client-only>
  <img :src="'https://tbl.bilgi.edu.tr/brand-resources/logotypes/bilgi/' + oppositeColorMode + '/bilgi-logotype-' + $i18n.locale + '-' + oppositeColorMode + '@2x.png'" :class="imgClass" :alt="'Logo '+ $colorMode.value + 'Mode'">
  </client-only>
</template>
<script setup>
import { computed } from 'vue'
const colorMode = useColorMode()
const oppositeColorMode = computed(() => colorMode.value === 'dark' ? 'light' : 'dark')
const props = defineProps({
  imgClass: {
    type: String,
    default: ''
  }
})
</script>