<template>
  <div>
    <AppHeader />
    <main id="main-content" role="main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
useHead({
  htmlAttrs: {
    lang: () => (locale.value as string) || 'en',
    dir: () => (locale.value === 'ar' ? 'rtl' : 'ltr'),
  },
})
</script>
