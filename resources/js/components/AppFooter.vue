<template>
  <footer class="footer">
    <div class="footer_pages">
      <a :href="localePath('about-us')">{{ t('footer.aboutUs') }}</a>
      <a :href="localePath('contact-us')">{{ t('footer.contactUs') }}</a>
      <a :href="localePath('disclaimer')">{{ t('footer.disclaimer') }}</a>
      <a :href="localePath('privacy-policy')">{{ t('footer.privacyPolicy') }}</a>
    </div>
    <div class="pb-2">
      <p>{{ t('footer.contactEmail') }}</p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '../composables/useLocalePath';

const { t } = useI18n();
const { localePath } = useLocalePath();
</script>
