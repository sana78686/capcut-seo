<template>
  <div class="banner-container">
    <div class="banner">
      <div class="banner-col">
        <h1>{{ t('banner.title') }}</h1>
        <h2>{{ t('banner.subtitle') }}</h2>
        <div class="buttons_box">
          <a href="https://capcut.ind.in/file/Capcut_latest_version_capcut.ind.in.apk" class="btn_download">
            {{ t('banner.downloadBtn') }}
          </a>
        </div>
        <h3>{{ t('banner.securityVerified') }}</h3>
        <div class="verified-logos">
          <img src="/images/cmsecurity.webp" width="32" height="32" alt="CM Security" loading="lazy" onerror="this.style.display='none'">
          <img src="/images/icon-lookout.png" width="32" height="32" alt="Lookout" loading="lazy" onerror="this.style.display='none'">
          <img src="/images/mcafee.webp" width="32" height="32" alt="McAfee" loading="lazy" onerror="this.style.display='none'">
        </div>
        <p>{{ t('banner.description') }}</p>
      </div>
      <div class="banner-col banner-image">
        <img
          src="/images/banner-phone.png"
          :alt="t('banner.title')"
          class="banner_image"
          width="473"
          height="1024"
          loading="lazy"
          onerror="this.src='https://capcutapk.com.pk/images/1765916346_capcutapk.png'"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
