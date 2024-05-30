<template>
  <div class="bg-slate-100 dark:bg-slate-900 mb-10
  [&_.router-link-active]:border-malachite-500 
  [&_.router-link-exact-active]:border-malachite-500 
  ">
    <header class="absolute inset-x-0 top-0 z-50">
      <div class="mx-auto max-w-7xl">
        <div class="flex justify-between pt-6 pl-2 mx-4">

          <Logo :class="'h-16 pt-4 md:h-24'" />
          <button type="button" class=" rounded-md p-2.5 text-gray-700 lg:hidden" @click="mobileMenuOpen = true">
            <client-only>
              <span class="sr-only">{{ $t('closemenu') }}</span>
            </client-only>
            <Bars3Icon class="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div class="relative px-4 pt-6 lg:max-w-2xl lg:pr-0">
          
          <!-- Desktop Menu -->
          <div class="flex align-middle ">
            <MenuDesktop :menuClass="'flex justify-between lg:justify-start'" :menuContainerClass="'hidden md:pl-0 lg:flex lg:gap-x-3'" />
            <div class="ml-6"><ColorModeSwitch /></div>
          </div>
          <!-- Desktop Menu End -->
          
        </div>
      </div>

      <!-- Mobile Menu -->
      <MenuMobile :mobileMenuOpen="mobileMenuOpen" :headerData="headerData" :navigation="navigation" @update:mobileMenuOpen="mobileMenuOpen = $event" />
      <!-- Mobile Menu End -->
      
    </header>
    <div class="relative">
      <div class="absolute right-0 z-50 hidden p-4 md:block dark:bg-slate-900 bg-slate-100 rounded-bl-md">
        <LangOther class="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100 md:pl-4" />
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
import { Bars3Icon } from '@heroicons/vue/24/outline'
const { t } = useI18n();
const { headerData } = useHeaderData();
const mobileMenuOpen = ref(false);
import { navigation } from '@/utils/navigation.js';
</script>