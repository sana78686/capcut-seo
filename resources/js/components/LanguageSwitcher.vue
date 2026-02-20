<template>
  <div class="lang_box" ref="boxRef">
    <button type="button" class="lang_box_1" @click="open = !open" :aria-expanded="open" aria-haspopup="listbox" :aria-label="currentLabel">
      <img
        :src="currentFlagUrl"
        alt=""
        class="eng_img"
        width="22"
        height="15"
        loading="lazy"
      >
      <span class="lang_label">{{ currentLabel }}</span>
      <svg class="lang_chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="lang_inn" :class="{ visible: open }" role="listbox">
      <a
        v-for="loc in supportedLocales"
        :key="loc.code"
        :href="localeUrl(loc.code)"
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

/** Build full URL for a locale (same path, different language). */
function localeUrl(code) {
  const path = window.location.pathname || '';
  const hash = window.location.hash || '';
  // path is like /en or /en/about-us -> replace locale segment
  const match = path.match(/^\/(en|es|ar)(\/.*)?$/);
  const rest = match ? (match[2] || '') : '';
  return `/${code}${rest}${hash}`;
}

function setLocale(code) {
  if (locale.value === code) {
    open.value = false;
    return;
  }
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, code);
  } catch (_) {}
  open.value = false;
  document.documentElement.lang = code;
  document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
  // Navigate to same page in new language (separate URL per language)
  window.location.href = localeUrl(code);
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
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
  font: inherit;
  width: 100%;
  min-width: 120px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}
.lang_box_1:hover {
  border-color: rgba(41, 205, 240, 0.4);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
.lang_box_1:focus-visible {
  outline: 2px solid rgba(41, 205, 240, 0.6);
  outline-offset: 2px;
}
.lang_label {
  font-size: 15px;
  color: #000;
  flex: 1;
  text-align: left;
}
[dir='rtl'] .lang_label { text-align: right; }
.eng_img {
  width: 22px;
  height: 15px;
  object-fit: cover;
  border-radius: 2px;
  flex-shrink: 0;
}
.lang_chevron {
  flex-shrink: 0;
  transition: transform 0.2s ease;
}
.lang_box_1[aria-expanded="true"] .lang_chevron {
  transform: rotate(180deg);
}
/* Smooth language dropdown - align right so it doesn’t overflow */
.lang_inn {
  position: absolute;
  top: 100%;
  right: 0;
  left: auto;
  min-width: 100%;
  margin-top: 6px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  max-height: 200px;
  overflow-y: auto;
  z-index: 999;
  padding: 6px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
}
.lang_inn.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.lang_inn a {
  display: block;
  padding: 10px 14px;
  color: #111;
  text-decoration: none;
  font-size: 14px;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.lang_inn a:hover {
  background: rgba(41, 205, 240, 0.08);
}
.lang_inn a.active {
  background: rgba(45, 225, 168, 0.15);
  font-weight: 600;
  color: #000;
}
.lang_inn a:focus-visible {
  outline: 2px solid rgba(41, 205, 240, 0.6);
  outline-offset: -2px;
}
[dir='rtl'] .lang_inn {
  right: auto;
  left: 0;
}
[dir='rtl'] .lang_inn a {
  text-align: right;
}
</style>
