<template>
  <div id="content" class="p-4 mb-4">
    <h2 class="text-2xl font-bold my-6">{{ $t('welcome') }}</h2>
    <component :is="currentContent"></component>
  </div>
  <div class="p-4 mb-4">
    <Products />
  </div>
</template>
<script setup lang="ts">
const pageName = 'products';
const { t } = useI18n();
const { headerData } = useHeaderData();
const { currentContent } = pageSetup(pageName);
headerData.value = {
  image: '/images/a.png',
  title: t(`${pageName}HeaderTitle`),
  paragraph: t(`${pageName}HeaderDescription`)
};
</script>