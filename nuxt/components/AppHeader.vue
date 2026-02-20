<template>
  <header class="header">
    <nav class="navbar">
      <div class="nav_container">
        <NuxtLink :to="localePath('/')" class="nav-logo">
          <img src="/images/CapCut-Logo.png" alt="CapCut Logo" width="50" height="50" loading="lazy" onerror="this.src='https://capcut.ind.in/images/CapCut-Logo.png'">
          <span class="logo-text">{{ $t('nav.logoText') }}</span>
        </NuxtLink>
        <ul class="nav-menu">
          <li class="nav-item"><NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink></li>
          <li class="nav-item"><NuxtLink :to="localePath('/#download')">{{ $t('nav.download') }}</NuxtLink></li>
          <li class="nav-item"><NuxtLink :to="localePath('/#features')">{{ $t('nav.features') }}</NuxtLink></li>
          <li class="nav-item"><NuxtLink :to="localePath('/#capcut-pro')">{{ $t('nav.capcutPro') }}</NuxtLink></li>
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
