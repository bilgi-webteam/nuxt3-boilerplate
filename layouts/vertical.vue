<template>
  <div
    class="flex min-h-svh flex-col justify-between bg-slate-100 font-Raleway text-slate-900 dark:bg-slate-900 dark:text-slate-200 [&_.router-link-active]:border-b-malachite-500 [&_.router-link-exact-active]:border-b-malachite-500"
  >
    <div>
      <NuxtLoadingIndicator />
      <HeaderNoMenu />
      <main>
        <div class="mx-auto max-w-7xl grid-cols-5 gap-4 md:grid">
          <MenuDesktop
            :navWrapperClass="'sticky items-center justify-between hidden border-r-[1px] border-r-slate-500 top-5 lg:justify-start md:block pr-2 bg-slate-100 dark:bg-slate-900'"
            :navContainerClass="'md:pl-0 lg:flex lg:flex-col lg:gap-x-6 gap-y-2'"
            :dropdownTriggerWrapperClass="'relative group'"
            :dropdownTriggerClass="'px-3 py-1 text-sm font-semibold leading-6 border-b-2 border-b-transparent text-slate-900 dark:text-slate-100'"
            :dropdownWrapperClass="'min-w-full'"
            :dropdownContainerClass="'min-w-max'"
            :dropdownLinkClass="`block py-2 pb-0 mx-4 text-sm border-b-2 min-w-max border-b-transparent text-slate-900 last:mb-3 dark:text-white ml-3 before:mr-2 before:content-['-'] before:w-5`"
            :navItemClass="'px-3 py-1 text-sm font-semibold leading-6 border-b-2 border-b-transparent text-slate-900 dark:text-slate-100'"
            :colorModeSwitchClass="'hidden mt-10 sm:block'"
          />
          <div
            class="col-span-4 [&_a]:border-b-2 [&_a]:border-dotted [&_a]:border-malachite-500 hover:[&_a]:border-solid [&_a]:dark:border-malachite-200 [&_h2]:mb-6 [&_h2]:font-Libre [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mb-4 [&_h3]:font-Libre [&_h3]:text-xl [&_h3]:font-bold [&_h4]:mb-2 [&_h4]:font-Libre [&_h4]:text-lg [&_h4]:font-bold [&_h5]:mb-1 [&_h5]:font-Libre [&_h5]:text-base [&_h5]:font-bold [&_p]:mb-4 [&_p]:text-pretty"
          >
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
