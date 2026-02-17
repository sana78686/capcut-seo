<template>
  <div class="lang_box" ref="boxRef">
    <div class="lang_box_1" @click="open = !open">
      <img
        :src="currentFlagUrl"
        alt=""
        class="eng_img"
        width="22"
        height="15"
        loading="lazy"
      >
      <p id="lang_hndlr">{{ currentLabel }} ▼</p>
    </div>
    <div class="lang_inn" :class="{ visible: open }">
      <a
        v-for="loc in supportedLocales"
        :key="loc.code"
        href="#"
        :class="{ active: locale === loc.code }"
        @click.prevent="setLocale(loc.code)"
      >
        {{ loc.name }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { supportedLocales, LOCALE_STORAGE_KEY } from '../i18n';

const { locale } = useI18n();
const open = ref(false);
const boxRef = ref(null);

const currentLabel = computed(() => {
  const loc = supportedLocales.find((l) => l.code === locale.value);
  return loc ? loc.name : 'English';
});

const currentFlagUrl = computed(() => {
  const code = locale.value === 'en' ? 'us' : locale.value;
  return `https://flagcdn.com/w40/${code}.png`;
});

function setLocale(code) {
  locale.value = code;
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, code);
  } catch (_) {}
  open.value = false;
  document.documentElement.lang = code;
  document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
}

function onClickOutside(e) {
  if (boxRef.value && !boxRef.value.contains(e.target)) open.value = false;
}

onMounted(() => {
  document.addEventListener('click', onClickOutside);
  document.documentElement.lang = locale.value;
  document.documentElement.dir = locale.value === 'ar' ? 'rtl' : 'ltr';
});

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside);
});
</script>

<style scoped>
.lang_box {
  position: relative;
  width: 120px;
  min-width: 100px;
}
.lang_box_1 {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 6px;
  cursor: pointer;
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fbfbfb;
}
#lang_hndlr {
  margin: 0;
  font-size: 15px;
  color: #000;
}
.eng_img {
  width: 22px;
  height: 15px;
  object-fit: cover;
}
.lang_inn {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background: #fbfbfb;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  z-index: 999;
  display: none;
  padding: 4px 0;
}
.lang_inn.visible {
  display: block;
}
.lang_inn a {
  display: block;
  padding: 8px 12px;
  color: #000;
  text-decoration: none;
  font-size: 14px;
  text-align: left;
}
.lang_inn a:hover {
  background: #f0f0f0;
}
.lang_inn a.active {
  background: #e8e8e8;
  font-weight: 600;
}
[dir='rtl'] .lang_inn a {
  text-align: right;
}
</style>
