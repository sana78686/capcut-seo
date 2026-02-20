<template>
  <div class="page-content">
    <h1>{{ $t('footer.contactUs') }}</h1>
    <p>{{ $t('footer.contactEmail') }}</p>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
useHead({
  title: () => 'Contact Us | CapCut APK',
  htmlAttrs: { lang: () => locale.value, dir: () => (locale.value === 'ar' ? 'rtl' : 'ltr') },
})
</script>

<style scoped>
.page-content {
  padding: var(--page-gutter, 1rem);
  max-width: 800px;
  margin: 0 auto;
}
</style>
