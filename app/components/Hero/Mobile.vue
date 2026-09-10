<script setup lang="ts">
import type { TourPackage } from '~/composables/useTours'

defineProps<{
  tourPackage: TourPackage
}>()

const stats = [
  { value: "4D3N", label: "Durasi" },
  { value: "8–10 Pax", label: "Grup" },
  { value: "Termasuk", label: "Tiket Wisata" },
]
</script>

<template>
  <div class="block lg:hidden w-full max-w-full overflow-x-hidden px-5 py-10 text-center font-sans">
    <div class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur mb-5 shadow-sm">
      <span class="h-2 w-2 rounded-full bg-[#ffc145]"></span>
      TRIP CIRCLE — 4D3N Da Lat
    </div>

    <h1 class="font-serif text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-md">
      Pesona Dataran Tinggi <br />
      <span class="text-[#ffc145]">Da Lat, Vietnam</span>
    </h1>

    <p class="mt-3 text-xs sm:text-sm leading-relaxed text-white/90 max-w-md mx-auto font-normal">
      {{ tourPackage.subtitle }}
    </p>

    <div class="mt-6 flex flex-col gap-2.5 w-full max-w-xs mx-auto">
      <a
        href="#pricing"
        class="inline-flex h-11 items-center justify-center rounded-full bg-[#ff643f] px-6 text-xs font-bold text-white shadow-lg active:scale-95 transition-transform"
      >
        Lihat Pilihan Hotel
      </a>
      <a
        href="#itinerary"
        class="inline-flex h-11 items-center justify-center rounded-full border border-white/40 px-6 text-xs font-bold text-white hover:bg-white/10 transition-colors"
      >
        Jadwal Perjalanan
      </a>
    </div>

    <!-- Visual Card Mobile Proporsional -->
    <div class="mt-8 relative w-full max-w-sm mx-auto">
      <div class="relative h-56 w-full overflow-hidden rounded-2xl border border-white/20 shadow-xl">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
          alt="Da Lat Highlands" 
          class="h-full w-full object-cover brightness-[0.85]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#082f41]/90 via-black/25 to-transparent"></div>
        
        <div class="absolute bottom-4 left-4 right-4 text-left text-white">
          <span class="text-[10px] uppercase tracking-wider text-[#ffc145] font-bold block mb-0.5">
            Destinasi Pilihan
          </span>
          <p class="text-base font-bold">Mongoland & Fresh Garden</p>
        </div>
      </div>
    </div>

    <!-- Stats Bar Mobile -->
    <div class="mt-8 grid grid-cols-3 divide-x divide-white/20 border-y border-white/20 py-3 w-full max-w-sm mx-auto text-center">
      <div v-for="stat in stats" :key="stat.label" class="px-1">
        <p class="font-serif text-lg font-bold text-white tracking-tight">{{ stat.value }}</p>
        <p class="mt-0.5 text-[9px] font-bold text-white/75 uppercase tracking-wider">{{ stat.label }}</p>
      </div>
    </div>
  </div>
</template>