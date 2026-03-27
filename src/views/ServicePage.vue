<template>
  <section class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 pb-16 pt-20 backdrop-blur-[2px] md:scroll-mt-32 md:pb-24 md:pt-24">
    <div class="mx-auto max-w-7xl px-6 pt-8 lg:px-8 lg:pt-10">
      <div v-if="!isBitrixPage" class="rounded-2xl border border-brand-dark/35 bg-brand-surface p-7 shadow-md shadow-black/10 md:p-10">
        <p class="text-sm font-semibold uppercase tracking-[0.22em] text-brand">Услуги</p>
        <h1 class="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">{{ page.title }}</h1>
        <p class="mt-4 max-w-3xl text-sm leading-7 text-emerald-50/90 md:text-base">
          {{ page.description ?? 'Выбираем отраслевую модель учета и настраиваем процессы под реальные операции бизнеса.' }}
        </p>
      </div>

      <section
        v-if="isBitrixPage && bitrixPlatformGroup"
        class="fade-in-up group relative mt-10 overflow-hidden rounded-[2rem] border border-brand/35 bg-[radial-gradient(circle_at_15%_20%,rgba(94,233,181,0.22),transparent_42%),radial-gradient(circle_at_85%_80%,rgba(56,189,248,0.2),transparent_38%),linear-gradient(135deg,#0b201c_0%,#12352d_45%,#0f2b25_100%)] p-7 shadow-[0_22px_55px_-25px_rgba(15,54,44,0.9)] sm:p-9"
        style="animation-delay: 90ms"
      >
        <div class="pointer-events-none absolute -left-10 -top-12 h-44 w-44 rounded-full bg-brand/25 blur-3xl transition duration-500 group-hover:scale-110"></div>
        <div class="pointer-events-none absolute -bottom-16 right-8 h-36 w-36 rounded-full bg-sky-300/20 blur-3xl"></div>
        <div class="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div class="space-y-5">
            <span class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-50/90">
              <span class="inline-flex h-2 w-2 rounded-full bg-brand"></span>
              Bitrix24
            </span>
            <h2 class="max-w-sm text-2xl font-semibold leading-tight tracking-tight text-white md:text-[2rem]">
              {{ page.title }}
            </h2>
            <p class="max-w-sm text-sm leading-7 text-emerald-50/85 md:text-base">
              {{ page.description }}
            </p>
            <button
              type="button"
              class="inline-flex items-center rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark"
              @click="openLeadModal"
            >
              Обсудить внедрение
            </button>
          </div>
          <ul class="grid gap-3 sm:grid-cols-2">
            <li
              v-for="(item, index) in bitrixPlatformGroup.items"
              :key="item"
              class="rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-4 text-sm leading-7 text-emerald-50/95 backdrop-blur-sm md:text-base"
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

      <section v-if="page.compareBlock" class="fade-in-up mt-10 space-y-5" style="animation-delay: 110ms">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{{ page.compareBlock.title }}</h2>
          <p class="mt-2 text-sm leading-7 text-slate-600 md:text-base">{{ page.compareBlock.subtitle }}</p>
        </div>

        <div class="grid gap-6 lg:grid-cols-2">
          <article class="rounded-2xl border border-sky-200/80 bg-sky-50/50 p-7 shadow-sm sm:p-8">
            <h3 class="text-xl font-semibold tracking-tight text-slate-900">{{ page.compareBlock.cloudTitle }}</h3>
            <ul class="mt-5 space-y-3">
              <li
                v-for="item in page.compareBlock.cloudItems"
                :key="item"
                class="rounded-xl border border-sky-200/70 bg-white px-4 py-3 text-sm leading-7 text-slate-700 md:text-base"
              >
                <div class="flex items-start gap-3">
                  <span class="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-sky-500"></span>
                  <span>{{ item }}</span>
                </div>
              </li>
            </ul>
          </article>

          <article class="rounded-2xl border border-brand/35 bg-brand-surface p-7 shadow-md shadow-black/10 sm:p-8">
            <h3 class="text-xl font-semibold tracking-tight text-white">{{ page.compareBlock.boxTitle }}</h3>
            <ul class="mt-5 space-y-3">
              <li
                v-for="item in page.compareBlock.boxItems"
                :key="item"
                class="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm leading-7 text-emerald-50/95 md:text-base"
              >
                <div class="flex items-start gap-3">
                  <span class="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-brand"></span>
                  <span>{{ item }}</span>
                </div>
              </li>
            </ul>
          </article>
        </div>
      </section>

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
              <h2 class="text-2xl font-semibold leading-tight tracking-tight text-slate-950 md:text-3xl">{{ group.title }}</h2>
              <button
                type="button"
                class="inline-flex items-center rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark"
                @click="openLeadModal"
              >
                Оставить заявку
              </button>
            </div>
            <ul class="space-y-3 border-l border-brand/30 pl-5 sm:pl-6">
              <li
                v-for="item in group.items"
                :key="item.raw"
                class="rounded-2xl border border-white/70 bg-white/75 px-4 py-3 text-sm leading-7 text-slate-700 backdrop-blur-sm md:text-base"
              >
                <span class="font-semibold text-slate-950">{{ item.lead }}</span>
                <span v-if="item.details">: {{ item.details }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div v-else class="mt-10 grid gap-6 lg:grid-cols-2">
        <article
          v-for="(group, index) in displayGroups"
          :key="group.title"
          class="fade-in-up rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm sm:p-8"
          :style="{ animationDelay: `${index * 90}ms` }"
        >
          <h2 class="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">{{ group.title }}</h2>
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

      <section
        v-if="page.featured && !isShowcasePage"
        class="fade-in-up mt-10 rounded-2xl border border-brand-dark/35 bg-gradient-to-br from-brand-surface to-[#0f3029] p-7 shadow-md shadow-black/10 sm:p-8"
        style="animation-delay: 140ms"
      >
        <div class="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h2 class="text-xl font-semibold tracking-tight text-white md:text-2xl">{{ page.featured.title }}</h2>
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
            <h3 class="text-lg font-semibold tracking-tight text-white">{{ page.featured.systemsTitle }}</h3>
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
        <h2 class="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">Отрасли</h2>
        <div class="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(tile, index) in page.tiles"
            :key="tile.title"
            class="fade-in-up group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/60 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand/45 hover:shadow-md"
            :style="{ animationDelay: `${220 + index * 70}ms` }"
          >
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand/80 to-brand-dark/80"></div>
            <h3 class="text-lg font-bold leading-snug tracking-tight text-slate-950 md:text-xl">{{ tile.title }}</h3>
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
                Связаться
              </button>
            </div>
          </article>
        </div>
      </div>

      <section v-if="page.advantages?.items.length" class="fade-in-up mt-10" style="animation-delay: 180ms">
        <h2 class="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">{{ page.advantages.title }}</h2>
        <div class="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="advantage in page.advantages.items"
            :key="advantage.number"
            class="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm"
          >
            <div class="text-sm font-semibold tracking-[0.2em] text-brand-dark">{{ advantage.number }}</div>
            <h3 class="mt-3 text-lg font-semibold tracking-tight text-slate-950">{{ advantage.title }}</h3>
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
          class="relative my-0 w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Форма заявки"
        >
          <div class="mb-5 flex items-start justify-between gap-4">
            <div>
              <h3 class="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">Оставить заявку</h3>
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
            submit-button-label="Отправить заявку"
            @dirty-change="onLeadFormDirtyChange"
          />

          <div
            v-if="isCloseConfirmOpen"
            class="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-slate-950/45 p-4"
          >
            <div class="w-full max-w-md rounded-xl border border-slate-200 bg-white p-5 shadow-xl sm:p-6">
              <h4 class="text-lg font-semibold tracking-tight text-slate-950">Закрыть форму?</h4>
              <p class="mt-2 text-sm leading-6 text-slate-600">Вы действительно хотите закрыть? Данные не сохранятся.</p>
              <div class="mt-5 flex items-center justify-end gap-3">
                <button
                  type="button"
                  class="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  @click="cancelCloseLeadModal"
                >
                  Отмена
                </button>
                <button
                  type="button"
                  class="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                  @click="confirmCloseLeadModal"
                >
                  Закрыть без сохранения
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
import { computed, onBeforeUnmount, onMounted, watch } from 'vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LeadRequestForm from '@/components/LeadRequestForm.vue'
import { serviceContent } from '@/content/services'

const route = useRoute()
const router = useRouter()
const showcaseSlugs = new Set(['firstbit', 'accounting-systems', 'training'])
const isShowcasePage = computed(() => showcaseSlugs.has(String(route.params.slug ?? '')))
const isBitrixPage = computed(() => String(route.params.slug ?? '') === 'bitrix24')
const isLeadModalOpen = ref(false)
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
  if (slug === 'accounting-setup') {
    return ['consulting']
  }
  return ['firstbit']
})

const modalInitialMessage = computed(() =>
  selectedTileTitle.value.length > 0 ? `Интересующая конфигурация: ${selectedTileTitle.value}` : ''
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
  () => String(route.params.slug ?? ''),
  (slug) => {
    if (!serviceContent[slug]) {
      void router.replace({ name: 'not-found' })
    }
  },
  { immediate: true }
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

const defaultService = serviceContent.firstbit ?? Object.values(serviceContent)[0]!

const bitrixPlatformGroup = computed(() => (isBitrixPage.value ? page.value.groups[0] : null))
const displayGroups = computed(() => (isBitrixPage.value ? page.value.groups.slice(1) : page.value.groups))

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
  return serviceContent[slug] ?? defaultService
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
</style>
