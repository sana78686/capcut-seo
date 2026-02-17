<template>
  <div class="faqs_con">
    <div class="container">
      <h3 class="text-center">{{ t('faq.title') }}</h3>
      <h3 class="mt_5">{{ t('faq.q1') }}</h3>
      <p class="faqs_ans">{{ t('faq.a1') }}</p>
      <h3 class="mt_5">{{ t('faq.q2') }}</h3>
      <p class="faqs_ans">{{ t('faq.a2') }}</p>
      <h3 class="mt_5">{{ t('faq.q3') }}</h3>
      <p class="faqs_ans">{{ t('faq.a3') }}</p>
      <h3 class="mt_5">{{ t('faq.q4') }}</h3>
      <p class="faqs_ans">{{ t('faq.a4') }}</p>
      <h3 class="mt_5">{{ t('faq.q5') }}</h3>
      <p class="faqs_ans">{{ t('faq.a5') }}</p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
