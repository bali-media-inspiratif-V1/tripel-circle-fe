<script setup lang="ts">
import type { TourPackage } from '~/composables/useTours'

defineProps<{
  tourPackage: TourPackage
  stats: { value: string; label: string }[]
}>()
</script>

<template>
  <div class="lg:hidden w-full px-6 py-12 text-center flex flex-col items-center font-sans">
    <div class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur mb-5 shadow-lg">
      <span class="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
      TRIP CIRCLE — 4D3N Da Lat
    </div>

    <h1 class="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-white drop-shadow-md">
      Pesona Dataran Tinggi <br />
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-100 to-white">
        Da Lat, Vietnam
      </span>
    </h1>

    <p class="mt-3 text-xs sm:text-sm leading-relaxed text-gray-200 max-w-md font-normal">
      {{ tourPackage.subtitle }}
    </p>

    <div class="mt-6 flex flex-col w-full max-w-xs gap-2.5">
      <a
        href="#pricing"
        class="inline-flex h-11 items-center justify-center rounded-2xl bg-[#fff9f1] text-xs font-bold text-[#2c221e] shadow-md active:scale-95"
      >
        Lihat Harga Paket
      </a>
      <a
        href="#itinerary"
        class="inline-flex h-11 items-center justify-center rounded-2xl border border-white/30 text-xs font-bold text-white hover:bg-white/10"
      >
        Rencana Perjalanan
      </a>
    </div>

    <!-- Stats Bar Mobile -->
    <div class="mt-8 grid grid-cols-3 divide-x divide-white/20 border-y border-white/20 py-3 w-full max-w-sm">
      <div v-for="stat in stats" :key="stat.label" class="px-2">
        <p class="text-lg font-black text-white tracking-tight">{{ stat.value }}</p>
        <p class="mt-1 text-[9px] font-bold text-gray-300 uppercase tracking-wider">{{ stat.label }}</p>
      </div>
    </div>
  </div>
</template>