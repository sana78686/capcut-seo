<template>
  <footer class="footer">
    <div class="footer_pages">
      <a href="/about-us">{{ t('footer.aboutUs') }}</a>
      <a href="/contact-us">{{ t('footer.contactUs') }}</a>
      <a href="/disclaimer">{{ t('footer.disclaimer') }}</a>
      <a href="/privacy-policy">{{ t('footer.privacyPolicy') }}</a>
    </div>
    <div class="pb-2">
      <p>{{ t('footer.contactEmail') }}</p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
