<template>
  <!-- <pre>{{ $colorMode.value }}</pre> -->
  <div>
    <button aria-label="Color Mode" class="flex items-center gap-1"
    @click="changeColor">
      <ColorScheme>
          <SunIcon v-if="colorMode.value === 'dark'" class="text-slate-900 dark:text-slate-100 size-4" />
          <MoonIcon v-else class="size-4" />
          <div class="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
            <span v-if="colorMode.value === 'dark'">{{ $t('light') }}</span>
            <span v-else>{{ $t('dark') }}</span>
          </div>
      </ColorScheme>
    </button>
  </div>
</template>
<script setup>
  const { t } = useI18n();
  import { SunIcon } from '@heroicons/vue/20/solid'
  import { MoonIcon } from '@heroicons/vue/20/solid'
  const colorMode = useColorMode()
  const changeColor = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))
</script>