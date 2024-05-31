<template>
  <div
    class="flex flex-col justify-between min-h-svh font-Raleway bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-200 
  [&_.router-link-active]:border-b-malachite-500 
  [&_.router-link-exact-active]:border-b-malachite-500 
  ">
    <div>
      <NuxtLoadingIndicator />
      <HeaderNoMenu />
      <main>
        <div class="grid-cols-5 gap-4 mx-auto max-w-7xl md:grid">
          <MenuDesktop :menuClass="'sticky items-center justify-between hidden border-r-[1px] border-r-slate-500 top-5 lg:justify-start md:block pr-2 bg-slate-100 dark:bg-slate-900'" 
            :menuContainerClass="'md:pl-0 lg:flex lg:flex-col lg:gap-x-6 gap-y-2'" :ColorModeClass="'mt-10'" />
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
const { t, locale } = useI18n();
const config = useRuntimeConfig();
const route = useRoute();
const siteurl = config.public.siteurl;
const currentFullUrl = computed(() => `${siteurl}${route.path}`);

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