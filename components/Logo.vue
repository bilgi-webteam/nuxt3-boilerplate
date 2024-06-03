<template>
  <client-only>
    <img
      :src="
        'https://tbl.bilgi.edu.tr/brand-resources/logotypes/bilgi/' +
        oppositeColorMode +
        '/bilgi-logotype-' +
        $i18n.locale +
        '-' +
        oppositeColorMode +
        '@2x.png'
      "
      :class="class"
      :alt="'Logo ' + $colorMode.value + 'Mode'"
    />
  </client-only>
</template>
<script setup lang="ts">
import type { Logo } from "@/types/types";
const colorMode = useColorMode();
const oppositeColorMode = computed(() =>
  colorMode.value === "dark" ? "light" : "dark",
);
const props = defineProps<Logo>();
</script>
