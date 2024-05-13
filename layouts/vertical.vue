<template>
  <div
    class="flex flex-col justify-between min-h-svh font-Raleway bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-200">
    <div class="max-w-screen-xl p-4 pt-0 mx-auto">
      <NuxtLoadingIndicator />
      <HeaderNoMenu />
      <main>
        <div class="grid-cols-4 gap-4 md:grid">
          <div>
            <nav class="flex items-center justify-between lg:justify-start" aria-label="Global">

              <div class="hidden md:pl-0 lg:flex lg:flex-col lg:gap-x-3">

                <template v-for="menu in navigation" :key="menu.name">
                  <div class="relative py-2 group" v-if="menu.subItems">
                    <NuxtLinkLocale :to="menu.to"
                      class="px-3 py-1 text-sm font-semibold leading-6 border-b-2 text-slate-900 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 dark:text-slate-100 border-b-transparent">
                      {{ $t(menu.name) }}
                    </NuxtLinkLocale>

                    <div
                      class="absolute hidden pb-3 shadow-lg bg-slate-200 dark:bg-slate-700 min-w-max group-hover:block"
                      style="min-width: 100%;">
                      <NuxtLinkLocale v-for="subItem in menu.subItems" :key="subItem.name" :to="subItem.to"
                        class="block py-2 pb-0 mx-4 text-sm border-b-2 text-slate-900 dark:text-white border-b-transparent min-w-max">
                        {{ $t(subItem.name) }}
                      </NuxtLinkLocale>
                    </div>
                  </div>
                  <NuxtLinkLocale v-else :to="menu.to"
                    class="px-3 py-2 text-sm font-semibold leading-6 border-b-2 first:pt-0 text-slate-900 dark:text-slate-100 border-b-transparent">
                    {{ $t(menu.name) }}
                  </NuxtLinkLocale>
                </template>

                <OtherLang class="py-2 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100" />
                <ColorModeSwitcherMenu class="py-2" />
              </div>
            </nav>
          </div>
          <div class="
            col-span-3
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