<template>
  <footer class="max-w-screen-xl mx-auto dark:text-slate-100 text-slate-900 border-slate-500 border-t-[1px] container p-4 min-h-18">
    <div class="grid h-full gap-4 mx-auto md:px-8 md:gap-8 md:grid-cols-10">
      <div class="md:col-span-2">
        <img :src="'https://tbl.bilgi.edu.tr/brand-resources/logotypes/bilgi/dark/bilgi-logotype-' + $i18n.locale + '-dark@2x.png'" class="w-auto h-10 my-auto" alt="">
      </div>
      <div class="md:col-span-8">
        <p class="text-sm text-black">
          <strong>santral</strong>istanbul Kampüsü<br>Eski Silahtarağa Elektrik Santralı Kazım Karabekir Cad. No: 2/13 34060 Eyüp İstanbul<br><a :href="'mailto:' + email"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="inline-block w-4 h-4 mr-1 svg-inline--fa fa-envelope"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" class=""></path></svg>{{ email }}</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig();
  const email = config.public.email;
</script>