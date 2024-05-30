<template>
  <div class="bg-slate-100 dark:bg-slate-900 mb-10
  [&_.router-link-active]:border-malachite-500 
  [&_.router-link-exact-active]:border-malachite-500 
  ">
    <header class="absolute inset-x-0 top-0 z-50">
      <div class="mx-auto max-w-7xl">
        <div class="flex justify-between pt-6 pl-2 mx-4">

          <BilgiLogo :class="'h-16 pt-4 md:h-24'" />
          <button type="button" class=" rounded-md p-2.5 text-gray-700 lg:hidden" @click="mobileMenuOpen = true">
            <client-only>
              <span class="sr-only">{{ $t('closemenu') }}</span>
            </client-only>
            <Bars3Icon class="w-6 h-6" aria-hidden="true" />
          </button>
          <!-- <ColorModeSwitcher /> -->
        </div>
        <div class="relative px-4 pt-6 lg:max-w-2xl lg:pr-0">
          
          <!-- Desktop Menu -->
          <nav class="flex items-center justify-between lg:justify-start" aria-label="Global">

            <div class="hidden md:pl-0 lg:flex lg:gap-x-3">

              <template v-for="menu in navigation" :key="menu.name">
                <div class="relative group" v-if="menu.subItems">
                  <NuxtLinkLocale :to="menu.to"
                    class="px-3 py-1 text-sm font-semibold leading-6 border-b-2 text-slate-900 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 dark:text-slate-100 border-b-transparent rounded-t-md">
                    {{ $t(menu.name) }}
                  </NuxtLinkLocale> <!-- menu item with submenu -->

                  <div
                    class="absolute grid min-w-full pb-3 transition-all ease-in-out rounded-tl-none group-hover:rounded-md grid-rows-0 group-hover:grid-rows-full"
                    >
                    <div class="overflow-hidden rounded-b-lg shadow-md min-w-max bg-slate-200 dark:bg-slate-700">
                      <NuxtLinkLocale v-for="subItem in menu.subItems" :key="subItem.name" :to="subItem.to"
                        class="block py-2 pb-0 mx-4 text-sm border-b-2 text-slate-900 dark:text-white border-b-transparent min-w-max last:mb-3">
                        {{ $t(subItem.name) }}
                      </NuxtLinkLocale>
                    </div> <!-- submenu item -->
                  </div>
                </div>
                <NuxtLinkLocale v-else :to="menu.to"
                  class="px-3 text-sm font-semibold leading-6 border-b-2 text-slate-900 dark:text-slate-100 border-b-transparent">
                  {{ $t(menu.name) }}
                </NuxtLinkLocale> <!-- menu item -->
              </template>

              
              <div class="ml-10"><ModeToggle /></div>
            </div>
          </nav>
          <!-- Desktop Menu End -->
        </div>
      </div>
      <!-- Mobile Menu -->
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-[999] w-full px-6 py-6 overflow-y-auto bg-slate-100 dark:bg-slate-900 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
          <div class="flex items-center justify-between">
            <a href="/" class="-m-1.5 p-1.5">
              <client-only>
                <span class="sr-only">{{ headerData.title || ' ' }}</span>
              </client-only>
              <BilgiLogo :class="'h-16 pt-4 md:h-24'" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
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
                    @click="mobileMenuOpen = false">
                    {{ $t(menu.name) }}
                  </NuxtLinkLocale>
                  <template v-if="menu.subItems">
                    <NuxtLinkLocale v-for="subItem in menu.subItems" :key="subItem.name" :to="subItem.to"
                      class="flex items-center px-3 py-2 -mx-3 text-base font-semibold leading-7 text-slate-900 dark:text-slate-100"
                      @click="mobileMenuOpen = false">
                      <MinusIcon class="size-8" /> {{ $t(subItem.name) }}
                    </NuxtLinkLocale>
                  </template>
                </template>
                <div class="relative flex justify-between pt-5 align-middle border-t-2 border-slate-700">
                  <OtherLang
                    class="block px-3 py-6 -mx-3 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100 hover:bg-gray-50" />
                  <!-- <ColorModeSwitcherMenu class="pb-4" /> -->
                  <ModeToggle />
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      <!-- Mobile Menu End -->
    </header>
    <div class="relative">
      <div class="absolute right-0 z-50 hidden p-4 md:block dark:bg-slate-900 bg-slate-100 rounded-bl-md">
        <OtherLang class="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100 md:pl-4" />
        <!-- <ColorModeSwitcherMenu class="md:pl-4" /> -->
      </div>
      <div class="mx-auto max-w-7xl"> 
        <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            class="absolute inset-y-0 hidden h-full transform translate-x-1/2 right-8 w-80 fill-slate-100 dark:fill-slate-900 lg:block"
            viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>
          <div class="relative py-32 sm:py-40 lg:py-56 lg:pr-0">
            <div class="max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
              <client-only>
                <h1
                  class="text-5xl font-bold tracking-tight text-malachite-600 dark:text-malachite-300 font-Libre text-balance">
                  {{ headerData.title || ' ' }}</h1>
                <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-100 text-balance">{{ headerData.paragraph
                  ||
                  ' ' }}</p>
              </client-only>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative bg-slate-100 dark:bg-slate-900 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 md:rounded-br-2xl">
        <client-only>
          <div
            class="absolute inset-0 opacity-20 dark:opacity-60 bg-malachite-400 dark:bg-malachite-950 bg-blend-darken md:rounded-br-2xl">
          </div>
          <img class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full md:rounded-br-2xl"
            :src="headerData.image || '/images/0.png'" alt="" />
        </client-only>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, MinusIcon } from '@heroicons/vue/24/outline'
const { t } = useI18n();
const { headerData } = useHeaderData();
const mobileMenuOpen = ref(false);
import { navigation } from '@/utils/navigation.js';

</script>