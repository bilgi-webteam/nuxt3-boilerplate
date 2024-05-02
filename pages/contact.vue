<template>
  <component :is="currentContent"></component>
  <Alert>
    <p>{{ $t('alert') }}</p>
  </Alert>
  <div class="relative h-0 mb-6 overflow-hidden pb-96">
      <iframe
        class="absolute top-0 left-0 w-full h-full md:h-96"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12032.669280550515!2d28.9385469!3d41.0653351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab0ce099c5d49%3A0x9f665fc172ad4624!2sIstanbul%20Bilgi%20University!5e0!3m2!1sen!2str!4v1714642751588!5m2!1sen!2str"
        frameborder="0"
        style="border:0;"
        allowfullscreen="false"
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
</template>
<script setup lang="ts">
const pageName = 'contact';
const { t } = useI18n();
const { headerData } = useHeaderData();
const { currentContent } = pageSetup(pageName);
headerData.value = {
  image: '/images/c.png',
  title: t(`${pageName}HeaderTitle`),
  paragraph: t(`${pageName}HeaderDescription`)
};
</script>
