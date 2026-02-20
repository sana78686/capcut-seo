<template>
  <footer class="footer">
    <div class="footer_pages">
      <NuxtLink :to="localePath('/about-us')">{{ $t('footer.aboutUs') }}</NuxtLink>
      <NuxtLink :to="localePath('/contact-us')">{{ $t('footer.contactUs') }}</NuxtLink>
      <NuxtLink :to="localePath('/disclaimer')">{{ $t('footer.disclaimer') }}</NuxtLink>
      <NuxtLink :to="localePath('/privacy-policy')">{{ $t('footer.privacyPolicy') }}</NuxtLink>
    </div>
    <div class="pb-2">
      <p>{{ $t('footer.contactEmail') }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
