<template>
  <component :is="currentContent"></component>
  <div class="my-12">
    <BilgiNews />
  </div>
</template>
<script setup lang="ts">
const pageName = 'news';
const { t } = useI18n();
const { headerData } = useHeaderData();
const { currentContent } = pageSetup(pageName);
headerData.value = {
  image: '/images/b.png',
  title: t(`${pageName}HeaderTitle`),
  paragraph: t(`${pageName}HeaderDescription`)
};
</script>