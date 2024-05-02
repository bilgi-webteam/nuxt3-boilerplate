<template>  
  <div class="bg-slate-100 dark:bg-black mb-10
  [&_.router-link-active]:border-green-500 
  [&_.router-link-exact-active]:border-green-500 
  ">
    <header class="absolute inset-x-0 top-0 z-50">
      <div class="mx-auto max-w-7xl">
        <div class="flex justify-between mx-4">
          <BilgiLogo />
          <!-- <ColorModeSwitcher /> -->
        </div>
        <div class="px-4 pt-6 lg:max-w-2xl lg:pr-0">
          <!-- Desktop -->
          <nav class="flex items-center justify-between lg:justify-start" aria-label="Global">
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden" @click="mobileMenuOpen = true">
              <client-only>
              <span class="sr-only">{{ $t('closemenu') }}</span>
              </client-only>
              <Bars3Icon class="w-6 h-6" aria-hidden="true" />
            </button>
            <div class="hidden md:pl-0 lg:flex lg:gap-x-6">
              <template v-for="menu in navigation" :key="menu.name">
                <div class="relative group" v-if="menu.subItems">
                  <NuxtLinkLocale :to=menu.to class="pb-1 text-sm font-semibold leading-6 text-black border-b-2 dark:text-slate-100 border-b-transparent">
                    {{ $t(menu.name) }}
                  </NuxtLinkLocale>
                  <div class="h-2"></div>
                  <div class="absolute hidden pt-1 bg-white shadow-lg dark:bg-gray-700 min-w-max group-hover:block ">
                    <NuxtLinkLocale v-for="subItem in menu.subItems" :key="subItem.name" :to=subItem.to class="block px-3 py-2 text-sm text-black border-b-2 dark:text-white border-b-transparent">
                      {{ $t(subItem.name) }}
                    </NuxtLinkLocale>
                  </div>
                </div>
                <NuxtLinkLocale v-else :to=menu.to class="text-sm font-semibold leading-6 text-black border-b-2 dark:text-slate-100 border-b-transparent">
                  {{ $t(menu.name) }}
                </NuxtLinkLocale>
              </template>
              <OtherLang class="text-sm font-semibold leading-6 text-black dark:text-slate-100" />
              <ColorModeSwitcherMenu />
            </div>
          </nav>
        </div>
      </div>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-slate-100 dark:bg-black sm:max-w-sm sm:ring-1 sm:ring-black/10">
          <div class="flex items-center justify-between">
            <a href="/" class="-m-1.5 p-1.5">
              <client-only>
              <span class="sr-only">{{ headerData.title || ' ' }}</span>
              </client-only>
              <BilgiLogo />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">{{ $t('closemenu') }}</span>
              <XMarkIcon class="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div class="flow-root mt-6">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="py-6 space-y-2
              [&_.router-link-active]:bg-gray-300 
              [&_.router-link-exact-active]:bg-gray-300 
              ">
                <!-- Mobile Menu -->
                <template v-for="menu in navigation" :key="menu.name">
                  <NuxtLinkLocale :to="menu.to" class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-black dark:text-slate-100">
                    {{ $t(menu.name) }}
                  </NuxtLinkLocale>
                  <template v-if="menu.subItems">
                    <NuxtLinkLocale v-for="subItem in menu.subItems" :key="subItem.name" :to="subItem.to" class="flex items-center px-3 py-2 -mx-3 text-base font-semibold leading-7 text-black dark:text-slate-100">
                    <MinusIcon class="size-8" /> {{ $t(subItem.name) }}
                    </NuxtLinkLocale>
                  </template>
                </template>
                <OtherLang class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-black rounded-lg dark:text-slate-100 hover:bg-gray-50s"/>
                <ColorModeSwitcherMenu />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <div class="relative">
      <div class="mx-auto max-w-7xl">
        <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg class="absolute inset-y-0 hidden h-full transform translate-x-1/2 right-8 w-80 fill-slate-100 dark:fill-black lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>
          <div class="relative py-32 sm:py-40 lg:py-56 lg:pr-0">
            <div class="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl">
              <client-only>
              <h1 class="text-3xl font-bold tracking-tight text-black dark:text-slate-100 sm:text-5xl">{{ headerData.title || ' ' }}</h1>
              <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-100">{{ headerData.paragraph || ' ' }}</p>
              </client-only>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-slate-100 dark:bg-black lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <client-only>
        <img class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full" :src="headerData.image || '/images/0.png'" alt="" />
        </client-only>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  const { t } = useI18n();
  const { headerData } = useHeaderData();

  import { ref } from 'vue'
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon, MinusIcon } from '@heroicons/vue/24/outline'

  const navigation =  [
    { name: 'index', to: '/' },
    { name: 'about', to: 'about', 
      subItems: [
        { name: 'about_theteam', to: 'about_theteam' },
        { name: 'about_company', to: 'about_company' }
    ]},
    { name: 'products', to: 'products' },
    { name: 'news', to: 'news' },
    { name: 'contact', to: 'contact' },
  ]

  const mobileMenuOpen = ref(false)
</script>