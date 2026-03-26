<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import SitePreloader from './components/SitePreloader.vue'

const PRELOADER_COOKIE_NAME = 'parse_preloader_seen'
const PRELOADER_DURATION_MS = 1800
const PRELOADER_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24

const hasPreloaderCookie = (): boolean =>
  typeof document !== 'undefined' &&
  document.cookie.split(';').some((cookie) => cookie.trim().startsWith(`${PRELOADER_COOKIE_NAME}=`))

const setPreloaderCookie = (): void => {
  document.cookie = `${PRELOADER_COOKIE_NAME}=1; max-age=${PRELOADER_COOKIE_MAX_AGE_SECONDS}; path=/; SameSite=Lax`
}

const showPreloader = ref(!hasPreloaderCookie())

onMounted(() => {
  if (!showPreloader.value) return

  setPreloaderCookie()
  window.setTimeout(() => {
    showPreloader.value = false
  }, PRELOADER_DURATION_MS)
})
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition name="route-fade" mode="out-in">
      <component :is="Component" :key="route.fullPath" />
    </Transition>
  </RouterView>
  <Transition name="preloader-fade">
    <SitePreloader v-if="showPreloader" />
  </Transition>
</template>

<style>
.route-fade-enter-active,
.route-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.route-fade-enter-from,
.route-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.preloader-fade-leave-active {
  transition: opacity 0.45s ease, visibility 0.45s ease;
}

.preloader-fade-leave-from {
  opacity: 1;
}

.preloader-fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
</style>
