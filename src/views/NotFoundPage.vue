<template>
  <section class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 pb-16 pt-24 backdrop-blur-[2px] md:scroll-mt-32 md:pb-24 md:pt-28">
    <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
      <p class="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">404</p>
      <h1 class="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">Страница не найдена</h1>
      <p class="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
        Возможно, ссылка устарела или страница была перемещена. Перейдите на главную и выберите нужный раздел.
      </p>
      <RouterLink
        :to="{ name: 'home' }"
        class="mt-8 inline-flex items-center rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark"
      >
        На главную
      </RouterLink>
    </div>
  </section>
</template>
