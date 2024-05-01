<template>
  <div class="flex flex-col justify-between min-h-screen font-Raleway">
    <div class="max-w-screen-xl p-4 pt-0 mx-auto">
      <NuxtLoadingIndicator />
      <Header />
      <main>
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
<style>

  
  
  #content {

    p {
      @apply my-4;
    }
    a {
      @apply bg-black/50 text-white px-1 py-1 rounded-md;
      &:hover {
        @apply bg-black;
      }
    }
  }

</style>
