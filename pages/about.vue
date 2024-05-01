<template>
  <div id="content" class="p-4 mb-4">
    <h2 class="text-2xl font-bold my-6">{{ $t('welcome') }}</h2>
    <component :is="currentContent"></component>
  </div>
  <Alert class="text-red-900 bg-red-200 dark:text-red-200 dark:bg-red-900">
    <p>{{ $t('alert') }}</p>
  </Alert>
</template>
<script setup lang="ts">
const pageName = 'about';
const { t } = useI18n();
const { headerData } = useHeaderData();
const { currentContent } = pageSetup(pageName);
headerData.value = {
  image: '/images/d.png',
  title: t(`${pageName}HeaderTitle`),
  paragraph: t(`${pageName}HeaderDescription`)
};
</script>