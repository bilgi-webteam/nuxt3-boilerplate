<template>
  <div id="content" class="p-4 mb-4">
    <h2>{{ $t('welcome') }}</h2>
    <component :is="currentContent"></component>
  </div>
</template>
<script setup lang="ts">
const pageName = 'index';
const { t } = useI18n();
const { headerData } = useHeaderData();
const { currentContent } = pageSetup(pageName);
headerData.value = {
  image: '/images/0.png',
  title: t(`${pageName}HeaderTitle`),
  paragraph: t(`${pageName}HeaderDescription`)
};
</script>
