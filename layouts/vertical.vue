<template>
  <div
    class="flex flex-col justify-between min-h-svh font-Raleway bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-200 
  [&_.router-link-active]:border-b-malachite-500 
  [&_.router-link-exact-active]:border-b-malachite-500 
  ">
    <div class="max-w-screen-xl p-4 pt-0 mx-auto">
      <NuxtLoadingIndicator />
      <HeaderNoMenu />
      <main>
        <div class="grid-cols-5 gap-4 md:grid">
          <div class="px-2">
            <nav class="sticky items-center justify-between hidden border-r-[1px] border-r-slate-500 top-5 lg:justify-start md:flex bg-slate-100 dark:bg-slate-900" aria-label="Global">

              <div class="md:pl-0 lg:flex lg:flex-col lg:gap-x-3">
                <template v-for="menu in navigation" :key="menu.name">
                  <div class="py-2 group" v-if="menu.subItems">
                    <NuxtLinkLocale :to="menu.to"
                      class="px-3 py-1 text-sm font-semibold leading-6 border-b-2 cursor-pointer text-slate-900 dark:group-hover:bg-slate-700 dark:text-slate-100 border-b-transparent">
                      {{ $t(menu.name) }} <!-- menu item with submenu -->
                    </NuxtLinkLocale>

                    <div class="grid transition-all ease-in-out delay-200 grid-rows-0 min-w-max group-hover:grid-rows-full">
                      <div class="overflow-hidden">
                        <NuxtLinkLocale v-for="subItem in menu.subItems" :key="subItem.name" :to="subItem.to"
                          class="block py-2 pl-2 mx-4 text-sm border-b-2 border-l-2 border-l-gray-300 text-slate-900 dark:text-white border-b-transparent min-w-max">
                          {{ $t(subItem.name) }} <!-- submenu item -->
                        </NuxtLinkLocale>
                      </div>
                    </div>
                  </div>
                  <NuxtLinkLocale v-else :to="menu.to"
                    class="px-3 py-2 text-sm font-semibold leading-6 border-b-2 first:pt-0 text-slate-900 dark:text-slate-100 border-b-transparent">
                    {{ $t(menu.name) }} <!-- menu item -->
                  </NuxtLinkLocale>
                </template>
                <div class="mt-10"><ModeToggle /></div>
              </div>
            </nav>
          </div>
          <div class="
            col-span-4
            [&_a]:border-b-2 
            [&_a]:border-dotted
            [&_a]:border-malachite-500 
            [&_a]:dark:border-malachite-200 
            hover:[&_a]:border-solid
            
            [&_p]:mb-4
            [&_p]:text-pretty
            
            [&_h2]:mb-6 
            [&_h2]:text-2xl 
            [&_h2]:font-bold
            [&_h2]:font-Libre
            
            [&_h3]:mb-4 
            [&_h3]:text-xl 
            [&_h3]:font-bold
            [&_h3]:font-Libre
            
            [&_h4]:mb-2 
            [&_h4]:text-lg 
            [&_h4]:font-bold 
            [&_h4]:font-Libre 
            
            [&_h5]:mb-1 
            [&_h5]:text-base 
            [&_h5]:font-bold
            [&_h5]:font-Libre
            
          ">
            <NuxtPage />
          </div>
        </div>
      </main>
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const { t, locale } = useI18n();
const config = useRuntimeConfig();
const route = useRoute();
const siteurl = config.public.siteurl;
const currentFullUrl = computed(() => `${siteurl}${route.path}`);

const { headerData } = useHeaderData();
const mobileMenuOpen = ref(false);

import { navigation } from '@/utils/navigation.js';

// Watch the currentFullUrl to update SEO metadata when it changes
watchEffect(() => {
  useSeoMeta({
    ogUrl: currentFullUrl.value,
    ogImage: `${siteurl}/share.jpg`,
    twitterImage: `${siteurl}/share.jpg`,
    twitterCard: 'summary_large_image',
  });
});

useHead({
  titleTemplate: (titleChunk) => `${titleChunk} - ${t('siteName')}`,
  htmlAttrs: {
    lang: locale.value
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>