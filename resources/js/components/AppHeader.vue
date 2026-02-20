<template>
  <header class="header">
    <nav class="navbar">
      <div class="nav_container">
        <a :href="localePath('/')" class="nav-logo">
          <img src="/images/CapCut-Logo.png" alt="CapCut Logo" width="50" height="50" loading="lazy" onerror="this.src='https://capcut.ind.in/images/CapCut-Logo.png'">
          <span class="logo-text">{{ t('nav.logoText') }}</span>
        </a>
        <ul class="nav-menu" :class="{ active: menuOpen }">
          <li class="nav-item"><a :href="localePath('/')">{{ t('nav.home') }}</a></li>
          <li class="nav-item"><a :href="localePath('#download')">{{ t('nav.download') }}</a></li>
          <li class="nav-item"><a :href="localePath('#features')">{{ t('nav.features') }}</a></li>
          <li class="nav-item dropdown" @mouseenter="dropdownOpen = true" @mouseleave="dropdownOpen = false">
            <button type="button" class="nav-dropdown-btn" @click="toggleDropdown">
              {{ t('nav.capcutPro') }}
              <svg width="10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" :class="{ 'rotate-180': dropdownOpen }">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul class="dropdown-menu" :class="{ visible: dropdownOpen }" @click="menuOpen = false">
              <li><a :href="localePath('#capcut-pro')">{{ t('nav.capcutProLink') }}</a></li>
              <li><a :href="localePath('#capcut-ios')">{{ t('nav.capcutIos') }}</a></li>
              <li><a :href="localePath('#capcut-pc')">{{ t('nav.capcutPc') }}</a></li>
              <li><a :href="localePath('#capcut-old')">{{ t('nav.capcutOld') }}</a></li>
            </ul>
          </li>
        </ul>
        <LanguageSwitcher />
      </div>
      <div class="hamburger" :class="{ active: menuOpen }" @click="menuOpen = !menuOpen" :aria-label="t('a11y.toggleMenu')">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '../composables/useLocalePath';
import LanguageSwitcher from './LanguageSwitcher.vue';

const { t } = useI18n();
const { localePath } = useLocalePath();
const menuOpen = ref(false);
const dropdownOpen = ref(false);

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}
</script>

<style scoped>
.nav-dropdown-btn {
  border: none;
  background: none;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  color: #000;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dropdown-menu {
  opacity: 0;
  visibility: hidden;
}
.dropdown-menu.visible {
  opacity: 1;
  visibility: visible;
}
.rotate-180 {
  transform: rotate(180deg);
}
</style>
