<template>
  <div class="flex items-center gap-4">
    <!-- Icon Toggle -->
    <Switch v-model="isDarkMode" :class="[isDarkMode ? 'bg-malachite-600' : 'bg-gray-400', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-malachite-600 focus:ring-offset-2']" @click="toggleColorMode">
      <span class="sr-only">Toggle Dark Mode</span>
      <span :class="[isDarkMode ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']">
        <span :class="[isDarkMode ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in', 'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity']" aria-hidden="true">
          <SunIcon class="w-3 h-3 text-gray-900" />
        </span>
        <span :class="[isDarkMode ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out', 'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity']" aria-hidden="true">
          <MoonIcon class="w-3 h-3 text-malachite-600" />
        </span>
      </span>
    </Switch>
    <span class="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
      {{ isDarkMode ? $t('dark') : $t('light') }}
    </span>

  </div>
</template>

<script setup>
import { Switch } from '@headlessui/vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/20/solid'


const { t } = useI18n()
const colorMode = useColorMode()
const isDarkMode = ref(colorMode.value === 'dark')

const toggleColorMode = () => {
  isDarkMode.value = !isDarkMode.value
  colorMode.preference = isDarkMode.value ? 'dark' : 'light'
}
</script>
