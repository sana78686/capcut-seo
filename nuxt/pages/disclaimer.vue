<template>
  <div class="page-content">
    <h1>{{ $t('footer.disclaimer') }}</h1>
    <p>Content coming soon.</p>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
useHead({
  title: () => 'Disclaimer | CapCut APK',
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
