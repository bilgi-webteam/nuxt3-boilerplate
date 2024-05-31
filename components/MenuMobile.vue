<template>
  <Dialog as="div" class="lg:hidden" @close="emitClose" :open="mobileMenuOpen">
    <div class="fixed inset-0 z-50" />
    <DialogPanel
      class="fixed inset-y-0 right-0 z-[999] w-full px-6 py-6 overflow-y-auto bg-slate-100 dark:bg-slate-900 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
      <div class="flex items-center justify-between">
        <a href="/" class="-m-1.5 p-1.5">
          <client-only>
            <span class="sr-only">{{ headerData.title || ' ' }}</span>
          </client-only>
          <Logo :class="'h-16 pt-4 md:h-24'" />
        </a>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="emitClose">
          <span class="sr-only">{{ $t('closemenu') }}</span>
          <XMarkIcon class="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
      <div class="flow-root mt-10">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="py-6 space-y-2
          [&_.router-link-active]:bg-malachite-300 
          [&_.router-link-exact-active]:bg-malachite-300 
          dark:[&_.router-link-active]:text-slate-900 
          dark:[&_.router-link-exact-active]:text-slate-900 
          ">
            <template v-for="menu in navigation" :key="menu.name">
              <NuxtLinkLocale :to="menu.to"
                class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-slate-900 dark:text-slate-100"
                @click="emitClose">
                {{ $t(menu.name) }}
              </NuxtLinkLocale>
              <template v-if="menu.subItems">
                <NuxtLinkLocale v-for="subItem in menu.subItems" :key="subItem.name" :to="subItem.to"
                  class="flex items-center px-3 py-2 -mx-3 text-base font-semibold leading-7 text-slate-900 dark:text-slate-100"
                  @click="emitClose">
                  <MinusIcon class="size-8" /> {{ $t(subItem.name) }}
                </NuxtLinkLocale>
              </template>
            </template>
            <div class="relative flex justify-between pt-5 align-middle border-t-2 border-slate-700">
              <LangOther
                class="block px-3 py-6 -mx-3 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100 hover:bg-gray-50" />
              <ColorModeSwitch />
            </div>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { XMarkIcon, MinusIcon } from '@heroicons/vue/24/outline'
import type { MenuMobile } from "@/types/types";
const { t } = useI18n();
const { headerData } = useHeaderData();
const props = defineProps<MenuMobile>();
const emit = defineEmits(['update:mobileMenuOpen']);

function emitClose() {
  emit('update:mobileMenuOpen', false);
}
</script>
