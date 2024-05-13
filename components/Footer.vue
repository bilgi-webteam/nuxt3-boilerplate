<template>
  <footer class="max-w-screen-xl mx-auto dark:text-slate-100 text-slate-900 border-slate-500 border-t-[1px] container p-4 min-h-18">
    <div class="grid h-full gap-4 mx-auto md:px-8 md:gap-8 md:grid-cols-10">
      <div class="md:col-span-2">
        <img :src="'https://tbl.bilgi.edu.tr/brand-resources/logotypes/bilgi/dark/bilgi-logotype-' + $i18n.locale + '-dark@2x.png'" class="w-auto h-10 my-auto" alt="">
      </div>
      <div class="md:col-span-8">
        <p class="text-sm text-black">
          <strong>santral</strong>istanbul Kampüsü<br>Eski Silahtarağa Elektrik Santralı Kazım Karabekir Cad. No: 2/13 34060 Eyüp İstanbul<br><a :href="'mailto:' + email"><EnvelopeIcon class="inline-block mr-1 size-4" aria-hidden="true" />{{ email }}</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig();
  const email = config.public.email;
  import { EnvelopeIcon } from '@heroicons/vue/24/outline'
</script>