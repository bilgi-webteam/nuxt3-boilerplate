<template>
  <footer class=" dark:text-slate-100 text-slate-900">
    <div class="border-slate-500 border-t-[1px] container p-8 mx-auto min-h-18">
      <p><a :href="'mailto:' + email">{{ email }}</a> </p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea distinctio molestias, dicta veniam totam dolorem, minus commodi aperiam ab explicabo.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig();
  const email = config.public.email;
</script>