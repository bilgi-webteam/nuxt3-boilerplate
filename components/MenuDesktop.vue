<template>
  <nav :class="menuClass" aria-label="Global">
    <div :class="menuContainerClass">
      <template v-for="menu in navigation" :key="menu.name">
        <div class="group relative" v-if="menu.subItems">
          <NuxtLinkLocale
            :to="menu.to"
            class="rounded-t-md border-b-2 border-b-transparent px-3 py-1 text-sm font-semibold leading-6 text-slate-900 group-hover:bg-slate-200 dark:text-slate-100 dark:group-hover:bg-slate-700"
          >
            <span class="mt-1 inline-block">{{ $t(menu.name) }}</span>
          </NuxtLinkLocale>
          <div
            class="absolute grid min-w-full grid-rows-0 pb-3 transition-all ease-in-out group-hover:grid-rows-full group-hover:rounded-md"
          >
            <div
              class="min-w-max overflow-hidden rounded-b-lg bg-slate-200 shadow-md dark:bg-slate-700"
            >
              <NuxtLinkLocale
                v-for="subItem in menu.subItems"
                :key="subItem.name"
                :to="subItem.to"
                class="mx-4 block min-w-max border-b-2 border-b-transparent py-2 pb-0 text-sm text-slate-900 last:mb-3 dark:text-white"
              >
                {{ $t(subItem.name) }}
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
        <NuxtLinkLocale
          v-else
          :to="menu.to"
          class="border-b-2 border-b-transparent px-3 py-1 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100"
        >
          {{ $t(menu.name) }}
        </NuxtLinkLocale>
      </template>
    </div>
    <div :class="ColorModeClass" class="hidden sm:block">
      <ColorModeSwitch />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { navigation } from "@/utils/navigation.js";
import type { MenuDesktop } from "@/types/types";
const { t } = useI18n();
const props = defineProps<MenuDesktop>();
</script>
