<script setup lang="ts">
import type { TourPackage } from '~/composables/useTours'

interface StatItem {
  value: string
  label: string
}

defineProps<{
  tourPackage: TourPackage
  stats: StatItem[]
}>()
</script>

<template>
  <div class="hidden lg:grid mx-auto w-full max-w-7xl grid-cols-[1.1fr_0.9fr] items-center gap-10 px-8 py-20 font-sans">
    <!-- Kolom Kiri: Teks & Aksi -->
    <div class="max-w-xl text-left">
      <div class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur shadow-xl">
        <span class="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
        TRIP CIRCLE — Connecting Journeys, Creating Experiences
      </div>

      <h1 class="mt-6 text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-md">
        Pesona Dataran Tinggi <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-100 to-white">
          Da Lat, Vietnam
        </span>
      </h1>

      <p class="mt-5 text-base sm:text-lg leading-relaxed text-gray-200 font-normal">
        {{ tourPackage.subtitle }}
      </p>

      <div class="mt-8 flex items-center gap-3">
        <a
          href="#pricing"
          class="inline-flex h-12 items-center justify-center rounded-2xl bg-[#fff9f1] px-8 text-xs font-bold text-[#2c221e] shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95"
        >
          Lihat Harga Paket
        </a>
        <a
          href="#itinerary"
          class="inline-flex h-12 items-center justify-center rounded-2xl border border-white/30 px-7 text-xs font-bold text-white transition-colors hover:bg-white/10"
        >
          Rencana Perjalanan
        </a>
      </div>

      <!-- Stats Bar Desktop -->
      <div class="mt-10 grid grid-cols-3 divide-x divide-white/20 border-y border-white/20 py-4">
        <div v-for="stat in stats" :key="stat.label" class="px-4 first:pl-0">
          <p class="text-2xl font-black text-white tracking-tight">{{ stat.value }}</p>
          <p class="mt-1 text-[11px] font-bold text-gray-300 uppercase tracking-wider">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <!-- Kolom Kanan: Card Showcase -->
    <div class="relative flex items-center justify-center min-h-[380px]">
      <div class="relative h-84 w-full max-w-sm rotate-2 overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
          alt="Da Lat Highlands" 
          class="h-full w-full object-cover brightness-[0.75]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6 text-white">
          <span class="text-[11px] uppercase tracking-wider text-amber-200 font-bold block mb-1">Featured Highlands</span>
          <p class="text-xl font-black">Mongoland & Fresh Garden</p>
        </div>
      </div>

      <div class="absolute top-4 left-4 rounded-2xl bg-white px-4 py-2.5 text-xs font-extrabold text-[#2c221e] shadow-xl border border-[#e7dccd]">
        🌸 Da Lat Flower Park
      </div>

      <div class="absolute -bottom-2 right-4 rounded-2xl bg-white px-4 py-2.5 text-xs font-extrabold text-[#2c221e] shadow-xl border border-[#e7dccd] flex items-center gap-1.5">
        <span class="text-emerald-600 font-black">★ 4.9</span>
        <span class="text-gray-600">Crazy House Landmark</span>
      </div>
    </div>
  </div>
</template>