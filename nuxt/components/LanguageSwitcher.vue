<template>
  <div class="lang_box">
    <NuxtLink
      v-for="loc in availableLocales"
      :key="loc.code"
      :to="switchLocalePath(loc.code)"
      class="lang_link"
      :class="{ active: currentLocale === loc.code }"
    >
      {{ loc.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { locale: currentLocale, locales: availableLocales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<style scoped>
.lang_box { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.lang_link { padding: 6px 12px; border: 1px solid #e0e0e0; border-radius: 8px; color: #000; font-size: 14px; }
.lang_link:hover { border-color: rgba(41, 205, 240, 0.4); }
.lang_link.active { background: rgba(45, 225, 168, 0.15); font-weight: 600; }
</style>
