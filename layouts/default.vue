<template>
  <div
    class="flex min-h-svh flex-col justify-between bg-slate-100 font-Raleway text-slate-900 dark:bg-slate-900 dark:text-slate-200"
  >
    <div class="mx-auto min-w-full max-w-screen-xl p-4 pt-0">
      <Header />
      <main
        class="mx-auto max-w-screen-xl [&_a]:border-b-2 [&_a]:border-dotted [&_a]:border-malachite-500 hover:[&_a]:border-solid [&_a]:dark:border-malachite-200 [&_h2]:mb-6 [&_h2]:font-Libre [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mb-4 [&_h3]:font-Libre [&_h3]:text-xl [&_h3]:font-bold [&_h4]:mb-2 [&_h4]:font-Libre [&_h4]:text-lg [&_h4]:font-bold [&_h5]:mb-1 [&_h5]:font-Libre [&_h5]:text-base [&_h5]:font-bold [&_p]:mb-4 [&_p]:text-pretty"
      >
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
    twitterCard: "summary_large_image",
  });
});

useHead({
  titleTemplate: (titleChunk) => `${titleChunk} - ${t("siteName")}`,
  htmlAttrs: {
    lang: locale.value,
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>
