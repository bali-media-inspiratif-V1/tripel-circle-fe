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
  <div class="block lg:hidden w-full max-w-full overflow-x-hidden px-5 py-10 text-center font-sans">
    <!-- 1. Tagline Badge -->
    <div class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur mb-5 shadow-lg">
      <span class="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
      TRIP CIRCLE — 4D3N Da Lat
    </div>

    <!-- 2. Judul Utama -->
    <h1 class="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-white drop-shadow-md">
      Pesona Dataran Tinggi <br />
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-100 to-white">
        Da Lat, Vietnam
      </span>
    </h1>

    <p class="mt-3 text-xs sm:text-sm leading-relaxed text-gray-200 max-w-md mx-auto font-normal">
      {{ tourPackage.subtitle }}
    </p>

    <!-- 3. Tombol Aksi Mobile -->
    <div class="mt-6 flex flex-col gap-2.5 w-full max-w-xs mx-auto">
      <a
        href="#pricing"
        class="inline-flex h-11 items-center justify-center rounded-2xl bg-[#fff9f1] px-6 text-xs font-bold text-[#2c221e] shadow-md active:scale-95 transition-transform"
      >
        Lihat Harga Paket
      </a>
      <a
        href="#itinerary"
        class="inline-flex h-11 items-center justify-center rounded-2xl border border-white/30 px-6 text-xs font-bold text-white hover:bg-white/10 transition-colors"
      >
        Rencana Perjalanan
      </a>
    </div>

    <!-- 4. Visual Card Khusus Mobile (Tidak Bikin Jebol Layar) -->
    <div class="mt-8 relative w-full max-w-sm mx-auto">
      <div class="relative h-56 w-full overflow-hidden rounded-2xl border border-white/20 shadow-xl">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
          alt="Da Lat Highlands" 
          class="h-full w-full object-cover brightness-[0.8]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <!-- Label Informasi Destinasi -->
        <div class="absolute bottom-4 left-4 right-4 text-left text-white">
          <span class="text-[10px] uppercase tracking-wider text-amber-200 font-bold block mb-0.5">
            Featured Destination
          </span>
          <p class="text-base font-black">Mongoland & Fresh Garden</p>
        </div>

        <!-- Floating Badge Kecil di Sudut Atas -->
        <div class="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-extrabold text-[#2c221e] shadow-md flex items-center gap-1">
          <span class="text-amber-500">★</span> 4.9 Da Lat Landmark
        </div>
      </div>
    </div>

    <!-- 5. Stats Bar Mobile -->
    <div class="mt-8 grid grid-cols-3 divide-x divide-white/20 border-y border-white/20 py-3 w-full max-w-sm mx-auto">
      <div v-for="stat in stats" :key="stat.label" class="px-1 text-center">
        <p class="text-lg font-black text-white tracking-tight">{{ stat.value }}</p>
        <p class="mt-0.5 text-[9px] font-bold text-gray-300 uppercase tracking-wider">{{ stat.label }}</p>
      </div>
    </div>
  </div>
</template>