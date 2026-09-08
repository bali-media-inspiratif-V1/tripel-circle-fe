<template>
  <div class="min-h-screen bg-[#fff9f1] text-[#2c221e]">
    <!-- 1. HERO SECTION -->
    <section class="relative py-16 sm:py-24 px-6 text-center max-w-5xl mx-auto">
      <span class="inline-block bg-[#e7dccd] text-[#2c221e] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
        Da Lat Travel Package
      </span>
      <h1 class="text-4xl sm:text-6xl font-black tracking-tight mb-6 text-[#2c221e]">
        Jelajahi Da Lat — 4 Hari 3 Malam
      </h1>
      <p class="text-lg sm:text-xl text-[#5a4d44] max-w-2xl mx-auto mb-8 leading-relaxed">
        {{ tourPackage.subtitle }}
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a 
          href="#pricing" 
          class="bg-[#2c221e] text-[#fff9f1] hover:bg-[#43352f] font-bold px-8 py-3.5 rounded-full transition-all text-sm"
        >
          Lihat Harga Paket
        </a>
        <a 
          href="#itinerary" 
          class="border border-[#e7dccd] bg-white text-[#2c221e] hover:bg-[#e7dccd]/30 font-bold px-8 py-3.5 rounded-full transition-all text-sm"
        >
          Rencana Perjalanan
        </a>
      </div>
    </section>

    <!-- 2. HIGHLIGHTS SECTION -->
    <section id="highlights" class="py-12 px-6 max-w-6xl mx-auto">
      <div class="bg-white rounded-3xl p-8 sm:p-12 border border-[#e7dccd] shadow-sm">
        <h2 class="text-2xl font-bold mb-6 text-center">Highlight Perjalanan</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            v-for="(hl, index) in tourPackage.highlights" 
            :key="index" 
            class="flex items-start gap-3 p-4 rounded-xl bg-[#fff9f1]"
          >
            <span class="text-emerald-600 font-bold">✓</span>
            <span class="text-sm font-medium text-[#5a4d44]">{{ hl }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. ITINERARY (PAKAI KOMPONEN MODULAR) -->
    <Itinerary :itinerary="tourPackage.itinerary" />

    <!-- 4. PRICING SECTION -->
    <section id="pricing" class="py-12 px-6 max-w-5xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-bold text-center mb-2">Pilihan Harga Paket</h2>
      <p class="text-center text-xs text-[#5a4d44] mb-8">
        *Berdasarkan minimum {{ tourPackage.minPax }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="p in tourPackage.prices" 
          :key="p.stars" 
          class="bg-white rounded-2xl p-8 border border-[#e7dccd] text-center flex flex-col justify-between"
        >
          <div>
            <span class="text-xs font-bold uppercase text-[#5a4d44] tracking-wider">
              Hotel Bintang {{ p.stars }}
            </span>
            <h3 class="text-lg font-bold mt-1 mb-4">{{ p.hotelName }}</h3>
            <div class="text-3xl font-black text-[#2c221e] mb-2">
              Rp {{ p.price.toLocaleString('id-ID') }}
            </div>
            <span class="text-xs text-[#5a4d44]">/ pax</span>
          </div>
          <a 
            :href="`https://wa.me/6281234567890?text=Halo%20TRIP%20CIRCLE,%20saya%20tertarik%20dengan%20Paket%20Da%20Lat%204H3M%20(Hotel%20Bintang%20${p.stars})`" 
            target="_blank" 
            class="mt-6 block bg-[#2c221e] text-[#fff9f1] font-bold py-3 rounded-xl hover:bg-[#43352f] transition-all text-sm"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </section>

    <!-- 5. INCLUDES / EXCLUDES -->
    <section id="includes" class="py-12 px-6 max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-2xl border border-[#e7dccd]">
          <h3 class="font-bold text-lg mb-4 text-emerald-700">Harga Paket Sudah Termasuk:</h3>
          <ul class="space-y-2">
            <li v-for="(inc, i) in tourPackage.includes" :key="i" class="text-xs text-[#5a4d44] flex items-start gap-2">
              <span class="text-emerald-600 font-bold">✓</span> {{ inc }}
            </li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-[#e7dccd]">
          <h3 class="font-bold text-lg mb-4 text-rose-700">Harga Paket Belum Termasuk:</h3>
          <ul class="space-y-2">
            <li v-for="(exc, i) in tourPackage.excludes" :key="i" class="text-xs text-[#5a4d44] flex items-start gap-2">
              <span class="text-rose-600 font-bold">✕</span> {{ exc }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useTours } from '~/composables/useTours'

definePageMeta({
  layout: 'main'
})

const { tourPackage } = useTours()
</script>