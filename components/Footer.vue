<template>
  <footer class="max-w-screen-xl mx-auto dark:text-slate-100 text-slate-900 border-slate-500 border-t-[1px] container p-4 min-h-18">
    <div class="grid h-full gap-4 mx-auto md:px-8 md:gap-8 md:grid-cols-10">
      <div class="md:col-span-2">
        <Logo :class="'w-auto h-10 my-auto'" />
      </div>
      <div class="md:col-span-8">
        <p class="text-sm text-slate-900 dark:text-slate-200">
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