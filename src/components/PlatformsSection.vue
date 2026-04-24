<template>
  <section
    id="platforms"
    class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 py-6 backdrop-blur-[2px] md:scroll-mt-32 md:py-12 lg:py-10"
  >
    <div class="mx-auto max-w-7xl ">
      <div class="max-w-4xl">
        <h2 class="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:text-4xl">
          {{ t('home.platformsHeading.intro') }}
          <span class="text-brand-dark">{{ t('home.platformsMeta.onec') }}</span>
          {{ t('home.platformsHeading.and') }}
          <span class="text-brand-dark">Firstbit</span>{{ t('home.platformsHeading.comma') }}
          <span class="text-brand-dark">Zoho Books</span>
          {{ t('home.platformsHeading.and') }}
          <span class="text-brand-dark">QuickBooks</span>{{ t('home.platformsHeading.comma') }}
          <span class="text-[#03bcef]">Microsoft Dynamics</span>.
        </h2>
        <p class="mt-6 text-base leading-8 text-slate-600 md:text-lg">
          {{ t('home.platformsHeading.outro') }}
        </p>
        <RouterLink
          v-if="showLearnMore"
          :to="localized({ name: 'service-details', params: { slug: 'accounting-systems' } })"
          class="ui-shine mt-6 inline-flex items-center justify-center rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark"
        >
          <span class="relative z-[1]">{{ t('cta.learnMore') }}</span>
        </RouterLink>
      </div>

      <div class="mt-12 grid gap-5 lg:grid-cols-5">
        <article
          v-for="platform in platforms"
          :key="platform.key"
          class="group rounded-xl border border-slate-200 bg-white p-2.5 transition hover:border-slate-300 sm:p-3"
        >
          <div class="flex min-w-0 max-w-full flex-col items-center gap-3">
            <img
              :src="platform.logoSrc"
              :alt="platform.logoAlt"
              :class="platform.logoClass ?? 'h-12 w-auto max-w-[10.5rem] shrink-0 object-contain object-center sm:h-14 sm:max-w-[12rem]'"
              loading="lazy"
              decoding="async"
            />
            <img
              v-if="platform.secondaryLogoSrc"
              :src="platform.secondaryLogoSrc"
              :alt="platform.secondaryLogoAlt ?? ''"
              :class="platform.secondaryLogoClass ?? 'h-8 w-auto max-w-[7rem] shrink-0 object-contain object-left sm:h-9 sm:max-w-[8rem]'"
              loading="lazy"
              decoding="async"
            />
            <div class="min-w-0 text-center break-words text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
              {{ platform.name }}
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { homePlatformAssets } from '@/content/platforms'
import { useLocaleRoute } from '@/composables/useLocaleRoute'

withDefaults(
  defineProps<{
    showLearnMore?: boolean
  }>(),
  { showLearnMore: true },
)

const { t } = useI18n()
const { localized } = useLocaleRoute()

const platforms = computed(() =>
  homePlatformAssets.map((asset) => ({
    ...asset,
    name: t(`home.platformCards.${asset.key}.name`),
    logoAlt: t(`home.platformLogoAlts.${asset.key}`),
  })),
)
</script>
