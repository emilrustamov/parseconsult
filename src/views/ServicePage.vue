<template>
  <section class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 pb-8 pt-20 backdrop-blur-[2px] md:scroll-mt-32 md:pb-10 md:pt-24">
    <div class="mx-auto max-w-7xl px-6 pt-8 lg:px-8 lg:pt-10">
      <div
        v-if="!isBitrixPage || !page.bitrixLeadBlock"
        class="rounded-2xl border border-brand-dark/35 bg-brand-surface px-7 py-7 shadow-md shadow-black/10 md:px-7 md:py-7"
      >
        <h1 class=" text-2xl font-semibold tracking-tight text-white md:text-4xl">{{ page.title }}</h1>
        <p class="mt-4 text-sm leading-7 text-emerald-50/90 md:text-base">
          {{ page.description ?? t('servicePage.defaultDescription') }}
        </p>
        <div class="mt-6">
          <button
            type="button"
            class="inline-flex items-center rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark"
            @click="openLeadModal"
          >
            {{ t('servicePage.discussImplementation') }}
          </button>
        </div>
      </div>

      <section
        v-if="isBitrixPage && bitrixPlatformGroup"
        class="fade-in-up group relative overflow-hidden rounded-[2rem] border border-brand/35 bg-[radial-gradient(circle_at_15%_20%,rgba(94,233,181,0.22),transparent_42%),radial-gradient(circle_at_85%_80%,rgba(56,189,248,0.2),transparent_38%),linear-gradient(135deg,#0b201c_0%,#12352d_45%,#0f2b25_100%)] p-7 shadow-[0_22px_55px_-25px_rgba(15,54,44,0.9)] sm:p-9"
        style="animation-delay: 50ms"
      >
        <div class="pointer-events-none absolute -left-10 -top-12 h-44 w-44 rounded-full bg-brand/25 blur-3xl transition duration-500 group-hover:scale-110"></div>
        <div class="pointer-events-none absolute -bottom-16 right-8 h-36 w-36 rounded-full bg-sky-300/20 blur-3xl"></div>
        <div class="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div class="flex min-h-0 flex-col justify-between gap-6 lg:h-full">
            <div class="space-y-5">
              <span class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-50/90">
                <span class="inline-flex h-2 w-2 rounded-full bg-brand"></span>
                Bitrix24
              </span>
              <h1 class="max-w-sm text-xl font-semibold leading-tight tracking-tight text-white md:text-[2rem]">
                {{ page.title }}
              </h1>
              <p class="max-w-sm text-sm leading-7 text-emerald-50/85 md:text-base">
                {{ page.description }}
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <button
                type="button"
                class="inline-flex items-center rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark"
                @click="openLeadModal"
              >
                {{ t('servicePage.discussImplementation') }}
              </button>
              <a
                v-if="page.bitrixDemoUrl"
                :href="page.bitrixDemoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/15"
              >
                {{ t('servicePage.tryDemo') }}
              </a>
            </div>
          </div>
          <ul class="grid h-full min-h-0 gap-3 sm:grid-cols-2">
            <li
              v-for="(item, index) in bitrixPlatformGroup.items"
              :key="item"
              class="rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-4 text-sm leading-7 text-emerald-50/95 backdrop-blur-sm md:text-base"
              :class="index === 2 ? 'sm:col-span-2' : ''"
            >
              <div class="flex items-start gap-3.5">
                <span class="inline-flex h-7 min-w-7 items-center justify-center rounded-lg bg-white/15 px-2 text-xs font-semibold text-white">
                  {{ `0${index + 1}` }}
                </span>
                <span class="pt-0.5">{{ item }}</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section
        v-if="isAccountingSystemsPage"
        class="fade-in-up mt-10"
        style="animation-delay: 80ms"
      >
        <PlatformsSection />
      </section>

      <section
        v-if="isBitrixPage && page.bitrixLeadBlock"
        class="fade-in-up mt-10 border-b border-slate-200/80 pb-14"
        style="animation-delay: 60ms"
      >
        <div class="max-w-5xl">
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-brand-dark/80">Bitrix24</p>
          <h2 class="mt-3 max-w-3xl text-xl font-semibold tracking-tight text-slate-950 md:text-3xl lg:text-[2rem]">
            {{ page.bitrixLeadBlock.headline }}
          </h2>
          <p
            v-for="(paragraph, idx) in page.bitrixLeadBlock.intro"
            :key="idx"
            class="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg"
          >
            {{ paragraph }}
          </p>
        </div>

        <div class="mt-10 grid max-w-7xl gap-6 md:grid-cols-3 md:gap-7">
          <article
            v-for="(block, index) in page.bitrixLeadBlock.sections"
            :key="block.title"
            class="fade-in-up group flex min-h-full flex-col overflow-hidden rounded-xl border border-brand-dark/40 bg-white shadow-md shadow-brand-dark/10 motion-safe:transition-[transform,box-shadow,border-color] motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1.5 motion-safe:hover:scale-[1.02] motion-safe:hover:border-brand/70 motion-safe:hover:shadow-[0_22px_50px_-12px_rgba(21,61,52,0.38)] sm:shadow-lg sm:shadow-brand-dark/10"
            :style="{ animationDelay: `${70 + index * 40}ms` }"
          >
            <div class="flex flex-1 flex-col p-6 sm:p-7">
              <div class="flex items-start gap-3.5">
                <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/20 text-xs font-bold tabular-nums text-slate-900 ring-1 ring-brand/25"
                >
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <h3 class="min-w-0 pt-1 text-base font-semibold leading-snug tracking-tight text-slate-950 md:text-xl">
                  {{ block.title }}
                </h3>
              </div>
              <div class="mt-5 flex min-h-0 flex-1 flex-col space-y-4 border-t border-slate-100 pt-5">
                <p v-if="block.lead" class="text-sm font-medium leading-7 text-slate-700 md:text-base">
                  {{ block.lead }}
                </p>
                <ul class="space-y-2.5">
                  <li
                    v-for="item in block.items"
                    :key="item"
                    class="flex items-start gap-2.5 text-sm leading-7 text-slate-600 md:text-base"
                  >
                    <span class="mt-2 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand-dark"></span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              v-if="block.closing"
              class="mt-auto border-t border-white/10 bg-brand-surface px-6 py-4 transition-[background-color,filter] duration-300 ease-out group-hover:bg-[#1a4d42] group-hover:brightness-[1.03] sm:px-7 sm:py-5"
            >
              <p class="text-sm font-semibold leading-7 text-white md:text-base">
                {{ block.closing }}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        v-if="isBitrixPage && page.bitrixCertificates"
        class="fade-in-up mt-12 scroll-mt-28 md:scroll-mt-32"
        style="animation-delay: 100ms"
        aria-labelledby="bitrix-certificates-heading"
      >
        <div
          class="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white px-5 py-10 shadow-sm shadow-slate-200/50 sm:px-10 sm:py-14"
        >
          <div class="relative z-10 max-w-4xl">
            <p class="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-dark sm:text-xs">{{ t('servicePage.certificates') }}</p>
            <h2
              id="bitrix-certificates-heading"
              class="mt-5 text-[1.4rem] font-black italic leading-[1.08] tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[2.75rem]"
            >
              {{ page.bitrixCertificates.headline }}
            </h2>
            <p
              class="mt-4 text-lg font-extrabold leading-snug tracking-tight text-brand-dark sm:text-2xl md:text-3xl md:leading-tight"
            >
              {{ page.bitrixCertificates.headlineAccent }}
            </p>
            <div class="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
              <p v-for="(paragraph, idx) in page.bitrixCertificates.subline" :key="idx">
                {{ paragraph }}
              </p>
            </div>
          </div>

          <div class="relative z-10 mt-10">
            <Carousel
              v-model="currentBitrixCertSlide"
              class="bitrix-certs-carousel"
              :items-to-show="1"
              :breakpoints="bitrixCertCarouselBreakpoints"
              :gap="20"
              :wrap-around="true"
              :autoplay="6000"
              :pause-autoplay-on-hover="true"
              :transition="650"
              snap-align="start"
            >
              <Slide v-for="cert in page.bitrixCertificates.items" :key="cert.id">
                <figure
                  class="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-lg shadow-black/20 sm:p-5"
                >
                  <div class="flex min-h-0 flex-1 items-center justify-center rounded-xl bg-slate-50/90">
                    <img
                      :src="cert.src"
                      :alt="cert.alt"
                      class="mx-auto max-h-[min(48vh,440px)] w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption
                    v-if="cert.caption"
                    class="mt-4 text-center text-sm font-semibold tracking-tight text-slate-800 md:text-base"
                  >
                    {{ cert.caption }}
                  </figcaption>
                </figure>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
        </div>
      </section>

      <BitrixCloudBoxSurvey v-if="isBitrixPage && page.bitrixSurvey" :content="page.bitrixSurvey" />

      <div v-if="isShowcasePage" class="mt-12 space-y-7">
        <article
          v-for="(group, index) in showcaseGroups"
          :key="group.title"
          class="fade-in-up group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-emerald-50/35 to-brand/10 p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md sm:p-8"
          :style="{ animationDelay: `${index * 90}ms` }"
        >
          <div class="pointer-events-none absolute -bottom-6 left-4 z-0 text-[8rem] font-bold leading-none tracking-tight text-brand/10 sm:left-8 sm:text-[10rem]">
            {{ index + 1 }}
          </div>
          <div class="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-brand/10 blur-2xl transition duration-300 group-hover:bg-brand/15"></div>
          <div class="pointer-events-none absolute -bottom-12 right-12 h-24 w-24 rounded-full bg-emerald-300/15 blur-2xl"></div>
          <div class="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-8">
            <div class="space-y-5">
              <div class="h-1 w-16 rounded-full bg-gradient-to-r from-brand-dark to-brand"></div>
              <h2 class="text-xl font-semibold leading-tight tracking-tight text-slate-950 md:text-3xl">{{ group.title }}</h2>
            </div>
            <ul class="space-y-3 border-l border-brand/30 pl-5 sm:pl-6">
              <li
                v-for="item in group.items"
                :key="item.raw"
                class="rounded-2xl border border-white/70 bg-white/75 px-4 py-0 text-sm leading-7 text-slate-700 backdrop-blur-sm md:text-base"
              >
                <span class="font-semibold text-slate-950">{{ item.lead }}</span>
                <span v-if="item.details">: {{ item.details }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>

      <section
        v-else-if="isBitrixRoadmapPage"
        class="fade-in-up mt-10"
        style="animation-delay: 100ms"
      >
        <h2 class="text-lg font-semibold tracking-tight text-slate-900 md:text-2xl">{{ t('servicePage.roadmapTitle') }}</h2>
        <ol class="relative mt-6 space-y-5">
          <li
            v-for="(group, index) in primaryDisplayGroups"
            :key="`roadmap-${group.title}`"
            class="relative pl-10"
          >
            <span class="absolute left-0 top-1.5 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-brand text-xs font-semibold text-slate-900">
              {{ index + 1 }}
            </span>
            <span
              v-if="index < primaryDisplayGroups.length - 1"
              class="absolute left-3 top-8 h-[calc(100%+1rem)] w-px bg-brand/40"
              aria-hidden="true"
            ></span>
            <article class="rounded-xl border border-slate-200/90 bg-slate-50/70 p-5">
              <h3 class="text-base font-semibold tracking-tight text-slate-900 md:text-xl">{{ group.title }}</h3>
              <ul class="mt-4 space-y-2.5">
                <li
                  v-for="item in group.items"
                  :key="item"
                  class="flex items-start gap-2.5 text-sm leading-7 text-slate-700 md:text-base"
                >
                  <span class="mt-2 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand-dark"></span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </article>
          </li>
        </ol>
      </section>

      <div v-else class="mt-10 grid gap-6 lg:grid-cols-2">
        <article
          v-for="(group, index) in primaryDisplayGroups"
          :key="group.title"
          class="fade-in-up rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm sm:p-8"
          :style="{ animationDelay: `${index * 90}ms` }"
        >
          <h2 class="text-lg font-semibold tracking-tight text-slate-900 md:text-2xl">{{ group.title }}</h2>
          <ul class="mt-5 space-y-3">
            <li
              v-for="item in group.items"
              :key="item"
              class="rounded-xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-sm leading-7 text-slate-700 md:text-base"
            >
              <div class="flex items-start gap-3">
                <span class="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-brand-dark"></span>
                <span>{{ item }}</span>
              </div>
            </li>
          </ul>
        </article>
      </div>

      <div v-if="bitrixFinalGroups.length" class="mt-8 grid gap-6 lg:grid-cols-2">
        <article
          v-for="(group, index) in bitrixFinalGroups"
          :key="`bitrix-final-${group.title}`"
          class="fade-in-up h-full rounded-2xl border border-brand/30 bg-brand/10 p-7 shadow-sm sm:p-8"
          :style="{ animationDelay: `${index * 90}ms` }"
        >
          <h2 class="text-lg font-semibold tracking-tight text-slate-900 md:text-2xl">{{ group.title }}</h2>
          <ul class="mt-5 space-y-3">
            <li
              v-for="item in group.items"
              :key="item"
              class="rounded-xl border border-brand/25 bg-white/85 px-4 py-3 text-sm leading-7 text-slate-700 md:text-base"
            >
              <div class="flex items-start gap-3">
                <span class="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-brand-dark"></span>
                <span>{{ item }}</span>
              </div>
            </li>
          </ul>
        </article>
      </div>

      <section
        v-if="page.featured && !isShowcasePage"
        class="fade-in-up mt-10 rounded-2xl border border-brand-dark/35 bg-gradient-to-br from-brand-surface to-[#0f3029] p-7 shadow-md shadow-black/10 sm:p-8"
        style="animation-delay: 140ms"
      >
        <div class="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h2 class="text-lg font-semibold tracking-tight text-white md:text-2xl">{{ page.featured.title }}</h2>
            <ul class="mt-5 space-y-3">
              <li
                v-for="item in page.featured.services"
                :key="item"
                class="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm leading-7 text-emerald-50/95 md:text-base"
              >
                <div class="flex items-start gap-3">
                  <span class="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-brand"></span>
                  <span>{{ item }}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="lg:pl-2">
            <h3 class="text-base font-semibold tracking-tight text-white">{{ page.featured.systemsTitle }}</h3>
            <div class="mt-4 grid gap-3">
              <div
                v-for="system in page.featured.systems"
                :key="system"
                class="rounded-xl border border-brand/40 bg-brand/15 px-4 py-3 text-sm font-semibold text-white"
              >
                {{ system }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div v-if="page.tiles?.length" class="fade-in-up mt-10" style="animation-delay: 160ms">
        <h2 class="text-lg font-semibold tracking-tight text-slate-900 md:text-2xl">{{ t('servicePage.industries') }}</h2>
        <div class="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(tile, index) in page.tiles"
            :key="tile.title"
            class="fade-in-up group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/60 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand/45 hover:shadow-md"
            :style="{ animationDelay: `${220 + index * 70}ms` }"
          >
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand/80 to-brand-dark/80"></div>
            <h3 class="text-base font-bold leading-snug tracking-tight text-slate-950 md:text-xl">{{ tile.title }}</h3>
            <p v-if="tile.description" class="mt-3 text-sm leading-6 text-slate-600">{{ tile.description }}</p>
            <ul class="mt-3 space-y-2.5">
              <li
                v-for="item in tile.items"
                :key="item"
                class="rounded-xl border border-slate-200/80 bg-white px-3.5 py-2.5 text-xs leading-5 text-slate-700"
              >
                <div class="flex items-start gap-2.5">
                  <span class="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand-dark"></span>
                  <span>{{ item }}</span>
                </div>
              </li>
            </ul>
            <div class="mt-auto flex justify-center pt-4">
              <button
                type="button"
                class="inline-flex items-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark"
                @click="openLeadModalForTile(tile.title)"
              >
                {{ t('servicePage.connect') }}
              </button>
            </div>
          </article>
        </div>
      </div>

      <section v-if="page.advantages?.items.length" class="fade-in-up mt-10" style="animation-delay: 180ms">
        <h2 class="text-lg font-semibold tracking-tight text-slate-900 md:text-2xl">{{ page.advantages.title }}</h2>
        <div class="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="advantage in page.advantages.items"
            :key="advantage.number"
            class="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm"
          >
            <div class="text-sm font-semibold tracking-[0.2em] text-brand-dark">{{ advantage.number }}</div>
            <h3 class="mt-3 text-base font-semibold tracking-tight text-slate-950">{{ advantage.title }}</h3>
            <p class="mt-2 text-sm leading-7 text-slate-600 md:text-base">{{ advantage.description }}</p>
          </article>
        </div>
      </section>
    </div>

    <Teleport to="body">
      <div
        v-if="isLeadModalOpen"
        class="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto bg-slate-950/55 px-4 py-4 backdrop-blur-sm sm:py-6"
        @click.self="attemptCloseLeadModal"
      >
        <div
          ref="leadModalRootRef"
          class="relative my-0 w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl sm:p-6"
          role="dialog"
          aria-modal="true"
          :aria-label="t('servicePage.modalAria')"
        >
          <div class="mb-5 flex items-start justify-between gap-4">
            <div>
              <h3 class="text-lg font-semibold tracking-tight text-slate-950 sm:text-2xl">{{ t('servicePage.modalTitle') }}</h3>
            </div>
            <button
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-red-200 text-lg text-red-600 transition hover:bg-red-50 hover:text-red-700"
              @click="attemptCloseLeadModal"
            >
              ×
            </button>
          </div>
          <LeadRequestForm
            :key="modalFormKey"
            id-prefix="service-modal"
            :initial-services="modalInitialServices"
            :initial-message="modalInitialMessage"
            :submit-button-label="t('servicePage.modalSubmit')"
            @dirty-change="onLeadFormDirtyChange"
          />

          <div
            v-if="isCloseConfirmOpen"
            class="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-slate-950/45 p-4"
          >
            <div class="w-full max-w-md rounded-xl border border-slate-200 bg-white p-5 shadow-xl sm:p-6">
              <h4 class="text-base font-semibold tracking-tight text-slate-950">{{ t('servicePage.closeConfirmTitle') }}</h4>
              <p class="mt-2 text-sm leading-6 text-slate-600">{{ t('servicePage.closeConfirmText') }}</p>
              <div class="mt-5 flex items-center justify-end gap-3">
                <button
                  type="button"
                  class="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  @click="cancelCloseLeadModal"
                >
                  {{ t('servicePage.cancel') }}
                </button>
                <button
                  type="button"
                  class="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                  @click="confirmCloseLeadModal"
                >
                  {{ t('servicePage.closeWithoutSave') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/carousel.css'
import BitrixCloudBoxSurvey from '@/components/BitrixCloudBoxSurvey.vue'
import LeadRequestForm from '@/components/LeadRequestForm.vue'
import PlatformsSection from '@/components/PlatformsSection.vue'
import { useFocusTrap } from '@/composables/useFocusTrap'
import { readStoredLocale } from '@/i18n'
import { getServiceContent } from '@/content/services'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()

const showcaseSlugs = new Set(['firstbit', 'accounting-systems', 'training', 'vat-cit-filing'])
const isShowcasePage = computed(() => showcaseSlugs.has(String(route.params.slug ?? '')))
const isBitrixPage = computed(() => String(route.params.slug ?? '') === 'bitrix24')
const isAccountingSystemsPage = computed(() => String(route.params.slug ?? '') === 'accounting-systems')
const currentBitrixCertSlide = ref(0)

const bitrixCertCarouselBreakpoints = {
  768: {
    itemsToShow: 2,
  },
  1280: {
    itemsToShow: 3,
  },
} as const

const isLeadModalOpen = ref(false)
const leadModalRootRef = ref<HTMLElement | null>(null)
useFocusTrap(isLeadModalOpen, leadModalRootRef)
const modalFormKey = ref(0)
const isLeadFormDirty = ref(false)
const isCloseConfirmOpen = ref(false)
const selectedTileTitle = ref('')
const modalInitialServices = computed(() => {
  const slug = String(route.params.slug ?? '')
  if (slug === 'training') {
    return ['training']
  }
  if (slug === 'accounting-systems') {
    return ['automation']
  }
  if (slug === 'bitrix24') {
    return ['bitrix24']
  }
  if (slug === 'vat-cit-filing') {
    return ['vat-cit']
  }
  return ['firstbit']
})

const modalInitialMessage = computed(() =>
  selectedTileTitle.value.length > 0
    ? `${t('servicePage.modalMessagePrefix')} ${selectedTileTitle.value}`
    : '',
)

const openLeadModal = (): void => {
  selectedTileTitle.value = ''
  isLeadFormDirty.value = false
  modalFormKey.value += 1
  isLeadModalOpen.value = true
}

const openLeadModalForTile = (tileTitle: string): void => {
  selectedTileTitle.value = tileTitle.trim()
  isLeadFormDirty.value = false
  modalFormKey.value += 1
  isLeadModalOpen.value = true
}

const closeLeadModal = (): void => {
  isLeadModalOpen.value = false
  isCloseConfirmOpen.value = false
}

const onLeadFormDirtyChange = (value: boolean): void => {
  isLeadFormDirty.value = value
}

const attemptCloseLeadModal = (): void => {
  if (isLeadFormDirty.value) {
    isCloseConfirmOpen.value = true
    return
  }
  closeLeadModal()
}

const cancelCloseLeadModal = (): void => {
  isCloseConfirmOpen.value = false
}

const confirmCloseLeadModal = (): void => {
  isCloseConfirmOpen.value = false
  closeLeadModal()
}

watch(isLeadModalOpen, (open) => {
  window.dispatchEvent(new CustomEvent('lead-modal-toggle', { detail: { open } }))
})

watch(
  () => [String(route.params.slug ?? ''), locale.value] as const,
  ([slug]) => {
    if (!getServiceContent(String(locale.value))[slug]) {
      void router.replace({
        name: 'not-found',
        params: {
          locale: String(route.params.locale ?? readStoredLocale()),
          pathMatch: ['page-not-found'],
        },
      })
    }
  },
  { immediate: true },
)

const onEscapePress = (event: KeyboardEvent): void => {
  if (event.key === 'Escape' && isLeadModalOpen.value) {
    attemptCloseLeadModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onEscapePress)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onEscapePress)
  window.dispatchEvent(new CustomEvent('lead-modal-toggle', { detail: { open: false } }))
})

const splitServiceItem = (item: string): { lead: string; details: string } => {
  const separatorIndex = item.indexOf(':')
  if (separatorIndex === -1) {
    return { lead: item, details: '' }
  }
  return {
    lead: item.slice(0, separatorIndex).trim(),
    details: item.slice(separatorIndex + 1).trim(),
  }
}

const defaultService = computed(() => {
  const bundle = getServiceContent(String(locale.value))
  return bundle.firstbit ?? Object.values(bundle)[0]!
})

const bitrixPlatformGroup = computed(() =>
  isBitrixPage.value && page.value.bitrixLeadBlock ? page.value.groups[0] : null
)
const displayGroups = computed(() =>
  isBitrixPage.value && page.value.bitrixLeadBlock ? page.value.groups.slice(1) : page.value.groups
)
const bitrixFinalGroups = computed(() =>
  isBitrixPage.value && !page.value.bitrixLeadBlock ? displayGroups.value.slice(-2) : []
)
const primaryDisplayGroups = computed(() =>
  bitrixFinalGroups.value.length ? displayGroups.value.slice(0, -2) : displayGroups.value
)
const isBitrixRoadmapPage = computed(() =>
  isBitrixPage.value && !page.value.bitrixLeadBlock && primaryDisplayGroups.value.length > 0
)

const showcaseGroups = computed(() => {
  const groups = displayGroups.value
  if (groups.length > 0) {
    return groups.map((group) => ({
      ...group,
      items: group.items.map((item) => {
        const parsedItem = splitServiceItem(item)
        return {
          raw: item,
          lead: parsedItem.lead,
          details: parsedItem.details,
        }
      }),
    }))
  }

  if (page.value.featured) {
    return [
      {
        title: page.value.title,
        items: page.value.featured.services.map((item) => {
          const parsedItem = splitServiceItem(item)
          return {
            raw: item,
            lead: parsedItem.lead,
            details: parsedItem.details,
          }
        }),
      },
    ]
  }

  return []
})

const page = computed(() => {
  const slug = String(route.params.slug ?? '')
  const bundle = getServiceContent(String(locale.value))
  return bundle[slug] ?? defaultService.value
})
</script>

<style scoped>
.fade-in-up {
  animation: fadeInUp 0.55s ease both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

:deep(.bitrix-certs-carousel .carousel__viewport) {
  overflow: hidden;
}

:deep(.bitrix-certs-carousel .carousel__track) {
  align-items: stretch;
}

:deep(.bitrix-certs-carousel .carousel__slide) {
  display: flex;
  height: auto;
}

:deep(.bitrix-certs-carousel .carousel__slide > *) {
  width: 100%;
}

:deep(.bitrix-certs-carousel .carousel__prev),
:deep(.bitrix-certs-carousel .carousel__next) {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 0.75rem;
  color: #0f172a;
  width: 2.75rem;
  height: 2.75rem;
  z-index: 20;
  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.45);
}

:deep(.bitrix-certs-carousel .carousel__prev:hover),
:deep(.bitrix-certs-carousel .carousel__next:hover) {
  background: #fff;
  border-color: rgba(60, 205, 152, 0.45);
}

@media (max-width: 767px) {
  :deep(.bitrix-certs-carousel .carousel__prev),
  :deep(.bitrix-certs-carousel .carousel__next) {
    display: none;
  }
}

@media (min-width: 768px) {
  :deep(.bitrix-certs-carousel .carousel__prev) {
    left: -0.5rem;
  }

  :deep(.bitrix-certs-carousel .carousel__next) {
    right: -0.5rem;
  }
}
</style>
