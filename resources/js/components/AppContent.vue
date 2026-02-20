<template>
  <div class="bg_main">
    <div class="container">
      <div class="content single_page_container">
        <p><strong>{{ t('content.productName') }}</strong> {{ t('content.intro1Suffix') }}</p>
        <p>{{ t('content.intro2Before') }} <a :href="localePath('/')">{{ t('content.intro2Link') }}</a> {{ t('content.intro2After') }}</p>

        <h2 class="wp-block-heading text_center">{{ t('content.whatIsTitle') }}</h2>
        <p>{{ t('content.whatIsBefore') }} <a :href="localePath('/')"><strong>{{ t('content.whatIsLink') }}</strong></a>{{ t('content.whatIsAfter') }}</p>

        <h2 id="download" class="wp-block-heading text_center">{{ t('content.downloadTitle') }}</h2>
        <figure class="wp-block-table">
          <table class="has-fixed-layout">
            <tbody>
              <tr><td><strong>{{ t('content.table.appName') }}</strong></td><td>{{ t('content.table.appNameVal') }}</td></tr>
              <tr><td><strong>{{ t('content.table.size') }}</strong></td><td>{{ t('content.table.sizeVal') }}</td></tr>
              <tr><td><strong>{{ t('content.table.version') }}</strong></td><td>{{ t('content.table.versionVal') }}</td></tr>
              <tr><td><strong>{{ t('content.table.lastUpdate') }}</strong></td><td>{{ t('content.table.lastUpdateVal') }}</td></tr>
              <tr><td><strong>{{ t('content.table.developer') }}</strong></td><td>{{ t('content.table.developerVal') }}</td></tr>
              <tr><td><strong>{{ t('content.table.license') }}</strong></td><td>{{ t('content.table.licenseVal') }}</td></tr>
              <tr><td><strong>{{ t('content.table.requirement') }}</strong></td><td>{{ t('content.table.requirementVal') }}</td></tr>
              <tr><td><strong>{{ t('content.table.category') }}</strong></td><td>{{ t('content.table.categoryVal') }}</td></tr>
              <tr><td><strong>{{ t('content.table.downloads') }}</strong></td><td>{{ t('content.table.downloadsVal') }}</td></tr>
              <tr><td><strong>{{ t('content.table.features') }}</strong></td><td>{{ t('content.table.featuresVal') }}</td></tr>
              <tr><td><strong>{{ t('content.table.rating') }}</strong></td><td>{{ t('content.table.ratingVal') }}</td></tr>
            </tbody>
          </table>
        </figure>
        <div class="buttons_box mt_5">
          <a href="https://capcut.ind.in/file/Capcut_latest_version_capcut.ind.in.apk" class="btn_download">{{ t('content.downloadBtn') }}</a>
        </div>

        <h2 id="features" class="wp-block-heading text_center">{{ t('content.featuresTitle') }}</h2>
        <p>{{ t('content.featuresIntro') }}</p>

        <div class="feature-container mt_5">
          <div class="feature-box">
            <h3>{{ t('content.feature1Title') }}</h3>
            <p>{{ t('content.feature1Text') }}</p>
            <img src="/images/feature1.webp" :alt="t('content.feature1Title')" loading="lazy" onerror="this.style.display='none'">
          </div>
          <div class="feature-box">
            <h3>{{ t('content.feature2Title') }}</h3>
            <p>{{ t('content.feature2Text') }}</p>
            <img src="/images/feature2.webp" :alt="t('content.feature2Title')" loading="lazy" onerror="this.style.display='none'">
          </div>
        </div>

        <h2 class="wp-block-heading text_center">{{ t('content.keyFeaturesTitle') }}</h2>
        <h3 class="wp-block-heading">{{ t('content.keyFeature1') }}</h3>
        <p>{{ t('content.keyFeature1Text') }}</p>
        <h3 class="wp-block-heading">{{ t('content.keyFeature2') }}</h3>
        <p>{{ t('content.keyFeature2Text') }}</p>
        <h3 class="wp-block-heading">{{ t('content.keyFeature3') }}</h3>
        <p>{{ t('content.keyFeature3Text') }}</p>
        <h3 class="wp-block-heading">{{ t('content.keyFeature4') }}</h3>
        <p>{{ t('content.keyFeature4Text') }}</p>
        <h3 class="wp-block-heading">{{ t('content.keyFeature5') }}</h3>
        <p>{{ t('content.keyFeature5Text') }}</p>

        <h2 class="wp-block-heading text_center">{{ t('content.howToTitle') }}</h2>
        <h3 class="wp-block-heading">{{ t('content.howToInstall') }}</h3>
        <p><strong>{{ t('content.step1') }}</strong></p>
        <p><strong>{{ t('content.step2') }}</strong></p>
        <p><strong>{{ t('content.step3') }}</strong></p>
        <p><strong>{{ t('content.step4') }}</strong></p>

        <h2 class="wp-block-heading text_center">{{ t('content.prosConsTitle') }}</h2>
        <h3 class="wp-block-heading">{{ t('content.prosTitle') }}</h3>
        <ul class="wp-block-list">
          <li>{{ t('content.pro1') }}</li>
          <li>{{ t('content.pro2') }}</li>
          <li>{{ t('content.pro3') }}</li>
          <li>{{ t('content.pro4') }}</li>
          <li>{{ t('content.pro5') }}</li>
        </ul>
        <h3 class="wp-block-heading">{{ t('content.consTitle') }}</h3>
        <ul class="wp-block-list">
          <li>{{ t('content.con1') }}</li>
          <li>{{ t('content.con2') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '../composables/useLocalePath';

const { t } = useI18n();
const { localePath } = useLocalePath();
</script>
