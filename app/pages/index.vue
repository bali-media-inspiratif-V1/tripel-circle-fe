<script setup lang="ts">
import { useTours } from '~/composables/useTours'

definePageMeta({
  layout: 'main'
})

const { tourPackage } = useTours()
</script>

<template>
  <main class="min-h-screen bg-[#faf8f5] text-[#2c221e]">
    <!-- 1. Hero Modular -->
    <Hero :tour-package="tourPackage" />

    <!-- 2. Highlights -->
    <section id="highlights" class="py-16 px-6 max-w-6xl mx-auto scroll-mt-20">
      <div class="max-w-xl mx-auto text-center mb-10">
        <p class="text-xs font-bold uppercase tracking-widest text-[#ff643f]">Highlights</p>
        <h2 class="mt-1 text-2xl sm:text-3xl font-black text-[#2c221e]">
          Destinasi Pilihan di Da Lat
        </h2>
        <p class="mt-2 text-xs sm:text-sm text-[#5a4d44]">
          Rangkaian objek wisata terbaik yang telah terangkum dalam itinerary 4 hari Anda.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div 
          v-for="(hl, index) in tourPackage.highlights" 
          :key="index"
          class="bg-white rounded-2xl p-6 border border-[#e7dccd] shadow-sm flex flex-col justify-between"
        >
          <div>
            <span class="inline-block w-8 h-8 rounded-xl bg-[#fff9f1] border border-[#e7dccd] text-center leading-8 text-xs font-bold mb-3">
              0{{ index + 1 }}
            </span>
            <p class="text-sm font-bold text-[#2c221e]">{{ hl }}</p>
          </div>
          <p class="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-emerald-600">
            ✓ Tiket Masuk Termasuk
          </p>
        </div>
      </div>
    </section>

    <!-- 3. Itinerary Component -->
    <Itinerary :itinerary="tourPackage.itinerary" />

    <!-- 4. Pricing & Hotels -->
    <section id="pricing" class="py-16 px-6 max-w-5xl mx-auto scroll-mt-20">
      <div class="max-w-xl mx-auto text-center mb-10">
        <p class="text-xs font-bold uppercase tracking-widest text-[#ff643f]">Pricing Options</p>
        <h2 class="mt-1 text-2xl sm:text-3xl font-black text-[#2c221e]">
          Pilihan Kategori Hotel
        </h2>
        <p class="mt-2 text-xs sm:text-sm text-[#5a4d44]">
          Berdasarkan kuota grup {{ tourPackage.minPax }}.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="p in tourPackage.prices" 
          :key="p.stars"
          class="bg-white rounded-3xl p-8 border border-[#e7dccd] shadow-sm flex flex-col justify-between"
        >
          <div>
            <span class="text-[11px] font-bold uppercase tracking-wider text-[#5a4d44] bg-[#fff9f1] px-3 py-1 rounded-md border border-[#e7dccd]">
              Hotel Bintang {{ p.stars }}
            </span>
            <h3 class="text-2xl sm:text-3xl font-black mt-3 mb-1 text-[#2c221e]">{{ p.hotelName }}</h3>
            <p class="text-xs text-gray-500 mb-6">Akomodasi berfasilitas lengkap di area strategis.</p>

            <div class="bg-[#fff9f1] p-4 rounded-2xl border border-[#e7dccd]/60 mb-6">
              <span class="text-[10px] text-gray-500 uppercase font-bold block">Harga per Orang:</span>
              <div class="flex items-baseline gap-1 mt-1">
                <span class="text-xs font-bold text-gray-500">Rp</span>
                <span class="text-3xl font-black text-[#2c221e]">{{ p.price.toLocaleString('id-ID') }}</span>
                <span class="text-xs text-gray-500">/ pax</span>
              </div>
              <span class="text-[10px] text-gray-400 block mt-1">*Konfirmasi ketersediaan saat reservasi</span>
            </div>
          </div>

          <a 
            :href="`https://wa.me/6281234567890?text=Halo%20TRIP%20CIRCLE,%20saya%20tertarik%20dengan%20Paket%20Da%20Lat%204H3M%20(Hotel%20Bintang%20${p.stars})`" 
            target="_blank"
            class="w-full text-center bg-[#2c221e] hover:bg-[#43352f] text-white text-xs font-bold py-3.5 rounded-xl transition-all"
          >
            Pesan Via WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- 5. Fasilitas & Child Policy -->
    <section id="includes" class="py-12 px-6 max-w-5xl mx-auto pb-20 scroll-mt-20">
      <div class="bg-white rounded-3xl p-8 border border-[#e7dccd] shadow-sm mb-8">
        <h3 class="text-2xl sm:text-3xl font-black text-center mb-8">Fasilitas Paket</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
            <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3 flex items-center gap-1.5">
              <span>✓</span> Sudah Termasuk:
            </h4>
            <ul class="space-y-2 text-xs text-emerald-950">
              <li v-for="(inc, i) in tourPackage.includes" :key="i" class="flex gap-2">
                <span>•</span><span>{{ inc }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-rose-50/50 p-5 rounded-2xl border border-rose-100">
            <h4 class="text-xs font-bold uppercase tracking-wider text-rose-900 mb-3 flex items-center gap-1.5">
              <span>✕</span> Belum Termasuk:
            </h4>
            <ul class="space-y-2 text-xs text-rose-950">
              <li v-for="(exc, i) in tourPackage.excludes" :key="i" class="flex gap-2">
                <span>•</span><span>{{ exc }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Child Policy -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7dccd] shadow-sm">
        <h4 class="font-bold text-xs uppercase tracking-wider text-[#2c221e] mb-4">
           Ketentuan Tarif Anak (Child Policy)
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div v-for="(policy, idx) in tourPackage.childPolicy" :key="idx" class="p-3.5 rounded-xl bg-[#faf8f5] border border-[#e7dccd]">
            <p class="font-bold text-[#2c221e] mb-1">{{ policy.category }}</p>
            <p class="text-gray-600">{{ policy.rate }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>