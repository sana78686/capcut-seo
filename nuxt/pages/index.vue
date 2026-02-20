<template>
  <div>
    <section class="banner-container">
      <div class="banner">
        <div class="banner-col">
          <h1>{{ $t('banner.title') }}</h1>
          <h2>{{ $t('banner.subtitle') }}</h2>
          <div class="buttons_box">
            <a
              href="https://capcut.ind.in/file/Capcut_latest_version_capcut.ind.in.apk"
              class="btn_download"
              target="_blank"
              rel="noopener"
            >
              {{ $t('banner.downloadBtn') }}
            </a>
          </div>
          <h3>{{ $t('banner.securityVerified') }}</h3>
          <p>{{ $t('banner.description') }}</p>
        </div>
        <div class="banner-col">
          <img
            :src="bannerImageSrc"
            :alt="$t('banner.title')"
            class="banner_image"
            width="473"
            height="1024"
            loading="lazy"
          >
        </div>
      </div>
    </section>
    <div class="bg_main">
      <div class="container">
        <div class="content single_page_container">
          <p><strong>{{ $t('content.productName') }}</strong> {{ $t('content.intro1Suffix') }}</p>
          <h2 id="download" class="wp-block-heading text_center">{{ $t('content.downloadTitle') }}</h2>
          <div class="buttons_box mt_5">
            <a href="https://capcut.ind.in/file/Capcut_latest_version_capcut.ind.in.apk" class="btn_download" target="_blank" rel="noopener">
              {{ $t('banner.downloadBtn') }}
            </a>
          </div>
          <h2 class="wp-block-heading text_center">{{ $t('content.conclusion.title') }}</h2>
          <p>
            {{ $t('content.conclusion.beforeLink') }}
            <NuxtLink :to="localePath('/')"><strong>{{ $t('content.conclusion.downloadCta') }}</strong></NuxtLink>
            {{ $t('content.conclusion.afterLink') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
// Runtime URL avoids Vite resolving as import. Use local /images/banner-phone.png if you add it to public/
const bannerImageSrc = 'https://capcutapk.com.pk/images/1765916346_capcutapk.png'
useHead({
  title: () => t('banner.title'),
  meta: [
    { name: 'description', content: () => t('banner.description') },
  ],
})
</script>

<style scoped>
.text_center { text-align: center; }
.mt_5 { margin-top: 25px; }
.wp-block-heading { margin: 10px 0; }
</style>
