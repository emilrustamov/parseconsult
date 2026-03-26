<template>
  <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
    <div
      class="float-deco-item absolute left-[4%] top-[8vh] h-28 w-28 sm:h-32 sm:w-32 md:left-[5%] md:top-[10vh]"
      style="animation-duration: 23s; animation-delay: -2s"
    >
      <svg class="deco-svg size-full text-brand-dark [shape-rendering:geometricPrecision]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="6" width="44" height="52" rx="6" stroke="currentColor" stroke-width="2" />
        <rect x="16" y="12" width="32" height="12" rx="2" stroke="currentColor" stroke-width="1.5" />
        <rect x="16" y="30" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.3" />
        <rect x="27" y="30" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.3" />
        <rect x="38" y="30" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.3" />
        <rect x="16" y="42" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.3" />
        <rect x="27" y="42" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.3" />
        <rect x="38" y="42" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.3" />
      </svg>
    </div>

    <div
      class="float-deco-item absolute bottom-[10vh] left-[6%] h-28 w-28 sm:bottom-[12vh] sm:left-[8%] sm:h-32 sm:w-32"
      style="animation-duration: 25s; animation-delay: -4s"
    >
      <svg class="deco-svg size-full text-brand-dark [shape-rendering:geometricPrecision]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="8" width="40" height="48" rx="4" stroke="currentColor" stroke-width="2" />
        <path d="M20 20h24M20 28h18M20 36h22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path
          d="M22 46l6 6 14-16"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div
      class="float-deco-item float-deco-item--soft absolute left-[1%] top-[48vh] hidden h-28 w-28 lg:left-[2%] lg:block lg:h-32 lg:w-32"
      style="animation-duration: 32s; animation-delay: -5s"
    >
      <svg class="deco-svg size-full text-brand-dark [shape-rendering:geometricPrecision]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 46h36" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        <rect x="16" y="22" width="10" height="24" rx="2" stroke="currentColor" stroke-width="1.6" />
        <rect x="28" y="14" width="10" height="32" rx="2" stroke="currentColor" stroke-width="1.6" />
        <rect x="40" y="26" width="10" height="20" rx="2" stroke="currentColor" stroke-width="1.6" />
      </svg>
    </div>

    <div
      class="float-deco-item float-deco-item--alt absolute right-[12%] top-[54vh] hidden h-28 w-28 sm:block sm:h-32 sm:w-32 md:right-[16%] lg:h-36 lg:w-36"
      style="animation-duration: 26s; animation-delay: -12s"
    >
      <svg class="deco-svg size-full text-brand-dark [shape-rendering:geometricPrecision]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 14h20v36H14V14z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path d="M18 18h12v4H18v-4z" fill="currentColor" opacity="0.62" />
        <path d="M18 26h16M18 32h16M18 38h14M18 44h12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
        <path
          d="M34 14h16v36H34V14z"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linejoin="round"
          opacity="0.95"
        />
        <path d="M38 22h8M38 28h8M38 34h8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity="0.95" />
      </svg>
    </div>

    <div
      class="float-deco-item absolute left-[12%] top-[22vh] hidden h-24 w-24 md:block lg:left-[14%] lg:h-28 lg:w-28"
      style="animation-duration: 29s; animation-delay: -8s"
    >
      <svg class="deco-svg size-full text-brand-dark [shape-rendering:geometricPrecision]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="40" r="5" stroke="currentColor" stroke-width="1.6" />
        <circle cx="44" cy="40" r="5" stroke="currentColor" stroke-width="1.6" />
        <circle cx="32" cy="18" r="5" stroke="currentColor" stroke-width="1.6" />
        <path d="M24 37l6-14M36 24l6 14M26 40h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path
          d="M46 22c6 0 10 4 10 10M46 22v-4M54 32l3-2"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18 22c-6 0-10 4-10 10M18 22v-4M10 32l-3-2"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div
      class="float-deco-item float-deco-item--soft absolute bottom-[6vh] right-[5%] h-24 w-24 sm:bottom-[8vh] sm:right-[7%] sm:h-28 sm:w-28 md:h-32 md:w-32"
      style="animation-duration: 34s; animation-delay: -14s"
    >
      <svg class="deco-svg size-full text-brand-dark [shape-rendering:geometricPrecision]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="18" stroke="currentColor" stroke-width="1.6" />
        <path
          d="M32 32V14a18 18 0 0 1 15.6 9L32 32z"
          fill="currentColor"
          opacity="0.5"
        />
        <path
          d="M32 32l15.6 9A18 18 0 0 1 32 50V32z"
          fill="currentColor"
          opacity="0.35"
        />
        <circle cx="32" cy="32" r="3" stroke="currentColor" stroke-width="1.4" />
      </svg>
    </div>

    <div
      class="float-deco-item absolute right-[3%] top-[12vh] hidden h-32 w-32 sm:block md:h-36 md:w-36 lg:right-[4%] lg:h-40 lg:w-40"
      style="animation-duration: 31s; animation-delay: -9s"
    >
      <svg class="deco-svg size-full text-brand-dark [shape-rendering:geometricPrecision]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="44" height="44" rx="8" stroke="currentColor" stroke-width="2" />
        <path d="M18 24h28M18 32h22M18 40h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        <circle cx="44" cy="40" r="6" stroke="currentColor" stroke-width="1.8" />
      </svg>
    </div>

    <div
      class="float-deco-item float-deco-item--alt absolute bottom-[26vh] right-[2%] hidden h-32 w-32 sm:block sm:h-36 sm:w-36 lg:h-40 lg:w-40"
      style="animation-duration: 28s; animation-delay: -16s"
    >
      <svg class="deco-svg size-full text-brand-dark [shape-rendering:geometricPrecision]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="20" stroke="currentColor" stroke-width="2" />
        <path d="M32 16v16h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20 44h24" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        <path d="M24 38h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.float-deco-item {
  animation-name: float-deco;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  will-change: transform;
  opacity: 0.74;
}

.float-deco-item--alt {
  animation-name: float-deco-alt;
}

.float-deco-item--soft {
  animation-name: float-deco-soft;
  opacity: 0.64;
}

.deco-svg {
  filter: drop-shadow(0 1px 2px rgb(15 23 42 / 0.14));
  transform: translateZ(0);
}

@media (prefers-reduced-motion: reduce) {
  .float-deco-item {
    animation: none;
  }
}
</style>
