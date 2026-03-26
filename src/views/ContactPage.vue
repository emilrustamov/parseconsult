<template>
  <section id="contact" class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 pb-16 pt-24 backdrop-blur-[2px] md:scroll-mt-32 md:pb-24 md:pt-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Контакты</p>
        <h1 class="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">Свяжитесь с нами</h1>

      </div>

      <div class="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-12">
        <div class="flex flex-col gap-5">
          <div class="rounded-xl border border-slate-200 bg-white p-7">
            <div class="flex items-start gap-4">
              <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/20 text-lg font-semibold text-slate-900">@</span>
              <div>
                <div class="text-xs font-semibold uppercase tracking-wider text-slate-500">Email</div>
                <a href="mailto:info@parseconsult.ae" class="mt-1 block text-base font-semibold text-slate-900 underline decoration-brand/50 decoration-2 underline-offset-4 transition hover:text-brand-dark">info@parseconsult.ae</a>
              </div>
            </div>
          </div>
          <div class="rounded-xl border border-slate-200 bg-white p-7">
            <div class="flex items-start gap-4">
              <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/20 text-lg text-slate-900">☎</span>
              <div>
                <div class="text-xs font-semibold uppercase tracking-wider text-slate-500">Телефон</div>
                <a href="tel:+971000000000" class="mt-1 block text-base font-semibold text-slate-900 transition hover:text-brand-dark">+971 (0)00 000 0000</a>
              </div>
            </div>
          </div>
          <div
            v-for="s in socialLinks"
            :key="s.href"
            class="rounded-xl border border-slate-200 bg-white p-7"
          >
            <div class="flex items-start gap-4">
              <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/20 text-slate-900">
                <SocialNetworkIcon :network="s.network" class="size-6" />
              </span>
              <div class="min-w-0 flex-1">
                <div class="text-xs font-semibold uppercase tracking-wider text-slate-500">{{ s.name }}</div>
                <a
                  :href="s.href"
                  class="mt-1 block text-base font-semibold text-slate-900 underline decoration-brand/50 decoration-2 underline-offset-4 transition hover:text-brand-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >{{ s.label }}</a>
              </div>
            </div>
          </div>
          <div class="rounded-xl border border-brand-dark/35 bg-brand-surface p-7 text-white">
            <div class="text-xs font-semibold uppercase tracking-wider text-brand">Локация</div>
            <p class="mt-3 text-sm leading-7 text-white/85">ОАЭ: онлайн и у клиента по договорённости.</p>
          </div>
        </div>

        <div class="rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <LeadRequestForm id-prefix="contact" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LeadRequestForm from '@/components/LeadRequestForm.vue'
import SocialNetworkIcon from '@/components/SocialNetworkIcon.vue'
import { socialLinks } from '@/socialLinks'
</script>
