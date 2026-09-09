<script setup lang="ts">
import type { TourPackage } from '~/composables/useTours'

defineProps<{
  tourPackage: TourPackage
}>()

const stats = [
  { value: "4D3N", label: "Durasi Program" },
  { value: "8–10 Pax", label: "Kapasitas Grup" },
  { value: "Termasuk", label: "Tiket Objek Wisata" },
]
</script>

<template>
  <div class="hidden lg:grid mx-auto w-full max-w-7xl grid-cols-[1.15fr_0.85fr] items-center gap-12 px-8 py-20 font-sans">
    <div class="max-w-xl text-left">
      <div class="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur shadow-sm">
        <span class="h-2 w-2 rounded-full bg-[#ffc145]"></span>
        TRIP CIRCLE — Connecting Journeys, Creating Experiences
      </div>

      <h1 class="mt-6 font-serif text-5xl lg:text-6xl font-bold leading-[1.1] text-white drop-shadow-md">
        Pesona Dataran Tinggi <br />
        <span class="text-[#ffc145]">Da Lat, Vietnam</span>
      </h1>

      <p class="mt-5 text-base leading-relaxed text-white/90 font-normal">
        {{ tourPackage.subtitle }}
      </p>

      <div class="mt-8 flex items-center gap-4">
        <a
          href="#pricing"
          class="inline-flex h-12 items-center justify-center rounded-full bg-[#ff643f] hover:bg-[#e05330] px-8 text-xs font-bold text-white shadow-xl transition-all hover:-translate-y-0.5 active:scale-95"
        >
          Lihat Pilihan Hotel
        </a>
        <a
          href="#itinerary"
          class="inline-flex h-12 items-center justify-center rounded-full border border-white/40 px-7 text-xs font-bold text-white hover:bg-white/10 transition-colors"
        >
          Jadwal Perjalanan
        </a>
      </div>

      <!-- Stats Bar Faktual Proposal -->
      <div class="mt-10 grid grid-cols-3 divide-x divide-white/20 border-y border-white/20 py-4 text-left">
        <div v-for="stat in stats" :key="stat.label" class="px-4 first:pl-0">
          <p class="font-serif text-2xl font-bold text-white">{{ stat.value }}</p>
          <p class="mt-1 text-[10px] font-bold text-white/75 uppercase tracking-wider">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <!-- Visual Card Showcase Da Lat -->
    <div class="relative flex items-center justify-center min-h-[400px]">
      <div class="relative h-88 w-full max-w-sm rotate-2 overflow-hidden rounded-[28px] border border-white/25 bg-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
          alt="Da Lat Highlands Landscape" 
          class="h-full w-full object-cover brightness-[0.85]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#082f41]/90 via-black/20 to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6 text-white">
          <span class="text-[10px] uppercase tracking-wider text-[#ffc145] font-bold block mb-1">Destinasi Utama</span>
          <p class="text-xl font-bold">Mongoland & Fresh Garden</p>
          <p class="text-xs text-white/80 mt-1">4 Hari 3 Malam | 8–10 Peserta</p>
        </div>
      </div>

      <!-- Badge Faktual (Bukan rating fiktif) -->
      <div class="absolute top-4 left-2 rounded-2xl bg-white px-4 py-2.5 text-xs font-bold text-[#082f41] shadow-xl border border-[#e7dccd] flex items-center gap-2">
        <span>🌸</span> Da Lat Flower Park
      </div>

      <div class="absolute -bottom-2 right-2 rounded-2xl bg-white px-4 py-2.5 text-xs font-bold text-[#082f41] shadow-xl border border-[#e7dccd]">
        Landmark Crazy House
      </div>
    </div>
  </div>
</template>