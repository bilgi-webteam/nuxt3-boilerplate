<template>
  <component :is="currentContent"></component>
  <Alert>
    <p>{{ $t('alert') }}</p>
  </Alert>
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