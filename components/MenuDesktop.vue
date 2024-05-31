<template>
  <nav :class="menuClass" aria-label="Global">
    <div :class="menuContainerClass">
      <template v-for="menu in navigation" :key="menu.name">
        <div class="relative group" v-if="menu.subItems">
          <NuxtLinkLocale :to="menu.to"
            class="px-3 py-1 text-sm font-semibold leading-6 border-b-2 text-slate-900 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 dark:text-slate-100 border-b-transparent rounded-t-md">
            <span class="inline-block mt-1">{{ $t(menu.name) }}</span>
          </NuxtLinkLocale>
          <div class="absolute grid min-w-full pb-3 transition-all ease-in-out group-hover:rounded-md grid-rows-0 group-hover:grid-rows-full">
            <div class="overflow-hidden rounded-b-lg shadow-md min-w-max bg-slate-200 dark:bg-slate-700">
              <NuxtLinkLocale v-for="subItem in menu.subItems" :key="subItem.name" :to="subItem.to"
                class="block py-2 pb-0 mx-4 text-sm border-b-2 text-slate-900 dark:text-white border-b-transparent min-w-max last:mb-3">
                {{ $t(subItem.name) }}
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
        <NuxtLinkLocale v-else :to="menu.to"
          class="px-3 py-1 text-sm font-semibold leading-6 border-b-2 text-slate-900 dark:text-slate-100 border-b-transparent">
          {{ $t(menu.name) }}
        </NuxtLinkLocale>
      </template>
    </div>
    <div :class="ColorModeClass" class="hidden sm:block"><ColorModeSwitch /></div>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { navigation } from '@/utils/navigation.js';

const { t } = useI18n();
const props = defineProps({
  menuClass: {
    type: String,
    default: ''
  },
  menuContainerClass: {
    type: String,
    default: ''
  },
  ColorModeClass: {
    type: String,
    default: ''
  }
});
</script>
