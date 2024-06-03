<template>
  <nav :class="menuClass" aria-label="Global">
    <div :class="menuContainerClass">
      <template v-for="menu in navigation" :key="menu.name">
        <div class="group relative" v-if="menu.subItems">
          <NuxtLinkLocale
            :to="menu.to"
            class="border-b-2 border-b-transparent px-3 py-1 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100"
            :class="SubMenuItemClass"
          >
            <span class="mt-1 inline-block">{{ $t(menu.name) }}</span>
          </NuxtLinkLocale>
          <div class="min-w-full" :class="SubMenuWrapperClass">
            <div class="min-w-max" :class="SubMenuClass">
              <NuxtLinkLocale
                v-for="subItem in menu.subItems"
                :key="subItem.name"
                :to="subItem.to"
                class="mx-4 block min-w-max border-b-2 border-b-transparent py-2 pb-0 text-sm text-slate-900 last:mb-3 dark:text-white"
                :class="SubItemClass"
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
          :class="SingleMenuClass"
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
