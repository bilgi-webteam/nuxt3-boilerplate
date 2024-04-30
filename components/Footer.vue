<template>
  <footer class="w-full py-4 dark:text-slate-100 text-slate-900 text-themelight">
    <div class="container px-8 mx-auto min-h-18">
      <p><a :href="'mailto:' + email">{{ email }}</a> </p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea distinctio molestias, dicta veniam totam dolorem, minus commodi aperiam ab explicabo.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig();
  const email = config.public.email;
</script>