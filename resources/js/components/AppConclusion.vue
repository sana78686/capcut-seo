<template>
  <div class="container">
    <div class="content single_page_container">
      <h2 class="wp-block-heading text_center">{{ t('conclusion.title') }}</h2>
      <p>{{ t('conclusion.beforeLink') }} <a :href="localePath('/')"><strong>{{ t('conclusion.downloadCta') }}</strong></a> {{ t('conclusion.afterLink') }}</p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '../composables/useLocalePath';

const { t } = useI18n();
const { localePath } = useLocalePath();
</script>
