<script setup lang="ts">
import { useTours } from '~/composables/useTours'

definePageMeta({
  layout: 'main'
})

const { tourPackage } = useTours()
</script>

<template>
  <main class="min-h-screen bg-[#fff9f0] text-[#082f41]">
    <!-- 1. Hero Section -->
    <Hero :tour-package="tourPackage" />

    <!-- 2. Value Proposition Faktual -->
    <section class="py-8 bg-white border-b border-[#e7dccd]">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div class="p-3">
          <div class="text-2xl mb-1"></div>
          <h4 class="text-xs font-bold text-[#082f41] uppercase tracking-wider">Udara Pegunungan</h4>
          <p class="text-xs text-[#53666f] mt-0.5">Dataran tinggi sejuk Da Lat</p>
        </div>
        <div class="p-3">
          <div class="text-2xl mb-1"></div>
          <h4 class="text-xs font-bold text-[#082f41] uppercase tracking-wider">Destinasi Unik</h4>
          <p class="text-xs text-[#53666f] mt-0.5">Mongoland & Crazy House</p>
        </div>
        <div class="p-3">
          <div class="text-2xl mb-1"></div>
          <h4 class="text-xs font-bold text-[#082f41] uppercase tracking-wider">Kuliner Lokal</h4>
          <p class="text-xs text-[#53666f] mt-0.5">Night Market & Outdoor BBQ</p>
        </div>
        <div class="p-3">
          <div class="text-2xl mb-1"></div>
          <h4 class="text-xs font-bold text-[#082f41] uppercase tracking-wider">Guide Profesional</h4>
          <p class="text-xs text-[#53666f] mt-0.5">Pemandu Berbahasa Inggris</p>
        </div>
      </div>
    </section>

    <!-- 3. Highlight Destinasi -->
    <section id="highlights" class="py-16 px-6 max-w-6xl mx-auto scroll-mt-20">
      <div class="max-w-xl mx-auto text-center mb-10">
        <p class="text-xs font-bold uppercase tracking-widest text-[#ff643f]">Package Highlights</p>
        <h2 class="mt-1.5 font-serif text-2xl sm:text-3xl font-bold text-[#082f41]">
          Destinasi Pilihan Da Lat
        </h2>
        <p class="mt-2 text-xs sm:text-sm text-[#53666f]">
          Seluruh tiket masuk objek wisata di bawah ini telah tercakup dalam program perjalanan.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div 
          v-for="(hl, index) in tourPackage.highlights" 
          :key="index"
          class="bg-white rounded-2xl p-6 border border-[#e7dccd] shadow-sm flex flex-col justify-between"
        >
          <div>
            <span class="inline-block w-8 h-8 rounded-xl bg-[#fff9f0] border border-[#e7dccd] text-center leading-8 text-xs font-bold text-[#082f41] mb-3">
              0{{ index + 1 }}
            </span>
            <p class="text-sm font-bold text-[#082f41] leading-snug">{{ hl }}</p>
          </div>
          <p class="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-emerald-600">
            ✓ Tiket Masuk Termasuk
          </p>
        </div>
      </div>
    </section>

    <!-- 4. Itinerary Component -->
    <Itinerary :itinerary="tourPackage.itinerary" />

    <!-- 5. Hotel & Harga dengan Disclaimer Faktual -->
    <section id="pricing" class="py-16 px-6 max-w-5xl mx-auto scroll-mt-20">
      <div class="max-w-xl mx-auto text-center mb-8">
        <p class="text-xs font-bold uppercase tracking-widest text-[#ff643f]">Pricing Options</p>
        <h2 class="mt-1.5 font-serif text-2xl sm:text-3xl font-bold text-[#082f41]">
          Pilihan Kategori Hotel
        </h2>
        <p class="mt-2 text-xs sm:text-sm text-[#53666f]">
          {{ tourPackage.paxNote }}
        </p>
      </div>

      <!-- Kotak Disclaimer Masa Berlaku Harga
      <div class="mb-8 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-left max-w-2xl mx-auto flex items-start gap-3">
        <span class="text-amber-700 text-base">⚠️</span>
        <div class="text-xs text-amber-950 leading-relaxed">
          <span class="font-bold block mb-0.5">Catatan Penting Harga:</span>
          {{ tourPackage.pricingNote }}
        </div>
      </div> -->

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div 
          v-for="p in tourPackage.prices" 
          :key="p.stars"
          class="bg-white rounded-3xl p-8 border border-[#e7dccd] shadow-sm flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#082f41] bg-[#fff9f0] px-3 py-1 rounded-md border border-[#e7dccd]">
                Hotel Bintang {{ p.stars }}
              </span>
              <div class="flex text-amber-400 text-sm">
                <span v-for="s in p.stars" :key="s">★</span>
              </div>
            </div>

            <h3 class="font-serif text-xl font-bold text-[#082f41] mb-1">{{ p.hotelName }}</h3>
            <p class="text-xs text-[#53666f] mb-6">Akomodasi 3 malam sesuai pilihan kategori atau hotel setara.</p>

            <div class="bg-[#fff9f0] p-5 rounded-2xl border border-[#e7dccd] mb-6">
              <span class="text-[10px] text-[#53666f] uppercase font-bold block">Estimasi Harga per Orang:</span>
              <div class="flex items-baseline gap-1 mt-1">
                <span class="text-xs font-bold text-[#53666f]">Rp</span>
                <span class="text-3xl font-bold text-[#082f41] tracking-tight">{{ p.price.toLocaleString('id-ID') }}</span>
                <span class="text-xs text-[#53666f]">/ pax</span>
              </div>
              <span class="text-[10px] text-[#53666f] block mt-2">
                *Tarif bersih berdasarkan {{ tourPackage.paxNote }}
              </span>
            </div>
          </div>

          <a 
            :href="`https://wa.me/6281234567890?text=Halo%20TRIP%20CIRCLE,%20saya%20ingin%20konfirmasi%20harga%20dan%20reservasi%20Paket%20Da%20Lat%204H3M%20(Hotel%20Bintang%20${p.stars})`" 
            target="_blank"
            class="w-full text-center bg-[#082f41] hover:bg-[#062432] text-white text-xs font-bold py-3.5 rounded-2xl shadow-md transition-all"
          >
            Konfirmasi Harga & Reservasi
          </a>
        </div>
      </div>
    </section>

    <!-- 6. Fasilitas & Ketentuan Anak (Tanpa Grid Timpang) -->
    <section id="includes" class="py-12 px-6 max-w-5xl mx-auto pb-24 scroll-mt-20">
      <div class="bg-white rounded-3xl p-8 border border-[#e7dccd] shadow-sm mb-8">
        <h3 class="font-serif text-xl font-bold text-center text-[#082f41] mb-8">Fasilitas & Layanan Paket</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Includes -->
          <div class="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100">
            <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-950 mb-4 flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">✓</span>
              Harga Paket Sudah Termasuk:
            </h4>
            <ul class="space-y-2.5 text-xs text-emerald-950">
              <li v-for="(inc, i) in tourPackage.includes" :key="i" class="flex items-start gap-2 leading-relaxed">
                <span class="text-emerald-600 font-bold">•</span>
                <span>{{ inc }}</span>
              </li>
            </ul>
          </div>

          <!-- Excludes -->
          <div class="bg-rose-50/60 p-6 rounded-2xl border border-rose-100">
            <h4 class="text-xs font-bold uppercase tracking-wider text-rose-950 mb-4 flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs">✕</span>
              Harga Paket Belum Termasuk:
            </h4>
            <ul class="space-y-2.5 text-xs text-rose-950">
              <li v-for="(exc, i) in tourPackage.excludes" :key="i" class="flex items-start gap-2 leading-relaxed">
                <span class="text-rose-500 font-bold">•</span>
                <span>{{ exc }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Child Policy List View: 5 Poin Proporsional & Terbaca Sempurna -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7dccd] shadow-sm">
        <h4 class="font-bold text-xs uppercase tracking-wider text-[#082f41] mb-4 flex items-center gap-2">
          <span></span> Kebijakan Anak (Child Policy)
        </h4>
        
        <div class="divide-y divide-[#e7dccd]/70 border border-[#e7dccd] rounded-2xl overflow-hidden text-xs">
          <div 
            v-for="(policy, idx) in tourPackage.childPolicy" 
            :key="idx" 
            class="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#fff9f0]/40 hover:bg-[#fff9f0] transition-colors"
          >
            <div>
              <p class="font-bold text-[#082f41]">{{ policy.category }}</p>
              <p class="text-[11px] text-[#53666f] mt-0.5">{{ policy.condition }}</p>
            </div>
            <span class="font-bold text-xs px-3 py-1 rounded-md bg-white border border-[#e7dccd] text-[#082f41] self-start sm:self-auto">
              {{ policy.rate }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>