<template>
  <div id="app">
    <AppHeader />
    <main id="main-content" role="main">
      <AppBanner />
      <AppContent />
      <AppFaq />
      <AppConclusion />
    </main>
    <AppFooter />
    <button
      id="scrollTopBtn"
      type="button"
      :aria-label="t('a11y.scrollToTop')"
      :class="{ visible: showScrollTop }"
      @click="scrollToTop"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16" fill="currentColor">
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import AppHeader from './components/AppHeader.vue';
import AppBanner from './components/AppBanner.vue';
import AppContent from './components/AppContent.vue';
import AppFaq from './components/AppFaq.vue';
import AppConclusion from './components/AppConclusion.vue';
import AppFooter from './components/AppFooter.vue';

const { t } = useI18n();
const showScrollTop = ref(false);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function onScroll() {
  showScrollTop.value = window.scrollY > 400;
}

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>
#scrollTopBtn.visible {
  display: flex !important;
}
</style>
