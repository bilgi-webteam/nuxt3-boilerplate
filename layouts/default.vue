<template>
  <div class="flex flex-col justify-between min-h-svh font-Raleway">
    <div class="max-w-screen-xl p-4 pt-0 mx-auto">
      <NuxtLoadingIndicator />
      <Header />
      <main 
      class="
        [&_p]:mb-4 

        [&_a]:px-1 
        [&_a]:bg-black/70 
        [&_a]:text-white 
        [&_a]:dark:bg-white/80 
        [&_a]:dark:text-black 
        
        [&_h2]:mb-6 
        [&_h2]:text-2xl 
        [&_h2]:font-bold 
        
        [&_h3]:mb-4 
        [&_h3]:text-xl 
        [&_h3]:font-bold 
        
        [&_h4]:text-lg 
        [&_h4]:font-bold 
        [&_h4]:mb-2 
        
        [&_h5]:mb-1 
        [&_h5]:text-base 
        [&_h5]:font-bold
      ">
        <NuxtPage />
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
    ],
    bodyAttrs: {
      class: 'bg-slate-100 dark:bg-black text-black dark:text-slate-200'
    },
  })
</script>
