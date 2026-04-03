<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

const props = withDefaults(
  defineProps<{
    src: string
    rootClass?: string
    lottieClass?: string
    rootMargin?: string
  }>(),
  {
    rootClass: '',
    lottieClass: '',
    rootMargin: '160px',
  },
)

const root = ref<HTMLElement | null>(null)
const visible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const el = root.value
  if (!el) {
    return
  }
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        visible.value = true
        observer?.disconnect()
        observer = null
      }
    },
    { rootMargin: props.rootMargin },
  )
  observer.observe(el)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div ref="root" :class="rootClass">
    <DotLottieVue
      v-if="visible"
      :src="src"
      :class="lottieClass"
      autoplay
      loop
    />
    <div v-else class="min-h-[12rem] w-full" aria-hidden="true"></div>
  </div>
</template>
